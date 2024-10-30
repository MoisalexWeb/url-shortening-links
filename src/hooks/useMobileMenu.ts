import { useEffect, useState } from "react"

export const useMobileMenu = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    const toggleMenu = () => setShowMobileMenu(!showMobileMenu)

    const closeMenu = () => setShowMobileMenu(false)

    useEffect(() => {
        if (!showMobileMenu) return

        const handleResize = () => {
            if (window.innerWidth >= 768) {
                closeMenu()
            }
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [showMobileMenu])

    return {
        showMobileMenu,
        toggleMenu,
        closeMenu
    }
}