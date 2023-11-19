import React, { useEffect, useState } from "react"
import PageTitle from "app/components/common/PageTitle"
import { useSelector, useDispatch } from "react-redux"
import { fetch as fetchMachine } from "features/MachineSlice";
import PageContent from "app/components/common/PageContent";
import MachineTableContent from "./MachineTableContent";


const action = {
    hasAction: true,
    actionTitle: 'Add Machine',
    actionLink: '/machine/create'
}

const MachineList = () => {

    const dispatch = useDispatch()

    const { data: machines, status } = useSelector((state) => state.machine)

    console.log('machines ', machines)

    useEffect(() => {
        dispatch(fetchMachine())
    }, [dispatch])

    const MachineTable = ({ items, status }) => {
        return (
            <div className="table-wrapper table-responsive mt-4">
                <table className="table">
                    <thead>
                        <tr>
                            <th><h6>Code</h6></th>
                            <th><h6>Type</h6></th>
                            <th><h6>Info</h6></th>
                            <th><h6>Vendor</h6></th>
                            <th><h6>Status</h6></th>
                            <th><h6>Actions</h6></th>
                            <th><h6>Assign</h6></th>
                        </tr>
                    </thead>
                    <tbody>
                        {items?.length > 0 &&
                            items?.map((item) => (
                                <MachineTableContent key={item.id} item={item} status={status} />
                            ))}
                    </tbody>
                </table>
            </div>
        );
    }

    return (
        <React.Fragment>
            <PageTitle title='Machine List' action={action} />
            <PageContent items={machines} status={status} component={MachineTable} />
        </React.Fragment>
    )
}

export default MachineList;

