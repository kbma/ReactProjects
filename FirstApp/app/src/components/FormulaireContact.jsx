// src/components/FormulaireContact.jsx
import './FormulaireContact.css'
import { useState } from "react";

function FormulaireContact() {
    const [form, setForm] = useState({});

    const handleChange = (e) => {
        /* Les crochets [] servent à utiliser une variable comme nom de propriété. */
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleAvatar = (e) => {
        const file = e.target.files[0];
        setForm({ ...form, avatar: file, avatarPreview: URL.createObjectURL(file) });
    };

    const handlePDF = (e) => {
  setForm({ ...form, cv: e.target.files[0].file });
};
const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Données envoyées :", form);
        alert("Contact ajouté avec succès !");
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h2>Ajouter un Contact</h2>

            <p><label>Nom :</label>
                <input type="text" name="name" onChange={handleChange} /></p>

            <p><label>Email :</label>
                <input type="email" name="email" onChange={handleChange} /></p>

            <p><label>Téléphone :</label>
                <input type="text" name="phone" onChange={handleChange} />
            </p>
            <p><label>Date de naissance :</label>
                <input type="date" name="birthdate" onChange={handleChange} />
            </p>

            <p><label>Pays :</label>
                <select name="country" onChange={handleChange}>
                    <option value="">-- Choisir --</option>
                    <option value="Tunisie">Tunisie</option>
                    <option value="France">France</option>
                    <option value="Algérie">Algérie</option>
                </select>
            </p>
            <p><label>Notes :</label>
                <textarea name="notes" onChange={handleChange}></textarea>
            </p>

            <p>{form.avatarPreview && <img src={form.avatarPreview} width="120" />}</p>
            <p><label>Photo de profil :</label>
                <input type="file" accept="image/*" onChange={handleAvatar} />
            </p>

            <p><label>CV (PDF) :</label>
                <input type="file" accept="application/pdf" onChange={handlePDF} />
            </p>

            <pre>{JSON.stringify(form, null, 2)}</pre>

            <button type="submit">Envoyer</button>

            </form>
        </div>
    );
}

export default FormulaireContact;
