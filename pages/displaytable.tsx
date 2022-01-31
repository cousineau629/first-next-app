import { NextPage } from "next";
import { DisplayTable } from "../components/table";
import "../testdata/tabledata";
import { testTableData } from "../testdata/tabledata";

const Table: NextPage = () => {
  return (
    <div>
      <DisplayTable userInfo={testTableData} />
    </div>
  );
};
export default Table;
