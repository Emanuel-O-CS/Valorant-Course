export type User = {
  id: string;
  email: string;
  full_name?: string;
  avatar_url?: string;
  created_at: string;
};

export type Enrollment = {
  id: string;
  user_id: string;
  course_id: string;
  enrolled_at: string;
};

export type Lesson = {
  id: string;
  module_id: string;
  title: string;
  description: string;
  video_url: string;
  duration_seconds: number;
  position: number;
  is_preview: boolean;
};

export type Module = {
  id: string;
  course_id: string;
  title: string;
  description: string;
  position: number;
  lessons: Lesson[];
};

export type Course = {
  id: string;
  title: string;
  description: string;
  thumbnail_url?: string;
  modules: Module[];
};

export type LessonProgress = {
  lesson_id: string;
  user_id: string;
  completed: boolean;
  watched_seconds: number;
  updated_at: string;
};
