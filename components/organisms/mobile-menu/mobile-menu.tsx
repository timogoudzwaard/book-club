import Button from '../../atoms/button/button';
import classNames from 'classnames';
import Card from '../../atoms/card/card';

type MobileMenuProps = {
  isEnabled: boolean;
};

const MobileMenu = ({ isEnabled }: MobileMenuProps) => {
  const MobileMenuClasses = classNames(
    'absolute transition top-24 inset-x-2 opacity-0 transform scale-95 md:hidden',
    {
      'opacity-100': isEnabled,
      'scale-100': isEnabled,
    }
  );

  return (
    <div className={MobileMenuClasses}>
      <Card defaultPadding>
        <ul>
          <li className="mt-2">
            <Button href="/about" variant="borderless">
              About
            </Button>
          </li>
          <li className="mt-6">
            <Button href="/about" variant="borderless">
              Pricing
            </Button>
          </li>
          <li className="mt-6">
            <Button href="/sign-in" variant="borderless">
              Sign in
            </Button>
          </li>
          <li className="mt-6">
            <Button className="w-full" color="purple">
              Sign up
            </Button>
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default MobileMenu;
