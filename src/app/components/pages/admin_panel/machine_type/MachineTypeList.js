import React, { useEffect } from "react"
import PageTitle from "app/components/common/PageTitle"
import { useSelector, useDispatch } from "react-redux"
import { fetch as fetchMachineType } from "features/MachineTypeSlice";
import PageContent from "app/components/common/PageContent";
import MachineTypeTableContent from "./MachineTypeTableContent";


const action = {
    hasAction: true,
    actionTitle: 'Add Machine Type',
    actionLink: '/machine/type/create'
}

const MachineTypeList = () => {

    const dispatch = useDispatch()

    const { data: types, status } = useSelector((state) => state.machineType)

    useEffect(() => {
        dispatch(fetchMachineType())
    }, [dispatch])

    const MachineTypeTable = ({ items, status }) => {
        return (
            <div className="table-wrapper table-responsive mt-4">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items?.length > 0 &&
                            items?.map((item) => (
                                <MachineTypeTableContent key={item.id} item={item} status={status} />
                            ))}
                    </tbody>
                </table>
            </div>
        );
    }

    return (
        <React.Fragment>
            <PageTitle title='Machine Type List' action={action} />
            <PageContent items={types} status={status} component={MachineTypeTable} />
        </React.Fragment>
    )
}

export default MachineTypeList;

