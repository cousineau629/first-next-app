import { Table } from "react-bootstrap";

interface Props {
  userInfo: { firstName: string; lastName: string; userName: string }[];
}
export function DisplayTable(props: Props) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {props.userInfo.map((item, i) => (
          <tr key={i}>
            <td>{i + 1}</td>
            <td colSpan={2}>{item.firstName}</td>
            <td>{item.userName}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
