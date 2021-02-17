import React from 'react'
import './menu.css'

export default props => (
    <div className="menu-container">
        <nav className="menu">
            <span>TaskManager</span>
            <ul>
                <li>
                    <form action='#' className="input-search">
                        <label htmlFor="search" className="sr-only">Pesquisar</label>
                        <input value={props.search} onChange={(e) => props.setSearch(e.target.value)} type="text" name='search' placeholder='Pesquisar' autoComplete='off'/>
                    </form>
                </li>
                <li><button onClick={() => props.activeModal()}><i className="fa fa-pencil"></i></button></li>
            </ul>
        </nav>
    </div>
)