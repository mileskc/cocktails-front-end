import React, { Component } from 'react';

const modal = (props) => {
    return (
        <div className = "modal-component">
            <div className="modal-wrapper"
                style={{
                    transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                <div className="modal-header">
                
                </div>
                <div className="modal-body">
                    <p>
                        {props.children}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default modal;