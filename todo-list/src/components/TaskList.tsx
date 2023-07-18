import React from "react";
import {ITask} from "../interfaces/Task";

import styles from './TaskList.module.css'

type Props = {
    taskList: ITask[]
}

const TaskList = (props: Props) => {
    const { taskList } = props;

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
                                <i className='bi bi-pencil'></i>
                                <i className='bi bi-trash'></i>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Não tem tarefas cadastradas</p>
            )}
        </>
    )
}

export default TaskList;