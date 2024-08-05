"use client"

import BbsVO from "@/component/BbsVO";
import Paging from "@/component/Paging";
import { Button, Pagination, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react"



export default function page() {

    const API_URL = "/api/bbs"

    const getData = (page) => {
        if(page == null || page == undefined || page == NaN){
            page = 1;
        }
        axios.get(
            API_URL+"?cPage="+page
        ).then((res)=>{
            console.log(res.data.b_ar);
            setList(res.data.b_ar);
            setTotalPage(res.data.totalPage);
            setPagePerBlock(res.data.pagePerBlock);
        })
    }

    const [list, setList] = useState([]);
    const [totalPage, setTotalPage] = useState();
    const [pagePerBlock, setPagePerBlock] = useState();
    const [page, setPage] = useState(1);

    useEffect(()=>{
        getData();
    },[]);

    const changePage = (e) => {
        let eleName = e.target.constructor.name;
        let cPage = page;
        if(eleName.startsWith("SVG")){
            let testId = e.target.dataset.testid;
            if(testId != undefined){
                if(testId.includes("Next")){
                    cPage = cPage+1;
                }
                if(testId.includes("Before")){
                    cPage = cPage-1;
                }
                if(testId.includes("Last")){
                    cPage = totalPage;
                }
                if(testId.includes("First")){
                    cPage = 1;
                }
            }
        }else if(eleName.includes("Button")){
            cPage = parseInt(e.target.innerText);
        }else{
            cPage = page;
        }
        if(cPage != null && cPage != "undefined"){
            setPage(cPage);
            getData(cPage);
        }
      }



    return (
        <div>
            <h1>게시판</h1>
            <Table sx={{backgroundColor:'#eee'}}>
                <TableHead sx={{backgroundColor:'#aaa'}}>
                    <TableRow>
                        <TableCell>번호</TableCell>
                        <TableCell>제목</TableCell>
                        <TableCell>글쓴이</TableCell>
                        <TableCell>조회수</TableCell>
                        <TableCell>작성일</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {list.map((bvo)=>(
                        <BbsVO key={bvo.b_idx} bvo={bvo} />
                    ))}
                    <Paging page={page} changePage={changePage} totalPage={totalPage} pagePerBlock={pagePerBlock} />
                </TableBody>
            </Table>
        </div>
    )
}
