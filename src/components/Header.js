import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ togglTheme }) => {
  return (
    <div className="header py-2">
      <div className="d-flex justify-content-between align-items-center px-5">
        <h2>Where in the World?</h2>
        <a
          href="https://github.com/davitglonti"
          target="_blank"
          className="github"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  );
};

export default Header;
