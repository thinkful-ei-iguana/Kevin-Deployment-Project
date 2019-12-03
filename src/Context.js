import React from 'react';

const Context = React.createContext({
    results: [],
    clear: function() {},
    api: function() {}
})

export default Context