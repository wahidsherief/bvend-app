import React, { useEffect, useState } from "react"
import PageTitle from "app/components/common/PageTitle"
import { useSelector, useDispatch } from "react-redux"
import { fetchProduct } from "features/ProductSlice";
import { fetchCategory } from "features/ProductCategorySlice";
import { Loading, Empty } from "services"
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

    const { data: categories } = useSelector((state) => state.productCategory)

    useEffect(() => {
        const fetchData = async () => {
            try {
                await Promise(dispatch(fetchProduct()))
                dispatch(fetchCategory())
            } catch (error) {
                // handle or ignore errors?
            }
        };

        fetchData()
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
        const info = {
            id: product.id,
            name: product.name,
            categories: categories,
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
                        <img src="assets/images/lead/lead-1.png" alt="" />
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
                    <td>
                        <span className="status-btn active-btn">Active</span>
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

    const RenderEachProduct = ({ products }) => products.map((product) => (<RenderItems key={product.id} product={product} />))

    const RenderProducts = (products) => (
        <React.Fragment>
            <div className="tables-wrapper">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card-style mb-30">
                            <h6 className="mb-10">Total Products : {products.length}</h6>
                            <div className="table-wrapper table-responsive mt-4">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            {/* <th><h6></h6></th> */}
                                            <th><h6>Product</h6></th>
                                            <th><h6>Name</h6></th>
                                            <th><h6>Category</h6></th>
                                            <th><h6>Status</h6></th>
                                            <th><h6>Action</h6></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <RenderEachProduct products={products} />
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        </React.Fragment >
    )

    // need to prevent from server error cases thus page break

    const RenderProductList = ({ products }) => Array.isArray(products) && products.length > 0 ? RenderProducts(products) : <Empty props='No product' />

    return (
        <React.Fragment>
            <AppModal modalInfo={modalInfo} modal={modal} hideModal={hideModal} />
            <PageTitle title='Product List' action={action} />
            <Loading status={status} />
            <RenderProductList products={products} />
        </React.Fragment >
    )
}

export default ProductList