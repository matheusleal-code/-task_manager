import React, { useEffect, useState } from 'react'
import './taskManager.css'

import Menu from '../components/menu'
import List from '../components/list'
import Modal from '../components/modal'

import axios from 'axios'

const URL = 'http://localhost:8000/api/tasks'

export default props => {

    const [description, setDescription] = useState('')
    const [task, setTask] = useState([])
    const [modal, setModal] = useState(false)

    useEffect(() => {
        refresh()
    }, [setTask])

    function activeModal() {
        modal ? setModal(false) : setModal(true)
    }

    function handleChange(e) {
        setDescription(e)
    }

    function handleMarkAsDone(task){
        axios.put(`${URL}/${task._id}`, {...task, done: true})
            .then(resp => refresh())
    }

    function handleMarkAsPending(task){
        axios.put(`${URL}/${task._id}`, {...task, done: false})
            .then(resp => refresh())
    }

    function refresh(description = ''){
        axios.get(`${URL}?sort=-createdAt`)
            .then(resp => setTask({...task, list: resp.data}))
    }

    function addTask(){
        axios.post(URL, {description})
            .then(resp => refresh())
        
    }

    function handleRemove(task){
        axios.delete(`${URL}/${task._id}`)
            .then(resp => refresh())
    }

    return (

        <div className="container">
            <Menu activeModal={() => activeModal()} />
            <List tasks={task} handleMarkAsDone={handleMarkAsDone} handleMarkAsPending={handleMarkAsPending} handleRemove={handleRemove}/>
            <Modal modal={modal}
                activeModal={() => activeModal()}
                description={description}
                handleChange={handleChange}
                addTask={addTask}/>
        </div>
    )
}