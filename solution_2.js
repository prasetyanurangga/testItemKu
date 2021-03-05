function solution(numOfStage, users) {
    const answer = [];
    let totalStage = users.length

    for (let stageNow = 1; stageNow <= numOfStage; stageNow++) {
        const userStage = users.filter(stage => stage === stageNow);
        const countUserStage = userStage.length;
        answer.push({
            "stage": stageNow,
            "failure_rate": countUserStage / totalStage
        });

        totalStage -= countUserStage;
    }

    return answer.sort((left, right) =>
            left["failure_rate"] === right["failure_rate"] ? 0
                : left["failure_rate"] > right["failure_rate"] ? -1 : 1).map(item => item["stage"]);
}

console.log(solution(4, [4, 4, 4, 4, 4]));
