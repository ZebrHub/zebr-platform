import { LateralMenu } from '../../components/LateralMenu'
import './style.scss'

export function ProjetosPage() {
    return (
        <div className='projetos-container'>
            <LateralMenu />
            <div className='projetos-content'>
                <h1>PROJETOS</h1>
            </div>
            <h2>Projetos Page</h2>
        </div>
    )
}