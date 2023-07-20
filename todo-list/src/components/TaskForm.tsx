import React, {ChangeEvent, ChangeEventHandler, FormEvent, useEffect, useState} from "react";

import {ITask} from "../interfaces/Task";

import styles from './TaskForm.module.css'

type Props = {
    btnText: string;
    taskList: ITask[];
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
    task?: ITask | null;
    handleUpdate?(id: number, title: string, difficulty: number): void;
}

const TaskForm = (props: Props) => {
    const { btnText, taskList, setTaskList, task, handleUpdate } = props;

    const [id, setId] = useState<number>(0);
    const [title, setTitle] = useState<string>('');
    const [difficulty, setDiffuculty] = useState<number | 0>(0);

    useEffect(() => {

        if (task) {
            setId(task.id)
            setTitle(task.title)
            setDiffuculty(task.difficulty)
        }

    }, [task])

    console.log(difficulty)

    const addTaskHandle = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (handleUpdate) {
            handleUpdate( id, title, difficulty )

        } else {
            const id = Math.floor(Math.random() * 1000)

            const newTask: ITask = {id, title, difficulty: difficulty || 0}

            setTaskList!([...taskList, newTask])

            setTitle('')
            setDiffuculty(0)
        }
    }

    const handleChange: ChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === 'title'){
            setTitle(e.target.value)
        } else {
            setDiffuculty(e.target.value ? parseInt(e.target.value) : 0)
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