import styled from 'styled-components';
import './App.css';
import Footer from './Components/Footer';
import FormInput from './Components/FormInput';
import List from './Components/List';
import { DataProvider } from './DataContext/DataContext';

function App() {
  return (
    <DataProvider>
      <Div className="App">
        <div className='boxslic'>
          <h1>
            To Do List
          </h1>
          <FormInput />
          <List />
          <Footer />
        </div>
      </Div>
    </DataProvider>
  );
}
//styled components
const Div = styled.div`
`
export default App;