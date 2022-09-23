import React from "react"
import PageTitle from "app/components/common/PageTitle"
import { useSelector } from "react-redux"
import Machine from "./components/Machine"

const action = {
    hasAction: false,
    hasBack: true
}


const VendorMachineList = () => {

    const machineListState = useSelector((state) => {
        return state['machine']
    })

    const { machines } = machineListState

    return (
        <React.Fragment>
            <PageTitle title='Machine List' action={action} />
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

export default VendorMachineList