import React, {useState, useMemo} from 'react';
import camera from '../../assets/camera.svg';
import './styles.css';
import api from '../../services/api';

export default function New({history}){
const [company, setCompany] = useState('');
const [techs, setTechs] = useState('');
const [price, setPrice] = useState('');
const [thumbnail, setThumbnail] = useState(null);

const preview = useMemo(() =>{

  return thumbnail ? URL.createObjectURL(thumbnail) : null;
}, [thumbnail])

 async function handleSubmit(event){
   event.preventDefault();
   const data = new FormData();
   const user_id = localStorage.getItem('user_id')
   data.append('thumbnail', thumbnail);
   data.append('company', company);
   data.append('techs', techs);
   data.append('price', price);
   await api.post('/spots', data, {headers: {user_id}
  })
 history.push('/dashboard')
 }
  return (
  <form onSubmit={handleSubmit}>
     <label 
     id="thumbnail" 
     style={{backgroundImage: `url(${preview})`}}  className={thumbnail ? 'has-thumbnail': ''} >
        <input type="file" onChange={event =>setThumbnail(event.target.files[0])} />
        <img src={camera} alt="Select img"/>

     </label>


       {/* empresa */}
      <label htmlFor="company">EMPRESA * </label>
      <input id="company" 
      placeholder="Sua empresa incrível..."
      value={company}
      onChange={event => setCompany(event.target.value)}
      />

     {/* tecnologias */}
<label htmlFor="techs">TECNOLOGIAS * <span>(separadas por <strong>vírgulas</strong>.)</span></label>
      <input id="techs" 
      placeholder="Quais tecnologias usam?"
      value={techs}
      onChange={event => setTechs(event.target.value)}
      />

       {/* tecnologias */}
<label htmlFor="price">VALOR DA DiÁRIA * <span>(em branco para <strong>GRATUITO</strong>)</span></label>
      <input id="price" 
      placeholder="Valor cobrado por dia"
      value={price}
      onChange={event => setPrice(event.target.value)}
      />
      <button type="submit" className="btn">Cadastrar</button>
      
  </form>

  )
}