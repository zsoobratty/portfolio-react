import React from 'react'
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import HomePage from '../components/PortfolioDashboard'
import PortfolioPage from '../components/PortfolioPage'
import IndividualPortfolioPage from '../components/IndividualPortfolio'
import ContactPage from '../components/ContactPage'
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/Header'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/portfolio' component={PortfolioPage} />
                <Route path='/portfolio/:id' component={IndividualPortfolioPage} />
                <Route path='/contact' component={ContactPage} />
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
     </BrowserRouter>
)

export default AppRouter