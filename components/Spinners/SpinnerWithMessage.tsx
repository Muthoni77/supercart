import { ImSpinner2 } from "react-icons/im";

interface SpinnerProps {
  color: string;
  size: number;
  spinnerContainerClassName?: string;
  spinnerClassName?: string;
  messageClassName?: string;
  message: string;
}
const SpinnerWithMessage = ({
  color,
  size,
  spinnerContainerClassName,
  spinnerClassName,
  messageClassName,
  message,
}: SpinnerProps) => {
  return (
    <div className={`flex items-center ${spinnerContainerClassName}`}>
      <ImSpinner2
        color={color}
        size={size}
        className={`${spinnerClassName} animate-spin animation-duration-50`}
      />
      <span className={`${messageClassName} ms-2`}>{message}</span>
    </div>
  );
};

export default SpinnerWithMessage;
