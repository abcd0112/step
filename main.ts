input.onButtonPressed(Button.A, function () {
    Step = 0
})
input.onGesture(Gesture.Shake, function () {
    Step += 1
    led.stopAnimation()
})
let Step = 0
Step = 0
basic.forever(function () {
    basic.showNumber(Step)
    basic.showLeds(`
        # . . . .
        # # # . .
        # . . . .
        # . . . .
        . # . . .
        `)
    basic.showLeds(`
        . # . . .
        # # # # .
        . # . . .
        . # . . .
        # . # . .
        `)
    basic.showLeds(`
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        . # . # .
        `)
    basic.showLeds(`
        . . . # .
        . # # # #
        . . . # .
        . . . # .
        . . # . #
        `)
    basic.showLeds(`
        . . . . #
        . . # # #
        . . . . #
        . . . . #
        . . . # .
        `)
})
basic.forever(function () {
    if (true) {
        if (Step == 50) {
            music.playMelody("C5 E G D G F A F ", 500)
        }
    } else if (false) {
        if (Step == 25) {
            music.playMelody("C5 E G D G F A F ", 500)
        }
    } else {
        if (Step == 15) {
            music.playMelody("C5 E G D G F A F ", 500)
        }
    }
})
