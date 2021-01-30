import classNames from 'classnames';

export type ButtonProps = {
  children: string;
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
  color?: 'default' | 'purple';
  variant?: 'default' | 'borderless';
  href?: string;
  className?: string;
  defaultMargin?: boolean;
};

const Button = ({
  disabled,
  type = 'button',
  children,
  color = 'default',
  variant = 'default',
  href,
  className,
  defaultMargin,
}: ButtonProps) => {
  const classes = classNames(
    'px-4 py-2 rounded-md font-medium transition',
    {
      'text-gray-600 hover:text-gray-900 hover:bg-gray-100':
        color === 'default',
      'bg-indigo-600 hover:bg-indigo-700 text-white': color === 'purple',
      'mt-4': defaultMargin,
      'ring-1 ring-black ring-opacity-5 shadow-md': variant === 'default',
    },
    className
  );

  if (href) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type={type} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
