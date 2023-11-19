import React, { useState } from 'react';
import { ButtonColumn, TextColumn } from '../../../utils/columns';
import Edit from "./actions/Edit";
import Delete from "./actions/Delete";
import Assign from './actions/Assign';
import AppModal from "app/components/utils/AppModal";

const MachineTableContent = ({ item }) => {
    const [modalInfo, setModalInfo] = useState(null);

    const handleEdit = () => {
        setModalInfo({
            title: 'Edit machine',
            body: Edit,
            data: item
        });
    };

    const handleDelete = () => {
        setModalInfo({
            title: 'Delete machine',
            body: Delete,
            data: item
        });
    };


    const handleAssign = () => {
        setModalInfo({
            title: 'Assign machine',
            body: Assign,
            data: item
        });
    };

    const closeModal = () => {
        setModalInfo(null);
    };


    const machineCode = (data) => ({ text: data, style: 'text-bold' })
    const machineType = (data) => ({ text: data, style: 'text-capitalize' })
    const noOfRows = (data) => ({ text: data })
    const noOfColumns = (data) => ({ text: data })
    const noOfLockPerColumn = (data) => ({ text: data })
    const vendorName = (data) => ({ text: data, style: 'text-black-50' })

    const editButton = info => ({
        name: 'edit',
        action: () => handleEdit(),
        style: 'text-dark',
        icon: {
            style: 'lni lni-pencil-alt'
        }
    });

    const deleteButton = info => ({
        name: 'delete',
        action: () => handleDelete(),
        style: 'ms-3 text-dark',
        icon: {
            style: 'lni lni-trash-can'
        }
    });

    const assignButton = info => ({
        name: 'assign',
        action: () => handleAssign(),
        style: 'text-dark',
        icon: {
            style: 'lni lni-plus'
        }
    });


    return (
        <React.Fragment>
            <tr>
                <td>
                    <TextColumn info={machineCode(item.machine_code)} />
                </td>
                <td>
                    <TextColumn info={machineType(item.machine_type?.type)} />
                </td>
                <td>
                    <div class="col-item-inline">
                        <span>Rows: </span>
                        <TextColumn info={noOfRows(item.no_of_columns)} />
                    </div>
                    <div class="col-item-inline">
                        <span>Coulmns: </span>
                        <TextColumn info={noOfColumns(item.no_of_columns)} />
                    </div>
                    <div class="col-item-inline">
                        <span>Locks: </span>
                        <TextColumn info={noOfLockPerColumn(item.no_of_columns)} />
                    </div>
                </td>
                <td>
                    <TextColumn info={vendorName(item?.vendor.name)} />
                </td>
                <td>
                    <td>
                        {
                            item.is_active ? <span className="status-btn active-btn">Active</span> : <span class="status-btn close-btn">Not Active</span>
                        }

                    </td>
                </td>
                <td>
                    <div className="action">
                        <ButtonColumn info={editButton(item)} />
                        <ButtonColumn info={deleteButton(item)} />
                    </div>
                </td>
                <td>
                    <div className="action">
                        <ButtonColumn info={assignButton(item)} />
                    </div>
                </td>
            </tr>
            {modalInfo && (
                <AppModal modalInfo={modalInfo} modal={true} hideModal={closeModal} />
            )}
        </React.Fragment>
    );
};

export default MachineTableContent;
