function toBinary(number, fill) {
    'use strict';
    var n_fill = fill || 16;  // default fill is 16 bit
    var str_fill = "";
    if (number >= 0) {
        str_fill = Array(n_fill+1).join('0');
        return (str_fill + number.toString(2)).split("").reverse().slice(0, n_fill).reverse().join("");
    }
    else {
        str_fill = Array(n_fill+1).join('1');
        return (str_fill + ((2 << n_fill) + number).toString(2).slice(1)).split("").reverse().slice(0, n_fill).reverse().join("");
    }
}

function ADD(AC, number) {
    'use strict';
    return {
        result: toBinary(AC + number),
        E: ((AC + number) > 32767 || (AC + number) < -32768) ? 1 : 0
    };
}