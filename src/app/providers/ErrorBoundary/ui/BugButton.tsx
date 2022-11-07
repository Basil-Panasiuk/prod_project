import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

interface BugButtonProps {
  className?: string;
}

export const BugButton: FC<BugButtonProps> = () => {
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (error) throw new Error();
  }, [error]);

  const onThrow = (): void => {
    setError(true);
  };
  return <Button onClick={onThrow}>{t('throw error')}</Button>;
};
