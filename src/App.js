import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Menu, HOME_PATH, ABOUT_PATH, BLOG_PATH } from './Menu/Menu';
import { About } from './About/About';
import { Home } from './Home/Home';
import { Blog } from './Blog/Blog';
import { BlogPost } from './Blog/BlogPost';
import { NotFound } from './NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Menu/>
        <Routes>
          <Route path = {HOME_PATH} element = {<Home/>}/>
          <Route path = {ABOUT_PATH} element = {<About/>}/>
          <Route path = {BLOG_PATH} element = {<Blog/>}/>
          <Route path = {`${BLOG_PATH}/:slug`} element = {<BlogPost/>}/>
          <Route path = "*" element = {<NotFound/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
