/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../Header'
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-unresolved
import './style.css'

import api from '../../service/api'

export default function Listagem() {
  const history = useHistory()

  // function Redirect() {
  //   history.push('/incidents')
  // }
  //  --------------------alteraçções--------------
  const [lista, setLista] = useState([])

  async function getProducts() {
    const { data } = await api.get('/')

    setLista(data)

    return data
  }

  console.log('lista:', lista)

  useEffect(() => {
    getProducts()
  })

  async function handleDeleteProduct(id) {
    try {
      await api.delete(`/delete/${id}`)
      alert('Produto deletado com sucesso!')
      history.push('/lista')
    } catch (error) {
      alert('ERRO do Front!')
    }
  }

  async function handleUpdateProduct(id) {
    try {
      localStorage.setItem('id', id)

      history.push('/update')
    } catch (error) {
      alert('ERRO do Front!')
    }
  }

  // useEffect(() => {
  //   localStorage.clear()
  // }, [])

  // //  --------------------alteraçções--------------

  return (
    <div className="container">
      <Header />

      <div className="profile-container">
        <h1>Produtos Cadastrados</h1>
        <ul>
          {lista.map((list) => (
            <li key={list.id}>
              <strong>CASO:</strong>
              <p>{list.title}</p>
              <img
                // src={`https://produtos-sistema-api.herokuapp.com/files/${list.image}`}
                src={`http://localhost:3001/files/${list.image}`}
                width={'20%'}
                height={'25%'}
                alt="imagem"
              />
              <br />
              <strong>Descrição</strong>
              <p>{list.description}</p>
              <strong>Valor:</strong>
              <p>
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(list.price)}
              </p>

              <button
                type="button"
                onClick={() => handleDeleteProduct(list._id)}
              >
                APAGAR - DELETAR
              </button>
              <br />
              <button
                type="button"
                onClick={() => handleUpdateProduct(list._id)}
              >
                EDITAR
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
