

const array = ["superman", "batman", "ironman", "wonder woman", "aquaman", "thor", "flash", "hulk", "captain america", "spiderman"];

document.write(array);
document.write("<br>");
document.write(array.length);
document.write("<br>");
document.write((array.length)-1);

console.log(array);
console.log(array.length);
console.log((array.length)-1);


//cgpa calculate

let result= cgpa(n){
	let i=0;
	let sum=0;
	let input= [];
	let avrg;
	
	for(i=0; i<n; i++){
    input.push(promt("enter your gpa: " +(i+1));
    sum+= input[i];
	}
avrg=sum/n; 		
return avrg;

//document.write(`cgpa: ${result(3)}`);

document.write("cgpa: " +result(3));