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
const Resources = ({ scrollPosition }) => {
  const [blogs, setBlogs] = useState([]);
  const [podcasts, setPodcasts] = useState([]);
  const [webinars, setWebinars] = useState([]);
  const [ebooks, setEbooks] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [blogLimit, setBlogLimit] = useState(3);
  const [podcastLimit, setPodcastLimit] = useState(3);
  const [webinarLimit, setWebinarLimit] = useState(3);
  const [ebookLimit, setEbooksLimit] = useState(3);
  const [testimonialLimit, setTestimonialLimit] = useState(3);
  const [tags, setTags] = useState([]);
  const [contentTypes, setContentTypes] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");
  const [apiTags, setApiTags] = useState({});
  const [allCards, setAllCards] = useState([]);
  const [limit, setLimit] = useState(6);
  const generateGuid = () => {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  };
  useEffect(() => {
    window.selectedTags = tags;
  }, [tags]);

  useEffect(() => {
    window.selectedContent = contentTypes;
  }, [contentTypes]);

  const getTagsFromApi = async () => {
    // const data = await $.getJSON(
    //   window.backendApiBaseUrl + "/api/tags"
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
    const resourceType = window.resourceType;
    let response;
    if (resourceType == null) {
      response = await fetch(window.backendApiBaseUrl + "/api/resources");
    } else {
      response = await fetch(
        window.backendApiBaseUrl + `/api/resources?type=${resourceType}`
      );
    }
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
          window.eventBus.on("checked", function (tag, checked) {
            let tagArr = [...window.selectedTags];
            debugger;
            let contentArr = [...window.selectedContent];
            const contentTags = [
              "webinar",
              "blog",
              "podcast",
              "ebook",
              "testimonial",
              "tool",
            ];
            if (!contentTags.includes(tag.toLowerCase())) {
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
            } else {
              debugger;
              if (checked) {
                if (!contentArr.includes(tag.toLowerCase())) {
                  contentArr.push(tag.toLowerCase());
                }
              } else {
                if (contentArr.includes(tag.toLowerCase())) {
                  contentArr = contentArr.filter((element) => {
                    return element != tag.toLowerCase();
                  });
                }
              }
              setContentTypes([...contentArr]);
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
        }
      }, 10);
    });
  }, []);
  useEffect(() => {
    setAllCards([
      ...blogs,
      ...podcasts,
      ...webinars,
      ...ebooks,
      ...testimonials,
    ]);
  }, [blogs, podcasts, webinars, ebooks, testimonials]);

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
              if (tags.length == 0) {
                return true;
              }
              for (const tag of tags) {
                if (!card?.tags?.includes(tag)) {
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
                contentTypes.length > 0 ||
                tags.length > 0 ||
                searchFilter.length > 0
              ) {
                return true;
              }
              return idx < limit;
            })
            .map((card) => {
              let content = null;
              if (
                card.contentType == "blog" &&
                (contentTypes.length == 0 || contentTypes.includes("blog"))
              ) {
                content = renderBlog(card);
              }
              if (
                card.contentType == "podcast" &&
                (contentTypes.length == 0 || contentTypes.includes("podcast"))
              ) {
                content = renderPodcast(card);
              }
              if (
                card.contentType == "webinar" &&
                (contentTypes.length == 0 || contentTypes.includes("webinar"))
              ) {
                content = renderWebinar(card);
              }
              if (
                card.contentType == "ebook" &&
                (contentTypes.length == 0 || contentTypes.includes("ebook"))
              ) {
                content = renderEbook(card);
              }
              if (
                card.contentType == "tool" &&
                (contentTypes.length == 0 || contentTypes.includes("tool"))
              ) {
                content = renderTool(card);
              }
              if (
                card.contentType == "testimonial" &&
                (contentTypes.length == 0 ||
                  contentTypes.includes("testimonial"))
              ) {
                content = renderTestimonial(card);
              }
              if (content == null) {
                return null;
              }
              return <span key={card.id}>{content}</span>;
            })}
          {tags.length == 0 &&
            contentTypes.length == 0 &&
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

const component = trackWindowScroll(Resources);
const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);
root.render(e(component));
