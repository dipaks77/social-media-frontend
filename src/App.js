import './App.css';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';

import PublicRoutes from './routes/PublicRoutes';
import PrivateRoutes from './routes/PrivateRoutes';

import Login from './components/Login'
import Register from './components/Register'
import User from './components/User'
import PendingList from './components/PendingList'
import MyFriendsList from './components/MyFriendsList'

import { Provider } from 'react-redux';
import configStore from './store/configStore';

function App() {

  const store = configStore()

  return (
    <BrowserRouter>
      <Switch>
        <Provider store={store}>
          <Redirect path='/' to='/login' exact />
          <PublicRoutes restricted={true} path='/login' component={Login} exact />
          <PublicRoutes restricted={true} path='/register' component={Register} exact />
          <PrivateRoutes path='/user' component={User} exact />
          <PrivateRoutes path='/pending-list' component={PendingList} exact />
          <PrivateRoutes path='/my-friends' component={MyFriendsList} exact />
        </Provider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
