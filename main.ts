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
        . . . # #
        . . . # #
        . . # # #
        . # # # #
        # # # # #
        `)
    basic.showLeds(`
        . . # # .
        . . # # .
        . . # # .
        . # # # .
        # # # # .
        `)
    basic.showLeds(`
        . # # . .
        . # # . .
        . # # . .
        . # # . .
        # # # . .
        `)
})
