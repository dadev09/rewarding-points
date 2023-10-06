import DataTable from "./DataTable";
import { getTotalData } from "../utils";

const TotallyAwardedPoints = ({ transactions, loading }) => {
  const columns = [
    { field: "name", headerName: "Customer Name", width: 200 },
    { field: "email", headerName: "Customer Email", width: 230 },
    {
      field: "numOfTransactions",
      headerName: "Number of Transactions",
      type: "number",
      width: 340,
    },
    {
      field: "points",
      headerName: "Reward Points",
      type: "number",
      width: 320,
    },
  ];

  const totalData = getTotalData(transactions);

  const rows = [];
  Object.keys(totalData).forEach((customerId) => {
    const { name, email, points, count } = totalData[customerId];
    rows.push({
      id: customerId,
      name,
      email,
      numOfTransactions: count,
      points,
    });
  });

  return (
    <DataTable
      header="Totally Awarded Points By Customer"
      columns={columns}
      rows={rows}
      pageSize={5}
      pageSizeOptions={[5, 10]}
      loading={loading}
    />
  );
};

export default TotallyAwardedPoints;
