import './App.css';
import Navbar from './components/Navbar';
import Wrapper  from './components/Wrapper';
import Table  from './components/Table';


function App() {
  return (
    <Wrapper>
      <Wrapper>
      <Navbar/>
    </Wrapper>
    <Wrapper>
      <Table/>
    </Wrapper>
    </Wrapper>
  );
}

export default App;
