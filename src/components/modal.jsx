import React from 'react'
import './modal.css'

export default props => (
    <div className={`modal-overlay ${props.modal ? 'active' : ''}`}>
        <div className="modal">
            <div id="form">
                <h2>Nova Tarefa</h2>
                <form action="#">
                    <div className="input-group">
                        <label htmlFor="description" className="sr-only">Descrição</label>
                        <input type="text" value={props.description} onChange={e => props.handleChange(e.target.value)} name="description" placeholder="Descrição" className="input-group" />
                    </div>

                    <div className="input-group actions">
                        <a href="#" onClick={() => props.activeModal()} className="button cancel">Cancelar</a>
                        <button onClick={() => props.addTask()}>Salvar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
)