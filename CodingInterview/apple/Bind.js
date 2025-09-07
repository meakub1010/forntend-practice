Function.prototype.myBind = function(ctx, ...args){
    const fn = this;

    return function(...moreArgs){
        return fn.apply(ctx, [...args, ...moreArgs]);
    }
}

// Example usage:
const obj = {
    x: 10,
    getX: function(additional){
        return this.x + additional;
    }
};
const boundGetX = obj.getX.myBind(obj, 5);
console.log(boundGetX()); // Output: 15