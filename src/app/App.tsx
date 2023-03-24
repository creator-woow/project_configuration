import { Suspense } from 'react';
import { useTheme } from 'shared/hooks/useTheme';
import { AppRouter } from 'app/router';
import { AppLoader } from 'app/ui/AppLoader';

export const App = () => {
  const [theme] = useTheme();

  return (
    <div className={`app theme-${theme}`}>
      <Suspense fallback={<AppLoader />}>
        <AppRouter />
      </Suspense>
    </div>
  );
};
