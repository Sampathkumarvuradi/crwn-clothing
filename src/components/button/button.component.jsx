import "./button.styles.scss";

export const BUTTON_TYPES_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
  return (
    <button
      disabled={isLoading}
      className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
