import './App.css';
import Comments from './Components/Comments';
import styled from 'styled-components';

function App() {
  return (
    <Wrapper className="App">
      <Comments data={data}></Comments>
    </Wrapper>
  );
}

const Wrapper = styled.div`
width: fit-content;
border-radius: 8px;
padding: 20px 0;
/* padding-right: 20px; */
background-color: #D4D4D4;
margin: 40px auto;
`;

const data =
  {
    id: "001",
    author: "albert",
    body: "Whats the status?",
    timestamp: "Sun Aug 02 2020 18:08:45 GMT+0530",
    points: "2",
    replies: [
      {
        id: "003",
        author: "haren",
        body: "Wrote the test suites, waiting for approval?",
        timestamp: "Sun Aug 02 2020 18:12:45 GMT+0530",
        points: "3",
        replies: [
          {
            id: "004",
            author: "albert",
            body: "Thanks for the update!",
            timestamp: "Sun Aug 02 2020 18:15:45 GMT+0530",
            points: "8"
          }
        ]
      },
      {
        id: "002",
        author: "Nrupul",
        body: "looking forward for the demo!",
        timestamp: "Sun Aug 02 2020 18:10:45 GMT+0530",
        points: "2"
      }
    ]
  }
export default App;
