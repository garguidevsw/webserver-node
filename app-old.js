const http = require('http');

http.createServer((req, res) => {

    
    // Servir un json
    // res.writeHead(200, {'Content-Type': 'application/json'});
    // const persona = {
    //     nombre: 'Julio',
    //     edad: 36
    // }
    // res.write(JSON.stringify(persona));

    // Servir un CSV descargable
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    res.writeHead(200, {'Content-Type': 'application/csv'});

    res.write('id, nombre\n');
    res.write('1, may\n');
    res.write('2, zay\n');
    res.write('3, jul\n');

    res.end();
}).listen( 8080 );

console.log('Escuchando el puerto', 8080);