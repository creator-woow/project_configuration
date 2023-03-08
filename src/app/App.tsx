import { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader';
import { useTheme } from 'shared/hooks/useTheme';
import { AppRouter } from 'app/router';

export const App = () => {
  const [theme] = useTheme();

  return (
    <div className={`app theme-${theme}`}>
      <Suspense fallback={<Loader />}>
        <AppRouter />
      </Suspense>
    </div>
  );
};
