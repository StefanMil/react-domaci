import '../../src/App.css';
import React, {Component} from "react";
import SliderPicture from './SliderPicture';
import Paris from "../img/paris.jpg";
import Barcelona from "../img/barcelona.jpg";
import London from "../img/london.jpg";

class Content extends Component{
  constructor () {
    super()

    this.state = {
      title: 'Barcelona',
      nextCity: {
        title: 'London',
        description: 'Beautiful city of United Kingdom.',
        backgroundImage: London
      },
      lastCity: {
        title: 'Paris',
        description: 'Beautiful city of France.',
        backgroundImage: Paris
      },
    }

    this.changeTitle = this.changeTitle.bind(this)
  }

  changeTitle(title) {
    this.setState({ title: title })
  }

  openDetails() {
    localStorage.setItem('title', this.state.title);
    window.location.href='/details';
  }

  render(){
    return(
      <div className="content">
        <div className="content__left">
            <button className="content__left__button" type="button" onClick={()=>this.openDetails()}>See more!</button>
            <span className="content__left__title">{this.state.title}</span>
        </div>
        <div className="content__right">
            <SliderPicture height={"130px"} width={"250px"} fontSize={"20px"} 
              backgroundImage={'url("/../img/paris.jpg")'}
              changeBackground={this.props.changeBackground}
              changeTitle={this.changeTitle}
              changeOfficialTitle={this.props.changeOfficialTitle}
              state = {this.state}
              main = {true}
              cityShowing = {this.state.nextCity}
              />
            <SliderPicture height={"70px"} width={"120px"} fontSize={"14px"} 
              backgroundImage={'url("../img/london.jpg")'}
              state = {this.state}
              main = {false}
              cityShowing = {this.state.lastCity}
              />
        </div>
      </div>
    );
}
}
  
  
export default Content;