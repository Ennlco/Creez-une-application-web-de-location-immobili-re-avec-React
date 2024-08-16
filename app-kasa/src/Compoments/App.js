import Accueil from '../Pages/Acceuil/Accueil'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Accueil />
      <Routes>
        <Route path='/' element={<Accueil/>}/>
        <Route path='/APropos' element={<APropos/>}/>
      </Routes>
    </Router>
  );
}

export default App;
