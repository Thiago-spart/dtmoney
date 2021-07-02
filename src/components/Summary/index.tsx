import { useContext } from "react";
import incomeImg from "../../../assets/income.svg";
import outcomeImg from "../../../assets/outcome.svg";
import totalImg from "../../../assets/total.svg";
import { TransactionsContext } from "../../TransactionsContext";

import { Container } from "./styles";

export const Summary = () => {
  const transactions = useContext(TransactionsContext);

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="entradas" />
          <strong>R$1.000</strong>
        </header>
      </div>

      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeImg} alt="saidas" />
          <strong>- R$500</strong>
        </header>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="total" />
          <strong>R$500</strong>
        </header>
      </div>
    </Container>
  );
};
