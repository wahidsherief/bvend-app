import React, { useEffect, useState } from "react"
import PageTitle from "app/components/common/PageTitle"
import { useSelector, useDispatch } from "react-redux"
import { fetchProduct } from "features/ProductSlice";
import { Loading, Empty, STATUS, getImageURL } from "services";
import Edit from "./actions/Edit";
import Delete from "./actions/Delete";
import AppModal from "app/components/utils/AppModal";

const action = {
    hasAction: true,
    actionTitle: 'Add Product',
    actionLink: '/product/create'
}

const ProductList = () => {

    const dispatch = useDispatch()

    const { data: products, status } = useSelector((state) => state.product)

    useEffect(() => {
        dispatch(fetchProduct())
    }, [dispatch])

    const [modal, setModal] = useState(false)

    const [modalInfo, setModalInfo] = useState({})

    const showModal = () => setModal(modal => !modal)

    const hideModal = () => setModal(false)

    const triggerEditModal = (productInfo) => {
        setModalInfo({
            title: 'Edit Product',
            body: Edit,
            data: productInfo
        })

        showModal()
    }

    const triggerDeleteModal = (productInfo) => {
        setModalInfo({
            title: 'Delete Product',
            body: Delete,
            data: productInfo
        })

        showModal()
    }

    const RenderItems = ({ product }) => {
        const image = getImageURL('product') + product.image
        const info = {
            id: product.id,
            name: product.name,
            image: product.image,
            category: {
                id: product.category && product.category.id,
                name: product.category && product.category.name
            }
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
                        <img src={image} className="image-in-list me-3" alt={product.name} />
                    </td>
                    <td>
                        <p className="text-bold">{product.name}</p>
                    </td>
                    <td>
                        <div>
                            <p>{product.category.name}</p>
                            <p className="text-black-50">{product.category.brand}</p>
                        </div>
                    </td>
                    {/* <td>
                        {
                            product.is_active ? <span className="status-btn active-btn">Active</span> : <span class="status-btn close-btn">Not Active</span>
                        }
                    </td> */}
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


    const RenderProducts = () => (
        <React.Fragment>
            <h6 className="mb-10">Total Products : {products.length}</h6>
            <div className="table-wrapper table-responsive mt-4">
                <table className="table">
                    <thead>
                        <tr>
                            {/* <th><h6></h6></th> */}
                            <th><h6>Product</h6></th>
                            <th><h6>Name</h6></th>
                            <th><h6>Category</h6></th>
                            {/* <th><h6>Status</h6></th> */}
                            <th><h6>Action</h6></th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.length > 0 &&
                            products.map((product) => (
                                <RenderItems key={product.id} product={product} />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    )

    const RenderProductList = ({ products }) => (
        <React.Fragment>
            <div className="tables-wrapper">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card-style mb-30">
                            {
                                status === STATUS.LOADING && <Loading />
                            }
                            {
                                products.length > 0 ? RenderProducts(products) : status !== STATUS.LOADING && <Empty props='No product found' />
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
            <PageTitle title='Product List' action={action} />
            <RenderProductList products={products} />
        </React.Fragment >
    )
}

export default ProductList