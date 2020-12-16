import React from 'react';
import { fetchposts } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';




class Myposts extends React.Component {
 
    state={ar:[]}
    componentDidMount() {
        this.props.fetchposts();
       
    }
 
    looplist = () => {
       
        this.props.posts.forEach(post => {
            
            
            if (post.userId === this.props.userId && this.props.userId ) {
                this.state.ar.push(post)
                
                
               
            } 
       }
       
       ); 
    
}
    renderList = () => {
        this.looplist();
        let uniquelist = Array.from(new Set(this.state.ar.map(post => post.id))).map(id => {
           return (
                 <Link className="item" key={this.state.ar.find(post=>post.id === id).id} to={`/posts/details/${this.state.ar.find(post=>post.id === id).id}`}>
                    <i className="large book middle aligned icon"></i>
                    <div className="content">
                        <div className="header">{this.state.ar.find(post=>post.id === id).title}</div>
                        <div className="description">{this.state.ar.find(post=>post.id === id).description}</div>
      
                    </div>
                </Link>
            ) 
        })
       
       return uniquelist
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

                <h2>My Posts</h2>
            <div className="ui relaxed divided list">
                 {this.renderList()}
                </div>
                </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
         issignedin:state.auth.issignedin,
        posts: Object.values(state.posts).reverse(),
        userId: state.auth.userId
       
    }
}
export default connect(mapStateToProps, {fetchposts}) (Myposts)