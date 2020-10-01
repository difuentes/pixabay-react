import React,{useState} from 'react';
import Error from '../components/Error';

const Formulario = ({guardarBusqueda}) => {

    const[tipo,guardarTipo] = useState('');
    const[error,guardarError] = useState(false);

    const buscarImagenes = e =>{
        e.preventDefault();
            //validar campo 
            if(tipo.trim()===''){
                guardarError(true);
                setTimeout(()=>{
                    guardarError(false);
                },2000)
                return ;
            }
            guardarError(false);

            //enviar termino de busqueda
            guardarBusqueda(tipo);
    }

    return (  
        <form
            onSubmit={buscarImagenes}
        >
            <div className="row mx-auto">
                    <div className="form-group col-md-12">
                        <input 
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Busca una imagen,ejemplo: Diseño o Arte "
                            onChange={ e => guardarTipo(e.target.value)}
                        />

                    </div>

                    <div className="form-group col-md-10 mx-auto">
                        <input 
                            type="submit"
                            className="btn btn-primary btn-block"
                            placeholder="Busca una imagen,ejemplo: Diseño o Arte "
                            value="Buscar"
                        />

                    </div>
                    {error ? (<Error mensaje="Todos los campos son obligatorios"/>) : null}
            </div>
        </form>
     );
}
 
export default Formulario;