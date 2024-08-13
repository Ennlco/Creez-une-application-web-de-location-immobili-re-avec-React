import '../Styles/App.css';
import logoHead from '../Assets/.LOGO.png'
import logoFoot from '../Assets/LOGO.png'
import CopyRight from '../Assets/© 2020 Kasa. All rights reserved.png'
import CardsList from './CardsList';


function App() {
  return (
    <div className="App">
      <header>
        <img src={logoHead} alt='logo kasa' className="kasa-logo-header"/>
        <div className="kasa-lien">
          <a href='#' className="kasa-lien">Accueil</a>
          <a href='#' className="kasa-lien">A Propos</a>
        </div>
      </header>
      <main>
        <div className='kasa-img-intro'>
          <div className='kasa-img-intro-text'>
            <h3>Chez vous, partout et ailleurs</h3>
          </div>
        </div>
        <CardsList />
      </main>
      <footer>
      <img src={logoFoot} alt='logo kasa' className="kasa-logo-footer"/>
      <img src={CopyRight} alt='Copyright' className="kasa-lcopyright"/>
      </footer>
    </div>
  );
}

export default App;
