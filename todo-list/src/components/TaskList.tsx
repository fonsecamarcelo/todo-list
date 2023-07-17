import React from "react";
import {ITask} from "../interfaces/Task";

type Props = {
    taskList: ITask[]
}

const TaskList = (props: Props) => {
    const { taskList } = props;

    return (
        <>
            {taskList.length > 0 ? (
                taskList.map((task) => (
                    <div key={task.id}>
                        <p>{task.title}</p>
                        <p>{task.difficulty}</p>
                    </div>
                ))
            ) : (
                <p>Não tem tarefas cadastradas</p>
            )}
        </>
    )
}

export default TaskList;