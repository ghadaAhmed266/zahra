import { Component, signal } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('zahra');
  Furniture=
  [
    { 
          sectionTitle:'الاثاث',
          sectionContent:[
            {
              id:1,
              title:'نشتري الاثاث المستعمل',
              imgUrl:'assets/FurnitureImg1.png'
            },
            {
              id:2,
              title:'نشتري غرف النوم',
              imgUrl:'assets/FurnitureImg2.png'
            },
            {
              id:3,
              title:'نشتري المطابخ',
              imgUrl:'assets/FurnitureImg3.png'
            },
            {
              id:4,
              title:'نشتري الشقق الكامله',
              imgUrl:'assets/FurnitureImg4.png'
            }
          
    ]},
    { 
          sectionTitle:'الأجهزة',
          sectionContent:[
            {
              id:1,
              title:'نشتري المكيفات',
              imgUrl:'assets/DeviceImg1.png'
            },
            {
              id:2,
              title:'نشتري الاجهزه الكهربائيه',
              imgUrl:'assets/DeviceImg2.png'
            },
            {
              id:3,
              title:'نشتري الكترونيات',
              imgUrl:'assets/DeviceImg3.png'
            },
            {
              id:4,
              title:'نشتري التلفونات',
              imgUrl:'assets/DeviceImg4.png'
            }
          
    ]},

    { 
          sectionTitle:'ممتلكات كبيرة',
          sectionContent:[
            {
              id:1,
              title:'نشتري السيارات',
              imgUrl:'assets/LargeImg1.png'
            },
            {
              id:2,
              title:'نشتري الخيام',
              imgUrl:'assets/LargeImg2.png'
            },
            {
              id:3,
              title:'نشتري الجواخير',
              imgUrl:'assets/LargeImg3.png'
            },
            {
              id:4,
              title:'نشتري الشاليهات',
              imgUrl:'assets/LargeImg4.png'
            },
            {
              id:5,
              title:'نشتري الاجهزه الرياضيه',
              imgUrl:'assets/LargeImg5.png'
            },
            {
              id:6,
              title:'نشتري السكراب',
              imgUrl:'assets/LargeImg6.png'
            }
          
    ]},
  ];

  constructor(private title1: Title, private meta:Meta) {
    this.title1.setTitle('Zahra');
    this.meta.addTags([
      { name: 'description', content: 'zahra for buying furniture زهرة لشراء الاثاث المستعمل فى الكويت' },
      { name: 'keywords', content: 'زهرة,zahra,furniture,kwait,buy furniture,chair,devices,اجهزة,ممتلكات,شاليهات,كراسى,غسالات,غرف نوم,اثاث,اريكات,خيام,سيارات,99482898' }
    ]);
  }
}

