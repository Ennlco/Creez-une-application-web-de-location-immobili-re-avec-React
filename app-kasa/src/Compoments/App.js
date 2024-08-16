import '../Styles/App.css';
import logoHead from '../Assets/.LOGO.png'
import logoFoot from '../Assets/LOGO.png'
import CopyRight from '../Assets/© 2020 Kasa. All rights reserved.png'
import CardsList from './CardsList';
import APropos from './APropos'


function App() {
  return (
    <div className="App">
      <header>
        <img src={logoHead} alt='logo kasa' className="kasa-logo-header"/>
        <nav className="kasa-lien-content">
          <a href to='/' className="kasa-lien">Accueil</a>
          <a href='/APropos' className="kasa-lien">A Propos</a>
        </nav>
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
