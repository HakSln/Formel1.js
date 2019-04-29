import React from 'react';
import { connect } from 'react-redux';
import { fetchStatus } from '../actions';


class StatusList extends React.Component {
    componentDidMount(){
        this.props.fetchStatus();
    }

    renderList() {
        return this.props.status.map(status => {
            return (
                <ul>
                <li>{status.status}</li>      
                </ul>          
               )
        })
    }

    render() {
        return <div>{this.renderList()}</div>;
    }
}

const mapStateToProps = state => {
    return { status: state.status };
}
export default connect(mapStateToProps, {fetchStatus})(StatusList);
