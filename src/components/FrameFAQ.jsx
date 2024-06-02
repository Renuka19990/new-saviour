import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

const FrameFAQ = ({ className = "" }) => {
  const leftRef = useRef();
  const rightRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains("animate-left")) {
              entry.target.classList.add("animate-slide-in-left");
            } else if (entry.target.classList.contains("animate-right")) {
              entry.target.classList.add("animate-slide-in-right");
            }
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (leftRef.current) {
      observer.observe(leftRef.current);
    }
    if (rightRef.current) {
      observer.observe(rightRef.current);
    }

    return () => {
      if (leftRef.current) {
        observer.unobserve(leftRef.current);
      }
      if (rightRef.current) {
        observer.unobserve(rightRef.current);
      }
    };
  }, []);

  return (
    <section
      className={`w-[1411px] flex flex-row items-start justify-center pt-0 px-5 pb-[213px] box-border max-w-full text-left text-25xl text-crimson-400 font-shojumaru mq450:pb-[90px] mq450:box-border mq825:pb-[138px] mq825:box-border ${className} mx-auto`}
    >
      <div className="w-[1237px] flex flex-row items-start justify-start gap-[93px] max-w-full lg:flex-wrap mq450:gap-[23px] mq825:gap-[46px]">
        <div
          ref={leftRef}
          className="h-[548px] w-[503px] flex flex-col items-start justify-start pt-[45px] px-0 pb-0 box-border min-w-[503px] max-w-full lg:flex-1 mq825:pt-[29px] mq825:box-border mq825:min-w-full animate-left opacity-0"
        >
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover lg:self-stretch lg:w-auto"
            loading="lazy"
            alt=""
            src="/image-1@2x.png"
          />
        </div>
        <div
          ref={rightRef}
          className="flex-1 flex flex-col items-start justify-start gap-[64px] min-w-[417px] max-w-full mq450:gap-[16px] mq825:gap-[32px] mq825:min-w-full animate-right opacity-0"
        >
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[22px] pl-5">
            <h1 className="m-0 relative text-inherit leading-[119%] font-normal font-inherit inline-block min-w-[119px] mq450:text-7xl mq450:leading-[31px] mq825:text-16xl mq825:leading-[42px]">
              FAQ
            </h1>
          </div>
          <div className="self-stretch flex flex-col items-end justify-start gap-[16px] max-w-full text-lg text-white">
            <div className="self-stretch h-[77px] flex flex-row items-start justify-end py-0 pr-px pl-0 box-border max-w-full">
              <div className="h-[79px] flex-1 rounded-xl bg-gray-200 box-border flex flex-row items-start justify-between pt-[27px] pb-6 pr-[34px] pl-10 max-w-full gap-[20px] border-[1px] border-solid border-crimson-400">
                <div className="h-[79px] w-[642px] relative rounded-xl bg-gray-200 box-border hidden max-w-full border-[1px] border-solid border-crimson-400" />
                <div className="flex flex-row items-start justify-start gap-[72px] max-w-[calc(100%_-_44px)] mq450:gap-[36px]">
                  <div className="relative inline-block min-w-[9px] z-[1]">
                    1
                  </div>
                  <div className="relative text-xl z-[1] mq450:text-base">
                    Why choose "Savior"?
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                  <img
                    className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                    loading="lazy"
                    alt=""
                    src="/eparrowdownbold-2.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-xl bg-gray-200 box-border flex flex-row items-start justify-start pt-[27px] pb-6 pr-8 pl-[38px] gap-[68px] max-w-full shrink-0 border-[1px] border-solid border-crimson-400 mq450:gap-[17px] mq825:flex-wrap mq825:gap-[34px]">
              <div className="h-[79px] w-[642px] relative rounded-xl bg-gray-200 box-border hidden max-w-full border-[1px] border-solid border-crimson-400" />
              <div className="relative inline-block min-w-[15px] z-[1] mq825:w-full mq825:h-[15px]">
                2
              </div>
              <div className="flex-1 flex flex-row items-start justify-start gap-[26px] min-w-[317px] max-w-full text-xl">
                <div className="relative z-[1] mq450:text-base">
                  Why is the IDO duration so long?
                </div>
                <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                  <img
                    className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                    alt=""
                    src="/eparrowdownbold-2.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-xl bg-gray-200 box-border flex flex-row items-start justify-between pt-[27px] pb-6 pr-[34px] pl-[38px] relative max-w-full shrink-0 gap-[20px] border-[1px] border-solid border-crimson-400 mq825:flex-wrap">
              <div className="h-[79px] w-[642px] relative rounded-xl bg-gray-200 box-border hidden max-w-full z-[0] border-[1px] border-solid border-crimson-400" />
              <div className="relative inline-block min-w-[14px] z-[1] mq825:w-full mq825:h-3.5">
                3
              </div>
              <div className="w-[394px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border max-w-full text-xl">
                <div className="relative inline-block max-w-full z-[1] mq450:text-base">
                  When will trading go live?
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                  loading="lazy"
                  alt=""
                  src="/eparrowdownbold-2.svg"
                />
              </div>
              <div className="h-[204px] w-[calc(100%_+_2px)] absolute !m-[0] right-[-2px] bottom-[-220px] left-[0px] rounded-xl bg-gray-200 box-border border-[1px] border-solid border-crimson-400" />
              <div className="absolute !m-[0] right-[108px] bottom-[-69px] text-xl z-[1] mq450:text-base">
                When can we claim the tokens?
              </div>
              <div className="absolute !m-[0] bottom-[-67px] left-[38px] inline-block min-w-[14px] z-[1]">
                4
              </div>
              <img
                className="h-6 w-6 absolute !m-[0] right-[32px] bottom-[-68px] overflow-hidden shrink-0 z-[1]"
                loading="lazy"
                alt=""
                src="/eparrowdownbold-5.svg"
              />
              <div className="h-[83px] w-[568px] absolute !m-[0] right-[35px] bottom-[-184px] rounded-xl bg-whitesmoke-500 z-[1]" />
              <div className="w-[524px] absolute !m-[0] right-[57px] bottom-[-168px] text-mini leading-[170.42%] font-zcool-kuaile text-snow-200 inline-block z-[2]">
                <p className="[margin-block-start:0] [margin-block-end:0px]">
                  Phase 1: TGE
                </p>
                <p className="[margin-block-start:0] [margin-block-end:0px]">
                  <span className="text-crimson-400">Phase 2: </span>Listing
                </p>
                <p className="[margin-block-start:0] [margin-block-end:0px]">
                  Phase 3: Listing + 60 days
                </p>
                <p className="[margin-block-start:0] [margin-block-end:0px]">
                  <span className="text-crimson-400">Phase 4:</span> Listing +
                  120 days
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameFAQ.propTypes = {
  className: PropTypes.string,
};

export default FrameFAQ;
