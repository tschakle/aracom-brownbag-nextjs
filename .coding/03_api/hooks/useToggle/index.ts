import { useState } from 'react'

type UseToggleReturnProps = {
    active: boolean
    toggle: () => void
}

const useToggle = (initialActive = false): UseToggleReturnProps => {
    const [active, setIsActive] = useState(initialActive)

    const toggle = (): void => {
        setIsActive(!active)
    }

    return {
        active,
        toggle,
    }
}

export default useToggle
