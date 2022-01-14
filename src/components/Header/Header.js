import h from './Header.module.css'

const Header = () => {
    return (
      <header className={h.header}>
        <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="logo" title="logo" />
        <h1 className={h.heading}>React social network</h1>
      </header>
    );
  }

  export default Header;