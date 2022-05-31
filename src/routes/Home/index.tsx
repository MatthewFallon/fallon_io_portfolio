import { Computer, TableRows, Terminal } from "@mui/icons-material"
import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, Typography } from "@mui/material"
import AnimatedSVG from "components/AnimatedSVG"
import { useEffect, useState } from "react"
import "./style.css"
import ProfilePic from "assets/profile-image.jpg";
import bitmap from "assets/bitmap.png"
import devopsExample from "assets/devops-example.png";


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
                <Box id="logo-container" sx={{
                    padding: { xs: "25px 2%", md: "25px" },
                    background: "#fefefe86",
                    borderRadius: "25px",
                    height: { xs: "750px", md: "350px" },
                    width: { xs: "96%", md: "80%", xl: "50%" },
                    margin: "0 auto",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: display ? { xs: "25px", md: "10%" } : "0",
                    justifyItems: "center", alignItems: "center",
                    justifyContent: "center",
                    transition: { xs: "flex 1000ms, gap 1000ms ease 700ms", md: "flex 1000ms, gap 1000ms" }
                }}>
                    <AnimatedSVG height={256} transitionIn={true} />
                    <Card sx={{
                        background: "#fafafaac",
                        visibility: display ? "visible" : "hidden",
                        width: display ? { xs: "80%", md: "400px" } : "0px",
                        minWidth: {xs: "300px", md: "0px"},
                        height: display ? { xs: "300px", md: "275px" } : "0px",
                        opacity: display ? "100%" : "0%",
                        transition: "height 1000ms ease 700ms, opacity 1000ms ease 700ms, width 1000ms",
                        display: "grid",
                        alignItems: "center"
                    }}>
                        <CardContent>
                            <Typography variant="h5">
                                Matthew Fallon:
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
            <Box component="main" sx={{ paddingBottom: "100px", width: "95vw",margin: "0 auto", backgroundImage: `url("${bitmap}")`, backgroundSize: "100%", backgroundRepeat: "repeat-y"}}>
                <Typography variant="h2" sx={{ textAlign: {xs: "center", md: "start"}, width: { md: "70%", margin: "0 auto", padding: "20px 0" } }}>
                    Interests
                </Typography>
                <Card sx={{marginLeft: "auto", backgroundColor: "#e8e8e8ad", width: {xs: "100%", md: "80%", lg: "45%"}}}>
                    <CardHeader title="Dev-Ops"/>
                    <CardMedia component="img" image={devopsExample}/>
                    <CardContent>
                        <Typography>I have worked heavily with </Typography>
                    </CardContent>
                </Card>
            </Box>
        </>
    )
}