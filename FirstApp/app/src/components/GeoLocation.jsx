//src/components/GeoLocation.jsx
function GeoLocation() {
  function locate() {
    navigator.geolocation.getCurrentPosition((position) => {
      alert(`Latitude : ${position.coords.latitude} — Longitude : ${position.coords.longitude}`);
    });
  }
 
  return <button onClick={locate}>Me localiser 🌍</button>;
}
 
export default GeoLocation;
