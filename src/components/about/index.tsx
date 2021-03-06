import React from 'react';
import { useNavigate } from 'react-router-dom';

import FadePage from '../shared/FadePage';
import IconButton, { Icon } from '../shared/IconButton';

import './index.scss';

const MIDELogo: React.FC = () => (
  <svg
    width="217"
    height="79"
    viewBox="0 0 217 79"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g
      clipPath="url(#clip0_29_467)"
      filter="url(#filter0_d_29_467)"
    >
      <path
        d="M42.3878 43.1071V59.0821C42.3878 61.6179 41.886 63.5196 40.7569 64.7875C39.6278 66.0554 38.2479 66.6893 36.4916 66.6893C34.7353 66.6893 33.3553 66.0554 32.3517 64.7875C31.2227 63.5196 30.7209 61.6179 30.7209 59.0821V39.9375C30.7209 36.8946 30.5954 34.6125 30.47 32.9643C30.2191 31.3161 29.7173 29.9214 28.8391 28.9071C27.961 27.8929 26.581 27.2589 24.8247 27.2589C21.0612 27.2589 18.6777 28.6536 17.5486 31.3161C16.4196 33.9786 15.7923 37.9089 15.7923 42.9804V59.2089C15.7923 61.7446 15.2905 63.6464 14.1615 64.9143C13.0324 66.1821 11.6525 66.8161 9.89616 66.8161C8.13986 66.8161 6.7599 66.1821 5.63085 64.9143C4.5018 63.3929 4 61.4911 4 58.9554V24.7232C4 22.4411 4.5018 20.7929 5.5054 19.525C6.509 18.3839 7.76351 17.75 9.39436 17.75C10.8998 17.75 12.2797 18.2571 13.2833 19.3982C14.2869 20.5393 14.7887 22.0607 14.7887 23.9625V25.1036C16.7959 22.5679 18.8031 20.7929 21.0612 19.6518C23.3193 18.5107 25.8283 17.8768 28.5882 17.8768C31.4736 17.8768 33.8571 18.5107 35.9898 19.6518C37.997 20.7929 39.7533 22.6946 41.0078 25.1036C42.8896 22.6946 45.0222 20.7929 47.1549 19.6518C49.2875 18.5107 51.7965 17.8768 54.431 17.8768C57.5672 17.8768 60.2017 18.5107 62.4598 19.7786C64.7179 21.0464 66.3487 22.9482 67.4778 25.3571C68.4814 27.5125 68.9832 30.9357 68.9832 35.6268V59.0821C68.9832 61.6179 68.4814 63.5196 67.3523 64.7875C66.2233 66.0554 64.8433 66.6893 63.087 66.6893C61.3307 66.6893 59.9508 66.0554 58.8217 64.7875C57.6927 63.5196 57.1909 61.6179 57.1909 59.0821V38.7964C57.1909 36.2607 57.0654 34.1054 56.94 32.5839C56.6891 31.0625 56.1873 29.6679 55.3091 28.6536C54.431 27.6393 53.051 27.1321 51.1693 27.1321C49.6639 27.1321 48.2839 27.6393 46.904 28.5268C45.524 29.4143 44.5204 30.6821 43.7677 32.3304C42.8896 34.3589 42.3878 37.9089 42.3878 43.1071Z"
        fill="white"
      />
      <path
        d="M79.1447 12.0447C77.5138 12.0447 76.1339 11.5375 74.8794 10.5232C73.7503 9.50894 73.123 7.98751 73.123 6.21251C73.123 4.5643 73.7503 3.16966 74.8794 2.02859C76.1339 0.887514 77.5138 0.380371 79.0192 0.380371C80.5246 0.380371 81.9046 0.887514 83.1591 1.9018C84.2881 2.91609 84.9154 4.31073 84.9154 6.21251C84.9154 8.1143 84.2881 9.50894 83.1591 10.5232C82.1555 11.5375 80.7755 12.0447 79.1447 12.0447Z"
        fill="#A2C129"
      />
      <path
        d="M85.0408 24.4696V59.3357C85.0408 61.7446 84.539 63.5196 83.2845 64.7875C82.1555 66.0554 80.7755 66.6893 79.0192 66.6893C77.2629 66.6893 75.883 66.0554 74.7539 64.7875C73.6249 63.5196 73.123 61.7446 73.123 59.3357V24.85C73.123 22.4411 73.6249 20.6661 74.7539 19.525C75.883 18.2571 77.2629 17.75 79.0192 17.75C80.7755 17.75 82.1555 18.3839 83.2845 19.525C84.539 20.6661 85.0408 22.3143 85.0408 24.4696Z"
        fill="white"
      />
      <path
        d="M125.561 59.8429V58.7018C123.93 60.6036 122.425 61.9982 120.794 63.1393C119.289 64.2804 117.533 65.1679 115.776 65.8018C114.02 66.4357 112.013 66.6893 109.88 66.6893C106.995 66.6893 104.36 66.0554 101.977 64.9143C99.5931 63.6464 97.4605 61.9982 95.7042 59.7161C93.9479 57.4339 92.5679 54.7714 91.6898 51.7286C90.8116 48.6857 90.3098 45.3893 90.3098 41.8393C90.3098 34.3589 92.0661 28.5268 95.7042 24.3429C99.3422 20.1589 104.109 18.0036 110.005 18.0036C113.393 18.0036 116.278 18.6375 118.662 19.7786C121.045 20.9196 123.303 22.8214 125.561 25.2304V7.48036C125.561 5.07143 126.063 3.16964 127.067 1.90179C128.07 0.633929 129.45 0 131.207 0C132.963 0 134.343 0.633929 135.346 1.775C136.35 2.91607 136.852 4.69107 136.852 6.84643V59.7161C136.852 61.9982 136.35 63.7732 135.221 64.9143C134.217 66.0554 132.837 66.6893 131.207 66.6893C129.576 66.6893 128.196 66.0554 127.192 64.9143C126.063 63.6464 125.561 61.9982 125.561 59.8429ZM102.228 42.2196C102.228 45.5161 102.729 48.1786 103.733 50.4607C104.737 52.7429 106.117 54.5179 107.873 55.6589C109.629 56.8 111.511 57.4339 113.518 57.4339C115.651 57.4339 117.533 56.9268 119.163 55.7857C120.92 54.6446 122.3 52.9964 123.303 50.7143C124.307 48.4321 124.809 45.6429 124.809 42.2196C124.809 39.05 124.307 36.2607 123.303 33.9786C122.3 31.6964 120.92 29.9214 119.163 28.6536C117.407 27.3857 115.525 26.8786 113.393 26.8786C111.26 26.8786 109.253 27.5125 107.622 28.7804C105.866 30.0482 104.611 31.8232 103.608 34.1054C102.729 36.3875 102.228 39.05 102.228 42.2196Z"
        fill="white"
      />
      <path
        d="M201.458 42.0928C200.957 58.575 187.408 71.5071 171.225 71C154.916 70.4928 142.12 56.8 142.622 40.4446C143.124 23.9625 156.673 11.0303 172.856 11.5375C189.164 11.9178 201.96 25.6107 201.458 42.0928Z"
        fill="#A2C129"
      />
      <path
        d="M183.018 43.8679H162.946C162.946 46.2768 163.447 48.3054 164.325 50.0804C165.204 51.8554 166.458 53.25 167.964 54.1375C169.469 55.025 171.1 55.5321 172.982 55.5321C174.236 55.5321 175.365 55.4054 176.369 55.1518C177.372 54.8982 178.376 54.3911 179.254 53.7571C180.258 53.1232 181.136 52.4893 181.888 51.7286C182.641 50.9679 183.77 50.0804 185.025 48.8125C185.527 48.3054 186.279 48.1786 187.283 48.1786C188.286 48.1786 189.165 48.4321 189.792 49.0661C190.419 49.7 190.795 50.4607 190.795 51.475C190.795 52.3625 190.419 53.5036 189.666 54.7714C188.914 56.0393 187.785 57.1804 186.405 58.3214C184.899 59.4625 183.143 60.4768 180.885 61.2375C178.627 61.9982 176.118 62.3786 173.232 62.3786C166.709 62.3786 161.566 60.4768 157.928 56.6732C154.289 52.8696 152.408 47.7982 152.408 41.2054C152.408 38.1625 152.91 35.3732 153.788 32.7107C154.666 30.0482 156.046 27.8929 157.802 25.9911C159.558 24.0893 161.691 22.6947 164.2 21.6804C166.709 20.6661 169.469 20.1589 172.605 20.1589C176.62 20.1589 180.007 21.0464 182.892 22.6946C185.777 24.3429 187.91 26.625 189.29 29.2875C190.67 31.95 191.423 34.7393 191.423 37.5286C191.423 40.1911 190.67 41.8393 189.165 42.6C187.785 43.3607 185.777 43.8679 183.018 43.8679ZM163.071 37.9089H181.638C181.387 34.3589 180.383 31.8232 178.752 30.0482C177.121 28.2732 174.989 27.3857 172.229 27.3857C169.72 27.3857 167.587 28.2732 165.956 30.0482C164.451 31.8232 163.447 34.4857 163.071 37.9089Z"
        fill="white"
      />
      <path
        d="M208.107 18.2572C208.735 18.2572 209.362 18.384 209.989 18.6376C210.616 18.8911 211.118 19.2715 211.62 19.7786C212.122 20.2858 212.373 20.7929 212.749 21.4268C213 22.0608 213.125 22.6947 213.125 23.3286C213.125 24.2161 212.875 25.1036 212.498 25.8643C211.996 26.6251 211.495 27.259 210.742 27.6393C209.989 28.1465 209.111 28.2733 208.233 28.2733C207.355 28.2733 206.477 28.0197 205.724 27.6393C204.971 27.1322 204.344 26.6251 203.968 25.8643C203.466 25.1036 203.34 24.2161 203.34 23.3286C203.34 22.4411 203.591 21.5536 203.968 20.7929C204.469 20.0322 204.971 19.3983 205.724 19.0179C206.351 18.5108 207.229 18.2572 208.107 18.2572ZM208.107 19.2715C207.355 19.2715 206.727 19.3983 206.1 19.7786C205.473 20.159 204.971 20.6661 204.595 21.3001C204.218 21.934 204.093 22.5679 204.093 23.3286C204.093 24.0893 204.218 24.7233 204.595 25.3572C204.971 25.9911 205.473 26.4983 206.1 26.8786C206.727 27.259 207.355 27.3858 208.107 27.3858C208.86 27.3858 209.487 27.259 210.115 26.8786C210.742 26.4983 211.244 25.9911 211.495 25.3572C211.871 24.7233 211.996 24.0893 211.996 23.3286C211.996 22.5679 211.871 21.934 211.495 21.3001C211.118 20.6661 210.616 20.159 209.989 19.7786C209.487 19.3983 208.86 19.2715 208.107 19.2715ZM206.853 25.9911H205.724V20.6661H208.233C208.609 20.6661 208.986 20.6661 209.237 20.7929C209.487 20.9197 209.738 21.0465 209.864 21.3001C209.989 21.5536 210.115 21.8072 210.115 22.0608C210.115 22.4411 209.989 22.6947 209.738 23.0751C209.487 23.3286 209.111 23.4554 208.735 23.5822C208.986 23.709 209.111 23.8358 209.237 23.9626C209.362 24.0893 209.613 24.4697 209.738 24.8501L210.366 25.8643H208.986L208.609 24.9768C208.358 24.5965 208.233 24.3429 208.107 24.0893C207.982 23.9626 207.857 23.8358 207.731 23.709C207.606 23.5822 207.355 23.5822 207.229 23.5822H206.978V25.9911H206.853ZM206.853 21.4268V22.8215H207.731C208.107 22.8215 208.358 22.8215 208.609 22.6947C208.86 22.5679 208.86 22.4411 208.86 22.0608C208.86 21.8072 208.735 21.6804 208.609 21.5536C208.484 21.4268 208.107 21.4268 207.731 21.4268H206.853Z"
        fill="#A3C129"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_29_467"
        x="0"
        y="0"
        width="217"
        height="79"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood
          floodOpacity="0"
          result="BackgroundImageFix"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_29_467"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_29_467"
          result="shape"
        />
      </filter>
      <clipPath id="clip0_29_467">
        <rect
          width="209"
          height="71"
          fill="white"
          transform="translate(4)"
        />
      </clipPath>
    </defs>
  </svg>
);

