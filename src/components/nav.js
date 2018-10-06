import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => (
    <nav>
    <ul>
    <li><Link to="/">React GraphQL Client</Link> <br/> Powered By Love &amp; Apollo Server</li>
 
 
  </ul>
  
  <ul>
    <li><Link to="/"> <i className="fas fa-angle-right"></i> All Posts</Link></li>
    <li><Link to="/mutation"> <i className="fas fa-angle-right"></i> Mutate</Link></li>
 
  </ul>
  </nav>
);
  

  
  

export default Nav;
