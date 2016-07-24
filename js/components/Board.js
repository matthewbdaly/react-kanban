import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className="board">
        <h1 ref="title">{this.props.title}</h1>
      </div>
    );
  }
});
