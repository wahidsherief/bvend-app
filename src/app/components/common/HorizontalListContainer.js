import React from "react"
import Machine from "app/components/pages/vendor_panel/machine/components/Machine"


const HorizontalListContainer = ({ item }) => {
    const machines = item.items
    return (
        <React.Fragment>
            <section className="card-components">
                <div className="container-fluid p-0">
                    <div className="row">
                        <Machine machines={machines} />
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default HorizontalListContainer