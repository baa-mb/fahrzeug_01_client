input.onButtonPressed(Button.A, function () {
    radio.sendString("A")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("AB")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("B")
})
basic.showIcon(IconNames.SmallDiamond)
radio.setGroup(54)

