// This line imports the React object from the "react" library.
//In React applications, we need to import React when we're defining components.
import React from "react";

/*Here, a functional component named TextError is defined. 
It takes props as an argument, which can be used to pass data to the component.*/
const TextError = (props) => {

    /* It returns JSX (JavaScript XML), which represents the structure of the component. 
    In this case, it's a div element with a specific class (text-sm for small text and text-red-500 for red color), 
    and the content of the div is set to the props.children. The props.children is a special property in React that 
    represents the content between the opening and closing tags of the component when it's used. */

    return <div className="text-sm text-red-500">{props.children}</div>;
};



// Finally, the TextError component is exported as the default export from this module. 
export default TextError;