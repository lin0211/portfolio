import { skillLists } from "./Skills_List";
export const Skills = () => {
  return (
    <section id="skills" className="snap-start h-screen relative">
      <div className="h-screen flex flex-col justify-center items-center gap-10 px-4">
        <h2 className="text-3xl xl:text-5xl font-OAGothic-ExtraBold">SKILLS</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6  gap-8">
          {skillLists.map((list) => {
            return (
              <figure className="text-center" key={list.name}>
                <img src={list.imageSrc} alt={list.name} />
                <figcaption>{list.name}</figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
};
