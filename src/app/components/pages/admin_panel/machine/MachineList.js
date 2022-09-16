import React from "react"
import ListContainer from "app/components/common/ListContainer";
import PageTitle from "app/components/common/PageTitle"
import { useSelector } from "react-redux"
import Edit from "./actions/Edit";
import Remove from "./actions/Remove";

const action = {
    hasAction: true,
    actionTitle: 'Add Machine',
    actionLink: '/machine/create'
}


const MachineList = () => {

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
            <ListContainer item={item} />
        </React.Fragment>
    )
}

export default MachineList