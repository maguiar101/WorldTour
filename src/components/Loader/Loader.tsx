/**
 * Loader Component
 *
 * Primary loading animation using SVG
 * Features:
 * - Animated rotating rings with gradient effects
 * - Clock-like tick marks around the perimeter
 * - Rotating arrow indicators
 * - Complex SVG with masks and gradients for depth effect
 *
 * Styles and animations defined in Loader.css
 */
import "./Loader.css";

function Loader() {
  return (
    <>
      {/* Main SVG loader */}
      <svg
        className="pl"
        viewBox="0 0 160 160"
        width="160px"
        height="160px"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* SVG definitions for gradients and masks */}
        <defs>
          {/* Gradient from black to white */}
          <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#000"></stop>
            <stop offset="100%" stop-color="#fff"></stop>
          </linearGradient>

          {/* Mask for gradient effect on outer elements */}
          {/* Mask for gradient effect on outer elements */}
          <mask id="mask1">
            <rect x="0" y="0" width="160" height="160" fill="url(#grad)"></rect>
          </mask>

          {/* Mask for gradient effect on inner elements */}
          <mask id="mask2">
            <rect
              x="28"
              y="28"
              width="104"
              height="104"
              fill="url(#grad)"
            ></rect>
          </mask>
        </defs>

        {/* Outer rotating ring (blue) */}
        <g>
          <g className="pl__ring-rotate">
            <circle
              className="pl__ring-stroke"
              cx="80"
              cy="80"
              r="72"
              fill="none"
              stroke="hsl(223,90%,55%)"
              stroke-width="16"
              stroke-dasharray="452.39 452.39"
              stroke-dashoffset="452"
              stroke-linecap="round"
              transform="rotate(-45,80,80)"
            ></circle>
          </g>
        </g>

        {/* Masked version of outer ring (cyan) */}
        <g mask="url(#mask1)">
          <g className="pl__ring-rotate">
            <circle
              className="pl__ring-stroke"
              cx="80"
              cy="80"
              r="72"
              fill="none"
              stroke="hsl(193,90%,55%)"
              stroke-width="16"
              stroke-dasharray="452.39 452.39"
              stroke-dashoffset="452"
              stroke-linecap="round"
              transform="rotate(-45,80,80)"
            ></circle>
          </g>
        </g>

        {/* Outer tick marks */}
        <g>
          <g
            stroke-width="4"
            stroke-dasharray="12 12"
            stroke-dashoffset="12"
            stroke-linecap="round"
            transform="translate(80,80)"
          >
            {/* 8 tick marks positioned around the circle */}
            <polyline
              className="pl__tick"
              stroke="hsl(223,10%,90%)"
              points="0,2 0,14"
              transform="rotate(-135,0,0) translate(0,40)"
            ></polyline>
            <polyline
              className="pl__tick"
              stroke="hsl(223,10%,90%)"
              points="0,2 0,14"
              transform="rotate(-90,0,0) translate(0,40)"
            ></polyline>
            <polyline
              className="pl__tick"
              stroke="hsl(223,10%,90%)"
              points="0,2 0,14"
              transform="rotate(-45,0,0) translate(0,40)"
            ></polyline>
            <polyline
              className="pl__tick"
              stroke="hsl(223,10%,90%)"
              points="0,2 0,14"
              transform="rotate(0,0,0) translate(0,40)"
            ></polyline>
            <polyline
              className="pl__tick"
              stroke="hsl(223,10%,90%)"
              points="0,2 0,14"
              transform="rotate(45,0,0) translate(0,40)"
            ></polyline>
            <polyline
              className="pl__tick"
              stroke="hsl(223,10%,90%)"
              points="0,2 0,14"
              transform="rotate(90,0,0) translate(0,40)"
            ></polyline>
            <polyline
              className="pl__tick"
              stroke="hsl(223,10%,90%)"
              points="0,2 0,14"
              transform="rotate(135,0,0) translate(0,40)"
            ></polyline>
            <polyline
              className="pl__tick"
              stroke="hsl(223,10%,90%)"
              points="0,2 0,14"
              transform="rotate(180,0,0) translate(0,40)"
            ></polyline>
          </g>
        </g>

        {/* Masked tick marks for gradient effect */}
        <g mask="url(#mask1)">
          <g
            stroke-width="4"
            stroke-dasharray="12 12"
            stroke-dashoffset="12"
            stroke-linecap="round"
            transform="translate(80,80)"
          >
            {/* 8 tick marks with brighter color */}
            {/* 8 tick marks with brighter color */}
            <polyline
              className="pl__tick"
              stroke="hsl(223,90%,80%)"
              points="0,2 0,14"
              transform="rotate(-135,0,0) translate(0,40)"
            ></polyline>
            <polyline
              className="pl__tick"
              stroke="hsl(223,90%,80%)"
              points="0,2 0,14"
              transform="rotate(-90,0,0) translate(0,40)"
            ></polyline>
            <polyline
              className="pl__tick"
              stroke="hsl(223,90%,80%)"
              points="0,2 0,14"
              transform="rotate(-45,0,0) translate(0,40)"
            ></polyline>
            <polyline
              className="pl__tick"
              stroke="hsl(223,90%,80%)"
              points="0,2 0,14"
              transform="rotate(0,0,0) translate(0,40)"
            ></polyline>
            <polyline
              className="pl__tick"
              stroke="hsl(223,90%,80%)"
              points="0,2 0,14"
              transform="rotate(45,0,0) translate(0,40)"
            ></polyline>
            <polyline
              className="pl__tick"
              stroke="hsl(223,90%,80%)"
              points="0,2 0,14"
              transform="rotate(90,0,0) translate(0,40)"
            ></polyline>
            <polyline
              className="pl__tick"
              stroke="hsl(223,90%,80%)"
              points="0,2 0,14"
              transform="rotate(135,0,0) translate(0,40)"
            ></polyline>
            <polyline
              className="pl__tick"
              stroke="hsl(223,90%,80%)"
              points="0,2 0,14"
              transform="rotate(180,0,0) translate(0,40)"
            ></polyline>
          </g>
        </g>

        {/* Rotating arrows (red/pink) */}
        <g>
          <g transform="translate(64,28)">
            <g className="pl__arrows" transform="rotate(45,16,52)">
              {/* Upward pointing arrow */}
              <path
                fill="hsl(3,90%,55%)"
                d="M17.998,1.506l13.892,43.594c.455,1.426-.56,2.899-1.998,2.899H2.108c-1.437,0-2.452-1.473-1.998-2.899L14.002,1.506c.64-2.008,3.356-2.008,3.996,0Z"
              ></path>
              {/* Downward pointing arrow */}
              <path
                fill="hsl(223,10%,90%)"
                d="M14.009,102.499L.109,58.889c-.453-1.421,.559-2.889,1.991-2.889H29.899c1.433,0,2.444,1.468,1.991,2.889l-13.899,43.61c-.638,2.001-3.345,2.001-3.983,0Z"
              ></path>
            </g>
          </g>
        </g>

        {/* Masked arrows with different colors */}
        <g mask="url(#mask2)">
          <g transform="translate(64,28)">
            <g className="pl__arrows" transform="rotate(45,16,52)">
              {/* Upward pointing arrow (pink) */}
              <path
                fill="hsl(333,90%,55%)"
                d="M17.998,1.506l13.892,43.594c.455,1.426-.56,2.899-1.998,2.899H2.108c-1.437,0-2.452-1.473-1.998-2.899L14.002,1.506c.64-2.008,3.356-2.008,3.996,0Z"
              ></path>
              {/* Downward pointing arrow (light blue) */}
              <path
                fill="hsl(223,90%,80%)"
                d="M14.009,102.499L.109,58.889c-.453-1.421,.559-2.889,1.991-2.889H29.899c1.433,0,2.444,1.468,1.991,2.889l-13.899,43.61c-.638,2.001-3.345,2.001-3.983,0Z"
              ></path>
            </g>
          </g>
        </g>
      </svg>
    </>
  );
}

export default Loader;
