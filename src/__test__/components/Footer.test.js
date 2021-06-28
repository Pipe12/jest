import React from 'react';
import { mount, shallow } from 'enzyme';
import Footer from '../../components/Footer';

describe('<Footer />', () => {
  const footer = shallow(<Footer />);

  test('Render Footer component', () => {
    expect(footer.length).toEqual(1);
  });
  test('Title render', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });

});
