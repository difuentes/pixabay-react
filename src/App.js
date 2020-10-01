import React,{useState,useEffect} from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import ListadoDeImagen from './components/ListadoImagenes';


function App() {

  //state de la app
  const[busqueda,guardarBusqueda ]=useState('');
  const[imagenes,guardarImagenes] = useState([]);
  const[paginaactual,guardarPaginaActual] = useState(1);
  const[totalpaginas,guardarTotalPaginas] = useState(1);  

  useEffect(()=>{
    if(busqueda.trim() ==='')return;

    const consultarApi=async()=>{

      //variables para consumir api
      const imagenesPorPagina = 15;
      const key = '18539645-5198d5897a7da1ecd93b30999';
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}&page=${paginaactual}`
      //consumo de api con fetch
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      //guardarResultado en state
      guardarImagenes(resultado.hits);
      //calcular total de paginas
      const calcularTotal = Math.ceil(resultado.totalHits / imagenesPorPagina);

      guardarTotalPaginas(calcularTotal);
    }
    consultarApi();
    //mover la pagina hacia arriba
    const jumbotron = document.querySelector('.jumbotron');
    jumbotron.scrollIntoView({behavior : 'smooth'});

    //eslint-disable-next-line

  },[busqueda,paginaactual])

  //definir la pagina anterior 
  const PaginaAnterior =()=>{
      const nuevaPaginaActual = paginaactual-1;
      
      if(nuevaPaginaActual === 0)return;

      guardarPaginaActual(nuevaPaginaActual);
  }
  //definir pagina siguiente
  const PaginaSiguiente =()=>{
    const nuevaPaginaActual = paginaactual + 1; 

    if(nuevaPaginaActual > totalpaginas)return;
    guardarPaginaActual(nuevaPaginaActual);
  }

  return (
    <div className="container">
      <div className="jumbotron bg-info mt-5">
        <Header/>
        <h1 className=" lead text-center text-white text-uppercase">Buscador de Imagenes</h1>
          <div className="mx-auto center">
            <Formulario
              guardarBusqueda={guardarBusqueda}
            />
        </div>
      </div>

      <div className="col-lg-12 row justify-content-center">
        <ListadoDeImagen
          imagenes={imagenes}
        />
        {(paginaactual === 1 )? null : 
          <button type="button" className="btn  btn-info  mr-1" onClick={PaginaAnterior}>&laquo;Anterior
          </button> 
        }  
      
        {(paginaactual === totalpaginas) ? null:
           <button type="button" onClick={PaginaSiguiente} className="btn  btn-info">
             Siguiente &raquo;
           </button>
         }
     
      </div>
    </div>
  );
}

export default App;
