import { curry } from 'ramda';

export function randInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min); // max is exclusive 
}

export function capitalize(s) {
    if (s.length === 0) {
      return s;
    } else if (s.length === 1) {
      return s.toUpperCase();
    } else {
      return s[0].toUpperCase() + s.slice(1).toLowerCase();
    }
}

export const randEm = (arr) => arr[randInt(0, arr.length)];

// This randomness function lovingly "borrowed" from:
// https://github.com/ramda/ramda/issues/168 

export const shuffler = curry(function(random, list) {
    var idx = -1;
    var len = list.length;
    var position;
    var result = [];
    while (++idx < len) {
        position = Math.floor((idx + 1) * random());
        result[idx] = result[position];
        result[position] = list[idx];
    }
    return result;
})(Math.random);