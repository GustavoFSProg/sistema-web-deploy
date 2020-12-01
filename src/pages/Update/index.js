import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../../service/api'
import Header from '../Header'

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
    <div className="container">
      <Header />

      <form onSubmit={handleSubmit} className="janela">
        <div className="profile-container">
          <fieldset>
            <legend>Editar Produto</legend>

            <div className="input-block">
              <p key={lista.id}> </p>
              <label htmlFor="name">Titulo</label>
              <input
                id="title"
                value={title}
                placeholder={lista.title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="input-block">
              <strong>Descrição</strong>
              <input
                id="description"
                value={description}
                placeholder={lista.description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="input-block">
              <strong>Preço:</strong>

              <input
                id="price"
                value={price}
                placeholder={lista.price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <button type="submit">EDITAR</button>
          </fieldset>
        </div>
      </form>
    </div>
  )
}
