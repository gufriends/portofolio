// Interface untuk translation
export interface ProjectTranslation {
  id: string;
  projectId: string;
  language: string;
  title: string;
  category: string;
  description: string;
}

// Interface untuk single project
export interface Project {
  id: string;
  imageSrc: string;
  projectUrl: string;
  year: string;
  status: string;
  imagePosition: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  translations: ProjectTranslation[];
  technologies: any[]; // atau buat interface TechIcon[]
}

// Interface untuk response API
export interface ProjectsResponse {
  content: {
    entries: Project[];
    totalData: number;
    totalPage: number;
  };
  message: string;
  errors: any[];
}
