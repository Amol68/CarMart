type LogoProps = {
  width?: number;
  height?: number;
  color?: string;
  viewBox?: string;
};

const LogoIcon = ({
  width = 36,
  height = 48,
  color = "#000", 
  viewBox = "0 0 36 48",
}: LogoProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <g clipRule="evenodd" fill={color} fillRule="evenodd">
        <path d="M35.3721 14v8.0492h-9.9698v-2.2927z" />
        <path
          d="M35.3699 14.0001l-9.9698 5.7565-7.3513-4.2436v-11.513z"
          opacity=".9"
        />
        <path
          d="M18.0512 4v11.513l-7.349 4.2436-9.969778-5.7565z"
          opacity=".8"
        />
        <path
          d="M10.7002 19.7565v8.4868l-9.969731 5.756v-19.9993z"
          opacity=".7"
        />
        <path
          d="M18.0492 32.4871v11.5129l-17.318731-10.0006 9.969731-5.756z"
          opacity=".6"
        />
        <path
          d="M35.3699 33.9994l-17.3211 10.0006v-11.5129l7.3513-4.2437z"
          opacity=".5"
        />
        <path
          d="M35.3721 25.9507v8.0487l-9.9698-5.756v-2.2927z"
          opacity=".4"
        />
      </g>
    </svg>
  );
};

export default LogoIcon;
