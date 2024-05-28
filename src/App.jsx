import { Route, Routes} from 'react-router-dom';
import Welcome from './components/Welcome'
import MainPage from './components/MainPage'

function App() {
    return (
      <div className="App">
         <Routes>
             <Route path='/' element={<Welcome/>} />
             <Route path='/MainPage' element={<MainPage/>} />
        </Routes>
      </div>
    );
  }
 
  export default App;