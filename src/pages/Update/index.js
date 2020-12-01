import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../../service/api'
import './style.css'

import * as S from './styled'

export default function Update() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')

  const [lista, setLista] = useState([])

  const history = useHistory()

  const id = localStorage.getItem('id')

  async function getProduct(id) {
    const { data } = await api.get(`/lista/${id}`)

    setLista(data)
  }

  console.log('lista:', lista)

  useEffect(() => {
    getProduct(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function handleSubmit(event) {
    event.preventDefault()

    const id = localStorage.getItem('id')

    // const data = new FormData()

    // data.append('title', title)
    // data.append('description', description)
    // data.append('price', price)

    const data = {
      title,
      price,
      description,
    }

    try {
      await api.put(`/update/${id}`, data)

      alert('Editado realizado com sucesso!')
      return history.push('/')
    } catch (error) {
      console.log(error)
      return alert(`Deu erro no front ${error}`)
    }
  }

  return (
    <S.Container>
      <h1>Produto </h1>

      <form onSubmit={handleSubmit} className="create-orphanage-form">
        <p key={lista.id}> </p>
        <label htmlFor="name">Titulo</label>
        <input
          id="title"
          value={title}
          placeholder={lista.title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <strong>Descrição</strong>
        <input
          id="description"
          value={description}
          placeholder={lista.description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <strong>Preço:</strong>

        <input
          id="price"
          value={price}
          placeholder={lista.price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <br />
        {/* <button type="submit" onClick={() => handleUpdateProduct(lista._id)}>
          EDITAR
        </button> */}

        <button type="submit">EDITAR</button>
      </form>
      {/* ))} */}

      {/*      
      <h2> Entrou na Update</h2>
      <div id="page-create-orphanage">
        <form onSubmit={handleSubmit} className="create-orphanage-form">
          <fieldset>
            <legend>Dados</legend>
          </fieldset>
          <div className="input-block">
          {lista.map((list) => ({

            return (

          <li key={list.id}></li>
            <label htmlFor="name">Titulo</label>
            <input
              id="title"
              value={list.title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="name">Descrição</label>
            <input
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="name">Preço</label>
            <input
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            
            <input
            type="file"
            id="image"
            className="botao-imagem"
            onChange={(e) => setImage(e.target.files[0])}
            />
            </div>
            <button className="confirm-button" type="submit">
            Cadastrar
            </button>
            </form>
            </div>
            )))}} */}
      <S.LinkTo to="/">Ir pra Home</S.LinkTo>
    </S.Container>
  )
}
