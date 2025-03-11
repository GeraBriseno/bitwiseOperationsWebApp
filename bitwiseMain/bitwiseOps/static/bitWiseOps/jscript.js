const byte1Array = [0,0,0,0,0,0,0,0];
const byte2Array = [0,0,0,0,0,0,0,0];

var byte1Decimal = 0;
var byte2Decimal = 0;

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

    var bitButtons = document.getElementsByClassName("bitButton");

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

    iterateOverButtons(bitButtons);
    
});


function iterateOverButtons(bitButtons){
    for (var i = 0; i < bitButtons.length; i++)
    {
        //On click for all bit buttons
        bitButtons[i].onclick = function(){

            var byte1DecimalElement = document.getElementById('decimalByte1');
            var byte2DecimalElement = document.getElementById('decimalByte2');
            
            //If the displayed bit value is 0
            if(Number(this.innerHTML) == 0){
                
                //Change its value to 1
                this.innerHTML = 1;

                //If we're on byte 1
                if(this.id.substring(4,5) == "1"){

                    //Set value of bit in byte 1 array
                    byte1Array[Number(this.id.substring(8))] = Number(1);

                    byte1Decimal = parseInt(byte1Array.join(''), 2);

                    byte1DecimalElement.innerHTML = byte1Decimal;

                }
                //Else if we're on byte 2
                else{

                    //Set value of bit in byte 2 array
                    byte2Array[Number(this.id.substring(8))] = Number(1);

                    byte2Decimal = parseInt(byte2Array.join(''), 2);

                    byte2DecimalElement.innerHTML = byte2Decimal;

                }
            
            }
            //Else if the displayed bit value is 1
            else{
                
                //Change its value to 0
                this.innerHTML = 0;

                //If we're on byte 1
                if(this.id.substring(4,5) == "1"){

                    //Set value of bit in byte 1 array
                    byte1Array[Number(this.id.substring(8))] = Number(0);

                    byte1Decimal = parseInt(byte1Array.join(''), 2);

                    byte1DecimalElement.innerHTML = byte1Decimal;

                }
                //Else if we're on byte 2
                else{

                    //Set value of bit in byte 2 array
                    byte2Array[Number(this.id.substring(8))] = Number(0);

                    byte2Decimal = parseInt(byte2Array.join(''), 2);

                    byte2DecimalElement.innerHTML = byte2Decimal;

                }

            }

        };

    }
};