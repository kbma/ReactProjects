// APICrudApp/app/src/App.jsx
import PostList from './crud/PostList'
import PostForm from './crud/PostForm'
import MessageBox from './crud/MessageBox'
import { createContext, useState } from 'react'
 
export const ApiContext = createContext("")
 
export default function App() {
    const [message, setMessage] = useState("")
 
    const API_URL = "https://crudcrud.com/api/f6ecd894b46e43a8bbd06104689577bd/tasks"
 
    return (
        <ApiContext.Provider value={API_URL}>
            <div style={{ width: "600px", margin: "auto" }}>
                <h1>Atlier CRUD React + API by Kamel ABBASSI</h1>
                <PostForm setMessage={setMessage} />
                <PostList setMessage={setMessage} message={message} />
                <MessageBox message={message} />
            </div>
        </ApiContext.Provider>
    )
}
