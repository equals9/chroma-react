import * as React from 'react';

export const Planet = (props: React.SVGProps<SVGSVGElement>) => {
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
      <circle cx={12} cy={12} r={10} />
      <path d="M12 6.063H4M7.439 9.063h-5M21.016 8.063h-6M21.887 13.5h-3.168a3.427 3.427 0 01-2.443-.912 3.856 3.856 0 00-2.662-.895 3.857 3.857 0 00-2.663.895 3.426 3.426 0 01-2.442.912H5.551M20.985 16.393h-2.427a3.427 3.427 0 00-2.443.912 3.856 3.856 0 01-2.662.895 3.857 3.857 0 01-2.663-.895 3.426 3.426 0 00-2.442-.912h-.676" />
    </svg>
  );
};
