import PropTypes from "prop-types";

const FrameParticipate = ({ className = "" }) => {
  
  return (
    <section
      className={` w-[1457px] flex flex-row  justify-center pt-0 px-[72px] pb-[147px] box-border max-w-full text-center text-21xl-9 text-crimson-400 font-shojumaru lg:pb-24 lg:box-border mq825:pb-[62px] mq825:box-border mq1425:pl-9 mq1425:pr-9 mq1425:box-border ${className} mx-auto `}
    >
      <div className="flex-1 flex flex-col items-end justify-center gap-[59px] max-w-full mq825:gap-[29px]">
        <div className="w-[1259px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center">
        <div className="transition-all ease-out duration-300 w-[823px] relative inline-block shrink-0 max-w-full z-[2] mq450:text-6xl mq825:text-14xl text-center hover:text-5xl">
  Participate in our IDO Event!
</div>

        </div>
        <div className="self-stretch flex flex-row items-center justify-center gap-[57px] max-w-full text-left text-xl-9 text-gainsboro font-zcool-kuaile lg:flex-wrap mq825:gap-[28px]">
          <div className="w-[548px] flex flex-col items-end justify-start gap-[24px] min-w-[548px] max-w-full lg:flex-1 mq825:min-w-full">
            <div className="self-stretch flex flex-row items-start justify-end py-0 pr-px pl-2 box-border max-w-full text-center">
              <div className="flex-1 relative leading-[174.5%] inline-block max-w-full z-[1] mq450:text-mid mq450:leading-[29px]">
                During our IDO event, you will gain early access to our
                revolutionary ecosystem, designed to empower everyone to share
                wealth and achieve success.
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end pt-0 pb-1.5 pr-px pl-0 box-border max-w-full text-xl text-white">
              <div className="flex-1 flex flex-col items-end justify-start gap-[36.3px] max-w-full mq825:gap-[18px]">
                <div className="w-[524px] flex flex-row items-start justify-end py-0 px-14 box-border max-w-full mq825:pl-7 mq825:pr-7 mq825:box-border">
                  <div className="flex-1 flex flex-col items-start justify-start max-w-full">
                    <div className="flex flex-row items-start justify-start py-0 px-[78px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
                      <button className="cursor-pointer [border:none] py-[23px] px-[59px] bg-crimson-400 rounded-xl flex flex-row items-start justify-start whitespace-nowrap z-[2] hover:bg-crimson-100">
                        <div className="h-[70px] w-[244px] relative rounded-xl bg-crimson-400 hidden" />
                        <div className="relative text-lg font-shojumaru text-white text-left inline-block min-w-[125px] z-[3]">
                          Token Info
                        </div>
                      </button>
                    </div>
                    <div className="self-stretch rounded-xl bg-gray-700 box-border flex flex-col items-start justify-start pt-[60px] pb-[26px] pr-5 pl-[37px] gap-[25px] max-w-full shrink-0 z-[1] mt-[-27.7px] border-[1.5px] border-solid border-orangered mq450:pt-[60px] mq450:pb-5 mq450:box-border">
                      <div className="w-[412px] h-[382px] relative rounded-xl bg-gray-700 box-border hidden max-w-full border-[1.5px] border-solid border-orangered" />
                      <div className="w-[322px] flex flex-row items-start justify-start py-0 px-[22px] box-border max-w-full">
                        <div className="flex-1 flex flex-row items-start justify-start gap-[13px] mq450:flex-wrap">
                          <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[114px]">
                            <div className="self-stretch flex flex-col items-start justify-start gap-[26px]">
                              <div className="self-stretch relative z-[2] mq450:text-base">
                                Total Token Supply
                              </div>
                              <div className="relative inline-block min-w-[94px] z-[2] mq450:text-base">
                                Soft Cap
                              </div>
                              <div className="relative z-[2] mq450:text-base">
                                <p className="m-0">Initial exchange</p>
                                <p className="m-0">rate</p>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start gap-[46px] min-w-[89px] text-red mq450:flex-1">
                            <div className="relative inline-block min-w-[39px] z-[2] mq450:text-base">
                              20%
                            </div>
                            <div className="flex flex-col items-start justify-start gap-[26px]">
                              <div className="relative inline-block min-w-[89px] z-[2] mq450:text-base">
                                200 BNB
                              </div>
                              <div className="relative inline-block min-w-[57px] z-[2] mq450:text-base">
                                1 BNB
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative inline-block max-w-full z-[2] mq450:text-base">
                        Recommended Referral Commission
                      </div>
                      <div className="w-[260px] flex flex-row items-start justify-start py-0 px-[22px] box-border">
                        <div className="flex-1 flex flex-col items-start justify-start gap-[24px]">
                          <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                              <div className="relative z-[2] mq450:text-base">
                                1st Generation
                              </div>
                            </div>
                            <div className="relative text-red inline-block min-w-[27px] z-[2] mq450:text-base">
                              5%
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                              <div className="relative z-[2] mq450:text-base">
                                2nd Generation
                              </div>
                            </div>
                            <div className="relative text-red inline-block min-w-[26px] z-[2] mq450:text-base">
                              2%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[527px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                  <button className="cursor-pointer [border:none] py-[12.6px] px-[15px] bg-[transparent] rounded-[16.21px] [background:linear-gradient(93.73deg,_#d51b46_11.92%,_#ee6910_83.65%)] overflow-hidden flex flex-row items-start justify-start whitespace-nowrap z-[1]">
                    <div className="relative text-mini-1 font-zcool-kuaile text-white text-left inline-block min-w-[107px]">
                      Connect Wallet
                    </div>
                  </button>
                </div>
                <h3 className="m-0 self-stretch relative text-9xl font-normal font-shojumaru text-crimson-400 text-center z-[1] mq450:text-3xl">{`Become an affiliate & Earn 7% as Commission!`}</h3>
              </div>
            </div>
            <div className="w-[509px] flex flex-row items-start justify-start gap-[8px] max-w-full text-base text-whitesmoke-400 mq825:flex-wrap">
              <div className="flex-1 rounded-xl box-border flex flex-row items-start justify-between py-px pr-[3px] pl-[19px] min-w-[304px] max-w-full gap-[20px] z-[2] border-[1px] border-solid border-firebrick-100 mq450:flex-wrap">
                <div className="flex flex-col items-start justify-start pt-[13px] px-0 pb-0">
                  <div className="relative z-[1]">
                    Generate a unique referral link
                  </div>
                </div>
                <div className="h-[50px] w-[469px] relative rounded-xl box-border hidden max-w-full border-[1px] border-solid border-firebrick-100" />
                <button className="cursor-pointer [border:none] pt-3 pb-[15px] pr-[13px] pl-[15px] bg-crimson-400 rounded-xl flex flex-row items-start justify-start z-[3] hover:bg-crimson-100">
                  <div className="h-[42px] w-[100px] relative rounded-xl bg-crimson-400 hidden" />
                  <div className="relative text-mini font-zcool-kuaile text-white text-left inline-block min-w-[72px] z-[4]">
                    Generate
                  </div>
                </button>
              </div>
              <input className="m-0 h-10 w-[34px]" type="checkbox" />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-[13.8px] px-0 pb-0 box-border min-w-[460px] max-w-full mq825:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start pt-[42.2px] px-0 pb-0 box-border max-w-full mq450:pt-5 mq450:box-border mq825:pt-[27px] mq825:box-border">
              <form className="m-0 self-stretch rounded-xl bg-gray-700 box-border flex flex-col items-center justify-start pt-[70px] px-5 pb-[37px] relative gap-[32px] max-w-full z-[1] border-[1.5px] border-solid border-orangered mq825:gap-[16px] mq825:pt-[45px] mq825:pb-6 mq825:box-border">
                <div className="w-[708px] h-[738px] relative rounded-xl bg-gray-700 box-border hidden max-w-full z-[0] border-[1.5px] border-solid border-orangered" />
                <div className="flex flex-row items-start justify-start py-0 px-[78px] box-border max-w-full mq825:pl-[39px] mq825:pr-[39px] mq825:box-border">
                  <h1 className="m-0 relative text-29xl font-normal font-shojumaru text-crimson-400 text-left z-[1] mq450:text-10xl mq825:text-19xl">
                    PRESALE 1
                  </h1>
                </div>
                <div className="flex flex-row items-start justify-start pt-0 pb-2 pr-[51px] pl-[50px] box-border max-w-full mq825:pl-[25px] mq825:pr-[25px] mq825:box-border">
                  <div className="relative text-13xl font-zcool-kuaile text-whitesmoke-200 text-left z-[1] mq450:text-lgi mq825:text-7xl">
                    1 Saviour = 0.657 USDT
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start pt-0 px-[46px] pb-2 box-border max-w-full mq825:pl-[23px] mq825:pr-[23px] mq825:box-border">
                  <div className="relative text-5xl font-zcool-kuaile text-whitesmoke-300 text-left z-[1] mq450:text-lgi">
                    Next Stage Price = 0.723 USDT
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start pt-0 px-[15px] pb-2 box-border max-w-full">
                  <div className="relative text-5xl font-zcool-kuaile text-whitesmoke-300 text-left z-[1] mq450:text-lgi">
                    Sold - $34,56,56,764/$50,00,00,000
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border max-w-full">
                  <div className="relative text-5xl font-zcool-kuaile text-whitesmoke-300 text-left z-[1] mq450:text-lgi">
                    Raised - $34,56,56,764/$40,00,00,000
                  </div>
                </div>
                <div className="w-[468px] flex flex-col items-start justify-start pt-0 px-0 pb-2 box-border gap-[19px] max-w-full">
                  <div className="self-stretch rounded-xl box-border flex flex-row items-start justify-start py-3.5 px-5 max-w-full z-[2] border-[1px] border-solid border-firebrick-100">
                    <input
                      className="w-48 [border:none] [outline:none] font-zcool-kuaile text-base bg-[transparent] h-4 relative text-whitesmoke-400 text-left inline-block p-0 z-[1]"
                      placeholder="Enter the amount (BNB)"
                      type="text"
                    />
                    <div className="h-[50px] w-[469px] relative rounded-xl box-border hidden max-w-full border-[1px] border-solid border-firebrick-100" />
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full">
                    <div className="flex-1 rounded-xl box-border flex flex-row items-start justify-start py-3.5 px-[19px] max-w-full z-[2] border-[1px] border-solid border-firebrick-100">
                      <input
                        className="w-[195px] [border:none] [outline:none] font-zcool-kuaile text-base bg-[transparent] h-4 relative text-whitesmoke-400 text-left inline-block p-0 z-[1]"
                        placeholder="Minimum Quantity to Buy"
                        type="text"
                      />
                      <div className="h-[50px] w-[469px] relative rounded-xl box-border hidden max-w-full border-[1px] border-solid border-firebrick-100" />
                    </div>
                  </div>
                  <div className="self-stretch rounded-xl box-border flex flex-row items-start justify-start py-3.5 px-5 max-w-full z-[2] border-[1px] border-solid border-firebrick-100">
                    <div className="relative text-base font-zcool-kuaile text-whitesmoke-400 text-left z-[1]">
                      Maximum Quantity of Tokens
                    </div>
                    <div className="h-[50px] w-[469px] relative rounded-xl box-border hidden max-w-full border-[1px] border-solid border-firebrick-100" />
                  </div>
                </div>
                <div className="w-[468px] flex flex-row items-start justify-center py-0 pr-0 pl-1 box-border max-w-full">
                  <div className="flex flex-row items-start justify-start gap-[32.4px]">
                    <button className="cursor-pointer [border:none] py-3.5 px-[21px] bg-[transparent] rounded-[21.92px] [background:linear-gradient(93.73deg,_#d51b46_11.92%,_#ee6910_83.65%)] overflow-hidden flex flex-row items-start justify-start z-[1]">
                      <div className="relative text-mid font-zcool-kuaile text-white text-left inline-block min-w-[31px]">
                        Buy
                      </div>
                    </button>
                    <button className="cursor-pointer [border:none] py-3.5 px-[21px] bg-[transparent] rounded-[21.92px] [background:linear-gradient(93.73deg,_#d51b46_11.92%,_#ee6910_83.65%)] overflow-hidden flex flex-row items-start justify-start whitespace-nowrap z-[1]">
                      <div className="relative text-mid font-zcool-kuaile text-white text-left inline-block min-w-[89px]">
                        Claim Drop
                      </div>
                    </button>
                  </div>
                </div>
                <div className="w-[53.5px] h-[81.8px] !m-[0] absolute top-[-42.2px] left-[223px] rounded-[3.23px] bg-black box-border overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[16.2px] px-1.5 pb-0 z-[3] border-[0.9px] border-solid border-crimson-400">
                  <b className="w-[39px] relative text-45xl-7 font-bold font-roboto-mono text-platform-aliases-ttulos text-left flex items-center shrink-0 mq450:text-20xl mq825:text-33xl">
                    0
                  </b>
                </div>
                <div className="w-[53.5px] h-[81.8px] !m-[0] absolute top-[-42.2px] left-[281.2px] rounded-[3.23px] bg-black box-border overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[15.9px] pb-0 pr-[5px] pl-[7px] z-[3] border-[0.9px] border-solid border-crimson-400">
                  <b className="w-[39px] relative text-45xl-7 font-bold font-roboto-mono text-platform-aliases-ttulos text-left flex items-center shrink-0 mq450:text-20xl mq825:text-33xl">
                    0
                  </b>
                </div>
                <div className="w-[53.5px] h-[81.8px] !m-[0] absolute top-[-42.2px] right-[279.5px] rounded-[3.23px] bg-black box-border overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[15.9px] pb-0 pr-[5px] pl-[7px] z-[3] border-[0.9px] border-solid border-crimson-400">
                  <b className="w-[39px] relative text-45xl-7 font-bold font-roboto-mono text-platform-aliases-ttulos text-left flex items-center shrink-0 mq450:text-20xl mq825:text-33xl">
                    0
                  </b>
                </div>
                <div className="w-[53.5px] h-[81.8px] !m-[0] absolute top-[-42.2px] right-[221.3px] rounded-[3.23px] bg-black box-border overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[15.9px] pb-0 pr-1.5 pl-[7px] z-[3] border-[0.9px] border-solid border-crimson-400">
                  <b className="w-[39px] relative text-45xl-7 font-bold font-roboto-mono text-platform-aliases-ttulos text-left flex items-center shrink-0 mq450:text-20xl mq825:text-33xl">
                    0
                  </b>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameParticipate.propTypes = {
  className: PropTypes.string,
};

export default FrameParticipate;
