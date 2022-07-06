import { Injectable } from '@angular/core';
import { Course } from './course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  retrieveAll(): Course[] {
    return COURSES;
  }

  retrievebyId(id: number): Course{
    return COURSES.find((courseItereator: Course) => courseItereator.id === id);
  }
}

var COURSES: Course[] = [
  {
    id: 1,
    name: 'Angular: Forms',
    imageUrl: './../../assets/images/forms.png',
    price: 2000.0,
    code: '01',
    duration: 90,
    rating: 4.5,
    releaseDate: 'December, 2, 2019',
    description: 'Curso',
  },
  {
    id: 2,
    name: 'Angular: HTTP',
    imageUrl: './../../assets/images/http.png',
    price: 2000.0,
    code: '02',
    duration: 70,
    rating: 4.0,
    releaseDate: 'December, 4, 2019',
    description: 'Curso',
  },
  {
    id: 3,
    name: 'Angular: Cli',
    imageUrl: './../../assets/images/cli.png',
    price: 2000.0,
    code: '03',
    duration: 90,
    rating: 5.0,
    releaseDate: 'December, 2, 2019',
    description: 'Curso',
  },
  {
    id: 4,
    name: 'Angular: Router',
    imageUrl: './../../assets/images/router.png',
    price: 2000.0,
    code: '04',
    duration: 90,
    rating: 4.5,
    releaseDate: 'December, 2, 2019',
    description: 'Curso',
  },
  {
    id: 5,
    name: 'Angular: Animation',
    imageUrl: './../../assets/images/animations.png',
    price: 2000.0,
    code: '05',
    duration: 90,
    rating: 4.5,
    releaseDate: 'December, 2, 2019',
    description: 'Curso',
  },
];
