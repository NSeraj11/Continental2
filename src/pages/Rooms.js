import React from 'react'
import styled from 'styled-components';
import RoomD from '../assets/images/room-deluxe.jpeg'
import RoomP from '../assets/images/room-premier.jpeg'


function Rooms() {
  return (
    <div>
        <Container class="room-container">
            <div class="room room-deluxe">
                <div class="img-container">
                    <img src={RoomD} alt="" />
                </div>
                <h3>Book Our Deluxe Room</h3>
                <h6>Size: 320 - 440 sq.ft., 29.7 - 40.8 metres</h6>
                <br />
                <p>Dining, working, or relaxing, the Deluxe Room provides home comfort with class, set against the backdrop of downtown Washington DC.</p>
                <p> Featuring a King-size bed, marble bathroom, walk-in shower, and in-mirror TV, select Deluxe rooms even boast an oversized tub to unwind in</p>
                <div class="button-container">
                    <button class="reserve-room-btn">Book Room</button>
                </div>
            </div>
            <div class="room room-premier">
                <div class="img-container">
                    <img src={RoomP} alt="" />
                </div>
                <h3>Book Our Premier Room</h3>
                <h6>Size: 300 - 320 sq.ft., 27.8 - 29.7 metres</h6>
                <br />
                <p>For work, rest, or play, the Premier Room offers a home away from home with a touch of class in the heart of Washington DC.</p>
                <p>Equipped with everything you and your family might need, this luxurious hotel room features a King-size bed, a well-appointed workspace, and access to our Peloton-equipped fitness center.</p>
                <div class="button-container">
                    <button class="reserve-room-btn">Book Room</button>
                </div>
            </div>
        </Container>

        <AmenitiesH class="amenities-header">
            <h2>Amenities</h2>
            <h5>(Available in both our Deluxe and Premier rooms)</h5>
        </AmenitiesH>

        <AmenitiesC class="amenities-container">
            <div class="amenities part-1">
                <ul>
                    <li>Complimentary Wi-Fi</li>
                    <li>Complimentary filtered bottle water</li>
                    <li>iPad for in-room requests</li>
                </ul>
            </div>
            <div class="amenities part-2">
                <ul>
                    <li>Twice-daily housekeeping</li>
                    <li>Digital in-room temperature control</li>
                    <li>Custom scented bath accessories</li>
                </ul>
            </div>
            <div class="amenities part-3">
                <ul>
                    <li>Complimentary local and long distance calls</li>
                    <li>Complimentary show shine</li>
                </ul>
            </div>
            <div class="amenities part-4">
                <ul>
                    <li>Fully stocked refreshment center</li>
                    <li>In-mirror bathroom televisions</li>
                    <li>Dog friendly</li>
                </ul>
            </div>
        </AmenitiesC>
    </div>
  )
}

const Container = styled.div`
    display:flex;

    .room{
        margin:20px;
        padding-right: 20px;
        height: 700px;
        width:700px;

        .img-container img{
            height: 300px;
            padding:0;
            margin:0;
            width:500px;
            display: block;
            margin:0px;
        }

        .button-container{
            position: relative;
            top:20px;

            .reserve-room-btn{
                padding:20px;
                background-color: #040439;
                color:white;
                border:none;
                border-radius: 30px;
            }
        }
    }
`;

const AmenitiesH = styled.div`
    color:black;
    text-align: center;
`;

const AmenitiesC = styled.div`
    display:flex;

    .amenities{
        background-color: #040439;
        margin:50px;
        padding:20px;
        border-radius: 50px;

        ul{
            list-style-type: none;

            li{
                padding:10px;
                color:white;
            }
        }
    }
`;


export default Rooms