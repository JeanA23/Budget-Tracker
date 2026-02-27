import TransactionForm from "./components/TransactionForm";

function App() {
    const [transactions, setTransactions] = useState([]);

    const addTransaction = (transaction) => {
        setTransactions([...transactions, transaction]);
    };

    const deleteTransaction = (id) => {
        setTransactions(transactions.filter(t => t.id !== id));
    };

    return (
        <div>
            <h1>Budget Tracker</h1>

            <TransactionForm onAdd={addTransaction} />

            <TransactionList
                transactions={transactions}
                onDelete={deleteTransaction}
            />
        </div>
    );
}
