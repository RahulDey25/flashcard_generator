// This function, reportWebVitals, takes a callback function onPerfEntry as a parameter.
// It checks if onPerfEntry is provided and is a function before proceeding.

const reportWebVitals = onPerfEntry => {
    // Check if onPerfEntry is provided and is a function
  if (onPerfEntry && onPerfEntry instanceof Function) {
        // Asynchronously import the 'web-vitals' library, which provides functions for measuring performance metrics.
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
            // Call the provided callback function with each performance metric function

      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};
// Export the reportWebVitals function as the default export of this module.
export default reportWebVitals;
