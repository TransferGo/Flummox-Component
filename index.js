var React = require('react');
var connectToStores = require('flummox/connect');

/**
 *  Adds flux context if someone forgot it:
 */
function addFluxContext(component) {

    if (component.stores || component.actions) {
        component.contextTypes = component.contextTypes || {};
        component.contextTypes.flux = component.contextTypes.flux || React.PropTypes.object;
    }

    return component;
}

/**
 *  Attaches Flummox actions to `this.actions` before component mounts.
 *  {... actions: ['example'], ...} turns into: `this.actions.example`.
 */
function addActions(component) {

    var oldActions = component.actions;
    var oldWillMount = component.componentWillMount;

    if (oldActions) {
        component.componentWillMount = function() {

            this.actions = {};

            for (var i = 0; i < oldActions.length; i++) {
                var name = oldActions[i];

                this.actions[name] = this.context.flux.getActions(name);
            }

            return oldWillMount && oldWillMount.apply(this, arguments);
        };
    }

    return component;
}

/**
 *  Automatically connects React component to Flummox stores and actions.
 */
module.exports = function(displayName, innerComponent) {

    //set displayName for better debugging
    innerComponent.displayName = displayName;

    return connectToStores(
        React.createClass(addFluxContext(addActions(innerComponent))),
        innerComponent.stores
    );
};
