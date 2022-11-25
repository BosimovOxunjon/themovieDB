import React, { useState } from "react";
import { Pagination } from "antd";
const PaginationFunc = () => {
  //   const [current, setCurrent] = useState(1);
  return <Pagination defaultCurrent={1} total={500} />;
};
export default PaginationFunc;
