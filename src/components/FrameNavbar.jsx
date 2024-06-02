import PropTypes from "prop-types";
import { useState } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
const FrameComponent5 = ({ className = "" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[68px] pr-[21px] pl-5 box-border max-w-full ${className}`}
    >
      <nav className="m-0 w-full flex flex-row items-start justify-between top-[0] z-[99] sticky gap-[20px] max-w-full text-center text-13xl text-white font-zcool-kuaile">
        <div className="flex flex-row items-start justify-start gap-[4px]">
          <img
            className="h-[117px] w-[106px] relative object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/logo-savior-red-copy-1@2x.png"
          />
          <div className="flex flex-col items-start justify-start pt-[29px] px-0 pb-0">
            <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[122px] whitespace-nowrap z-[1]">
              Saviour
            </a>
          </div>
        </div>
        <div className="w-[620px] flex flex-col items-start justify-start pt-[19px] pb-0 pr-[37px] pl-0 box-border max-w-full text-xl lg:hidden">
          <div className="self-stretch rounded-xl bg-gray-100 flex flex-row items-start justify-start py-4 pr-[22px] pl-6 gap-[12px] z-[1]">
            <div className="flex flex-col items-start justify-start py-0 pr-3 pl-0">
              <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[53px]">
                Home
              </a>
            </div>
            <div className="flex flex-col items-start justify-start py-0 pr-3 pl-0">
              <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[35px]">
                IDO
              </a>
            </div>
            <div className="flex-[0.9016] flex flex-col items-start justify-start py-0 pr-3 pl-0">
              <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[110px]">
                Tokenomics
              </a>
            </div>
            <div className="flex flex-col items-start justify-start py-0 pr-3 pl-0">
              <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[92px]">
                Roadmap
              </a>
            </div>
            <a className="[text-decoration:none] flex-1 relative text-[inherit] inline-block min-w-[123px] whitespace-nowrap">
              Coming Soon
            </a>
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <img
                className="w-4 h-4 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/eparrowdownbold.svg"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[27px] px-0 pb-0">
          <button className="cursor-pointer [border:none] py-2.5 px-4 bg-[transparent] rounded-[15.44px] [background:linear-gradient(93.73deg,_#ed0137_20.07%,_#f05734_75.59%)] overflow-hidden flex flex-row items-start justify-start whitespace-nowrap z-[1]">
            <b className="relative text-xs font-semibold font-poppins text-white text-left inline-block min-w-[95px]">
              Connect Wallet
            </b>
          </button>
        </div>
        <div className="lg:flex hidden flex-col items-start justify-start pt-[27px] px-0 pb-0">
          <button onClick={toggleMenu} className="cursor-pointer">
            {/* <img
              src="/hamburger-menu.svg"
              alt="Menu"
              className="w-8 h-8"
            /> */}
            <AiOutlineMenuUnfold/>
          </button>
          {isMenuOpen && (
            <div className="absolute top-[80px] right-0 bg-gray-100 p-4 rounded-lg shadow-lg z-[100]">
              <a className="[text-decoration:none] block text-[inherit] py-2" href="#">Home</a>
              <a className="[text-decoration:none] block text-[inherit] py-2" href="#">IDO</a>
              <a className="[text-decoration:none] block text-[inherit] py-2" href="#">Tokenomics</a>
              <a className="[text-decoration:none] block text-[inherit] py-2" href="#">Roadmap</a>
              <a className="[text-decoration:none] block text-[inherit] py-2" href="#">Coming Soon</a>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
