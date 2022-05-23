import { Box, Card, CardContent, Typography } from "@mui/material"
import AnimatedSVG from "components/AnimatedSVG"
import { useEffect, useState } from "react"
import "./style.css"


export default function Home() {
    const [display, setDisplay] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setDisplay(true)
        }, 2000)
    })

    return (
        <Box className="special-wrap" sx={{ width: "100vw", margin: "0", padding: "25px 0" }}>
            <Box id="logo-container" sx={{ padding: { md: "25px 2%", xl: "50px" }, background: "#fefefe86", borderRadius: "25px", height: "250px", width: { md: "96%", xl: "50%" }, margin: "0 auto", display: "flex", gap: display ? "20%": "0", gridTemplateRows: "100% 0%", gridTemplateColumns: display ? "50% 50%" : "100% 0%", justifyItems: "center", alignItems: "center", justifyContent: "center", transition: "flex 1000ms, gap 1000ms" }}>
                <AnimatedSVG height={256} transitionIn={true} />
                <Card sx={{ background: "#dededeac", visibility: display ? "visible" : "hidden", width: display ? "40%": "0px", height: display ? "250px" : "0", opacity: display ? "100%" : "0%", transition: "height 1000ms ease 700ms, opacity 1000ms ease 700ms, width 1000ms" }}>
                    <CardContent>
                        <Typography>
                            I am Matthew Fallon. A computer science major, a fullstack developer, a dev-ops engineer,
                            and a passionate programmer.
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    )
}