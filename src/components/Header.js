import React from 'react';
import styled from '@emotion/styled'


const Divcenter = styled.div`
    text-align:center;
`

const Header = () => {
    return (
        <Divcenter >
            <h1 className="text-white">DiFuentes - API-Pixabay</h1>
        </Divcenter>
        
      );
}
 
export default Header;