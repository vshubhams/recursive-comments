import './App.css';
import Comments from './Components/Comments';
import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState({});
  
  const handleAddComment = async (id, payload) => {
    let data = await axios.get("https://woowax.herokuapp.com/data");
    data = data.data;

    handleUpdateData(data);
    function handleUpdateData(data) {
      if (data) {
        for (let i = 0; i < data.length; i++){
          if (data[i].id === id) {
            data[i].replies.push(payload);
            return
          }
          handleUpdateData(data[i].replies);
        }
      }
    }

    await axios.patch("https://woowax.herokuapp.com/data/001", data[0]);
    getData();
  }

  const getData = async () => {
    let data = await axios.get("https://woowax.herokuapp.com/data");
    setData(data.data[0]);
    console.log('data.data[0]:', data.data[0])
  }
  useEffect(() => {
    getData();
  },[])

  return (
    <Wrapper className="App">
      <Comments data={data} handleAddComment={handleAddComment}></Comments>
    </Wrapper>
  );
}

const Wrapper = styled.div`
width: fit-content;
border-radius: 8px;
padding: 20px 0;
/* padding-right: 20px; */
background-color: #FEF1E6;
margin: 40px auto;
`;

export default App;
