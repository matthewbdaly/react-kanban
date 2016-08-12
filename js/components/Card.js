import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className="card" ref="card">
        <h4>{this.props.title}</h4>
        <p>{this.props.description}</p>
      </div>
    );
  }
});
