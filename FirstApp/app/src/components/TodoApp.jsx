import { useState } from "react";
/* import "./Todo.css";
 */export default function TodoApp() {
    const [tasks, setTasks] = useState([
        { id: 1, title: "Learn React", completed: false },
        { id: 2, title: "Build a Todo App", completed: false },
        { id: 3, title: "Profit!", completed: true },
        { id: 4, title: "Review Paper", completed: false },
    ]);
    const [input, setinput] = useState("");
    function addTask() {
        if (input.trim() === "") return;
        console.log("Ajouter la tâche :", input);
        setTasks([...tasks, { id: tasks.length + 1, title: input, completed: false }]);
        setinput("");
    }

    function editTask(id) {
        const nouvelValeur = prompt("Entrez la nouvelle valeur de la tâche :");
        if (!nouvelValeur) return;
        if (nouvelValeur.trim() === "") return;

        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, title: nouvelValeur } : task
            )
        );

        


        console.log("Modifier la tâche avec l'id :", id);
    }

    const deleteTask = (id) => {
            setTasks(tasks.filter((task) => task.id !== id));
        };
    return (
        <div>
            <h1>Todo Application</h1>

            {/*  input pour ajouter une nouvelle tâche */}
            <input
                value={input}
                type="text"
                placeholder="Nouvelle tâche..."
                onChange={(e) => setinput(e.target.value)}
            />
            {/*  Bouton Ajouter */}
            <button onClick={addTask}>Ajouter</button>




            {tasks.length === 0 ? (
                <p>No tasks available.</p>
            ) : (
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id}>
                            {task.title}
                            <div className="button-group">
                                <button onClick={() => editTask(task.id)}>✏️</button>
                                <button onClick={() => deleteTask(task.id)}>❌</button>
                            </div>

                        </li>
                    ))}
                </ul>
            )}
        </div>
    );

}

