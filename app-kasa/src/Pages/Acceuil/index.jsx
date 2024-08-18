import { useEffect } from 'react'
import VignetteAccueil from '../../Compoments/Vignettes/VignetteAccueil'
import CardsList from '../../Compoments/CardsList';



function Accueil() {
  useEffect(() => {
		document.title = `Accueil`
	}, [])
    return (
      <main>
        <VignetteAccueil />
        <CardsList />
      </main>
    );
  }
  
export default Accueil;