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
        let timeoutId: NodeJS.Timeout[] = []
        let intervalId: NodeJS.Timer[] = []
        if (transitionIn) {
            pathArr.forEach(element => {
                let svgElement = element as unknown as SVGPathElement
                svgElement.style.strokeDasharray = svgElement.getTotalLength() + " " + svgElement.getTotalLength()
                svgElement.style.strokeDashoffset = String(svgElement.getTotalLength())
                let offsetPercent = 0
                let rate = 1
                // Brought inside to allow sharing scope.
                timeoutId.push(setTimeout(() => {
                    let lIntId = setInterval(() => {
                        if (offsetPercent < 100) {
                            console.log("running: " + intervalId);
                            svgElement.style.strokeDashoffset = String(svgElement.getTotalLength() - (offsetPercent * (svgElement.getTotalLength() / 100)))
                            offsetPercent += rate
                        } else {
                            svgElement.style.strokeDashoffset = "0"
                            svgElement.style.strokeDasharray = "none"
                            clearInterval(lIntId)
                        }
                    }, 10)
                    intervalId.push(lIntId)
                }, 500))
            })
            setVisibleState(true)
        } else {
            setVisibleState(true)
        }

        return () => {
            timeoutId.forEach(val => {clearTimeout(val)})
            intervalId.forEach(val => {clearInterval(val)})
            setVisibleState(false)
        }
    }, [transitionIn])
    return (
        <Box className="animateable">
            <LogoIcon height={height} visible={visibleState} />
        </Box>
    )
}