import "./IconMenu.css";
export default function IconMenu({ source, title, alt }) {
  return (
    <div className="icon">
      <img src={source} alt={alt} />
      <p>{title}</p>
    </div>
  );
}
