import { useTheme } from 'shared/hooks/useTheme';
import { AppRouter } from 'app/router';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';

export const App = () => {
  const [theme] = useTheme();

  return (
    <div className={`app ${theme}`}>
      <ErrorBoundary>
        <AppRouter />
      </ErrorBoundary>
    </div>
  );
};
