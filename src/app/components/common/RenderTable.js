import { Loading, STATUS } from "services/CommonService";


export const RenderTable = ({ items, status, header, Column }) => (
    <div className="tables-wrapper">
        <div className="row">
            <div className="col-lg-12">
                <div className="card-style mb-30">
                    {status === STATUS.LOADING && <Loading />}
                    {items?.length > 0 ? (
                        <div className="table-wrapper table-responsive mt-4">
                            <table className="table">
                                {header}
                                <tbody>
                                    {items.map((item) => (
                                        <Column
                                            key={item.id}
                                            item={item}
                                        />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : status !== STATUS.LOADING && <Empty props='No item found' />}
                </div>
            </div>
        </div>
    </div>
);
