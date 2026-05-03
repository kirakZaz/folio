import { Box, Tooltip, Typography } from '@mui/material';

import {
  BIO_TEXT,
  COURSES,
  EDUCATION_ITEMS,
  PROGRAMS,
  SKILL_CATEGORIES,
} from '@/shared/constants/profile.constants';
import { SKILL_BRAND_COLORS } from '@/shared/constants/skill-icons.constants';

import { styles } from './ProfilePanel.styles';

const ProfilePanel = () => (
  <Box sx={styles.panel}>
    {/* Summary */}
    <Box>
      <Typography sx={styles.caption}>Summary</Typography>
      <Typography sx={styles.summaryText}>{BIO_TEXT}</Typography>
    </Box>

    {/* Skills */}
    <Box>
      <Typography sx={styles.caption}>Tech Stack</Typography>
      {SKILL_CATEGORIES.map((category) => (
        <Box key={category.label} sx={styles.skillRow}>
          <Typography sx={styles.skillLabel}>{category.label}</Typography>
          <Box sx={styles.skillIconsWrap}>
            {category.skills.map((skill) => (
              <Tooltip key={skill.name} title={skill.name} arrow placement="top">
                <Box
                  role="img"
                  aria-label={skill.name}
                  sx={styles.skillIcon(skill.icon, SKILL_BRAND_COLORS[skill.name])}
                />
              </Tooltip>
            ))}
          </Box>
        </Box>
      ))}
    </Box>

    {/* Programs */}
    <Box>
      <Typography sx={styles.caption}>Programs</Typography>
      {PROGRAMS.map((category) => (
        <Box key={category.label} sx={styles.skillRow}>
          <Typography sx={styles.skillLabel}>{category.label}</Typography>
          <Box sx={styles.skillIconsWrap}>
            {category.skills.map((skill) => (
              <Tooltip key={skill.name} title={skill.name} arrow placement="top">
                <Box
                  role="img"
                  aria-label={skill.name}
                  sx={styles.skillIcon(skill.icon, SKILL_BRAND_COLORS[skill.name])}
                />
              </Tooltip>
            ))}
          </Box>
        </Box>
      ))}
    </Box>

    {/* Education */}
    <Box>
      <Typography sx={styles.caption}>Education</Typography>
      {EDUCATION_ITEMS.map((item) => (
        <Box key={item.degree}>
          <Typography sx={styles.eduDegree}>{item.degree}</Typography>
          <Typography sx={styles.eduMeta}>
            {item.institution} · {item.period}
          </Typography>
        </Box>
      ))}
      {COURSES.map((course) => (
        <Box key={course.name} sx={styles.courseItem}>
          <Box sx={styles.courseDot} />
          <Typography sx={styles.courseText}>
            {course.provider} — {course.name} · {course.year}
          </Typography>
          {course.score && (
            <Typography sx={styles.courseScore}>({course.score})</Typography>
          )}
        </Box>
      ))}
    </Box>
  </Box>
);

export default ProfilePanel;
