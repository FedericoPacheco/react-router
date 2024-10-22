import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { About, ABOUT_PATH } from './About/About';
import { Home, HOME_PATH } from './Home/Home';
import { Blog, BLOG_PATH } from './Blog/Blog';
import { BlogPost } from './Blog/BlogPost';
import { Profile, PROFILE_PATH } from './Profile/Profile';
import { NotFound } from './NotFound/NotFound';
import { AuthOnly, AuthProvider } from './Auth/AuthContext';
import { Login, LOGIN_PATH } from './Auth/Login';
import { Logout, LOGOUT_PATH } from './Auth/Logout';
import { Menu } from './Menu/Menu';


function App() {
  return (
    <div className="App">
      <HashRouter>
        <AuthProvider>
          <Menu/>
          <Routes>
            <Route path = {HOME_PATH} element = {<Home/>}/>
            <Route path = {ABOUT_PATH} element = {<About/>}/>
            <Route path = {BLOG_PATH} element = {<Blog/>}/>
            <Route path = {PROFILE_PATH} element = {<AuthOnly><Profile/></AuthOnly>}/>
            <Route path = {`${BLOG_PATH}/:slug`} element = {<BlogPost/>}/>
            <Route path = {LOGIN_PATH} element = {<Login/>}/>
            <Route path = {LOGOUT_PATH} element = {<AuthOnly><Logout/></AuthOnly>}/>
            <Route path = "*" element = {<NotFound/>}/>
          </Routes>
        </AuthProvider>
      </HashRouter>
    </div>
  );
}

export default App;
