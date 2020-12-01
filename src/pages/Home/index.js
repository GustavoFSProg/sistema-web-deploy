/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-unresolved
import './style.css'

import api from '../../service/api'

export default (props) => {
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
      history.push('/')
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

  async function handleLogout() {
    localStorage.clear()

    window.location('/')
  }

  useEffect(() => {
    localStorage.clear()
  }, [])

  // //  --------------------alteraçções--------------

  return (
    <div className="profile-container">
      <Link to="/register">Ir pra Regsiter</Link>
      <br />
      <Link to="/update">Ir pra Update</Link>

      <header>
        <Link type="button" to="/incidents" className="button">
          Cadastrar novo Produto
        </Link>
        <button type="button" onClick={handleLogout}>
          {/* <FiPower size={18} color="#E02041" /> */}
        </button>
      </header>

      <h1>Produtos Cadastrados</h1>
      <ul>
        {lista.map((list) => (
          <li key={list.id}>
            <strong>CASO:</strong>
            <p>{list.title}</p>
            <img
              src={`https://produtos-sistema-api.herokuapp.com/files/${list.image}`}
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

            <button type="button" onClick={() => handleDeleteProduct(list._id)}>
              APAGAR - DELETAR
            </button>
            <br />
            <button type="button" onClick={() => handleUpdateProduct(list._id)}>
              EDITAR
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
