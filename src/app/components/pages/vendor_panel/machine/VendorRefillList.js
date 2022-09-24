import React from "react"
import PageTitle from "app/components/common/PageTitle"
import { useSelector } from "react-redux"
import Refill from "./components/Refill"
import { useParams } from "react-router-dom"

const action = {
    hasAction: false,
    hasBack: true
}


const VendorRefillList = () => {

    const { machineID } = useParams()

    const refillListState = useSelector((state) => {
        return state['refill']
    })

    const refills = refillListState.refills.filter((refill => refill.machine_id == machineID))

    const trays = () => {
        const chunkSize = 6
        const trayRows = []
        for (let i = 0; i < refills.length; i += chunkSize) {
            const trays = refills.slice(i, i + chunkSize);
            trayRows.push(trays)
        }

        return (
            trayRows.map((refillItems, i) => (
                <div key={i}>
                    <h3 className={i === 0 ? 'mb-4 ms-0 me-0' : 'mt-4 mb-4 ms-0 me-0'}>Row {i + 1}</h3>
                    <div className="row flex-row flex-nowrap horizontal-scroll">
                        {
                            refillItems.map((refillItem, col) => (
                                <Refill key={col} colNumber={col + 1} refill={refillItem} />
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
                    {
                        trays()
                    }
                </div>
            </section>
        </React.Fragment>
    )
}

export default VendorRefillList