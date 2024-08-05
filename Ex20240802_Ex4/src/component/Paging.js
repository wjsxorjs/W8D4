import { Button, Pagination, TableCell, TableRow, Typography } from "@mui/material";

export default function Paging(props) {
    let page = props.page;
    let changePage = props.changePage;
    let totalPage = props.totalPage;
    let pagePerBlock = props.pagePerBlock;
    return (
        <TableRow>
            <TableCell>
                <Typography>Page: {page}</Typography>
            </TableCell>
            <TableCell colSpan={3}>
                <Pagination color="primary" onChange={changePage} count={totalPage} siblingCount={parseInt(Math.abs(pagePerBlock-1)/2)} showFirstButton showLastButton />
            </TableCell>
            <TableCell>
                <Button variant="contained">글쓰기</Button>
            </TableCell>
        </TableRow>
    )
}
