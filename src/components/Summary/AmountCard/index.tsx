import { formatAmount } from "../../../utils/formatAmount";
import { Card, CardBody, CardHead } from "./styles";

interface AmountProps {
  imgPath: string;
  amountDescription: string;
  amount: number;
  greenCard?: boolean;
}

export const AmountCard = ({
  imgPath,
  amountDescription,
  amount,
  greenCard,
}: AmountProps) => {
  console.log(greenCard);
  return (
    <Card greenCard={greenCard?.toString()}>
      <CardHead>
        <p>{amountDescription}</p>
        <img src={imgPath} alt={amountDescription} />
      </CardHead>
      <CardBody>{formatAmount(amount)}</CardBody>
    </Card>
  );
};
