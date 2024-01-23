const heading = React.createElement('h1', { id: 'heading' }, 'Hello world from React!');

console.log('heading react element', heading);

const parent = React.createElement(
    'div',
    { id: 'parent' },
    React.createElement(
        'div',
        { id: 'child' },
        [
            React.createElement('h1', { key: 'h1' }, "I'm a h1 element."),
            React.createElement('h2', { key: 'h2' }, "I'm a h2 element.")
        ]
    )
);

console.log('parent react element', parent);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);