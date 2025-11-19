//src/components/FrameworkList.jsx
function FrameworkList() {
  const frameworks = [
    { id: 1, name: "React" },
    { id: 2, name: "Vue" },
    { id: 3, name: "Angular" },
    { id: 4, name: "Svelte" },
  ];
 
  return (
    <ul>
      {frameworks.map((fw) => (
        <li key={fw.id}>{fw.name}</li>
      ))}
    </ul>
  );
}
 
export default FrameworkList;
