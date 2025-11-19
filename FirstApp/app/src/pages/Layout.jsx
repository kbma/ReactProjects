//src/pages/Layout.jsx
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <header style={{ background: "#222", padding: "15px" }}>
        <nav>
          <Link to="/" style={{ color: "white", marginRight: "10px" }}>
            Accueil
          </Link>
          <Link to="/blogs" style={{ color: "white", marginRight: "10px" }}>
            Blogs
          </Link>
           <Link to="/about" style={{ color: "white", marginRight: "10px" }}>
            About
          </Link>

          {/* On ajoutera d'autres liens plus tard */}
        </nav>
      </header>

      <main style={{ padding: "20px" }}>
        {/* Zone où les pages vont s'afficher */}
        <Outlet />
      </main>
    </div>
  );
}


