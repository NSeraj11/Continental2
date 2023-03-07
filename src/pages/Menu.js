import React from 'react'
import styled from 'styled-components';
import snails from '../assets/images/escargot.jpeg'
import squid from '../assets/images/squid.jpeg'
import duck from '../assets/images/duck.jpeg'
import pissaladiere from '../assets/images/pissaladiere.jpeg'
import gougere from '../assets/images/gougere.jpeg'
import panisse from '../assets/images/panisse.jpeg'
import steak from '../assets/images/steak.jpeg'
import confit from '../assets/images/confit.jpeg'
import fos from '../assets/images/fos.jpeg'
import Bouillabaisse from '../assets/images/Bouillabaisse.jpeg'
import beef from '../assets/images/beef.jpeg'
import cassoulet from '../assets/images/cassoulet.jpeg'
import cremebrulee from '../assets/images/cremebrulee.jpeg'
import galette from '../assets/images/galette.jpeg'
import flan from '../assets/images/flan.jpeg'



 



function Menu() {
  return (
    <Container>
        <WholeMenu>
          <h3>Apéritifs</h3>
          <MenuGroup>
            <MenuItem>
                <img class="menu-item-image" src={snails} alt="snails" />
                <div class="menu-item-text">
                    <h4 class="menu-item-heading">
                        <span class="menu-item-name">Escargots a la Bourguignonne</span>
                        <span class="menu-item-price">$8.00</span>
                    </h4>
                    <p class="menu-item-description">Snails in garlic-herb butter </p>
                </div>
            </MenuItem>
            <MenuItem>
                <img class="menu-item-image" src={squid} alt="squid" />
                <div class="menu-item-text">
                    <h4 class="menu-item-heading">
                        <span class="menu-item-name">Provençal Stuffed Squid</span>
                        <span class="menu-item-price">$7.50</span>
                    </h4>
                    <p class="menu-item-description">Fresh squid stuffed with herbs,chard, and bread crumbs</p>
                </div>
            </MenuItem>
            <MenuItem>
                <img class="menu-item-image" src={duck} alt="duck" />
                <div class="menu-item-text">
                    <h4 class="menu-item-heading">
                        <span class="menu-item-name">Duck Pâté en Croûte</span>
                        <span class="menu-item-price">$10.00</span>
                    </h4>
                    <p class="menu-item-description">A stuffed dish that will have you fighting away others at your table </p>
                </div>
            </MenuItem>
            <MenuItem>
                <img class="menu-item-image" src={pissaladiere} alt="pissaladiere" />
                <div class="menu-item-text">
                    <h4 class="menu-item-heading">
                        <span class="menu-item-name">Pissaladière</span>
                        <span class="menu-item-price">$10.00</span>
                    </h4>
                    <p class="menu-item-description">Flavorful dish consisting of a trifecta of anchovies,olives, and carmelized onions</p>
                </div>
            </MenuItem>
            <MenuItem class="menu-item">
                <img class="menu-item-image" src={gougere} alt="cheesepuffs" />
                <div class="menu-item-text">
                    <h4 class="menu-item-heading">
                        <span class="menu-item-name">Gougères</span>
                        <span class="menu-item-price">$6.00</span>
                    </h4>
                    <p class="menu-item-description">These elavated cheese puffs are one of our favorites</p>
                </div>
            </MenuItem>
            <MenuItem class="menu-item">
                <img class="menu-item-image" src={panisse} alt="snails" />
                <div class="menu-item-text">
                    <h4 class="menu-item-heading">
                        <span class="menu-item-name">Panisse</span>
                        <span class="menu-item-price">$9.00</span>
                    </h4>
                    <p class="menu-item-description">One of our countries best snacks, chickpea fries </p>
                </div>
            </MenuItem>
          </MenuGroup>

          <h3>Entrées principales</h3>
          <MenuGroup>
            <MenuItem class="menu-item">
                <img class="menu-item-image" src={steak} alt="steak" />
                <div class="menu-item-text">
                    <h4 class="menu-item-heading">
                        <span class="menu-item-name">Steak Frites</span>
                        <span class="menu-item-price">$18.00</span>
                    </h4>
                    <p class="menu-item-description">A simple yet delicous recipe served with fries </p>
                </div>
            </MenuItem>
            <MenuItem class="menu-item">
            <img class="menu-item-image" src={confit} alt="chickenconfit" />
            <div class="menu-item-text">
              <h4 class="menu-item-heading">
                <span class="menu-item-name">Chicken Confit</span>
                <span class="menu-item-price">$26.00</span>
              </h4>
              <p class="menu-item-description">Seasoned with herbs and then cooked with olive oil </p>
            </div>
            </MenuItem>
            
            <MenuItem class="menu-item">
            <img class="menu-item-image" src={fos} alt="soup" />
            <div class="menu-item-text">
              <h4 class="menu-item-heading">
                <span class="menu-item-name">French Onion Soup</span>
                <span class="menu-item-price">$20.00</span>
              </h4>
              <p class="menu-item-description">Perfect on a chilly day, dive on in </p>
            </div>
            </MenuItem>
            <MenuItem class="menu-item">
            <img class="menu-item-image" src={Bouillabaisse} alt="fishsoup" />
            <div class="menu-item-text">
              <h4 class="menu-item-heading">
                <span class="menu-item-name">Bouillabaisse</span>
                <span class="menu-item-price">$20.00</span>
              </h4>
              <p class="menu-item-description">fish soup is infused with saffron, orange, thyme and chilli </p>
            </div>
            </MenuItem>
            <MenuItem class="menu-item">
            <img class="menu-item-image" src={beef} alt="beef" />
            <div class="menu-item-text">
              <h4 class="menu-item-heading">
                <span class="menu-item-name">Boeuf Bourguignon</span>
                <span class="menu-item-price">$22.00</span>
              </h4>
              <p class="menu-item-description">A great stew consisting of meat and vegetables </p>
            </div>
            </MenuItem>
            <MenuItem class="menu-item">
            <img class="menu-item-image" src={cassoulet} alt="chicken2" />
            <div class="menu-item-text">
              <h4 class="menu-item-heading">
                <span class="menu-item-name">Cassoulet</span>
                <span class="menu-item-price">$28.00</span>
              </h4>
              <p class="menu-item-description">A classic french dish, you wont regret ordering this </p>
            </div>
            </MenuItem>
          </MenuGroup>

          <h3>la Dessert</h3>
          <MenuGroup>
            <MenuItem class="menu-item">
            <img class="menu-item-image" src={cremebrulee} alt="cremebrulee" />
            <div class="menu-item-text">
              <h4 class="menu-item-heading">
                <span class="menu-item-name">Creme Brulee</span>
                <span class="menu-item-price">$12.00</span>
              </h4>
              <p class="menu-item-description">Classic french dessert</p>
            </div>
            </MenuItem>
            <MenuItem class="menu-item">
            <img class="menu-item-image" src={galette} alt="gallete" />
            <div class="menu-item-text">
              <h4 class="menu-item-heading">
                <span class="menu-item-name">Assorted Pastry slice</span>
                <span class="menu-item-price">$11.50</span>
              </h4>
              <p class="menu-item-description">Choose from one of our delicous assorted pastries, served with coffee or tea</p>
            </div>
            </MenuItem>
            <MenuItem class="menu-item">
            <img class="menu-item-image" src={flan} alt="flan" />
            <div class="menu-item-text">
              <h4 class="menu-item-heading">
                <span class="menu-item-name">Flan</span>
                <span class="menu-item-price">$6.00</span>
              </h4>
              <p class="menu-item-description">Served by the slice, have 1, or 4! Served with coffee or tea </p>
            </div>
            </MenuItem>
          </MenuGroup>

        </WholeMenu>
      </Container>
  )
}

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 1.5em;
`;

const WholeMenu = styled.div`
    font-family: sans-serif;
    font-size: 14px;

    h3{
        margin: 0;
        padding-bottom: 1em;
        border-bottom: 2px solid #ccc;
    }
`;

const MenuGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5em;
  padding: 1.5em 0;
`;

const MenuItem = styled.div`
    display:flex;

    .menu-item-image{
        width: 80px;
        height: 80px;
        flex-shrink: 0;
        object-fit: cover;
        margin-right: 1.5em;
    }

    .menu-item-text{
        flex-grow: 1;

        h4{
            display: flex;
            justify-content: space-between;
            margin: 0;
        }

        .menu-item-description{
            line-height: 1.6;
        }
    }


`;


export default Menu