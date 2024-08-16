
import '../Styles/Accueil.css';
import logoHead from '../Assets/.LOGO.png'
import logoFoot from '../Assets/LOGO.png'
import CopyRight from '../Assets/© 2020 Kasa. All rights reserved.png'
import CardsList from '../../Compoments/CardsList';
import Accueil from '../Acceuil/'
import APropos from '../APropos/'
import Navigation from '../../Compoments/Navigation'

function Accueil() {
    return (
        <div className="Accueil">
          <header>
            <img src={logoHead} alt='logo kasa' className="kasa-logo-header"/>
            <nav className="kasa-lien-content">
              <Navigation />
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
  
  export default Accueil;