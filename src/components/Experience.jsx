import React from "react";
import ExpCard from "../common/ExpCard";

const Experience = () => {
  const title = `experience`;
  const data = () => (
    [{
      title:`Walmart Labs`,
      subtitle:`softWare engineer III`,
      duration:`Apr 2023 - Present`
    },{
      title:`tata consultancy services`,
      subtitle:`Custom-software Engineer Senior analst`,
      duration:`Aug 2021 - Mar 2023`,
      right:true
    },{
      title:`tata consultancy services`,
      subtitle:`systems engineer`,
      duration:`Nov 2018 - Jul 2021`
    },
  ]
  )
  return (
    <div className="md:px-4  flex w-full flex-col uppercase h-full">
      <h2 className="text-2xl font-bold py-4">{title}</h2>
      <div className="flex flex-col pt-4 justify-around">
        {data().map((e,i)=>
        {
          return <ExpCard {...e} key={i} />
        })}
      </div>
    </div>
  );
};

export default Experience;
