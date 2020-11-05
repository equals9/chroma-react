import * as React from 'react';

export const HeartList = (props: React.SVGProps<SVGSVGElement>) => {
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
      data-icon="heartlist-custom"
      {...props}
    >
      <path d="M16.3 8.1h6.5M13.6 14.1h9.2M4.8 20.1h18M7.2 4.4c-.5 0-1-.2-1.4-.5-1-.8-2.4-.6-2.4-.6-.7.1-1.2.5-1.6 1.1-.5.5-.8 1-.8 1.9 0 1 .4 2.5 1.2 3.8 1 1.6 2.8 3.1 3.9 3.6.3.2.7.3 1.1.5.3-.1.8-.3 1.1-.5 1.1-.5 2.9-2 3.9-3.6.8-1.3 1.2-2.8 1.2-3.8 0-.9-.3-1.4-.8-2-.4-.5-1-.9-1.7-1.1 0 0-1.4-.2-2.4.6-.4.4-.9.6-1.3.6z" />
    </svg>
  );
};
