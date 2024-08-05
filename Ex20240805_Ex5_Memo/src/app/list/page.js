import { Card, CardContent } from "@mui/material"

export default function page() {

    let m_ar=[
        {title:"안녕하세요",date:"2024-08-01",content:"잘 되나?"},
        {title:"감사해요",date:"2024-08-02",content:"잘 되네"},
        {title:"잘있어요",date:"2024-08-03",content:"잘 돼?"},
        {title:"다시 만나요",date:"2024-08-04",content:"잘 된다고!"},
    ]


    return (
        <div className="list_bg">
            <Card sx ={{maxWidth: 500}}>
                <CardContent>
                {m_ar.map((mvo,idx) => {
                    return(
                        <div key={idx} className="list_item">
                            <h4 className="list_item-h4">{mvo.title}</h4>
                            <p  className="list_item-p">{mvo.date}</p>
                            <p>{mvo.content}</p>
                        </div>
                    )
                })}
                </CardContent>
            </Card>
        </div>
    )
}
