import React from 'react';
import { SignIn, SignOut } from '../actions';
import { connect } from 'react-redux';

const KEY = "99867694739-tvmm2fpnhp57jan011q3qf9qnn8h3m1m.apps.googleusercontent.com";

class Googleauth extends React.Component{
   
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: KEY,
                scope:'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                
                this.listener(this.auth.isSignedIn.get());

                this.auth.isSignedIn.listen(this.listener);
            })
        })
    }
    listener = (issignedin) => {
        if (issignedin) {
            this.props.SignIn(this.auth.currentUser.get().getId())
        } else {
            this.props.SignOut()
        }
    }
    onsignin = () => {
        this.auth.signIn();
    };
    onsignout = () => {
        this.auth.signOut();
    }
    renderbutton = () => {
        if (this.props.issignedin === null) {
        return null
        } else if (this.props.issignedin) {
            return (
                <button className="ui google plus button" onClick={this.onsignout}>
                  <i className="google icon"></i>
                  Sign Out
                </button>
            )
        } else {
            return (
                <button className="ui google plus button" onClick={this.onsignin}>
                  <i className="google icon"></i>
                  Sign In With Google
                </button>
            )
    }
}

    render() {
        return (
            <div className="item">{this.renderbutton()}</div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
            issignedin:state.auth.issignedin
        }
    }
export default connect(mapStateToProps, {SignIn, SignOut})(Googleauth)