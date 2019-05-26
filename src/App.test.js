import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
// eslint-disable-next-line no-unused-vars
import setupTest from './setupTest';

describe('App Component', () => {
  it('should render self and subcomponents', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
