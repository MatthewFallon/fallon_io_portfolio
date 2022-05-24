import { Computer, TableRows, Terminal } from "@mui/icons-material"
import { Avatar, Box, Card, CardContent, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, Typography } from "@mui/material"
import AnimatedSVG from "components/AnimatedSVG"
import { useEffect, useState } from "react"
import "./style.css"
import ProfilePic from "assets/profile-image.jpg";


export default function Home() {
    const [display, setDisplay] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setDisplay(true)
        }, 2000)
    })

    return (
        <>
            <Box className="special-wrap" sx={{ width: "100vw", margin: "0", padding: "25px 0" }}>
                <Box id="logo-container" sx={{ padding: { xs: "25px 2%", md: "25px" }, background: "#fefefe86", borderRadius: "25px", height: { xs: "", md: "350px" }, width: { xs: "96%", md: "80%", xl: "50%" }, margin: "0 auto", display: "flex", flexDirection: { xs: "column", md: "row" }, gap: display ? { xs: "25px", md: "10%" } : "0", justifyItems: "center", alignItems: "center", justifyContent: "center", transition: "flex 1000ms, gap 1000ms" }}>
                    <AnimatedSVG height={256} transitionIn={true} />
                    <Card sx={{ background: "#dededeac", visibility: display ? "visible" : "hidden", width: display ? { xs: "60%", md: "400px" } : "0px", height: display ? "250px" : "0px", opacity: display ? "100%" : "0%", transition: "height 1000ms ease 700ms, opacity 1000ms ease 700ms, width 1000ms" }}>
                        <CardContent>
                            <Typography>
                                I am Matthew Fallon:
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemIcon><Computer /></ListItemIcon>
                                    <ListItemText>A computer science major</ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><TableRows /></ListItemIcon>
                                    <ListItemText>A fullstack developer</ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><Terminal /></ListItemIcon>
                                    <ListItemText>A dev-ops engineer</ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar alt="Matthew Fallon" src={ProfilePic} />
                                    </ListItemAvatar>
                                    <ListItemText>A passionate programmer</ListItemText>
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Box>
            </Box>
            <Box component="main" sx={{width: {xs: "95vw", md: "80vw"}, margin: "20px auto"}}>
                <Typography variant="h1">
                    Interests
                </Typography>
            </Box>
        </>
    )
}