// APICrudApp/app/src/crud/PostItem.jsx
import { useState, useContext } from "react"
import { ApiContext } from "../App"
 
export default function PostItem({ post, deletePost, setPosts, setMessage }) {
    const [editing, setEditing] = useState(false)
    const [title, setTitle] = useState(post.title)
    const [category, setCategory] = useState(post.category)
    const [body, setBody] = useState(post.body || "")
    const API_URL = useContext(ApiContext)
 
    const updatePost = async () => {
        const id = post._id || post.id
        if (!API_URL) {
            console.error("API_URL is not defined")
            setMessage && setMessage("Erreur: URL API non configurée")
            return
        }
 
        try {
            // Build payload without id fields — some backends reject changing the id
            const { _id, id: legacyId, ...rest } = post
            const payload = { ...rest, title, body }
            const url = `${API_URL}/${id}`
            console.log("Updating post", { url, payload })
 
            // Try PUT first
            let res
            try {
                res = await fetch(url, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
                    mode: "cors"
                })
            } catch (networkErr) {
                console.error("Network error on PUT:", networkErr)
                // fallback to PATCH attempt
                res = await fetch(url, {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
                    mode: "cors"
                })
            }
 
            if (!res.ok) {
                const text = await res.text().catch(() => "")
                throw new Error(`Update failed: ${res.status} ${text}`)
            }
 
            // Some APIs (including crudcrud) may return an empty response body on successful PUT.
            // Guard against calling res.json() on an empty body.
            const text = await res.text().catch(() => "")
            let updated
            if (text) {
                try {
                    updated = JSON.parse(text)
                } catch (e) {
                    console.warn("Failed to parse JSON response, falling back to payload", e)
                    updated = { ...payload, _id: id, id }
                }
            } else {
                // No body returned; assume server accepted the payload and use it as the updated resource.
                updated = { ...payload, _id: id, id }
            }
 
            const updatedId = updated._id || updated.id
            setPosts(prev => prev.map(p => (p._id === updatedId || p.id === updatedId) ? updated : p))
            setEditing(false)
            setMessage && setMessage("Article modifié !")
        } catch (err) {
            console.error(err)
            setMessage && setMessage("Erreur lors de la modification de l'article")
        }
    }
 
    return (
        <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0", borderRadius: "6px" }}>
 
            {editing ? (
                <div>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} />
                    <textarea value={body} onChange={(e) => setBody(e.target.value)} />
                    <select value={category} onChange={(e) => setCategory(e.target.value)} />
                </div>
            ) : (
                <>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    <p>{post.category}</p>
                </>
            )}
 
            {editing ? (
                <button onClick={updatePost}>Enregistrer</button>
            ) : (
                <button onClick={() => setEditing(true)}>Modifier</button>
            )}
 
            <button onClick={() => deletePost(post._id || post.id)}>Supprimer</button>
        </div>
    )
}
 
