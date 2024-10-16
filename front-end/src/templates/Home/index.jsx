import CarouselFade from "../../components/Carousel";
import Cards from "../../components/Cards"

import "./style.css";

import produto1 from "../../img/pedigre-adulto-p.jpg"
import produto2 from "../../img/purina-gato-adulto.jpg"

import { Component } from "react";


export class Home extends Component {
  render() {
    return (
      <section className="container">
        <CarouselFade
          link1={produto1}
          link2={'https://images.pexels.com/photos/8434641/pexels-photo-8434641.jpeg?auto=compress&cs=tinysrgb&w=600'}
          link3={produto2}
          link4={'https://images.pexels.com/photos/9881131/pexels-photo-9881131.jpeg?auto=compress&cs=tinysrgb&w=600'}
          link5={'https://images.pexels.com/photos/4445456/pexels-photo-4445456.jpeg?auto=compress&cs=tinysrgb&w=600'}
          link6={'https://images.pexels.com/photos/4445461/pexels-photo-4445461.jpeg?auto=compress&cs=tinysrgb&w=600'}
        />
        <div className="gridCards">
        <Cards
        imgs={produto2}
        title={'Ração'}
        preco={"R$19,90"}
        />
        <Cards
        imgs={produto1}
        title={'Ração'}
        preco={"R$19,90"}
        />
        <Cards
        imgs={produto1}
        title={'Ração'}
        preco={"R$19,90"}
        />
        </div>
        <div className="gridCards">
        <Cards
        imgs={produto1}
        title={'Ração'}
        preco={"R$19,90"}
        />
        <Cards
        imgs={produto1}
        title={'Ração'}
        preco={"R$19,90"}
        />
        <Cards
        imgs={produto1}
        title={'Ração'}
        preco={"R$19,90"}
        />
        </div>
      </section>
    );
  }
}
