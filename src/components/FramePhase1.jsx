import Link from "./Link";
import PropTypes from "prop-types";

const FramePhase1 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex  items-start justify-center py-0 pr-0 pl-px box-border max-w-full text-left text-25xl text-crimson-400 font-shojumaru ${className} mx-auto gap`}
    >
      <div className="flex-1 flex flex-col items-start justify-start pt-16 px-[164px] pb-[140px] box-border relative gap-[111px] max-w-full z-[2] mq450:gap-[28px] mq450:pl-5 mq450:pr-5 mq450:box-border mq825:gap-[55px] mq825:pt-[42px] mq825:px-[82px] mq825:pb-[91px] mq825:box-border ">
        <img
          className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/recent-blogs@2x.png"
        />
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-1 pl-0 ">
          <h1 className="m-0 relative text-inherit leading-[119%] font-normal font-inherit z-[1] mq450:text-7xl mq450:leading-[31px] mq825:text-16xl mq825:leading-[42px]">
            Road Map
          </h1>
        </div>
        <div className="w-[1159.1px] grid flex-row items-start justify-start gap-[70.2px] max-w-full grid-cols-[repeat(4,_minmax(178px,_1fr))] z-[1] text-2xl-9 text-white font-inter lg:gap-[35px] lg:justify-center lg:grid-cols-[repeat(2,_minmax(178px,_308px))] mq825:gap-[18px] mq825:grid-cols-[minmax(178px,_1fr)]">
        <div className="rounded-[13.17px] [background:linear-gradient(-23.78deg,_#ed0137,_#ef490f)] flex flex-col items-start justify-end pt-[200.9px] pb-[22px] pr-[17px] pl-[23px] box-border relative gap-[13.1px] max-w-[663.7584838867188px] mq825:max-w-full transition-transform duration-300 hover:scale-125 hover:shadow-xl">
  <div className="w-[239.3px] h-[351.2px] relative rounded-[13.17px] [background:linear-gradient(-23.78deg,_#ed0137,_#ef490f)] hidden z-[0]" />
  <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] transition-all ease-out duration-300">
    <div className="absolute h-full w-full top-[1.1px] right-[1.1px] bottom-[1.1px] left-[1.1px] rounded-[13.17px] bg-gray-300 z-[1]" />
    <img
      className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[17.56px] max-w-full overflow-hidden max-h-full object-cover z-[2]"
      loading="lazy"
      alt=""
      src="/divwrapper--styledwrappersc1fux03g0@2x.png"
    />
    <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[13.17px] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_rgba(10,_28,_61,_0.2)_70%,_rgba(237,_1,_55,_0.09))] z-[3]" />
  </div>
  <b className="relative leading-[33px] font-bold inline-block min-w-[82px] z-[4] mq450:text-lg mq450:leading-[26px]">
    Phase 1
  </b>
  <p className="m-0 self-stretch h-20 relative text-mid-6 tracking-[-0.16px] leading-[26.34px] font-manrope text-darkgray flex items-center z-[4]">
    Technical Readiness and Smart Contract Audit
  </p>
</div>

          <Link
            divWrapperStyledWrapperSc="/divwrapper--styledwrappersc1fux03g0-1@2x.png"
            phase2="Phase 2"
            increaseLiquidityAndTradi="Increase Liquidity and Trading Volume"
          />
          <Link
            divWrapperStyledWrapperSc="/divwrapper--styledwrappersc1fux03g0-2@2x.png"
            phase2="Phase 3"
            increaseLiquidityAndTradi="Community Building and Marketing"
            propWidth="unset"
            propDisplay="unset"
            propAlignSelf="stretch"
          />
          <Link
            divWrapperStyledWrapperSc="/divwrapper--styledwrappersc1fux03g0-3@2x.png"
            phase2="Phase 4"
            increaseLiquidityAndTradi="Ecosystem Expansion and Partnerships"
            propWidth="unset"
            propDisplay="unset"
            propAlignSelf="stretch"
          />
        </div>
      </div>
    </section>
  );
};

FramePhase1.propTypes = {
  className: PropTypes.string,
};

export default FramePhase1;
