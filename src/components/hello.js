import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { fetchHellos, sayHello } from '../actions';

class Hellos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.newHello = this.newHello.bind(this);
  }

  componentDidMount() {
    this.props.fetchHellos();
  }

  onSubmit() {
    // console.log(this.state.post);
    this.props.sayHello({
      text: this.state.text,
    }, this.props.history);
  }

  newHello = (event) => {
    this.setState({ text: event.target.value });
  }

  render() {
    console.log(this.props.hellos);
    // if (!this.props.hellos) {
    //   return (<div>loading...</div>);
    // } else {
    const hellos = this.props.hellos.map((hello) => {
      // console.log(post.coverUrl);
      // console.log(post);
      return (
        <div id="helloDisplay">
          <p>{hello.text}</p>
        </div>
      );
    });
    return (
      <div>
        <div>
          <h2>Enter a new hello!</h2>
          <TextField id="new-hello" label="input hello" variant="outlined" onChange={this.newHello} value={this.state.text} type="text" placeholder="put hello here" />
          <Button id="new-post-button" type="button" onClick={this.onSubmit} variant="contained" color="primary">Submit</Button>
        </div>
        <h2>Below are our hello texts:</h2>
        <div>{hellos}</div>
      </div>
    );
    // }
  }
}

const mapStateToProps = (state) => ({
  hellos: state.hellos.all,
});

export default withRouter(connect(mapStateToProps, { fetchHellos, sayHello })(Hellos));
