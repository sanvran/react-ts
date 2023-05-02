import React from "react";

interface ListProps {
  todoItemList: string[];
}
const List = ({ todoItemList }: ListProps) => {
  return (
    <>
      <div>
        <ul>
          {todoItemList && todoItemList.length > 0
            ? todoItemList.map((todo) => {
                return <li>{todo}</li>;
              })
            : "No Items"}
        </ul>
      </div>
    </>
  );
};

export default List;
