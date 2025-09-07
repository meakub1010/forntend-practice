// virtualize method will take real DOM tree and return object

function virtualize(node){
    if(node.nodeType === Node.TEXT_NODE){
        return node.textContent;
    }

    const obj = {
        type: node.nodeName.toLowerCase(),
        props: {},
        children: []
    }

    for(const prop of node.attributes){
        obj.props[prop.name] = prop.value;
    }

    for(const child of node.childNodes){
        obj.children.push(child);
    }

    return obj;
}


const root = document.createElement("div");
root.innerHTML = `
  <h1> this is </h1>
  <p class="paragraph">a <button>button</button> from <a href="https://bfe.dev"><b>BFE</b>.dev</a></p>
`;

const obj = virtualize(root);
console.log(obj);



// render mehtod will take object and will recreate DOM tree

function render(obj){
    if(typeof obj === "string"){
        return document.createTextNode(obj);
    }

    const node = document.createElement(obj.type);
    for(const prop in obj.props){
        node.setAttribute(prop, obj.props[prop]);
    }

    for(const child of obj.children){
        node.appendChild(render(child));
    }

    return node;
}

console.log(render(obj));