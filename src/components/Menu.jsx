import { pizzaData } from "../data";
import Pizza from "./Pizza";
export default function Menu(props) {
  return (
    <main className="menu">
      <h2>Nasze menu🍕</h2>
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizza={pizza} key={pizza.name} />
        ))}
      </ul>
    </main>
  );
}
