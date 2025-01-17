import React from "react"
import PageTitle from "app/components/common/PageTitle"
import Create from "./actions/Create"

const action = {
    hasAction: false,
    hasBack: true
}

const MachineTypeCreate = () => {
    return (
        <React.Fragment>
            <PageTitle title='Create Machine Type' action={action} />
            <div className="tables-wrapper">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card-style mb-30">
                            <Create />
                        </div>
                    </div>
                </div>
            </div >
        </React.Fragment >
    )
}

export default MachineTypeCreate