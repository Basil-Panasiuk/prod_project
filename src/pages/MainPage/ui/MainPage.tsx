import { BugButton } from 'app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';

export default function MainPage(): JSX.Element {
  const { t } = useTranslation('main');

  return (
    <div>
      <BugButton />
      {t('MainPage')}
    </div>
  );
}
