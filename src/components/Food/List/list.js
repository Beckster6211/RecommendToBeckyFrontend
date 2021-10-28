import ListItem from "../ListItem/listitem";

function List({ food, deleteFood }) {
  return (
    <ul>
      {food.map((item, index) => {
        return (
          <ListItem
            foodText={item.food}
            index={index}
            key={item.id}
            deleteFd={deleteFood}
          />
        );
      })}
    </ul>
  );
}

export default List;