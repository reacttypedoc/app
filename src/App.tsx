import React, { Component } from 'react';
import docs from './doc.json';
import './App.scss';

class App extends Component {
    render() {
        return (
            <div className="app">
                <pre><code>{JSON.stringify(docs, null, 4)}</code></pre>
            </div>
        );
    }
}

export default App;
