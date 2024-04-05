import { LateralMenu } from '../../components/LateralMenu'
import { LogoBottom } from '../../components/LateralMenu/LogoBottom'
import { MenuSuperiorCell } from '../../components/LateralMenu/MenuSuperiorCell'
import './style.scss'

export function FaqPage() {
    return (
        <div className='faq-container'>
            <MenuSuperiorCell />
            <LateralMenu />

            <div className='faq-content'>
                <h1>FAQ</h1>

                <LogoBottom />
            </div>
        </div>
    )
}