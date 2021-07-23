import styled from 'styled-components';

export const Container = styled.div``;

export const MainContent = styled.div`
  flex: 1;

  width: 100%;
  max-width: 1000px;

  margin: 6rem auto 2rem auto;
`;

export const AuthorsContainer = styled.ul`
  margin: 4rem 1.4rem;

  li {
    text-decoration: none;

    width: 100%;

    padding: 3rem;

    border-radius: 0.4rem;
    background-color: var(--background-secondary);

    display: flex;
    align-items: center;

    transition: all 0.5s ease;
    transition-property: box-shadow transform;

    border: solid 1px #d1d5d9;
    box-shadow: 0px 0px 60px 8px rgba(0, 0, 0, 0.05);

    @media (max-width: 700px) {
      padding: 1.4rem;
    }

    &:hover {
      transform: translate3d(8px, 0, 0) scale(1.001);
      box-shadow: 0px 0px 60px 8px rgba(0, 0, 0, 0.1);
    }

    & + li {
      margin-top: 2rem;
    }

    .photo {
      min-width: 80px;
      max-width: 80px;
      min-height: 80px;
      max-height: 80px;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 100%;
      background-color: #343a40;
      border: solid 2px #282a2b;

      overflow: hidden;

      background-position: center;
      background-repeat: no-repeat;
      background-size: 50%;

      img {
        width: 100%;
        height: 100%;
      }

      @media (max-width: 700px) {
        min-width: 64px;
        min-height: 64px;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    .info {
      margin-left: 2rem;

      display: flex;
      flex-direction: column;
      justify-content: center;

      a {
        display: flex;
        align-items: center;

        color: #29292e;

        margin-top: 0.4rem;
        padding: 0.4rem 0;

        svg {
          margin-right: 1rem;
        }

        span {
          text-decoration: none;
        }
      }

      strong {
        font-size: 2.8rem;
        display: block;

        @media (max-width: 700px) {
          font-size: 1.8rem;
        }
      }
    }

    > a {
      color: #29292e;
      margin-left: auto;
    }
  }
`;
