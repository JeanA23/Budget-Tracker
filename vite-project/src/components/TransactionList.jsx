import TransactionItem from "./TransactionItem";

function TransactionList({ transactions, onDelete }) {
  if (!transactions || transactions.length === 0) {
    return <p>Aucune transaction</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Titre</th>
          <th>Montant</th>
          <th>Type</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            transaction={transaction}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TransactionList;
