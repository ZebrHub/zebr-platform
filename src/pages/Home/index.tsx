import { BannerPrincipal } from '../../components/BannerPrincipal'
import { LateralMenu } from '../../components/LateralMenu'
import { Top3Project } from '../../components/Top3Project'
import './style.scss'

export function HomePage() {
    return (
        <div className="home-container">
            <LateralMenu />

            <div className="home-content">
                <h1>Hello World!</h1>
                <BannerPrincipal />
                <Top3Project />
            </div>
        </div>
    )
}