// Basic React /////////////////////////////////////
/*
const heading = React.createElement(
    "h1", // type
    // props = children + attributes
    {                       // attributes
        id: "heading",      
        xyz:"abc"
    }, 
    "Hello World from React!" // children
);

console.log(heading); // JS object - react element

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
*/
// Nested structure using React /////////////////////
/**
 * <div id="parent">
 *      <div id="child1">
 *          <h1></h1>
 *          <h2></h2>
 *      </div>
 *      <div id="child2">
 *          <h1></h1>
 *          <h2></h2>
 *      </div>
 * </div>
 */

const parent = React.createElement(
    "div", 
    {id: "parent"},
    [
        React.createElement(
            "div",
            {id: "child1"},
            [
                React.createElement(
                    "h1",
                    {id: "heading", key: "1"},
                    "I'm a h1 tag"
                ),
                React.createElement(
                    "h2",
                    {id: "sub-heading", key: "2"},
                    "I'm a h2 tag"
                )
            ]
        ),
        React.createElement(
            "div",
            {id: "child2"},
            [
                React.createElement(
                    "h1",
                    {id: "heading", key: "1"},
                    "I'm a h1 tag"
                ),
                React.createElement(
                    "h2",
                    {id: "sub-heading", key: "2"},
                    "I'm a h2 tag"
                )
            ]
        )
    ]
    
);
//JSX is the solution to this tedious code

console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById("header"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);