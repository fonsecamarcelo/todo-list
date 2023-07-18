import React, {useState} from 'react';
import Header from "./components/Header";
import Foooter from "./components/Foooter";

import './App.css'
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import {ITask} from "./interfaces/Task";

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
