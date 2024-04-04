import { LateralMenu } from '../../components/LateralMenu'
import './style.scss'

export function MembrosPage() {
    return (
        <div className='membros-container'>
            <LateralMenu />

            <div className='membros-content'>
                <h1>MEMBROS</h1>
            </div>
            <h2>Membros Page</h2>
        </div>
    )
}