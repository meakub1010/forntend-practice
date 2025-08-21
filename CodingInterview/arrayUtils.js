const ArrayUtils = {
    sum(arr){
        return arr.reduce((acc, val) => acc + (typeof val === 'number' ? val : 0)
            , 0);
    },

    average(arr) {
        const nums = arr.filter(val => typeof val === 'number');
        return nums.length ? ArrayUtils.sum(nums)/nums.length : 0;
    },

    unique(arr){
        return [...new Set(arr)];
    },

    


}