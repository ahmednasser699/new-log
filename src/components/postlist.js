import React from 'react';
import { fetchposts } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Postlist extends React.Component{
    componentDidMount() {
        this.props.fetchposts();
      
    }
    renderlist = () => {
       return this.props.posts.map(post => {
            return (
                <Link className="item" key={post.id} to={`/posts/details/${post.id}`}>
                    <i className="large book middle aligned icon"></i>
                    <div className="content">
                        <div className="header">{post.title}</div>
                        <div className="description">{post.description}</div>
      
                    </div>
                </Link>
            )
        })
    }
    rendercreatebutton = () => {
        if (this.props.issignedin) {
            return (
                <div style={{float:'right', margin:'10px'}}>
                    <Link className="ui positive button" to="/posts/create">
                        <i className="pencil alternate icon"></i>
                        Create New Post
                        </Link>
                </div>
            )
        }
    }
    render() {
        
        return (
            <div>
               {this.rendercreatebutton()}
                
                <h2>Posts</h2>

            
            <div className="ui relaxed divided list">
               
               
                {this.renderlist()} 
                
                </div>
                </div>
        );
    }
  
}
const mapStateToProps = (state) => {
    return {
        posts: Object.values(state.posts).reverse(),
        issignedin: state.auth.issignedin
    }
}
export default connect(mapStateToProps, {fetchposts})(Postlist)