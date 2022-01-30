import React from 'react';
import './App.css';
import AddTransaction from './component/AddTransaction';
import Balanace from './component/Balanace';
import Header from './component/Header';
import IncomeExpenses from './component/IncomeExpenses';
import TransactionList from './component/TransactionList';
import { GlobalProvider } from './Context/GlobalState';

function App() {
  return (
     <GlobalProvider>
      <Header />
      <div className="container"> 
        <Balanace /> 
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
