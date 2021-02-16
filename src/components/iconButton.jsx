import React from 'react'
import If from '../templates/if'
import './iconButton.css'

export default props => (
    <If test={!props.hide}>
        <button className={`fa fa-${props.icon}`} onClick={props.onClick}></button>
    </If>
)