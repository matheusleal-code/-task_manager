import React from 'react'
import './menu.css'

export default props => (
    <div className="menu-container">
        <nav className="menu">
            <ul>
                <li>TaskManager</li>
                <li><button onClick={() => props.activeModal()}><i className="fa fa-pencil"></i></button></li>
            </ul>
        </nav>
    </div>
)