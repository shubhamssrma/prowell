import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
interface PageProps {
    href: string,
    title: string,
    showArrow?: boolean
}
export default function CTA({ href, title, showArrow }: PageProps) {
    return (
        <Link href={href} className="inline-flex group bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-blue-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl shadow-green-500/30 flex items-center gap-3 mx-auto">
            <span className="text-lg">{title}</span>
            {
                showArrow &&
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            }
        </Link>
    )
}
