import MenuDirectory from "./components/menu-directory/MenuDirectory";
import { categories } from "./utils/ArrayList";

function App() {
  return (
    <div>
      <MenuDirectory categories={categories} />
    </div>
  );
}

export default App;
