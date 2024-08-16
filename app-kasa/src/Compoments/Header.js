import '../Styles/Header.css';
import logoHead from '../Assets/.LOGO.png'
import Navigation from './Navigation'

function Header(){
    return(
        <header>
          <div className='kasa-logo-lien-content'>
            <img src={logoHead} alt='logo kasa' className="kasa-logo-header"/>
              <Navigation />
          </div>
        </header>
    )
}


export default Header;