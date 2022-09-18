import React, { useState } from "react"
import Machine from "app/components/pages/vendor_panel/machine/Machine"

const machines = [{
    title: 'Machine One',
    location: '33/A Gulshan, Dhaka',
    image: 'machine_1.jpg',
    totalAmount: '10,000'
},
{
    title: 'Machine Two',
    location: '33/A Banani, Dhaka',
    image: 'machine_2.jpg',
    totalAmount: '30,000'
},
{
    title: 'Machine Three',
    location: '33/A Rampura, Dhaka',
    image: 'machine_3.jpg',
    totalAmount: '20,000'
}]

const HorizontalListContainer = () => {

    return (
        <React.Fragment>
            <section className="card-components">
                <div className="container-fluid p-0">
                    <div className="row">
                        <Machine machines={machines} />
                    </div>
                </div>
            </section>
        </React.Fragment >
    )
}

export default HorizontalListContainer