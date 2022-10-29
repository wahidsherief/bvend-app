import React, { useEffect, useState } from "react"
import PageTitle from "app/components/common/PageTitle"
import { useDispatch, useSelector } from "react-redux"
import { fetchMachine } from "features/MachineSlice";
import { Loading, Empty, STATUS, getImageURL } from "services";
import Edit from "./actions/Edit";
import Delete from "./actions/Delete";
import Assign from "./actions/Assign";
import AppModal from "app/components/utils/AppModal";


const action = {
    hasAction: true,
    actionTitle: 'Add machine',
    actionLink: '/machine/create'
}

const MachineList = () => {

    const dispatch = useDispatch()

    const { data: machines, status } = useSelector((state) => state.machine)

    useEffect(() => {
        dispatch(fetchMachine())
    }, [dispatch])

    const [modal, setModal] = useState(false)

    const [modalInfo, setModalInfo] = useState({})

    const showModal = () => setModal(modal => !modal)

    const hideModal = () => setModal(false)

    const triggerAssignModal = (machineInfo) => {
        setModalInfo({
            title: 'Assign machine',
            body: Assign,
            data: machineInfo
        })

        showModal()
    }

    const triggerEditModal = (machineInfo) => {
        setModalInfo({
            title: 'Edit machine',
            body: Edit,
            data: machineInfo
        })

        showModal()
    }

    const triggerDeleteModal = (machineInfo) => {
        setModalInfo({
            title: 'Delete machine',
            body: Delete,
            data: machineInfo
        })

        showModal()
    }

    const RenderItems = ({ machine }) => {
        const info = { machine }
        return (
            <>
                <tr>
                    {/* <td>
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="checkbox-1"
                        />
                    </td> */}
                    <td>
                        <p className="text-bold">{machine.machine_code}</p>
                    </td>
                    <td>
                        <div>
                            <p className="text-capitalize">{machine.machine_type}</p>
                        </div>
                    </td>
                    <td>
                        <div>
                            <p>Rows: {machine.no_of_rows}</p>
                            <p>Trays: {machine.no_of_trays}</p>
                            <p>Locks: {machine.locks_per_tray}</p>
                        </div>
                    </td>
                    <td>
                        <div>
                            <p className="text-black-50">{machine.vendor_name}</p>
                        </div>
                    </td>
                    <td>
                        {
                            machine.is_active ? <span className="status-btn active-btn">Active</span> : <span class="status-btn close-btn">Not Active</span>
                        }

                    </td>
                    <td>
                        <div className="action">
                            <button onClick={() => triggerEditModal(info)} className="text-dark">
                                <i className="lni lni-more-alt"></i>
                            </button>
                            <button onClick={() => triggerDeleteModal(info)} className="ms-3 text-dark">
                                <i className="lni lni-trash-can"></i>
                            </button>
                        </div>
                    </td>
                    <td>
                        <div className="action">
                            <button onClick={() => triggerAssignModal(info)} className="text-dark">
                                <i className="lni lni-plus"></i>
                            </button>
                        </div>
                    </td>
                </tr>
            </>
        )
    }

    const Rendermachines = () => (
        <React.Fragment>
            <h6 className="mb-10">Total Machines : {machines.length}</h6>
            <div className="table-wrapper table-responsive mt-4">
                <table className="table">
                    <thead>
                        <tr>
                            {/* <th><h6></h6></th> */}
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
                        {machines.length > 0 &&
                            machines.map((machine) => (
                                <RenderItems key={machine.id} machine={machine} />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    )

    const RendermachineList = ({ machines }) => (
        <React.Fragment>
            <div className="tables-wrapper">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card-style mb-30">
                            {
                                status === STATUS.LOADING && <Loading />
                            }
                            {
                                machines.length > 0 ? Rendermachines(machines) : status !== STATUS.LOADING && <Empty props='No machine found' />
                            }
                        </div>
                    </div>
                </div >
            </div>
        </React.Fragment >
    )

    return (
        <React.Fragment>
            <AppModal modalInfo={modalInfo} modal={modal} hideModal={hideModal} />
            <PageTitle title='Machine List' action={action} />
            <RendermachineList machines={machines} />
        </React.Fragment >
    )

}

export default MachineList