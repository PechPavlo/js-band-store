import {
  configure, mount,
} from 'enzyme';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Header from '../components/Header/Header';

configure({ adapter: new Adapter() });
const mockStore = configureStore();

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useLayoutEffect: jest.requireActual('react').useEffect,
}));

const defaultState = {
  user: {
    isAuthorized: true,
    isLoading: false,
    userName: 'string',
    token: 'string',
    avatar: 'string',
    error: null,
  },
  cart: {
    books: [],
  },
};

const store = mockStore(defaultState);
const setUp = () => mount(
  <Provider store={store}>
    <Router>
      <Header />
    </Router>
  </Provider>,
);

describe('Header', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  test('should find button in Header component', () => {
    const wrapper = component.find('button');
    expect(wrapper.length).toBe(1);
  });

  test('should be correct user-name in Header component', () => {
    const wrapper = component.find('.user-name');
    expect(wrapper.text()).toBe('string');
  });
});
