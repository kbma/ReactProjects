//src/components/DarkModeStatus.jsx
function DarkModeStatus() {
  const darkMode = false;
 
  return (
    <h3>{darkMode ? "Mode sombre activé 🌙" : "Mode clair ☀️"}</h3>
  );
}
 
export default DarkModeStatus;
