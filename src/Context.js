import React from 'react';

const Context = React.createContext({
    addSearch: function() {},
    addFilter: function() {},
    addUrl: function() {}
})

export default Context