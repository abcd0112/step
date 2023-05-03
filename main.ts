input.onGesture(Gesture.Shake, function () {
    Step += 1
    basic.showNumber(1)
    Step += 1
    basic.showNumber(2)
    Step += 1
    basic.showNumber(3)
})
let Step = 0
basic.showNumber(Step)
basic.forever(function () {
    basic.showNumber(Step)
})
