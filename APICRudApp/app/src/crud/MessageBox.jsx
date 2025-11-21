export default function MessageBox({ message }) {
    if (!message) return null
 
    return (
        <div style={{
            marginTop: "20px",
            padding: "10px",
            background: "#e0ffe0",
            borderRadius: "6px",
            border: "1px solid #9cd89c"
        }}>
            {message}
        </div>
    )
}
 
