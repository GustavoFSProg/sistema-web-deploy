import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../../service/api'
import './style.css'

import * as S from './styled'

export default function Register() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState([])

  const history = useHistory()

  async function handleSubmit(event) {
    event.preventDefault()

    const data = new FormData()

    data.append('title', title)
    data.append('description', description)
    data.append('price', price)
    data.append('image', image)

    try {
      await api.post('/register', data)

      alert('Cadastro realizado com sucesso!')
      return history.push('/')
    } catch (error) {
      console.log(error)
      return alert(`Deu erro no front ${error}`)
    }
  }

  return (
    <S.Container>
      <h2> Entrou na Register</h2>
      <div id="page-create-orphanage">
        <form onSubmit={handleSubmit} className="create-orphanage-form">
          <fieldset>
            <legend>Dados</legend>
          </fieldset>
          <div className="input-block">
            <label htmlFor="name">Titulo</label>
            <input
              id="title"
              value={title}
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
      <S.LinkTo to="/">Ir pra Home</S.LinkTo>
    </S.Container>
  )
}
