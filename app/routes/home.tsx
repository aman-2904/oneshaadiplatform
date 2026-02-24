import type { Route } from "./+types/home";
import styles from "./home.module.css";
import { ToolCard } from "~/components/tool-card/tool-card";
import { eventTools } from "~/data/event-tools";
import TargetCursor from "~/components/ui/target-cursor/target-cursor";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Event Tools Hub - Your Central Event Management Dashboard" },
    {
      name: "description",
      content:
        "Access all your event management tools in one place. Navigate to venue filters, agreement makers, quotation tools, RSVP systems, and invoice generators.",
    },
  ];
}

export default function Home() {
  return (
    <>
      <TargetCursor targetSelector=".cursor-target" spinDuration={2} hideDefaultCursor={true} hoverDuration={0.2} parallaxOn={true} />
      <div className={styles.home}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>Shaadi Platform</h1>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Available Tools</h2>
          <div className={styles.toolsGrid}>
            {eventTools.map((tool) => (
              <ToolCard key={tool.id} name={tool.name} description={tool.description} url={tool.url} icon={tool.icon} />
            ))}
          </div>
        </section>
      </main>
      </div>
    </>
  );
}
