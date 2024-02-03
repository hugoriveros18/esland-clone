/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useEffect, useRef } from "react"
import { useProgressiveNumber } from "../hooks/useProgressiveNumbers"
import useElementOnScreen from "../hooks/useElementOnScreen"

interface ProgressiveNumberProps {
    initial: number
    final: number
    duration?: number
    decimals?: number
    simbolo?: string
    texto: string
}

const visibilityOptions = {
    root: null,
    rootMargin: "0px", 
    threshold: 0.3
}

export default function ProgressiveNumber({
    initial,
    final,
    duration = 1500,
    decimals = 0,
    texto,
    simbolo = ''
}:ProgressiveNumberProps) {

    // NUMBER PROGRESSION
    const [value, setValue] = useProgressiveNumber(initial, duration, decimals);

    // REFERENCES
    const containerRef = useRef<any>(null);

    // IS VISIBLE ON SCREEN
    const isVisible = useElementOnScreen({
        options: visibilityOptions,
        containerRef: containerRef
    });

    // EFFECTS
    useEffect(() => {
        if(isVisible) {
            setValue(final)
        }
    },[isVisible])

    // JSX
    return (
        <div 
            className="flex flex-col justify-center items-center"
            ref={containerRef}
        >
            <span className="progressive__number text-7xl text-white font-bold tabular-nums tracking-tighter">
                <span>{value}</span>
                {simbolo}
            </span>
            <span className="opacity-70">
                {texto}
            </span>
        </div>
    )
}
