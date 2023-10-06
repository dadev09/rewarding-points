import { DataGrid } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import PrintIcon from "@mui/icons-material/Print";

const DataTable = ({
  header,
  columns,
  rows,
  pageSize,
  pageSizeOptions,
  loading,
}) => {
  const exportData = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(rows)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = `${header}.json`;

    link.click();
  };

  return (
    <>
      <Typography
        variant="h5"
        gutterBottom
        sx={{ display: "flex", justifyContent: "space-between", mt: 2, mb: 2 }}
      >
        {header}
        <IconButton color="primary" onClick={exportData}>
          <PrintIcon />
        </IconButton>
      </Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize },
          },
        }}
        pageSizeOptions={pageSizeOptions}
        checkboxSelection
        loading={loading}
      />
    </>
  );
};

export default DataTable;
