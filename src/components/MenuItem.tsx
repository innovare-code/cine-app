import Link from 'next/link'
import React from 'react'

interface Props {
    icon: React.JSX.Element
    text: string
    path: string
}

export const MenuItem = ({ icon, text, path }: Props) => {
    return (
        <Link href={path}>
            <button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize" type="button">
                {icon}
                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">{text}</p>
            </button>
        </Link>
    )
}
