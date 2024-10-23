import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { About } from './About/About';
import { Home } from './Home/Home';
import { Blog } from './Blog/Blog';
import { BlogPost } from './Blog/BlogPost';
import { EditBlogPost } from './Blog/EditBlogPost';
import { Profile } from './Profile/Profile';
import { NotFound } from './NotFound/NotFound';
import { AuthOnly, AuthProvider } from './Auth/AuthContext';
import { Login } from './Auth/Login';
import { Logout } from './Auth/Logout';
import { Menu } from './Menu/Menu';
import { HOME_PATH, ABOUT_PATH, BLOG_PATH, PROFILE_PATH, LOGIN_PATH, LOGOUT_PATH, EDIT_BLOG_PATH } from './Paths';

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
            <Route path = {`${EDIT_BLOG_PATH}/:slug`} element = {<AuthOnly><EditBlogPost/></AuthOnly>}/>
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
