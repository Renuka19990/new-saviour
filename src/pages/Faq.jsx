
import Footer from "../components/Footer";
import FrameNavbar from "../components/FrameNavbar";
import FrameParticipate from "../components/FrameParticipate";
import FrameTokenomics from "../components/FrameTokenomics";
import FramePhase1 from "../components/FramePhase1";
import FrameFAQ from "../components/FrameFAQ";
import TokenomicsImage from "../components/TokenomicsImage";

const Faq = () => {
  return (
    <div className="w-full relative bg-gray-400 overflow-hidden flex flex-col items-start justify-start pt-[27px] px-0 pb-0 box-border gap-[64px] leading-[normal] tracking-[normal] text-left text-25xl text-crimson-400 font-shojumaru mq450:gap-[16px] mq825:gap-[32px]">
      <img
        className="w-full h-[588px] absolute !m-[0] top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src="/footer@2x.png"
      />
      <section className="w-[1512px] !m-[0] absolute top-[1210px] left-[0px] flex flex-row items-start justify-start max-w-full text-center text-45xl-7 text-crimson-400 font-roboto-mono">
        <img
          className="h-[1145px] flex-1 relative max-w-full overflow-hidden object-cover"
          alt=""
          src="/nav-list-item@2x.png"
        />
        <b className="h-[80.1px] w-[39.2px] absolute !m-[0] top-[188px] right-[461.6px] flex items-center justify-center [text-shadow:0.9px_0_0_#ed0137,_0_0.9px_0_#ed0137,_-0.9px_0_0_#ed0137,_0_-0.9px_0_#ed0137] z-[3] mq450:text-20xl mq825:text-33xl">
          :
        </b>
      </section>
      <FrameNavbar/>
      <img
        className="w-[795px] h-[795px] absolute !m-[0] top-[511px] right-[-6px] object-contain z-[1]"
        loading="lazy"
        alt=""
        src="/brick-matrix-generate-a-logo-concept-that-visually-represents-t-9df3d56e2aaa42b8add901ba1b656499-2@2x.png"
      />
      <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[167px] pr-6 pl-5 box-border max-w-full text-center text-[45px] text-snow-300 font-shojumaru">
        <h1 className="m-0 w-[1262px] relative text-inherit leading-[119%] font-normal font-inherit inline-block shrink-0 max-w-full z-[1] mq450:text-[27px] mq450:leading-[32px] mq825:text-[36px] mq825:leading-[43px]">
          Where Blockchain Heroes Thrive, Rescuing Dreams, Elevating Fortunes.
        </h1>
      </section>
      <TokenomicsImage />
      <div className="w-[773px] flex flex-col items-start justify-start pt-0 pb-[105.9px] pr-5 pl-0 box-border gap-[9px] max-w-full mq825:pb-[69px] mq825:box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px] shrink-0 [debug_commit:bf4bc93] max-w-full">
          <div className="w-[715px] flex flex-row items-start justify-start py-0 px-[163px] box-border gap-[12294px] max-w-full mq450:gap-[1537px] mq825:gap-[3073px] mq825:pl-10 mq825:pr-10 mq825:box-border mq1425:flex-wrap mq1425:gap-[6147px] mq1425:pl-[81px] mq1425:pr-[81px] mq1425:box-border">
            <img
              className="ml-[-12394px] h-[100px] w-[100px] relative shrink-0 [debug_commit:bf4bc93]"
              loading="lazy"
              alt=""
            />
            <div className="w-[389px] flex flex-col items-start justify-start pt-[62px] px-0 pb-0 box-border max-w-full shrink-0">
              <h1 className="m-0 self-stretch relative text-inherit leading-[119%] font-normal font-inherit shrink-0 [debug_commit:bf4bc93] mq450:text-7xl mq450:leading-[31px] mq825:text-16xl mq825:leading-[42px]">
                Introduction
              </h1>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-end max-w-full text-5xl text-snow-100 font-zcool-kuaile">
            <div className="w-[607px] relative leading-[119%] inline-block shrink-0 max-w-full box-border pl-5 mq450:text-lgi mq450:leading-[23px]">
              <p className="m-0">{`We've all been in the mud once, and now we've decided to fight it out. `}</p>
              <p className="m-0">{`Pay tribute to those pioneers of WEB3 and the warriors who dedicated their love to the blockchain. Save the lucky ones alive, join us to save the future! `}</p>
              <p className="m-0">{`Our mission is to empower everyone to share wealth and succeed. `}</p>
              <p className="m-0 text-snow-500">read more...</p>
              <p className="m-0">&nbsp;</p>
            </div>
          </div>
        </div>
        <div className="w-[510.9px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <button className="cursor-pointer [border:none] pt-[17px] px-[21px] pb-[17.1px] bg-[transparent] rounded-[21.92px] [background:linear-gradient(93.73deg,_#d51b46_11.92%,_#ee6910_83.65%)] overflow-hidden flex flex-row items-start justify-start gap-[11.3px] shrink-0 [debug_commit:bf4bc93]">
            <div className="relative text-xl font-zcool-kuaile text-white text-left inline-block min-w-[109px] mq450:text-base">
              Documents
            </div>
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <img
                className="w-4 h-4 relative overflow-hidden shrink-0"
                alt=""
                src="/eparrowdownbold-1.svg"
              />
            </div>
          </button>
        </div>
      </div>
      <FrameParticipate />
      <FrameTokenomics />
      <FramePhase1 />
      <FrameFAQ />
      <Footer />
    </div>
  );
};

export default Faq;
