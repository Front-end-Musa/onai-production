import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { Product } from './components/interfaces/product.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[
    RouterOutlet,
    MainComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  products: Product[] = [
    {
      brand: 'Tefal',
      article: '012589632',
      name: 'Tefal KI700830 серебристый',
      price: 6490,
      in_stock: true
    },
    {
      brand: 'Tefal',
      article: '685321498',
      name: 'Электрочайник Tefal Silver Ion BF925231 белый',
      price: 7490,
      in_stock: false
    },
    {
      brand: 'Tefal',
      article: '023654896',
      name: 'Tefal Loft KO 250130 белый',
      price: 5490,
      in_stock: true
    },
    {
      brand: 'Tefal',
      article: '756321954',
      name: 'Tefal KI770D30 серебристый',
      price: 3457,
      in_stock: true
    },
    {
      brand: 'Tefal',
      article: '023101654',
      name: 'Электрочайник Tefal Silver ION BF925232 бежевый',
      price:  7022,
      in_stock: true
    },
    {
      brand: 'Tefal',
      article: '856329013',
      name: 'Tefal KO450832 черный',
      price: 11790,
      in_stock: true
    },
    {
      brand: 'Xiaomi',
      article: '300562314',
      name: 'Xiaomi Mi Electric Kettle 2 белый',
      price: 8812,
      in_stock: true
    },
    {
      brand: 'Xiaomi',
      article: '896321000',
      name: 'Xiaomi Mi Smart Kettle Pro MJHWSH02YM белый',
      price: 16846,
      in_stock: true
    },
    {
      brand: 'Xiaomi',
      article: '078065012',
      name: 'Xiaomi Mijia Electric Kettle 1A белый',
      price: 5831,
      in_stock: false
    },
    {
      brand: 'Xiaomi',
      article: '765310265',
      name: 'Xiaomi Viomi Smart Kettle V-SK152A белый',
      price: 7780,
      in_stock: false
    },
    {
      brand: 'Xiaomi',
      article: '963012558',
      name: 'Чайник Xiaomi Mijia Thermostatic Electric Kettle 2',
      price: 9457,
      in_stock: false
    },
    {
      brand: 'Tefal',
      article: '032156485',
      name: 'Tefal BF925132 белый',
      price: 7785,
      in_stock: true
    },
    {
      brand: 'Xiaomi',
      article: '965432596',
      name: 'Tefal BF925132 белый',
      price: 20020,
      in_stock: true
    },
  ]

  tableHeaders: string[] = ['Бренд', 'Артикул', 'Наименование товара', 'Цена']
}
