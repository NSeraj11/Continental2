import React from 'react'
import styled from 'styled-components';
import DC from "../../assets/images/dc-banner.jpeg"

function AreaA() {
  return (
    <Section>
        <div class="left-side-menu">
                <h3>Restaurants</h3>
                <ul>
                    <li><a href="">Founding Farmers DC</a></li>
                    <br />
                    <li><a href="">Benihana</a></li>
                    <br />
                    <li><a href="">Le Diplomate</a></li>
                    <br />
                    <li><a href="">The Capitol Grille</a></li>
                </ul>
            </div>
            <div class="banner-img">
                <img src={DC} alt="" />
            </div>
            <div class="right-side-menu">
                <h3>Fun</h3>
                <ul>
                    <li><a href="">African American History and Culture Museum</a></li>
                    <br />
                    <li><a href="">National Museum of Asian Art</a></li>
                    <br />
                    <li><a href="">National Muesum of American Indian</a></li>
                    <br />
                    <li><a href="">Smithsonian Museum</a></li>
                    <br />
                    <li><a href="">National Mall</a></li>
                </ul>
            </div>
    </Section>
  )
}

const Section = styled.div`
  display:flex;
  margin:0;

  .left-side-menu{
    position:relative;
    top:5px;
    left:50px;

    h3{
        position:relative;
        right:-40px;
        color:#040439;
    }

    ul li{
      list-style-type:none;
    }

    ul li a{
      text-decoration:none;
      list-style-type:none;
      color:#040439;
    }
  }


  .banner-img{
    position:relative;
    right:-250px;
  }


  .right-side-menu{
    position:relative;
    right:-350px;

    h3{
        position:relative;
        right:-40px;
        color:#040439;
    }

    ul li{
      list-style-type:none;
    }

    ul li a{
      text-decoration:none;
      list-style-type:none;
      color:#040439;
    }
  }
`;

export default AreaA