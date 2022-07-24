import { Storage } from "@mui/icons-material";
import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import bitmap from "assets/bitmap.png"
import FirebaseCardMedia from "components/FirebaseCardMedia";
import useCardCollection, { CardData } from "services/firestoreStatic";

const projectsDefault: CardData[] = []

export default function Projects() {

    const {status, cardCollection: projectCollection } = useCardCollection("projects", projectsDefault)

    return (
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
                <Box sx={{display: "flex", width: { md: "70%"}, justifyContent: {xs: "center", md: "start"}, margin: "0 auto", padding: "20px 0" }}>
                    <Typography variant="h2" >
                        Projects
                    </Typography>
                    <Typography variant="body1" sx={{color: theme => { return status !== "success" ? theme.palette.error.main : theme.palette.success.main } }}>
                        <Storage/>
                    </Typography>
                </Box>
                {projectCollection.map((value, index) => {
                    let left = index % 2 === 0 ? false : true
                    let background = left ? "#afceb0ce":"#c6a9c6ce"
                    return (
                        <Card key={index} sx={{ marginLeft: left ? {xs: 0, lg: "30px"} : "auto", marginRight: left ? "auto" : "0", marginBottom: {xs: "40px", xl: 0}, backgroundColor: background, width: { xs: "100%", md: "80%", lg: "60%", xl: "45%" } }}>
                            <CardHeader title={value.name} />
                            <FirebaseCardMedia collection="interests" file={value.img} localFile={value.localFile} />
                            <CardContent>
                                <Typography>{value.description}</Typography>
                            </CardContent>
                        </Card>
                    )
                })}
            </Box>
    )
}