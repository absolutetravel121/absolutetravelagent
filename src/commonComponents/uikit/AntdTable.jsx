import { Table } from 'antd'
import React from 'react'

const AntdTable = ({columns,data}) => {
  return (
   <>
   <Table columns={columns} dataSource={data}  pagination={{ pageSize: 5 }}/>
   </>
  )
}

export default AntdTable
