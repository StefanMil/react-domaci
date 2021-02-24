import '../../src/App.css';
import React, {Component} from "react";
import Paris from "../img/paris.jpg";
import Barcelona from "../img/barcelona.jpg";
import London from "../img/london.jpg";

class SliderPicture extends Component{
    cities = [
        {
          title: 'Barcelona',
          description: 'Beautiful city of Spain.',
          backgroundImage: Barcelona
        },
        {
          title: 'London',
          description: 'Beautiful city of United Kingdom.',
          backgroundImage: London
        },
        {
            title: 'Paris',
            description: 'Beautiful city of France.',
            backgroundImage: Paris
          }
    ]

    currentCity = this.cities[0];

    changeCity(){
        if(this.props.state.nextCity===this.cities[0]){
            this.props.state.nextCity = this.cities[1];
            this.props.state.lastCity = this.cities[2];
        }
        else if(this.props.state.nextCity===this.cities[1]){
            this.props.state.nextCity = this.cities[2];
            this.props.state.lastCity = this.cities[0];
        } else if(this.props.state.nextCity===this.cities[2]){
            this.props.state.nextCity = this.cities[0];
            this.props.state.lastCity = this.cities[1];
        } else {
            this.props.state.nextCity = this.cities[2];
            this.props.state.lastCity = this.cities[0];
        }
    }
    
    onClickFunction() {
        if(this.props.main===true){
            this.props.changeBackground('linear-gradient(to bottom,rgba(87, 56, 0, 0.55), rgba(255, 214, 161, 0.4), rgba(87, 56, 0, 0.55)), url('+this.props.state.nextCity.backgroundImage+')');
            this.props.changeTitle(this.props.state.nextCity.title);
            this.props.changeOfficialTitle(this.props.state.nextCity.title);
            this.changeCity();
        }
    }

    render(){
        const dimensions = {
            height: this.props.height,
            width: this.props.width,
            backgroundImage: 'linear-gradient(to bottom,rgba(87, 56, 0, 0.40), rgba(255, 214, 161, 0.2), rgba(87, 56, 0, 0.4)), url('+this.props.cityShowing.backgroundImage+')'
        }
        const font = {
            fontSize: this.props.fontSize
        }
        return(
        <div className="picture" id="background" style={dimensions} 
            onClick={() =>
                this.onClickFunction()
            }>
            <span className="picture__title" style={font}>{this.props.cityShowing.title}</span>
        </div>
    );

    
}
}
  
  
export default SliderPicture;