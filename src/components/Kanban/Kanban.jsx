import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// import './App.css'; // Assuming you have a CSS file for styling

function Kanban() {
  const [columns, setColumns] = useState({
    new: {
      title: 'New',
      
      cards: [
        { id: '1', content: 'Card 1' },
        { id: '2', content: 'Card 2' },
        // Add more cards as needed
      ],
    },
    proposals: {
      title: 'Proposals',
      bg:'#15ABFFFF',
      cards: [
        { id: '3', content: 'Card 3' },
        { id: '4', content: 'Card 4' },
        // Add more cards as needed
      ],
    },
    negotiations: {
      title: 'Negotiations',
      bg:'#FF56A5FF',
      cards: [
        { id: '5', content: 'Card 5' },
        { id: '6', content: 'Card 6' },
        // Add more cards as needed
      ],
    },
    contractsSent: {
      title: 'Contracts Sent',
      bg:'#FFD317FF',
      cards: [
        { id: '7', content: 'Card 7' },
        { id: '8', content: 'Card 8' },
        // Add more cards as needed
      ],
    },
  });

  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;
    if (!destination) return; // Card dropped outside a droppable area

    const startColumn = columns[source.droppableId];
    const endColumn = columns[destination.droppableId];

    if (startColumn === endColumn) {
      // Reorder cards within the same column
      const newCards = Array.from(startColumn.cards);
      newCards.splice(source.index, 1);
      newCards.splice(destination.index, 0, startColumn.cards[source.index]);
      const newColumn = {
        ...startColumn,
        cards: newCards,
      };
      setColumns({ ...columns, [source.droppableId]: newColumn });
    } else {
      // Move card between columns
      const startCards = Array.from(startColumn.cards);
      const endCards = Array.from(endColumn.cards);
      const [movedCard] = startCards.splice(source.index, 1);
      endCards.splice(destination.index, 0, movedCard);
      const newColumns = {
        ...columns,
        [source.droppableId]: { ...startColumn, cards: startCards },
        [destination.droppableId]: { ...endColumn, cards: endCards },
      };
      setColumns(newColumns);
    }
  };

  return (
    <div className="Kanban">
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="kanban-board">
          {Object.keys(columns).map((columnId) => {
            const column = columns[columnId];
            return (
              <div className="column" key={columnId}>
                <div className="title htext1"
                style={{backgroundColor:column.bg}}>{column.title}</div>
                <Droppable droppableId={columnId}>
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps} className="card-list">
                      {column.cards.map((card, index) => (
                        <Draggable key={card.id} draggableId={card.id} index={index}>
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className="card_"
                            >
                              {/* {card.content} */}
                              <div className="license">50 licenses
            <div className="status">New</div></div>
          <div className="content"></div>
                              <div className="content">
            <div className="c1">Lorem ipsum</div>
            <div className="c2">
              $ Est.revenue
              <div className="r1">$1,000</div>
            </div>

            <div className="c2">
              Next Meeting
              <div className="r1">-</div>
            </div>
            <div className="c2">Customer</div>
          </div>
                            </div>
                            
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            );
          })}
        </div>
      </DragDropContext>
    </div>
  );
}

export default Kanban;
