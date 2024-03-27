import { LateralMenu } from "./components/LateralMenu";
import './styles/global.scss'
export function App() {
  return (
    <div className="container-App">
      <LateralMenu />

      <div className="content-App">
        <h1>Hello World!</h1>
      </div>
    </div>
  )
}