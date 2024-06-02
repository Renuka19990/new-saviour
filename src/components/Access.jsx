import PropTypes from "prop-types";

const Access = ({ className = "" }) => {
  return (
    <section
      className={`absolute top-[1768px] left-[28px] w-[334px] flex flex-col items-start justify-start gap-[31.5px] text-center text-base-9 text-gainsboro font-zcool-kuaile ${className}`}
    >
      <div className="self-stretch relative leading-[174.5%] z-[1]">
        During our IDO event, you will gain early access to our revolutionary
        ecosystem, designed to empower everyone to share wealth and achieve
        success. By participating in this exclusive event, you'll secure your
        position at the forefront of blockchain innovation, with the potential
        for high rewards.
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[37px] pl-8 text-left text-smi-9 text-white">
        <div className="flex-1 flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[54px]">
            <button className="cursor-pointer [border:none] py-3 pr-[21px] pl-[25px] bg-crimson-400 rounded-[12.87px] flex flex-row items-start justify-start whitespace-nowrap z-[2]">
              <div className="h-[45px] w-[157px] relative rounded-[12.87px] bg-crimson-400 hidden" />
              <div className="relative text-base font-shojumaru text-white text-left inline-block min-w-[111px] z-[3]">
                Token Info
              </div>
            </button>
          </div>
          <div className="self-stretch rounded-[12.87px] bg-gray-700 flex flex-col items-start justify-start pt-[38px] pb-4 pr-5 pl-[23px] gap-[15.4px] z-[1] mt-[-17.8px] border-[1px] border-solid border-orangered">
            <div className="w-[265.1px] h-[245.8px] relative rounded-[12.87px] bg-gray-700 box-border hidden border-[1px] border-solid border-orangered" />
            <div className="w-[207.8px] flex flex-row items-start justify-start py-0 px-3.5 box-border">
              <div className="flex-1 flex flex-row items-start justify-start gap-[8.4px]">
                <div className="flex-1 flex flex-col items-start justify-start pt-[1.3px] px-0 pb-0">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[16.5px]">
                    <div className="self-stretch relative z-[2]">
                      Total Token Supply
                    </div>
                    <div className="relative inline-block min-w-[61px] z-[2]">
                      Soft Cap
                    </div>
                    <div className="relative z-[2]">
                      <p className="m-0">Initial exchange</p>
                      <p className="m-0">rate</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[29.5px] text-red">
                  <div className="relative inline-block min-w-[25px] z-[2]">
                    20%
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[15.6px]">
                    <div className="relative inline-block min-w-[58px] z-[2]">
                      200 BNB
                    </div>
                    <div className="relative inline-block min-w-[37px] z-[2]">
                      1 BNB
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative z-[2]">
              Recommended Referral Commission
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-3.5">
              <div className="flex flex-col items-start justify-start gap-[14.3px]">
                <div className="flex flex-row items-start justify-start gap-[26.6px]">
                  <div className="flex flex-col items-start justify-start pt-[1.3px] px-0 pb-0">
                    <div className="relative inline-block min-w-[95px] z-[2]">
                      1st Generation
                    </div>
                  </div>
                  <div className="relative text-red inline-block min-w-[17px] z-[2]">
                    5%
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[23.6px]">
                  <div className="flex flex-col items-start justify-start pt-[1.3px] px-0 pb-0">
                    <div className="relative inline-block min-w-[98px] z-[2]">
                      2nd Generation
                    </div>
                  </div>
                  <div className="relative text-red inline-block min-w-[17px] z-[2]">
                    2%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
        <button className="cursor-pointer [border:none] pt-[12.5px] px-[15px] pb-[12.6px] bg-[transparent] rounded-[16.14px] [background:linear-gradient(93.73deg,_#d51b46_11.92%,_#ee6910_83.65%)] overflow-hidden flex flex-row items-start justify-start whitespace-nowrap z-[1]">
          <b className="relative text-smi-5 font-semibold font-poppins text-white text-left inline-block min-w-[99px]">
            Connect Wallet
          </b>
        </button>
      </div>
    </section>
  );
};

Access.propTypes = {
  className: PropTypes.string,
};

export default Access;
