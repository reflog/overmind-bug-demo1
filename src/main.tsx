import * as React from "react";

import { connect } from "./app";
import { Table } from "antd";

const columns = [
  {
    title: "name",
    dataIndex: "name",
    key: "name"
  }
];

const App = ({ app }) => (
  <Table
    pagination={app.state.listPagination}
    rowKey="id"
    onChange={app.actions.handleTableChange}
    columns={columns}
    dataSource={app.state.data ? app.state.data : []}
  />
);

export default connect(App);
