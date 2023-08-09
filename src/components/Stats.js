export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">Add some items to your packick list</footer>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You are ready to GO! 🛫"
          : `👜You have ${numItems} items on your list and you already packed${" "}
        ${numPacked} (${percentage} %)`}
      </em>
    </footer>
  );
}
