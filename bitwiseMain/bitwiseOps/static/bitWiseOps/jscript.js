const byte1Array = [0,0,0,0,0,0,0,0];
const byte2Array = [0,0,0,0,0,0,0,0];
const byte3Array = [0,0,0,0,0,0,0,0];

var byte1Decimal = 0;
var byte2Decimal = 0;
var byte3Decimal = 0;

var andButtonState = 0;
var orButtonState = 0;
var xorButtonState = 0;
var notButtonState = 0;
var leftButtonState = 0;
var rightButtonState = 0;
var opButtonPressed = 0;

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
    var bitsByte1 = document.getElementsByClassName("bitByte1");
    var bitsByte2 = document.getElementsByClassName("bitByte2");
    var bitsByte3 = document.getElementsByClassName("bitByte3");

    var byte1DecimalElement = document.getElementById('decimalByte1');
    var byte2DecimalElement = document.getElementById('decimalByte2');
    var byte3DecimalElement = document.getElementById('decimalByte3');

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

    var andButton = document.getElementById('andButton-id');
    var orButton = document.getElementById('orButton-id');
    var xorButton = document.getElementById('xorButton-id');
    var notButton = document.getElementById('notButton-id');
    var leftButton = document.getElementById('leftButton-id');
    var rightButton = document.getElementById('rightButton-id');

    bitButtonsFunc(bitButtons, byte1DecimalElement, byte2DecimalElement);

    andButtonFunc(andButton, orButton, xorButton, bitsByte3, byte3DecimalElement);

    orButtonFunc(andButton, orButton, xorButton, bitsByte3, byte3DecimalElement);

    xorButtonFunc(andButton, orButton, xorButton, bitsByte3, byte3DecimalElement);

    notButtonFunc(notButton, bitsByte2, bitsByte3, byte2DecimalElement, byte3DecimalElement);

    leftButtonFunc(leftButton, bitsByte1, byte1DecimalElement);

    rightButtonFunc(rightButton, bitsByte1, byte1DecimalElement)
    
});


function andButtonFunc(andButton, orButton, xorButton, bitsByte3, byte3DecimalElement){

    andButton.onclick = function()
    {   
        if(0 == andButtonState)
        {
            andButtonState = 1;
            this.style.background = '#04AA6D';
            orButtonState = 0;
            orButton.style.background = '';
            xorButtonState = 0;
            xorButton.style.background = '';
        }

        for(var i = 0; i < byte1Array.length; i++)
        {
            if(byte1Array[i] == 1 && byte1Array[i] == byte2Array[i])
            {
                byte3Array[i] = 1;
                bitsByte3[i].innerHTML = 1;
                byte3Decimal = parseInt(byte3Array.join(''), 2);
                byte3DecimalElement.innerHTML = byte3Decimal;
            }
            else
            {
                byte3Array[i] = 0;
                bitsByte3[i].innerHTML = 0;
                byte3Decimal = parseInt(byte3Array.join(''), 2);
                byte3DecimalElement.innerHTML = byte3Decimal;
            }
        }
    }

};

function orButtonFunc(andButton, orButton, xorButton, bitsByte3, byte3DecimalElement){

    orButton.onclick = function()
    {
        if(0 == orButtonState)
        {
            orButtonState = 1;
            this.style.background = '#04AA6D';
            andButtonState = 0;
            andButton.style.background = '';
            xorButtonState = 0;
            xorButton.style.background = '';
        }

        for(var i = 0; i < byte1Array.length; i++)
        {
            if(byte1Array[i] == 1 || byte2Array[i] == 1)
            {
                byte3Array[i] = 1;
                bitsByte3[i].innerHTML = 1;
                byte3Decimal = parseInt(byte3Array.join(''), 2);
                byte3DecimalElement.innerHTML = byte3Decimal;
            }
            else
            {
                byte3Array[i] = 0;
                bitsByte3[i].innerHTML = 0;
                byte3Decimal = parseInt(byte3Array.join(''), 2);
                byte3DecimalElement.innerHTML = byte3Decimal;
            }
        }
    }

};

function xorButtonFunc(andButton, orButton, xorButton, bitsByte3, byte3DecimalElement){

    xorButton.onclick = function()
    {   
        if(0 == xorButtonState)
        {
            xorButtonState = 1;
            this.style.background = '#04AA6D';
            andButtonState = 0;
            andButton.style.background = '';
            orButtonState = 0;
            orButton.style.background ='';
        }

        for(var i = 0; i < byte1Array.length; i++)
        {
            if(byte1Array[i] != byte2Array[i])
            {
                byte3Array[i] = 1;
                bitsByte3[i].innerHTML = 1;
                byte3Decimal = parseInt(byte3Array.join(''), 2);
                byte3DecimalElement.innerHTML = byte3Decimal;
            }
            else
            {
                byte3Array[i] = 0;
                bitsByte3[i].innerHTML = 0;
                byte3Decimal = parseInt(byte3Array.join(''), 2);
                byte3DecimalElement.innerHTML = byte3Decimal;
            }
        }
    }

};

