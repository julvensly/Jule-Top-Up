function Button({ children, loading = false, disabled = false, type = "button", 
  onClick, className = "",
}) {
  return (
 <button type={type} onClick={onClick} disabled={disabled || loading} 
      className={`global-button ${className}`}
    >
      {loading ? "Chargement..." : children} </button> );
}
export default Button;
