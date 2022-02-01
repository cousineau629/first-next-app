import { NextPage } from "next";
import { NavBar } from "../components/nav-bar";
import { DisplayTable } from "../components/table";
import "../testdata/tabledata";
import { testTableData } from "../testdata/tabledata";

const Table: NextPage = () => {
  return (
    <div>
      <NavBar />
      <DisplayTable userInfo={testTableData} />
    </div>
  );
};
export default Table;
