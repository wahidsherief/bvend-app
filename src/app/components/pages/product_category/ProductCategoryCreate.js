import React from "react"
import PageTitle from "../../common/PageTitle"
import Create from "./actions/Create"

const action = {
    hasAction: false
}

const ProductCategoryCreate = () => {

    return (
        <React.Fragment>
            <PageTitle title='Product Category Create' action={action} />
            <div className="tables-wrapper">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card-style mb-30">
                            <h4 className="mb-25">Add Product Category</h4>
                            <Create />
                        </div>
                    </div>
                </div>
            </div >
        </React.Fragment >
    )
}

export default ProductCategoryCreate