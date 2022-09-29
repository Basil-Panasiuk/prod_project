import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
	const { className } = props;

  return (
	<div className={classNames(cls.Navbar, {}, [className])}>
		<div className={cls.mainlinks}>
			<AppLink
				theme={AppLinkTheme.SECONDARY}
				to='/'
				className={cls.mainLink}
			>
				Main
			</AppLink>
			<AppLink to='/about' theme={AppLinkTheme.SECONDARY}>About</AppLink>
		</div>
	</div>
  )
}
