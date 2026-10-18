radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_SpinLeft)
    } else if (receivedNumber == 2) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_SpinRight)
    } else if (true) {
        basic.clearScreen()
    }
    if (receivedNumber == 3) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Run)
    } else if (receivedNumber == 4) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Back)
    } else if (true) {
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
})
basic.showString("¡Hola!")
radio.setGroup(2)
basic.forever(function () {
    if (input.rotation(Rotation.Roll) < -10) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        radio.sendNumber(1)
    } else if (input.rotation(Rotation.Roll) > 10) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        radio.sendNumber(2)
    } else if (true) {
        basic.clearScreen()
    }
    if (input.rotation(Rotation.Pitch) < -10) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        radio.sendNumber(3)
    } else if (input.rotation(Rotation.Pitch) > 10) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        radio.sendNumber(4)
    } else if (true) {
        basic.clearScreen()
    }
})
