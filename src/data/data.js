
const products = [
  {
    id: 1,
    title: 'Zapatillas All Crash. Artículo 760. Negro con blanco.',
    price: 25000,
    stock: 20,
    img: 'https://photos.google.com/u/0/photo/AF1QipMGIU3jQakQejzsUk116b0ee88n8LtQLgw1rxz5',
    category: 'Hombre',
    description: 'Excelentes zapatillas en calidad y buen precio',
    discount: 15
  },
  {
    id: 2,
    title: 'Zapatillas All Crash. Artículo 760. Todo negro.',
    price: 25000,
    stock: 50,
    img: 'https://photos.google.com/u/0/photo/AF1QipM7k79-bH-2rRZQcSna6Ln2GokTpBLCGRhdeWVO',
    category: 'Hombre',
    description: 'Excelentes zapatillas en calidad y buen precio',
    discount: 25
  },
  {
    id: 3,
    title: 'Zapatillas All Crash. Artículo 760. Negro con caramelo.',
    price: 28000,
    stock: 30,
    img: 'https://photos.google.com/u/0/photo/AF1QipPMeYNYouwFvCATlE9qskraUYMIZHYeX8X6Cza8',
    category: 'Hombre',
    description: 'Excelentes zapatillas en calidad y buen precio',
    discount: 5
  },
  {
    id: 4,
    title: 'Zapatillas All Crash. Artículo 380. Negro con caramelo.',
    price: 25000,
    stock: 15,
    img: 'https://photos.google.com/u/0/photo/AF1QipNzPwAFJpWKMcZI3qg5ePFFyezGrNCmG5Rf93tA',
    category: 'Hombre',
    description: 'Excelentes zapatillas en calidad y buen precio',
    discount: 10,

  },
  {
    id: 5,
    title: 'Zapatillas All Crash. Artículo 380. Negro con blanco.',
    price: 28000,
    stock: 100,
    img: 'https://photos.google.com/u/0/photo/AF1QipN3ZrNcsK0cDA3DOkiqZIIatZBSTIE5TqGE48yv',
    category: 'Hombre',
    description: 'Excelentes zapatillas en calidad y buen precio',
    discount: 30
  },
  {
    id: 6,
    title: 'Zapatillas All Crash. Artículo 201 Knu. Plataforma negra con blanco.',
    price: 23000,
    stock: 25,
    img: 'https://photos.google.com/u/0/photo/AF1QipMez4dUXmc_NorX6XIo9DCjkkRDJX9txZpnXTcP',
    category: 'Mujer',
    description: 'Excelentes zapatillas en calidad y buen precio',
    discount: 10
  },
  {
    id: 7,
    title: 'Zapatillas All Crash. Artículo 201 Knu. Plataforma cuadrille.',
    price: 24000,
    stock: 40,
    img: 'https://photos.google.com/u/0/photo/AF1QipMzDXRMUq5jsB5mwja3oSJyVY3DB_ddljitsPvk7',
    category: 'Mujer',
    description: 'Excelentes zapatillas en calidad y buen precio',
    discount: 5
  },
  {
    id: 8,
    title: 'Zapatillas All Crash. Artículo 201 Knu. Plataforma fucsia.',
    price: 22000,
    stock: 60,
    img: 'https://photos.google.com/u/0/photo/AF1QipMrKvpHU14vgwxiZL6i_m5Mcr272eQN2KFtDNHY8',
    category: 'Mujer',
    description: 'Excelentes zapatillas en calidad y buen precio',
    discount: 20
  },
  {
    id: 9,
    title: 'Zapatillas All Crash. Artículo 201 Knu. Plataforma rosa.',
    price: 22000,
    stock: 20,
    img: 'https://photos.google.com/u/0/photo/AF1QipOBKrze57XX1gO3nggThw1Z6ta8jpV0bda839wd',
    category: 'Mujer',
    description: 'Excelentes zapatillas en calidad y buen precio',
    discount: 10
  },
  {
    id: 10,
    title: 'Zapatillas All Crash. Artículo 200. Bota clásica.',
    price: 25000,
    stock: 15,
    img: 'https://photos.google.com/u/0/photo/AF1QipOBKrze57XX1gO3nggThw1Z6ta8jpV0bda839wd',
    category: 'Mujer',
    description: 'Excelentes zapatillas en calidad y buen precio',
    discount: 30
  },
  {
    id: 11,
    title: 'Zapatillas para chicos All Crash. Artículo 200. Cuadrillé.',
    price: 20000,
    stock: 30,
    img: 'https://photos.google.com/u/0/photo/AF1QipPf6kUu5id5t-ZoNMENFjrOhNI7IuudtdupIHuB',
    category: 'Chicos',
    description: 'Excelentes zapatillas en calidad y buen precio',
    discount: 5
  },
  {
    id: 12,
    title: 'Zapatillas para chicos All Crash. Artículo 200. Rosa',
    price: 21000,
    stock: 20,
    img: 'https://photos.google.com/u/0/photo/AF1QipNo0UQyKvdt06wqmMLwFJ11UPd5gIIaB-W2LLs5',
    category: 'Chicos',
    description: 'Excelentes zapatillas en calidad y buen precio',
    discount: 15
  },
  {
    id: 13,
    title: 'Zapatillas para chicos All Crash. Artículo 250. Negro y blanco.',
    price: 23000,
    stock: 10,
    img: 'https://photos.google.com/u/0/photo/AF1QipMxBlROG5YyzGxxpJyMgxb7kgWu88uE9gEcrrHw3',
    category: 'Chicos',
    description: 'Excelentes zapatillas en calidad y buen precio',
    discount: 15
  },
  {
    id: 14,
    title: 'Zapatillas para chicos All Crash. Artículo 380. Gris y blanco.',
    price: 22000,
    stock: 40,
    img: 'https://photos.google.com/u/0/photo/AF1QipPeZbu2TO3BMN2ngXPvt2FzyuI798TbDh7mLhcd',
    category: 'Chicos',
    description: 'Excelentes zapatillas en calidad y buen precio',
    discount: 5
  },
  {
    id: 15,
    title: 'Zapatillas para chicos All Crash. Artículo 380. Negro con caramelo.',
    price: 22000,
    stock: 100,
    img: 'https://photos.google.com/u/0/photo/AF1QipPE9HV9V-YbdWL6yqZZsHakVNqTHKsqxQXKsZJo',
    category: 'Chicos',
    description: 'Excelentes zapatillas en calidad y buen precio',
    discount: 25
  }
];

export default products;