import React from 'react'
import { Pagination } from 'antd';

const AntdPagination = (pagesize) => {
  return (
    <>
      <Pagination defaultCurrent={1} total={pagesize} />
    </>
  )
}

export default AntdPagination
