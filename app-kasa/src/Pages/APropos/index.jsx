import { useEffect } from 'react'
import VignetteAPropos from '../../Compoments/Vignettes/VignetteAPropos'
import BoxList from '../../Compoments/BoxAPropos/BoxList'

function APropos(){
  useEffect(() => {
		document.title = `A Propos`
	}, [])
  return( 
    <main>
      <VignetteAPropos />
      <BoxList />
    </main>
  )
}

export default APropos;