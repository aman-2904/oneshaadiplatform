import * as React from "react";
import classNames from "classnames";
import { ArrowRight, MapPin, FileText, Calculator, Users, Receipt } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import styles from "./tool-card.module.css";

const iconMap: Record<string, LucideIcon> = {
  MapPin,
  FileText,
  Calculator,
  Users,
  Receipt,
};

interface ToolCardProps {
  /**
   * The name of the tool
   * @important
   */
  name: string;
  /**
   * Description of what the tool does
   * @important
   */
  description: string;
  /**
   * External URL to navigate to
   * @important
   * @format url
   */
  url: string;
  /**
   * Icon name from lucide-react
   */
  icon?: string;
  className?: string;
}

export const ToolCard: React.FC<ToolCardProps> = ({ name, description, url, icon = "MapPin", className }) => {
  const IconComponent = iconMap[icon] || MapPin;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={classNames(styles.toolCard, className)}>
      <div className={styles.iconWrapper}>
        <IconComponent size={28} strokeWidth={2} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.footer}>
        <span>Open tool</span>
        <ArrowRight size={16} className={styles.arrow} />
      </div>
    </a>
  );
};
