import React from "react"
import ListContainer from "app/components/common/ListContainer";
import PageTitle from "app/components/common/PageTitle"
import { useSelector } from "react-redux"
import Detail from "./actions/Detail"

const action = {
    hasAction: false
}

const VendorRequest = () => {

    const vendorRequestState = useSelector((state) => {
        return state['vendorRequest']
    })

    const { vendor_requests } = vendorRequestState

    const item = {
        itemName: 'vendor requests', // should be in lowercase
        items: vendor_requests, // should be plural
        hasDetail: true,
        detail: Detail
    }

    return (
        <React.Fragment>
            <PageTitle title='Vendor Request List' action={action} />
            <ListContainer item={item} />
        </React.Fragment >
    )
}

export default VendorRequest