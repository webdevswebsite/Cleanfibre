import React, { Component } from 'react'
import HeroTwo from './Hero/HeroTwo';
import DomainOffer from './Features/DomainOffer';
// import ServiceTwo from './Services/ServiceTwo';
// import ServiceData from './Services/ServiceData';
import PriceTwo from './Price/PriceTwo';
export class HomeTwo extends Component {
    render() {
        return (
          <React.Fragment>
                <HeroTwo/>
                <DomainOffer/>
                {/* <ServiceTwo ServiceData={ServiceData} /> */}
                <PriceTwo/>
          </React.Fragment>
        )
    }
}

export default HomeTwo
