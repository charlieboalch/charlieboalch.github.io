import React from "react"
import {Link, Outlet } from "react-router"
import {styled, Typography} from "@mui/material";

const Navbar = styled('div')`
    margin: 0 12% 0 12%;
    padding: 10px 15px 15px;
    justify-content: space-between;
    display: flex;

    @media screen and (max-width: 1080px) {
        margin: 0 4%;
    }

    @media screen and (max-width: 768px) {
        padding: 1% 3% 3% 3%;
        margin: 0;
    }
`

const NavButtons = styled('div')`
    display: flex;
    gap: 30px;
    
    a {
        align-content: center;
    }
`

export const MainLayout = () => {
    return (
        <div>
            <Navbar>
                <Link to={"/"}><img src={'/main_icon.png'} alt={""} width={40} height={40}/></Link>
                <NavButtons>
                    <Link to={"/"}><Typography variant={'h5'}>Home</Typography></Link>
                    <Link to={"/projects"}><Typography variant={'h5'}>Projects</Typography></Link>
                    <Link to={"/about"}><Typography variant={'h5'}>About</Typography></Link>
                </NavButtons>
            </Navbar>
            <Outlet />
        </div>
    )
}