import { useMemo } from "react";
import PropTypes from "prop-types";

const Link = ({
  className = "",
  divWrapperStyledWrapperSc,
  phase2,
  increaseLiquidityAndTradi,
  propWidth,
  propDisplay,
  propAlignSelf,
}) => {
  const increaseLiquidityAndStyle = useMemo(() => {
    return {
      width: propWidth,
      display: propDisplay,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propDisplay, propAlignSelf]);

  return (
    <div
    className={` border-red rounded-[13.17px] [background:linear-gradient(-23.78deg,_#ed0137,_#ef490f)] flex flex-col items-start justify-end pt-[227.5px] pb-[22.3px] pr-5 pl-[23px] box-border relative gap-[13.2px] max-w-[663.7584838867188px] text-left text-2xl-9 text-white font-inter mq825:max-w-full ${className} transition-transform duration-300 hover:scale-125 hover:shadow-2xl cursor-pointer border-4 `}
  >
    <div className="  w-[239.3px] h-[351.2px] relative rounded-[13.17px] [background:linear-gradient(-23.78deg,_#ed0137,_#ef490f)] hidden z-[0]" />
    <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] transition-all ease-out duration-300 border-red">
      <div className="absolute h-full w-full top-[1.1px] right-[1.1px] bottom-[1.1px] left-[1.1px] rounded-[13.17px] bg-gray-300 z-[1] " />
      <img
        className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[17.56px] max-w-full overflow-hidden max-h-full object-cover z-[2]"
        loading="lazy"
        alt=""
        src={divWrapperStyledWrapperSc}
      />
      <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[13.17px] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_rgba(10,_28,_61,_0.2)_70%,_rgba(237,_1,_55,_0.09))] z-[3]" />
    </div>
    <b className="relative leading-[33px] font-bold inline-block min-w-[85px] max-w-[44%] z-[4] mq450:text-lg mq450:leading-[26px]">
      {phase2}
    </b>
    <div
      className="w-[176.7px] relative text-mid-6 leading-[26.34px] font-manrope text-darkgray flex items-center max-w-[92%] z-[4]"
      style={increaseLiquidityAndStyle}
    >
      {increaseLiquidityAndTradi}
    </div>
  </div>
  
  );
};

Link.propTypes = {
  className: PropTypes.string,
  divWrapperStyledWrapperSc: PropTypes.string,
  phase2: PropTypes.string,
  increaseLiquidityAndTradi: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propDisplay: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default Link;
