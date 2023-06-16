"use strict";

const e = React.createElement;
const useState = React.useState;
const useEffect = React.useEffect;
let $;
window.selectedTags = [];
window.selectedContent = [];
const Resources = () => {
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
    const data = await $.getJSON(
      "https://di-marketing-server-iuzlr.ondigitalocean.app/api/tags"
    );
    setApiTags(data);
    return data;
  };
  const getRecordTags = (name, apiTags) => {
    if (apiTags[name.trim()] != null) {
      return apiTags[name.trim()].join(" ").trim().toLowerCase();
    }
    return "";
  };
  useEffect(async () => {
    const content = await $.getJSON(
      "https://di-marketing-server-iuzlr.ondigitalocean.app/api/resources"
    );
    setAllCards(content);
  }, []);
  useEffect(() => {
    getTagsFromApi().then((apiTags) => {
      var waitForJQuery = setInterval(function () {
        if (typeof window.$ != "undefined") {
          $ = window.$;

          clearInterval(waitForJQuery);
          // const blogElements = $(".blog-item.w-dyn-item");

          // const newBlogs = [];
          // for (const blog of blogElements) {
          //   const newBlog = {
          //     image: $(blog).find(".blog-img-wrap img").attr("src"),
          //     description: $(blog)
          //       .find("[class='paragraph blog']")
          //       .text()
          //       .replaceAll("\n", "")
          //       .trim(),
          //     title: $(blog)
          //       .find(".blog-title-new")
          //       .text()
          //       .replaceAll("\n", "")
          //       .trim(),
          //     tags: $(blog)
          //       .find(".blog-info-wrap-new .tags")
          //       .text()
          //       .replaceAll("\n", "")
          //       .trim()
          //       .toLowerCase(),
          //     link: $(blog).find("a.blog-link-new.w-inline-block").attr("href"),
          //     author: $(blog).find(".paragraph.blog.blog-author").text(),
          //     date: $(blog).find("[class='paragraph blog date']").text(),
          //     contentType: "blog",
          //     sortDate: $(blog).find(".card-sort-date").text(),
          //     id: generateGuid(),
          //   };
          //   newBlog.tags = getRecordTags(newBlog.title, apiTags);
          //   console.log(newBlog);
          //   newBlogs.push(newBlog);
          // }
          // setBlogs([...newBlogs]);

          // const podcastElements = $(".podcast-item.w-dyn-item");
          // const newPodcasts = [];
          // for (const podcast of podcastElements) {
          //   const newPodcast = {
          //     image: $(podcast).find(".blog-img-wrap img").attr("src"),
          //     description: $(podcast)
          //       .find("[class='paragraph podcast-meta']")
          //       .text()
          //       .replaceAll("\n", "")
          //       .trim(),
          //     title: $(podcast)
          //       .find(".blog-title-new")
          //       .text()
          //       .replaceAll("\n", "")
          //       .trim(),
          //     tags: $(podcast)
          //       .find(".tags")
          //       .text()
          //       .replaceAll("\n", "")
          //       .trim()
          //       .toLowerCase(),
          //     link: $(podcast)
          //       .find("a.podcast-link-new.w-inline-block")
          //       .attr("href"),
          //     author: $(podcast).find(".paragraph.blog.blog-author").text(),
          //     date: $(podcast).find("[class='paragraph blog date']").text(),
          //     episode: $(podcast)
          //       .find("[class='paragraph blog blog-ep-number']")
          //       .text(),
          //     contentType: "podcast",
          //     sortDate: $(podcast).find(".card-sort-date").text(),
          //     id: generateGuid(),
          //   };
          //   console.log(newPodcast);
          //   newPodcast.tags = getRecordTags(newPodcast.title, apiTags);
          //   newPodcasts.push(newPodcast);
          // }
          // setPodcasts([...newPodcasts]);

          // const webinarElements = $(".webinar-item.w-dyn-item");

          // const newWebinars = [];
          // for (const webinar of webinarElements) {
          //   const newWebinar = {
          //     image: $(webinar).find(".blog-img-wrap img").attr("src"),
          //     description: $(webinar)
          //       .find("[class='paragraph podcast-meta']")
          //       .text()
          //       .replaceAll("\n", "")
          //       .trim(),
          //     title: $(webinar)
          //       .find(".blog-title-new")
          //       .text()
          //       .replaceAll("\n", "")
          //       .trim(),
          //     tags: $(webinar)
          //       .find(".tags")
          //       .text()
          //       .replaceAll("\n", "")
          //       .trim()
          //       .toLowerCase(),
          //     link: $(webinar)
          //       .find("a.webinar-link-new.w-inline-block")
          //       .attr("href"),
          //     author: $(webinar)
          //       .find("[class='paragraph blog date']")
          //       .eq(0)
          //       .text(),
          //     date: $(webinar)
          //       .find("[class='paragraph blog date']")
          //       .eq(1)
          //       .text(),
          //     contentType: "webinar",
          //     sortDate: $(webinar).find(".card-sort-date").text(),
          //     id: generateGuid(),
          //   };
          //   console.log(newWebinar);
          //   newWebinar.tags = getRecordTags(newWebinar.title, apiTags);
          //   newWebinars.push(newWebinar);
          // }
          // setWebinars([...newWebinars]);

          // const ebookElements = $(".ebook-item.w-dyn-item");

          // const newEbooks = [];
          // for (const ebook of ebookElements) {
          //   const newEbook = {
          //     image: $(ebook).find(".blog-img-wrap img").attr("src"),
          //     description: $(ebook)
          //       .find("[class='paragraph podcast-meta']")
          //       .text()
          //       .replaceAll("\n", "")
          //       .trim(),
          //     title: $(ebook)
          //       .find(".blog-title-new")
          //       .text()
          //       .replaceAll("\n", "")
          //       .trim(),
          //     tags: $(ebook)
          //       .find(".tags")
          //       .text()
          //       .replaceAll("\n", "")
          //       .trim()
          //       .toLowerCase(),
          //     link: $(ebook)
          //       .find("a.webinar-link-new.w-inline-block")
          //       .attr("href"),
          //     author: $(ebook)
          //       .find("[class='paragraph blog date']")
          //       .eq(0)
          //       .text(),
          //     date: $(ebook).find("[class='paragraph blog date']").eq(1).text(),
          //     sortDate: $(ebook).find(".card-sort-date").text(),
          //     id: generateGuid(),
          //     contentType: "ebook",
          //   };
          //   console.log("@@@ ebooks", newEbook);
          //   newEbook.tags = getRecordTags(newEbook.title, apiTags);
          //   newEbooks.push(newEbook);
          // }
          // setEbooks([...newEbooks]);

          // const testimonialElements = $(".testimonial-item.w-dyn-item");

          // const newTestimonials = [];
          // for (const testimonial of testimonialElements) {
          //   const newTestimonial = {
          //     image: $(testimonial).find(".blog-img-wrap img").attr("src"),
          //     description: $(testimonial)
          //       .find("[class='paragraph podcast-meta']")
          //       .text()
          //       .replaceAll("\n", "")
          //       .trim(),
          //     title: $(testimonial)
          //       .find(".blog-title-new")
          //       .text()
          //       .replaceAll("\n", "")
          //       .trim(),
          //     tags: $(testimonial)
          //       .find(".tags")
          //       .text()
          //       .replaceAll("\n", "")
          //       .trim()
          //       .toLowerCase(),
          //     link: $(testimonial)
          //       .find("a.webinar-link-new.w-inline-block")
          //       .attr("href"),
          //     author: $(testimonial)
          //       .find("[class='paragraph blog date']")
          //       .eq(0)
          //       .text(),
          //     date: $(testimonial)
          //       .find("[class='paragraph blog date']")
          //       .eq(1)
          //       .text(),
          //     sortDate: $(testimonial).find(".card-sort-date").text(),
          //     contentType: "testimonial",
          //     id: generateGuid(),
          //   };
          //   console.log("@@@ ebooks", newTestimonial);
          //   newTestimonial.tags = getRecordTags(newTestimonial.title, apiTags);
          //   newTestimonials.push(newTestimonial);
          // }
          // setTestimonials([...newTestimonials]);
          debugger;
          window.eventBus.on("checked", function (tag, checked) {
            let tagArr = [...window.selectedTags];
            debugger;
            let contentArr = [...window.selectedContent];
            const contentTags = [
              "ce webinar",
              "blog",
              "podcast",
              "ebook",
              "testimonial",
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

  const renderBlog = (blog) => {
    return (
      <div key={blog.title} role="listitem" class="blog-item w-dyn-item">
        <a href={blog.link} class="blog-link-new w-inline-block">
          <div class="blog-img-wrap">
            <img
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
            <div class="card-btn line-btn blog-btn">Read More</div>
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
            <img
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
    return (
      <div key={webinar.title} role="listitem" class="blog-item w-dyn-item">
        <a href={webinar.link} class="blog-link-new w-inline-block">
          <div class="blog-img-wrap">
            <img
              src={webinar.image}
              alt=""
              sizes="(max-width: 479px) 84vw, (max-width: 767px) 33vw, (max-width: 991px) 29vw, (max-width: 1279px) 21vw, 278px"
              class="resource-image"
            />
          </div>
          <div class="pill-label">
            <div fs-cmsfilter-field="type" class="text-block-6">
              Webinar
            </div>
          </div>
          <div class="paragraph-podcast-meta">
            <p fs-cmsfilter-field="description" class="paragraph podcast-meta">
              {webinar.description}
            </p>
            <div fs-cmsfilter-field="title" class="blog-title-new">
              {webinar.title}
            </div>
            <div class="info-wrap-new">
              <p fs-cmsfilter-field="author" class="paragraph blog blog-author">
                {webinar.author}
              </p>
              <div class="blog-line">-</div>
              <p class="paragraph blog date">{webinar.date}</p>
            </div>
            <div fs-cmsfilter-field="tags" class="tags">
              {webinar.tags}
            </div>
          </div>
          <div class="card-btn-wrapper">
            <div class="card-btn line-btn blog-btn">Read More</div>
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
            <img
              src={ebook.image}
              alt=""
              sizes="(max-width: 479px) 84vw, (max-width: 767px) 33vw, (max-width: 991px) 29vw, (max-width: 1279px) 21vw, 278px"
              class="resource-image"
            />
          </div>
          <div class="pill-label">
            <div fs-cmsfilter-field="type" class="text-block-6">
              Ebook
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
              <p fs-cmsfilter-field="author" class="paragraph blog blog-author">
                {ebook.author}
              </p>
              <div class="blog-line"></div>
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
            <img
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
              <p class="paragraph blog date">{testimonial.date}</p>
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
                (contentTypes.length == 0 ||
                  contentTypes.includes("ce webinar"))
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

const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);
root.render(e(Resources));
