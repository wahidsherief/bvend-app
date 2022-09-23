import React from "react"
import PageTitle from "app/components/common/PageTitle"
import { useSelector } from "react-redux"
import Refill from "./components/Refill"

const action = {
    hasAction: false,
    hasBack: true
}


const VendorRefillList = () => {

    const refillListState = useSelector((state) => {
        return state['refill']
    })

    const { refills } = refillListState

    return (
        <React.Fragment>
            <PageTitle title='Refill' action={action} />
            <section className="card-components">
                <div className="container-fluid p-0">
                    <div className="row">
                        <Refill refills={refills} />
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default VendorRefillList