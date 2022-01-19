Redeem Points 2.0

Esta pagina es una reversión de un proyecto que ya habia construido. La idea fue poder optimizar el diseño maquetando la idea e implementandola con Sass y Tailwind.

Basicamente es una pagina para canjear puntos, tanto los puntos, como los datos de usuario como los productos son extraídos de una API la cual sus endpoints se pasan como variables de entorno. Esta integración con la base de datos a la vez se integra con Redux manteniendo en el area local variables que permiten organizar mejor la información y hacer que la información persista en el navegar.

Sobre el diseño, se penso mucho el proyecto desde una paleta de 3 colores mas blanco y negro. Que sea sencilla pero que a la vez tenga estilo. Como inspiración a esta escala de colores se penso en los zapatos gucci clasicos que tienen un juego de colores parecido:


![510422bb8191d28f96a98ee27759ab91--gucci-gucci-gucci-shoes](https://user-images.githubusercontent.com/63560574/150227007-814df763-40d3-47d0-8518-5c8ed3773141.jpg)


Sobre esta base se hizo un esquema en Figma el cual se siguio para la elaboración de esta pagina:


![Untitled (3)_page-0001](https://user-images.githubusercontent.com/63560574/150232936-5f397897-ca02-48bd-952f-d00621dd200e.jpg)



Se trata que la pagina sea sencilla pero sin dejar de tener sus detalles en la navegación. Por ejemplo, al pasar el mouse sobre el titulo puede observarse la siguiente animación:


![Vídeo sin título ‐ Hecho con Clipchamp](https://user-images.githubusercontent.com/63560574/150229080-27a6c463-d5ee-472a-94e5-c67203a062e9.gif)


Los productos que se ven en la pagina se pueden canjear por puntos. estos productos pueden ordenarse de diferentes maneras:

![sort](https://user-images.githubusercontent.com/63560574/150231868-f7950913-a1b8-43a7-990c-801f18ac7381.gif)


 estos puntos se obtienen haciendo click en el signo "+" de la parte superior de la pagina. Si tenes los puntos suficientes el objeto que quieras canjear te permitirá hacerlo presionando en el icono de abajo a la izquierda del producto. Si no lo puedes hacer, no te permitirá hacerlo y la manito abajo al pasar el mouse te dirá cuantos puntos necesitas para poder canjear el producto.


![redeem cant redeem](https://user-images.githubusercontent.com/63560574/150231789-c61e300c-ec4e-4aa4-a0f9-db350d086728.gif)


en el baul, que se accede con el link de arriba de la pagina, te llevará a una sección donde podrás ver todos los objetos que se han canjeado y sus cantidades. Estos pueden ordenarse por precio o por cantidad de lo que se tiene canjeado.

![sort objects](https://user-images.githubusercontent.com/63560574/150231901-3b16405c-dca9-4bca-870c-2c6277a8a686.gif)



Para este proyecto, ademas, se utilizo: React, Next.js y React-select.
