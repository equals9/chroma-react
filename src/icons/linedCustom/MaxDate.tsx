import * as React from 'react';

export const MaxDate = (props: React.SVGProps<SVGSVGElement>) => {
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
      <path d="M7 5.8H3.8A1.793 1.793 0 002 7.6V20a1.793 1.793 0 001.8 1.8h12.4A1.793 1.793 0 0018 20v-7.3M6.4 4v3.6M2 11.1h8M15.2 8.5l-2.7-2.7h0L15.2 3M12.5 5.8h9.9M19.6 3l2.8 2.8h0l-2.8 2.7" />
    </svg>
  );
};
