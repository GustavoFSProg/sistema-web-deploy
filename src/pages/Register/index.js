import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../../service/api'
import './style.css'
import Header from '../Header'

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
    <div className="container">
      <Header />

      <form onSubmit={handleSubmit} className="janela">
        <div className="profile-container">
          <fieldset>
            <legend>Cadastrar Produto</legend>

            <div className="input-block">
              <label htmlFor="name">Titulo</label>
              <br />
              <input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="name">Descrição</label>
              <br />
              <input
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="name">Preço</label>
              <br />
              <input
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div className="input-block">
              <input
                type="file"
                id="image"
                className="botao-imagem"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
            <div className="input-block">
              <button className="confirm-button" type="submit">
                Cadastrar
              </button>
            </div>
          </fieldset>
        </div>
      </form>
    </div>
  )
}
