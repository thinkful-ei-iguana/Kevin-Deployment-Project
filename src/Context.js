import React from 'react';

const Context = React.createContext({
    addResult: function() {},
    addSearch: function() {},
    addFilter: function() {}
})

export default Context