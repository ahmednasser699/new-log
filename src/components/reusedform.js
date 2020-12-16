import React from 'react';


import { Field, reduxForm } from 'redux-form';

class Reusedform extends React.Component{
    renderform = ({ label, input, meta }) => {
       
        const classname = `field ${meta.touched && meta.error ? "error" : ""}`
        return (
            <div className={classname}>
                <label>{label}</label>
                <input {...input} />
                {this.rendererror(meta)}
            </div>
        )
    }

    rendererror = ({touched, error}) => {
        if (touched && error) {
            return(
               <div className="ui error message">
                   <div className="header">{error}</div>
               </div>
           )
        }
    }

    renderTextarea = ({ input, meta, label }) => {
         const classname = `field ${meta.touched && meta.error ?"error":""}`
        return (
            <div className={classname}>
                <label>{ label }</label>
                <textarea {...input} />
                {this.rendererror(meta)}
            </div>
        )
    }
    onFormSubmit = (values) => {
        this.props.onFormSubmit(values)
    }
    render() {
        return (
             
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
                <Field name="title" component={ this.renderform} label="Title"/>
                    <Field name="description" component={this.renderform} label="Description" />
                     <Field name="content" component={this.renderTextarea} label="content" />
                <button className="ui primary button">
                    <i className="sign in icon"></i>
                    Submit</button>
                </form>
                
        )
    }
}

const validate = (values) => {
    const error = {};
    if (!values.title) {
        error.title = 'you must enter a title';
    } if (!values.description) {
        error.description = "you must enter a description";
    } if (!values.content) {
        error.content = "you must enter a content";
    }
    return error;
}
export default reduxForm({
    form: 'form',
    validate
})(Reusedform)