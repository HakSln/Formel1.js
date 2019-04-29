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
                <ul  key={race.round}>
                   <li>{race.raceName}</li>
                   <li>{race.Circuit.circuitName} </li>
                   <li>{race.Circuit.Location.country}</li>
                </ul>
            )
        })
    }

    render() {
        return <div>{this.renderList()}</div>;
    }
}

const mapStateToProps = state => {
    return { races: state.races };
}
export default connect(mapStateToProps, {fetchRaces})(RaceList);
