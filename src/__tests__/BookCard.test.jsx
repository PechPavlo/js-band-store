import {
  configure, mount,
} from 'enzyme';
import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import BookCard from '../components/BookCard/BookCard';

configure({ adapter: new Adapter() });
const mockStore = configureStore();

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useLayoutEffect: jest.requireActual('react').useEffect,
}));

const book = {
  cover: 'string',
  author: 'string',
  title: 'string',
  id: '1',
  count: 2,
  price: 14,
};

const defaultState = {
  booksCatalog: {
    books: [
      {
        id: '1',
        title: 'string',
        author: 'JuanMa Garrido',
        level: 'Intermediate',
        description: '(En Castellano) Revision de conceptos (actuales) de javascript desde basicos hasta un nivel intermedio',
        cover: 'https://jsbooks.revolunet.com/img/cover-apuntes-javascript-intermedio.png',
        tags: [
          'core',
        ],
        price: 55.86,
        count: 4,
      },
      {
        id: '2',
        title: 'string',
        author: 'JuanMa Garrido',
        description: '(En Castellano) Revision de conceptos (actuales) de javascript avanzados',
        level: 'Advanced',
        cover: 'https://jsbooks.revolunet.com/img/cover-apuntes-javascript-avanzado.png',
        tags: [
          'core',
        ],
        price: 57.93,
        count: 5,
      },
    ],
  },
};

const store = mockStore(defaultState);
const setUp = () => mount(
  <Provider store={store}>
    <BookCard cardBook={book} />
  </Provider>,
);

describe('Card', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  test('should find button in Card component', () => {
    const wrapper = component.find('.book-card_button');
    expect(wrapper.length).toBe(1);
  });

  test('should be correct book title in BookCard component', () => {
    const wrapper = component.find('.book-card_title');
    expect(wrapper.text()).toBe('string');
  });
});

describe('should render BookCard component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('should contain .book-card_button', () => {
    const wrapper = component.find('.book-card_button');
    expect(wrapper.length).toBe(1);
  });

  it('should contain one h3', () => {
    const wrapper = component.find('h3');
    expect(wrapper.length).toBe(1);
  });
});
