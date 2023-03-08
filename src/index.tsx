import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from 'app/App';
import { ThemeProvider } from 'app/providers';
import 'app/styles/index.scss';

const container = document.querySelector('#root');
const root = createRoot(container);

root.render(
  <StrictMode>
    <ThemeProvider>
      <App/>
    </ThemeProvider>
  </StrictMode>
);
