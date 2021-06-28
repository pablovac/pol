import './App.css';
import logo from './Logo_Estudio_Vaccarezza_300x163.png';

function Header(props) {
  return (
    <header>
      <h1>{props.name} - Dashboard</h1>
    </header>
  )
}

function Main(props) {
  return (
    <section>
      <img 
      src={logo} 
      height={100} 
      alt="logo"
      />
      <p>Sitios: - {props.sitios}</p>
      <ul style = {{textAlign:"left"}}>
        {props.links.map((link)=>(
        <li key={link.id}>{link.title}</li>
        ))}
      </ul>
    </section>
  )
  
}

function Footer(props) {
  return (
    <footer>
      <p>Vaccarezza - Derechos Reservados - Year: {props.anio}</p>
    </footer>
  )
}

const links = [
  "Home",
  "GCP",
  "DataStudio"
];

const  linksObjects = links.map((link, i) => ({id: i , title: link}));


function App() {
  return (
    <div className="App">
      <Header name="Pol"/>
      <Main sitios="Urls" links={linksObjects}/>
      <Footer anio={new Date().getFullYear()} /> 
    </div>
  );
}

export default App;
