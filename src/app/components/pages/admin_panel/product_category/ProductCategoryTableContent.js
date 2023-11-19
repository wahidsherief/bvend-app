import React, { useState } from 'react';
import { ButtonColumn, TextColumn } from '../../../utils/columns';
import Edit from "./actions/Edit";
import Delete from "./actions/Delete";
import AppModal from "app/components/utils/AppModal";

const ProductCategoryTableContent = ({ item }) => {
    const [modalInfo, setModalInfo] = useState(null);

    const handleEdit = () => {
        setModalInfo({
            title: 'Edit product',
            body: Edit,
            data: item
        });
    };

    const handleDelete = () => {
        setModalInfo({
            title: 'Delete product',
            body: Delete,
            data: item
        });
    };

    const closeModal = () => {
        setModalInfo(null);
    };


    const text = (data, style) => ({ text: data, style });

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

    return (
        <React.Fragment>
            <tr>
                <td>
                    <div>
                        <TextColumn info={text(item.name, 'text-normal')} />
                    </div>
                </td>
                <td>
                    <div className="action">
                        <ButtonColumn info={editButton(item)} />
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

export default ProductCategoryTableContent;
