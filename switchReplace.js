const ext = '.js';
const myswitch = () => {
    switch(ext){
        case '.css':
            console.log('text/css');
            break;
        case '.js':
            console.log('text/javascript');
            break;
        default:
            console.log('text/html');
    }
}

myswitch();

const extObj = {
    '.css': 'text/css',
    '.js':'text/javascript',
    '.cs':'c sharp'
};

console.log(extObj[ext]? extObj[ext] : 'text/html');


// we can also use map

const myMap = new Map();
myMap.set('.css', 'text/css');
myMap.set('.js', 'text/javascript');
