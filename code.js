input.onGesture(Gesture.LogoUp, function () {
    basic.clearScreen()
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.clearScreen()
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showNumber(step)
})
input.onButtonPressed(Button.AB, function () {
    step = 0
})
input.onGesture(Gesture.Shake, function () {
    step += 1
})
input.onGesture(Gesture.TiltRight, function () {
    basic.clearScreen()
})
input.onGesture(Gesture.LogoDown, function () {
    basic.clearScreen()
})
let step = 0
step = 0
basic.forever(function () {
	
})
basic.forever(function () {
    if (step == 5) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.Happy)
        music.startMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Once)
    }
})
