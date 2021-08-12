import { formatAmount } from "../../utils/formatAmount";
import { formatDate } from "../../utils/formatDate";

import { useTransactions } from "../../hooks/useTransactions";

import { Container } from "./styles";

export const TransactionsTable = () => {
  const { transactions } = useTransactions();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(
            ({ id, title, type, amount, category, createdAt }) => (
              <tr key={id}>
                <td>{title}</td>
                <td className={type}>{formatAmount(amount)}</td>
                <td>{category}</td>
                <td>{formatDate(createdAt)}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </Container>
  );
};
