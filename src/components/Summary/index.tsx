import { useTransactions } from "../../hooks/useTransactions";

import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

import { Container } from "./styles";
import { AmountCard } from "./AmountCard";

export const Summary = () => {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <AmountCard
        amount={summary.deposits}
        amountDescription="entradas"
        imgPath={incomeImg}
      />

      <AmountCard
        amount={summary.withdraws}
        amountDescription="saídas"
        imgPath={outcomeImg}
      />

      <AmountCard
        amount={summary.total}
        amountDescription="total"
        imgPath={totalImg}
        greenCard
      />
    </Container>
  );
};
