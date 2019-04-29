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
                <ul>
                <li>{p.points}</li>
                </ul>

            )
        })
    }

    render() {
        return <div>{this.renderList()}</div>;
    }
}

const mapStateToProps = state => {
    return { points: state.points };
}
export default connect(mapStateToProps, {fetchPoints})(PointsList);
