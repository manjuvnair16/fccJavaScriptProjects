/*Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case.*/

function convertToRoman(num) {

  //define a nested array of unique roman numerals and their decimal counterparts
    const romanChartArr = [
        [1 ,"I"],
        [4 ,"IV"],
        [5,"V"],
        [9, "IX"],
        [10, "X"],
        [40, "XL"],
        [50, "L"],
        [90, "XC"],
        [100, "C"],
        [400, "CD"],
        [500, "D"],
        [900, "CM"],
        [1000, "M"]
    ];

    let filteredArr =[];
    let romanStr = ''

    //execute the loop till num becomes 0
    while(num != 0) {
        filteredArr = romanChartArr.filter(item => item[0]<= num) //filters out values less than num: [[1 ,"I"],[4 ,"IV"],[5,"V"],[9, "IX"],[10, "X"]]
        let index = (filteredArr.length) -1;                      //our desired value is the last item in the filtered array: [10, "X"]
        romanStr += filteredArr[index][1];                        //append the roman numeral to the output string: 'X'
        num -= filteredArr[index][0]                              //decrease the value of the number:  36 - 10 = 26
    }
    return romanStr;
}

console.log(convertToRoman(36));
