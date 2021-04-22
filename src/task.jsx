import React from 'react';
import styled from 'styled-components';
import {Draggable} from 'react-beautiful-dnd';

const TaskContainer = styled.div`
  border: 2px solid #5fd1f3;
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 10px;
  background: #89e4dc;
`;

export default class Task extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provided) => (
          <TaskContainer
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {this.props.task.content}
          </TaskContainer>
        )}
      </Draggable>
    );
  }
}