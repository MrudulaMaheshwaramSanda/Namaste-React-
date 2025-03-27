# React

# Parcel
    Dev Build
    local server
    HMR - HOT module replacement - when we change anything in the file it automatically refreshes the web page 
    File watching algrithm - written in C++ - updates the title immediately
    Caching - Faster rebuilds - parcel-cache
    Image optimization- expensive operation
    Minification - uses some of lib in node modules
    Bundling
    Compress - removes white spaces 
    Consistent Hashing
    code splitting
    differenctial bundling - application can be opened inside any browers (older browsers)
    Error handling
    Host app on https
    Tree Shaking - remove unused code 
    Differenct dev n prod bundles - production takes little time 

# Food Ordering App

// components of app

 * Header - logo component
 *          Nav items (home about us cart etc)
 * Body   - search bar
 *          resto card container
 *              restau cards
 *                  img
 *                  name of res, star             rating, cuisine, delivery time
 * footer  - copyright
 *           links
 *           contact

 Two Types of Export/Import

 -Default export/import
    export default component;
    import component from "path";

-Named export/import
    export const component;
    import {component} from "path";

# React Hooks

Normal JS utility functions given by React(node_modules)
2 important Hooks
    useState() - used to create state variables
    useEffect()

# Routing
    Client Side Routing - Rendering all components at 1st load and then rendering components when they are clicked instead of making network calls
    Server Side Routing - Making network call for every click

 
# Redux ToolKit
    -Install @reduxjs/toolkit and react-redux
    -Build our store
    -Connect our storeto our app
    -Slice (cartSlice)
    -dispatch(slice)
    -Selector

# Types of testing
    - Unit testing
    - Integration Testing
    - End to End Testing (E2E testing)

# Setting up testing 

    - React testing lib installation
    - Install Jest
    - Install jest babel
    - configure parcel (.parcelrc) to disable default babel 
    - Jest npx jest --init
    - Install jsdom library
    - Install @bable/preset-react - to make JSX work in test cases (babel/preset heps to convert the jsx in render method of texts to html)
    - Include @bable/preset-react inside my babel config
    - Install @testing-library/jest-dom - (for tobeindocument funct work)