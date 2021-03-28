import {
  configure, mount,
} from 'enzyme';
import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import NotFound from '../components/NotFound/NotFound';

configure({ adapter: new Adapter() });
const mockStore = configureStore();

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useLayoutEffect: jest.requireActual('react').useEffect,
}));
const defaultState = {
  error: 'string',
  message: 'string',
};

const store = mockStore(defaultState);
const setUp = () => mount(
  <Provider store={store}>
    <NotFound />
  </Provider>,
);

describe('NotFound component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  test('should find .not-found-controls in rendered NotFound component"', () => {
    const wrapper = component.find('.not-found-controls');
    expect(wrapper.length).toBe(1);
  });

  test('should find .not-found-container in rendered NotFound component"', () => {
    const wrapper = component.find('.not-found-container');
    expect(wrapper.length).toBe(1);
  });
  test('should find three h2 in rendered NotFound component"', () => {
    const wrapper = component.find('h2');
    expect(wrapper.length).toBe(3);
  });
});
