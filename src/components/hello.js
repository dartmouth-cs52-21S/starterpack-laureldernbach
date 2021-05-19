import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { fetchHellos } from '../actions';

class Hellos extends Component {
  componentDidMount() {
    this.props.fetchHellos();
  }

  render() {
    if (!this.props.hellos) {
      return (<div>loading...</div>);
    } else {
      const hellos = this.props.hellos.map((hello) => {
        // console.log(post.coverUrl);
        // console.log(post);
        return (
          <div id="hellosDisplay">
            <h1><NavLink to="/" exact>Home</NavLink></h1>
            <h2>Below is our hello text:</h2>
            <p>{hello.content}</p>
          </div>
        );
      });
      return hellos;
    }
  }
}

const mapStateToProps = (state) => ({
  hellos: state.hellos.all,
});

export default withRouter(connect(mapStateToProps, { fetchHellos })(Hellos));
