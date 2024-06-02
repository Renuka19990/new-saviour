import PropTypes from "prop-types";

const FAQContent = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full text-left text-13xl text-crimson-400 font-shojumaru ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
        <h1 className="m-0 relative text-inherit leading-[119%] font-normal font-inherit inline-block min-w-[81px]">
          FAQ
        </h1>
      </div>
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
        loading="lazy"
        alt=""
        src="/image-11@2x.png"
      />
      <div className="flex flex-row items-start justify-start py-0 pr-5 pl-[19px] box-border max-w-full text-3xs text-white">
        <div className="w-[356px] flex flex-col items-start justify-start gap-[16.2px] max-w-full">
          <div className="self-stretch h-[43.9px] rounded-[11.13px] bg-gray-200 box-border flex flex-row items-start justify-start pt-[15px] px-[22px] pb-[12.8px] relative gap-[40px] shrink-0 [debug_commit:bf4bc93] max-w-full border-[0.6px] border-solid border-crimson-400">
            <div className="h-[43.9px] w-[357.1px] relative rounded-[11.13px] bg-gray-200 box-border hidden max-w-full z-[0] border-[0.6px] border-solid border-crimson-400" />
            <div className="relative inline-block min-w-[5px] z-[1]">1</div>
            <div className="relative text-xs-1 z-[1]">Why choose "Savior"?</div>
            <img
              className="h-[13.3px] w-[13.3px] absolute !m-[0] right-[17.8px] bottom-[13.8px] overflow-hidden shrink-0 z-[1]"
              alt=""
              src="/eparrowdownbold-11.svg"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[16.2px] shrink-0 [debug_commit:bf4bc93] max-w-full">
            <div className="self-stretch h-[43.9px] rounded-[11.13px] bg-gray-200 box-border flex flex-row items-start justify-start pt-[15px] px-[21px] pb-[12.8px] relative gap-[37.2px] max-w-full border-[0.6px] border-solid border-crimson-400">
              <div className="h-[43.9px] w-[357.1px] relative rounded-[11.13px] bg-gray-200 box-border hidden max-w-full z-[0] border-[0.6px] border-solid border-crimson-400" />
              <div className="relative inline-block min-w-[9px] z-[1]">2</div>
              <div className="relative text-xs-1 z-[1]">
                Why is the IDO duration so long?
              </div>
              <img
                className="h-[13.4px] w-[13.4px] absolute !m-[0] right-[17.7px] bottom-[13.7px] overflow-hidden shrink-0 z-[1]"
                alt=""
                src="/eparrowdownbold-21.svg"
              />
            </div>
            <div className="self-stretch h-[43.9px] rounded-[11.13px] bg-gray-200 box-border flex flex-row items-start justify-start pt-[15px] px-[21px] pb-[12.8px] relative gap-[38.2px] max-w-full border-[0.6px] border-solid border-crimson-400">
              <div className="h-[43.9px] w-[357.1px] relative rounded-[11.13px] bg-gray-200 box-border hidden max-w-full z-[0] border-[0.6px] border-solid border-crimson-400" />
              <div className="relative inline-block min-w-[8px] z-[1]">3</div>
              <div className="relative text-xs-1 z-[1]">
                When will trading go live?
              </div>
              <img
                className="h-[13.4px] w-[13.4px] absolute !m-[0] right-[17.7px] bottom-[13.7px] overflow-hidden shrink-0 z-[1]"
                alt=""
                src="/eparrowdownbold-21.svg"
              />
            </div>
            <div className="self-stretch rounded-[11.13px] bg-gray-200 box-border flex flex-col items-start justify-start pt-[15px] px-2.5 pb-[18px] relative gap-[17px] max-w-full border-[0.6px] border-solid border-crimson-400">
              <div className="w-[357.1px] h-[151.1px] relative rounded-[11.13px] bg-gray-200 box-border hidden max-w-full z-[0] border-[0.6px] border-solid border-crimson-400" />
              <div className="flex flex-row items-start justify-start py-0 px-[11px]">
                <div className="flex flex-row items-start justify-start gap-[38.2px]">
                  <div className="relative inline-block min-w-[8px] z-[1]">
                    4
                  </div>
                  <div className="relative text-xs-1 z-[1]">
                    When can we claim the tokens?
                  </div>
                </div>
              </div>
              <img
                className="w-[13.4px] h-[13.4px] absolute !m-[0] top-[15.6px] right-[17.7px] overflow-hidden shrink-0 z-[1]"
                alt=""
                src="/eparrowdownbold-4.svg"
              />
              <div className="self-stretch rounded-xl bg-whitesmoke-500 flex flex-row items-start justify-start pt-4 pb-[18px] pr-3.5 pl-4 box-border max-w-full z-[1] text-mini text-snow-200 font-zcool-kuaile">
                <div className="h-[85px] w-[335px] relative rounded-xl bg-whitesmoke-500 hidden max-w-full" />
                <h3 className="m-0 flex-1 relative text-inherit leading-[170.42%] font-normal font-inherit z-[2]">
                  <p className="m-0">
                    After the IDO concludes, you can claim the tokens on our
                    official website.
                  </p>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FAQContent.propTypes = {
  className: PropTypes.string,
};

export default FAQContent;
