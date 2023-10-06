import DataTable from "./DataTable";
import { getMonthyData } from "../utils";

const MonthlyRewardPoints = ({ transactions, loading }) => {
  const columns = [
    { field: "name", headerName: "Customer Name", width: 200 },
    { field: "email", headerName: "Customer Email", width: 230 },
    { field: "date", headerName: "Year-Month", width: 180 },
    {
      field: "numOfTransactions",
      headerName: "Number of Transactions",
      type: "number",
      width: 250,
    },
    {
      field: "points",
      headerName: "Reward Points",
      type: "number",
      width: 230,
    },
  ];

  const monthlyData = getMonthyData(transactions);

  const rows = [];
  Object.keys(monthlyData).forEach((customerId) => {
    Object.keys(monthlyData[customerId]).forEach((date) => {
      const { name, email, points, count } = monthlyData[customerId][date];
      rows.push({
        id: `${customerId}-${date}`,
        date,
        name,
        email,
        numOfTransactions: count,
        points,
      });
    });
  });

  return (
    <DataTable
      header="Monthly Reward Points By Customer"
      columns={columns}
      rows={rows}
      pageSize={5}
      pageSizeOptions={[5, 10]}
      loading={loading}
    />
  );
};

export default MonthlyRewardPoints;
