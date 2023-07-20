import React from "react";
import {ITask} from "../interfaces/Task";

import styles from './TaskList.module.css'

type Props = {
    taskList: ITask[];
    handleDelete(id: number): void;
    handleEdit(task: ITask): void;
}

const TaskList = (props: Props) => {
    const { taskList, handleDelete, handleEdit } = props;

    return (
        <>
            {taskList.length > 0 ? (
                <div className={styles.taskMain}>
                    {taskList.map((task) => (
                        <div className={styles.taskCard} key={task.id}>
                            <div>
                                <h4>{task.title}</h4>
                                <p>Dificuldade: {task.difficulty}</p>
                            </div>
                            <div>
                                <i className={`bi bi-pencil ${styles.icons}`} onClick={() => {handleEdit(task)}}></i>
                                <i className={`bi bi-trash ${styles.icons}`} onClick={() => {handleDelete(task.id)
                                }}></i>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Não tem tarefas cadastradas :(</p>
            )}
        </>
    )
}

export default TaskList;