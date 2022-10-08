export function CenterMenu() {
  const liStyle = "mr-12 justify-between cursor-pointer";

  return (
    <div>
      <div className="menu flex">
        <ul className="flex w-full justify-between">
          <li className={liStyle}>Home</li>
          <li className={liStyle}>About</li>
          <li className={liStyle}>Performer</li>
          <li className={liStyle}>Event Schedule</li>
        </ul>
      </div>
    </div>
  );
}
