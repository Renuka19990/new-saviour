import PropTypes from "prop-types";

const FrameTokenomics = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch  flex flex-row justify-between  gap-96 pt-0 mx-auto pb-[72px] box-border max-w-full text-left text-25xl text-crimson-400 font-shojumaru mq825:pb-[47px] mq825:box-border ${className}`}
    >
      <div className="w-[1396px] flex flex-col items-start justify-start gap-[88px] max-w-full mq450:gap-[22px] mq825:gap-[44px]">
        <div className="w-[1334px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <h1 className="m-0 relative text-inherit leading-[119%] font-normal font-inherit z-[2] mq450:text-7xl mq450:leading-[31px] mq825:text-16xl mq825:leading-[42px]">
            Tokenomics
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[40px] text-xl text-white font-zcool-kuaile lg:flex-wrap lg:justify-center">
          <div className="w-[749px] flex flex-row items-end justify-center gap-[41px] min-w-[749px] max-w-full lg:flex-1 lg:min-w-full mq825:flex-wrap mq825:gap-[20px]">
            <div className="flex-1 flex flex-col items-start justify-start min-w-[268px] max-w-full">
              <div className="flex flex-row items-start justify-start py-0 px-[78px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
                <button className="cursor-pointer [border:none] py-[23px] px-[41px] bg-crimson-400 rounded-xl flex flex-row items-start justify-start whitespace-nowrap z-[3] hover:bg-crimson-100">
                  <div className="h-[70px] w-[244px] relative rounded-xl bg-crimson-400 hidden" />
                  <div className="relative text-lg font-shojumaru text-white text-left z-[4]">
                    Token Details
                  </div>
                </button>
              </div>
              <div className="self-stretch rounded-xl bg-gray-700 box-border flex flex-row items-start justify-between pt-[67px] pb-[57px] pr-[50px] pl-[57px] max-w-full gap-[20px] z-[2] mt-[-29px] border-[1.5px] border-solid border-orangered mq450:flex-wrap mq450:pl-5 mq450:pr-5 mq450:box-border">
                <div className="h-[306px] w-[412px] relative rounded-xl bg-gray-700 box-border hidden max-w-full border-[1.5px] border-solid border-orangered" />
                <div className="w-[125px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[125px] mq450:flex-1">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[32px]">
                    <div className="relative inline-block min-w-[55px] z-[3] mq450:text-base">
                      Name
                    </div>
                    <div className="relative inline-block min-w-[67px] z-[3] mq450:text-base">
                      Symbol
                    </div>
                    <div className="relative inline-block min-w-[125px] z-[3] mq450:text-base">
                      Total Supply
                    </div>
                    <div className="relative inline-block min-w-[86px] z-[3] mq450:text-base">
                      Decimals
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[32px] min-w-[116px] text-red mq450:flex-1">
                  <div className="relative inline-block min-w-[76px] z-[3] mq450:text-base">
                    Saviour
                  </div>
                  <div className="relative inline-block min-w-[44px] z-[3] mq450:text-base">
                    SVR
                  </div>
                  <div className="relative inline-block min-w-[116px] z-[3] mq450:text-base">
                    1000 Trillion
                  </div>
                  <div className="relative inline-block min-w-[22px] z-[3] mq450:text-base">
                    18
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[296px] flex flex-col items-start justify-end pt-0 px-0 pb-4 box-border min-w-[296px] text-right text-base text-whitesmoke-100 font-shojumaru mq825:flex-1">
              <div className="self-stretch h-[298px] flex flex-col items-end justify-start pt-0 px-0 pb-[277px] box-border gap-[117.2px] mq450:gap-[59px] mq825:pb-[180px] mq825:box-border">
                <div className="relative z-[2]">IDO Round(20%)</div>
                <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[33px] pl-0">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[96.8px] mq450:gap-[48px]">
                    <div className="flex flex-row items-start justify-start py-0 px-0.5">
                      <div className="relative z-[2]">Ecological Fund (5%)</div>
                    </div>
                    <div className="self-stretch relative text-left z-[2]">
                      Initial Liquidity Provider (15%)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[337.5px] flex flex-col items-start justify-start pt-4 px-0 pb-0 box-border min-w-[337.5px] max-w-full text-base text-whitesmoke-100 font-shojumaru lg:flex-1 mq450:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[202px] max-w-full mq450:gap-[101px]">
              <div className="flex flex-col items-start justify-start gap-[58.3px] max-w-full mq450:gap-[29px]">
                <div className="flex flex-row items-start justify-start py-0 px-[11px]">
                  <div className="relative z-[2]">Community Airdrop (7.5%)</div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[12px]">
                  <div className="w-[86.2px] flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border">
                    <div className="self-stretch h-[14.7px] flex flex-row items-start justify-start relative">
                      <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                        <img
                          className="absolute top-[4.9px] left-[0px] w-[17.4px] h-[9.8px] z-[7]"
                          alt=""
                        />
                        <img
                          className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[8]"
                          loading="lazy"
                          alt=""
                          src="/vector-11.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="relative z-[2]">Team Founders (2.5%)</div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-end">
                <p className="m-0 w-[289px] relative inline-block shrink-0 z-[2]">
                  Black Hole Contract Address (50%)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameTokenomics.propTypes = {
  className: PropTypes.string,
};

export default FrameTokenomics;
