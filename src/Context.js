import React from 'react';

const Context = React.createContext({
    addSearch: function() {},
    addFilter: function() {},
    addUrl: function() {},
    fetch: function() {},
    url: "",
    results: []
})

export default Context