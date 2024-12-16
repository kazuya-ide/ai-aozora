// src/components/common/Cards/ProjectCard/ProjectCards.tsx
import styles from './ProjectCard.module.css';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export default function ProjectCard({ title, description, imageUrl, link }: ProjectCardProps) {
  return (
    <div className={styles.projectCard}>
      <Image src={imageUrl} alt={title} className={styles.projectImage} width={500} height={300} />
      <h3 className={styles.projectTitle}>{title}</h3>
      <p className={styles.projectDescription}>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
        View Project
      </a>
    </div>
  );
}