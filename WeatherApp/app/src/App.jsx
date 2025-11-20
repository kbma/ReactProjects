//src/App.jsx
import  { useState } from "react";
import CardMeteo from "./components/CardMeteo";
import FormulaireVille from "./components/FormulaireVille";
import { getWeather } from "./services/api";
import HistoriqueRecherche from "./components/HistoriqueRecherche";
import './App.css';
 
function App() {

	const [meteo, setMeteo] = useState(null);
	const [historique, setHistorique] = useState([]);
 
  const handleSearch = async (ville) => {
    try {
      const data = await getWeather(ville);
	  setMeteo(data);
	  setHistorique([ville, ...historique]);
     console.log(data);// Afficher le retour de l’API
    } catch (error) {
      alert(error.message);
    }
  };
 
  return (
    <div className="App">
      <h1>Dashboard Météo</h1>
      <FormulaireVille onSearch={handleSearch} />

	  <h3>Historique :</h3>
      <HistoriqueRecherche villes={historique} />
	  <CardMeteo data={meteo}/>
	  

      
    </div>
  );
}
 
export default App;
