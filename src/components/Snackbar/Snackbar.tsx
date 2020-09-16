import { GetClasses } from '../../typeUtils';
import { makeStyles } from '../../styles';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Text } from '../Text';
import clsx from 'clsx';
import * as React from 'react';
import { IconButton } from '../IconButton';
import { X } from '../../icons/lined';
import { NotificationStatusType } from '../_private/notificationTypes';

export const SnackbarStylesKey = 'ChromaSnackbar';

const useStyles = makeStyles(
  (theme) => ({
    root: {
      color: theme.palette.text.secondary,
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      backgroundColor: theme.palette.common.white,
      borderRadius: 'unset',
      position: 'fixed',
      display: 'flex',
      alignItems: 'center',
      boxShadow: theme.boxShadows.tooltip,
      top: 0,
      right: 0,
      zIndex: 1500,
      pointerEvents: 'auto',
      '@media screen and (max-width: 480px)': {
        top: 'unset',
        bottom: 0,
        width: '100%',
      },
    },
    infoModifier: {
      borderLeft: `10px solid ${theme.palette.blue.main}`,
    },
    errorModifier: {
      borderLeft: `10px solid ${theme.palette.red.main}`,
    },
    warningModifier: {
      borderLeft: `10px solid ${theme.palette.yellow.main}`,
    },
    successModifier: {
      borderLeft: `10px solid ${theme.palette.green.main}`,
    },
    icon: {
      width: theme.pxToRem(16),
      height: theme.pxToRem(16),
      marginRight: theme.spacing(1),
    },
    title: {
      color: theme.palette.black[600],
    },
    closeButton: {
      marginLeft: theme.spacing(2),
      borderLeft: `1px solid ${theme.palette.divider}`,
    },
  }),
  { name: SnackbarStylesKey }
);

export type SnackbarClasses = GetClasses<typeof useStyles>;

export interface SnackbarProps {
  duration?: number;
  className?: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  isOpen?: boolean;
  allowDismiss?: boolean;
  onClose?: () => void;
  role?: 'alert' | 'status';
  statusType?: NotificationStatusType;
  title?: string;
}

export const Snackbar: React.FC<SnackbarProps> = React.forwardRef<
  HTMLDivElement,
  SnackbarProps
>(
  (
    {
      className,
      duration = 6000,
      icon: Icon,
      isOpen = false,
      allowDismiss = false,
      onClose,
      role = 'status',
      statusType = 'info',
      title,
      children,
      ...rootProps
    },
    ref
  ) => {
    const classes = useStyles({});

    const shouldReduceMotion = useReducedMotion();

    const [snackbarTimeout, setSnackbarTimeout] = React.useState<number | null>(
      duration
    );

    // Event handlers
    const onMouseEnter = () => setSnackbarTimeout(null);
    const onMouseLeave = () => setSnackbarTimeout(duration);
    const closeSnackbar = React.useCallback(() => {
      onClose && onClose();
    }, [onClose]);

    // Use a ref to close our Snackbar after the timeout
    const callbackRef = React.useRef<() => void | null>();

    React.useEffect(() => {
      if (!callbackRef.current) {
        callbackRef.current = closeSnackbar;
      }
    }, [closeSnackbar]);

    React.useEffect(() => {
      // Ignore setting up a timer for the Snackbar
      // if one is not isOpen.
      if (!isOpen) {
        return;
      }

      const tick = () => {
        if (callbackRef.current) {
          callbackRef.current();
        }
      };

      if (snackbarTimeout) {
        const id = setTimeout(tick, snackbarTimeout);
        return () => clearTimeout(id);
      }
    }, [snackbarTimeout, isOpen]);

    return (
      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            ref={ref}
            className={clsx(
              classes.root,
              {
                [classes.infoModifier]: statusType === 'info',
                [classes.errorModifier]: statusType === 'error',
                [classes.warningModifier]: statusType === 'warning',
                [classes.successModifier]: statusType === 'success',
              },
              className
            )}
            aria-live={role === 'alert' ? 'assertive' : 'polite'}
            role={role}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            positionTransition
            initial={
              shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -40 }
            }
            animate={
              shouldReduceMotion
                ? { opacity: 1 }
                : {
                    opacity: 1,
                    y: 0,
                  }
            }
            exit={
              shouldReduceMotion
                ? { opacity: 0 }
                : {
                    opacity: 0,
                    y: 60,
                    transition: { duration: 0.25, ease: 'easeIn' },
                  }
            }
            {...rootProps}
          >
            {!!Icon && <Icon role="img" aria-hidden className={classes.icon} />}
            {children ? (
              children
            ) : (
              <Text className={classes.title}>{title}</Text>
            )}
            {allowDismiss && (
              <>
                <IconButton
                  className={classes.closeButton}
                  aria-label="Close Notification"
                  size={0}
                  paddingTop={0}
                  paddingBottom={0}
                  paddingRight={0}
                  icon={X}
                  onClick={closeSnackbar}
                />
              </>
            )}
          </motion.div>
        ) : null}
      </AnimatePresence>
    );
  }
);
