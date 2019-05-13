import React from 'react';
import { connect } from 'react-redux';
import { fetchRaces } from '../actions';


class RaceList extends React.Component {
    componentDidMount(){
        this.props.fetchRaces();
    }

    renderList() {
        return this.props.races.map(race => {
            return (
                <li  key={race.round}>
                   <h1>Race: {race.raceName}
                   <h2>Location: {race.Circuit.circuitName} </h2>
                   <h2>Country: {race.Circuit.Location.country}</h2>
                   </h1>
                </li>
            )
        })
    }

    render() {
        return (
          <div className ="row">
          <div className="col-1"></div>
          <div className="cole-4">
            <h1>Current F1 Races</h1>
            <ul className="nameList">
            {this.renderList()}
            </ul>            
          </div>
          <div className="col-7"></div>
          </div>                 
        );
      }
    }

const mapStateToProps = state => {
    return { races: state.races };
}
export default connect(mapStateToProps, {fetchRaces})(RaceList);
