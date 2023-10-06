import DataTable from "./DataTable";
import { formatDate } from "../utils";

const AllTransactions = ({ transactions, loading }) => {
  const columns = [
    { field: "name", headerName: "Customer Name", width: 200 },
    { field: "email", headerName: "Customer Email", width: 230 },
    { field: "date", headerName: "Day/Month/Year", width: 180 },
    {
      field: "transactionAmount",
      headerName: "Transaction Amount",
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

  const rows = transactions.map((transaction, index) => {
    const { customerName, customerEmail, amount, date, points } = transaction;
    const year = new Date(date).getFullYear();
    const month = new Date(date).getMonth() + 1;
    const day = new Date(date).getDate();

    return {
      id: index,
      name: customerName,
      email: customerEmail,
      date: `${formatDate(day)}/${formatDate(month)}/${year}`,
      transactionAmount: `$${amount}`,
      points: points,
    };
  });

  return (
    <DataTable
      header="All Transactions"
      columns={columns}
      rows={rows}
      pageSize={5}
      pageSizeOptions={[5, 10]}
      loading={loading}
    />
  );
};

export default AllTransactions;
