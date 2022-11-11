import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import Login from './login';
import SignUp from './signUp';

const Authentication = props => {
  const { path: currentPath } = useRouteMatch();

  return (
    <Switch>
      <Route path="/auth" exact>
        <Redirect to={`${currentPath}/login`} />
      </Route>
      <Route path={`${currentPath}/login`} exact>
        <Login></Login>
      </Route>
      <Route path={`${currentPath}/register-new`} exact>
        <SignUp></SignUp>
      </Route>
    </Switch>
  );
};

export default Authentication;
