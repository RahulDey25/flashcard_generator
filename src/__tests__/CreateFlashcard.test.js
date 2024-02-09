// Import necessary dependencies
import { Provider } from "react-redux";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import store from "../Store/store";
import CreateFlashCard from "../Pages/CreateFlashcard";

// Define a helper function to render components wrapped in the Redux Provider
const data = (component) =>
    render(<Provider store={store}>{component}</Provider>);

// Cleanup after each test
afterEach(() => {
    cleanup();
});
// Describe test suite for the CreateFlashCard component
describe(CreateFlashCard, () => {
    beforeEach(() => {
        // Render the CreateFlashCard component before each test
        data(<CreateFlashCard />);
    });

    // Test for the presence of group name input field
    test('should display group name input field', () => {
        const groupname = screen.getByLabelText(/Create Group*/i)
        expect(groupname).toBeInTheDocument()
    })
    // Test for the presence of group description input field
    test('should display group description input field', () => {
        const groupdescription = screen.getByLabelText(/Add Description/i)
        expect(groupdescription).toBeInTheDocument()
    })
    // Test for the presence of group image upload field
    test('should display group image upload field', () => {
        const groupImg = screen.getByText('Upload Image')
        expect(groupImg).toBeInTheDocument()
    })
    // Test for the presence of term input field
    test('should display term input field', () => {
        const cardname = screen.getByLabelText(/Enter Term/i)
        expect(cardname).toBeInTheDocument()
    })

    // Test for the presence of definition input field
    test('should display definition input field', () => {
        const carddescription = screen.getByLabelText(/Enter Description/i)
        expect(carddescription).toBeInTheDocument()
    })
    // Test for the presence of term image upload field
    test('should display term image upload field', () => {
        const cardImage = screen.getByText(/Select Image/i)
        expect(cardImage).toBeInTheDocument()
    })
    // Test for the presence of 'Add More' button
    test('should display "Add More" button', () => {
        const addmorebutton = screen.getByText(/Add More/i)
        expect(addmorebutton).toHaveTextContent(/Add More/i)
    })

    // Test for the presence of 'Create' button
    test('should display "Create" button', () => {
        const create = screen.getByRole("button", { name: "Create" })
        expect(create).toHaveTextContent(/Create/i)
    })
});