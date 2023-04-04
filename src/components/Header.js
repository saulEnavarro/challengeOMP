
import './Header.css';

function Header(props) {
  return (
    <div className="Header">
      <header className="Header-header">
        <h1>
        {props.title}
        </h1> 
      </header>
    </div>
  );
}

export default Header;