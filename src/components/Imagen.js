import React from 'react';

const Imagen = ({imagen}) => {

    //extraer valiables

    const {largeImageURL,likes,views,tags,previewURL} = imagen;

    return (
       <div className="col-12  col-sm-6 col-md-4 col-lg-3 mb-2">
            <div className="card">
                <img src={previewURL} alt={tags} className="img-fluid card-img-top"/>
                <div className="card-body">
                    <p className="card-text justify-content-center" >Me Gusta: {likes}  </p>
                    <p className="card-text justify-content-center">Visitas: {views}</p>

                </div>
                <div className="card-footer">
                    <a href={largeImageURL} target="_blank" rel="noopener noreferrer" className="btn btn-info btn-block"> Ver Imagen</a>
                </div>
            </div>
       </div>
      );
}
 
export default Imagen;