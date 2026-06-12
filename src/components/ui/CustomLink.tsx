import cn from 'classnames';
import { NavLink, To } from 'react-router-dom';

type Props = {
  to: To;
  children: React.ReactNode;
  className?: string;
  end?: boolean;
};

export const CustomLink: React.FC<Props> = ({
  to,
  children,
  className,
  end = false,
}) => {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) => cn(className, isActive && 'is-active')}
    >
      {children}
    </NavLink>
  );
};
