import React,{useContext} from 'react';
import Transaction from './Transaction';
import {GlobalContext} from '../Context/GlobalState';
const TransactionList = () => {

    // const context =  useContext(GlobalContext);
    const {transactions} =  useContext(GlobalContext);
    // console.log(context);
    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction => ( <Transaction key = {transaction.id} transaction ={transaction}></Transaction> ))}
            </ul>
        </>
    )
}
export default TransactionList;
