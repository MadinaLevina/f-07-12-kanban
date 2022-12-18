import './App.css';
import {v4 as uuidv4} from 'uuid';
import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Columns from "./Columns";
import CreateTaskModal from "./CreateTaskModal";

function App() {

    const todo = [
        {
            id: uuidv4(),
            name: 'Learn JS',
            status: 'done',
            priority: 9,
            description: 'Learn function',
        },
        {
            id: uuidv4(),
            name: 'Learn React',
            status: 'in progress',
            priority: 10,
            description: 'Learn redux',
        },
        {
            id: uuidv4(),
            name: 'Learn Server',
            status: 'todo',
            priority: 5,
            description: 'Learn todo',
        },
        {
            id: uuidv4(),
            name: 'Learn ToDo List',
            status: 'review',
            priority: 7,
            description: 'Learn todo',
        },
    ];

    const [tasks, setTasks] = useState(todo);

    const [statuses, setStatuses] = useState(['todo', 'in progress', 'review', 'done']);

    const [priority, setPriority] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

    const changePriority = (id, value) => {
        const newTasks = tasks.map(el => (id === el.id) ? {...el, priority: el.priority + value} : el);
        setTasks(newTasks);
    };

    const changeStatus = (id, value, status) => {
        const currentIndex = statuses.indexOf(status);
        const newStatus = statuses[currentIndex + value];
        const newTasks = tasks.map(el => el.id === id ? {...el, status: newStatus} : el);
        setTasks(newTasks);
    };

    const onDelete = (id) => {
        const newTasks = tasks.filter(el => el.id !== id);
        setTasks(newTasks);
    };

    const addNewTask = (newTask) => {
        setTasks([...tasks, newTask])
    };

    const updateTask =(updatedTask) => {
        const newTasks = tasks.map(el => el.id === updatedTask.id ? updatedTask : el);
        setTasks(newTasks);
    }

    return (
        <div>

            <div className="container text-center">
            <h1>Kanban</h1>
                <CreateTaskModal statuses={statuses}
                                 priority={priority}
                                 addNewTask={addNewTask}
                />
                <div className="row align-items-start">
                    {statuses.map((el, i) => (
                        <Columns
                            key={i}
                            status={el}
                            tasks={tasks}
                            changePriority={changePriority}
                            changeStatus={changeStatus}
                            statuses={statuses}
                            onDelete={onDelete}
                            priority={priority}
                            updateTask={updateTask}
                        />
                    ))}
                </div>

            </div>


        </div>
    );
}

export default App;
