import "./styles.css";

import { Component } from "react";

export class Button extends Component {
  render() {
    const { text, quandoClicado, disable } = this.props;
    return (
      <button className="button" onClick={quandoClicado} disabled={disable}>
        {text}
      </button>
    );
  }
}
