import styles from './ProjectCard.module.css'

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export default function ProjectCard({ title, description, imageUrl, link }: ProjectCardProps) {
  return (
    <div className={styles.projectCard}>
      <img src={imageUrl} alt={title} className={styles.projectImage} />
      <h3 className={styles.projectTitle}>{title}</h3>
      <p className={styles.projectDescription}>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
        View Project
      </a>
    </div>
  );
}