import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

const Projects: FunctionComponent = () => {
  return (
    <div className="w-full h-[1285px] relative bg-gainsboro-100 overflow-hidden flex flex-col items-start justify-start pt-[42px] px-0 pb-[58px] box-border gap-[276px] leading-[normal] tracking-[normal] mq450:gap-[138px] mq825:gap-[69px]">
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-[74px] pb-[250px] box-border max-w-full shrink-0 text-left text-45xl text-darkgreen font-body-text mq450:pl-[37px] mq450:pr-[37px] mq450:box-border mq1425:pb-[162px] mq1425:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[30px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[79px] mq825:pl-5 mq825:box-border">
          
      <h1 className="m-0 w-[303px] relative text-inherit tracking-[-0.02em] font-bold font-inherit inline-block shrink-0 mq825:text-19xl mq1425:text-32xl">
              Projects
            </h1>
          </div>
          <div className="self-stretch h-[398px] flex flex-row flex-wrap items-start justify-between pt-0 px-0 pb-0 box-border gap-[8px] max-w-full text-5xl text-black">
            <div className="w-[621px] flex flex-col items-start justify-start gap-[24px] max-w-full shrink-0">
              <img
                className="self-stretch h-[281px] relative rounded-lg max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/HTMLPage1.png"
              />
              <div className="self-stretch flex flex-col items-start justify-center gap-[4px]">
                <h3 className="m-0 self-stretch relative text-inherit leading-[150%] font-normal font-inherit mq825:text-lgi mq825:leading-[29px]">
                  HTML and CSS Design
                </h3>
                <div className="self-stretch relative text-xl leading-[150%] font-medium text-gray mq825:text-base mq825:leading-[24px]">
                  Website Building: HTML to structure content, while using CSS
                  to style, enabling the creation of visually appealing and
                  functional web pages.
                </div>
              </div>
            </div>
            <div className="w-[621px] flex flex-col items-start justify-start gap-[24px] max-w-full shrink-0">
              <img
                className="[border:none] bg-[transparent] h-[281px] w-auto [outline:none] self-stretch relative rounded-lg max-w-full overflow-hidden shrink-0 object-cover"
                rows={14}
                cols={31}
                alt=""
                src="/ArpanetosChatJavaScript.png"
              />
              <div className="self-stretch flex flex-col items-start justify-center gap-[4px]">
                <h3 className="m-0 self-stretch relative text-inherit leading-[150%] font-normal font-inherit mq825:text-lgi mq825:leading-[29px]">{`Javascript `}</h3>
                <div className="self-stretch relative text-xl leading-[150%] font-medium text-gray mq825:text-base mq825:leading-[24px]">
                  Add interactivity and dynamic behavior to websites: Allowing
                  user interactions, and perform tasks such as form validation,
                  animations, and fetching data from servers.
                </div>
              </div>
            </div>
            <div className="w-[621px] flex flex-col items-start justify-start gap-[24px] max-w-full shrink-0">
              <img
                className="[border:none] bg-[transparent] h-[251px] w-auto [outline:none] self-stretch relative rounded-lg max-w-full overflow-hidden shrink-0 object-cover"
                rows={13}
                cols={31}
                alt=""
                src="/CSATYarn.png"
              />
              <div className="self-stretch flex flex-col items-start justify-center gap-[4px]">
                <h3 className="m-0 self-stretch relative text-inherit leading-[150%] font-normal font-inherit mq825:text-lgi mq825:leading-[29px]">
                  React + Vite + Typescript
                </h3>
                <div className="self-stretch relative text-xl leading-[150%] font-medium text-gray mq825:text-base mq825:leading-[24px]">{`Combined to streamline web development: React enables component-based UI creation, Vite offers a speedy development server, and TypeScript adds static typing for better code quality and productivity. Runs with npm and yarn. `}</div>
              </div>
            </div>
            <div className="w-[621px] flex flex-col items-start justify-start pt-0 px-0 pb-[57px] box-border gap-[24px] max-w-full shrink-0 mq825:pb-[37px] mq825:box-border">
              <img
                className="self-stretch h-[286px] relative rounded-lg max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/image-3@2x.png"
              />
              <div className="self-stretch flex flex-col items-start justify-center py-0 px-0 gap-[4px]">
                <h3 className="m-0 self-stretch relative text-inherit leading-[150%] font-normal font-inherit mq825:text-lgi mq825:leading-[29px]">
                  Web Server + MySQL DB deployment with Docker
                </h3>
                <div className="self-stretch relative text-xl leading-[150%] font-medium text-gray mq825:text-base mq825:leading-[24px]">{`Deploying a web server and MySQL database with Docker streamlining application deployment. `}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start py-0 px-[74px] box-border max-w-full mq450:pl-[37px] mq450:pr-[37px] mq450:box-border">
        <div className="h-[154px] flex-1 relative max-w-full">
          <input
            className="w-full [border:none] [outline:none] bg-lightgray absolute top-[0px] left-[0px] h-[51px] flex flex-row items-start justify-start py-[7.5px] px-0 box-border font-body-text text-5xl text-black"
            placeholder="Links"
            type="text"
          />
          <footer className="absolute top-[46px] left-[0px] w-[1129px] flex flex-row flex-wrap items-start justify-start gap-[27px] max-w-full text-left text-xl text-gray font-body-text">
            <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border min-w-[370px] max-w-full mq450:min-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[11px] max-w-full">
                <div className="w-[532px] flex flex-col items-start justify-start gap-[6px] max-w-full">
                  <u className="relative [text-decoration:underline] leading-[150%] font-medium inline-block max-w-full mq825:text-base mq825:leading-[24px]">
                    https://reactdogsblog.netlify.app/
                  </u>
                  <a
                    className="self-stretch relative [text-decoration:underline] leading-[150%] font-medium text-[inherit] mq825:text-base mq825:leading-[24px]"
                    href="https://github.com/Rod19566/Lab3HTMLOnly"
                    target="_blank"
                  >
                    https://github.com/Rod19566/Lab3HTMLOnly
                  </a>
                </div>
                <u className="self-stretch relative [text-decoration:underline] leading-[150%] font-medium mq825:text-base mq825:leading-[24px]">
                  https://github.com/Rod19566/Lab6ServerSideJavascript
                </u>
              </div>
            </div>
            <div className="w-[532px] flex flex-col items-start justify-start gap-[7px] max-w-full">
              <u className="relative [text-decoration:underline] leading-[150%] font-medium inline-block max-w-full mq825:text-base mq825:leading-[24px]">
                https://github.com/Rod19566/Lab5JSOnly
              </u>
              <u className="self-stretch relative [text-decoration:underline] leading-[150%] font-medium mq825:text-base mq825:leading-[24px]">
                https://github.com/Rod19566/Lab7_React
              </u>
            </div>
            <div>
              <Link to="/" className="shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg bg-darkseagreen flex items-center justify-center h-[10px] w-[10px] no-underline">
              Skills Page
              </Link>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
};

export default Projects;
