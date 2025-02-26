import { stats } from "../constants";

const Stats = () => (
  <section className="flex flex-row flex-wrap sm:mb-20 mb-6 px-6 sm:px-12 md:px-24 lg:px-32">
    {stats.map((stat) => (
      <div key={stat.id} className="flex-1 flex justify-start items-center flex-col m-3" >
        <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-[#8F0D0D]">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;