import React, { FC, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import cls from './Modal.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'widgets/Portal';
import { useTheme } from 'app/providers/ThemeProvider';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal: FC<ModalProps> = (props) => {
  const { className, children, isOpen, onClose } = props;
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const { theme } = useTheme();

  const [isClosing, setIsClosing] = useState(false);
  const closeHandler = useCallback((): void => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onContentClick = (e: React.MouseEvent): void => {
    e.stopPropagation();
  };

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls[theme]]: true
  };

  const onKeyDown = useCallback(
    (e: KeyboardEvent): void => {
      if (e.key === 'Escape') {
        closeHandler();
      }
    },
    [closeHandler]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className])}>
        <div className={cls.overlay} onClick={closeHandler}>
          <div
            className={classNames(cls.content, { [cls.closing]: isClosing })}
            onClick={onContentClick}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
