import React from 'react'
import Header from '../../components/Header'
import { Outlet } from 'react-router-dom'
import * as S from './styles'

export default function DefaultLayout() {
  return (
    <S.LayoutContainer>
      <Header />
      <Outlet />
    </S.LayoutContainer>
  )
}
