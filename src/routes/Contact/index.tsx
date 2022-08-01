import { Home, Mail, Phone } from "@mui/icons-material";
import { Box, Card, CardContent, CardHeader, CardMedia, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import bitmap from "assets/bitmap.png"
import profile from "assets/profile-image.jpg"
import { ReactElement } from "react";

const contactList: {icon: ReactElement, text: string, link: string, blank: boolean}[] = [
    {icon: <Phone/>, text: "+1(708)212-4170", link: "tel:+17082124170", blank: false},
    {icon: <Home/>, text: "611 Westmoreland Ave. Waukegan, IL 60085", blank: true, link: "https://www.google.com/maps/place/611+Westmoreland+Ave,+Waukegan,+IL+60085/@42.368626,-87.8587563,17z/data=!3m1!4b1!4m5!3m4!1s0x880f92ac82cdd945:0x987bfe0451b57952!8m2!3d42.368626!4d-87.8565676"},
    {icon: <Mail/>, text: "Matthew.B.Fallon@gmail.com", link: "mailto:matthew.b.fallon@gmail.com", blank: false}
]

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
                    Contact
                </Typography>
                <Card sx={{ marginX: "auto", backgroundColor: "#e8e8e8ad", width: { xs: "90%", md: "80%", lg: "45%" }, borderRadius: "10px", border: (theme) => {return "3px solid " + theme.palette.primary.main}}}>
                    <CardHeader title="Mathew Fallon" />
                    <CardMedia component="img" image={profile} sx={{objectPosition: "50% 5%", marginX: "auto",width: "80%", borderRadius: "25px", border: (theme) => {return "3px solid " + theme.palette.secondary.main},height: {xs: 300, sm: 400, md: 500, lg: 400}}} />
                    <CardContent>
                        <List >
                            {contactList.map(contact => {
                                return (<ListItem>
                                    <ListItemButton component="a" href={contact.link} target={contact.blank ? "_blank" : "_self"}>
                                        <ListItemIcon>
                                            {contact.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={contact.text}/>
                                    </ListItemButton>
                                </ListItem>)
                            })}
                        </List>
                    </CardContent>
                </Card>
            </Box>
    )
}