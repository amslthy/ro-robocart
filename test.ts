// Basic smoke test for the RoboCart extension.
// This does not run on real hardware in the simulator for motor/sensor
// functions, but it verifies the package compiles and blocks are wired up.

robocart.move(MotorDirection.Forward, 128)
robocart.brake()
robocart.turn(TurnDirection.Left, 128)
robocart.setMotorsSpeed(100, -100)
//robocart.setHeadlight(HeadlightChannel.All, robocart.digitalStatePicker(DigitalIoState.On))
//robocart.toggleHeadlight(HeadlightChannel.Left)
robocart.isLineDetectedOn(LinePosition.Center)
robocart.readLinePosition()
robocart.readUltrasonic()
