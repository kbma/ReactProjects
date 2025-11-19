import { useParams, Link } from "react-router-dom";
 
export default function BlogDetail() {
  const { id } = useParams(); // récupère le paramètre de l'URL
 
  return (
    <div>
      <h2>Détail de l'article #{id}</h2>
      <p>Voici le contenu détaillé de l'article sélectionné.</p>
 
      <img
        src="https://picsum.photos/700/250?random=40"
        alt="Détail Blog"
        style={{ borderRadius: "6px", marginTop: "20px" }}
      />
 
      <p style={{ marginTop: "15px" }}>
        <Link to="/blogs">Retour à la liste des blogs</Link>
      </p>
    </div>
  );
}
