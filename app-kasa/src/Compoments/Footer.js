import '../Styles/Footer.css'

import logoFoot from '../Assets/LOGO.png'
import CopyRight from '../Assets/© 2020 Kasa. All rights reserved.png'

function Footer(){
    return(
        <footer>
          <img src={logoFoot} alt='logo kasa' className="kasa-logo-footer"/>
          <img src={CopyRight} alt='Copyright' className="kasa-lcopyright"/>
        </footer>
    )
}

  
export default Footer;