import React from 'react';
import Task from "./Task";

const Columns = (props) => {
    const {status, tasks, changePriority, changeStatus, statuses, onDelete, priority, updateTask} = props;


    return (

        <div className="col">
            <h2>{status.toUpperCase()}</h2>
            {tasks.filter(el => status === el.status).map(el => (
                <Task key={el.id}
                      task={el}
                      changePriority={changePriority}
                      changeStatus={changeStatus}
                      statuses={statuses}
                      onDelete={onDelete}
                      priority={priority}
                      updateTask={updateTask}
                />
            ))}
        </div>

    );
};

export default Columns;