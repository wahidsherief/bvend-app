import React, { useEffect, useState } from "react"
import PageTitle from "app/components/common/PageTitle"
import { useDispatch, useSelector } from "react-redux"
import { fetchCategory } from "features/ProductCategorySlice";
import { Loading, Empty, Wrong } from "services";
import Edit from "./actions/Edit";
import Delete from "./actions/Delete";
import AppModal from "app/components/utils/AppModal";


const action = {
    hasAction: true,
    actionTitle: 'Add Product Category',
    actionLink: '/product/category/create'
}

const ProductCategoryList = () => {

    const dispatch = useDispatch()

    const { data: categories, status } = useSelector((state) => state.productCategory)

    useEffect(() => {
        dispatch(fetchCategory())
    }, [dispatch])



    const [modal, setModal] = useState(false)

    const [modalInfo, setModalInfo] = useState({})

    const showModal = () => setModal(modal => !modal)

    const hideModal = () => setModal(false)

    const triggerEditModal = (categoryInfo) => {
        setModalInfo({
            title: 'Edit Category',
            data: categoryInfo
        })

        showModal()
    }

    const triggerDeleteModal = (categoryInfo) => {
        setModalInfo({
            title: 'Delete Category',
            data: categoryInfo
        })

        showModal()
    }

    const RenderItems = (props) => {
        const { category } = props
        const info = {
            id: category.id,
            name: category.name,
            brand: category.brand
        }
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
                        <p className="text-bold">{category.name}</p>
                    </td>
                    <td>
                        <div>
                            <p className="text-black-50">{category.brand}</p>
                        </div>
                    </td>
                    <td>
                        <div className="action">
                            <button onClick={() => triggerEditModal(info)} className="text-dark">
                                <i className="lni lni-pencil-alt"></i>
                            </button>
                            <button onClick={() => triggerDeleteModal(info)} className="ms-3 text-dark">
                                <i className="lni lni-trash-can"></i>
                            </button>
                        </div>
                    </td>
                </tr>
            </>
        )
    }

    const RenderCategories = () => (
        <React.Fragment>
            <div className="tables-wrapper">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card-style mb-30">
                            <h6 className="mb-10">Total Categories : {categories.length}</h6>
                            <div className="table-wrapper table-responsive mt-4">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            {/* <th><h6></h6></th> */}
                                            <th><h6>Category</h6></th>
                                            <th><h6>Brand</h6></th>
                                            <th><h6>Action</h6></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {categories.length > 0 &&
                                            categories.map((category) => (
                                                <RenderItems key={category.id} category={category} />
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        </React.Fragment >
    )

    const RenderCategoryList = ({ categories }) => categories.length > 0 ? RenderCategories(categories) : <Empty props='No category found' />

    return (
        <React.Fragment>
            <AppModal modalInfo={modalInfo} modal={modal} hideModal={hideModal}>
                <Edit />
            </AppModal>
            <PageTitle title='Product Category List' action={action} />
            <Loading status={status} />
            <RenderCategoryList categories={categories} />
        </React.Fragment >
    )

}

export default ProductCategoryList