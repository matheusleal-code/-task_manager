import React, { useEffect, useState } from 'react'
import './taskManager.css'

import Menu from '../components/menu'
import List from '../components/list'
import Modal from '../components/modal'
import Footer from '../templates/footer'

import axios from 'axios'

const URL = 'http://localhost:8000/api/tasks'

export default props => {

    const [description, setDescription] = useState('')
    const [task, setTask] = useState([])
    const [search, setSearch] = useState('')
    const [modal, setModal] = useState(false)

    useEffect(() => {
        refresh(search)
    }, [setTask, search])

    function activeModal() {
        modal ? setModal(false) : setModal(true)
    }

    function handleChangeDescription(e) {
        setDescription(e)
    }

    function handleChangeSearch(e){
        setSearch(e)
    }

    function handleMarkAsDone(task){
        axios.put(`${URL}/${task._id}`, {...task, done: true})
            .then(resp => refresh(search))
    }

    function handleMarkAsPending(task){
        axios.put(`${URL}/${task._id}`, {...task, done: false})
            .then(resp => refresh(search))
    }

    function refresh(search = ''){
        const text = search ? `&description__regex=/${search}/` : ''  
        axios.get(`${URL}?sort=-createdAt${text}`)
            .then(resp => setTask({...task, search, list: resp.data}))
    }

    function addTask(){
        axios.post(URL, {description})
            .then(resp => refresh())
        
    }

    function handleRemove(task){
        axios.delete(`${URL}/${task._id}`)
            .then(resp => refresh(search))
    }

    return (

        <div className="container">
            <Menu activeModal={() => activeModal()} search={search} setSearch={handleChangeSearch}/>
            <List tasks={task} handleMarkAsDone={handleMarkAsDone} handleMarkAsPending={handleMarkAsPending} handleRemove={handleRemove}/>
            <Modal modal={modal}
                activeModal={() => activeModal()}
                description={description}
                handleChange={handleChangeDescription}
                addTask={addTask}/>
            <Footer/>
        </div>
    )
}