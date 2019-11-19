import React from 'react'

import Routes from './routes'
import { Navbar } from './components'

const App = () => {
    return (
        <div>
            <h2>Ticket Scraper</h2>
            <Navbar />
            <Routes />
        </div>
    );
}


export default App