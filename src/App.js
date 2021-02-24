import './App.css';
import Content from './components/Content';
import Menu from './components/Menu';
import React, {Component} from "react";
import backgroundPath from './img/barcelona.jpg'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Details from './components/Details';

class App extends Component{
  constructor () {
    super()

    this.state = {
      backgroundImage: 'linear-gradient(to bottom,rgba(87, 56, 0, 0.55), rgba(255, 214, 161, 0.4), rgba(87, 56, 0, 0.55)), url('+backgroundPath+')',
      currentCity: 'Barcelona',
      cities: [
        {
          title: 'Barcelona',
          descriptionFirst: "Barcelona is a city on the coast of northeastern Spain. It is the capital and largest city of the autonomous community of Catalonia, as well as the second most populous municipality of Spain. With a population of 1.6 million within city limits,[7] its urban area extends to numerous neighbouring municipalities within the Province of Barcelona and is home to around 4.8 million people,[3] making it the fifth most populous urban area in the European Union after Paris, the Ruhr area, Madrid, and Milan.[3] It is one of the largest metropolises on the Mediterranean Sea, located on the coast between the mouths of the rivers Llobregat and Besòs, and bounded to the west by the Serra de Collserola mountain range, the tallest peak of which is 512 metres (1,680 feet) high.",
          descriptionSecond: "Founded as a Roman city, in the Middle Ages Barcelona became the capital of the County of Barcelona. After joining with the Kingdom of Aragon to form the confederation of the Crown of Aragon, Barcelona, which continued to be the capital of the Principality of Catalonia, became the most important city in the Crown of Aragon and the main economic and administrative centre of the Crown, only to be overtaken by Valencia, wrested from Arab domination by the Catalans, shortly before the dynastic union between the Crown of Castile and the Crown of Aragon in 1492. Barcelona has a rich cultural heritage and is today an important cultural centre and a major tourist destination. Particularly renowned are the architectural works of Antoni Gaudí and Lluís Domènech i Montaner, which have been designated UNESCO World Heritage Sites. Since 1450, it is home to the University of Barcelona, widely considered the most prestigious university in Spain. The headquarters of the Union for the Mediterranean are located in Barcelona. The city is known for hosting the 1992 Summer Olympics as well as world-class conferences and expositions and also many international sport tournaments."
        },
        {
          title: 'London',
          descriptionFirst: "London is the capital and largest city of England and the United Kingdom.[8][9] The city stands on the River Thames in the south-east of England, at the head of its 50-mile (80 km) estuary leading to the North Sea. London has been a major settlement for two millennia. Londinium was founded by the Romans.[10] The City of London, London's ancient core and financial centre − an area of just 1.12 square miles (2.9 km2) and colloquially known as the Square Mile − retains boundaries that closely follow its medieval limits.[11][12][13][14][15][note 1] The adjacent City of Westminster has for centuries been the location of much of the national government. Thirty-one additional boroughs north and south of the river also comprise modern London. London is governed by the mayor of London and the London Assembly.",
          descriptionSecond: "London is one of the world's most important global cities.[18] It exerts a considerable impact upon the arts, commerce, education, entertainment, fashion, finance, healthcare, media, professional services, research and development, tourism and transportation.[19] It is one of the largest financial centres.[20] In 2019, London had the highest number of ultra high-net-worth individuals in Europe.[21] And in 2020, London had the second-highest number of billionaires of any city in Europe, after Moscow.[22] London's universities form the largest concentration of higher education institutes in Europe,[23] and London is home to highly ranked institutions such as Imperial College London in natural and applied sciences, and the London School of Economics in social sciences.[24] In 2012, London became the first city to have hosted three modern Summer Olympic Games."
        },
        {
          title: 'Paris',
          descriptionFirst: "Paris is the capital and most populous city of France, with an estimated population of 2,148,271 residents as of 2020, in an area of more than 105 square kilometres (41 square miles).[1] Since the 17th century, Paris has been one of Europe's major centres of finance, diplomacy, commerce, fashion, science and arts. The City of Paris is the centre and seat of government of the Île-de-France, or Paris Region, which has an estimated official 2020 population of 12,278,210, or about 18 percent of the population of France.[1] The Paris Region had a GDP of €709 billion ($808 billion) in 2017.[4] According to the Economist Intelligence Unit Worldwide Cost of Living Survey in 2018, Paris was the second most expensive city in the world, after Singapore, and ahead of Zürich, Hong Kong, Oslo and Geneva.[5] Another source ranked Paris as most expensive, on a par with Singapore and Hong Kong, in 2018.",
          descriptionSecond: "The city is a major railway, highway and air-transport hub served by two international airports: Paris–Charles de Gaulle (the second busiest airport in Europe) and Paris–Orly.[8][9] Opened in 1900, the city's subway system, the Paris Métro, serves 5.23 million passengers daily;[10] it is the second busiest metro system in Europe after the Moscow Metro. Gare du Nord is the 24th busiest railway station in the world, but the first located outside Japan, with 262 million passengers in 2015.[11] Paris is especially known for its museums and architectural landmarks: the Louvre was the most visited art museum in the world in 2019, with 9.6 million visitors."
        }
      ]
    }

    this.changeBackground = this.changeBackground.bind(this);
    this.changeOfficialTitle = this.changeOfficialTitle.bind(this);
  }

  changeBackground (backgroundImage) {
    this.setState({ backgroundImage: backgroundImage })
  }
  changeOfficialTitle (title) {
    this.setState({ title: title })
  }

  render(){
    return (
      <Router>
          <div className="App" style={this.state}>
            <header className="App-header">
              <div className="App-content">
                <Menu />
                <Switch>
                  <Route path="/details">
                    <Details state={this.state}/>
                  </Route>
                  <Route path="/dashboard">
                    <Content changeBackground={this.changeBackground} changeOfficialTitle={this.changeOfficialTitle}/>
                  </Route>
                  <Route path="/">
                    <Content changeBackground={this.changeBackground} changeOfficialTitle={this.changeOfficialTitle}/>
                  </Route>
                </Switch>
              </div>
            </header>
          </div>
      </Router>
    );
}
}

export default App;

