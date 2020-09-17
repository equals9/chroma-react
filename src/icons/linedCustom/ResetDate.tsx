import * as React from 'react';

export const ResetDate = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      width={24}
      height={24}
      {...props}
    >
      <path d="M8 5.778H3.778A1.778 1.778 0 002 7.556V20a1.778 1.778 0 001.778 1.778h12.444A1.778 1.778 0 0018 20v-3.333M6.444 4v3.556M2 11.111h6M21.851 10.459a5.2 5.2 0 11-.335-5.195" />
      <path d="M20.961 1.343l.555 3.921h0l-3.86.475" />
    </svg>
  );
};
