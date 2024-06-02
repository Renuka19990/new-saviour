import PropTypes from "prop-types";

const Grid = ({ className = "" }) => {
  return (
    <section
      className={`absolute top-[3064px] left-[0px] w-[390px] h-[798px] ${className}`}
    >
      <img
        className="absolute h-full top-[0px] bottom-[0px] left-[-504px] max-h-full w-[1512px] object-cover z-[1]"
        alt=""
        src="/separator@2x.png"
      />
      <img
        className="absolute top-[567.3px] left-[142px] w-[54.2px] h-[40.7px] z-[2]"
        alt=""
        src="/group1.svg"
      />
      <img
        className="absolute top-[603.5px] left-[137.6px] w-[15.3px] h-[36.1px] z-[3]"
        alt=""
        src="/group-11.svg"
      />
      <img
        className="absolute top-[636.8px] left-[139.2px] w-[32.5px] h-[39px] z-[4]"
        alt=""
        src="/group-21.svg"
      />
      <img
        className="absolute top-[612.2px] left-[165.6px] w-[89.2px] h-[72.3px] z-[5]"
        alt=""
        src="/group-31.svg"
      />
      <img
        className="absolute top-[584.4px] left-[229.3px] w-[23.8px] h-[30.5px] z-[6]"
        alt=""
        src="/group-41.svg"
      />
      <img
        className="absolute top-[567.3px] left-[196.2px] w-[41.4px] h-[25.5px] z-[7]"
        alt=""
        src="/group-51.svg"
      />
      <div className="absolute top-[567.4px] left-[133.7px] w-[30px] h-[9.8px]">
        <img
          className="absolute top-[3.3px] left-[25.6px] w-[4.3px] h-[6.5px] z-[3]"
          alt=""
        />
        <img
          className="absolute top-[0px] left-[0px] w-full h-full z-[4]"
          alt=""
          src="/vector-12.svg"
        />
      </div>
      <div className="absolute top-[620.4px] left-[102.6px] w-[35.2px] h-[0.9px]">
        <img
          className="absolute top-[0.3px] left-[27.4px] w-[7.8px] h-[0.6px] z-[4]"
          alt=""
        />
        <img
          className="absolute top-[0px] left-[0px] w-full h-full z-[5]"
          alt=""
          src="/vector-31.svg"
        />
      </div>
      <div className="absolute top-[660.3px] left-[115.8px] w-[32.9px] h-[6.9px]">
        <img
          className="absolute top-[0px] left-[26.6px] w-[6.3px] h-[4.6px] z-[5]"
          loading="lazy"
          alt=""
        />
        <img
          className="absolute top-[0px] left-[0px] w-full h-full z-[6]"
          alt=""
          src="/vector-51.svg"
        />
      </div>
      <div className="absolute top-[673.3px] left-[230.6px] w-[30.3px] h-[9.5px]">
        <img
          className="absolute top-[0px] left-[0px] w-[4.6px] h-[6.3px] z-[6]"
          alt=""
        />
        <img
          className="absolute top-[0px] left-[0px] w-full h-full z-[7]"
          loading="lazy"
          alt=""
          src="/vector-71.svg"
        />
      </div>
      <div className="absolute top-[591.5px] left-[247.3px] w-[33.7px] h-[5.7px]">
        <img
          className="absolute top-[1.9px] left-[0px] w-[6.8px] h-[3.8px] z-[7]"
          alt=""
        />
        <img
          className="absolute top-[0px] left-[0px] w-full h-full z-[8]"
          loading="lazy"
          alt=""
          src="/vector-91.svg"
        />
      </div>
      <div className="absolute top-[560.5px] left-[218.6px] w-[27.9px] h-[10.8px]">
        <img
          className="absolute top-[3.6px] left-[0px] w-[3px] h-[7.2px] z-[8]"
          alt=""
        />
        <img
          className="absolute top-[0px] left-[0px] w-full h-full z-[9]"
          loading="lazy"
          alt=""
          src="/vector-111.svg"
        />
      </div>
      <img
        className="absolute top-[582.4px] left-[142px] w-[108.6px] h-[120px] object-contain z-[9]"
        alt=""
        src="/logo-savior-red-copy-2@2x.png"
      />
    </section>
  );
};

Grid.propTypes = {
  className: PropTypes.string,
};

export default Grid;
