
/**
 * the led light libray for micro:bit
 */
//% width=500 height=500 icon="%5b" advanced="True"
namespace ledLight_mb {
    export enum ledLightBrightness {
        superLight = 255,
        light = 127,
        dark = 25,
        off = 0
    }
    //% block
    export function setBrightness(brightness: number | ledLightBrightness){
        led.setBrightness(brightness)
    }
}