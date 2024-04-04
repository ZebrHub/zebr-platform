import { BannerPrincipal } from "./components/BannerPrincipal";
import { LateralMenu } from "./components/LateralMenu";
import { Top3Project } from "./components/Top3Project";

import './styles/global.scss'

export function App() {
  return (
    <div className="container-App">
      <LateralMenu />

      <div className="content-App">
        <h1>Hello World!</h1>
        <BannerPrincipal />
        <Top3Project />
      </div>
    </div>
  )
}