import React from 'react'
import './list.css'

export default props => {


    const renderRows = () => {
        const list = props.tasks.list || []
        return list.map(task => (
            <tr key={task._id}>
                <td className={task.done ? 'done' : ''}>{task.description}</td>
                <td className="actions">
                    <button className={`fa fa-check ${task.done ? 'sr-only': ''}`} onClick={() => props.handleMarkAsDone(task)}></button>
                    <button className={`fa fa-refresh ${!task.done ? 'sr-only' : ''}`} onClick={() => props.handleMarkAsPending(task)}></button>
                    <button className={`fa fa-close ${!task.done ? 'sr-only' : ''}`} onClick={() => props.handleRemove(task)}></button>
                </td>
            </tr>
        ))
    }

    return (
        <div className="container-task">
            <section id="tasks">
                <h2 className='sr-only'>Tarefas</h2>

                <table id="data-table">
                    <thead>
                        <tr>
                            <th>Descrição</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderRows()}
                    </tbody>
                </table>
            </section>
        </div>
    )
}
