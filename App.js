 // tag nam //attribute//body
        // const heading = React.createElement("h2", 
        // {id:"heading" ,xyz:"abc"},
        //  "Hello world from React");
        //  console.log(heading);
        //  //{$$typeof: Symbol(react.element), type: 'h2', key: null, ref: null, props: {…}, …}
        // const root = ReactDOM.createRoot(
        //     document.getElementById("root"));
        // root.render(heading);
        
const parent=React.createElement("div",
{id:"parent"},
React.createElement(
    "div",
    {id:"child"},
    [React.createElement("h1",{},'I am an h1 tag'),
    React.createElement("h1",{},'I am an h1 tag')]

),
React.createElement(
    "div",
    {id:"child2"},
    [React.createElement("h1",{},'I am an h1 tag'),
    React.createElement("h1",{},'I am an h1 tag')]
    
));
//JSX
console.log(parent);
const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);