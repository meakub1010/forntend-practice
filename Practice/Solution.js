Array.prototype.myflat = function(depth = Infinity) {
    let flattened = [];
    const flatten = (arr, depth) => {
        for(let i = 0; i < arr.length; i++){
            if(Array.isArray(arr[i]) && depth > 0){
                flatten(arr[i], depth - 1);
            }
            else {
                flattened.push(arr[i]);
            }
        }
    }
    flatten(this, depth);

    return flattened;
}

console.log([1,2,[3,4,[5,6]]].myflat(1));


// Array Methods

Array.prototype.myMap = function (callback){
    const result = [];
    for(let i = 0; i < this.length; i++){
        result.push(callback(this[i], i, this));
    }
    return result;
}
const a = [1,2,3,4,5,6];
console.log(a.myMap((val, i, arr) => val + i + arr[1]));

Array.prototype.myFilter = function (callback){
    const result = [];
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            result.push(this[i]);
        }
    }

    return result;
}

console.log(a.myFilter((value, i, arr) => {
    return (value + i + arr[1]) > 5;
}));

Array.prototype.myReduce = function (callback, initialVal) {
    let acc = initialVal? initialVal : 0;

    for(let i = 0; i < this.length; i++){
        acc = callback(acc, this[i], i, this);
    }

    return acc;
}

const reduced = [1,2,3].myReduce((acc, val, i, arr) => {
    return acc + val + i + arr[1];
}, 3);
console.log(reduced);



function debounce(callback, delay, immediate = false){
    let timerID;
    return function(...args){
        clearTimeout(timerID);
        const shouldCallImmediately = timerID == null && immediate;
        if(shouldCallImmediately){
            callback.apply(this, args);
        }

        timerID = setTimeout(() => {
            if(!immediate){
                callback.apply(this, args);
            }
            timerID = null;
        }, delay);
    }
}


const confg = {hi: 'Test', age: 25};
const {hi = '1', age = 0 } = confg;
//console.log(hi, age);

console.log(hi??'Default Hi', age??0);
console.log(hi || 'Default Hi');




// Custom Hook - useFocus
import {useRef, useState, useEffect} from "react";

function useFocus(){
     const [isFocused, setIsFocused] = useState(flase);
     const ref = useRef(null);

     const handleFocus = () => setIsFocused(true);
     const handleBlur = () => setIsFocused(false);

     useEffect(() => {
        if(ref.current){
            const elem = ref.current;
            elem.addEventListener('focus', handleFocus);
            elem.addEventListener('blur', handleBlur);
        }
        return () => {
            if(ref.current){
                const elem = ref.current;
                elem.removeEventListener('focus', handleFocus);
                elem.removeEventListener('blur', handleBlur);
            }
        }
     }, [ref.current]);

     return {
        ref, isFocused
     }
}
//export useFocus;

// Currying function that takes a function and returns a curried version of it
// named after mathematician Haskell Curry

function curry(fn){
    return function curried(...args){
        if(args.length >= fn.length){
            return fn(...args);
        }
        return function(...nextArgs){
            return curried(...args, ...nextArgs);
        }
    }
}
//export  curry;


// useFetch Hook
import { useState, useEffect, useRef } from "react";

function useFetch(url){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const controllerRef = useRef<AbortController | null>(null);

    useEffect(() => {
        if(!url) return;
        
        const fetchData = async () => {
            if(controllerRef.current){
                controllerRef.current.abort();
            }
            controllerRef.current = new AbortController();

            setLoading(true);
            try{
                const response = await fetch(url, {signal: controllerRef.current.signal});
                const result = await response.json();
                setData(result);
                setError(null);
                setLoading(false);
            }
            catch(err){
                if(err.name === 'AbortError'){
                    console.log('Fetch aborted');
                }
                setError(err);
                setData(null);
            }
            finally {
                setLoading(false);
            }
        }
        
        fetchData();

        return () => {
            if(controllerRef.current){
                controllerRef.current.abort();
            }
        }


    }, [url]);



    return {data, loading, error};
}


function usePrevious(value){
    const ref = useRef();

    useEffect(() => {
        ref.current = value;
    }, [value]);
    return ref.current;
}