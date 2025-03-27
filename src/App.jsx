
import ReactViteLogo from './component/ReactViteLogo.jsx'; 
import UseState from './component/UseState.jsx';
import Start from './component/Start.jsx';
import Map from './component/Map.jsx';
import Props from './component/Props.jsx';
import './App.css';
import Container from './component/Container.jsx';
import UseEfect from './component/UseEfect.jsx';

function App() {
  const oderName="Martin"
  return (
    <>
      <ReactViteLogo />
      <UseState/>
      <Start />
      <Map />      
      <div>
      <Props name="Cihan" age="40" />
      <hr />
      <Props name="Ünal" age="39"/>
      <hr />
      <Props name={oderName} age={20}/>
      </div>
      {/* ----------------------------- */}
      <Container>
                <Props name="Manuel" age="19"/>
      </Container>
      {/* ------------------------------------ */}
      <UseEfect />
    </>
  );
}

export default App;
