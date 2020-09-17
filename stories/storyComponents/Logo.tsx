import * as React from 'react';
import { makeStyles } from '../../src/styles';

const useStyles = makeStyles((theme) => ({
  yellow: {
    fill: theme.palette.yellow[800],
  },
  red: {
    fill: theme.palette.red[800],
  },
  green: {
    fill: theme.palette.green[800],
  },
  blue: {
    fill: theme.palette.blue[300],
  },
}));

export interface LogoProps extends React.SVGProps<SVGSVGElement> {}

export const Logo: React.FC<LogoProps> = (props) => {
  const classes = useStyles({});
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 70 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        className={classes.yellow}
        d="M7.19722 30.1989C11.1721 30.1989 14.3944 26.9766 14.3944 23.0017C14.3944 19.0267 11.1721 15.8044 7.19722 15.8044C3.2223 15.8044 0 19.0267 0 23.0017C0 26.9766 3.2223 30.1989 7.19722 30.1989Z"
      />
      <path
        className={classes.red}
        d="M48.9086 0.0041412C47.16 0.000742449 45.4705 0.636423 44.1578 1.79159C41.6257 4.01864 38.3672 5.24405 34.995 5.23747C31.6228 5.23088 28.3692 3.99276 25.8458 1.75584C24.801 0.851412 23.5179 0.266843 22.1499 0.071951C20.7818 -0.122941 19.3866 0.0800826 18.1308 0.656774C16.875 1.23347 15.8118 2.15945 15.068 3.32412C14.3243 4.4888 13.9316 5.84293 13.9368 7.22479C13.9419 8.60665 14.3447 9.95782 15.0971 11.1169C15.8494 12.276 16.9195 13.1941 18.1796 13.7614C19.4396 14.3287 20.8364 14.5213 22.2029 14.3162C23.5695 14.1112 24.8481 13.5171 25.8862 12.6049C28.412 10.385 31.6597 9.16065 35.0224 9.16065C38.3851 9.16065 41.6328 10.385 44.1586 12.6049C45.0329 13.3731 46.0806 13.9179 47.2117 14.1924C48.3427 14.4669 49.5235 14.463 50.6528 14.181C51.782 13.8991 52.826 13.3474 53.6953 12.5734C54.5646 11.7994 55.2331 10.8262 55.6437 9.73707C56.0543 8.64798 56.1946 7.47556 56.0526 6.32033C55.9107 5.16511 55.4906 4.06155 54.8286 3.10428C54.1665 2.14701 53.2822 1.36459 52.2514 0.8241C51.2205 0.283611 50.074 0.00118329 48.9101 0.00103193L48.9086 0.0041412Z"
      />
      <path
        className={classes.blue}
        d="M62.7466 15.8045C60.9981 15.8011 59.3085 16.4367 57.9959 17.5919C55.4644 19.82 52.2062 21.0467 48.8339 21.0412C45.4615 21.0358 42.2073 19.7986 39.683 17.5624C38.6383 16.6579 37.3552 16.0734 35.9871 15.8785C34.6191 15.6836 33.2238 15.8866 31.9681 16.4633C30.7123 17.04 29.649 17.966 28.9053 19.1307C28.1616 20.2953 27.7689 21.6495 27.774 23.0313C27.7792 24.4132 28.182 25.7643 28.9344 26.9235C29.6867 28.0826 30.7568 29.0006 32.0169 29.5679C33.2769 30.1352 34.6736 30.3279 36.0402 30.1228C37.4068 29.9177 38.6854 29.3236 39.7235 28.4114C42.2493 26.1915 45.497 24.9672 48.8597 24.9672C52.2224 24.9672 55.47 26.1915 57.9959 28.4114C58.8702 29.1796 59.9179 29.7244 61.0489 29.9989C62.18 30.2734 63.3608 30.2695 64.49 29.9876C65.6193 29.7056 66.6633 29.154 67.5326 28.38C68.4018 27.606 69.0704 26.6327 69.481 25.5436C69.8916 24.4545 70.0319 23.2821 69.8899 22.1269C69.7479 20.9716 69.3279 19.8681 68.6659 18.9108C68.0038 17.9535 67.1194 17.1711 66.0886 16.6306C65.0578 16.0901 63.9113 15.8077 62.7474 15.8076L62.7466 15.8045Z"
      />
      <path
        className={classes.green}
        d="M48.8587 31.6056C47.1104 31.6024 45.4212 32.2381 44.1088 33.3931C41.576 35.6192 38.3176 36.844 34.9456 36.8374C31.5736 36.8309 28.32 35.5933 25.7959 33.3573C24.7511 32.453 23.468 31.8685 22.0999 31.6737C20.7318 31.4789 19.3366 31.682 18.0809 32.2588C16.8251 32.8356 15.762 33.7616 15.0183 34.9264C14.2747 36.0911 13.8821 37.4452 13.8873 38.8271C13.8926 40.2089 14.2955 41.5601 15.0479 42.7191C15.8004 43.8782 16.8705 44.7961 18.1306 45.3634C19.3907 45.9306 20.7874 46.1231 22.154 45.9179C23.5206 45.7128 24.7992 45.1186 25.8371 44.2063C28.3628 41.9861 31.6105 40.7616 34.9733 40.7616C38.3361 40.7616 41.5839 41.9861 44.1095 44.2063C44.9837 44.9754 46.0315 45.5209 47.1628 45.7961C48.2942 46.0713 49.4755 46.0678 50.6052 45.7861C51.735 45.5043 52.7795 44.9527 53.6492 44.1785C54.5189 43.4043 55.1878 42.4306 55.5984 41.3411C56.0091 40.2515 56.1492 39.0786 56.0069 37.923C55.8646 36.7674 55.444 35.6635 54.7812 34.7062C54.1185 33.7489 53.2334 32.9666 52.2018 32.4266C51.1703 31.8865 50.0231 31.6048 48.8587 31.6056Z"
      />
    </svg>
  );
};
