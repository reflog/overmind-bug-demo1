import { derive } from "overmind";
import { PaginationProps } from "../../node_modules/antd/lib/pagination";

export type State = {
  listPagination: PaginationProps;
  data: any[];
};

const _state: State = {
  listPagination: {
    pageSize: 10,
    current: 0,
    total: 100
  },
  data: undefined
};

export default _state;
