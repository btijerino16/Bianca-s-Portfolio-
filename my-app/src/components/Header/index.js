import Navigation from "../Navigation";

function Header(props){
    return (
      <header className="flex-row px-1">
        <h1 className="mainTitle">Bianca Tijerino</h1>
       <Navigation setPage={props.setPage} /> 
      </header>
  
    )
  }
  
  export default Header;