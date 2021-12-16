const App = () => {
  return React.createElement(
    "div",
    { className: "app-container" },
    React.createElement("h1", {}, "Online Shop"),
    [
      {
        title: "Graphite Pencil",
        image:
          "https://www.adam-eshop.com/10509-large_default/staedtler-lumograph-2h-graphite-pencil.jpg",
        price: 250,
      },
      {
        title: "Wooden Ruler",
        image:
          "https://st2.depositphotos.com/6329244/11004/v/950/depositphotos_110047254-stock-illustration-ruler-wooden-ruler-isolated-on.jpg",
        price: 750,
      },
    ].map((prod) =>
      React.createElement(Product, {
        title: prod.title,
        image: prod.image,
        price: prod.price,
      })
    )
  );
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
