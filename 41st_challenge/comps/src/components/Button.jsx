import { classnames } from 'tailwindcss-classnames';

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
  const classes = classnames(
    'py-1.5 px-3 border', {
    'border-blue-500 bg-blue-500 text-white': primary,
    'border-gray-500 bg-gray-500 text-white': secondary,
    'border-green-500 bg-green-500 text-white': success,
    'border-yellow-500 bg-yellow-500 text-white': warning,
    'border-red-500 bg-red-500 text-white': danger,
    'rounded-lg': rounded,
    'rounded-none': !rounded,
    'bg-white text-black': outline
  }
  )


  return <button className={classes}>{children}</button>
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count = Number(!!primary) + Number(!!secondary) + Number(!!success) + Number(!!warning) + Number(!!danger);
    if (count > 1) {
      return new Error("Only one of primary, secondary, success, warning, danger can be true");
    }
  },
};