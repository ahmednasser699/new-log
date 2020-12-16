import React from 'react';
import { fetchPost } from '../actions';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'

 
class Postdetails extends React.Component {
    componentDidMount() {
     
        this.props.fetchPost(this.props.match.params.id)
    }
    renderbuttons = (post) => {
        if (this.props.userId === post.userId) {
            return (
                <div style={{float:"right", margin:"25px"}}>
                    <Link className="ui primary button" style={{ marginRight: "10px" }} to={`/posts/edit/${post.id}`}>
                        <i className="edit icon"></i>
                        Edit</Link>
                    <Link className="ui negative button" to={`/posts/delete/${post.id}`}>
                        <i className="trash icon"></i>
                        Delete</Link>
            </div>
        )
        }
    }
    rendercontent = (post) => {
        return (
             <div className="content" style={{maxWidth:'800px',overflow:'hidden'}}> 
                  
              
            
                    <h2 >{post.title}</h2>
               
                
              
                    <h3>{post.description}</h3>
              
                
                <div className="description">
                    {post.content}
                </div>
                
                   
                
                </div>
        )
    }
    render() {
        if (!this.props.post) {
            return null
        }
        return (
           <div style={{ marginTop: '25px' }}>
               
                    {this.rendercontent(this.props.post)}
              
               
                    <div className=" eight wide column">{this.renderbuttons(this.props.post)}</div>
                   
            </div>
                
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        post: state.posts[ownProps.match.params.id],
        userId:state.auth.userId
    }
}
export default connect(mapStateToProps, {fetchPost})(Postdetails)