import { useEffect, useState } from "react";
import { simulateAsyncApiCall } from "./api/dataService";
import Container from "@mui/material/Container";
import AllTransactions from "./components/AllTransactions";
import MonthlyAwardedPoints from "./components/MonthlyAwardedPoints";
import TotallyAwardedPoints from "./components/TotallyAwardedPoints";

const calcPoint = (amount) => {
  let points = 0;
  let over100 = amount - 100;

  if (over100 > 0) {
    points += (over100 * 2);
  }
  if (amount > 50) {
    points += 50;
  }
  return points;
}

function App() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const response = await simulateAsyncApiCall({
      transactionCount: 100,
      customerCount: 5,
    });

    const transactionsWithPoints = response.data.transactions.map(transaction => {
      return { ...transaction, points: calcPoint(transaction.amount) }
    })
    setTransactions(transactionsWithPoints);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Container fixed>
        <AllTransactions transactions={transactions} loading={loading} />
        <MonthlyAwardedPoints transactions={transactions} loading={loading} />
        <TotallyAwardedPoints transactions={transactions} loading={loading} />
      </Container>
    </div>
  );
}

export default App;
