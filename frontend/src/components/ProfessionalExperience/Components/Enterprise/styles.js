/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const EnterpriseContainer = styled.article`
  box-shadow: 0 0 15px rgba(0,0,0,0.1);
  border-radius: 8px;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media(max-width: 875px){
    justify-content: center;
  }

  &:not(:last-child){
    margin-bottom: 25px;
  }

  .enterprise {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 875px){
      flex-direction: column;
    }
  }

  /* ABC71 */
  .enterprise .abc71  {
    width: 148px;
    height: auto;

    @media(max-width: 875px){
      margin-bottom: 2.5rem;
    }
  }

  /* Speksciences */
  .enterprise .speksciences  {
    width: 95px;
    height: auto;

    @media(max-width: 875px){
      margin-bottom: 2.5rem;
    }
  }

  /* TV UNESP */
  .enterprise .tv-unesp  {
    width: 95px;
    height: auto;

    @media(max-width: 875px){
      margin-bottom: 2.5rem;
    }
  }

  .enterprise .information {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    @media(max-width: 875px){
      align-items: center;
      justify-content: center;
    }
  }

  .enterprise .information h3 {
    margin-bottom: 20px;

    @media(max-width: 425px) {
      text-align: center;
    }
  }

  .enterprise .information h3 a {
    font-size: 1.8rem;
    color: #4e4cec;
    transition: color 0.3s;
  }

  .enterprise .information h3 a:hover {
    color: #9999ef;
  }

  .enterprise .information .position {
    margin-bottom: 20px;
    font-size: 1.8rem;

    @media(max-width: 425px) {
      text-align: center;
    }
  }

  .enterprise .information .date {
    font-size: 1.7rem;

    @media(max-width: 425px) {
      text-align: center;
    }
  }

  .more-information-button {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .more-information-button .divider {
    border-top: 3px solid #bbb;
    width: 45%;

    @media(max-width: 880px){
      width: 43%;
    }

    @media(max-width: 720px){
      width: 41%;
    }

    @media(max-width: 525px){
      width: 38%;
    }

    @media(max-width: 420px){
      width: 35%;
    }

    @media(max-width: 350px){
      width: 31%;
    }
  }

  .more-information-button .icon {
    display: flex;
    border: 2px solid black;
    padding: 4px;
    border-radius: 50%;
    transition: background-color 0.3s;
  }

  .more-information-button .icon:hover {
    cursor: pointer;
    background-color: gray;
  }

  .more-information {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
    margin-left: 15px;
  }

  .more-information p {
    margin-bottom: 15px;
    text-align: center;
  }

  .more-information li {
    list-style-type: disc;
    text-align: justify;

    @media(max-width: 385px) {
      text-align: center;
    }
  }

  .more-information li:not(:last-child) {
    margin-bottom: 10px;
  }
`;
