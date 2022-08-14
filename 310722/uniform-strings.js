function weightedUniformStrings(s, queries) {
    // Write your code here
    // find the longest duplicated string of each character
    let longestDups = [];
    // generate weights array from longestDups
    let weightFromDups = [];
    for(let i=97; i<123; i++){
        let length = 0, max = 0;
        let character = String.fromCharCode(i); // a,b,c
        for(let j = 0; j < s.length+1; j++){ // s = 'abccddde'
            if(s.charAt(j) == character){
                length++;
            }
            else {
                if(max < length){
                    max = length;
                }
                length = 0;
            }            
        }
        console.log(max);
        if(max > 0){
            let maxDupsString = ""; // exp: max = 4, character = 'a' -> 'aaaa'
            let count = 0;
            while(count < max){
                count++;
                maxDupsString += character;
                longestDups.push(maxDupsString);
                // callculate the weight of current max duplicate string
                weightFromDups.push(count*(i-96));                
            }
        }
    }
    console.log(weightFromDups, longestDups);
    let output = [];
    for(let i=0; i<queries.length; i++){
        if(weightFromDups.indexOf(queries[i]) >= 0){
            output.push('Yes');
        }
        else output.push('No');
    }
    return output;
}

console.log(weightedUniformStrings(
    'abbbccddde',
    [6,1,3,12,5,9,10]
))