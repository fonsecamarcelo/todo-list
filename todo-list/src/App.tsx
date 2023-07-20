import React, {useState} from 'react';
import Header from "./components/Header";
import Foooter from "./components/Foooter";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Modal from "./components/Modal";

import {ITask} from "./interfaces/Task";

import './App.css'
import styles from './components/Modal.module.css'
import taskForm from "./components/TaskForm";

function App() {
    const [taskList, setTaskList] = useState<ITask[]>([]);
    const [ taskToUpdate, setTaskToUpdate ] = useState<ITask | null>(null)

    const deleteTask = (id: number) => {
        return (
            setTaskList(
                taskList.filter(task => {
                    return task.id !== id
                })
            )
        )
    }

    const showOrNotModal = (display: Boolean) => {
        const modal = document.querySelector('#modal')

        if (display) {
            modal!.classList.remove('hide')
        } else {
            modal!.classList.add('hide')

        }
    }

    const editTask = (task: ITask): void => {
        showOrNotModal(true)
        setTaskToUpdate(task)
    }

    const updateTask = (id: number, title: string, difficulty: number) => {

        const updateTask: ITask = { id, title, difficulty }

        const updatedItems = taskList.map((task) => {
            return task.id === updateTask.id ? updateTask : task
        })

        setTaskList(updatedItems)

        showOrNotModal(false)

    }

  return (
    <div >
        <Modal >
            <TaskForm
                btnText='Editar tarefa'
                taskList={taskList}
                task={taskToUpdate}
                handleUpdate={updateTask}
            />
        </Modal>
        <Header />
        <main className='main'>
            <div>
                <h2>O que você vai fazer?</h2>
                <TaskForm
                    btnText='Criar tarefa'
                    taskList={taskList}
                    setTaskList={setTaskList}
                />
            </div>

            <div>
                <h2>Suas tarefas:</h2>
                <TaskList
                    taskList={taskList}
                    handleDelete={deleteTask}
                    handleEdit={editTask}/>
            </div>

        </main>
        <Foooter />
    </div>
  );
}

export default App;
