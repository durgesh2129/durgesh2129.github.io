import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About, Education, Contacts, Projects, Achievement, Experience } from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>

            <Navbar />        
            <Landing />
            <About />
            <Education />
            <Projects />
            <Achievement />
            <Experience/>
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main
