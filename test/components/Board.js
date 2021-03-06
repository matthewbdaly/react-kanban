import TestUtils from 'react-addons-test-utils';
import React from 'react';
import {findDOMNode} from 'react-dom';
import Board from '../../js/components/Board';
import {expect} from 'chai';

const {renderIntoDocument} = TestUtils;

describe('Board', () => {
  it('renders the board', () => {
    const component = renderIntoDocument(
      <Board title="My Project" />
    );
    const title = findDOMNode(component.refs.title);
    expect(title).to.be.ok;
    expect(title.textContent).to.contain('My Project');
  });
});
