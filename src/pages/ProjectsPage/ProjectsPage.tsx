import React from 'react';

import { motion } from 'framer-motion';

import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Box, Typography } from '@mui/material';

import SectionHeader from '@/pages/HomePage/components/SectionHeader/SectionHeader.tsx';

import { DEFAULT_TRANSITION, FADE_UP_VARIANTS } from '@/shared/constants/animation.constants';
import { MADE_PROJECTS } from '@/shared/constants/made-projects.constants';
import type { MadeProject } from '@/shared/constants/made-projects.constants';

import PortfolioLayout from '@/components/PortfolioLayout';
import SeoHead from '@/components/SeoHead/SeoHead';

import { styles } from './ProjectsPage.styles';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

interface ProjectCardProps {
  project: MadeProject;
  index: number;
}

const ProjectCard = React.memo(function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15 + index * 0.1, ease: EASE }}
      style={{ height: '100%' }}
    >
      <Box sx={styles.card}>
        <Box sx={styles.thumbWrap}>
          <Box
            component="img"
            className="project-thumb"
            src={project.image}
            alt={`${project.title} website preview`}
            loading="lazy"
            sx={styles.thumb}
          />
        </Box>

        <Box sx={styles.body}>
          <Typography sx={styles.context}>{project.context}</Typography>

          <Box sx={styles.titleRow}>
            <Typography component="h2" sx={styles.title}>
              {project.title}
            </Typography>
            <Typography sx={styles.year}>{project.year}</Typography>
          </Box>

          <Typography sx={styles.tagline}>{project.tagline}</Typography>
          <Typography sx={styles.description}>{project.description}</Typography>

          {project.tech.length > 0 && (
            <Box sx={styles.techRow}>
              {project.tech.map((tech) => (
                <Box key={tech} component="span" sx={styles.techChip}>
                  {tech}
                </Box>
              ))}
            </Box>
          )}

          <Box sx={styles.actions}>
            {project.liveUrl ? (
              <Box
                component="a"
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                sx={styles.liveButton}
              >
                Live site
                <ArrowOutwardIcon sx={{ fontSize: 14 }} />
              </Box>
            ) : (
              <Box sx={styles.internalTag}>
                <LockOutlinedIcon sx={{ fontSize: 13 }} />
                Internal tool
              </Box>
            )}

            {project.links?.map((link) => (
              <Box
                key={link.href}
                component="a"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                sx={styles.secondaryLink}
              >
                {link.label}
                <ArrowOutwardIcon sx={{ fontSize: 13 }} />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
});

const ProjectsPage = () => {
  return (
    <PortfolioLayout>
      <SeoHead
        title="Projects — Kira Zakirova | Websites & Web Apps"
        description="Live websites and web apps built by Kira Zakirova — React and TypeScript game showcase sites and interactive artefacts, playable in the browser."
        path="/projects"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Projects — Kira Zakirova',
          description: 'Live websites and web apps designed and developed by Kira Zakirova.',
          url: 'https://folio-kiraz.vercel.app/projects',
        }}
      />

      <motion.div
        variants={FADE_UP_VARIANTS}
        initial="hidden"
        animate="visible"
        transition={DEFAULT_TRANSITION}
      >
        <SectionHeader
          index="02"
          label="Projects"
          headingLevel="h1"
          count={`${MADE_PROJECTS.length} sites`}
        />

        <Typography sx={styles.intro}>
          Sites and web apps I designed and built from scratch — each one is live, and most are
          playable right in the browser.
        </Typography>

        <Box sx={styles.grid}>
          {MADE_PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </Box>
      </motion.div>
    </PortfolioLayout>
  );
};

export default ProjectsPage;
