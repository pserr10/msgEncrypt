export class SnailArray {

    constructor() {

    }

    snailAntiClockWise(array) {

        var list = [];

        var array = array[0].map(function (col, i) {
            return array.map(function (row) {
                return row[i];
            });
        });

        list.push(array[0]);
        array.shift();

        while (typeof array[0] !== 'undefined') {

            var array = array[0].map(function (col, i) {
                return array.map(function (row) {
                    return row[i];
                });
            });

            array.reverse();
            list.push(array[0]);
            array.shift();
        }
        return list;
    }

    snailClockWise(array) {
        let finalArray = [];
        while (array.length) {
            finalArray.push(...array.shift());
            for (var i = 0; i < array.length; i++) {
                finalArray.push(array[i].pop());
            }
            finalArray.push(...(array.pop() || []).reverse());
            for (var i = array.length - 1; i >= 0; i--) {
                finalArray.push(array[i].shift());
            }
        }
        return finalArray;
    }

}
