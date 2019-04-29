import React from 'react';
import { connect } from 'react-redux';
import { fetchResult } from '../actions';


class Result extends React.Component {
    componentDidMount(){
        this.props.fetchResult(2019,1);
    }

    renderList() {
        return this.props.results.map(result => {
            return (
                <div> 
                <h1> Round: {result.round}</h1>
                <h1> Season: {result.season} </h1>
                <h1> Date: {result.date} </h1>
                </div>                
            )
        })
    }

    render() {
        return <div>{this.renderList()}</div>;
    }
}

const mapStateToProps = state => {
    return { results: state.results };
}
export default connect(mapStateToProps, {fetchResult})(Result);