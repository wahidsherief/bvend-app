import React from "react"
import PageTitle from "app/components/common/PageTitle"
import { useSelector } from "react-redux"
import HorizontalListContainer from "app/components/common/HorizontalListContainer";

const action = {
    hasAction: false
}


const VendorMachineList = () => {

    const machineListState = useSelector((state) => {
        return state['machine']
    })

    const { machines } = machineListState

    const item = {
        itemName: 'machines',
        items: machines
    }

    return (
        <React.Fragment>
            <PageTitle title='Machine List' action={action} />
            <HorizontalListContainer item={item} />
        </React.Fragment>
    )
}

export default VendorMachineList