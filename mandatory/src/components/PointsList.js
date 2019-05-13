import React from 'react';
import { connect } from 'react-redux';
import { fetchPoints } from '../actions';


class PointsList extends React.Component {
    componentDidMount(){
        this.props.fetchPoints();
        console.log(this.props);
    }

    renderList() {
        return this.props.points.map(p => {
            return (
                <li>
                <h1> Brand: {p.Constructor.name}</h1>
                <h2> Points: {p.points}</h2>
                <h2> Position: {p.position} </h2>
                <h2> Wins: {p.wins} </h2>
                </li>
                
            )
        })
    }

    render() {
        return (
          <div className ="row">
          <div className="col-1"></div>
          <div className="cole-4">
            <h1>F1 Current standings;</h1>
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
    return { points: state.points };
}
export default connect(mapStateToProps, {fetchPoints})(PointsList);
