/**
 * BackButton Component
 *
 * Navigation button to go back to previous page
 * Uses React Router's navigate(-1) to return to previous route
 */
import Button from "./Button.tsx";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  return (
    <Button
      type="back"
      onClick={(e: any) => {
        e.preventDefault();
        navigate(-1); // Navigate to previous page in history
      }}
    >
      &larr; Back
    </Button>
  );
}

export default BackButton;
