'use client'

import React, { FC, useEffect, useState } from 'react'
import useToggle from '@/hooks/useToggle'

const RemainingSecounds: FC = () => {
    const [remainingSecounds, setRemainingSecounds] = useState(3600)
    const { toggle, active } = useToggle()

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingSecounds(prevState => prevState - 1)
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <button onClick={toggle}>
            <p
                className={`${!active ? 'text-white' : 'text-red-500'} text-xl`}
            >{`Zeit zum Bestellen: ${remainingSecounds} Sekunden!`}</p>
        </button>
    )
}

export default RemainingSecounds
