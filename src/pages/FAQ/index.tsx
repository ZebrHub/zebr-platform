import { LateralMenu } from '../../components/LateralMenu'
import './style.scss'

export function FaqPage() {
    return (
        <div className='faq-container'>
            <LateralMenu />

            <div className='faq-content'>
                <h1>FAQ</h1>
            </div>
            <h2>FAQ Page</h2>
        </div>
    )
}