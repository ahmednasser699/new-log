import React from 'react';
import _ from 'lodash';
import { fetchPost,  editPost} from '../actions';
import { connect } from 'react-redux';
import ReusedForm from './reusedform';

class PostEdit extends React.Component {
    componentDidMount() {
        this.props.fetchPost(this.props.match.params.id)
    }
    onEditSubmit = (values) => {
        this.props.editPost(values, this.props.post.id)
    }
    render() {
        if (!this.props.post) {
            return <div>asa</div>
        }
    
        return (
            <div style={{marginTop:'20px'}}>
                <h2>Edit Post</h2>
            <ReusedForm initialValues={_.pick(this.props.post, 'title', 'description', 'content')} onFormSubmit={ this.onEditSubmit}/>
        </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {post:state.posts[ownProps.match.params.id]}
}
export default connect(mapStateToProps, {fetchPost, editPost})(PostEdit)