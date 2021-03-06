import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StremShow extends Component {
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }

    render(){
        if(!this.props.stream){
            return <div>Loading...</div>
        }
        const { title, description } = this.props.stream;
        return (
            <div>
                <h1>{title}</h1>
                <h5>{description}</h5>
            </div>
        )
    }
    
}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps)
    console.log(state.streams[ownProps.match.params.id]);
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {fetchStream: fetchStream})(StremShow);