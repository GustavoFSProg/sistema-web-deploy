/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../Header'
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-unresolved
import './style.css'

import api from '../../service/api'

export default function ListaUsers() {
  const history = useHistory()

  // function Redirect() {
  //   history.push('/incidents')
  // }
  //  --------------------alteraçções--------------
  const [lista, setLista] = useState([])

  async function getUsers() {
    const token = localStorage.getItem('token')

    // console.log(token)

    // alert('Entrou')

    const { data } = await api.get(`/users`, {
      headers: {
        authorization: token,
      },
    })
    console.log(data)

    setLista(data.data)

    // console.log(`Data: ${data}`)

    console.log(lista)

    return data
  }

  useEffect(() => {
    getUsers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lista])

  async function handleDeleteUser(id) {
    try {
      await api.delete(`users-del/${id}`)
      alert('Usuario deletado com sucesso!')
      history.push('/listaUsers')
    } catch (error) {
      alert('ERRO do Front!')
    }
  }

  // async function handleUpdateUser(id) {
  //   try {
  //     localStorage.setItem('id', id)

  //     history.push('/')
  //   } catch (error) {
  //     alert('ERRO do Front!')
  //   }
  // }

  // useEffect(() => {
  //   localStorage.clear()
  // }, [])

  // //  --------------------alteraçções--------------

  return (
    <div className="container">
      <Header />

      <div className="profile-container">
        <h1>Usuarios Cadastrados</h1>
        <ul>
          {lista.map((list) => (
            <li key={list.id}>
              <strong>Nome:</strong>
              <p>{list.name}</p>

              <br />
              <strong>email</strong>
              <p>{list.email}</p>

              <button type="button" onClick={() => handleDeleteUser(list._id)}>
                DELETAR
              </button>
              <br />
              {/* <button type="button" onClick={() => handleUpdateUser(list._id)}>
                EDITAR
              </button> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
