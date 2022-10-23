import React, { useEffect, useState } from "react"
import PageTitle from "app/components/common/PageTitle"
import { useDispatch, useSelector } from "react-redux"
import { fetchVendor } from "features/VendorSlice";
import { Loading, Empty, STATUS, getImageURL } from "services";
import Edit from "./actions/Edit";
import Delete from "./actions/Delete";
import AppModal from "app/components/utils/AppModal";


const action = {
    hasAction: true,
    actionTitle: 'Add Vendor',
    actionLink: '/vendor/create'
}

const VendorList = () => {

    const dispatch = useDispatch()

    const { data: vendors, status } = useSelector((state) => state.vendor)

    useEffect(() => {
        dispatch(fetchVendor())
    }, [dispatch])

    const [modal, setModal] = useState(false)

    const [modalInfo, setModalInfo] = useState({})

    const showModal = () => setModal(modal => !modal)

    const hideModal = () => setModal(false)

    const triggerEditModal = (vendorInfo) => {
        setModalInfo({
            title: 'Edit Vendor',
            body: Edit,
            data: vendorInfo
        })

        showModal()
    }

    const triggerDeleteModal = (vendorInfo) => {
        setModalInfo({
            title: 'Delete vendor',
            body: Delete,
            data: vendorInfo
        })

        showModal()
    }

    const RenderItems = (props) => {
        const { vendor } = props
        const image = getImageURL('vendor').vendor + vendor.image
        const info = {
            id: vendor.id,
            name: vendor.name,
            image: vendor.image,
            email: vendor.email,
            business_name: vendor.business_name,
            contact: vendor.contact,
            additional_contact: vendor.additional_contact,
            nid: vendor.nid,
            trade_licence_no: vendor.trade_licence_no,
            is_active: vendor.is_active
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
                        <img src={image} className="image-in-list me-3" alt={vendor.name} />
                    </td>
                    <td>
                        <p className="text-bold">{vendor.name}</p>
                    </td>
                    <td>
                        <div>
                            <p className="text-black-50">{vendor.business_name}</p>
                        </div>
                    </td>
                    <td>
                        <div>
                            <p className="text-black-50">{vendor.email}</p>
                        </div>
                    </td>
                    <td>
                        <div>
                            <p>{vendor.contact}</p>
                            <p className="text-black-50">{vendor.additional_contact}</p>
                        </div>
                    </td>
                    <td>
                        {
                            vendor.is_active ? <span className="status-btn active-btn">Active</span> : <span class="status-btn close-btn">Not Active</span>
                        }

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

    const RenderVendors = () => (
        <React.Fragment>
            <h6 className="mb-10">Total Vendors : {vendors.length}</h6>
            <div className="table-wrapper table-responsive mt-4">
                <table className="table">
                    <thead>
                        <tr>
                            {/* <th><h6></h6></th> */}
                            <th></th>
                            <th><h6>Name</h6></th>
                            <th><h6>Company</h6></th>
                            <th><h6>Email</h6></th>
                            <th><h6>Contact</h6></th>
                            <th><h6>Status</h6></th>
                            <th><h6>Action</h6></th>
                        </tr>
                    </thead>
                    <tbody>
                        {vendors.length > 0 &&
                            vendors.map((vendor) => (
                                <RenderItems key={vendor.id} vendor={vendor} />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    )

    const RenderVendorList = ({ vendors }) => (
        <React.Fragment>
            <div className="tables-wrapper">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card-style mb-30">
                            {
                                status === STATUS.LOADING && <Loading />
                            }
                            {
                                vendors.length > 0 ? RenderVendors(vendors) : status !== STATUS.LOADING && <Empty props='No vendor found' />
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
            <PageTitle title='Vendor List' action={action} />
            <RenderVendorList vendors={vendors} />
        </React.Fragment >
    )

}

export default VendorList