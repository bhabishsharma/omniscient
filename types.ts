export interface Photo {
  id: string;
  title: string;
  description: string;
  url: string;
  category: 'Nature' | 'Others';
  location: string;
  isVideo?: boolean;
  videoUrl?: string;
  settings: {
    camera: string;
    lens: string;
    shutter: string;
    aperture: string;
    iso: string;
  };
}

export interface Idol {
  id: string;
  name: string;
  title: string;
  avatar: string;
  bio: string;
  birthDeath: string;
  legacy: string;
  quotes: string[];
  lessons: {
    title: string;
    description: string;
    takeaway: string;
  }[];
  inspiredGallery: {
    title: string;
    description: string;
    url: string;
  }[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  imageUrl: string;
  likes: number;
  comments: {
    id: string;
    user: string;
    text: string;
    date: string;
  }[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  lessonsCount: number;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  price: number;
  isEnrolled?: boolean;
  lessons: {
    id: string;
    title: string;
    duration: string;
    videoPlaceholder: string;
    summary: string;
    quiz?: {
      question: string;
      options: string[];
      answerIndex: number;
    };
  }[];
}

export interface PrintItem {
  id: string;
  title: string;
  category: 'Framed Print' | 'Poster' | 'Calendar' | 'Digital Wallpaper';
  price: number;
  url: string;
  description: string;
}

export interface CartItem {
  print: PrintItem;
  quantity: number;
}
