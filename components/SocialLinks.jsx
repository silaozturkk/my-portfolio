
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="fixed bottom-6 left-6 flex flex-col gap-4 z-50 ">
      <a
        href="https://github.com/silaozturkk"
        target="_blank"
        rel="noopener noreferrer"
        className="text-purple-600 dark:text-purple-400 text-xl transition-colors duration-300"
      >
        <FaGithub size={50} />
      </a>
      <a
        href="https://www.linkedin.com/in/sıla-öztürk1/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 dark:text-blue-500 text-xl transition-colors duration-300"
      >
        <FaLinkedin size={50} />
      </a>
    </div>
  );
};

export default SocialLinks;
