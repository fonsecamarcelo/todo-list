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

    const deleteTask = (id: number) => {
        return (
            setTaskList(
                taskList.filter(task => {
                    return task.id !== id
                })
            )
        )
    }

  return (
    <div >
        <Modal >
            <TaskForm btnText='Editar tarefa' taskList={taskList}/>
        </Modal>
        <Header />
        <main className='main'>
            <div>
                <h2>O que você vai fazer?</h2>
                <TaskForm btnText='Criar tarefa' setTaskList={setTaskList} taskList={taskList}/>
            </div>

            <div>
                <h2>Suas tarefas:</h2>
                <TaskList taskList={taskList} handleDelete={deleteTask}/>
            </div>

        </main>
        <Foooter />
    </div>
  );
}

export default App;
