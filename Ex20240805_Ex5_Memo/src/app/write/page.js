import { Card, Divider } from '@mui/material';
import { grey } from '@mui/material/colors';
import React from 'react'

export default function page() {

    const API_URL = "/memo/write";

    function sendData(){
        
        if(frm.content.value.trim().length==0){
            alert("내용을 입력하세요");
            frm.content.value = "";
            frm.content.focus();
            return;
        }
        if(frm.writer.value.trim().length==0){
            alert("작성자를 입력하세요");
            frm.writer.value = "";
            frm.writer.focus();
            return;
        }

    }

    return (
        <Card sx ={{maxWidth: 500, padding:'20px', margin: '20px auto'}}>
            <h1>글쓰기</h1>
            <Divider sx={{margin: '15px auto'}}/>
            <form action={API_URL} method='post'>
                <input type='text' style={{padding: 5, width: 150, margin: '5px 0'}} name='content' /><br/>
                <input type='text' style={{padding: 5, width: 150, margin: '5px 0'}} name='writer' /><br/>
                <button type='submit' style={{padding: 10, borderRadius: 8, background:'#ddd',width: 50, border:'none', margin: '5px 0'}}>전송</button>
            </form>
        </Card>
    )
}
