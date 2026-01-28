/**
 * Button Component
 *
 * Reusable button component with customizable styling
 * Supports different button types via className
 * Can be used as regular button or form submit button
 */

// Type definition for button props
interface ButtonProps {
  children: React.ReactNode; // Button content (text, icons, etc.)
  onClick?: any; // Optional click handler
  type?: string; // CSS class type for styling
  htmlType?: "button" | "submit" | "reset"; // HTML button type
}

function Button({ children, onClick, type, htmlType = "button" }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type={htmlType}
      className={`${[type]} rounded-lg px-1 text-base`}
    >
      {children}
    </button>
  );
}

export default Button;
