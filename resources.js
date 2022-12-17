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
  const [blogLimit, setBlogLimit] = useState(3);
  const [podcastLimit, setPodcastLimit] = useState(3);
  const [webinarLimit, setWebinarLimit] = useState(3);
  const [tags, setTags] = useState([]);
  const [contentTypes, setContentTypes] = useState([]);
  useEffect(() => {
    window.selectedTags = tags;
  }, [tags]);

  useEffect(() => {
    window.selectedContent = contentTypes;
  }, [contentTypes]);

  useEffect(() => {
    var waitForJQuery = setInterval(function () {
      if (typeof window.$ != "undefined") {
        $ = window.$;

        clearInterval(waitForJQuery);
        const blogElements = $(".blog-item.w-dyn-item");

        const newBlogs = [];
        for (const blog of blogElements) {
          const newBlog = {
            image: $(blog).find(".blog-img-wrap img").attr("src"),
            description: $(blog)
              .find("[class='paragraph blog']")
              .text()
              .replaceAll("\n", "")
              .trim(),
            title: $(blog)
              .find(".blog-info-wrap-new .blog-title-new")
              .text()
              .replaceAll("\n", "")
              .trim(),
            tags: $(blog)
              .find(".blog-info-wrap-new .tags")
              .text()
              .replaceAll("\n", "")
              .trim()
              .toLowerCase(),
            link: $(blog).find("a.blog-link-new.w-inline-block").attr("href"),
            author: $(blog).find(".paragraph.blog.blog-author").text(),
            date: $(blog).find("[class='paragraph blog date']").text(),
          };
          console.log(newBlog);
          newBlogs.push(newBlog);
        }
        setBlogs([...newBlogs]);

        const podcastElements = $(".podcast-item.w-dyn-item");

        const newPodcasts = [];
        for (const podcast of podcastElements) {
          const newPodcast = {
            image: $(podcast).find(".blog-img-wrap img").attr("src"),
            description: $(podcast)
              .find("[class='paragraph podcast-meta']")
              .text()
              .replaceAll("\n", "")
              .trim(),
            title: $(podcast)
              .find(".blog-info-wrap-new .blog-title-new")
              .text()
              .replaceAll("\n", "")
              .trim(),
            tags: $(podcast)
              .find(".blog-info-wrap-new .tags")
              .text()
              .replaceAll("\n", "")
              .trim()
              .toLowerCase(),
            link: $(podcast)
              .find("a.blog-link-new.w-inline-block")
              .attr("href"),
            author: $(podcast).find(".paragraph.blog.blog-author").text(),
            date: $(podcast).find("[class='paragraph blog date']").text(),
          };
          console.log(newPodcast);
          newPodcasts.push(newPodcast);
        }
        setPodcasts([...newPodcasts]);

        const webinarElements = $(".webinar-item.w-dyn-item");

        const newWebinars = [];
        for (const webinar of webinarElements) {
          const newWebinar = {
            image: $(webinar).find(".blog-img-wrap img").attr("src"),
            description: $(webinar)
              .find("[class='paragraph podcast-meta']")
              .text()
              .replaceAll("\n", "")
              .trim(),
            title: $(webinar)
              .find(".blog-info-wrap-new .blog-title-new")
              .text()
              .replaceAll("\n", "")
              .trim(),
            tags: $(webinar)
              .find(".blog-info-wrap-new .tags")
              .text()
              .replaceAll("\n", "")
              .trim()
              .toLowerCase(),
            link: $(webinar)
              .find("a.webinar-link-new.w-inline-block")
              .attr("href"),
            author: $(webinar)
              .find("[class='paragraph blog date']")
              .eq(0)
              .text(),
            date: $(webinar).find("[class='paragraph blog date']").eq(1).text(),
          };
          console.log(newWebinar);
          newWebinars.push(newWebinar);
        }
        setWebinars([...newWebinars]);

        window.eventBus.on("checked", function (tag, checked) {
          let tagArr = [...window.selectedTags];
          debugger;
          let contentArr = [...window.selectedContent];
          const contentTags = ["webinar", "blog", "podcast"];
          if (!contentTags.includes(tag.toLowerCase())) {
            if (checked) {
              if (!tagArr.includes(tag.toLowerCase())) {
                tagArr.push(tag.toLowerCase());
              }
            } else {
              if (!tagArr.includes(tag.toLowerCase())) {
                tagArr = tagArr.filter((element) => {
                  return element != tag.toLowerCase();
                });
              }
            }
            setTags([...tagArr]);
          } else {
            if (checked) {
              if (!contentArr.includes(tag.toLowerCase())) {
                contentArr.push(tag.toLowerCase());
              }
            } else {
              if (!contentArr.includes(tag.toLowerCase())) {
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
      }
    }, 10);
  }, []);
  debugger;
  console.log(contentTypes);
  return (
    <>
      {(contentTypes.length === 0 || contentTypes.includes("blog")) && (
        <>
          <h1 class="categoryheading">Blog Posts</h1>
          <div
            fs-cmsfilter-element="list"
            class="blog-collection-list-wrapper blog-wrapper w-dyn-list"
            style={{
              display: "block",
            }}
          >
            <div role="list" class="blog-list w-dyn-items">
              {blogs
                .filter((blog) => {
                  for (const tag of tags) {
                    if (!blog.tags.includes(tag)) {
                      return false;
                    }
                  }
                  return true;
                })
                .filter((blog, idx) => {
                  if (tags.length > 0 || contentTypes > 0 || idx < blogLimit) {
                    return true;
                  }
                  return false;
                })

                .map((blog) => {
                  return (
                    <div
                      key={blog.title}
                      role="listitem"
                      class="blog-item w-dyn-item"
                    >
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
                        <div class="blog-info-wrap-new">
                          <p
                            fs-cmsfilter-field="description"
                            class="paragraph blog"
                          >
                            {blog.description}
                          </p>
                          <div
                            fs-cmsfilter-field="title"
                            class="blog-title-new"
                          >
                            {blog.title}
                          </div>
                          <div class="info-wrap-new">
                            <p
                              fs-cmsfilter-field="author"
                              class="paragraph blog blog-author"
                            >
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
                          <div class="card-btn line-btn blog-btn">
                            Read More
                          </div>
                        </div>
                      </a>
                    </div>
                  );
                })}
            </div>
            {tags.length == 0 && contentTypes.length == 0 && (
              <>
                <div
                  class="card-btn-wrapper"
                  style={{ marginTop: "5px" }}
                  onClick={() => setBlogLimit(blogLimit + 6)}
                >
                  <div
                    class="card-btn line-btn blog-btn"
                    style={{ backgroundColor: "#002856", color: "white" }}
                  >
                    Load More
                  </div>
                </div>
              </>
            )}
          </div>
        </>
      )}
      {(contentTypes.length === 0 || contentTypes.includes("podcast")) && (
        <>
          <h1 class="categoryheading">Podcasts</h1>
          <div
            fs-cmsfilter-element="list"
            class="podcast-collection-list-wrapper blog-wrapper w-dyn-list"
            style={{
              display: "block",
            }}
          >
            <div role="list" class="podcast-list w-dyn-items">
              {podcasts
                .filter((podcast) => {
                  for (const tag of tags) {
                    if (!podcast.tags.includes(tag)) {
                      return false;
                    }
                  }
                  return true;
                })
                .filter((podcast, idx) => {
                  if (
                    tags.length > 0 ||
                    contentTypes > 0 ||
                    idx < podcastLimit
                  ) {
                    return true;
                  }
                  return false;
                })

                .map((podcast) => {
                  return (
                    <div
                      key={podcast.title}
                      role="listitem"
                      class="blog-item w-dyn-item"
                    >
                      <a
                        href={podcast.link}
                        class="blog-link-new w-inline-block"
                      >
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
                        <div class="blog-info-wrap-new">
                          <p
                            fs-cmsfilter-field="description"
                            class="paragraph podcast-meta"
                          >
                            {podcast.description}
                          </p>
                          <div
                            fs-cmsfilter-field="title"
                            class="blog-title-new"
                          >
                            {podcast.title}
                          </div>
                          <div class="info-wrap-new">
                            <p
                              fs-cmsfilter-field="author"
                              class="paragraph blog blog-author"
                            >
                              {podcast.author}
                            </p>
                            <div class="blog-line">-</div>
                            <p class="paragraph blog date">{podcast.date}</p>
                          </div>
                          <div fs-cmsfilter-field="tags" class="tags">
                            {podcast.tags}
                          </div>
                        </div>
                        <div class="card-btn-wrapper">
                          <div class="card-btn line-btn blog-btn">
                            Read More
                          </div>
                        </div>
                      </a>
                    </div>
                  );
                })}
            </div>
            {tags.length == 0 && contentTypes.length == 0 && (
              <>
                <div
                  class="card-btn-wrapper"
                  style={{ marginTop: "5px" }}
                  onClick={() => setPodcastLimit(podcastLimit + 6)}
                >
                  <div
                    class="card-btn line-btn blog-btn"
                    style={{ backgroundColor: "#002856", color: "white" }}
                  >
                    Load More
                  </div>
                </div>
              </>
            )}
          </div>
        </>
      )}
      {(contentTypes.length === 0 || contentTypes.includes("webinar")) && (
        <>
          <h1 class="categoryheading">CE Webinars</h1>
          <div
            fs-cmsfilter-element="list"
            class="webinar-collection-list-wrapper blog-wrapper w-dyn-list"
            style={{
              display: "block",
            }}
          >
            <div role="list" class="webinar-list w-dyn-items">
              {webinars
                .filter((webinar) => {
                  for (const tag of tags) {
                    if (!webinar.tags.includes(tag)) {
                      return false;
                    }
                  }
                  return true;
                })
                .filter((webinar, idx) => {
                  if (
                    tags.length > 0 ||
                    contentTypes > 0 ||
                    idx < webinarLimit
                  ) {
                    return true;
                  }
                  return false;
                })

                .map((webinar) => {
                  return (
                    <div
                      key={webinar.title}
                      role="listitem"
                      class="blog-item w-dyn-item"
                    >
                      <a
                        href={webinar.link}
                        class="blog-link-new w-inline-block"
                      >
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
                        <div class="blog-info-wrap-new">
                          <p
                            fs-cmsfilter-field="description"
                            class="paragraph podcast-meta"
                          >
                            {webinar.description}
                          </p>
                          <div
                            fs-cmsfilter-field="title"
                            class="blog-title-new"
                          >
                            {webinar.title}
                          </div>
                          <div class="info-wrap-new">
                            <p
                              fs-cmsfilter-field="author"
                              class="paragraph blog blog-author"
                            >
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
                          <div class="card-btn line-btn blog-btn">
                            Read More
                          </div>
                        </div>
                      </a>
                    </div>
                  );
                })}
            </div>
            {tags.length == 0 && contentTypes.length == 0 && (
              <>
                <div
                  class="card-btn-wrapper"
                  style={{ marginTop: "5px" }}
                  onClick={() => setWebinarLimit(webinarLimit + 6)}
                >
                  <div
                    class="card-btn line-btn blog-btn"
                    style={{ backgroundColor: "#002856", color: "white" }}
                  >
                    Load More
                  </div>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);
root.render(e(Resources));
