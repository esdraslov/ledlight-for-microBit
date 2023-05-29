
/**
 * the led light libray for micro:bit
 */
//% width=500 height=500 icon="U+1F4AB" advanced=true blocks="normal config"
namespace ledLight_mb {
    export enum ledLightBrightness {
        //% block="super light"
        superLight = 255,
        //% block="light"
        light = 200,
        //% block="dark"
        dark = 127,
        //% block="super dark"
        superDark = 25,
        //% block="off"
        off = 0
    }
    //% block, inlineInputMode = external
    export function setBrightness(brightness: number | ledLightBrightness){
        led.setBrightness(brightness)
    }
    //% block
    export function getLightBrightness(b: ledLightBrightness){
        return b
    }
}