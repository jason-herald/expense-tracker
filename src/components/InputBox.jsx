import "./InputBox.css";
function InputBox({ type, label, placeholder, value, onInput }) {
  return (
    <label className="input-box">
      <span className="label">{label}</span>
      <input
        value={value}
        type={type || "text"}
        placeholder={placeholder}
        onInput={(event) => onInput(event.target.value)}
        required
      />
    </label>
  );
}

export default InputBox;
