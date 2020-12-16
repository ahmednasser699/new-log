import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';

const Modal = ({title, postName, actions, navpage}) => {
    return ReactDOM.createPortal(
            <div className="ui dimmer modals visible active" onClick={()=>history.push(`/posts/details/${navpage}`)}>
                <div className="ui standard modal visible active" onClick={(e)=>e.stopPropagation()}>
                    <div className="header">{title}</div>
                    <div className="content">Are You Sure You Want To Delete {postName} From The List?</div>
                    <div className="actions">{actions}</div>
                </div>
            </div>,
            document.getElementById('modal')
        )
    
}
export default Modal
