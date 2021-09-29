input.onButtonPressed(Button.A, function () {
    radio.sendString("A")
    lauf = 1
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("AB")
    lauf = 0
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("B")
    lauf = 1
})
let lauf = 0
basic.showIcon(IconNames.SmallDiamond)
radio.setGroup(54)
lauf = 0
basic.forever(function () {
    if (lauf == 1) {
        radio.sendString(convertToText(input.acceleration(Dimension.X)))
        basic.pause(200)
    }
})
