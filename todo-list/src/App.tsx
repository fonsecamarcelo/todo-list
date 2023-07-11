import React from 'react';
import Header from "./components/Header";
import Foooter from "./components/Foooter";

import './App.css'
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div >
        <Header />
        <main className='main'>
            <div>
                <h2>O que você vai fazer?</h2>
                <TaskForm btnText='Criar tarefa'/>
            </div>
            <div>
                <h2>Suas tarefas:</h2>
                <TaskList/>
            </div>
        </main>
        <Foooter />
    </div>
  );
}

export default App;
