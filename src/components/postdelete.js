import React from 'react';
import Modal from './modal';
import { fetchPost, deletePost } from '../actions';
import { connect } from 'react-redux';
import history from '../history';
import PostList from './postlist';


class DeletePost extends React.Component{
    componentDidMount() {
        this.props.fetchPost(this.props.match.params.id);
       
    };
    actions(){
        return (
                <>
                 <button className="ui negative button" onClick={()=>this.props.deletePost(this.props.post.id)}>Delete</button>
                 <button className="ui button" onClick={()=>history.push('/')}>Cancel</button>
                </>
    )
    };
   
   
    render() {
        if (!this.props.post) {
              return null  
            }
        return (
            
            <div>
              <PostList/>
                <Modal title='Delete Post' postName={<text is="" style={{color:'red', fontSize:'20px', fontWeight:'bold'}}>{ this.props.post.title}</text>} actions={this.actions()} navpage={this.props.post.id } />
        </div>)
    }
}
const mapStateToProps = (state,ownProps) => {
    return {
        post:state.posts[ownProps.match.params.id]
    }
}
export default connect(mapStateToProps, {fetchPost, deletePost})(DeletePost)