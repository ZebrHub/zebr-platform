import { LateralMenu } from '../../components/LateralMenu'
import { LogoBottom } from '../../components/LateralMenu/LogoBottom'
import { MenuSuperiorCell } from '../../components/LateralMenu/MenuSuperiorCell'
import './style.scss'

export function FormacaoPage() {
    return (
        <div className='formacao-container'>
            <MenuSuperiorCell />
            <LateralMenu />
            <div className='formacao-content'>
                <h1>FORMAÇÃO</h1>

                <LogoBottom />
            </div>
        </div>
    )
}