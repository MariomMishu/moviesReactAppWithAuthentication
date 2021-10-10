import './App.css';
import Movies from './components/movies.component';
import Movie from './components/movie.component';
import Navbar from './common/navbar.component';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Login from './components/login.component';
import SignUp from './components/signup.component';
import Logout from "./components/logout.component";
import MovieForm from './components/movie-from.component';
import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from './common/protectedRoute';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/sign-up' component={SignUp} />  
        <Route path='/logout' component={Logout} />
        <Route exact path='/login' component={Login} />
        <Route path='/' component={Movies} />
        <ProtectedRoute path='/movies' component={Movies} />
        <Route path='/movie/:id' component={Movie} />
        <ProtectedRoute path='/add-movie' component={MovieForm} />
      </Switch>

    </div>
  );
}
export default App;