import { Action } from "./";
import { PaginationConfig } from "../../node_modules/antd/lib/table";

export default (action: Action) => ({
  init: action()
    .map(({ api }) => {
      return api.getData(0);
    })
    .mutation((state, results) => {
      state.data = results;
      //state.listPagination.total = results.length;
    }),
  handleTableChange: action<PaginationConfig>()
    .mutation((state, pagination) => {
      state.listPagination.current = pagination.current;
    })
    .map(({ state, api }) => api.getData(state.listPagination.current))
    .mutation((state, result) => {
      state.data = result;
      //state.listPagination.total = result.length;
    })
});
