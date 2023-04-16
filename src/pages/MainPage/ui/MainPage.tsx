import { BugButton } from 'app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';

export default function MainPage(): JSX.Element {
  const { t } = useTranslation('main');

  return (
    <div>
      <BugButton />
      <Counter />
      {t('MainPage')}
    </div>
  );
}
