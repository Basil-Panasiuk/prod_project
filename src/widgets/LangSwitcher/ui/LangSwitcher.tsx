import { FC } from 'react'
import cls from './LangSwitcher.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
	className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = (props) => {
	const { className } = props;
	const { t, i18n } = useTranslation();

	const changeLang = () => {
		i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
	};

	return (
		<Button
			onClick={changeLang}
			theme={ThemeButton.CLEAR}
			className={classNames(cls.LangSwitcher, {}, [className])}
		>
			{t('Language')}
		</Button>
	)
}