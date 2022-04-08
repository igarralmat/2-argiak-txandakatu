input.onButtonPressed(Button.A, function () {
    while (true) {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.RED)
        basic.pause(500)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.OFF)
        basic.pause(500)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.CYAN)
        basic.pause(500)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.OFF)
        basic.pause(500)
    }
})
DFRobotMaqueenPlus.I2CInit()
