import { TableCell, TableRow } from '@mui/material';
import React from 'react'

export default function BbsVO({bvo}) {
    const {rnum,b_idx,bname,
        subject,writer,content,file_name,
        c_list,hit,write_date} = bvo;
  return (
    <TableRow>
        <TableCell>{rnum}</TableCell>
        <TableCell>{subject}</TableCell>
        <TableCell>{writer}</TableCell>
        <TableCell>{hit}</TableCell>
        <TableCell>{write_date}</TableCell>
    </TableRow>
  )
}
