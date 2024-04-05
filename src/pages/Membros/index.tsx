import { LateralMenu } from '../../components/LateralMenu'
import { LogoBottom } from '../../components/LateralMenu/LogoBottom'
import { MenuSuperiorCell } from '../../components/LateralMenu/MenuSuperiorCell'
import './style.scss'

export function MembrosPage() {
    return (
        <div className='membros-container'>
            <MenuSuperiorCell />
            <LateralMenu />

            <div className='membros-content'>
                <h1>MEMBROS</h1>

                <LogoBottom />
            </div>
        </div>
    )
}