import React from "react"
import PageTitle from "app/components/common/PageTitle"
import Create from "./actions/RefillForm"

const action = {
    hasAction: false
}

const MachineCreate = () => {

    return (
        <React.Fragment>
            <PageTitle title='Machine Create' action={action} />
            <div className="tables-wrapper">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card-style mb-30">
                            <Create />
                        </div>
                    </div>
                </div>
            </div >
        </React.Fragment>
    )
}

export default MachineCreate