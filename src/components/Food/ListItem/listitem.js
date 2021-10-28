function ListItem({ foodText, deleteFd, index }) {
  return (
    <li>
      {foodText}
      <button
        onClick={() => {
          deleteFd(index);
        }}
      >
        X
      </button>
    </li>
  );
}

export default ListItem;
