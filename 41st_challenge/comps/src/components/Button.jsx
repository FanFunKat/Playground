import PropTypes from "prop-types";

export function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  rounded,
  outline
}) {
  return <button className="py-1.5 px-3 border border-blue-600 bg-blue-500 text-white">{children}</button>
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count = Number(!!primary) + Number(!!secondary) + Number(!!success) + Number(!!warning) + Number(!!danger);
    if (count > 1) {
      return new Error("Only one of primary, secondary, success, warning, danger can be true");
    }
  },
};