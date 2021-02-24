import '../../src/App.css';
import React, {Component} from "react";

class Details extends Component{
  render(){
    const title = localStorage.getItem('title');
    var descriptionFirst;
    var descriptionSecond;
    if(title==="Barcelona") {
        descriptionFirst = this.props.state.cities[0].descriptionFirst;
        descriptionSecond = this.props.state.cities[0].descriptionSecond;
    }
    else if(title==="London") {
        descriptionFirst = this.props.state.cities[1].descriptionFirst;
        descriptionSecond = this.props.state.cities[1].descriptionSecond;
    }
    else if(title==="Paris") {
        descriptionFirst = this.props.state.cities[2].descriptionFirst;
        descriptionSecond = this.props.state.cities[2].descriptionSecond;
    }

    return(
      <div className="details">
        <span className="details_title">{title}</span>
        <span className="details_description">{descriptionFirst}</span>
        <span className="details_description">{descriptionSecond}</span>
      </div>
    );
}
}
  
  
export default Details;