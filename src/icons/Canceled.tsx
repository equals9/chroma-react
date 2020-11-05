import * as React from 'react';
import { useTheme } from '../styles/index';
import { FilledIconProps } from './FilledIconProps';

export const Canceled: React.FunctionComponent<FilledIconProps> = ({
  size = 24,
  useCurrentColor = false,
  ...rootProps
}) => {
  const randomlyGeneratedMaskId =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);
  const { palette } = useTheme();

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-icon="canceled-filled"
      {...rootProps}
    >
      <mask id={randomlyGeneratedMaskId} fill={palette.common.white}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.3905 17.7318C22.4115 16.0626 23 14.1 23 12C23 5.92487 18.0751 1 12 1C9.89998 1 7.93741 1.58848 6.26819 2.60952L11 7.34133V5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5V9.34133L16.8759 13.2173C17.0303 12.5566 17.0414 11.869 16.905 11.1991C16.714 10.2613 16.242 9.39651 15.5446 8.7154C15.1495 8.3295 15.142 7.69638 15.5279 7.30128C15.9138 6.90618 16.547 6.89872 16.9421 7.28461C17.9225 8.24223 18.593 9.46514 18.8648 10.8001C19.1366 12.1351 18.9966 13.5187 18.4636 14.7747C18.4606 14.7818 18.4576 14.7888 18.4546 14.7959L21.3905 17.7318ZM15.9502 15.12L12.9877 12.1574C12.9122 12.6349 12.4987 13 12 13C11.4477 13 11 12.5523 11 12V10.1698L8.75377 7.92352C8.77546 8.20827 8.67567 8.50025 8.45539 8.7154C7.75802 9.39651 7.28597 10.2613 7.09505 11.1991C6.90416 12.1367 7.00206 13.1087 7.37747 13.9934C7.75299 14.8784 8.39051 15.6387 9.21315 16.1753C10.036 16.7121 11.0059 17 12 17C12.9941 17 13.964 16.7121 14.7869 16.1753C15.2332 15.8841 15.6251 15.5271 15.9502 15.12ZM7.83316 7.00292C7.55635 6.98179 7.27216 7.07539 7.05795 7.28461C6.07748 8.24223 5.40703 9.46514 5.13525 10.8001C4.86344 12.1351 5.0034 13.5187 5.53636 14.7747C6.06921 16.0304 6.96976 17.0998 8.12042 17.8504C9.27083 18.6008 10.6209 19 12 19C13.3791 19 14.7292 18.6008 15.8796 17.8504C16.4406 17.4844 16.9422 17.0426 17.3707 16.5404L20.1823 19.352C18.1686 21.5916 15.2488 23 12 23C5.92487 23 1 18.0751 1 12C1 8.7512 2.40841 5.83136 4.64796 3.81772L7.83316 7.00292Z"
        />
      </mask>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.3905 17.7318C22.4115 16.0626 23 14.1 23 12C23 5.92487 18.0751 1 12 1C9.89998 1 7.93741 1.58848 6.26819 2.60952L11 7.34133V5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5V9.34133L16.8759 13.2173C17.0303 12.5566 17.0414 11.869 16.905 11.1991C16.714 10.2613 16.242 9.39651 15.5446 8.7154C15.1495 8.3295 15.142 7.69638 15.5279 7.30128C15.9138 6.90618 16.547 6.89872 16.9421 7.28461C17.9225 8.24223 18.593 9.46514 18.8648 10.8001C19.1366 12.1351 18.9966 13.5187 18.4636 14.7747C18.4606 14.7818 18.4576 14.7888 18.4546 14.7959L21.3905 17.7318ZM15.9502 15.12L12.9877 12.1574C12.9122 12.6349 12.4987 13 12 13C11.4477 13 11 12.5523 11 12V10.1698L8.75377 7.92352C8.77546 8.20827 8.67567 8.50025 8.45539 8.7154C7.75802 9.39651 7.28597 10.2613 7.09505 11.1991C6.90416 12.1367 7.00206 13.1087 7.37747 13.9934C7.75299 14.8784 8.39051 15.6387 9.21315 16.1753C10.036 16.7121 11.0059 17 12 17C12.9941 17 13.964 16.7121 14.7869 16.1753C15.2332 15.8841 15.6251 15.5271 15.9502 15.12ZM7.83316 7.00292C7.55635 6.98179 7.27216 7.07539 7.05795 7.28461C6.07748 8.24223 5.40703 9.46514 5.13525 10.8001C4.86344 12.1351 5.0034 13.5187 5.53636 14.7747C6.06921 16.0304 6.96976 17.0998 8.12042 17.8504C9.27083 18.6008 10.6209 19 12 19C13.3791 19 14.7292 18.6008 15.8796 17.8504C16.4406 17.4844 16.9422 17.0426 17.3707 16.5404L20.1823 19.352C18.1686 21.5916 15.2488 23 12 23C5.92487 23 1 18.0751 1 12C1 8.7512 2.40841 5.83136 4.64796 3.81772L7.83316 7.00292Z"
        fill={useCurrentColor ? 'currentColor' : palette.orange.main}
      />
      <path
        d="M21.3905 17.7318L20.6834 18.4389L21.5811 19.3366L22.2435 18.2536L21.3905 17.7318ZM6.26819 2.60952L5.74638 1.75646L4.66338 2.41892L5.56108 3.31663L6.26819 2.60952ZM11 7.34133L10.2929 8.04844L12 9.75555V7.34133H11ZM13 9.34133H12V9.75555L12.2929 10.0484L13 9.34133ZM16.8759 13.2173L16.1688 13.9244L17.4405 15.196L17.8497 13.4448L16.8759 13.2173ZM16.905 11.1991L15.9251 11.3986L15.9251 11.3986L16.905 11.1991ZM15.5446 8.7154L14.8459 9.43079L14.8459 9.43079L15.5446 8.7154ZM15.5279 7.30128L16.2433 8L16.2433 8L15.5279 7.30128ZM16.9421 7.28461L16.2433 8L16.2433 8L16.9421 7.28461ZM18.8648 10.8001L19.8446 10.6006L19.8446 10.6006L18.8648 10.8001ZM18.4636 14.7747L17.5431 14.384L17.5431 14.3841L18.4636 14.7747ZM18.4546 14.7959L17.5354 14.4021L17.2688 15.0243L17.7475 15.503L18.4546 14.7959ZM15.9502 15.12L16.7316 15.744L17.2897 15.0452L16.6573 14.4129L15.9502 15.12ZM12.9877 12.1574L13.6948 11.4503L12.3066 10.0621L12 12.0012L12.9877 12.1574ZM11 10.1698H12V9.75555L11.7071 9.46265L11 10.1698ZM8.75377 7.92352L9.46087 7.21642L7.55156 5.30711L7.75665 7.99948L8.75377 7.92352ZM8.45539 8.7154L9.15411 9.43079L9.15411 9.43079L8.45539 8.7154ZM7.09505 11.1991L8.07494 11.3986L8.07494 11.3986L7.09505 11.1991ZM7.37747 13.9934L6.45691 14.384L6.45691 14.384L7.37747 13.9934ZM9.21315 16.1753L8.66678 17.0128L8.66679 17.0128L9.21315 16.1753ZM14.7869 16.1753L15.3332 17.0128L15.3332 17.0128L14.7869 16.1753ZM7.83316 7.00292L7.75706 8.00002L10.45 8.20554L8.54027 6.29581L7.83316 7.00292ZM7.05795 7.28461L7.75667 8L7.75667 8L7.05795 7.28461ZM5.13525 10.8001L4.15535 10.6006L4.15535 10.6006L5.13525 10.8001ZM5.53636 14.7747L6.45691 14.384L6.45691 14.384L5.53636 14.7747ZM8.12042 17.8504L7.57406 18.6879L7.57406 18.6879L8.12042 17.8504ZM15.8796 17.8504L16.4259 18.6879L16.4259 18.6879L15.8796 17.8504ZM17.3707 16.5404L18.0778 15.8333L17.3125 15.068L16.61 15.8914L17.3707 16.5404ZM20.1823 19.352L20.9259 20.0206L21.5599 19.3155L20.8894 18.6449L20.1823 19.352ZM4.64796 3.81772L5.35507 3.11062L4.68453 2.44007L3.97936 3.0741L4.64796 3.81772ZM22.2435 18.2536C23.3579 16.4318 24 14.2893 24 12H22C22 13.9107 21.4651 15.6934 20.5374 17.21L22.2435 18.2536ZM24 12C24 5.37258 18.6274 0 12 0V2C17.5228 2 22 6.47715 22 12H24ZM12 0C9.71065 0 7.56821 0.642066 5.74638 1.75646L6.79 3.46258C8.30661 2.53489 10.0893 2 12 2V0ZM5.56108 3.31663L10.2929 8.04844L11.7071 6.63423L6.9753 1.90242L5.56108 3.31663ZM12 7.34133V5H10V7.34133H12ZM12 5V3C10.8954 3 10 3.89543 10 5H12ZM12 5H14C14 3.89543 13.1046 3 12 3V5ZM12 5V9.34133H14V5H12ZM12.2929 10.0484L16.1688 13.9244L17.583 12.5102L13.7071 8.63423L12.2929 10.0484ZM17.8497 13.4448C18.0367 12.6445 18.0501 11.8112 17.8849 10.9996L15.9251 11.3986C16.0326 11.9268 16.0239 12.4687 15.9022 12.9897L17.8497 13.4448ZM17.8849 10.9996C17.6535 9.86323 17.0823 8.81938 16.2433 8L14.8459 9.43079C15.4017 9.97364 15.7746 10.6594 15.9251 11.3986L17.8849 10.9996ZM16.2433 8L16.2433 8L14.8125 6.60256C14.0408 7.39276 14.0557 8.659 14.8459 9.43079L16.2433 8ZM16.2433 8L16.2433 8L17.6408 6.56922C16.8506 5.79743 15.5843 5.81236 14.8125 6.60256L16.2433 8ZM16.2433 8C17.0823 8.81938 17.6535 9.86323 17.8849 10.9996L19.8446 10.6006C19.5324 9.06705 18.7628 7.66508 17.6408 6.56922L16.2433 8ZM17.8849 10.9996C18.1162 12.1359 17.9973 13.3137 17.5431 14.384L19.3842 15.1653C19.9959 13.7236 20.1569 12.1344 19.8446 10.6006L17.8849 10.9996ZM17.5431 14.3841C17.5405 14.3901 17.5379 14.3961 17.5354 14.4021L19.3738 15.1897C19.3773 15.1815 19.3808 15.1734 19.3842 15.1652L17.5431 14.3841ZM17.7475 15.503L20.6834 18.4389L22.0976 17.0247L19.1617 14.0888L17.7475 15.503ZM16.6573 14.4129L13.6948 11.4503L12.2806 12.8645L15.2431 15.8271L16.6573 14.4129ZM12 12.0012C12.0003 11.9988 12.0014 11.9988 11.9997 12.0003C11.9991 12.0008 11.9991 12.0006 11.9999 12.0003C12.0013 11.9998 12.0018 12 12 12V14C12.9984 14 13.8243 13.2694 13.9754 12.3136L12 12.0012ZM12 12H10C10 13.1046 10.8954 14 12 14V12ZM12 12V10.1698H10V12H12ZM11.7071 9.46265L9.46087 7.21642L8.04666 8.63063L10.2929 10.8769L11.7071 9.46265ZM7.75665 7.99948L7.75667 8L9.15411 9.43079C9.59489 9.00029 9.79407 8.41462 9.75088 7.84757L7.75665 7.99948ZM7.75667 8C6.91774 8.81938 6.3465 9.86323 6.11515 10.9996L8.07494 11.3986C8.22544 10.6594 8.59831 9.97364 9.15411 9.43079L7.75667 8ZM6.11515 10.9996C5.8838 12.1359 6.00273 13.3137 6.45691 14.384L8.29802 13.6028C8.00139 12.9038 7.92452 12.1374 8.07494 11.3986L6.11515 10.9996ZM6.45691 14.384C6.91109 15.4544 7.68012 16.3692 8.66678 17.0128L9.75951 15.3377C9.1009 14.9081 8.59489 14.3024 8.29802 13.6028L6.45691 14.384ZM8.66679 17.0128C9.65343 17.6565 10.8134 18 12 18V16C11.1984 16 10.4187 15.7677 9.75951 15.3377L8.66679 17.0128ZM12 18C13.1866 18 14.3466 17.6565 15.3332 17.0128L14.2405 15.3377C13.5814 15.7677 12.8016 16 12 16V18ZM15.3332 17.0128C15.8686 16.6636 16.3399 16.2345 16.7316 15.744L15.1688 14.496C14.9103 14.8196 14.5979 15.1046 14.2405 15.3377L15.3332 17.0128ZM7.90926 6.00582C7.35786 5.96374 6.78777 6.15066 6.35923 6.56922L7.75667 8L7.75706 8.00002L7.90926 6.00582ZM6.35923 6.56922C5.23721 7.66508 4.46757 9.06705 4.15535 10.6006L6.11515 10.9996C6.3465 9.86323 6.91774 8.81938 7.75667 8L6.35923 6.56922ZM4.15535 10.6006C3.84307 12.1344 4.00407 13.7236 4.61581 15.1653L6.45691 14.384C6.00273 13.3137 5.8838 12.1359 6.11515 10.9996L4.15535 10.6006ZM4.61581 15.1653C5.22732 16.6064 6.2594 17.8303 7.57406 18.6879L8.66678 17.0128C7.68012 16.3692 6.91109 15.4544 6.45691 14.384L4.61581 15.1653ZM7.57406 18.6879C8.88824 19.5452 10.4284 20 12 20V18C10.8134 18 9.65343 17.6565 8.66678 17.0128L7.57406 18.6879ZM12 20C13.5716 20 15.1118 19.5452 16.4259 18.6879L15.3332 17.0128C14.3466 17.6565 13.1866 18 12 18V20ZM16.4259 18.6879C17.067 18.2698 17.6408 17.7646 18.1314 17.1895L16.61 15.8914C16.2436 16.3207 15.8143 16.699 15.3332 17.0128L16.4259 18.6879ZM16.6636 17.2476L19.4752 20.0591L20.8894 18.6449L18.0778 15.8333L16.6636 17.2476ZM19.4387 18.6834C17.6067 20.721 14.9534 22 12 22V24C15.5442 24 18.7306 22.4622 20.9259 20.0206L19.4387 18.6834ZM12 22C6.47715 22 2 17.5228 2 12H0C0 18.6274 5.37258 24 12 24V22ZM2 12C2 9.04663 3.27903 6.39334 5.31657 4.56134L3.97936 3.0741C1.53779 5.26938 0 8.45578 0 12H2ZM3.94086 4.52483L7.12605 7.71003L8.54027 6.29581L5.35507 3.11062L3.94086 4.52483Z"
        fill={palette.orange.main}
        mask={`url(#${randomlyGeneratedMaskId})`}
      />
      <path
        d="M2.67177 1.77268C2.08599 1.18689 1.13624 1.18689 0.550454 1.77268C-0.0353321 2.35847 -0.0353321 3.30822 0.550454 3.894L2.67177 1.77268ZM20.106 23.4496C20.6918 24.0353 21.6415 24.0353 22.2273 23.4496C22.8131 22.8638 22.8131 21.914 22.2273 21.3282L20.106 23.4496ZM0.550454 3.894L20.106 23.4496L22.2273 21.3282L2.67177 1.77268L0.550454 3.894Z"
        fill={useCurrentColor ? 'currentColor' : palette.orange.main}
      />
    </svg>
  );
};
