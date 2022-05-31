import { AppBar, Box, CssBaseline, IconButton, Link, Toolbar, Typography } from "@mui/material";
import nameLogo from "assets/logo-name-only-export.png";
import { Outlet, Link as RouterLink, useLocation } from "react-router-dom";
import githubIcon from "assets/GitHub-Mark-120px-plus.png"
import { Menu as MenuIcon } from "@mui/icons-material";

interface LayoutProps {
    pages: Page[]
}

interface Page {
    name: string
    component: JSX.Element
}

export default function Layout({pages}: LayoutProps) {
    const currPage = useLocation().pathname.split("/")[1]

    return (
        <>
            <CssBaseline />
            <AppBar color="inherit">
                {/* Using Flex as it's the proper situation for using it when you want a lot of auto-flow behavior.*/}
                <Toolbar sx={{ display: "grid", alignItems: "center", justifyItems: "center", gridTemplateColumns: "1fr 1fr 1fr" }}>
                    <Box sx={{display: "flex", gap: "15px", justifySelf: "start"}}>
                        <IconButton sx={{display: {xs: "inline", md: "none"}}}>
                            <MenuIcon fontSize="large"/>
                        </IconButton>
                        <Link to="/" component={RouterLink} sx={{ display: "flex", gap: "15px" }} underline="none" color="inherit" variant="h5">
                            <img src={nameLogo} height={50} alt="" />
                            <Typography variant="h4" sx={{ alignSelf: "end", visibility: { xs: "collapse", lg: "visible" }, height: { xs: "0px", lg: "auto" }, width: { xs: "0px", lg: "auto" } }}>Matthew Fallon</Typography>
                        </Link>
                    </Box>
                    <Box sx={{ marginTop: "15px", display: {xs: "none", md: "flex"}, gap: "15px" }}>
                        {pages.map((page, index) => {
                            if (index % 2 === 0) {
                                return <Link key={index} variant="h5" color="primary" underline={currPage === page.name ? "always" : "none"} sx={{":hover": {color: (theme) => {return theme.palette.primary.light}, textShadow: "0.5px 0.5px 0 #565656"}, ":active": {color: (theme) => {return theme.palette.primary.dark}}}} component={RouterLink} to={`/${page.name}`}>{page.name[0].toUpperCase() + page.name.substring(1)}</Link>
                            } else {
                                return <Link key={index} variant="h5" color="secondary" underline={currPage === page.name ? "always" : "none"} sx={{":hover": {color: (theme) => {return theme.palette.secondary.light}, textShadow: "0.5px 0.5px 0 #565656"}, ":active": {color: (theme) => {return theme.palette.secondary.dark}}}} component={RouterLink} to={`/${page.name}`}>{page.name[0].toUpperCase() + page.name.substring(1)}</Link>

                            }
                        })}
                    </Box>
                    <Box sx={{ justifySelf: "end", gridColumn: "3"}}>
                        <Link href="https://github.com/MatthewFallon" title="Github Profile"><img alt="" style={{ verticalAlign: "middle" }} src={githubIcon} height={32} /></Link>
                    </Box>
                </Toolbar>
            </AppBar>
            <Toolbar />
            <Outlet />
        </>

    )
}
