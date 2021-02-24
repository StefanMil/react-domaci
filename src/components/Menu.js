import '../../src/App.css';
import React, {Component} from "react";

class Menu extends Component{
  render(){
    return(
      <div className="menu">
        <span className="menu__logo">Explore the europe!</span>
        <div className="menu__options">
          <a className="menu__link" href="/dashboard">Dashboard</a>
          {/* <a className="menu__link" href="/all-cities">List of cities</a>
          <a className="menu__link" href="/add-new">Add new city</a> */}
          <input className="menu__search" type="text" placeholder="Search.." />
        </div>
      </div>
    );
}
}
  
  
export default Menu;