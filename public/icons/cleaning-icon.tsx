import React, { SVGAttributes } from 'react';

interface CleaningIconProps extends SVGAttributes<SVGElement> {
  size?: number | string;
  color?: string;
}

export const CleaningIcon = ({
  size = 24,
  color = 'currentColor',
  ...props
}: CleaningIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 -960 960 960"
      fill={color}
      {...props}
    >
      <path d="m360-680 40-80v-40h-40v-80h240q17 0 28.5 11.5T640-840v40l-40 80H480v-40l-80 80h-40ZM320-80v-274q0-11 3.5-23.5T332-400l148-280h120q14 14 27 37.5t13 42.5v520H320Zm80-80h160v-440h-32L400-356v196Zm0 0h160-160Z" />
    </svg>
  );
};