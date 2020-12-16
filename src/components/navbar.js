// import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Googleauth from './googleauth';



const Navbar =()=>  {
  
  // const [selected, setSelected] = useState(1);

//   useEffect(() => {
//     window.addEventListener('pageshow', () => {
//        console.log('assadasdad')
//       if (window.location.href === "/") {
    
//     setSelected(1)
//   }
// },[])
//     })
   
  
  
    return (
      <div className="ui purple inverted segment">
        <div className="ui inverted secondary menu secbar">
          <Link className= 'item'  to="/"><h1>Post Logs</h1></Link>
          
          <div className="right menu">
            <Link className='item' to="/posts/myposts"><h2>My Posts</h2></Link>
            <Link className='item'  to="/"><h2>All Posts</h2></Link>
          </div>
          <div className="right menu">
            <Googleauth />
            <Link className='item'  to="/">Help</Link>
          </div>
        </div>
      </div>
    )
  
}
export default Navbar;