
var Planttype=prompt (' enter the Plant type?');
var Plantnumber=prompt ('enter Plant number ?  ');
var Discount;

alert('Lets make life prosperous')
if (Plantnumber > 18) {
    Discount = '25%'; 
}
else if (Plantnumber > 12) {
    Discount = '15%';
}

else if (Plantnumber<12) {
    Discount= ' 5%';
}

else {
    Discount = 'Welcome';
}
document.write("Enjoy your"+Discount ) 