import React, { Component } from "react";
import {Link} from 'react-router-dom';
import Owl from '../images/owl.jpg';
import {connect} from 'react-redux'

class Home extends Component {

  render() {
    console.log(this.props)
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map((post) => {
        return (
          <div className="post card" key={post.id}>
          <img src={Owl} alt="An owl"></img>
            <div className="card-content" >
            <Link to={'/'+post.id}>
              <span className="card-title red-text">
                 {post.title}
              </span>
              </Link>
              <span>{post.body}</span>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No Posts Yet</div>
    );
    return (
      <div className="container">
        <h4 className="center">Home</h4>
        <span>
         {postList}
        </span>
      </div>
    );
  }
}

const mapStateToProps= (state)=>{
   return {
       posts: state.posts
   }
}

export default connect(mapStateToProps)(Home);

//functional components cannot use life cycle hooks
