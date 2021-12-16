const Product = props =>{
    return React.createElement("div",{className:'product'},
        React.createElement("h1",{},props.title),
        React.createElement("img", {src:props.image}),
        React.createElement("p", {}, `${props.price} IQD`),
        React.createElement("button",{
            onClick:()=>alert('You clicked buy now on product'+ props.title)
        },"BUY NOW")
    )
}