// virtualize => take a real dom tree as input
// return an object literal that represent the same tree structure

// for string TextNode
// Object is HTMLElement
// props: attributes and children



function virtualize(node){
    if(node.nodeType === Node.TEXT_NODE){
        return node.nodeValue; // plain string
    }

    const obj = {
        type: node.tagName.toLowerCase(),
        props: {},
        children: []
    };

    // copy attributes
    for(let attr of node.attributes){
        obj.props[attr.name] = attr.value;
    }

    for(let child of node.childNodes){
        obj.children.push(virtualize(child));
    }

    return obj;
}



// render => take this object as input and recreate a DOM tree

function render(obj){
    if(typeof obj === "string"){
        return document.createTextNode(obj);
    }

    const node = document.createElement(obj.type);

    for(let prop in obj.props){
        node.setAttribute(prop, obj.props[prop]);
    }

    for(const child of obj.children){
        node.appendChild(render(child));
    }

    return node;
}


// usage
const el = document.createElement('div');
el.innerHTML = `
    <h1> this is </h1>
    <p class='paragrap[h'>
        a <button>button</button> from
        <a href='https://bfe.dev'>BFE</a>
    </p>
`;

const vdom = virtualize(el);
console.log(vdom);