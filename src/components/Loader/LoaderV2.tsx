/**
 * LoaderV2 Component
 *
 * Alternative loading spinner animation
 * Displays a dot-spinner with 8 rotating dots
 * Used throughout the app for loading states
 * Styles defined in LoaderV2.css
 */
import "./LoaderV2.css";

function LoaderV2() {
  return (
    <div className="dot-spinner">
      {/* 8 animated dots arranged in a circle */}
      <div className="dot-spinner__dot"></div>
      <div className="dot-spinner__dot"></div>
      <div className="dot-spinner__dot"></div>
      <div className="dot-spinner__dot"></div>
      <div className="dot-spinner__dot"></div>
      <div className="dot-spinner__dot"></div>
      <div className="dot-spinner__dot"></div>
      <div className="dot-spinner__dot"></div>
    </div>
  );
}

export default LoaderV2;
