import React from 'react';
import Routes from './routes.jsx';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { store } from './app/store';
import { Provider } from 'react-redux';
import './index.scss';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1
    }
  }
});

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <React.Suspense>
            <Routes />
          </React.Suspense>
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
