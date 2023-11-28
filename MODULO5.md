***MÓDULO SOBRE REACT JS***

1. Explicar brevemente el concepto de ReactJS y sus principales características.

R//:
Es una biblioteca de javaScript que nos ayuda a simplificar el desarrollo de interfeces mediante la creacion de componentes reutilizables y la gestion a traves del virtual DOM.

2. Definir qué es un componente en ReactJS y mencionar los tipos de componentes que 
existen.

R//:
Un componente es una pieza reutilizable independiente

- *Componentes de clase*
- *Componentes funcionales*.

3. ¿Qué es el Virtual DOM y cuál es su función en ReactJS?

R//:
Es la representacion de la estructura, su funcion es mejorar el rendimiento y minimizar muchas acciones.

4. ¿Qué es JSX en ReactJS y porqué es importante?

R//:
JSX es  JavaScript XML   es importante por la manera mas comoda y legible del codigo.

5. ¿Qué es un Hook en ReactJS y cuál es su propósito?

R//:
Un Hook es una funcion que permite que los componentes accedan a los estados y otras caracteristicas de react su proposito es agilizar las funcionalidades de nuestro codigo.

6. Mencionar al menos tres tipos de Hooks en ReactJS y explicar brevemente para qué se 
utilizan.

R//:
- *useState* => permite tener un estado local en su mismo componente.

- *useEffect* => nos permite hacer efectos secundarios como cargar datos etc.

- *useContext* => permite tener informacion en estados globales disponible para todos los componentes.

7. ¿Cuáles son las reglas de uso para los Hooks en ReactJS?

R//:
- Solo en Componentes Funcionales
- Solo en el Nivel Superior
- Llamada en el Orden Consistente
- Solo en Funciones de React
- No en Bucles ni Condiciones Anidadas
- useEffect con Dependencias

8. Explicar qué es React Router DOM versión 6, para qué se utiliza y cuáles son sus 
principales componentes y Hooks.

R//:
Es una biblioteca que nos permite manejar la nevegacion en una sola pagina 

*Componentes principales*
- BrowserRouter
- Routes
- Route
- Outlet

*Hooks principales*
- useParams
- useLocation
- useNavigate
- useRoutes

9. Explicar cómo se realiza la navegación entre diferentes páginas utilizando React Router 
DOM.

R//:
Se utilizan los siguientes componentes link, Route y los Hooks useNavigate y useParams

*ejemplos*

- **link** => <Link to="/">Home</Link>

- **Route** => <Route path="/about" component={About} />

- **useNavegate** => const navigate = useNavigate(); 
navigate('/Home');

- **useParams** => const { id } = useParams(); y luego se return <h1>User ID: {id}</h1>

10. ¿Cómo se definen rutas en React Router DOM?

R//:
Los ejemplos 1 y 2 hacen esactamente lo mismo
1. 
<BrowserRouter>
 <Route path="/" component={Home} />
</BrowserRouter>

2. 
<Router>
 <Route path="/" component={Home} />
</Router>

11. Describir cómo crear un proyecto ReactJS con Vite

R//:
Para crear un proyecto con vite tenemos que abrir una terminal de nuestro pc puede ser en el escritorio y asignar el siguiente comando :
- npm create vite@latest nombre-app -- --template react.

12. Describir cómo desplegar un JSON server en cualquier Hosting free o servicio en la 
nube gratuito de su elección.

R//:
Lo primero es crear nuestra carpeta donde vamos a almacenar nuestro archivos luego de tener la carpeta abrimos el trabajo en un editor de codigo y en la terminal le damos el comando *npm init -y* para que nos cree el archivo package.json, luego el .gitignore para que nos oculte el archivo node-modules
dentro de la carpeta src se crea una carpeta data y un archivo index.js, dentro de carpeta data creamos un archivo db.json que es donde va nuestra base de datos y en el archivo index.js le agregamos la siguiente logica luego subimos nuestro proyecto a un repositorio y despues de subirlo a un repo conectamos la web de hoisting gratuito a el repositorio.

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(`${__dirname}/data/db.json`);
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 3000;

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

server.use(router);
server.use(middlewares);

server.listen(port, () => {
  console.log("JSON Server is running");
});

13. Describir cómo desplegar una aplicación en cualquier Hosting de su elección.

R//:
En nuestro archivo vite.config.js => se anexa la siguiente linea donde va el nombre del repositorio

  base: 'https://luis-restrepo98.github.io/findy-app',

y luego en nuestro archivo de rutas le anexamos la siguiente linea a el BrowserRouter => basename='/findy-app'   el nombre la app.

