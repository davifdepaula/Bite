import React from 'react';
import { BiFoodMenu } from "react-icons/bi";
export const SidebarData = [
  {
    title: 'Menu',
    path: '/',
    icon: <BiFoodMenu />,
    className: 'navbarText'
  },
  {
    title: 'Pizzas',
    path: '/pizzas',
    icon: <ion-icon name="pizza-outline"></ion-icon>,
    className: 'navbarText'
  },
  {
    title: 'Hamburguer',
    path: '/hamburguer',
    icon: <ion-icon name="fast-food-outline"></ion-icon>,
    className: 'navbarText'
  },
  {
    title: 'Sobremesas',
    path: '/sobremesas',
    icon: <ion-icon name="ice-cream-outline"></ion-icon>,
    className: 'navbarText'
  },

  {
    title: 'Bebidas',
    path: '/bebidas',
    icon: <ion-icon name="ice-cream-outline"></ion-icon>,
    className: 'navbarText'
  },
  {
    title: 'Sobre',
    path: '/sobre',
    icon: <ion-icon name="alert-circle-outline"></ion-icon>,
    className: 'navbarText'
  },
  {
    title: 'Contato',
    path: '/contato',
    icon: <ion-icon name="call-outline"></ion-icon>,
    className: 'navbarText'
  }
];