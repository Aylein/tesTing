require('babel-register');
require('babel-polyfill');
const React = require("react");
const ReactDOMServer = require("react-dom/server");

const Index = require("./index").default;

const IIndex = ReactDOMServer.renderToString(React.createFactory(Index)());
console.log(IIndex);