// APICrudApp/app/src/crud/PostList.jsx
import { useState, useEffect, useContext } from "react"
import PostItem from "./PostItem"
import { ApiContext } from "../App"
 
export default function PostList({ setMessage, message }) {
    const [posts, setPosts] = useState([])
    const API_URL = useContext(ApiContext)
 
    useEffect(() => {
        const loadPosts = async () => {
            const res = await fetch(API_URL)
            const data = await res.json()
            // crudcrud returns an array for the collection; guard safely
            const items = Array.isArray(data) ? data.slice(0, 10) : []
            setPosts(items)
        }
        loadPosts()
    }, [API_URL, message])
 
    const deletePost = async (id) => {
        await fetch(`${API_URL}/${id}`, { method: "DELETE" })
        setPosts(posts.filter(p => (p._id || p.id) !== id))
        setMessage("Article supprimé avec succès !")
    }
 
    return (
        <div>
            <h2>Liste des Articles</h2>
            {posts.map(post => (
                <PostItem
                    key={post._id || post.id}
                    post={post}
                    deletePost={deletePost}
                    setPosts={setPosts}
                    setMessage={setMessage}
                />
            ))}
        </div>
    )
}
 
