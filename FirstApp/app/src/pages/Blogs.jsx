import { Link } from "react-router-dom";
export default function Blogs() {

    const articles = [
    { id: 1, title: "Comprendre les composants React" },
    { id: 2, title: "Introduction aux Hooks" },
    { id: 3, title: "Gestion du State dans une application" },
  ];

  return (
    <div>
      <h2>Page Blogs</h2>
      <p>Liste d’articles et contenus informatifs seront affichés ici.</p>
 
<ul>
        {articles.map((article) => (
          <li key={article.id}>
            <Link to={`/blogs/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>


      <img
        src="https://picsum.photos/700/250?random=20"
        alt="Blogs"
        style={{ borderRadius: "6px", marginTop: "20px" }}
      />
    </div>
  );
}
