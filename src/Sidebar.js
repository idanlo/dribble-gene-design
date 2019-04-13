import React from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  position: relative; /* TODO: bottom button */
`;

const GreyText = styled.div`
  color: #8b9e9c;
  font-weight: bold;
  margin-left: 20%;
  align-self: flex-start;
  margin-top: 25px;
`;

const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 75%;
`;

const ListItem = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 40px;
  border-radius: 20px;
  margin-bottom: 15px;
  cursor: pointer;
  &:hover {
    background: #f5f7f6;
  }
`;

const ListItemIcon = styled.img.attrs(props => ({
  src: props => props.src
}))`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  display: flex;
  flex: 1;
`;

const ListItemText = styled.a`
  display: flex;
  font-weight: bold;
  flex: 2;
`;

function Sidebar() {
  return (
    <Div>
      <GreyText>
        <p>Task</p>
      </GreyText>
      <List>
        <ListItem>
          <ListItemIcon
            src="https://image.flaticon.com/icons/svg/149/149402.svg"
            width={15}
            height={15}
          />
          <ListItemText>My Task</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon
            src="https://image.flaticon.com/icons/svg/109/109735.svg"
            width={15}
            height={15}
          />
          <ListItemText>Other Task</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon
            src="https://image.flaticon.com/icons/svg/149/149377.svg"
            width={15}
            height={15}
          />
          <ListItemText>Scheduled</ListItemText>
        </ListItem>
      </List>

      <GreyText>
        <p>WorkFlow</p>
      </GreyText>
      <List>
        <ListItem>
          <ListItemIcon
            src="https://image.flaticon.com/icons/svg/753/753115.svg"
            width={15}
            height={15}
          />
          <ListItemText>My Team</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon
            src="https://image.flaticon.com/icons/svg/1584/1584899.svg"
            width={15}
            height={15}
          />
          <ListItemText>My Project</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon
            src="https://image.flaticon.com/icons/svg/149/149346.svg"
            width={15}
            height={15}
          />
          <ListItemText>Document</ListItemText>
        </ListItem>
      </List>
    </Div>
  );
}

export default Sidebar;
