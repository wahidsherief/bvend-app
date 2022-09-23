import React, { useEffect } from "react"
import PageTitle from "app/components/common/PageTitle"
import { useSelector, useDispatch } from "react-redux"
import Refill from "./components/Refill"
import { useParams } from "react-router-dom"
import { getRefillData } from "features/RefillSlice"

const action = {
    hasAction: false,
    hasBack: true
}


const VendorRefillList = () => {

    const refillListState = useSelector((state) => {
        return state['refill']
    })

    console.log(refillListState)

    const { machineID } = useParams()

    const refills = refillListState.refills.filter((refill => refill.machine_id !== machineID))


    console.log(refills)


    return (
        <React.Fragment>
            <PageTitle title='Refill' action={action} />
            <section className="card-components">
                <div className="container-fluid p-0">
                    <div className="row">
                        {
                            refills.map((refill) => (
                                <Refill refills={refills} />
                            ))
                        }

                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default VendorRefillList