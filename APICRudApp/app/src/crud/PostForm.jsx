import { useState, useContext } from "react"
import { ApiContext } from "../App"
 
export default function PostForm({ setMessage }) {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [loading, setLoading] = useState(false)
 
    const API_URL = useContext(ApiContext)
 
    const handleSubmit = async (e) => {
        e.preventDefault()
 
        if (!title.trim() || !body.trim()) {
            if (setMessage) setMessage("Veuillez remplir le titre et le contenu")
            return
        }
 
        setLoading(true)
        try {
            const res = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title, body, userId: 1 })
            })
 
            if (!res.ok) {
                throw new Error(`Request failed with status ${res.status}`)
            }
 
            await res.json()
            if (setMessage) setMessage("Article ajouté avec succès !")
            setTitle("")
            setBody("")
        } catch (err) {
            console.error(err)
            if (setMessage) setMessage("Erreur lors de l'ajout de l'article")
        } finally {
            setLoading(false)
        }
    }
 
    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
            <h2>Ajouter un Article</h2>
 
            <input
                placeholder="Titre"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Contenu"
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />
 
            <button type="submit" disabled={loading}>
                {loading ? "Envoi..." : "Ajouter"}
            </button>
        </form>
    )
}
 
