
function solution(record) {
    var answer = [];
    var user = {};
    record.forEach(element => {
        var bunchOfWord = element.split(" ")
        var command = bunchOfWord[0] == undefined ? "" : bunchOfWord[0]
        var firstArgument = bunchOfWord[1] == undefined ? "" : bunchOfWord[1]
        var secondArgument = bunchOfWord[2] == undefined ? "" : bunchOfWord[2]

        switch(command){
            case "Enter":
                answer.push({"uidUser": firstArgument, "message": secondArgument+" came in."})
                answer.map(function(value){
                    if(value['uidUser'] == firstArgument){
                        value["message"] = value["message"].replace(user[firstArgument], secondArgument)
                    }
                });
                user[firstArgument] = secondArgument;
                break

            case "Leave":
                answer.push({"uidUser": firstArgument, "message": user[firstArgument]+" has left."})
                break

            case "Change":
                answer.map(function(value){
                    if(value['uidUser'] == firstArgument){
                        value["message"] = value["message"].replace(user[firstArgument], secondArgument)
                    }
                });
                user[firstArgument] = secondArgument;
                break    
        }
    });
    answer = answer.map(function(value){
        return value["message"]
    });
    return answer;
}


console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]))