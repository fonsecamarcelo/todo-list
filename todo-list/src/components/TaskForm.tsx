import React, {ChangeEvent, ChangeEventHandler, FormEvent, useState} from "react";

import styles from './TaskForm.module.css'

import {ITask} from "../interfaces/Task";

type Props = {
    btnText: string;
    taskList: ITask[]
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
}

const TaskForm = (props: Props) => {
    const {btnText, taskList, setTaskList} = props;

    const [id, setId] = useState<number>(0);
    const [title, setTitle] = useState<string>('');
    const [difficulty, setDiffuculty] = useState<number | undefined>(0);

    const addTaskHandle = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const id = Math.floor(Math.random() * 1000)

        const newTask: ITask = {id, title, difficulty: difficulty || 0}

        setTaskList!([...taskList, newTask])

        setTitle('')
        setDiffuculty(0)
console.log(setTaskList)
    }

    const handleChange: ChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === 'title'){
            setTitle(e.target.value)
        } else {
            setDiffuculty(e.target.value ? parseInt(e.target.value) : undefined)
        }
    }

    return (
            <form onSubmit={addTaskHandle} className={styles.form}>
                <div className={styles.input_container}>
                    <label htmlFor="title">Título:</label>
                    <input type="text" name='title' placeholder='Título da tarefa' onChange={handleChange} value={title}/>
                </div>
                <div className={styles.input_container}>
                    <label htmlFor="difficulty">Dificuldade:</label>
                    <input type="number" name='difficulty' placeholder='Dificuldade da tarefa' onChange={handleChange} value={difficulty}/>
                </div>
                <input type="submit" value={btnText}/>
            </form>
    )
}

export default TaskForm