function solution(relation){
    var answer = 0;
    var bunchOfRow = [];
    var firstRow = relation[0];

    for (let index = 0; index < firstRow.length; index++) {
        var one = relation.map((v) => v[index])
        var duplicate = new Set(one).size != one.length
        if(duplicate){
            bunchOfRow.push(one)
        } else {
            answer++
        }
    }

    for (let index = 0; index < bunchOfRow.length; index++) {
        const row = bunchOfRow[index];
        row.splice(index, 1);
        var listTemp = [];
        var objetcTemp = {};

        for (let index2 = 0; index2 < element.length; index2++) {
            listTemp.push([bunchOfRow[index][index2], bunchOfRow[index+2 > bunchOfRow.length ? 0 : index+1][index2]])
            objetcTemp[bunchOfRow[index][index2]+"|"+bunchOfRow[index+2 > bunchOfRow.length ? 0 : index+1][index2]] = bunchOfRow[index+2 > bunchOfRow.length ? 0 : index+1][index2]
        }
        if(listTemp.length == Object.keys(objetcTemp).length){
            answer++
        }
    }
    return answer
}

console.log(solution([["100","ryan","music","2"],["200","apeach","math","2"],["300","tube","computer","3"],["400","con","computer","4"],["500","muzi","music","3"],["600","apeach","music","2"]]))

