import TestUtils from 'react-addons-test-utils';
import React from 'react';
import {findDOMNode} from 'react-dom';
import Card from '../../js/components/Card';
import {expect} from 'chai';

const {renderIntoDocument} = TestUtils;

describe('Card', () => {
  it('renders the card', () => {
    const component = renderIntoDocument(
      <Card title="Learn Redux" description="Need to learn Redux" />
    );
    const card = findDOMNode(component.refs.card);
    expect(card).to.be.ok;
    expect(card.textContent).to.contain('Learn Redux');
    expect(card.textContent).to.contain('Need to learn Redux');
  });
});
