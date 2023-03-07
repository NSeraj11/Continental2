import React from 'react'
import HotelFront from "../assets/images/Continental-Front.png";
import styled from 'styled-components';
import Pets from '../assets/images/pets.jpeg'
import Wifi from '../assets/images/wifi.jpeg'
import CS from '../assets/images/car-service.jpeg'
import RS from '../assets/images/room-service.jpeg'




function Home() {
  return (
    <>
        <Main>
            <img src={HotelFront} className="hotel-front" alt="hotel-front" />
            <div className="banner">
                <h2>Experience the Difference</h2>
            </div>
        </Main>

        <Container class="div-container">
            <div class="circle-feature pets">
                <img src={Pets} alt="" />
                <h5>All Pets Welcome</h5>
            </div>
            <div class="circle-feature wifi">
                <img src={Wifi} alt="" />
                <h5>Free Hotel Wifi</h5>
            </div>
            <div class="circle-feature car-service">
                <img src={CS} alt="" />
                <h5>Car and Shuttle Service</h5>
            </div>
            <div class="circle-feature room-service">
                <img src={RS} alt="" />
                <h5>24/7 Room Service</h5>
            </div>
    </Container>
    </>
  )
}

const Main = styled.div`
    img.hotel-front{
        position:relative;
        height:800px;
        left:400px;
        top:-30px;
        margin-bottom:-35px;
    }

    div.banner{
        padding:20px;
        height:100px;
        width:100%;
        background:#040439;

        h2{
            color:#EBEBEB;
            text-align:center;
            font-size:1.5em;
            font-family:"Gloock";

        }
    }
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    background:#040439;

    .circle-feature{
        position: relative;
        bottom:-10px;

        img{
            height: 100px;
            border-radius: 30px;
            width: 100px;
        }

        h5{
            color:white;
        }
    }
`;

export default Home