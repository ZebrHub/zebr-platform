import { useEffect, useState } from 'react'
import { BannerPrincipal } from '../../components/BannerPrincipal'
import { LateralMenu } from '../../components/LateralMenu'
import { LogoBottom } from '../../components/LateralMenu/LogoBottom'
import { MenuSuperiorCell } from '../../components/LateralMenu/MenuSuperiorCell'
import { Top3Project } from '../../components/Top3Project'
import './style.scss'
import { Loading } from '../../components/Loading'

export function HomePage() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="home-container">
            {loading ? (
                <Loading />
            ) : (
                <>
                    <MenuSuperiorCell />
                    <LateralMenu />

                    <div className="home-content " style={{ opacity: loading ? 0 : 1 }}>
                        <h1>Hello World!</h1>
                        <BannerPrincipal />
                        <Top3Project />

                        <LogoBottom />
                    </div>
                </>
            )}
        </div>
    )
}