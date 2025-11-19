//src/components/NewMessageNotification.jsx
function NewMessageNotification() {
  const hasMessage = true;
 
  return (
    <div>
      {hasMessage && <p>Vous avez un nouveau message 📩</p>}
    </div>
  );
}
 
export default NewMessageNotification;
