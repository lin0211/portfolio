import { createPortal } from "react-dom";
import FocusLock from "react-focus-lock";
import { motion } from "framer-motion";
interface ModalProps {
  id: string;
  isVisible: boolean;
  closeModal: (id: string) => void;
  project: ProjectProps;
}
interface ProjectProps {
  id: string;
  name: string;
  description: string;
  date: string;
  type: string;
  skill: string[];
  git: string;
  imageSrc: string[];
  videoSrc: string;
  site_Address: string;
  role: string;
}

const Modal: React.FC<ModalProps> = ({
  id,
  isVisible,
  closeModal,
  project,
}) => {
  if (!isVisible) return null;
  const { name, description, date, skill, git, videoSrc, site_Address } =
    project;
  return createPortal(
    <FocusLock>
      <motion.div className="w-full h-full fixed top-0 left-0 bg-main-gray/80 flex justify-center items-center z-50 text-black pt-20">
        <motion.div
          initial={{ y: "100%" }}
          animate={{
            y: 0,
            transition: { duration: 0.5, delay: 0.2 },
          }}
          className="w-full h-full rounded bg-white flex flex-col border-8 gap-6 relative p-4 justify-center text-center"
        >
          <button
            className="absolute top-2 right-2 w:10 h-10 sm:w-12 sm:h-12 hover:scale-110"
            onClick={() => closeModal(id)}
          >
            <img className="w-full h-full" src="/close.svg" alt="" />
          </button>
          <h2 className="font-OAGothic-ExtraBold text-2xl flex flex-col">
            <span className="text-4xl bg-gradient-to-b from-main-blue  to-main-purple inline-block text-transparent bg-clip-text">
              {name}
            </span>
            <span className="text-main-gray/80">
              {description.replace("/", "")}
            </span>
          </h2>

          <p className="text-main-gray text-base">"{date}"</p>

          <img
            className="w-full md:w-2/3 max-w-[60rem] aspect-video mx-auto"
            src={videoSrc}
          ></img>

          <div className="flex flex-wrap mx-auto w-full md:w-2/3 max-w-[60rem]">
            {skill.map((list: string, index: number) => {
              return (
                <span
                  key={index}
                  className="border rounded-xl bg-main-blue px-2 py-1 mx-0.5 text-white text-sm"
                >
                  {list}
                </span>
              );
            })}
          </div>
          <div className="w-full md:w-2/3 max-w-[60rem] grid grid-cols-2 mx-auto">
            <a
              className="flex justify-center items-center border-2 bg-main-gray py-1 rounded text-white hover:scale-95"
              href={git}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-6 h-6 filter invert me-4 hidden xs:inline"
                src="/project/github-mark.svg"
                alt="github"
              />
              Github 보러가기
            </a>
            {site_Address != "" && (
              <a
                className="flex justify-center items-center border-2 bg-main-gray py-1 rounded text-white hover:scale-95"
                href={site_Address}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-6 h-6 filter invert me-4 hidden xs:inline"
                  src="/project/website-mark.svg"
                  alt="website"
                />
                Site 보러가기
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </FocusLock>,
    document.body
  );
};

export default Modal;
