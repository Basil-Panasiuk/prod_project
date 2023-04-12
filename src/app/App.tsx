import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar/ui/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { FC, Suspense } from 'react';

export const App: FC = () => {
  const { theme } = useTheme();

  return (
    <Suspense fallback="i18n loading....">
      <div className={classNames('app', {}, [theme])}>
        <Navbar />

        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </div>
    </Suspense>
  );
};
