export default function Pizza({ pizza }) {
    return (
      <li className="pizza">
        <img src={pizza.photoName} alt={pizza.name}></img>
        <div>
          <h3>{pizza.name}</h3>
          <p>{pizza.ingredients}</p>
          <span>{pizza.price} zł</span>
        </div>
      </li>
    );
  }
  