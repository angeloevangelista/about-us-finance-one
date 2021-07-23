import React from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

import { Header } from '../../components/Header';

import * as SC from './styles';

interface IAuthor {
  fullName: string;
  avatarUrl: string;
  githubUsername?: string;
  linkedinUrl: string;
}

const authors: IAuthor[] = [
  {
    fullName: 'Angelo Evangelista',
    avatarUrl: 'https://i.imgur.com/t8FEN1p.jpg',
    githubUsername: 'angeloevangelista',
    linkedinUrl: 'https://www.linkedin.com/in/angelo-evangelista-5474a2177',
  },
  {
    fullName: 'Anderson Conceição',
    avatarUrl: 'https://i.imgur.com/wCD1SBY.jpg',
    githubUsername: 'and33r',
    linkedinUrl:
      'https://www.linkedin.com/in/anderson-concei%C3%A7%C3%A3o-3280711b4',
  },
  {
    fullName: 'Renato Araújo',
    avatarUrl: 'https://i.imgur.com/kyErhnr.jpg',
    githubUsername: 'W4rL0ck1',
    linkedinUrl: 'https://www.linkedin.com/in/rnt-13',
  },
  {
    fullName: 'Fernando Avelino',
    avatarUrl: 'https://i.imgur.com/vHw6UQE.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/fernando-avelino-633303143/',
  },
].sort((a, b) => (a.fullName > b.fullName ? 1 : -1));

const Home: React.FC = () => {
  return (
    <SC.Container>
      <Header />

      <SC.MainContent className="container">
        <SC.AuthorsContainer className="authors-container">
          {authors.map((author) => (
            <li key={author.fullName} className="author">
              <div className="photo">
                <img src={author.avatarUrl} alt={author.fullName} />
              </div>

              <div className="info">
                <strong>{author.fullName}</strong>

                {author.githubUsername && (
                  <a
                    rel="noopener noreferrer"
                    href={`https://github.com/${author.githubUsername}`}
                    target="_blank"
                  >
                    <FiGithub size={24} />
                    <span>/{author.githubUsername}</span>
                  </a>
                )}
              </div>

              <a
                rel="noopener noreferrer"
                href={author.linkedinUrl}
                target="_blank"
              >
                <FiLinkedin size={32} />
              </a>
            </li>
          ))}
        </SC.AuthorsContainer>
      </SC.MainContent>
    </SC.Container>
  );
};

export { Home };
