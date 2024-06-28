import productos from "./productosMasculinos.json";

const ListItems = () => {
  function api() {
    const div = document.querySelector(".divContainer");
    const cardContain = document.createElement("div");
    const elementos = productos.productosMasculinos;

    for (const key in elementos) {
      for (const key2 in elementos[key]) {
        const card = `
        <div class="w-64 h-96 rounded-lg shadow-lg shadow-yellow-400 p-4 mx-auto m-4" >
            <img src=${elementos[key][key2].imagen} class="h-44 m-auto bg-black"></img>
            <h1 key=${elementos[key][key2].nombre} class="text-yellow-400 my-2">U$D${elementos[key][key2].precio}</h1>
            <p class="text-yellow-400 h-20 my-2">${elementos[key][key2].descripcion}</p>
            <button class="text-yellow-400 my-2 rounded-lg shadow-lg shadow-yellow-400 p-2">add to Car</button>
        </div>
        `;

        cardContain.className = " flex flex-wrap";
        cardContain.innerHTML += card;
      }
      div.appendChild(cardContain);
    }
  }

  return (
    <>
      <div className="divContainer w-full bg-black pt-8">
        <button onClick={api}>llamar</button>
      </div>
    </>
  );
};

export default ListItems;
