// Fichier : src/components/WelcomeMessage.jsx
export default function WelcomeMessage() {
    const isLoggedIn = false;
    if (isLoggedIn) {
        return (<h1>Bienvenue 👋</h1>);
    }
    else {
        return (<h1>Veuillez vous connecter</h1>);
    }
}
