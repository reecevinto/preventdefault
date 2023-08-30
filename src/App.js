import "./styles.css";
// e.stopPropagation() stops the event handlers attached to the tags above from firing
// e.preventDefault() prevents the default browser behavior for the few events that have it.
export default function Signup() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Submitting");
      }}
    >
      <input />
      <button>Send</button>
    </form>
  );
}
