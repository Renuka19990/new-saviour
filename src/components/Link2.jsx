import { useMemo } from "react";
import PropTypes from "prop-types";

const Link2 = ({
  className = "",
  divWrapperStyledWrapperSc,
  phase1,
  technicalReadinessAndSmar,
  propHeight,
  propPadding,
  propAlignSelf,
  propAlignSelf1,
  propWidth,
}) => {
  const linkStyle = useMemo(() => {
    return {
      height: propHeight,
      padding: propPadding,
      alignSelf: propAlignSelf,
    };
  }, [propHeight, propPadding, propAlignSelf]);

  const technicalReadinessAndStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
      width: propWidth,
    };
  }, [propAlignSelf1, propWidth]);

  return (
    <div
      className={`h-[318px] w-[216px] rounded-xl [background:linear-gradient(-23.78deg,_#ed0137,_#ef490f)] flex flex-col items-start justify-end pt-[183.5px] pb-[20.5px] pr-[15px] pl-[21px] box-border relative gap-[12px] max-w-[604.7999877929688px] shrink-0 [debug_commit:bf4bc93] z-[1] text-left text-xl text-white font-inter ${className}`}
      style={linkStyle}
    >
      <div className="w-[218px] h-80 relative rounded-xl [background:linear-gradient(-23.78deg,_#ed0137,_#ef490f)] hidden z-[0]" />
      <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
        <div className="absolute h-full w-full top-[1px] right-[1px] bottom-[1px] left-[1px] rounded-xl bg-gray-300 z-[1]" />
        <img
          className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-2xl max-w-[216px] overflow-hidden max-h-[318px] object-cover z-[2]"
          loading="lazy"
          alt=""
          src={divWrapperStyledWrapperSc}
        />
        <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_rgba(10,_28,_61,_0.2)_70%,_rgba(237,_1,_55,_0.09))] z-[3]" />
      </div>
      <b className="w-[75px] h-[30px] relative leading-[30px] font-bold flex items-center z-[4]">
        {phase1}
      </b>
      <h2
        className="m-0 self-stretch flex-1 relative text-base leading-[24px] font-normal font-manrope text-darkgray flex items-center z-[4]"
        style={technicalReadinessAndStyle}
      >
        {technicalReadinessAndSmar}
      </h2>
    </div>
  );
};

Link2.propTypes = {
  className: PropTypes.string,
  divWrapperStyledWrapperSc: PropTypes.string,
  phase1: PropTypes.string,
  technicalReadinessAndSmar: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propPadding: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propAlignSelf1: PropTypes.any,
  propWidth: PropTypes.any,
};

export default Link2;
