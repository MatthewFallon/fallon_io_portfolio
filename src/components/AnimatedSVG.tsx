import { Box } from "@mui/system"
import LogoIcon from "assets/LogoIcon"
import { useEffect, useState } from "react"

/**
 * A non-generalized wrapper for my svg icon
 * @param param0 properties
 * @returns The animated SVG which by default transitions in by drawing itself
 */
export default function AnimatedSVG({ transitionIn = true, height = 64 }) {
    const [visibleState, setVisibleState] = useState(false)
    useEffect(() => {
        const pathArr = document.querySelectorAll(".animateable svg > :not(defs)")

        if (transitionIn) {
            pathArr.forEach(element => {
                let val = element as unknown as SVGPathElement
                val.style.strokeDasharray = val.getTotalLength() + " " + val.getTotalLength()
                val.style.strokeDashoffset = String(val.getTotalLength())
                setTimeout(() => { animateOffset(val, 1, 1) }, 500)
            })
            setVisibleState(true)
        } else {
            setVisibleState(true)
        }

        return () => {
            setVisibleState(false)
        }
    }, [transitionIn])
    return (
        <Box className="animateable">
            <LogoIcon height={height} visible={visibleState} />
        </Box>
    )
}

function animateOffset(svgElement: SVGPathElement, offset: number, rate: number) {
    if (offset < 100) {
        console.log("running");
        svgElement.style.strokeDashoffset = String(svgElement.getTotalLength() - (offset * (svgElement.getTotalLength() / 100)))
        setTimeout(() => { animateOffset(svgElement, offset + rate, rate) }, 10)
    } else if (offset === 100) {
        svgElement.style.strokeDashoffset = String(svgElement.getTotalLength() - (offset * (svgElement.getTotalLength() / 100)))
    } else if (offset > 100) {
        offset = 100
        svgElement.style.strokeDashoffset = String(svgElement.getTotalLength() - (offset * (svgElement.getTotalLength() / 100)))
    }
}