function notButtonFunc(notButton, bitsByte2, bitsByte3, byte2DecimalElement, byte3DecimalElement){

    notButton.onclick = function()
    {

        for(var i = 0; i < byte1Array.length; i++)
        {
            if(byte2Array[i] == 1)
            {
                byte2Array[i] = 0;
                bitsByte2[i].innerHTML = 0;
                byte2Decimal = parseInt(byte2Array.join(''), 2);
                byte2DecimalElement.innerHTML = byte2Decimal;

                byte3Array[i] = 0;
                bitsByte3[i].innerHTML = 0;
                byte3Decimal = parseInt(byte3Array.join(''), 2);
                byte3DecimalElement.innerHTML = byte3Decimal;
            }
            else
            {
                byte2Array[i] = 1;
                bitsByte2[i].innerHTML = 1;
                byte2Decimal = parseInt(byte2Array.join(''), 2);
                byte2DecimalElement.innerHTML = byte2Decimal;

                byte3Array[i] = 0;
                bitsByte3[i].innerHTML = 0;
                byte3Decimal = parseInt(byte3Array.join(''), 2);
                byte3DecimalElement.innerHTML = byte3Decimal;
            }
        }
    }

};

function leftButtonFunc(leftButton, bitsByte1, byte1DecimalElement){

    leftButton.onclick = function()
    {

        for(var i = 1; i < byte1Array.length; i++)
        {

            byte1Array[i-1] = byte1Array[i];
            bitsByte1[i-1].innerHTML = byte1Array[i];

        }

        byte1Array[7] = 0;
        bitsByte1[7].innerHTML = 0;
        byte1Decimal = parseInt(byte1Array.join(''), 2);
        byte1DecimalElement.innerHTML = byte1Decimal;
    }

};

function rightButtonFunc(rightButton, bitsByte1, byte1DecimalElement){

    rightButton.onclick = function()
    {

        for(var i = byte1Array.length-1; i > 0; i--)
        {

            byte1Array[i] = byte1Array[i-1];
            bitsByte1[i].innerHTML = byte1Array[i-1];

        }

        byte1Array[0] = 0;
        bitsByte1[0].innerHTML = 0;
        byte1Decimal = parseInt(byte1Array.join(''), 2);
        byte1DecimalElement.innerHTML = byte1Decimal;
    }

};

function bitButtonsFunc(bitButtons, byte1DecimalElement, byte2DecimalElement){
    for (var i = 0; i < bitButtons.length; i++)
    {
        //On click for all bit buttons
        bitButtons[i].onclick = function()
        {   
            
            //If the displayed bit value is 0
            if(Number(this.innerHTML) == 0)
            {
                
                //Change its value to 1
                this.innerHTML = 1;

                //If we're on byte 1
                if(this.id.substring(4,5) == "1"){

                    //Set value of bit in byte 1 array
                    byte1Array[Number(this.id.substring(8))] = Number(1);

                    //Convert binary to decimal
                    byte1Decimal = parseInt(byte1Array.join(''), 2);

                    //Display decimal value
                    byte1DecimalElement.innerHTML = byte1Decimal;

                }
                //Else if we're on byte 2
                else{

                    //Set value of bit in byte 2 array
                    byte2Array[Number(this.id.substring(8))] = Number(1);
                    
                    //Convert binary to decimal
                    byte2Decimal = parseInt(byte2Array.join(''), 2);

                    //Display decimal value
                    byte2DecimalElement.innerHTML = byte2Decimal;

                }
            
            }
            //Else if the displayed bit value is 1
            else
            {
                
                //Change its value to 0
                this.innerHTML = 0;

                //If we're on byte 1
                if(this.id.substring(4,5) == "1"){

                    //Set value of bit in byte 1 array
                    byte1Array[Number(this.id.substring(8))] = Number(0);

                    //Convert binary to decimal
                    byte1Decimal = parseInt(byte1Array.join(''), 2);

                    //Display decimal value
                    byte1DecimalElement.innerHTML = byte1Decimal;

                }
                //Else if we're on byte 2
                else{

                    //Set value of bit in byte 2 array
                    byte2Array[Number(this.id.substring(8))] = Number(0);
                    
                    //Convert binary to decimal
                    byte2Decimal = parseInt(byte2Array.join(''), 2);

                    //Display decimal value
                    byte2DecimalElement.innerHTML = byte2Decimal;

                }

            }

        };

    }
};