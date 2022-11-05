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

    console.log(refills)

    const { machineID } = useParams()

    // const refillListState = useSelector((state) => {
    //     return state['refill']
    // })

    // const refills = data.refills.filter((refill => refill.machine_id == machineID))

    const trays = () => {
        const no_of_trays = 6
        const trayRows = []
        for (let i = 0; i < refills.length; i += no_of_trays) {
            const trays = refills.slice(i, i + no_of_trays);
            trayRows.push(trays)
        }

        return (
            trayRows.map((refillItems, i) => (
                <div key={i}>
                    <h3 className={i === 0 ? 'mb-4 ms-0 me-0' : 'mt-4 mb-4 ms-0 me-0'}>Row {i + 1}</h3>
                    <div className="row flex-row flex-nowrap horizontal-scroll">
                        {
                            refillItems.map((refillItem, col) => (
                                <Refill key={col} rowNumber={i + 1} colNumber={col + 1} refill={refillItem} />
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

export default RefillList