import type { Candidate, JobPost, SearchHistoryItem, JobAnalysis } from './types';
import { PlaceHolderImages } from './placeholder-images';

const getImageUrl = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || '';

export const LANGUAGES: string[] = ['JavaScript', 'Python', 'Java', 'TypeScript', 'C#', 'Go', 'Rust', 'Ruby', 'PHP', 'Kotlin', 'Swift'];
export const EXPERIENCE_LEVELS: string[] = ['Entry-level', 'Mid-level', 'Senior', 'Lead', 'Principal'];
export const POSITIONS: string[] = ['Frontend Developer', 'Backend Developer', 'Full-stack Developer', 'DevOps Engineer', 'Data Scientist', 'Machine Learning Engineer', 'Product Manager', 'UX/UI Designer'];
export const LOCATIONS: string[] = ['Kuala Lumpur, Malaysia', 'Singapore', 'Bangkok, Thailand', 'Penang, Malaysia', 'Johor Bahru, Malaysia', 'Phuket, Thailand', 'Chiang Mai, Thailand', 'Remote'];

export const MOCK_CANDIDATES: Candidate[] = [
  {
    id: '1',
    name: 'Alya Rahman',
    avatarUrl: getImageUrl('candidate-1'),
    profileUrl: '#',
    summary: 'Senior Frontend Engineer from Kuala Lumpur with 8+ years of experience in React, TypeScript, and Next.js. Passionate about building accessible and performant user interfaces for the SEA market.',
  },
  {
    id: '2',
    name: 'Wei Li Tan',
    avatarUrl: getImageUrl('candidate-2'),
    profileUrl: '#',
    summary: 'Backend Developer based in Singapore, specializing in Python, Django, and PostgreSQL. Experienced in designing and implementing RESTful APIs and microservices for high-traffic applications.',
  },
  {
    id: '3',
    name: 'Ananya Sharma',
    avatarUrl: getImageUrl('candidate-3'),
    profileUrl: '#',
    summary: 'Full-stack developer from Singapore with a focus on the MERN stack. Skilled in creating seamless, end-to-end user experiences. Contributed to several open-source projects.',
  },
  {
    id: '4',
    name: 'Rizki Santoso',
    avatarUrl: getImageUrl('candidate-4'),
    profileUrl: '#',
    summary: 'DevOps Engineer from Bangkok with expertise in Kubernetes, Docker, and Terraform on AWS. Proficient in setting up CI/CD pipelines using GitLab CI for scalable cloud infrastructure.',
  },
  {
    id: '5',
    name: 'Isabelle Lim',
    avatarUrl: getImageUrl('candidate-5'),
    profileUrl: '#',
    summary: 'Mid-level Software Engineer from Penang with 4 years of experience using Java and Spring Boot. Eager to tackle complex challenges and contribute to a fast-paced team in the fintech industry.',
  },
  {
    id: '6',
    name: 'Chakri Boonma',
    avatarUrl: getImageUrl('candidate-6'),
    profileUrl: '#',
    summary: 'Lead Data Scientist from Bangkok with a Ph.D. and 7 years of industry experience. Expert in machine learning and data visualization using Python (pandas, scikit-learn, TensorFlow).',
  },
];

export let MOCK_JOBS: JobPost[] = [
    {
      id: 'job-1',
      title: 'Senior Frontend Engineer (React)',
      company: 'Innovatech Solutions',
      location: 'Singapore',
      description: 'We are looking for a seasoned Frontend Engineer to join our team. You will be responsible for building and maintaining our flagship product\'s user interface, using modern technologies like React, TypeScript, and GraphQL.',
      postedAt: new Date('2024-05-20T10:00:00Z'),
      tags: ['React', 'TypeScript', 'Frontend', 'Senior'],
    },
    {
      id: 'job-2',
      title: 'Backend Developer (Python/Django)',
      company: 'DataCore Analytics',
      location: 'Kuala Lumpur, Malaysia',
      description: 'Join our backend team to build scalable and robust APIs for our data analytics platform. The ideal candidate has strong experience with Python, Django, and designing distributed systems.',
      postedAt: new Date('2024-05-19T14:30:00Z'),
      tags: ['Python', 'Django', 'Backend', 'Mid-level'],
    },
    {
      id: 'job-3',
      title: 'Full-Stack Developer',
      company: 'Creative Assembly',
      location: 'Remote',
      description: 'We\'re hiring a Full-Stack Developer to work on our creative collaboration tools. You\'ll work across our stack (Node.js, React, PostgreSQL) to deliver new features and improve existing ones.',
      postedAt: new Date('2024-05-18T09:00:00Z'),
      tags: ['Full-stack', 'Node.js', 'React', 'Remote'],
    },
    {
      id: 'job-4',
      title: 'DevOps Engineer',
      company: 'CloudSphere Inc.',
      location: 'Bangkok, Thailand',
      description: 'As a DevOps Engineer, you will automate and streamline our operations and processes. You\'ll build and maintain tools for deployment, monitoring, and operations, with a focus on security and scalability.',
      postedAt: new Date('2024-05-17T16:00:00Z'),
      tags: ['DevOps', 'AWS', 'Kubernetes', 'CI/CD'],
    },
  ];

export function addMockJob(jobData: {
    title: string;
    company: string;
    location: string;
    description: string;
    tags?: string;
}) {
    const newJob: JobPost = {
        id: `job-${Date.now()}`,
        title: jobData.title,
        company: jobData.company,
        location: jobData.location,
        description: jobData.description,
        postedAt: new Date(),
        tags: jobData.tags ? jobData.tags.split(',').map(t => t.trim()).filter(Boolean) : [],
    };
    MOCK_JOBS.unshift(newJob);
}


export let MOCK_SEARCH_HISTORY: SearchHistoryItem[] = [];

export function addSearchToHistory(jobDescription: string, analysis: JobAnalysis) {
  const newSearch: SearchHistoryItem = {
    id: `search-${Date.now()}`,
    jobDescription,
    analysis,
    searchedAt: new Date(),
  };
  MOCK_SEARCH_HISTORY.unshift(newSearch);
}
