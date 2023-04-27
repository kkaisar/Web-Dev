export interface Product {
  id: number,
  name: string,
  url: string,
  price: number,
  description: string,
  image_url: string,
  rating: number,
  category: string,
  commentaries: number
}

export const products = [
  {
    id: 1,
    url: 'https://kaspi.kz/shop/p/gigabyte-geforce-rtx-3060-gaming-oc-12g-rev-2-0-12-gb-101717712/?c=195220100#!/item',
    name: '3060RTX',
    price: 239_999,
    description: "Видеокарта GIGABYTE GeForce RTX 3060 GAMING OC 12G rev. 2.0 12 ГБ"
      ,
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hbd/hfb/64345175982110.jpg?format=gallery-medium',
    rating: 4.2,
    category: "VideoCards",
    commentaries: 1
  },
  {
    id: 2,
    url: 'https://kaspi.kz/shop/p/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028/?c=195220100#!/item',
    name: 'Acer Nitro 5',
    price: 499_999,
    description: "Ноутбук Acer Nitro 5 AN515-57 NH.QEKER.004 черный",
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h8e/h97/67236399218718.jpg?format=gallery-medium',
    rating: 4.9,
    category: "Laptop",
    commentaries: 2
  },
  {
    id: 3,
    url: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=195220100#!/item',
    name: ' Apple iPhone 14 Pro Max',
    price: 699_999,
    description: "Смартфон Apple iPhone 14 Pro Max 256Gb фиолетовый",
    image_url: 'https://resources.cdn-kaspi.kz/img/m/p/h19/h85/64508108931102.jpg?format=gallery-medium',
    rating: 5.0,
    category: "Smartphones",
    commentaries: 3
  }
];
