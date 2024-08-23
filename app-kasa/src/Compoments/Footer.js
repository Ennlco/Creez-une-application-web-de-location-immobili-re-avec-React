import '../Styles/Css/Footer.css'

import logoFoot from '../Assets/LOGO.png'

function Footer(){
    return(
        <footer>
          <img src={logoFoot} alt='logo kasa' className="kasa-logo-footer"/>
          <p className="kasa-lcopyright">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

  
export default Footer;