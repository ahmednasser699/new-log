import React from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import history from '../history';
import Navbar from './navbar';
import Postlist from './postlist';
import Postcreate from './postcreate';
import Postdetails from './postdetails';
import PostEdit from './postedit';
import PostDelete from './postdelete';
import Myposts from './myposts';

const App = () => {
    return (
       
           
            <Router history={history}>
            <div className="navdiv" style={{backgroundColor:'#a333c8'}}>
                <div className="ui container">
                     <Navbar />
                </div>
               </div>
            
             <div className="ui container">
                <Switch>
                        <Route path="/" exact component={Postlist} />
                        <Route path="/posts/myposts" exact component={Myposts} />
                        <Route path="/posts/details/:id" exact component={Postdetails} />
                        <Route path="/posts/edit/:id" exact component={PostEdit} />
                        <Route path="/posts/delete/:id" exact component={PostDelete}/>
                    <Route path="/posts/create" exact component={Postcreate}/>
                </Switch>
                    </div>
            </Router>
      
    )
}
export default App