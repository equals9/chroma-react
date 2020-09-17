import { getContrastRatio } from '@material-ui/core/styles/colorManipulator';
import * as React from 'react';
import { makeStyles } from '../../../src/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: theme.spacing(2),
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
}));

interface PaletteProps {
  name: string;
  value: string;
  isMain?: boolean;
}

export const ColorValue: React.FunctionComponent<PaletteProps> = ({
  name,
  value,
  isMain,
}) => {
  const classes = useStyles({});

  const whiteRatio = getContrastRatio('#fff', value);
  const blackRatio = getContrastRatio(value, '#000');
  const textColor = whiteRatio > blackRatio ? '#fff' : '#000';

  return (
    <div
      className={classes.root}
      style={{
        height: isMain ? 100 : 'auto',
        backgroundColor: value,
        color: textColor,
      }}
    >
      <div>{name}</div>
      <div>{value}</div>
    </div>
  );
};
