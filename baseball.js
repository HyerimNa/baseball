const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let makeNum = []
for (i = 0; i < 3; i++) {
    randomNum = Math.floor(Math.random() * 10)
    if (makeNum.indexOf(randomNum) === -1) {
        makeNum.push(randomNum)
    } else {
        i--
    }
}
console.log("컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!")
let count = 1
process.stdout.write(`${count}번째시도 : `)
rl.on("line", (x) => {
    let userNums = []
    let userNum = x

    if (!!Number(userNum) == false) { // 문자 입력 방지
        console.log('숫자를 입력해주세요.')
        process.stdout.write(`${count}번째시도 : `)
    }
    else if (userNum.length !== 3) { // 3자리 숫자 입력
        console.log('3자리 숫자를 입력해주세요.');
        process.stdout.write(`${count}번째시도 : `)
    } else {
        userNums = userNum.split('');

        let strikes = 0
        let balls = 0

        for (let i = 0; i < 3; i++) {// 숫자비교
            for (let j = 0; j < 3; j++) {
                if (makeNum[i] === Number(userNums[j])) {
                    if (i === j) {
                        strikes++
                    } else {
                        balls++
                    }
                }
            }
        }

        console.log(`${balls}b${strikes}s`)
        if (strikes === 3) {
            console.log(`${count}번만에 맞히셨습니다.\n 게임을 종료합니다.`)
            rl.close()
        }
        else {
            count++
            process.stdout.write(`${count}번째시도 : `)
        }
    }
})


rl.on('close', () => {
    process.exit();
});