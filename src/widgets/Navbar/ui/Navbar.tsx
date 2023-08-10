import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import img from 'shared/assets/icons/user-icon.png';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.NavBar, {}, [className])}>
      <div>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>
          {t('Главная')}
        </AppLink>
        <AppLink theme={AppLinkTheme.PRIMARY} to={'/about'}>
          {t('О сайте')}
        </AppLink>
      </div>
      <img src={img} alt="123" />
    </div>
  );
};

export default Navbar;