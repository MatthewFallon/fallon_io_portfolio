import { Computer, Storage, TableRows, Terminal } from "@mui/icons-material"
import { Avatar, Box, Card, CardContent, CardHeader, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, Typography } from "@mui/material"
import bitmap from "assets/bitmap.png"
import devopsExample from "assets/devops-example.png"
import ProfilePic from "assets/profile-image.jpg"
import AnimatedSVG from "components/AnimatedSVG"
import FirebaseCardMedia from "components/FirebaseCardMedia"
import { useEffect, useState } from "react"
import useCardCollection, { CardData } from "services/firestoreStatic"
import "./style.css"
import webDevExample from "assets/webdev-example.png"

const description = "Loading from firestore..."

const interestsDefault: CardData[] = [
    { name: "Dev-Ops", description, img: "devops-example.png", localFile: devopsExample },
    { name: "Web Development", description, img: "webdev-example.png", localFile: webDevExample}
]

export default function Home() {
    const [display, setDisplay] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setDisplay(true)
        }, 2000)
    })

    const {status, cardCollection: interestCollection } = useCardCollection("interests", interestsDefault)

    // console.log(interestCollection);


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
                        minWidth: { xs: "300px", md: "0px" },
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
            <Box
                component="main"
                sx={{
                    paddingBottom: "50px",
                    width: "95vw",
                    margin: "0 auto",
                    backgroundImage: `url("${bitmap}")`,
                    backgroundSize: "100%",
                    backgroundRepeat: "repeat-y",
                    minHeight: "calc(100vh - 64px)"
                }}
            >
                <Box sx={{display: "flex", width: { md: "70%"}, margin: "0 auto", padding: "20px 0" }}>
                    <Typography variant="h2" sx={{ textAlign: { xs: "center", md: "start" } }}>
                        Interests
                    </Typography>
                    <Typography variant="body1" sx={{ textAlign: { xs: "center", md: "start" }, color: theme => { return status !== "success" ? theme.palette.error.main : theme.palette.success.main } }}>
                        <Storage/>
                    </Typography>
                </Box>
                {interestCollection.map((value, index) => {
                    let left = index % 2 === 0 ? false : true
                    let background = left ? "#afceb0ce":"#c6a9c6ce"
                    return (
                        <Card key={index} sx={{ marginLeft: left ? {xs: 0, lg: "30px"} : "auto", marginRight: left ? "auto" : "0", marginBottom: {xs: "40px", xl: 0}, backgroundColor: background, width: { xs: "100%", md: "80%", lg: "60%", xl: "45%" } }}>
                            <CardHeader title={value.name} />
                            {value.img && <FirebaseCardMedia collection="interests" file={value.img} localFile={value.localFile} />}
                            <CardContent>
                                <Typography>{value.description}</Typography>
                            </CardContent>
                        </Card>
                    )
                })}
            </Box>
        </>
    )
}