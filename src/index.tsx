import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from 'app/App';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';
import 'shared/config/i18n/config';

const container = document.querySelector('#root');
const root = createRoot(container);

root.render(
  <StrictMode>
    <ThemeProvider>
      <ErrorBoundary>
        <App/>
      </ErrorBoundary>
    </ThemeProvider>
  </StrictMode>
);
