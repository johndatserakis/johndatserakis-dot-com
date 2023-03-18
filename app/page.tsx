'use client';

import styled from '@emotion/styled';
import { Chip, IconButton, Stack, Typography } from '@mui/joy';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaPencilAlt } from 'react-icons/fa';

import ProfileImage from 'public/images/john-datserakis-profile-image.png';
import { DualLayout } from 'src/components/DualLayout';
import { GitHubCorner } from 'src/components/GitHubCorner';
import { ProjectCard } from 'src/components/ProjectCard';
import { projects } from 'src/constants/data';
import { BoxShadow, DEFAULT_PROGRAM_COLOR } from 'src/constants/style';

const StyledImage = styled(Image)`
  filter: drop-shadow(${BoxShadow.THREE});
`;

const LeftContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

const RightContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

const Home = () => {
  const projectCards = projects.map((project) => (
    <ProjectCard key={`${project.title}-${project.description}`} {...project} />
  ));

  return (
    <>
      <main role="main">
        <DualLayout
          leftContent={
            <LeftContentContainer>
              <StyledImage
                alt="Profile of John Datserakis"
                src={ProfileImage}
                width={150}
                priority
              />
              <Stack flexDirection="row" gap={1}>
                <a
                  href="https://github.com/johndatserakis"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <IconButton color="info" size="sm" title="GitHub" variant="solid">
                    <FaGithub />
                  </IconButton>
                </a>
                <a
                  href="https://www.linkedin.com/in/johndatserakis"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <IconButton color="info" size="sm" title="LinkedIn" variant="solid">
                    <FaLinkedin />
                  </IconButton>
                </a>
                <a href="https://blog.johndatserakis.com" rel="noopener noreferrer" target="_blank">
                  <IconButton color="info" size="sm" title="Blog" variant="solid">
                    <FaPencilAlt />
                  </IconButton>
                </a>
              </Stack>
              <Typography level="h1">
                John{' '}
                <Typography level="h1" textColor={DEFAULT_PROGRAM_COLOR}>
                  Datserakis
                </Typography>
              </Typography>
              <Typography>
                Hey there! My name's John Datserakis and I'm a Senior Software Engineer from
                Boston's North Shore. Right now, I'm building some cool stuff over at{' '}
                <a href="https://www.indigoag.com/" rel="noopener noreferrer" target="_blank">
                  Indigo Ag
                </a>
                .
              </Typography>
              <Typography>
                I'm all about sharing knowledge and contributing to the community, so I like to
                write open-source code. You can check out my latest projects over on my{' '}
                <a
                  href="https://github.com/johndatserakis"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>{' '}
                page. If you're interested in reading up on my development notes, be sure to visit
                my{' '}
                <a href="https://blog.johndatserakis.com" rel="noopener noreferrer" target="_blank">
                  blog
                </a>
                !
              </Typography>
              <Typography>
                I'm constantly working on new and exciting projects, and my latest creation is a
                simple game called{' '}
                <a
                  href="https://find-the-state.netlify.app"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Find the State
                </a>
                . It's a fun challenge where you have to locate all of the States in the contiguous
                USA on a map.
              </Typography>
              <Typography>
                If you would like to connect, feel free to drop me a line at johndatserakis at gmail
                dot com. And if you really like this site, you can even{' '}
                <a
                  href="https://github.com/johndatserakis/johndatserakis-dot-com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  fork it
                </a>{' '}
                - it's completely open-source and built using React, TypeScript, and Next.js.
              </Typography>
              <Typography>
                Got a question or need some support on a commercial app of mine? No problem - just
                shoot me a message at johndatserakis at gmail dot com and I'll be happy to help!
              </Typography>
            </LeftContentContainer>
          }
          rightContent={
            <RightContentContainer>
              <Stack alignItems="center" flexDirection="row" gap={2} mb={-1}>
                <Typography level="h2">Links</Typography>
                <div>
                  <Chip color="info" size="sm">
                    {projects.length}
                  </Chip>
                </div>
              </Stack>
              <Typography level="body2">A peek at a few of my projects...</Typography>
              {projectCards}
            </RightContentContainer>
          }
        />
      </main>
      <GitHubCorner />
    </>
  );
};

export default Home;
