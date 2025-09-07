const fibGenerator = function*() {
    let a = 0, b = 1;

    yield a;
    yield b;

    while(true){
        const next = a + b;
        yield next;
        a = b;
        b = next;
    }
}

const gen = fibGenerator();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().value); // 5