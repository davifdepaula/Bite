import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import Order from '../../order';
import CartContext from '../../../context/context';
import './userInfo.css'

function UserInfo() {
    const {register, handleSubmit, setValue, setFocus} = useForm();
    const {setAddress} = useContext(CartContext)
    const navigate = useNavigate()

    function onSubmit(e){
      setAddress(e)
      navigate("/order")
     }
  
    function checkCEP(e){
      const cep = e.target.value.replace(/\D/g, '');
      console.log(cep);
      fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
        // register({ name: 'address', value: data.logradouro });
        setValue('address', data.logradouro);
        setValue('neighborhood', data.bairro);
        setValue('city', data.localidade);
        setValue('uf', data.uf);
        setFocus('addressNumber');
      });
    }
 
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          CEP:
          <input type="text" {...register("cep")} onBlur={checkCEP} />
        </label>
        <label>
          Rua:
          <input type="text" {...register("address" )}/>
        </label>
        <label>
          Número:
          <input type="text" {...register("addressNumber" )}/>
        </label>
        <label>
          Bairro:
          <input type="text" {...register("neighborhood" )}/>
        </label>
        <label>
          Cidade:
          <input type="text" {...register("city" )}/>
        </label>
        <label>
          Estado:
          <input type="text" {...register("uf" )}/>
        </label>
        <button type="submit">Enviar</button>
      </form>
    );
  }

export default UserInfo