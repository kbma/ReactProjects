//src/components/SayHello.jsx
function SayHello() {

  function greet(name) {
    alert("Bonjour " + name);
  }
 
  return (
    <button onClick={() => greet("Kamel")}>
      Dire Bonjour
    </button>
  );
}
export default SayHello;