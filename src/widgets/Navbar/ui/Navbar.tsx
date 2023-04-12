import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button className={cls.mainLinks} theme={ButtonTheme.CLEAR} onClick={onToggleModal}>
        {t('Log in')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi assumenda commodi,
        consectetur earum eligendi fugiat impedit labore omnis quasi ratione repudiandae similique
        soluta sunt ullam, ut vel velit, vitae?
      </Modal>
    </div>
  );
};
