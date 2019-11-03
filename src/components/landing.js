import React from 'react';
import { Jumbotron } from 'reactstrap'

const Landing = () => (
    <Jumbotron 
        className="col-xs-12 offset-sm-2 col-sm-8 offset-md-3 col-md-6 offset-lg-3 col-lg-6 jumbotron">
        <h5 className="text-center display-3">Welcome to Health India </h5>
        <p className="lead">
            Health India  is a software aimed at managing patient Medical Data 
            and other related data in a timely, effective and efficient manner.
        </p>
        <hr className="my-2" />
        {/*<p>To get started, select a module on the navigation bar.</p>*/}
    </Jumbotron>
)

export default Landing;