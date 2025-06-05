import { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { projects } from "../utils/constant";
import type { Swiper as SwiperType } from "swiper";
import Tippy from "@tippyjs/react";
import { followCursor } from "tippy.js";

const ProjectShowcase: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  const activeProject = projects[activeIndex];

  // Assign navigation after DOM rendered
  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.params.navigation &&
      typeof swiperRef.current.params.navigation !== "boolean"
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;

      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <section>
      <div className="title">
        <span className="text-primary-02 uppercase">
          What I have done so far
        </span>
        <h2 className="text-title-sm md:text-title-lg tracking-title flex gap-2">
          {["P", "R", "O", "J", "E", "C", "T", "S"].map((char, index) => (
            <span key={index} className="bounce ">
              {char}
            </span>
          ))}
        </h2>
      </div>
      <div className="flex flex-col md:flex-row gap-6 items-start mx-auto p-6">
        {/* Left Panel */}
        <div className="w-full md:w-1/2">
          <div className="h-[380px] space-y-4">
            <div className="text-primary_02 text-6xl font-bold">{`0${
              activeIndex + 1
            }`}</div>
            <h2 className="text-white text-3xl font-bold">
              {activeProject.title}
            </h2>
            <Tippy
              content={
                <span className="text-sm text-white ">
                  {activeProject.description}
                </span>
              }
              className="bg-primary_01 rounded-md px-3 py-2"
              animation="shift-away"
              theme="light-border"
              maxWidth="360px"
              followCursor={true}
              plugins={[followCursor]}
              duration={[300, 200]}
            >
              <p className="text-gray-400 line-clamp-5 cursor-pointer">
                {activeProject.description}
              </p>
            </Tippy>
            <p className="text-primary_02 text-sm whitespace-pre-line">
              <strong>Role:</strong> {activeProject.role}
            </p>
            <p className="text-primary_02 text-sm">
              <strong>Technologies:</strong> {activeProject.technologies}
            </p>
          </div>
          <div className="flex gap-4 pt-2">
            {activeProject.link && (
              <a
                href={activeProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white text-primary_02 transition p-1 rounded-full border-solid border-primary_02 border"
              >
                <Icon
                  icon="solar:arrow-right-up-line-duotone"
                  width={24}
                  height={24}
                />
              </a>
            )}
            {activeProject.github && (
              <a
                href={activeProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white text-primary_02 transition p-1 rounded-full border-solid border-primary_02 border"
              >
                <Icon icon="mdi:github" width={24} height={24} />
              </a>
            )}
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-full md:w-1/2 relative">
          <Swiper
            modules={[Navigation]}
            navigation={false}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="rounded-lg overflow-hidden"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <img
                  src={project.image[0]}
                  alt={project.title}
                  className="w-full h-[380px] object-cover rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            ref={prevRef}
            className="!bg-primary_02 !absolute -bottom-[50px] right-14 z-10 rounded-sm"
          >
            <Icon
              icon="material-symbols:chevron-left-rounded"
              width={36}
              height={36}
            />
          </button>
          <button
            ref={nextRef}
            className="!bg-primary_02 !absolute -bottom-[50px] right-4 z-10 rounded-sm"
          >
            <Icon
              icon="material-symbols:chevron-right-rounded"
              width={36}
              height={36}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
