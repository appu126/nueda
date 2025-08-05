
export default function Transactions() {
    const data = [
      { date: '2025-08-05', description: 'Grocery', amount: '-₹1,000' },
      { date: '2025-08-04', description: 'Salary', amount: '+₹50,000' },
      { date: '2025-08-01', description: 'Netflix', amount: '-₹500' },
    ];
  
    return (
      <div className="transactions">
        <h2>Transaction History</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry, i) => (
              <tr key={i}>
                <td>{entry.date}</td>
                <td>{entry.description}</td>
                <td>{entry.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  