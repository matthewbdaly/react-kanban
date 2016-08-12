import TestUtils from 'react-addons-test-utils';
import React from 'react';
import {findDOMNode} from 'react-dom';
import Column from '../../js/components/Column';
import {expect} from 'chai';

const {renderIntoDocument} = TestUtils;

describe('Column', () => {
  it('renders the column', () => {
    const component = renderIntoDocument(
      <Column column="Todo" />
    );
    const column = findDOMNode(component.refs.column);
    expect(column).to.be.ok;
    expect(column.textContent).to.contain('Todo');
  });
});
