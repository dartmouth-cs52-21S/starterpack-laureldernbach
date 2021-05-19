import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { fetchHellos } from '../actions';

const API_KEY = '?key=isaac_spokes';
class Posts extends Component {
  componentDidMount() {
    this.props.fetchHellos();
  }

  render() {
    if (!this.props.hello) {
      return (<div>loading...</div>);
    } else {
      const posts = this.props.posts.map((post) => {
        // console.log(post.coverUrl);
        // console.log(post);
        return (
          <div id="helloDisplay">
            <p>hello</p>
            <NavLink to={`posts/${post.id}${API_KEY}`} className="postLink" key={post.id}>
              <div className="generalPost">
                <img className="posts-images" alt={`${post.id}coverImg`} id="coverImg" src={`${post.coverUrl}`} />
                <div className="title">{post.title}</div>
                <div className="tags">{post.tags}</div>
              </div>
            </NavLink>
          </div>
        );
      });
      return posts;
    }
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts.all,
});

export default withRouter(connect(mapStateToProps, { fetchPosts })(Posts));
