export default function Navigation(props) {
    return (
      <nav>
        <ul className="flex-row">
          <li className="mx-2" ><button onClick={() => props.setPage('about')}>About Me</button></li>
          <li className="mx-2" ><button onClick={() => props.setPage('projects')}>Portfolio</button></li>
          <li className="mx-2"><button onClick={() => props.setPage('contact')}>Contact</button></li>
        
        </ul>
      </nav>
    )
  }