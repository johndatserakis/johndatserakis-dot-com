import styled from '@emotion/styled';
import { Button, Card, Divider, Typography } from '@mui/joy';
import { Project } from 'src/types/project';
import { FcLink } from 'react-icons/fc';
import { FiExternalLink } from 'react-icons/fi';
import { BoxShadow } from 'src/contants/style';

const Container = styled(Card)`
  box-shadow: ${BoxShadow.ONE};
  gap: 10px;
  transition: box-shadow 0.2s ease-in-out;

  :hover {
    box-shadow: ${BoxShadow.THREE};
  }
`;

const IconContainer = styled.div`
  font-size: 32px;
  height: 32px;
  line-height: 1;
`;

const HeaderContainer = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 46px 1fr;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

export const ProjectCard = ({ description, icon, links, title }: Project) => {
  const buttons = links.map(({ link, linkText }) => (
    <Button
      color="info"
      component="a"
      endDecorator={<FiExternalLink />}
      href={link}
      rel="noopener noreferrer"
      size="sm"
      target="_blank"
    >
      {linkText}
    </Button>
  ));

  return (
    <Container>
      <HeaderContainer>
        <IconContainer>{icon !== undefined ? icon : <FcLink />}</IconContainer>
        <Typography gutterBottom={false} level="h4" lineHeight="1.2">
          {title}
        </Typography>
      </HeaderContainer>
      <Divider />
      <Typography>{description}</Typography>
      <ButtonGroup>{buttons}</ButtonGroup>
    </Container>
  );
};
