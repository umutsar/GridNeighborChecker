let ilkDizi =
    [
        [9, 4],
        [6, 3],
        [5, 8]
    ]

const isNextTo = (a, b, c, d) => {

    if (a == c) {
        if(Math.abs(b - d) == 1) {
            return 1;
        }
        else {
            return 0;
        }
    }
    else if(b == d) {
        if(Math.abs(a - c) == 1) {
            return 1;
        }
        else {
            return 0
        }
    }
    return 0;
}

console.log(
    `
        X   ${ilkDizi[0][0]}  |  ${ilkDizi[0][1]}  |  ${ilkDizi[1][0]}  |  ${ilkDizi[1][1]}  |  ${ilkDizi[2][0]}  |  ${ilkDizi[2][1]} \n
        ${ilkDizi[0][0]}   ${isNextTo(0,0, 0,0)}     ${isNextTo(0,1 , 0,0)}     ${isNextTo(1,0 , 0,0)}     ${isNextTo(1,1 , 0,0)}     ${isNextTo(2,0 , 0,0)}     ${isNextTo(2,1 , 0,0)} \n
        -\n
        ${ilkDizi[0][1]}   ${isNextTo(0,0 , 0,1)}     ${isNextTo(0,1 , 0,1)}     ${isNextTo(1,0 , 0,1)}     ${isNextTo(1,1 , 0,1)}     ${isNextTo(2,0 , 0,1)}     ${isNextTo(2,1 , 0,1)} \n
        -\n
        ${ilkDizi[1][0]}   ${isNextTo(0,0 , 1,0)}     ${isNextTo(0,1 , 1,0)}     ${isNextTo(1,0 , 1,0)}     ${isNextTo(1,1 , 1,0)}     ${isNextTo(2,0 , 1,0)}     ${isNextTo(2,1 , 1,0)} \n
        -\n
        ${ilkDizi[1][1]}   ${isNextTo(0,0 , 1,1)}     ${isNextTo(0,1 , 1,1)}     ${isNextTo(1,0 , 1,1)}     ${isNextTo(1,1 , 1,1)}     ${isNextTo(2,0 , 1,1)}     ${isNextTo(2,1 , 1,1)} \n
        -\n
        ${ilkDizi[2][0]}   ${isNextTo(0,0 , 2,0)}     ${isNextTo(0,1 , 2,0)}     ${isNextTo(1,0 , 2,0)}     ${isNextTo(1,1 , 2,0)}     ${isNextTo(2,0 , 2,0)}     ${isNextTo(2,1 , 2,0)} \n
        -\n
        ${ilkDizi[2][1]}   ${isNextTo(0,0 , 2,1)}     ${isNextTo(0,1 , 2,1)}     ${isNextTo(1,0 , 2,1)}     ${isNextTo(1,1 , 2,1)}     ${isNextTo(2,0 , 2,1)}     ${isNextTo(2,1 , 2,1)} \n
    `
)
