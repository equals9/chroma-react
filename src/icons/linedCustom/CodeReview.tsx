import * as React from 'react';

export const CodeReview = (props: React.SVGProps<SVGSVGElement>) => {
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
      data-icon="codereview-custom"
      {...props}
    >
      <path d="M20.102 23L23 20.101l-2.898-2.898M16.237 17.203l-2.898 2.898L16.237 23" />
      <path d="M21.489 13.45l.33-2.15a2 2 0 00-1.678-2.278A2.034 2.034 0 0019.819 9h-5.66V5a3 3 0 00-3-3l-4 9v11h2.66m-2.66 0h-3a2 2 0 01-2-2v-7a2 2 0 012-2h3" />
    </svg>
  );
};
