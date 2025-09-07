function debounce(fn, delay){
    let timer;
    return function(...args){
        const ctx = this;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(ctx, args)
        }, delay);
    }
}
function onSearch(query) {
  console.log("Searching for:", query);
}

const debouncedSearch = debounce(onSearch, 500);

// Simulate typing
debouncedSearch("A");
debouncedSearch("Ap");
debouncedSearch("App");
debouncedSearch("Appl");
debouncedSearch("Apple");