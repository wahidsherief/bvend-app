import React, { useEffect } from "react"
import PageTitle from "app/components/common/PageTitle"
import { useDispatch, useSelector } from "react-redux"
import Refill from "./components/Refill"
import { useParams } from "react-router-dom"
import { fetchRefills } from "features/VendorMachineSlice"

const action = {
    hasAction: false,
    hasBack: true
}

const RefillList = () => {

    const dispatch = useDispatch()

    const { data: refills } = useSelector((state) => state.vendorMachine)

    useEffect(() => {
        dispatch(fetchRefills())
    }, [dispatch])

    const { machineID } = useParams()

    const Trays = () => {
        const no_of_trays_per_row = 6
        const trayRows = []
        for (let i = 0; i < refills.length; i += no_of_trays_per_row) {
            const trays = refills.slice(i, i + no_of_trays_per_row);
            trayRows.push(trays)
        }

        return (
            trayRows.map((refillItems, i) => (
                <div key={i}>
                    <h3 className={i === 0 ? 'mb-4 ms-0 me-0' : 'mt-4 mb-4 ms-0 me-0'}>Row {i + 1}</h3>
                    <div className="row flex-row flex-nowrap horizontal-scroll">
                        {
                            refillItems.map((refillItem, col) => (
                                <Refill key={col} machineID={machineID} rowNumber={i + 1} colNumber={col + 1} refill={refillItem} />
                            ))
                        }
                    </div>
                </div>
            ))
        )
    }

    return (
        <React.Fragment>
            <PageTitle title='Refill' action={action} />
            <section className="card-components">
                <div className="container-fluid p-0">
                    <Trays />
                </div>
            </section>
        </React.Fragment>
    )
}

export default RefillList