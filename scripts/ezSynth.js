let context = new( window.AudioContext || window.webkitAudioContext )();

class Beep {
    constructor( type, freq, length ) {
        let oscillator = context.createOscillator();
        oscillator.type = type;
        oscillator.frequency.value = freq;
        oscillator.connect( context.destination );
        oscillator.start();
        oscillator.stop( context.currentTime + length );
        return oscillator;
    } // end constructor
} // end Beep class