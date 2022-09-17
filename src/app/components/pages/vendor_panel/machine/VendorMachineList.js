import React from "react"
import PageTitle from "app/components/common/PageTitle"
import { useSelector } from "react-redux"
import Edit from "./actions/Edit";
import Remove from "./actions/Remove";
import HorizontalListContainer from "app/components/common/HorizontalListContainer";

const action = {
    hasAction: true,
    actionTitle: 'Add Machine',
    actionLink: '/machine/create'
}


const VendorMachineList = () => {

    const machineListState = useSelector((state) => {
        return state['machine']
    })

    const { machines } = machineListState

    const item = {
        itemName: 'machines',
        items: machines,
        hasEdit: true,
        edit: Edit,
        hasRemove: true,
        remove: Remove
    }

    return (
        <React.Fragment>
            <PageTitle title='Machine List' action={action} />
            <HorizontalListContainer />
        </React.Fragment>
    )
}

export default VendorMachineList