import React from 'react'
import If from '../template/If'

export default props => (
    <If test={!props.hide}>
        <button className={`btn btn-${props.estilo}`} onClick={props.onClick} title={props.title}>
            <i className={`fa fa-${props.icon}`}></i>
        </button>
    </If>
)
