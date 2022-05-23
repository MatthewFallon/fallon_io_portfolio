import { AppBar, Link, SxProps, Toolbar, Typography } from "@mui/material";
import nameLogo from "assets/logo-name-only-export.png";
import { Outlet, Link as RouterLink } from "react-router-dom";

export default function Layout() {


    return (
        <>
            <AppBar color="transparent">
                {/* Using Flex as it's the proper situation for using it when you want a lot of auto-flow behavior.*/}
                <Toolbar sx={{display: "flex", alignItems: "center"}}>
                    <Link to="/" component={RouterLink} sx={{display: "flex", gap: "15px"}} underline="none" color="inherit" variant="h5">
                        <img src={nameLogo} height={52} />
                        <Typography variant="h4" sx={{alignSelf: "end", visibility: {sm: "hidden", md: "visible"}}}>Matthew Fallon</Typography>
                    </Link>
                </Toolbar>
            </AppBar>
            <Toolbar />
            <Outlet />
        </>

    )
}

const logoBoxWrapper: SxProps = {}