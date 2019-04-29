import React, { Component } from 'react';
import './Header.css';
import { Switch, Route, Link } from 'react-router-dom';
import DriverList from './DriverList';
import HomePage from './HomePage';
import RaceList from './RaceList';
import ResultsOfRace from './ResultsOfRace';
import StatusList from './StatusList';
import PointsList from './PointsList';

class Header extends Component {
  
  
  render() {
    return (
      <div>
      <div className="myHeader">
        <h1>Formel 1</h1>       
          <nav>
            <ul>
              <li><Link to ="/homepage">Homepage</Link></li>
              <li><Link to ="/races">Drivers</Link></li>
              <li><Link to ="/racelist">Races</Link></li>
              <li><Link to ="/results">Results of the 1# race</Link></li>
              <li><Link to ="/status">Status of the 2019 races</Link></li>
              <li><Link to ="points">All the current points</Link></li>
            </ul>        
          </nav>     
      </div>
      <Switch>
        <Route path="/races" component={DriverList}/>
        <Route path="/homepage" component={HomePage}/>
        <Route path="/racelist" component={RaceList}/>
        <Route path="/results" component={ResultsOfRace}/>
        <Route path="/status" component={StatusList}/>
        <Route path="/points" component={PointsList}></Route>
      </Switch>
      </div>   
    )
  }
}

export default Header 