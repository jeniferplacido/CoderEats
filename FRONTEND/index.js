fetch('localhost:8080/api/pedido')
.then(response => response.json())
.then(json => console.log(json))