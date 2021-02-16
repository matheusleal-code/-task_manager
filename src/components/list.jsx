import React from 'react'
import IconButton from './iconButton'
import './list.css'

export default props => {


    const renderRows = () => {
        const list = props.tasks.list || []
        return list.map(task => (
            <tr key={task._id}>
                <td className={task.done ? 'done' : ''}>{task.description}</td>
                <td className="actions">
                    <IconButton icon='check' hide={task.done} onClick={() => props.handleMarkAsDone(task)}/>
                    <IconButton icon='refresh' hide={!task.done} onClick={() => props.handleMarkAsPending(task)}/>
                    <IconButton icon='close' hide={!task.done} onClick={() => props.handleRemove(task)}/>
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
                            <th></th>
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
