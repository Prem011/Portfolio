
const ServiceCard = ({ index, title, icon }) => {
    return (
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-[25.4vw] green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </Tilt>
      </motion.div>
    );
  };