import react from "react";
import {BrowserRouter,Route,Switch} from "react-router-dom";


import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllBlogs from "./components/AllBlogs";
import CreateBlog from "./components/CreateBlog";
import SingleBlog from "./components/SingleBlog";
import UpdateBlog from "./components/UpdateBlog";
import NewBlog from "./components/newBlog";


function App() {
  return (
    <div className="App">
  
      <BrowserRouter>
      <Navbar />
         <Switch>
         <Route path='/createblog' component={CreateBlog}/>
          <Route path='/updateblog/:id' component={UpdateBlog}/>
          <Route path='/fullblog/:id' component={SingleBlog}/>
          <Route exact path="/" component={Home} />
          <Route  path="/allblogs" component={AllBlogs} />
          <Route  path="/newblog" component={NewBlog} />
         
         </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
