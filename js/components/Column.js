import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className="column">
        <h2 ref="column">{this.props.column}</h2>
      </div>
    );
  }
});
