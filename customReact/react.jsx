function render(element, container) {
    // const domElement=document.createElement(element.type)
    // domElement.innerHTML=element.children
    // domElement.setAttribute('href',element.props.href)
    // domElement.setAttribute('target',element.props.target)
    // container.appendChild(domElement)

    //The above method can be one way of injecting the element in the container but it would be trouble if we need to manually set attributes

    //BETTER APPROACH BELOW
    const domElement = document.createElement(element.type)
    domElement.innerHTML = element.children
    for (const prop in element.props) {               //prop is key here and props is the object
        if (prop === 'children') continue   //in a case if we find children in props
        domElement.setAttribute(prop, element.props[prop])
    }
    container.appendChild(domElement)
}
//we have created a function which creates a dom element, adds the property specified for the react element and appends it to the root container

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'                  //SUCH TYPE OF ELEMENT CREATION NEEDS TO BE INJECTED IN THE ROOT
    },
    children: "Click me to visit google"
}
//we created an HTML a element having some props(properties)
//now we need to add this newly created element in the root

const root = document.querySelector("#root");

render(reactElement, root)        //we create any method and specify which element needs to be injected and where,



