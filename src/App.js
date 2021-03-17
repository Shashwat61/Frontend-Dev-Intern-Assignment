import './App.css';
import Nav from './components/Nav'
import Sidebar from './components/Sidebar';
import CardsContainer from './components/CardsContainer'
import styled from 'styled-components'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Main>

      <Sidebar/>
      <CardsContainer/>
      {/* data */}
      </Main>
     
    </div>
  );
}

export default App;
const Main=styled.div`
display:flex;
`;

