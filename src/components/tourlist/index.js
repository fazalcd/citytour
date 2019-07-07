import React, { Component } from 'react';
import './tourlist.scss';
import Tour from '../tour/tour';
import { tourData } from "../tourData";



class Tourlist extends Component {
    state = {
        tours: tourData
    };
    removeTour = id => {
        const { tours } = this.state;
        const sortedTours = tours.filter(tour=> tour.id !==id);
        this.setState({tours:sortedTours});
    };
    render() {
        const { tours } = this.state;

        return (
        <section className="tourlist">
            {tours.map(tour => {
                return(
                    <Tour key={tour.id} tour={tour} removeTour={this.removeTour}/>
                )
            
            
            })}
               </section>
        );
        
        
    }
}

export default Tourlist;