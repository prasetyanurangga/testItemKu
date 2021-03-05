function solution(numOfStage, users) {
    const answer = [];
    let totalStage = users.length

    for (let stage = 1; stage <= numOfStage; stage++) {
        const userStage = users.filter(stage => stage === stage);
        const countUserStage = userStage.length;
        answer.push({
            "stage": userStage,
            "failure_rate": countUserStage / totalStage
        });

        totalStage -= currentTotal;
    }

    return answer.sort((left, right) =>
            left["failure_rate"] === right["failure_rate"] ? 0
                : left["failure_rate"] > right["failure_rate"] ? -1 : 1).map(item => item["stage"]);
}

console.log(solution(4, [4, 4, 4, 4, 4]));