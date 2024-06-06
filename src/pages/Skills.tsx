import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

const Skills: FunctionComponent = () => {
  return (
    <div className="w-full h-[1285px] relative bg-whitesmoke-100 overflow-hidden flex flex-col items-start justify-start pt-[105px] px-0 pb-[363px] box-border gap-[187px] leading-[normal] tracking-[normal] lg:h-auto mq450:gap-[47px] mq825:gap-[93px]">
      <section className="self-stretch flex flex-col items-end justify-start py-0 pr-[3px] pl-0 box-border gap-[93px] max-w-full shrink-0 text-left text-16xl text-black font-jacques-francois mq450:gap-[23px] mq825:gap-[46px]">
        <div className="self-stretch bg-gainsboro-100 overflow-hidden flex flex-row items-end justify-between py-7 pr-[73px] pl-20 box-border max-w-full gap-[20px] lg:flex-wrap mq825:pl-10 mq825:pr-9 mq825:box-border">
          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[27px]">
            <h3 className="m-0 relative text-inherit leading-[53px] font-normal font-inherit mq450:text-2xl mq450:leading-[31px] mq825:text-9xl mq825:leading-[42px]">
              Dina Rodriguez
            </h3>
          </div>
          <div className="w-[524px] flex flex-row items-start justify-start gap-[40px] max-w-full text-darkslategray-200 font-arya mq825:flex-wrap mq825:gap-[20px]">
  <Link to="/projects" className="flex-1 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg bg-darkseagreen flex flex-row items-start justify-start py-[27.5px] px-[59px] box-border min-w-[157px]">
    <h3 className="m-0 relative text-inherit leading-[53px] font-normal font-inherit inline-block min-w-[123px] mq450:text-2xl mq450:leading-[31px] mq825:text-9xl mq825:leading-[42px]">
      Projects
    </h3>
  </Link>
  <Link to="/coding" className="flex-[0.8387] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg bg-darkseagreen flex flex-row items-start justify-start py-[27.5px] px-[69px] box-border min-w-[157px] mq450:flex-1">
    <h3 className="m-0 relative text-inherit leading-[53px] font-normal font-inherit inline-block min-w-[104px] mq450:text-2xl mq450:leading-[31px] mq825:text-9xl mq825:leading-[42px]">
      Coding
    </h3>
  </Link>
</div>
        </div>
        <div className="flex flex-row items-start justify-end py-0 pr-px pl-0 box-border max-w-full text-[75px] text-lemonchiffon font-arya">
          <div className="w-[1436px] flex flex-row items-start justify-start py-0 pr-0 pl-[772px] box-border [row-gap:20px] max-w-full mq450:pl-5 mq450:box-border mq825:pl-[193px] mq825:box-border mq1425:flex-wrap mq1425:pl-[386px] mq1425:box-border">
            <div className="ml-[-774px] flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border min-w-[774px] max-w-[117%] shrink-0 lg:min-w-full mq450:min-w-full mq825:min-w-full mq1425:flex-1 mq1425:min-w-full">
              <div className="bg-seagreen flex flex-row items-start justify-end pt-[165px] px-[70px] pb-[127px] box-border shrink-0 [debug_commit:bf4bc93] max-w-full mq825:pt-[107px] mq825:px-[35px] mq825:pb-[83px] mq825:box-border">
                <div className="h-[502px] w-[774px] relative bg-seagreen hidden max-w-full" />
                <div className="w-[624px] bg-seagreen flex flex-col items-start justify-start gap-[24px] max-w-full z-[1]">
                  <h1 className="m-0 self-stretch h-[150px] relative text-inherit tracking-[-0.02em] font-normal font-inherit inline-block mq450:text-[45px] mq825:text-[60px]">
                    Web Systems and Technologies
                  </h1>
                  <div className="w-[147px] relative text-5xl leading-[150%] font-body-text text-gray flex items-center mq450:text-lgi mq450:leading-[29px]">
                    Skils
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[664px] rounded-[5px] box-border overflow-hidden shrink-0 flex flex-row items-start justify-start pt-5 px-5 pb-0 min-w-[664px] [debug_commit:bf4bc93] max-w-full text-xl text-black font-body-text border-[1px] border-dashed border-darkolivegreen lg:min-w-full mq450:min-w-full mq825:min-w-full mq1425:flex-1 mq1425:min-w-full">
              <div className="h-[540px] flex-1 flex flex-row items-start justify-start pt-0 px-0 pb-[54px] box-border max-w-full mq825:pb-[35px] mq825:box-border">
                <div className="mt-[-24px] flex-1 relative leading-[150%] font-medium inline-block max-w-full mq450:text-base mq450:leading-[24px]">
                  <p className="m-0">&nbsp;</p>
                  <ul className="m-0 font-inherit text-inherit pl-[27px]">
                    <li className="mb-0">HTML (HyperText Markup Language)</li>
                    <li className="mb-0">CSS (Cascading Style Sheets)</li>
                    <li className="mb-0">Docker (for containerization)</li>
                    <li className="mb-0">{`JavaScript `}</li>
                    <li className="mb-0">Promise API</li>
                    <li className="mb-0">Node.js</li>
                    <li className="mb-0">
                      Express (web framework for Node.js) (04 Express.pdf)
                    </li>
                    <li className="mb-0">
                      Linting (tools like ESLint for code quality)
                    </li>
                    <li className="mb-0">Git</li>
                    <li className="mb-0">Database configuration and queries</li>
                    <li className="mb-0">
                      Building APIs (endpoints and database integration)
                    </li>
                    <li className="mb-0">
                      React (JavaScript library for building user interfaces)
                    </li>
                    <li className="mb-0">
                      State and Props in React (state management and passing
                      data)JSX (JavaScript XML, syntax extension for React)
                    </li>
                    <li className="mb-0">Combining state and props</li>
                    <li className="mb-0">Jest</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="self-stretch bg-whitesmoke-200 overflow-hidden flex flex-col items-start justify-start pt-px pb-[136px] pr-[62px] pl-[65px] box-border gap-[18px] max-w-full text-left text-5xl text-black font-jacques-francois mq825:pl-8 mq825:pr-[31px] mq825:box-border">
        <div className="self-stretch h-px flex flex-row items-start justify-start py-0 pr-[17px] pl-[15px] box-border max-w-full">
          <div className="self-stretch flex-1 relative box-border max-w-full border-t-[1px] border-solid border-gainsboro-100" />
        </div>
        <div className="w-[187px] h-9 hidden" />
        <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
          <img
            className="h-10 w-10 absolute !m-[0] right-[-2.4px] bottom-[32px] rounded object-cover"
            loading="lazy"
            alt=""
            src="/buttons--icon@2x.png"
          />
          <div className="flex-1 flex flex-col items-start justify-start gap-[36px] max-w-full mq825:gap-[18px]">
            <div className="relative leading-[150%] mq450:text-lgi mq450:leading-[29px]">
              Dina’s Portfolio
            </div>
            <div className="w-[1253px] flex flex-row items-start justify-start py-0 px-[1075px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq825:pl-[268px] mq825:pr-[268px] mq825:box-border mq1425:pl-[537px] mq1425:pr-[537px] mq1425:box-border">
              <div className="w-[238px] relative leading-[150%] flex items-center whitespace-nowrap shrink-0 z-[1] mq450:text-lgi mq450:leading-[29px]">
                rod19566@uvg.edu.gt
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Skills;
