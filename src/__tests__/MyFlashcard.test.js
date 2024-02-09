// importing necessary components
import React from "react";
import store from '../Store/store';
import "@testing-library/jest-dom";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import MyFlascard from "../Pages/MyFlashcards";
import { removeFlashCard } from "../App/feature/flascardSlice";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";


// Mocking the react-redux library to mock useDispatch and useSelector hooks
jest.mock("react-redux", () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: jest.fn()
}));

// Mocking the react-router-dom library to mock the useContext hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useContext: jest.fn(() => ({ basename: '' })),
}));

describe('MyFlashcard Component', () => {
  beforeEach(() => {
    // Mock the useSelector hook to simulate selecting flashcard data from the Redux store
    jest.spyOn(require('react-redux'), 'useSelector').mockReturnValue([
      {
        id: 1,
        groupname: 'Sample Group 1',
        groupdescription: 'Sample Description 1',
        cards: [{ cardid: 12, cardname: 'sample cardname 1 ', carddescription: 'sample carddescription 1', cardImage: 'sampleImage1.jpg' }],
      },
      {
        id: 2,
        groupname: 'Sample Group 2',
        groupdescription: 'Sample Description 2',
        cards: [{ cardid: 13, cardname: 'sample cardname 2 ', carddescription: 'sample carddescription 2', cardImage: 'sampleImage2.jpg' }],
      },
    ]);

    render(
      <Provider store={store}>
        <MemoryRouter>
          <MyFlascard />
        </MemoryRouter>
      </Provider>
    );
  });

  test('renders MyFlashcard component with mock data', () => {
    // Example: Verify that the group names are correctly rendered on the page
    const groupNames = screen.getAllByText(/Sample Group/);
    expect(groupNames.length).toBe(2);

    // Consider adding additional test cases based on your component's behavior to ensure comprehensive testing coverage
  });

  // Feel free to include additional test cases based on your component's behavior
});