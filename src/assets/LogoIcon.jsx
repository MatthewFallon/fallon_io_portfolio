import React from "react";

/**
 * 
 * @param param0 The icon properties
 * @param param0.height the height for the icon
 * @param param0.width the width if wanting to change proportions
 * @returns The svg icon of the site logo - path elements hidden by default to allow js to load
 */
function LogoIcon({height=48, width=height, visible=true}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      version="1.1"
      viewBox="0 0 48 48"
    >
      <defs>
        <linearGradient id="linearGradient34721">
          <stop offset="0" stopColor="#589e5a" stopOpacity="1"></stop>
          <stop offset="1" stopColor="#9e589d" stopOpacity="1"></stop>
        </linearGradient>
        <linearGradient id="number_2-6">
          <stop offset="0" stopColor="#589e5a" stopOpacity="0.996"></stop>
          <stop offset="1" stopColor="#9e589d" stopOpacity="1"></stop>
        </linearGradient>
        <linearGradient
          id="linearGradient34139"
          x1="11.211"
          x2="20.12"
          y1="13.432"
          y2="13.432"
          gradientTransform="matrix(3.12858 0 0 3.04394 -25.01 -16.893)"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#number_2-6"
        ></linearGradient>
        <linearGradient
          id="linearGradient34723"
          x1="5.964"
          x2="42.036"
          y1="24"
          y2="24"
          gradientTransform="matrix(1.21688 0 0 1.22866 -5.205 -5.488)"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#linearGradient34721"
        ></linearGradient>
      </defs>
      <ellipse
        id="bounding-circle"
        visibility={visible ? "visible" : "hidden"}
        cx="24"
        cy="24"
        fill="none"
        fillOpacity="1"
        stroke="url(#linearGradient34723)"
        strokeDasharray="none"
        strokeLinecap="square"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="0.996"
        strokeWidth="0.251"
        rx="21.822"
        ry="21.91"
      ></ellipse>
      <path
        id="logo-path"
        visibility={visible ? "visible" : "hidden"}
        style={{ mixBlendMode: "normal" }}
        fill="none"
        fillOpacity="1"
        stroke="url(#linearGradient34139)"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="0.617"
        d="M17.086 13.523l-6.6 21.385h2.683l4.583-13.781 3.568 4.595 3.728-4.595v13.78h3.116v-12.21h6.306v-3.074h-6.306v-2.95h9.46v-3.15l-9.564.036-3.012-.036-3.587 7.063z"
      ></path>
    </svg>
  );
}

export default LogoIcon;
