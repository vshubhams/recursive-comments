import { useState } from "react";
import styled from "styled-components";

function Comments({ data }) {

    const [open, setOpen] = useState(false);
    console.log('open:', open);
    return (
        <Wrapper open={open?"solid 4px":"none"}>
            <Container>
                <Right onClick={()=>setOpen(!open)}>
                    {open?"-":"+"}
                </Right>
                <Left>
                    <p>{data.author} {data.points} points</p>
                    <h4>{data.body}</h4>
                    <Options>
                        <div>Reply</div>
                        <div>Give Award</div>
                        <div>Share</div>
                        <div>Report</div>
                        <div>Save</div>
                    </Options>
                </Left>
            </Container>
            {open&&data?.replies?.map((el) => {
                return <Comments data={el}></Comments>
            })}
        </Wrapper>
    )
}
export default Comments

const Wrapper = styled.div`
border-left:${props=>props.open};
margin: 20px;
margin-left: 50px;
`
const Container = styled.div`
/* border: solid red 1px; */
display: flex;
`;
const Left = styled.div`
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
    color: gray;
}
`
