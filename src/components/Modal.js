import React from 'react'
import ReactDOM from 'react-dom'


const Modal = ({title, content, actions, onDismiss}) => {
    return ReactDOM.createPortal(
        <div onClick={onDismiss} className="visible ui dimmer modals active">
            <div onClick={e => e.stopPropagation()} className="visible ui standard modal active">
                <div className="header">{title}</div>
                <div className="content">
                    {content}
                </div>
                <div className="actions">
                    {actions}
                </div>
            </div>
        </div>, document.querySelector('#modal')

    )
}

export default Modal
