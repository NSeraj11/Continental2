import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'


function Navbar() {
  return (
    <Navigation>
        <h2>The Continental</h2>
        <nav>
            <Sections to={"/"}>Home</Sections>
            <Sections to={"/area"}>Area and Activities</Sections>
            <Sections to={"/rooms"}>Rooms</Sections>
            <Sections to={"/menu"}>la Trilogie</Sections>
            <Book to={"/booking"}>Reserve Now</Book>
        </nav>
    </Navigation>
  )
}

const Navigation = styled.div`
    h2{
        font-size:2em;
        position:relative;
        left:40%;
        font-family:'Gloock', serif;
        color: #040439;
    }

    nav{
        height:50px;
        width:100%;
        position:relative;
        top:-30px;
        background:#040439;
        justify-content:space-around;
        color:yellow;
    }
`;

const Sections = styled(NavLink)`
    color:white;
    margin-right:50px;
    font-size:20px;
    padding:10px;
    text-decoration:none;
    position:relative;
    top:20px;
`;

const Book = styled(NavLink)`
            height:50px;
            width:100px;
            border-radius:30px;
            position:relative;
            top:-40px;
            padding:15px;
            text-decoration:none;
            right:-800px;
            background:#040439;
            color:#EBEBEB
`;




export default Navbar