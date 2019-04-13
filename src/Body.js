import React from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex: 5;
  flex-direction: column;
  overflow-x: hidden;
  margin-top: 25px;
`;

const CardContainer = styled.div`
  display: flex;
  height: 150px;
  flex-direction: row;
  overflow-x: auto;
`;

const Card = styled.div`
  display: flex;
  margin-right: 25px;
  flex: 1 0 auto;
  width: 200px;
  height: 125px;
  background: green;
  border-radius: 25px;
  flex-direction: column;
  background: ${props => props.background};
  position: relative;
  box-shadow: 1px 1px 10px grey;
  margin-top: 7px;
  margin-left: 10px;
`;

const CardHeader = styled.p`
  font-weight: bold;
  width: 75px;
  font-size: 12px;
  height: 15px;
  color: #f5f8f9;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  position: absolute;
  top: 10px;
  left: 10px;
`;

const CardContent = styled.div`
  text-align: left;
  font-weight: bold;
  margin-left: 10px;
  color: #fff;
  position: absolute;
  bottom: 15px;
  left: 10px;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  font-weight: bold;
  margin-right: 15px;
  margin-left: 15px;
`;

const Task = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  height: 100px;
  align-items: center;
`;

const TaskNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background: rgba(0, 0, 0, 0.05);
`;

const TaskProcess = styled.div`
  align-self: center;
  width: 200px;
  height: 3px;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.2);
`;

const TaskStatus = styled.div`
  background: ${props => props.color};
  cursor: pointer;
  border-radius: 15px;
  width: 140px;
  color: #fff;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
`;

function Body() {
  return (
    <Div>
      <CardContainer>
        <Card background="linear-gradient(135deg, rgba(145,230,211,1) 0%, rgba(68,208,166,1) 100%)">
          <CardHeader>Completed</CardHeader>
          <CardContent>Frannnk genotyping report</CardContent>
        </Card>

        <Card background="linear-gradient(135deg, rgba(164,154,253,1) 0%, rgba(131,92,246,1) 100%)">
          <CardHeader>Completed</CardHeader>
          <CardContent>Report on your genetic analysis results</CardContent>
        </Card>

        <Card background="linear-gradient(135deg, rgba(254,143,209,1) 0%, rgba(255,105,179,1) 100%)">
          <CardHeader>Completed</CardHeader>
          <CardContent>Report on your genetic analysis results</CardContent>
        </Card>

        <Card background="linear-gradient(135deg, rgba(112,224,235,1) 0%, rgba(118,133,234,1) 100%)">
          <CardHeader>Completed</CardHeader>
          <CardContent>Gene matching result</CardContent>
        </Card>
        <Card background="linear-gradient(135deg, rgba(145,230,211,1) 0%, rgba(68,208,166,1) 100%)">
          <CardHeader>Completed</CardHeader>
          <CardContent>Frannnk genotyping report</CardContent>
        </Card>

        <Card background="linear-gradient(135deg, rgba(164,154,253,1) 0%, rgba(131,92,246,1) 100%)">
          <CardHeader>Completed</CardHeader>
          <CardContent>Report on your genetic analysis results</CardContent>
        </Card>

        <Card background="linear-gradient(135deg, rgba(254,143,209,1) 0%, rgba(255,105,179,1) 100%)">
          <CardHeader>Completed</CardHeader>
          <CardContent>Report on your genetic analysis results</CardContent>
        </Card>

        <Card background="linear-gradient(135deg, rgba(112,224,235,1) 0%, rgba(118,133,234,1) 100%)">
          <CardHeader>Completed</CardHeader>
          <CardContent>Gene matching result</CardContent>
        </Card>
      </CardContainer>

      <Content>
        <h1 style={{ textAlign: "left" }}>My task</h1>

        <Task>
          <TaskNumber>
            <p>1</p>
          </TaskNumber>
          <p>Genetic analysis report</p>
          <p>2019/02/22 13:30:09</p>
          <TaskProcess />
          <p>Analysis process</p>
          <TaskStatus color="#FF58B4">
            <p>About to start</p>
          </TaskStatus>
          <p>View / Delete</p>
        </Task>

        <Task>
          <TaskNumber>
            <p>1</p>
          </TaskNumber>
          <p>Genetic analysis report</p>
          <p>2019/02/22 13:30:09</p>
          <TaskProcess />
          <p>Analysis process</p>
          <TaskStatus color="#F9C571">
            <p>Verify problem</p>
          </TaskStatus>
          <p>View / Delete</p>
        </Task>

        <Task>
          <TaskNumber>
            <p>1</p>
          </TaskNumber>
          <p>Genetic analysis report</p>
          <p>2019/02/22 13:30:09</p>
          <TaskProcess />
          <p>Analysis process</p>
          <TaskStatus color="#73CB8F">
            <p>Detection complete</p>
          </TaskStatus>
          <p>View / Delete</p>
        </Task>
      </Content>
    </Div>
  );
}

export default Body;
