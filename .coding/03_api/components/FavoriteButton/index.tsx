'use client'

import React, { FC } from 'react'
import { StarIcon } from '@heroicons/react/24/solid'
import { StarIcon as StarIconOutlined } from '@heroicons/react/24/outline'
import useToggle from '../../hooks/useToggle'

type FavoriteButtonProps = {}

const FavoriteButton: FC<FavoriteButtonProps> = ({}) => {
    const { toggle, active } = useToggle()
    return (
        <button
            className="absolute right-0 top-0 p-2"
            onClick={e => {
                e.preventDefault()
                toggle()
            }}
        >
            {active ? (
                <StarIcon className="h-8 w-8 text-yellow-500" />
            ) : (
                <StarIconOutlined className="h-8 w-8 text-yellow-500" />
            )}
        </button>
    )
}

export default FavoriteButton
