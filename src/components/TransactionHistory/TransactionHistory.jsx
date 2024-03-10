import PropTypes from "prop-types";
import Transaction from "../Transaction/Transaction";
import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.container}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      {items.map(({ id, type, amount, currency }) => {
        return (
          <tbody key={id}>
            <Transaction type={type} amount={amount} currency={currency} />
          </tbody>
        );
      })}
    </table>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
};
