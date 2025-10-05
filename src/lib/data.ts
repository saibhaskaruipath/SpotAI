import type { Candidate, JobPost, SearchHistoryItem, JobAnalysis } from './types';
import { PlaceHolderImages } from './placeholder-images';

const getImageUrl = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || '';

export const LANGUAGES: string[] = ['JavaScript', 'Python', 'Java', 'TypeScript', 'C#', 'Go', 'Rust', 'Ruby', 'PHP', 'Kotlin', 'Swift'];
export const EXPERIENCE_LEVELS: string[] = ['Entry-level', 'Mid-level', 'Senior', 'Lead', 'Principal'];
export const POSITIONS: string[] = ['Frontend Developer', 'Backend Developer', 'Full-stack Developer', 'DevOps Engineer', 'Data Scientist', 'Machine Learning Engineer', 'Product Manager', 'UX/UI Designer'];
export const LOCATIONS: string[] = ['New York, NY', 'San Francisco, CA', 'Austin, TX', 'Seattle, WA', 'Chicago, IL', 'Boston, MA', 'Los Angeles, CA', 'Denver, CO', 'Remote'];

export const MOCK_CANDIDATES: Candidate[] = [
  {
    id: '1',
    name: 'Elena Rodriguez',
    avatarUrl: getImageUrl('candidate-1'),
    profileUrl: '#',
    summary: 'Senior Frontend Engineer with 8+ years of experience in React, TypeScript, and Next.js. Passionate about building accessible and performant user interfaces. Proven track record of leading projects and mentoring junior developers.',
  },
  {
    id: '2',
    name: 'David Chen',
    avatarUrl: getImageUrl('candidate-2'),
    profileUrl: '#',
    summary: 'Backend Developer specializing in Python, Django, and PostgreSQL. Experienced in designing and implementing RESTful APIs, microservices architecture, and cloud deployment on AWS. Strong problem-solving skills and a collaborative mindset.',
  },
  {
    id: '3',
    name: 'Aisha Khan',
    avatarUrl: getImageUrl('candidate-3'),
    profileUrl: '#',
    summary: 'Full-stack developer with a focus on the MERN stack (MongoDB, Express, React, Node.js). Skilled in both frontend and backend development, with a knack for creating seamless, end-to-end user experiences. Contributed to several open-source projects.',
  },
  {
    id: '4',
    name: 'Ben Carter',
    avatarUrl: getImageUrl('candidate-4'),
    profileUrl: '#',
    summary: 'DevOps Engineer with expertise in Kubernetes, Docker, and Terraform. Proficient in setting up CI/CD pipelines using Jenkins and GitLab CI. Strong background in Linux administration and network security.',
  },
  {
    id: '5',
    name: 'Olivia Martinez',
    avatarUrl: getImageUrl('candidate-5'),
    profileUrl: '#',
    summary: 'Mid-level Software Engineer with 4 years of experience using Java, Spring Boot, and microservices. Eager to tackle complex challenges and contribute to a fast-paced team. Experience with Agile methodologies and test-driven development (TDD).',
  },
  {
    id: '6',
    name: 'Samuel Jones',
    avatarUrl: getImageUrl('candidate-6'),
    profileUrl: '#',
    summary: 'Lead Data Scientist with a Ph.D. in a quantitative field and 7 years of industry experience. Expert in machine learning, statistical modeling, and data visualization using Python (pandas, scikit-learn, TensorFlow). Experience building and deploying ML models at scale.',
  },
];

export let MOCK_JOBS: JobPost[] = [
    {
      id: 'job-1',
      title: 'Senior Frontend Engineer (React)',
      company: 'Innovatech Solutions',
      location: 'San Francisco, CA',
      description: 'We are looking for a seasoned Frontend Engineer to join our team. You will be responsible for building and maintaining our flagship product\'s user interface, using modern technologies like React, TypeScript, and GraphQL.',
      postedAt: new Date('2024-05-20T10:00:00Z'),
      tags: ['React', 'TypeScript', 'Frontend', 'Senior'],
    },
    {
      id: 'job-2',
      title: 'Backend Developer (Python/Django)',
      company: 'DataCore Analytics',
      location: 'New York, NY',
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
      location: 'Austin, TX',
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
