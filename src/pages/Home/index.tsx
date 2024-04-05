import { BannerPrincipal } from '../../components/BannerPrincipal'
import { LateralMenu } from '../../components/LateralMenu'
import { LogoBottom } from '../../components/LateralMenu/LogoBottom'
import { MenuSuperiorCell } from '../../components/LateralMenu/MenuSuperiorCell'
import { Top3Project } from '../../components/Top3Project'
import './style.scss'

export function HomePage() {
    return (
        <div className="home-container">
            <MenuSuperiorCell />
            <LateralMenu />

            <div className="home-content">
                <h1>Hello World!</h1>
                <BannerPrincipal />
                <Top3Project />

                <LogoBottom />
            </div>
        </div>
    )
}