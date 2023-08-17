import React from "react";
import ReactDOM from "react-dom";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
const e = React.createElement;
const useState = React.useState;
const useEffect = React.useEffect;
let $;
window.selectedTags = [];
window.selectedContent = [];

const Partners = () => {
  const [diamondPartners, setDiamondPartners] = useState([]);
  const [goldPartners, setGoldPartners] = useState([]);
  const [serviceTypeList, setServiceTypeList] = useState([]);
  const [tags, setTags] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");
  useEffect(async () => {
    const response = await fetch(
      "https://di-marketing-server-iuzlr.ondigitalocean.app/api/certified-partners"
    );
    const content = await response.json();
    setDiamondPartners(content.diamondPartners);
    setGoldPartners(content.goldPartners);
    console.log("@@@ content log", content);

    const serviceTypeResponse = await fetch(
      "https://di-marketing-server-iuzlr.ondigitalocean.app/api/certified-partners/service-types"
    );

    const serviceTypeContent = await serviceTypeResponse.json();
    const serviceTypes = serviceTypeContent.serviceTypes;
    if (serviceTypes != null && serviceTypes.length > 0) {
      setServiceTypeList(serviceTypes.map((service) => service.toLowerCase()));
    }
  }, []);

  useEffect(() => {
    var waitForJQuery = setInterval(function () {
      if (typeof window.$ != "undefined") {
        $ = window.$;

        clearInterval(waitForJQuery);
        window.eventBus.on("checked", function (tag, checked) {
          let tagArr = [...window.selectedTags];
          debugger;
          if (!serviceTypeList.includes(tag.toLowerCase())) {
            debugger;
            if (checked) {
              if (!tagArr.includes(tag.toLowerCase())) {
                tagArr.push(tag.toLowerCase());
              }
            } else {
              if (tagArr.includes(tag.toLowerCase())) {
                tagArr = tagArr.filter((element) => {
                  return element != tag.toLowerCase();
                });
              }
            }
            setTags([...tagArr]);
          }

          debugger;
          console.log("Inside `my-event`");
        });

        $(".w-checkbox.tag.blog.new input").change(function () {
          debugger;
          const tags = $(this).siblings("span").text();
          window.eventBus.emit("checked", null, tags, this.checked);
        });

        $(".search-input-new.w-input").keyup(function (event) {
          const text = $(this).val();
          setSearchFilter(text);
        });
        $(".search-input-new.w-input").focusout(function () {
          const text = $(this).val();
          setSearchFilter(text);
        });
        debugger;
      }
    }, 10);
  }, []);

  const filterPartnerBasedOnTag = (partner) => {
    if (tags.length == 0) {
      return true;
    }
    for (const tag of tags) {
      if (!partner?.services?.includes(tag)) {
        return false;
      }
    }
    return true;
  };

  const filterPartnerBasedOnSearchInput = (item) => {
    try {
      if (searchFilter != "") {
        if (
          item.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
          item.description.toLowerCase().includes(searchFilter.toLowerCase())
        ) {
          return true;
        }
        return false;
      }
      return true;
    } catch (err) {
      debugger;
      console.log(item);
      console.error(err);
      return false;
    }
  };

  const renderDiamondPartner = (partner) => {
    return (
      <>
        <a href={partner.link}>
          <div
            id="w-node-_8fb5ad63-d7ca-55d1-36d2-6cd3ba2c1a1c-d96ba4d7"
            class="partner-card"
          >
            <div class="div-block-61">
              <div
                style={{
                  minHeight: "320px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  backgroundColor: "#f2f3f5",
                }}
              >
                <img
                  src={partner.image}
                  loading="lazy"
                  sizes="(max-width: 479px) 91vw, (max-width: 767px) 89vw, (max-width: 991px) 92vw, (max-width: 1919px) 71vw, 982.625px"
                  alt=""
                />
              </div>
              {partner.isTopPerformer && (
                <>
                  <div class="div-block-60">
                    <img
                      src="https://assets-global.website-files.com/6266d8ef8c92b1230d1e0cbb/64c7ec962dec3c5d9ffb1ace_medal-solid.svg"
                      loading="lazy"
                      width="32"
                      height="20"
                      alt=""
                      class="image-32"
                    />
                    <div
                      class="paragraph gold-certified-partner"
                      style={{ marginTop: "0px" }}
                    >
                      {partner.topPerformerCategory}
                    </div>
                  </div>
                </>
              )}
            </div>
            <div class="partner-card-bottom">
              <div class="paragraph certified-partner-card-sub"></div>
              <div class="paragraph certified-partner-gold-card-heading">
                {partner.title}
              </div>
              <div
                class="paragraph partner-card-desciption"
                style={{ minHeight: "120px" }}
              >
                {partner.description.slice(0, 200)}
              </div>
              <div class="card-btn-wrapper certified-partner">
                <a
                  href={partner.link}
                  class="card-btn line-btn blog-btn partner"
                  style={{ textDecoration: "none" }}
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </a>
      </>
    );
  };
  const renderDiamondPartners = (diamondPartners) => {
    return (
      <>
        <div class="w-layout-grid grid-17">
          {diamondPartners
            .filter(filterPartnerBasedOnTag)
            .filter(filterPartnerBasedOnSearchInput)
            .map((partner) => renderDiamondPartner(partner))}
        </div>
      </>
    );
  };
  const renderGoldPartner = (partner) => {
    return (
      <>
        <a href={partner.link}>
          <div
            id="w-node-_6b17fc24-029e-b47a-7b02-91a17216e4af-d96ba4d7"
            class="partner-card non-gold-partner"
            style={{ position: "relative", paddingBottom: "30px" }}
          >
            <div class="div-block-61">
              <div
                style={{
                  minHeight: "210px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  backgroundColor: "#f2f3f5",
                }}
              >
                <img
                  src={partner.image}
                  loading="lazy"
                  sizes="(max-width: 479px) 91vw, (max-width: 767px) 89vw, (max-width: 991px) 92vw, (max-width: 1279px) 24vw, (max-width: 1919px) 21vw, 293.375px"
                  alt=""
                />
              </div>
              <div class="div-block-60 non-gold">
                <img
                  src="https://assets-global.website-files.com/6266d8ef8c92b1230d1e0cbb/64c7ec962dec3c5d9ffb1ace_medal-solid.svg"
                  loading="lazy"
                  width="32"
                  height="20"
                  alt=""
                  class="image-32"
                />
                <div
                  class="paragraph gold-certified-partner non-gold"
                  style={{ marginTop: "0px" }}
                >
                  {partner.topPerformerCategory}
                </div>
              </div>
            </div>
            <div class="partner-card-bottom non-gold-partner">
              <div class="paragraph certified-partner-card-sub"></div>
              <div class="paragraph certified-partner-gold-card-heading">
                {partner.title}
              </div>
              <div
                class="paragraph partner-card-desciption non-gold-description"
                style={{ minHeight: "160px" }}
              >
                {partner.description}
              </div>
              <div
                class="card-btn-wrapper certified-partner non-gold-partner"
                style={{
                  position: "absolute",
                  bottom: "20px",
                }}
              >
                <a
                  href={partner.link}
                  class="card-btn line-btn blog-btn partner"
                  style={{ textDecoration: "none" }}
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </a>
      </>
    );
  };
  const renderGoldPartners = (goldPartners) => {
    return (
      <>
        <div class="w-layout-grid grid-16">
          {goldPartners
            .filter(filterPartnerBasedOnTag)
            .filter(filterPartnerBasedOnSearchInput)
            .map((partner) => {
              return renderGoldPartner(partner);
            })}
        </div>
      </>
    );
  };
  return (
    <>
      {renderDiamondPartners(diamondPartners)}
      {renderGoldPartners(goldPartners)}
    </>
  );
};

const component = trackWindowScroll(Partners);
const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);
root.render(e(component));
