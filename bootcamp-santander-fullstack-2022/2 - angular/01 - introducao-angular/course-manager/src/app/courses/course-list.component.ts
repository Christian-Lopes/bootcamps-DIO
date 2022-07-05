import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-couser-list',
  templateUrl: './course-list.component.html',
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: 'Angular: Forms',
        imageUrl: './../../assets/images/forms.png',
        price: 2000.00,
        code: '01',
        duration: 90,
        rating: 4.5,
        releaseDate: 'December, 2, 2019',
      },
      {
        id: 2,
        name: 'Angular: HTTP',
        imageUrl: './../../assets/images/http.png',
        price: 2000.00,
        code: '02',
        duration: 70,
        rating: 4.0,
        releaseDate: 'December, 4, 2019',
      },
      {
        id: 3,
        name: 'Angular: Cli',
        imageUrl: './../../assets/images/cli.png',
        price: 2000.00,
        code: '03',
        duration: 90,
        rating: 5.0,
        releaseDate: 'December, 2, 2019',
      },
      {
        id: 4,
        name: 'Angular: Router',
        imageUrl: './../../assets/images/router.png',
        price: 2000.00,
        code: '04',
        duration: 90,
        rating: 4.5,
        releaseDate: 'December, 2, 2019',
      },
      {
        id: 5,
        name: 'Angular: Animation',
        imageUrl: './../../assets/images/animations.png',
        price: 2000.00,
        code: '05',
        duration: 90,
        rating: 4.5,
        releaseDate: 'December, 2, 2019',
      },
    ];
  }
}
