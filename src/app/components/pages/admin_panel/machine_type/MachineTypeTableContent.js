import React, { useState } from 'react';
import { ButtonColumn, TextColumn } from '../../../utils/columns';
import Delete from "./actions/Delete";
import AppModal from "app/components/utils/AppModal";

const MachineTypeTableContent = ({ item }) => {
    const [modalInfo, setModalInfo] = useState(null);

    const handleDelete = () => {
        setModalInfo({
            title: 'Delete machine',
            body: Delete,
            data: item
        });
    };

    const closeModal = () => {
        setModalInfo(null);
    };


    const text = (data, style) => ({ text: data, style });

    const deleteButton = () => ({
        name: 'delete',
        action: () => handleDelete(),
        style: 'ms-3 text-dark',
        icon: {
            style: 'lni lni-trash-can'
        }
    });

    return (
        <React.Fragment>
            <tr>
                <td>
                    <div>
                        <TextColumn info={text(item.type, 'text-normal')} />
                    </div>
                </td>
                <td>
                    <div className="action">
                        <ButtonColumn info={deleteButton(item)} />
                    </div>
                </td>
            </tr>
            {modalInfo && (
                <AppModal modalInfo={modalInfo} modal={true} hideModal={closeModal} />
            )}
        </React.Fragment>
    );
};

export default MachineTypeTableContent;
