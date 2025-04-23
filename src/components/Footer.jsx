export default function Footer() {
  const godzina = new Date().getHours();
  const otwarcie = 12;
  const zamkniecie = 22;
  const jestOtwarte = godzina >= otwarcie && godzina <= zamkniecie;

  const napis = jestOtwarte
    ? "Jesteśmy otwarci 😁👌"
    : `Otwarcie od ${otwarcie} do ${zamkniecie}😎`;

  return (
    <footer>
      {new Date().toLocaleDateString()} {napis}
    </footer>
  );
}
