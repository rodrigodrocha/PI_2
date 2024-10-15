import CarouselFade from "../../components/Carousel";
import "./style.css";

import { Component } from "react";

export class Home extends Component {
  render() {
    return (
      <section className="container">
        <CarouselFade/>
      </section>
    );
  }
}
