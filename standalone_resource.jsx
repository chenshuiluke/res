import React from "react";
const useState = React.useState;
const useEffect = React.useEffect;
let $;
window.selectedTags = [];
window.selectedContent = [];
const StandAloneResources = ({ apiContentType, contentTypeTitle, ctaText }) => {
  const [topicFilters, setTopicFilters] = useState([]);
  const [goalFilters, setGoalFilters] = useState([]);
  const [topicTags, setTopicTags] = useState([]);
  const [goalTags, setGoalTags] = useState([]);
  const [contentTypes, setContentTypes] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");
  const [allCards, setAllCards] = useState([]);
  const [limit, setLimit] = useState(6);

  useEffect(() => {
    window.topicFilters = topicFilters;
    window.goalFilters = goalFilters;
    window.topicTags = topicTags;
    window.goalTags = goalTags;
  }, [topicFilters, goalFilters, topicTags, goalTags]);

  const getTagsFromApi = async () => {
    // const data = await $.getJSON(
    //   "https://di-marketing-server-iuzlr.ondigitalocean.app/api/tags"
    // );
    // setApiTags(data);
    // return data;
  };
  const getRecordTags = (name, apiTags) => {
    if (apiTags[name.trim()] != null) {
      return apiTags[name.trim()].join(" ").trim().toLowerCase();
    }
    return "";
  };
  useEffect(async () => {
    let response = await fetch(
      `https://di-marketing-server-iuzlr.ondigitalocean.app/api/resources?type=${apiContentType}`
    );

    const content = await response.json();
    setAllCards(content);
  }, []);
  useEffect(() => {
    getTagsFromApi().then((apiTags) => {
      var waitForJQuery = setInterval(function () {
        if (typeof window.$ != "undefined") {
          $ = window.$;

          clearInterval(waitForJQuery);

          debugger;

          const goalArr = [];
          const topicArr = [];
          $(".goal").each(function () {
            const goal = $(this).siblings("span").text();
            goalArr.push(goal.toLowerCase());
          });

          $(".topic").each(function () {
            const topic = $(this).siblings("span").text();
            topicArr.push(topic.toLowerCase());
          });
          setTopicTags(topicArr);
          setGoalTags(goalArr);

          window.eventBus.on("checked", (tag, checked) => {
            debugger;
            const topicFilters = window.topicFilters;
            const goalFilters = window.goalFilters;
            const topicTags = window.topicTags;
            const goalTags = window.goalTags;
            if (topicTags.includes(tag.toLowerCase())) {
              if (checked) {
                if (!topicFilters.includes(tag.toLowerCase())) {
                  setTopicFilters([...topicFilters, tag.toLowerCase()]);
                }
              } else {
                if (topicFilters.includes(tag.toLowerCase())) {
                  newTopicFilters = topicFilters.filter((element) => {
                    return element != tag.toLowerCase();
                  });
                  setTopicFilters(newTopicFilters);
                }
              }
            }

            if (goalTags.includes(tag.toLowerCase())) {
              if (checked) {
                if (!goalFilters.includes(tag.toLowerCase())) {
                  setGoalFilters([...goalFilters, tag.toLowerCase()]);
                }
              } else {
                if (goalFilters.includes(tag.toLowerCase())) {
                  newGoalFilters = goalFilters.filter((element) => {
                    return element != tag.toLowerCase();
                  });
                  setGoalFilters(newGoalFilters);
                }
              }
            }
            debugger;
            console.log("Inside `my-event`");
          });
          $(".topic,.goal").change(function () {
            debugger;
            const tags = $(this).siblings("span").text().toLowerCase();
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
        }
      }, 10);
    });
  }, []);

  const renderCard = (resource, contentType, ctaText) => {
    return (
      <>
        <div
          id="w-node-_36ce1ba5-1274-df5a-ae91-1ae588975e23-88975e23"
          className="div-block-96"
        >
          <a
            href={resource.link}
            className="podcast-link-new-4 ebook w-inline-block"
          >
            <div className="blog-img-wrap">
              <img
                alt=""
                loading="lazy"
                src={resource.image}
                sizes="350px"
                className="image-53"
              />
            </div>
            <div className="podcast-pill-label-copy-2">
              <div className="text-block-25">{contentType}</div>
            </div>
            <div className="blog-info-wrap-new-copy-copy">
              <div className="module">
                <p className="paragraph-31">{resource.description}</p>
              </div>
              <div className="info-wrap-new-3">
                {resource.author != null && (
                  <>
                    <p className="paragraph-32 series">{resource.author}</p>
                    <p
                      className="paragraph-32 series-hyphen"
                      style={{ display: "block" }}
                    >
                      -
                    </p>
                  </>
                )}
                {resource.episode != null && (
                  <>
                    <p
                      className="paragraph-32 episode-hyphen"
                      style={{ display: "block" }}
                    >
                      Ep. #{resource.episode} -&nbsp;
                    </p>
                  </>
                )}

                <p className="paragraph-32">{resource.date}</p>
              </div>
              <div className="blog-title-new-3">{resource.title}</div>
            </div>
            <div className="card-btn-wrapper ebook">
              <div className="card-btn-copy line-btn blog-btn">
                {ctaText == null ? "Read More" : ctaText}
              </div>
            </div>
          </a>
        </div>
      </>
    );
  };

  const renderBlog = (blog) => {
    return renderCard(blog, "Blog");
  };

  const renderPodcast = (podcast) => {
    return renderCard(podcast, "Podcast", "Watch / Listen");
  };

  const renderWebinar = (webinar) => {
    return renderCard(webinar, "Webinar", "Watch / Listen");
  };

  const renderEbook = (ebook) => {
    return renderCard(ebook, "eBook", "Read More");
  };

  const renderTool = (tool) => {
    return renderCard(tool, "Tool", "Read More");
  };

  const renderTestimonial = (testimonial) => {
    return renderCard(testimonial, "Testimonial", "Read More");
  };
  return (
    <>
      <div
        fs-cmsfilter-element="list"
        class="blog-collection-list-wrapper blog-wrapper w-dyn-list"
        style={{
          display: "block",
        }}
      >
        <div role="list" class="blog-list w-dyn-items">
          {allCards
            .filter((card) => {
              if (topicFilters.length == 0) {
                return true;
              }
              for (const tag of topicFilters) {
                if (!card?.tags?.includes(tag)) {
                  return false;
                }
              }
              return true;
            })
            .filter((card) => {
              if (goalFilters.length == 0) {
                return true;
              }
              for (const tag of goalFilters) {
                if (!card?.desiredOutcomes?.includes(tag)) {
                  return false;
                }
              }
              return true;
            })
            .filter((item) => {
              try {
                if (searchFilter != "") {
                  if (
                    item.title
                      .toLowerCase()
                      .includes(searchFilter.toLowerCase()) ||
                    item.description
                      .toLowerCase()
                      .includes(searchFilter.toLowerCase())
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
            })
            .sort(
              (a, b) =>
                window.moment(b.sortDate).format("YYYYMMDD") -
                window.moment(a.sortDate).format("YYYYMMDD")
            )
            .filter((card, idx) => {
              if (
                goalFilters.length > 0 ||
                topicFilters.length > 0 ||
                searchFilter.length > 0
              ) {
                return true;
              }
              return idx < limit;
            })
            .map((card) => {
              let content = renderCard(card, contentTypeTitle, ctaText);

              // if (
              //   card.contentType == "podcast" &&
              //   (contentTypes.length == 0 || contentTypes.includes("podcast"))
              // ) {
              //   content = renderPodcast(card);
              // }
              // if (
              //   card.contentType == "webinar" &&
              //   (contentTypes.length == 0 || contentTypes.includes("webinar"))
              // ) {
              //   content = renderWebinar(card);
              // }
              // if (
              //   card.contentType == "ebook" &&
              //   (contentTypes.length == 0 || contentTypes.includes("ebook"))
              // ) {
              //   content = renderEbook(card);
              // }
              // if (
              //   card.contentType == "tool" &&
              //   (contentTypes.length == 0 || contentTypes.includes("tool"))
              // ) {
              //   content = renderTool(card);
              // }
              // if (
              //   card.contentType == "testimonial" &&
              //   (contentTypes.length == 0 ||
              //     contentTypes.includes("testimonial"))
              // ) {
              //   content = renderTestimonial(card);
              // }
              if (content == null) {
                return null;
              }
              return <span key={card.id}>{content}</span>;
            })}
          {topicFilters.length == 0 &&
            goalFilters.length == 0 &&
            searchFilter.length == 0 && (
              <>
                <div
                  class="card-btn-wrapper resources-load-more-btn"
                  style={{ marginTop: "5px" }}
                  onClick={() => setLimit(limit + 6)}
                >
                  <div
                    class="card-btn line-btn blog-btn"
                    style={{
                      backgroundColor: "#002856",
                      color: "white",
                      marginTop: "20px",
                    }}
                  >
                    Load More
                  </div>
                </div>
              </>
            )}
        </div>
      </div>
    </>
  );
};
export default StandAloneResources;
