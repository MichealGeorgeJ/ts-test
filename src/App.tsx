import { ReactElement } from 'react'
// import MoonParallax from './Components/Moon/MoonParallax'
// import { SkyToSea } from './Components/SkyToSeaParallax/SkyToSea'
import { Perspective } from './Components/Perspective/Perspective'
import WebSocketComponent from './Components/Websocket'

export default function App(): ReactElement {
  return (
    <div>
      {/* <MoonParallax/> */}
      {/* <SkyToSea/> */}
      <Perspective/>
{/* <WebSocketComponent/> */}
    </div>
  )
}

