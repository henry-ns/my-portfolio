import React from 'react';

import Image from 'next/image';

import { Entry } from 'contentful';

import makeURL from '@/utils/makeURL';

import { Work } from '@/interfaces/work';

import ExternalLink from '../ExternalLink';

import { Container, Banner, Title } from './styles';

export interface WorkCardProps {
  work: Entry<Work>;
}

const WorkCard: React.FC<WorkCardProps> = ({ work }) => {
  const { name, siteUrl, githubUrl, banner } = work.fields;
  const { file } = banner.fields;

  return (
    <ExternalLink href={siteUrl || githubUrl}>
      <Container>
        <Title>{name}</Title>
        <Banner>
          <Image
            placeholder="blur"
            src={makeURL(file.url)}
            blurDataURL={makeURL(file.url, 'q=2')}
            width={file.details.image.width}
            height={file.details.image.height}
          />
        </Banner>
      </Container>
    </ExternalLink>
  );
};

export default WorkCard;
