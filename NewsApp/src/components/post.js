/* eslint-disable no-undef */
import React, { Component } from "react";
import { connect } from "react-redux";
import {deletePost} from '../actions/postactions'

class Post extends Component {
    handleClick=()=>{
        this.props.deletePost(this.props.post.id)
        this.props.history.push('/');
    }

  render() { 
      console.log(this.props)
    const post = this.props.post ? (
      <div className="post">
        <h4 className="center">{this.props.post.title}</h4>
        <span>{this.props.post.body}</span>
      </div>
    ) : (
      <div className="center">
        <button className="btn grey" onClick={this.handleClick}>
          Delete Post
          </button>
      </div>
      
    );
    return (
      <div className="container">
        <h4>{post}</h4>
      </div>
    );
  }
}

const mapStateToProps=(state,ownProps)=>{
    let id= ownProps.match.params.post_id;
    return {
        post:state.posts.find(post=> post.id===id)
    }
}

const mapDispatchToProps=(dispatch)=>{
  return{
      deletePost:(id)=>{dispatch(deletePost(id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
