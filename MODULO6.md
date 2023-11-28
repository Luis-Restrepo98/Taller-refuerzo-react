***MÓDULO SOBRE GESTION DE ESTADOS Y DATOS CON REACT CONTEXT Y USEREDUCER***

1. ¿Qué es React Context y para qué se utiliza en el desarrollo web con React?

R//:
Es una caracteristica de react que nos permite tener estados globales para poder compartir entre otros componentes.

2. Describir cómo se crea un contexto en React y cómo se proporciona y consume 
información a través de él.

R//:
Para crear un contexto debemos utilizar *React.createContext()*
luego declaramos una variable con el nombre  que uno quiera *ejemplo* => const MiContexto = React.createContext();
lo siguiente es en nuestro archivo donde tengamos las rutas vamos a envolver todos los componentes con 
<MiContexto.Provider value={informacionCompartida}>
    //aca van los otros componentes
</MiContexto.Provider>

se crea una funcion y luego se le dan estos valores =>  const contextoAdquirido = useContext(MiContexto);

 <p>{contextoAdquirido}</p>.

3. ¿Cuál es la ventaja de utilizar React Context en lugar de pasar props a través de múltiples 
componentes?

R//:
Evita la propragacion de props, simplifica el codigo, facilita las configuraciones, simplifica el manejo de los estados globales.

4. Explicar el propósito de useReducer en React y cómo se diferencia de useState.

R//:
El propositp es gestionar estados mas complejos y globales y useState es funcional para los estados locales de cada componente que no sean tan complejos.

5. Describe los argumentos que toma la función useReducer.

R//:
Resive el estado actual y el action.

6. ¿Por qué es útil utilizar useReducer para gestionar el estado en aplicaciones más 
complejas?

R//:
Por la actualizacion con multiples condiciones, por el manejo de las acciones asincronas, por la optimizacion de codigo etc.

7. ¿Cómo se puede utilizar React Context junto con useReducer para gestionar el estado 
global en una aplicación de React?

R//:
Se puede crear un contexto que va hacer el contenedor para el estado global y useReducer va en el componente principal para poder tener manejo de los estados desde los otros componentes.

8. ¿Por qué es importante tener un sistema de gestión de estado global en aplicaciones 
React más grandes?

R//Facilita la comunicacion, evita la propagacion de props, mejora el rendimiento, y simplifica el codigo.

9. Menciona al menos tres ventajas de utilizar una combinación de React Context y 
useReducer en comparación con el manejo de estado local en componentes.

R//:
- La gestion de los estados globales
- Mejora la escalabilidad
- Centraliza la logica

10. ¿En qué situaciones podría ser beneficioso migrar de un enfoque de manejo de estado 
local a un enfoque de estado global utilizando React Context y useReducer?

R//:
Cuando debe de ser compartido entre diferentes componentes, por la escalabilidad, y por la complejidad de majo de un estado como acciones y accesos globales.

