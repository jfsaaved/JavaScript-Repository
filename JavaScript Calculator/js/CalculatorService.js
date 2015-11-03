'use strict';

/*
Julian Saavedra
julian.felipe.saavedra@gmail.com
*/

function CalculatorService() {

	var digits ={
		zero: '0',
		one: '1',
		two: '2',
		three: '3',
		four: '4',
		five: '5',
		six: '6',
		seven: '7',
		eight: '8',
		nine: '9'
	};
	
	var calculation = '';
	var new_digits = false;
	var returnValue = digits.zero;
	
	this.enterDigit = function(digit){
		if(returnValue.charAt(0) == 0)
			returnValue = '';
			
		if(new_digits == true){
			returnValue = '';
			new_digits = false;
		}
		
		for(var key in digits) {
			if(digit == key){
				calculation += digits[key];
				returnValue += digits[key];
				return;
			}
		}
		returnValue = 'ERROR';
	}
	
	this.enterOperation = function(operation){
		if(operation == '+' || operation == '-' || operation == '*' || operation == '/'){
			calculation += ' ' + operation + ' ';
			new_digits = true;
		}
		else{
			returnValue = 'ERROR';
		}
	}
	
	this.enterEquals = function(){
		var temp_holder = 0;
		
		var final_calc = 0;
		var calc_array = [];
		calc_array = calculation.split(" ");
		
		if( calc_array[calc_array.length-1] == ''){
			calc_array.pop();
		}

		if(calc_array.length%2 == 0){
			returnValue = 'ERROR';
			return;
		}

		var i = 0;
		while(i < calc_array.length){
		
			if(calc_array[i] == '+' || calc_array[i]== '-' || calc_array[i] == '*' || calc_array[i] == '/'){
				if(calc_array[i] == '+')
					final_calc = final_calc + temp_holder;
				else if(calc_array[i] == '-')
					final_calc = final_calc - temp_holder;
				else if(calc_array[i] == '*')
					final_calc = final_calc * temp_holder;
				else if(calc_array[i] == '/')
					final_calc = final_calc / temp_holder;
					
				if(i+2 <= calc_array.length){
					i++;
					temp_holder = parseInt(calc_array[i+2]);
				}
			}
			else{
				final_calc = parseInt(calc_array[i]);
				temp_holder = parseInt(calc_array[i+2]);
			}
			i++;
		}
		returnValue = final_calc.toString();
		
	}
	
	this.enterClear = function(){
		returnValue = digits.zero;
	}

    this.getDisplay = function () {
        return returnValue;
    };

}
