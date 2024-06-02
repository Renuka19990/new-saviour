import PropTypes from "prop-types";

const Link1 = ({
  className = "",
  divWrapperStyledWrapperSc,
  phase3,
  communityBuildingAndMarke,
}) => {
  return (
    <div
      className={`w-full flex-1 rounded-xl [background:linear-gradient(-23.78deg,_#ed0137,_#ef490f)] flex flex-col items-start justify-end pt-[207.5px] pb-[20.5px] pr-[13px] pl-[21px] box-border relative gap-[12px] max-w-[604.7999877929688px] z-[1] text-left text-xl text-white font-inter ${className}`}
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
      <b className="w-[79px] h-[30px] relative leading-[30px] font-bold flex items-center z-[4]">
        {phase3}
      </b>
      <h2 className="m-0 self-stretch flex-1 relative text-base leading-[24px] font-normal font-manrope bg-amber-300 flex items-center z-[4]">
        {communityBuildingAndMarke}
      </h2>
    </div>
  );
};

Link1.propTypes = {
  className: PropTypes.string,
  divWrapperStyledWrapperSc: PropTypes.string,
  phase3: PropTypes.string,
  communityBuildingAndMarke: PropTypes.string,
};

export default Link1;
