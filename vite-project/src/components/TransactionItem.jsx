function TransactionItem({ transaction, onDelete }) {
  return (
    <tr>
      <td>{transaction.title}</td>
      <td>{transaction.amount} €</td>
      <td>{transaction.type}</td>
      <td>{transaction.date}</td>
      <td>
        <button onClick={() => onDelete(transaction.id)}>
          Supprimer
        </button>
      </td>
    </tr>
  );
}

export default TransactionItem;
