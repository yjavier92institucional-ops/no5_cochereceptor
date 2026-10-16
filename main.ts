radio.onReceivedString(function (receivedString) {
    if (receivedString == "A") {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Back)
        basic.pause(100)
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
    } else if (receivedString == "B") {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Run)
        basic.pause(100)
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
    } else if (receivedString == "C") {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_SpinLeft)
        basic.pause(100)
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
    } else if (receivedString == "D") {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_SpinRight)
        basic.pause(100)
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
    }
})
basic.showIcon(IconNames.Heart)
radio.setGroup(1)
radio.setTransmitPower(7)
