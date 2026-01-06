import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import './ProjectCard.less';

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  year: string;
  link: string;
  index: number;
}

const ProjectCard = ({
  title,
  description,
  category,
  year,
  link,
  index
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <article
      className={`project-card fade-in-up stagger-${index + 1}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate(link)}
    >
      <div className="card-content">
        <div className="card-main">
          <div className="card-meta">
            <span className="card-category">{category}</span>
            <span className="card-year">{year}</span>
          </div>
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
        </div>

        <div className={`card-cta ${isHovered ? 'visible' : ''}`}>
          <span>View project</span>
          <ArrowUpRight className="icon" size={20} />
        </div>
      </div>

      <div className={`card-underline ${isHovered ? 'active' : ''}`} />
    </article>
  );
};

export default ProjectCard;
