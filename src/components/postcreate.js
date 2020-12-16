import React from 'react';
import { connect } from 'react-redux';
import { Createpost } from '../actions';
import ReusedForm from './reusedform';

class Postcreate extends React.Component{
     onFormSubmit=(values)=>{
        this.props.Createpost(values);
    }
   
   

    render() {
       
        return (
            <div style={{marginTop:'20px'}}>
                <h2>Create New post</h2>
            <ReusedForm onFormSubmit={this.onFormSubmit} />
           </div>

         
        )
    }
    
    }
   





export default connect(null, {Createpost} )(Postcreate)