const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <FadePage className="about">
      <IconButton
        className="about-close-btn"
        icon={Icon.CLOSE}
        onClick={() => {
          navigate(-1);
        }}
      />

      <h3 className="about-title mide-text">CR??DITOS</h3>

      <div className="about-content">
        <div className="about-content-col">
          <div className="about-content-item">
            <div className="about-content-title mide-text">
              Museo Interactivo de Econom??a
            </div>
          </div>

          <div className="about-content-item">
            <div className="about-content-title mide-text">
              Directora General
            </div>
            <div className="about-content-subtitle mide-text">
              Silvia Singer
            </div>
          </div>

          <div className="about-content-item">
            <div className="about-content-title mide-text">
              Director de Educaci??n
            </div>
            <div className="about-content-subtitle mide-text">
              Carlos Cruz
            </div>
          </div>

          <div className="about-content-item">
            <div className="about-content-title mide-text">
              Directora de Desarrollo
            </div>
            <div className="about-content-subtitle mide-text">
              Marta Ladr??n de Guevara
            </div>
          </div>

          <div className="about-content-item">
            <div className="about-content-title mide-text">
              Director de Comunicaci??n
            </div>
            <div className="about-content-subtitle mide-text">
              Sergio Rivera
            </div>
          </div>

          <div className="about-content-item">
            <div className="about-content-title mide-text">
              Gerente de Medios y Relaciones P??blicas
            </div>
            <div className="about-content-subtitle mide-text">
              Rafael Chontal
            </div>
          </div>

          <div className="about-content-item">
            <div className="about-content-title mide-text">
              Coordinador de Comunicaciones de Marketing
            </div>
            <div className="about-content-subtitle mide-text">
              Alfredo Ponce
            </div>
          </div>
        </div>

        <div className="about-content-col">
          <div className="about-content-item">
            <div className="about-content-title mide-text">
              Coordinadora de Comunicaci??n Educativa
            </div>
            <div className="about-content-subtitle mide-text">
              Ivonn?? Gonz??lez
            </div>
          </div>

          <div className="about-content-item">
            <div className="about-content-title mide-text">
              Coordinador de Educaci??n Digital
            </div>
            <div className="about-content-subtitle mide-text">
              Miguel R??os
            </div>
          </div>

          <div className="about-content-item">
            <div className="about-content-title mide-text">
              Coordinadora de Servicios al P??blico
            </div>
            <div className="about-content-subtitle mide-text">
              Natalia Garc??a
            </div>
          </div>

          <div className="about-content-item">
            <div className="about-content-title mide-text">
              Talleres y actividades educativas
            </div>
            <div className="about-content-subtitle mide-text">
              Cristina Barrita
            </div>
          </div>

          <div className="about-content-item">
            <div className="about-content-title mide-text">
              Jefe de Dise??o Publicitario
            </div>
            <div className="about-content-subtitle mide-text">
              Isaac Correa
            </div>
          </div>

          <div className="about-content-item">
            <div className="about-content-title mide-text">
              Coordinaci??n de proyecto y contenidos
            </div>
            <div className="about-content-subtitle mide-text">
              Luci??rnaga
              <br />
              Madelka Fiesco / Horacio Correa
            </div>
          </div>
        </div>

        <div className="about-content-col">
          <div className="about-content-item">
            <div className="about-content-title mide-text">
              Guion
            </div>
            <div className="about-content-subtitle mide-text">
              Gustavo de Anda
              <br />
              Luci??rnaga
              <br />
              Madelka Fiesco / Horacio Correa
            </div>
          </div>

          <div className="about-content-item">
            <div className="about-content-title mide-text">
              Dise??o e ilustraci??n
            </div>
            <div className="about-content-subtitle mide-text">
              Daniel S??nchez
            </div>
          </div>

          <div className="about-content-item">
            <div className="about-content-title mide-text">
              Dise??o de experiencia e interfaz
            </div>
            <div className="about-content-subtitle mide-text">
              Mart??n Pech
            </div>
          </div>

          <div className="about-content-item">
            <div className="about-content-title mide-text">
              Animaci??n
            </div>
            <div className="about-content-subtitle mide-text">
              Mart??n Pech / Stephanie Lichi
            </div>
          </div>

          <div className="about-content-item">
            <div className="about-content-title mide-text">
              Desarrollo web
            </div>
            <div className="about-content-subtitle mide-text">
              Diego Montesinos
            </div>
          </div>

          <div className="about-content-item">
            <div className="about-content-title mide-text">
              Agradecemos el valioso apoyo de las siguientes
              personas
            </div>
            <div className="about-content-subtitle mide-text">
              Camila V??zquez
              <br />
              Cinthia Abigail Le??n
              <br />
              Cristina Barrita
              <br />
              Marisol Rodr??guez
              <br />
              Mateo V??zquez
              <br />
              Monserrat Paredes
              <br />
              Natalia Garc??a
              <br />
              Rafael Chontal
            </div>
          </div>
        </div>
      </div>

      <div className="about-content-logo">
        <MIDELogo />
      </div>
    </FadePage>
  );
};

export default AboutPage;
