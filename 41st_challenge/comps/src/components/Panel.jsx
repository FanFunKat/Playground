import { classnames } from 'tailwindcss-classnames';

export function Panel({ children, className, ...rest }) {
  const finalClassNames = classnames(
    'border rounded p-3 shadow bg-white w-full',
    className
  );

  return (
    <div className={finalClassNames} {...rest}>
      {children}
    </div>
  )
}