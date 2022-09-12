import React from "react"
import PageTitle from "../common/PageTitle"
import CreateForm from "./CreateForm";

const action = {
    hasAction: false
}

const ProductCreate = () => {

    return (
        <React.Fragment>
            <PageTitle title='Product Create' action={action} />
            <div className="tables-wrapper">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card-style mb-30">
                            <h4 className="mb-25">Add Product</h4>
                            <CreateForm />
                        </div>
                    </div>
                </div>
            </div >
        </React.Fragment >
    )
}

export default ProductCreate