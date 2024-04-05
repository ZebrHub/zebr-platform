import { LateralMenu } from '../../components/LateralMenu'
import { LogoBottom } from '../../components/LateralMenu/LogoBottom'
import { MenuSuperiorCell } from '../../components/LateralMenu/MenuSuperiorCell'
import './style.scss'

export function ProjetosPage() {
    return (
        <div className='projetos-container'>
            <MenuSuperiorCell />
            <LateralMenu />
            <div className='projetos-content'>
                <h1>PROJETOS</h1>

                <LogoBottom />
            </div>
        </div>
    )
}