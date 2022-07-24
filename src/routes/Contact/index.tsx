import { Box, Card, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import bitmap from "assets/bitmap.png"

export default function Contact() {
    return (
        <Box
                component="main"
                sx={{
                    paddingBottom: "100px",
                    width: "95vw",
                    margin: "0 auto",
                    backgroundImage: `url("${bitmap}")`,
                    backgroundSize: "100%",
                    backgroundRepeat: "repeat-y",
                    minHeight: "calc(100vh - 64px)"
                }}
            >
                <Typography variant="h2" sx={{ textAlign: { xs: "center", md: "start" }, width: { md: "70%", margin: "0 auto", padding: "20px 0" } }}>
                    Interests
                </Typography>
                <Card sx={{ marginLeft: "auto", backgroundColor: "#e8e8e8ad", width: { xs: "100%", md: "80%", lg: "45%" } }}>
                    <CardHeader title="Dev-Ops" />
                    <CardMedia component="img" image={"https://firebasestorage.googleapis.com/v0/b/fallon-io-portfolio.appspot.com/o/interests%2Fdevops-example.png?alt=media&token=e85932e2-defa-4f05-b736-9fef9c74a776"} />
                    <CardContent>
                        <Typography>I have worked heavily with </Typography>
                    </CardContent>
                </Card>
            </Box>
    )
}