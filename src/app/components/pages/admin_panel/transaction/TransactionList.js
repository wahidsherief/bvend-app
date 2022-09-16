import React from "react"
import ListContainer from "app/components/common/ListContainer";
import PageTitle from "app/components/common/PageTitle"
import { useSelector } from "react-redux"
import Detail from "./actions/Detail";


const action = {
    hasAction: false, // we may use search bar here to filter transactions
}


const TransactionList = () => {

    const transactionListState = useSelector((state) => {
        return state['transaction']
    })

    const { transactions } = transactionListState

    const item = {
        itemName: 'transactions',
        items: transactions,
        hasDetail: true,
        detail: Detail
    }

    return (
        <React.Fragment>
            <PageTitle title='Transaction List' action={action} />
            <ListContainer item={item} />
        </React.Fragment>
    )
}

export default TransactionList