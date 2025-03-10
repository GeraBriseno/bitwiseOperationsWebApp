const byte1Array = [0,0,0,0,0,0,0,0];
const byte2Array = [0,0,0,0,0,0,0,0];

function iterateOverByte(byteElement){

    var byteBits = byteElement.children;

    for (var i = 0; i < byteBits.length; i++)
    {
        if(byteElement.id === "byte1-id"){
            byte1Array[i] = Number(byteBits[i].innerHTML);
        }
        else{
            byte2Array[i] = Number(byteBits[i].innerHTML);
        }
    }

    console.log(byte1Array);
    console.log(byte2Array);
};

window.addEventListener("load", function() {

    var byte1Element = document.getElementById('byte1-id');
    var byte2Element = document.getElementById('byte2-id');

    var byte1bit8 = document.getElementById('byte1bit8');
    var byte1bit7 = document.getElementById('byte1bit7');
    var byte1bit6 = document.getElementById('byte1bit6');
    var byte1bit5 = document.getElementById('byte1bit5');
    var byte1bit4 = document.getElementById('byte1bit4');
    var byte1bit3 = document.getElementById('byte1bit3');
    var byte1bit2 = document.getElementById('byte1bit2');
    var byte1bit1 = document.getElementById('byte1bit1');

    var byte2bit8 = document.getElementById('byte2bit8');
    var byte2bit7 = document.getElementById('byte2bit7');
    var byte2bit6 = document.getElementById('byte2bit6');
    var byte2bit5 = document.getElementById('byte2bit5');
    var byte2bit4 = document.getElementById('byte2bit4');
    var byte2bit3 = document.getElementById('byte2bit3');
    var byte2bit2 = document.getElementById('byte2bit2');
    var byte2bit1 = document.getElementById('byte2bit1');

    iterateOverByte(byte1Element);
    
});