import { useState } from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";

function Comments({ data,handleAddComment }) {

    const [open, setOpen] = useState(false);
    const [reply, setReply] = useState(false);
    const [value, setValue] = useState('');

    const handleInputData = (id) => {
        const myId = uuid();
        const payload = {
            id: myId,
            author: "Shubham",
            body: value,
            points: 2,
            replies: [],
            timestamp:"Sun Oct 015 2021 18:08:45 GMT+0530"
        }
        handleAddComment(id,payload);
    }
    
    return (
        <Wrapper open={open ? "solid 4px" : "none"}>
            <Container>
                <Right onClick={() => setOpen(!open)}>
                    {open ? "-" : "+"}
                </Right>
                <Left>
                    <p>{data.author} {data.points} points</p>
                    <h4>{data.body}</h4>
                    <Options>
                        <div onClick={() => setReply(!reply)}>Reply</div>
                        <div>Give Award</div>
                        <div>Share</div>
                        <div>Report</div>
                        <div>Save</div>
                    </Options>
                    {
                      reply &&  <div>
                            <input type="text" onChange={(e)=>{setValue(e.target.value)}} value={value} placeholder="Write here" />
                            <button onClick={() => { handleInputData(data.id) }}>Comment</button>
                        </div>
                    }
                </Left>
            </Container>
            {open && data?.replies?.map((el) => {
                return <Comments key={el.id}  data={el} handleAddComment={handleAddComment}></Comments>
            })}
        </Wrapper>
    )
}
export default Comments

const Wrapper = styled.div`
border-left:${props => props.open};
margin: 20px;
color:#FF865F;
margin-left: 50px;
`
const Container = styled.div`
display: flex;
`;
const Left = styled.div`
    color:#950202;
&>h4{
    margin: 10px 0;
}
`;

const Right = styled.div`
padding: 0 5px;
font-weight: 900;
font-size: 22px;
cursor: pointer;
display: flex;
`;

const Options = styled.div`
display: flex;
width: fit-content;

&>div{
    margin-right:10px;
    color: #FF865F;
    cursor: pointer;
}
&>div:hover{
    color: #950202;
}
`
