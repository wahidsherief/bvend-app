import React from "react"
import ListContainer from "app/components/common/ListContainer";
import PageTitle from "app/components/common/PageTitle"
import { useSelector } from "react-redux"
import Edit from "./actions/Edit";
import Remove from "./actions/Remove";

const action = {
    hasAction: true,
    actionTitle: 'Add Vendor',
    actionLink: '/vendor/create'
}


const VendorList = () => {

    const vendorListState = useSelector((state) => {
        return state['vendor']
    })

    const { vendors } = vendorListState

    const item = {
        itemName: 'vendors',
        items: vendors,
        hasEdit: true,
        edit: Edit,
        hasRemove: true,
        remove: Remove
    }

    return (
        <React.Fragment>
            <PageTitle title='Vendor List' action={action} />
            <ListContainer item={item} />
        </React.Fragment >
    )
}

export default VendorList