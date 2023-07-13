import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { animations } from "../constants";

const AnimationCard = ({ index, name, video }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-5 rounded-3xl xs:w-[600px] xl:w-full"
  >
    <p className="text-white font-black text-[24px]">{name}</p>

    <div className="mt-1">
      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <div className="relative w-full h-full">
            {/* <img
              src={video}
              alt={name}
              className="w-full h-full object-cover rounded-2xl"
            /> */}
            <video controls autoPlay loop muted>
              <source src={video} type="video/mp4"></source>
            </video>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const Animation = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Maya Projects</p>
          <h2 className={styles.sectionHeadText}>3D animation</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {animations.map((animation, index) => (
          <AnimationCard
            key={animation.name}
            index={index}
            {...animation}
          ></AnimationCard>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Animation, "");
