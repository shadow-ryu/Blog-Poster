
import './App.css';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Components/Login';
import BlogDetails from './Components/BlogDetails'
import Home from './Components/Home';
import UserProfile from './Components/UserProfile';
import NewBlog from './Components/NewBlog';
import { useStateValue } from './StateProvider'
import UserBlogs from './Components/UserBlogs';

function App() {
 
  const [{ user }, dispatch] = useStateValue()
  return (
    <Router>
        <div className="App">
          
          <Switch>
       
          <Route exact path="/newblog">

          {
              user ? (
                <>
                  <Header  />
                  <NewBlog/>
                </>
              ) : (
                  <>
              
                  <Login />
                  </>
                
                )
            }
          </Route>
          <Route exact path="/userblog">
            {
              user ? (
                <>
                  <Header  />
                  <UserBlogs/>
                </>
              ) : (
                  <>
              
                  <Login />
                  </>
                
                )
            }
       
            </Route>
            <Route exact path="/login">

            <Login />
            </Route>
        
          <div className="app__body">
            
         
         
          <Header  />
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route exact path="/userProfile">
              <UserProfile />
            </Route>
            



         
          </div>
          </Switch>
      
    
      </div>
    </Router>
  
  );
}

export default App;
