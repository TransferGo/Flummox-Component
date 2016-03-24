# Flummox Component

A simple way to connect React components to flummox stores and actions

## Installation

``` 
npm install flummox-component
```

## Usage

ES6+ way:

```js
import React from 'react';
import fComponent from 'flummox-component';

export default fComponent('ComponentName', {
    
    actions: ['exampleActions', 'myActions'],
    
    stores: ['exampleStore', 'myStore'],
    
    propTypes: {
        propertyOne: React.PropTypes.any,
        propertyTwo: React.PropTypes.any,
    },
    
    onClick(e) {
        this.actions.exampleActions.onClick(e);
    },
    
    render() {
        return (
            <a onClick={this.onClick}>Click me!</a>
        );
    },
    
    ...other component methods
}); 
```

ES5 way:

```js
var React = require('react');
var fComponent = require('flummox-component');

module.exports = fComponent('ComponentName', {
    
    actions: ['exampleActions', 'myActions'],
    
    stores: ['exampleStore', 'myStore'],
    
    propTypes: {
        propertyOne: React.PropTypes.any,
        propertyTwo: React.PropTypes.any,
    },
    
    onClick: function(e) {
        this.actions.exampleActions.onClick(e);
    },
    
    render: function() {
        return (
            <a onClick={this.onClick}>Click me!</a>
        );
    },
    
    ...other component methods
}); 
```

## License

Flummox component is MIT licensed.
