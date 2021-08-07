import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'

import Home from './pages/Home';
import ReviewDetails from './pages/ReviewDetails';
import Category from './pages/Category';
import SiteHeader from './components/SiteHeader';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 1000
      }
    }
  });

  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <div className="App">
          <SiteHeader />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/details/:id">
              <ReviewDetails />
            </Route>

            <Route path="/category/:id">
              <Category />
            </Route>
          </Switch>
        </div>
      </QueryClientProvider>
    </Router>

  );
}

export default App;
