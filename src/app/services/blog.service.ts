import { Injectable } from '@angular/core';

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string; // HTML
  date: string;
  author: string;
  image: string;
}

@Injectable({
    providedIn: 'root'
})
export class BlogService {
  private posts: BlogPost[] = [
    {
      id: 1,
      slug: 'mi-odisea-creativa',
      title: '#1 El inicio de todo: Mi Odisea Creativa',
      category: 'Experiencias',
      excerpt: 'Cómo empezó todo en un país remoto y cómo una idea evolucionó hasta convertirse en Couple Clash.',
      content: `<p>Desde los primeros bocetos hasta el lanzamiento final, este artículo narra los orígenes de mi viaje creativo.</p>` ,
      date: '2024-08-06',
      author: 'Mr. Yugen',
      image: 'assets/images/blog_post1.webp'
    },
    {
      id: 2,
      slug: 'errores-juego-parte-1',
      title: '#2 Errores comunes al diseñar un juego de mesa (Parte 1)',
      category: 'Juego de mesa',
      excerpt: 'Desde mi desgracia personal, te cuento los errores más comunes al diseñar un juego de mesa y cómo evitarlos.',
      content: `<p>Compartiré los tropiezos más habituales en la creación de juegos de mesa y las lecciones aprendidas durante el proceso.</p>` ,
      date: '2024-09-25',
      author: 'Mr. Yugen',
      image: 'assets/images/blog_post2.jpg'
    },
    {
      id: 3,
      slug: 'errores-juego-parte-2',
      title: '#3 Errores comunes al diseñar un juego de mesa (Parte 2)',
      category: 'Juego de mesa',
      excerpt: 'El gran final de las “desgracias”, los últimos errores más habituales en la creación de un juego de mesa. ¡Que no te pase lo mismo!',
      content: `<p>En esta segunda parte abordo más fallos frecuentes y cómo solucionarlos para que tu juego llegue a buen puerto.</p>` ,
      date: '2024-10-10',
      author: 'Mr. Yugen',
      image: 'assets/images/blog_post3.png'
    }
  ];

  getPosts(): BlogPost[] {
    return this.posts;
  }

  getPostBySlug(slug: string): BlogPost | undefined {
    return this.posts.find(p => p.slug === slug);
  }
}