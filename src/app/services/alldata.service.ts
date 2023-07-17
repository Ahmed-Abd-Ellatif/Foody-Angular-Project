import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlldataService {
  constructor() {}
  // =========================
  // Features Data
  // =========================
  featuresData = [
    {
      img: '../../../assets/images/icon-1.png',
      title: 'Natural Process',
      desc: 'Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.',
    },
    {
      img: '../../../assets/images/icon-2.png',
      title: 'Natural Process',
      desc: 'Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.',
    },
    {
      img: '../../../assets/images/icon-3.png',
      title: 'Natural Process',
      desc: 'Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.',
    },
  ];
  // =========================
  // BLOGS DATA
  // =========================
  blogData = [
    {
      img: '../../../assets/images/blog-1.jpg',
      title: 'How to cultivate organic fruits and vegetables in own firm',
    },
    {
      img: '../../../assets/images/blog-2.jpg',
      title: 'How to cultivate organic fruits and vegetables in own firm',
    },
    {
      img: '../../../assets/images/blog-3.jpg',
      title: 'How to cultivate organic fruits and vegetables in own firm',
    },
  ];
  // =========================
  // Products DATA
  // =========================
  productsData = [
    {
      id: '1',
      img: '../../../assets/images/product-1.jpg',
      title: 'Fresh Tomato',
      price: '19',
      oldPrice: '29',
      new: true,
      type: 'vegetable',
    },
    {
      id: '2',
      img: '../../../assets/images/product-2.jpg',
      title: 'Fresh Tomato',
      price: '19',
      oldPrice: '29',
      new: true,
      type: 'fruit',
    },
    {
      id: '3',
      img: '../../../assets/images/product-3.jpg',
      title: 'Fresh Tomato',
      price: '19',
      oldPrice: '29',
      new: true,
      type: 'vegetable',
    },
    {
      id: '4',
      img: '../../../assets/images/product-4.jpg',
      title: 'Fresh Tomato',
      price: '19',
      oldPrice: '29',
      new: true,
      type: 'fruit',
    },
    {
      id: '5',
      img: '../../../assets/images/product-5.jpg',
      title: 'Fresh Tomato',
      price: '19',
      oldPrice: '29',
      new: true,
      type: 'vegetable',
    },
    {
      id: '6',
      img: '../../../assets/images/product-6.jpg',
      title: 'Fresh Tomato',
      price: '19',
      oldPrice: '29',
      new: true,
      type: 'vegetable',
    },
    {
      id: '7',
      img: '../../../assets/images/product-7.jpg',
      title: 'Fresh Tomato',
      price: '19',
      oldPrice: '29',
      new: true,
      type: 'vegetable',
    },
    {
      id: '8',
      img: '../../../assets/images/product-8.jpg',
      title: 'Fresh Tomato',
      price: '19',
      oldPrice: '29',
      new: true,
      type: 'fruit',
    },
  ];
}
