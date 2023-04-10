import { ImSpinner2 } from "react-icons/im";

interface SpinnerProps {
  color: string;
  size: number;
  spinnerClassName: string;
}
const SpinnerOnly = ({ color, size, spinnerClassName }: SpinnerProps) => {
  return (
    <div>
      <ImSpinner2
        color={color}
        size={size}
        className={`${spinnerClassName} animate-spin animation-duration-50`}
      />
    </div>
  );
};

export default SpinnerOnly;
