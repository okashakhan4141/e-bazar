import { Route, Switch, Redirect } from 'react-router-dom';
import Categories from './categories';

import Home from './home';
import NotFound from './notFound';

import ProductDetail from './productDetail';
import Auth from './auth';
import Orders from './orders';
import Notifications from './notifications';

const Pages = props => {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
      <Route path="/auth">
        <Auth />
      </Route>
      <Route path="/home" exact>
        <Home />
      </Route>
      <Route path="/home/products/:category" exact>
        <Categories />
      </Route>
      <Route path="/home/products/detail/:product" exact>
        <ProductDetail />
      </Route>
      <Route path="/home/orders/:userId" exact>
        <Orders />
      </Route>
      <Route path="/home/notifications/:userId" exact>
        <Notifications />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Pages;
