import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch [background:linear-gradient(180deg,_#030405,_#120101)] flex flex-col items-center justify-start pt-16 px-5 pb-[38.5px] box-border gap-[40px] max-w-full text-left text-5xl text-white font-poppins mq450:pt-[42px] mq450:pb-[25px] mq450:box-border mq825:gap-[20px] ${className}`}
    >
      <div className="w-[150px] h-[21.4px] relative hidden" />
      <div className="w-[618px] flex flex-col items-start justify-start gap-[24.5px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-6">
          <img
            className="h-[163px] w-[200px] relative overflow-hidden shrink-0 object-cover"
            loading="lazy"
            alt=""
            src="/frame-1790@2x.png"
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[22px]">
          <b className="relative tracking-[1.71px] leading-[26px] uppercase font-bold text-transparent !bg-clip-text [background:linear-gradient(92.23deg,_#ff002a,_#720005)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[116px] mq450:text-lgi mq450:leading-[21px]">
            SITEMAP
          </b>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-smi-8 mq825:flex-wrap mq825:justify-center">
          <div className="flex flex-col items-start justify-start py-0 pr-2 pl-0">
            <b className="relative leading-[20px] font-semibold inline-block min-w-[39px]">
              Home
            </b>
          </div>
          <div className="flex flex-col items-start justify-start py-0 pr-2 pl-0">
            <b className="relative leading-[20px] font-semibold inline-block min-w-[23px]">
              IDO
            </b>
          </div>
          <div className="flex flex-col items-start justify-start py-0 pr-2 pl-0">
            <b className="relative leading-[20px] font-semibold inline-block min-w-[80px]">
              Tokenomics
            </b>
          </div>
          <b className="relative leading-[20px] font-semibold inline-block min-w-[66px]">
            Road Map
          </b>
          <div className="flex flex-col items-start justify-start py-0 pr-2 pl-0">
            <b className="relative leading-[20px] font-semibold inline-block min-w-[78px]">
              Whitepaper
            </b>
          </div>
          <div className="flex flex-col items-start justify-start py-0 pr-2 pl-0">
            <b className="relative leading-[20px] font-semibold inline-block min-w-[45px]">
              Pledge
            </b>
          </div>
          <div className="flex flex-col items-start justify-start py-0 pr-2 pl-0">
            <b className="relative leading-[20px] font-semibold inline-block min-w-[24px]">
              NFT
            </b>
          </div>
          <b className="relative leading-[20px] font-semibold inline-block min-w-[47px]">
            Games
          </b>
        </div>
      </div>
      <div className="w-[618px] flex flex-row items-start justify-center py-0 pr-px pl-0 box-border max-w-full">
        <div className="flex flex-row items-start justify-start gap-[13.7px]">
          <img
            className="h-[27.5px] w-[27.5px] relative min-h-[28px] z-[1]"
            loading="lazy"
            alt=""
            src="/link--icontwitter6b3c178f26a209f13bcced7e816ba143svg.svg"
          />
          <div className="flex flex-col items-start justify-start py-0 pr-1 pl-0">
            <img
              className="w-[27.5px] h-[27.5px] relative z-[1]"
              loading="lazy"
              alt=""
              src="/link--icontelegram3e7b16fc68b2a61fe78c02f92f7a45f6svg.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <img
              className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
              loading="lazy"
              alt=""
              src="/clarityemailsolid.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
