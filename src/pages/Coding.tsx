import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

const Coding: FunctionComponent = () => {
  return (
    <div className="w-full h-[1285px] relative bg-gainsboro-100 overflow-hidden flex flex-col items-end justify-start pt-[72px] px-0 pb-[69px] box-border gap-[287px] leading-[normal] tracking-[normal] mq450:gap-[143px] mq1425:gap-[72px]">
      <main className="w-[1379px] flex flex-col items-end justify-start py-0 pr-0 pl-5 box-border gap-[13px] shrink-0 [debug_commit:bf4bc93] max-w-full">
        <section className="self-stretch flex flex-row items-start justify-start [row-gap:20px] max-w-full text-left text-45xl text-darkslategray-200 font-body-text">
          <div className="w-[621px] flex flex-col items-start justify-start gap-[76px] min-w-[621px] shrink-0 [debug_commit:bf4bc93] max-w-full mq450:gap-[38px] mq450:min-w-full mq1425:gap-[19px]">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-12 pl-[42px] box-border max-w-full mq450:pl-[21px] mq450:pr-6 mq450:box-border">
              <div className="flex-1 bg-gainsboro-200 flex flex-row items-start justify-center py-[79px] pr-5 pl-[53px] box-border max-w-full mq1425:pl-5 mq1425:box-border">
                <div className="h-[235px] w-[531px] relative bg-gainsboro-200 hidden max-w-full" />
                <h1 className="m-0 w-[268px] relative text-inherit tracking-[-0.02em] font-bold font-inherit inline-block shrink-0 z-[1] mq450:text-32xl mq1425:text-19xl">{`Coding `}</h1>
              </div>
            </div>
            <h3 className="m-0 self-stretch relative text-5xl leading-[150%] font-normal font-inherit text-black mq1425:text-lgi mq1425:leading-[29px]">{`Dynamic React Components with Typescript `}</h3>
          </div>
          <div className="w-[1021px] flex flex-col items-start justify-start min-w-[1021px] shrink-0 [debug_commit:bf4bc93] max-w-full text-5xl text-black mq825:min-w-full">
            <div className="self-stretch flex flex-row items-start justify-end max-w-full">
              <h3 className="m-0 w-[621px] relative text-inherit leading-[150%] font-normal font-inherit inline-block shrink-0 max-w-full mq1425:text-lgi mq1425:leading-[29px]">
                HTML, CSS and Javascript
              </h3>
            </div>
            <img
              className="[border:none] bg-[transparent] h-[293px] w-[711px] [outline:none] object-cover max-w-full"
              rows={15}
              cols={36}
              alt=""
              src="/card@2x.png"
            />
          </div>
        </section>
        <section className="flex flex-col items-start justify-start gap-[2px] max-w-full text-left text-5xl text-black font-body-text">
          <div className="flex flex-row items-start justify-start py-0 pr-0 pl-2 box-border max-w-full">
            <div className="w-[1351px] flex flex-row items-start justify-start gap-[116px] max-w-full mq450:gap-[58px] mq1425:gap-[29px]">
              <div className="h-[298px] w-[686px] flex flex-col items-start justify-start pt-[21px] px-0 pb-0 box-border min-w-[686px] max-w-full shrink-0 mq450:min-w-full">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover shrink-0 [debug_commit:bf4bc93]"
                  loading="lazy"
                  alt=""
                  src="/image-1@2x.png"
                />
              </div>
              <div className="w-[560px] flex flex-col items-start justify-start gap-[61px] min-w-[560px] shrink-0 [debug_commit:bf4bc93] max-w-full mq450:gap-[30px] mq450:min-w-full mq1425:gap-[15px]">
                <div className="w-[481px] h-[210px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[28px] max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-end py-0 px-[61px] mq1425:pl-5 mq1425:pr-5 mq1425:box-border">
                    <h3 className="m-0 w-[236px] relative text-inherit leading-[150%] font-normal font-inherit inline-block shrink-0 mq1425:text-lgi mq1425:leading-[29px]">{`MYSQL `}</h3>
                  </div>
                  <img
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                    loading="lazy"
                    alt=""
                    src="/image-5@2x.png"
                  />
                </div>
                <div className="self-stretch flex flex-row items-start justify-end max-w-full">
                  <h3 className="m-0 w-[363px] relative text-inherit leading-[150%] font-normal font-inherit inline-block shrink-0 max-w-full mq1425:text-lgi mq1425:leading-[29px]">
                    <p className="m-0">Node Package Manager</p>
                    <p className="m-0">and file management</p>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1328px] flex flex-row items-end justify-start py-0 pr-5 pl-0 box-border max-w-full [row-gap:20px] mq825:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[47px] box-border min-w-[324px] min-h-[367px] max-w-full mq825:flex-1 mq1425:pb-[31px] mq1425:box-border">
              <div className="self-stretch h-80 flex flex-col items-start justify-start gap-[21px]">
                <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[35px]">
                  <h3 className="m-0 w-[236px] relative text-inherit leading-[150%] font-normal font-inherit inline-block shrink-0 mq1425:text-lgi mq1425:leading-[29px]">
                    Docker containers
                  </h3>
                </div>
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                  loading="lazy"
                  alt=""
                  src="/image-31@2x.png"
                />
              </div>
            </div>
            <div className="flex-[0.9547] flex flex-col items-start justify-end pt-0 pb-[7px] pr-[23px] pl-0 box-border min-w-[330px] max-w-full mq825:flex-1">
              <div className="self-stretch flex flex-col items-start justify-start gap-[18px] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-[61px] box-border max-w-full mq450:pl-[30px] mq450:pr-[30px] mq450:box-border">
                  <h3 className="m-0 flex-1 relative text-inherit leading-[150%] font-normal font-inherit inline-block max-w-full mq1425:text-lgi mq1425:leading-[29px]">{`Server Endpoints in Javascript `}</h3>
                </div>
                <img
                  className="self-stretch h-[378px] relative max-w-full overflow-hidden shrink-0 object-cover"
                  loading="lazy"
                  alt=""
                  src="/image-2@2x.png"
                />
              </div>
            </div>
            <img
              className="h-[412px] w-[301px] relative object-cover"
              loading="lazy"
              alt=""
              src="/image-4@2x.png"
            />
          </div>
      <div>
              <Link to="/" className="shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg bg-darkseagreen flex items-center justify-center h-[10px] w-[10px] no-underline">
              Skills Page
              </Link>
            </div>
        </section>
      </main>
      <div className="w-[268px] h-[77px] hidden" />

    </div>
  );
};

export default Coding;
