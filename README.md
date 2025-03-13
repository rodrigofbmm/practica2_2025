Para esta segunda práctica se pide usar la siguiente API



https://swapi.dev/documentation



Constará de 2 páginas



index (3 pts): En esta página se encontrará un input de texto en el centro de la pantalla (tanto eje vertical como eje horizontal) y un botón justo debajo para buscar

/personaje (7 pts): En esta página se mostrará toda la información que devuelva la API. Se tendrá que usar los url.searchParams de la url completa para recuperar la información del personaje:

Ejemplo: /personaje?name=luke
El diseño de esta página será libre para el alumno, se tendrá en cuenta el uso de CSS y la distribución de los elementos para puntuar. En caso de solamente mostrar la información a pelo sin estilizarlo supondrá como máximo el 50% de la nota del apartado

Se deberá recoger solo el primer resultado

En caso de que no haya resultados se le mostrara un mensaje al usuario en el centro de la pantalla que dice:
No se ha encontrado el personaje

Ejemplo de llamada a la api
https://swapi.dev/api/people/?search=r2&format=json

Los enlaces en la respuesta te abren la página web en una pestaña nueva

La funcionalidad básica funciona:
Busco algo en la página index y me manda a la página /personaje?name=loquesea


Recursos adicionales
https://www.youtube.com/watch?v=Mp9IwDHrtG4
https://www.youtube.com/watch?v=CQChGlGn4qU
https://fresh.deno.dev/docs/getting-started/form-submissions
