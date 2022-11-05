import React, { useEffect } from "react"
import PageTitle from "app/components/common/PageTitle"
import { useSelector, useDispatch } from "react-redux"
import Machine from "./components/Machine"
import { fetchVendorMachines } from "features/VendorMachineSlice";

const action = {
    hasAction: false,
    hasBack: true
}


const VendorMachineList = () => {

    const dispatch = useDispatch()

    const { data: machines } = useSelector((state) => state.vendorMachine)

    useEffect(() => {
        dispatch(fetchVendorMachines())
    }, [dispatch])

    console.log(machines)

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