
var Planttype = prompt('what do you want Flowers or Cactus');

while (Planttype !== 'Flowers' && Planttype !== 'Cactus') {
 Planttype = prompt('what do you want Flowers or Cactus');
}

var plant = '';

if (Planttype === 'Cactus') {
    plant = '<img src="Cactus.jpg"/>';
} else if (Planttype === 'Flowers ') {
    plant = '<img src="Flowers.jpg"/>';
    }

    var yasPlant = prompt('enter Plant number ???  ');

var plants ='';
for (var i = 0; i< yasPlant; i++) {
    plant =plant +yasPlant;
}

    document.write(Planttype)

      
alert('Lets make life prosperous')
var Plantnumber= prompt('enter Plant number ?  ');

var Plantnumber ;
for (Plantnumber = 0; Planttype > 0; Plantnumber++) {
}
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
s