import logoHead from '../Assets/.LOGO.png'
import logoFoot from '../Assets/LOGO.png'
import CopyRight from '../Assets/© 2020 Kasa. All rights reserved.png'
import Accueil from '../Acceuil/Accueil'
import APropos from '../APropos/'
import '../Styles/APropos.css'

function APropos(){
    <div className="APropos">
      <header>
        <img src={logoHead} alt='logo kasa' className="kasa-logo-header"/>
        <nav className="kasa-lien-content">
          <Navigation />
              <Routes>
                <Route path='/Acceuil/Accueil' element={<Accueil/>}/>
                <Route path='/' element={<APropos/>}/>
              </Routes>
        </nav>
      </header>
      <main>
        <div className='kasa-img-intro'>
        </div>
      </main>
      <footer>
      <img src={logoFoot} alt='logo kasa' className="kasa-logo-footer"/>
      <img src={CopyRight} alt='Copyright' className="kasa-lcopyright"/>
      </footer>
    </div>

}

export default APropos;