import React from 'react'
import styled from 'styled-components';
import Monument from '../../assets/images/monument-1.jpeg'
import Museum from '../../assets/images/museum-1.jpeg'
import Restaurant from '../../assets/images/restaurant.jpeg'
import Zoo from '../../assets/images/zoo.jpeg'
import Arena from '../../assets/images/arena.jpeg'



function Activities() {
  return (
    <>
    <Container class="attractions-container">
            <div class="attraction">
                <div class="image-container">
                    <img src={Monument} alt="" />
                </div>
                <div class="text-container">
                    <h3>Visit the Monuments!</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    <p>Temporibus excepturi quo ullam, tenetur voluptates totam eos.</p>
                    <p> Quaerat iure mollitia cumque!</p>
                    <button>Learn More</button>
                </div>
            </div>
        </Container>
        <Container class="attractions-container">
            <div class="attraction">
                <div class="image-container">
                    <img src={Museum} alt="" />
                </div>
                <div class="text-container">
                    <h3>Visit the Museums!</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    <p>Temporibus excepturi quo ullam, tenetur voluptates totam eos.</p>
                    <p> Quaerat iure mollitia cumque!</p>
                    <button>Learn More</button>
                </div>
            </div>
        </Container>
        <Container class="attractions-container">
            <div class="attraction">
                <div class="image-container">
                    <img src={Restaurant} alt="" />
                </div>
                <div class="text-container">
                    <h3>Visit the Restaurants!</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    <p>Temporibus excepturi quo ullam, tenetur voluptates totam eos.</p>
                    <p> Quaerat iure mollitia cumque!</p>
                    <button>Learn More</button>
                </div>
            </div>
        </Container>
        <Container class="attractions-container">
            <div class="attraction">
                <div class="image-container">
                    <img src={Zoo} alt="" />
                </div>
                <div class="text-container">
                    <h3>Visit the Zoo!</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    <p>Temporibus excepturi quo ullam, tenetur voluptates totam eos.</p>
                    <p> Quaerat iure mollitia cumque!</p>
                    <button>Learn More</button>
                </div>
            </div>
        </Container>
        <Container class="attractions-container">
            <div class="attraction">
                <div class="image-container">
                    <img src={Arena} alt="" />
                </div>
                <div class="text-container">
                    <h3>Visit the Arena!</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    <p>Temporibus excepturi quo ullam, tenetur voluptates totam eos.</p>
                    <p> Quaerat iure mollitia cumque!</p>
                    <button>Learn More</button>
                </div>
            </div>
        </Container>
        </>
  )
}

const Container = styled.div`
    background-color: white;
    position: relative;
    height: 200px;
    left:200px;
    border-radius: 10px;
    width:1100px;
    margin:20px;

    .image-container img{
    height: 200px;
    width: 300px;
}

.text-container{
    position: relative;
    left: 400px;
    top:-210px;
}

.text-container button{
    position: relative;
    background-color: transparent;
    top:0px;
    left:300px;
    padding: 5px;
    border-radius: 10px;
    border:1px solid;
}
`;

export default Activities