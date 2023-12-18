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
window.selectedDesiredOutcomes = [];
const ProductWebinars = ({ scrollPosition }) => {
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
  const [apiDesiredOutcomes, setApiDesiredOutcomes] = useState([]);
  const [desiredOutcomes, setDesiredOutcomes] = useState([]);
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

  useEffect(() => {
    window.selectedDesiredOutcomes = desiredOutcomes;
  }, [desiredOutcomes]);

  const getTagsFromApi = async () => {
    // const data = await $.getJSON(
    //   "https://di-marketing-server-iuzlr.ondigitalocean.app/api/tags"
    // );
    // setApiTags(data);
    // return data;
  };
  const getDesiredOutcomesFromApi = async () => {
    const response = await fetch(
      "https://di-marketing-server-iuzlr.ondigitalocean.app/api/desired-outcomes"
    );
    setApiDesiredOutcomes(await response.json());
    return data;
  };
  const getRecordTags = (name, apiTags) => {
    if (apiTags[name.trim()] != null) {
      return apiTags[name.trim()].join(" ").trim().toLowerCase();
    }
    return "";
  };
  useEffect(async () => {
    const response = await fetch(
      "https://di-marketing-server-iuzlr.ondigitalocean.app/api/product-webinars"
    );
    const content = await response.json();
    setAllCards(content);
  }, []);
  useEffect(() => {
    getDesiredOutcomesFromApi().then((apiDesiredOutcomes) => {
      var waitForJQuery = setInterval(function () {
        if (typeof window.$ != "undefined") {
          $ = window.$;

          clearInterval(waitForJQuery);
          debugger;
          window.eventBus.on("checked", function (tag, checked) {
            let tagArr = [...window.selectedTags];
            debugger;
            let contentArr = [...window.selectedContent];
            let desiredOutcomeArr = [...window.selectedDesiredOutcomes];
            const contentTags = [
              "analytics",
              "engagement",
              "insurance",
              "localmed",
              "monthly product webinar",
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
            } else if (apiDesiredOutcomes.includes(tag.toLowerCase())) {
              if (checked) {
                if (!desiredOutcomeArr.includes(tag.toLowerCase())) {
                  desiredOutcomeArr.push(tag.toLowerCase());
                }
              } else {
                if (desiredOutcomeArr.includes(tag.toLowerCase())) {
                  desiredOutcomeArr = desiredOutcomeArr.filter((element) => {
                    return element != tag.toLowerCase();
                  });
                }
              }
              setDesiredOutcomes([...desiredOutcomeArr]);
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

  const renderBlog = (blog) => {
    return (
      <div key={blog.title} role="listitem" class="blog-item w-dyn-item">
        <a href={blog.link} class="blog-link-new w-inline-block">
          <div class="blog-img-wrap">
            <LazyLoadImage
              scrollPosition={scrollPosition}
              effect={"opacity"}
              src={blog.image}
              alt=""
              sizes="(max-width: 479px) 84vw, (max-width: 767px) 33vw, (max-width: 991px) 29vw, (max-width: 1279px) 21vw, 278px"
              class="resource-image"
            />
          </div>
          <div class="pill-label">
            <div fs-cmsfilter-field="type" class="text-block-6">
              Blog
            </div>
          </div>
          <div class="paragraph-podcast-meta">
            <p fs-cmsfilter-field="description" class="paragraph blog">
              {blog.description}
            </p>
            <div fs-cmsfilter-field="title" class="blog-title-new">
              {blog.title}
            </div>
            <div class="info-wrap-new">
              <p fs-cmsfilter-field="author" class="paragraph blog blog-author">
                {blog.author}
              </p>
              <div class="blog-line">-</div>
              <p class="paragraph blog date">{blog.date}</p>
            </div>
            <div fs-cmsfilter-field="tags" class="tags">
              {blog.tags}
            </div>
          </div>
          <div class="card-btn-wrapper">
            <div class="card-btn line-btn blog-btn">Watch Now</div>
          </div>
        </a>
      </div>
    );
  };

  const renderPodcast = (podcast) => {
    return (
      <div key={podcast.title} role="listitem" class="blog-item w-dyn-item">
        <a href={podcast.link} class="blog-link-new w-inline-block">
          <div class="blog-img-wrap">
            <LazyLoadImage
              scrollPosition={scrollPosition}
              effect={"opacity"}
              src={podcast.image}
              alt=""
              sizes="(max-width: 479px) 84vw, (max-width: 767px) 33vw, (max-width: 991px) 29vw, (max-width: 1279px) 21vw, 278px"
              class="resource-image"
            />
          </div>
          <div class="pill-label">
            <div fs-cmsfilter-field="type" class="text-block-6">
              Podcast
            </div>
          </div>
          <div class="paragraph-podcast-meta">
            <p fs-cmsfilter-field="description" class="paragraph podcast-meta">
              {podcast.description}
            </p>
            <div fs-cmsfilter-field="title" class="blog-title-new">
              {podcast.title}
            </div>
            <div class="info-wrap-new">
              <p fs-cmsfilter-field="author" class="paragraph blog blog-author">
                {podcast.author}
              </p>
              <div class="blog-line">-</div>
              <p fs-cmsfilter-field="author" class="paragraph blog blog-author">
                Ep. #{podcast.episode}
              </p>
              <div class="blog-line">-</div>
              <p class="paragraph blog date">{podcast.date}</p>
            </div>
            <div fs-cmsfilter-field="tags" class="tags">
              {podcast.tags}
            </div>
          </div>
          <div class="card-btn-wrapper">
            <div class="card-btn line-btn blog-btn">Read More</div>
          </div>
        </a>
      </div>
    );
  };

  const renderWebinar = (webinar) => {
    const className = "pill-label";
    const colorClass = "";
    let firstModule = webinar.module?.toLowerCase()?.split(" ")?.[0];
    if (firstModule == "monthly") {
      firstModule = "monthly product webinar";
    }
    switch (firstModule) {
      case "engagement":
        colorClass = "green";
        break;
      case "analytics":
        colorClass = "brand-blue";
        break;
      case "localmed":
        colorClass = "red";
        break;
      case "monthly product webinar":
        colorClass = "navy";
        break;
      case "insurance":
        colorClass = "purple";
        break;
    }

    const words = firstModule.split(" ");

    let moduleName = "";

    if (webinar.module == "localmed") {
      moduleName = "LocalMed";
    } else {
      moduleName = words
        .map((word) => {
          return word[0].toUpperCase() + word.substring(1);
        })
        .join(" ");
    }

    return (
      <div key={webinar.title} role="listitem" class="blog-item w-dyn-item">
        <a href={webinar.link} class="blog-link-new w-inline-block">
          <div class="blog-img-wrap">
            <LazyLoadImage
              scrollPosition={scrollPosition}
              effect={"opacity"}
              src={webinar.image}
              alt=""
              sizes="(max-width: 479px) 84vw, (max-width: 767px) 33vw, (max-width: 991px) 29vw, (max-width: 1279px) 21vw, 278px"
              class="resource-image"
            />
          </div>
          <div class={`${className} ${colorClass}`}>
            <div fs-cmsfilter-field="type" class="text-block-6">
              {moduleName}
            </div>
          </div>
          <div class="paragraph-podcast-meta">
            <p fs-cmsfilter-field="description" class="paragraph podcast-meta">
              {webinar.description}
            </p>
            <div fs-cmsfilter-field="title" class="blog-title-new">
              {webinar.title}
            </div>
            <div fs-cmsfilter-field="tags" class="tags">
              {webinar.tags}
            </div>
          </div>
          <div class="card-btn-wrapper">
            <div class="card-btn line-btn blog-btn">Watch Now</div>
          </div>
        </a>
      </div>
    );
  };

  const renderEbook = (ebook) => {
    return (
      <div key={ebook.title} role="listitem" class="blog-item w-dyn-item">
        <a href={ebook.link} class="blog-link-new w-inline-block">
          <div class="blog-img-wrap">
            <LazyLoadImage
              scrollPosition={scrollPosition}
              effect={"opacity"}
              src={ebook.image}
              alt=""
              sizes="(max-width: 479px) 84vw, (max-width: 767px) 33vw, (max-width: 991px) 29vw, (max-width: 1279px) 21vw, 278px"
              class="resource-image"
            />
          </div>
          <div class="pill-label">
            <div fs-cmsfilter-field="type" class="text-block-6">
              eBook
            </div>
          </div>
          <div class="paragraph-podcast-meta">
            <p fs-cmsfilter-field="description" class="paragraph podcast-meta">
              {ebook.description}
            </p>
            <div fs-cmsfilter-field="title" class="blog-title-new">
              {ebook.title}
            </div>
            <div class="info-wrap-new">
              <p class="paragraph blog date">{ebook.date}</p>
            </div>
            <div fs-cmsfilter-field="tags" class="tags">
              {ebook.tags}
            </div>
          </div>
          <div class="card-btn-wrapper">
            <div class="card-btn line-btn blog-btn">Read More</div>
          </div>
        </a>
      </div>
    );
  };

  const renderTestimonial = (testimonial) => {
    return (
      <div key={testimonial.title} role="listitem" class="blog-item w-dyn-item">
        <a href={testimonial.link} class="blog-link-new w-inline-block">
          <div class="blog-img-wrap">
            <LazyLoadImage
              scrollPosition={scrollPosition}
              effect={"opacity"}
              src={testimonial.image}
              alt=""
              sizes="(max-width: 479px) 84vw, (max-width: 767px) 33vw, (max-width: 991px) 29vw, (max-width: 1279px) 21vw, 278px"
              class="resource-image"
            />
          </div>
          <div class="pill-label">
            <div fs-cmsfilter-field="type" class="text-block-6">
              Testimonial
            </div>
          </div>
          <div class="paragraph-podcast-meta">
            <p fs-cmsfilter-field="description" class="paragraph podcast-meta">
              {testimonial.description}
            </p>
            <div fs-cmsfilter-field="title" class="blog-title-new">
              {testimonial.title}
            </div>
            <div class="info-wrap-new">
              <p fs-cmsfilter-field="author" class="paragraph blog blog-author">
                {testimonial.author}
              </p>
              <div class="blog-line"></div>
              <p class="paragraph blog date"></p>
            </div>
            <div fs-cmsfilter-field="tags" class="tags">
              {testimonial.tags}
            </div>
          </div>
          <div class="card-btn-wrapper">
            <div class="card-btn line-btn blog-btn">Read More</div>
          </div>
        </a>
      </div>
    );
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
            .filter((card) => {
              if (desiredOutcomes.length == 0) {
                return true;
              }
              for (const desiredOutcome of desiredOutcomes) {
                if (!card?.desiredOutcomes?.includes(desiredOutcome)) {
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
                searchFilter.length > 0 ||
                desiredOutcomes.length > 0
              ) {
                return true;
              }
              return idx < limit;
            })
            .map((card) => {
              let content = null;
              if (contentTypes.length == 0) {
                content = renderWebinar(card);
              } else {
                for (const module of contentTypes) {
                  if (
                    card?.module?.toLowerCase()?.includes(module?.toLowerCase())
                  ) {
                    content = renderWebinar(card);
                    break;
                  }
                }
              }
              // if (
              //   card.contentType == "ebook" &&
              //   (contentTypes.length == 0 || contentTypes.includes("ebook"))
              // ) {
              //   content = renderEbook(card);
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

const component = trackWindowScroll(ProductWebinars);
const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);
root.render(e(component));
