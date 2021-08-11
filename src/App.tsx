import { useState } from "react";

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";

import Modal from "react-modal";
import { NewTransactionModal } from "./components/NewTransactionModal";

import { GlobalStyles } from "./styles/global";

import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement("#root");

export const App = () => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyles />
    </TransactionsProvider>
  );
};
