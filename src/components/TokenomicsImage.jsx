import PropTypes from "prop-types";

const TokenomicsImage = ({ className = "" }) => {
  return (
    <section
      className={`w-[1512px] !m-[0] absolute top-[2355px] left-[150px] flex flex-row items-start justify-start max-w-full ${className}`}
    >
      <img
        className="h-[706px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
        alt=""
        src="/rectangle-20@2x.png"
      />
      <div className="h-[363px] w-[405.2px] absolute !m-[0] right-[328.6px] bottom-[111px]">
        <img
          className="absolute top-[17.3px] left-[100.8px] w-[138.6px] h-[104.1px] z-[2]"
          alt=""
          src="/group.svg"
        />
        <img
          className="absolute top-[109.9px] left-[89.4px] w-[39.1px] h-[92.4px] z-[3]"
          alt=""
          src="/group-1.svg"
        />
        <img
          className="absolute top-[195.3px] left-[93.6px] w-[83.2px] h-[99.9px] z-[4]"
          alt=""
          src="/group-2.svg"
        />
        <img
          className="absolute top-[132.3px] left-[161px] w-[228.4px] h-[185px] z-[5]"
          alt=""
          src="/group-3.svg"
        />
        <img
          className="absolute top-[61.2px] left-[324.3px] w-[61px] h-[78.1px] z-[6]"
          alt=""
          src="/group-4.svg"
        />
        <img
          className="absolute top-[17.3px] left-[239.4px] w-[106.1px] h-[65.1px] z-[7]"
          alt=""
          src="/group-5.svg"
        />
        <div className="absolute top-[17.6px] left-[79.4px] w-[76.7px] h-[24.9px]">
          <img
            className="absolute top-[8.3px] left-[65.6px] w-[11.1px] h-[16.6px] z-[3]"
            loading="lazy"
            alt=""
          />
          <img
            className="absolute top-[0px] left-[0px] w-full h-full z-[4]"
            alt=""
            src="/vector-1.svg"
          />
        </div>
        <div className="absolute top-[153.2px] left-[0px] w-[89.9px] h-[2.4px]">
          <img
            className="absolute top-[0.8px] left-[69.9px] w-[19.9px] h-[1.6px] z-[4]"
            loading="lazy"
            alt=""
          />
          <img
            className="absolute top-[0px] left-[0px] w-full h-full z-[5]"
            alt=""
            src="/vector-3.svg"
          />
        </div>
        <div className="absolute top-[255.5px] left-[33.8px] w-[84.3px] h-[17.6px]">
          <img
            className="absolute top-[0px] left-[68.1px] w-[16.2px] h-[11.8px] z-[5]"
            loading="lazy"
            alt=""
          />
          <img
            className="absolute top-[0px] left-[0px] w-full h-full z-[6]"
            alt=""
            src="/vector-5.svg"
          />
        </div>
        <div className="absolute top-[288.7px] left-[327.6px] w-[77.6px] h-[24.3px]">
          <img
            className="absolute top-[0px] left-[0px] w-[11.8px] h-[16.2px] z-[6]"
            alt=""
          />
          <img
            className="absolute top-[0px] left-[0px] w-full h-full z-[7]"
            loading="lazy"
            alt=""
            src="/vector-7.svg"
          />
        </div>
        <div className="absolute top-[0px] left-[296.8px] w-[71.5px] h-[27.7px]">
          <img
            className="absolute top-[9.2px] left-[0px] w-[7.7px] h-[18.5px] z-[8]"
            alt=""
          />
          <img
            className="absolute top-[0px] left-[0px] w-full h-full z-[9]"
            loading="lazy"
            alt=""
            src="/vector-9.svg"
          />
        </div>
        <img
          className="absolute top-[56px] left-[100.8px] w-[278px] h-[307px] object-contain z-[9]"
          alt=""
          src="/logo-savior-red-copy-2@2x.png"
        />
      </div>
    </section>
  );
};

TokenomicsImage.propTypes = {
  className: PropTypes.string,
};

export default TokenomicsImage;
