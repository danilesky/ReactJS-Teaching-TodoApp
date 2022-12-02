const Menu = ({ menuFn }) => {
  return (
    <>
      <button onClick={() => menuFn("TODOS")}>Todos💪</button>
      <button onClick={() => menuFn("DONE")}>Done✅</button>
    </>
  );
};

export default Menu;
