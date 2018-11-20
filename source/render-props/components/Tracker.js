// Core
import React, { Component } from 'react';

export default class Tracker extends Component {
  state = {
      x: 0,
      y: 0,
  };

  _handleMouseMove = (event) => {
      this.setState({
          x: event.clientX,
          y: event.clientY,
      });
  };

  render () {
      const { render, children } = this.props;
      let result = null;

      if (children) {
          result = children(this.state);
      }

      if (render) {
          result = render(this.state);
      }

      return (
          <div className = 'tracker' onMouseMove = { this._handleMouseMove }>
                Tracker {this.state.x} {this.state.y} Оставил для наглядности
              {result}
          </div>
      );
  }
}
