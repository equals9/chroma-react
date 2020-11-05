import { Sunrise as FeatherSunrise, Props } from 'react-feather';
import * as React from 'react';

export const Sunrise: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherSunrise data-icon="sunrise" {...rootProps} />
);
