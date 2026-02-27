import { useState } from "react";

function TransactionForm({ onAdd }) {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [type, setType] = useState("revenu");
    const [date, setDate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: Date.now(),
            title,
            amount: parseFloat(amount),
            type,
            date,
        };

        onAdd(newTransaction);

        setTitle("");
        setAmount("");
        setType("revenu");
        setDate("");
    };

    return (
        <form onSubmit={handleSubmit} className="transaction-form">
            <input
                type="text"
                placeholder="Titre"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />

            <input
                type="number"
                placeholder="Montant"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
            />

            <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="revenu">Revenu</option>
                <option value="dépense">Dépense</option>
            </select>

            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
            />

            <button type="submit">Ajouter</button>
        </form>
    );
}

export default TransactionForm;