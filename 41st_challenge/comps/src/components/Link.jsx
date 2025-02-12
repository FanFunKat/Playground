import classnames from 'tailwindcss-classnames';
import { useNavigation } from '../hooks/use-navigation';

export function Link({ to, children }) {
  const { navigate } = useNavigation();

  const classes = classnames('text-blue-500', 'hover:text-blue-800');

  const handleClick = (e) => {
    if (e.metaKey || e.ctrlKey) {
      return;
    }
    e.preventDefault();
    navigate(to);
  }

  return (
    <a className={classes} onClick={handleClick} href={to}>
      {children}
    </a>
  );
};