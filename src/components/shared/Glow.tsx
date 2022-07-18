import './Glow.scss';

const Glow: React.FC = () => (
  <svg
    className="glow-circle"
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse
      cx="40"
      cy="40"
      rx="40"
      ry="40"
      fill="url(#paint0_radial_761_855)"
      fillOpacity="0.67"
    />
    <defs>
      <radialGradient
        id="paint0_radial_761_855"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(40 40) rotate(90) scale(40 40)"
      >
        <stop stopColor="white" />
        <stop
          offset="1"
          stopColor="white"
          stopOpacity="0.4"
        />
      </radialGradient>
    </defs>
  </svg>
);

export default Glow;
