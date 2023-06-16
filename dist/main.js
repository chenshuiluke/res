var $8nPFR$reactjsxruntime = require("react/jsx-runtime");
var $8nPFR$react = require("react");
var $8nPFR$reactdom = require("react-dom");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}



"use strict";
const $b31792062a8a00e2$var$e = (0, ($parcel$interopDefault($8nPFR$react))).createElement;
const $b31792062a8a00e2$var$useState = (0, ($parcel$interopDefault($8nPFR$react))).useState;
const $b31792062a8a00e2$var$useEffect = (0, ($parcel$interopDefault($8nPFR$react))).useEffect;
let $b31792062a8a00e2$var$$;
window.selectedTags = [];
window.selectedContent = [];
const $b31792062a8a00e2$var$Resources = ()=>{
    const [blogs, setBlogs] = $b31792062a8a00e2$var$useState([]);
    const [podcasts, setPodcasts] = $b31792062a8a00e2$var$useState([]);
    const [webinars, setWebinars] = $b31792062a8a00e2$var$useState([]);
    const [ebooks, setEbooks] = $b31792062a8a00e2$var$useState([]);
    const [testimonials, setTestimonials] = $b31792062a8a00e2$var$useState([]);
    const [blogLimit, setBlogLimit] = $b31792062a8a00e2$var$useState(3);
    const [podcastLimit, setPodcastLimit] = $b31792062a8a00e2$var$useState(3);
    const [webinarLimit, setWebinarLimit] = $b31792062a8a00e2$var$useState(3);
    const [ebookLimit, setEbooksLimit] = $b31792062a8a00e2$var$useState(3);
    const [testimonialLimit, setTestimonialLimit] = $b31792062a8a00e2$var$useState(3);
    const [tags, setTags] = $b31792062a8a00e2$var$useState([]);
    const [contentTypes, setContentTypes] = $b31792062a8a00e2$var$useState([]);
    const [searchFilter, setSearchFilter] = $b31792062a8a00e2$var$useState("");
    const [apiTags, setApiTags] = $b31792062a8a00e2$var$useState({});
    const [allCards, setAllCards] = $b31792062a8a00e2$var$useState([]);
    const [limit, setLimit] = $b31792062a8a00e2$var$useState(6);
    const generateGuid = ()=>{
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    };
    $b31792062a8a00e2$var$useEffect(()=>{
        window.selectedTags = tags;
    }, [
        tags
    ]);
    $b31792062a8a00e2$var$useEffect(()=>{
        window.selectedContent = contentTypes;
    }, [
        contentTypes
    ]);
    const getTagsFromApi = async ()=>{
        const data = await $b31792062a8a00e2$var$$.getJSON("https://di-marketing-server-iuzlr.ondigitalocean.app/api/tags");
        setApiTags(data);
        return data;
    };
    const getRecordTags = (name, apiTags)=>{
        if (apiTags[name.trim()] != null) return apiTags[name.trim()].join(" ").trim().toLowerCase();
        return "";
    };
    $b31792062a8a00e2$var$useEffect(async ()=>{
        const content = await $b31792062a8a00e2$var$$.getJSON("https://di-marketing-server-iuzlr.ondigitalocean.app/api/resources");
        setAllCards(content);
    }, []);
    $b31792062a8a00e2$var$useEffect(()=>{
        getTagsFromApi().then((apiTags)=>{
            var waitForJQuery = setInterval(function() {
                if (typeof window.$ != "undefined") {
                    $b31792062a8a00e2$var$$ = window.$;
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
                    window.eventBus.on("checked", function(tag, checked) {
                        let tagArr = [
                            ...window.selectedTags
                        ];
                        debugger;
                        let contentArr = [
                            ...window.selectedContent
                        ];
                        const contentTags = [
                            "ce webinar",
                            "blog",
                            "podcast",
                            "ebook",
                            "testimonial"
                        ];
                        if (!contentTags.includes(tag.toLowerCase())) {
                            debugger;
                            if (checked) {
                                if (!tagArr.includes(tag.toLowerCase())) tagArr.push(tag.toLowerCase());
                            } else if (tagArr.includes(tag.toLowerCase())) tagArr = tagArr.filter((element)=>{
                                return element != tag.toLowerCase();
                            });
                            setTags([
                                ...tagArr
                            ]);
                        } else {
                            debugger;
                            if (checked) {
                                if (!contentArr.includes(tag.toLowerCase())) contentArr.push(tag.toLowerCase());
                            } else if (contentArr.includes(tag.toLowerCase())) contentArr = contentArr.filter((element)=>{
                                return element != tag.toLowerCase();
                            });
                            setContentTypes([
                                ...contentArr
                            ]);
                        }
                        debugger;
                        console.log("Inside `my-event`");
                    });
                    $b31792062a8a00e2$var$$(".w-checkbox.tag.blog.new input").change(function() {
                        debugger;
                        const tags = $b31792062a8a00e2$var$$(this).siblings("span").text();
                        window.eventBus.emit("checked", null, tags, this.checked);
                    });
                    $b31792062a8a00e2$var$$(".search-input-new.w-input").keyup(function(event) {
                        const text = $b31792062a8a00e2$var$$(this).val();
                        setSearchFilter(text);
                    });
                    $b31792062a8a00e2$var$$(".search-input-new.w-input").focusout(function() {
                        const text = $b31792062a8a00e2$var$$(this).val();
                        setSearchFilter(text);
                    });
                }
            }, 10);
        });
    }, []);
    $b31792062a8a00e2$var$useEffect(()=>{
        setAllCards([
            ...blogs,
            ...podcasts,
            ...webinars,
            ...ebooks,
            ...testimonials
        ]);
    }, [
        blogs,
        podcasts,
        webinars,
        ebooks,
        testimonials
    ]);
    const renderBlog = (blog)=>{
        return /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("div", {
            role: "listitem",
            class: "blog-item w-dyn-item",
            children: /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsxs)("a", {
                href: blog.link,
                class: "blog-link-new w-inline-block",
                children: [
                    /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("div", {
                        class: "blog-img-wrap",
                        children: /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("img", {
                            src: blog.image,
                            alt: "",
                            sizes: "(max-width: 479px) 84vw, (max-width: 767px) 33vw, (max-width: 991px) 29vw, (max-width: 1279px) 21vw, 278px",
                            class: "resource-image"
                        })
                    }),
                    /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("div", {
                        class: "pill-label",
                        children: /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("div", {
                            "fs-cmsfilter-field": "type",
                            class: "text-block-6",
                            children: "Blog"
                        })
                    }),
                    /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsxs)("div", {
                        class: "paragraph-podcast-meta",
                        children: [
                            /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("p", {
                                "fs-cmsfilter-field": "description",
                                class: "paragraph blog",
                                children: blog.description
                            }),
                            /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("div", {
                                "fs-cmsfilter-field": "title",
                                class: "blog-title-new",
                                children: blog.title
                            }),
                            /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsxs)("div", {
                                class: "info-wrap-new",
                                children: [
                                    /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("p", {
                                        "fs-cmsfilter-field": "author",
                                        class: "paragraph blog blog-author",
                                        children: blog.author
                                    }),
                                    /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("div", {
                                        class: "blog-line",
                                        children: "-"
                                    }),
                                    /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("p", {
                                        class: "paragraph blog date",
                                        children: blog.date
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("div", {
                                "fs-cmsfilter-field": "tags",
                                class: "tags",
                                children: blog.tags
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("div", {
                        class: "card-btn-wrapper",
                        children: /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("div", {
                            class: "card-btn line-btn blog-btn",
                            children: "Read More"
                        })
                    })
                ]
            })
        }, blog.title);
    };
    const renderPodcast = (podcast)=>{
        return /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("div", {
            role: "listitem",
            class: "blog-item w-dyn-item",
            children: /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsxs)("a", {
                href: podcast.link,
                class: "blog-link-new w-inline-block",
                children: [
                    /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("div", {
                        class: "blog-img-wrap",
                        children: /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("img", {
                            src: podcast.image,
                            alt: "",
                            sizes: "(max-width: 479px) 84vw, (max-width: 767px) 33vw, (max-width: 991px) 29vw, (max-width: 1279px) 21vw, 278px",
                            class: "resource-image"
                        })
                    }),
                    /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("div", {
                        class: "pill-label",
                        children: /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("div", {
                            "fs-cmsfilter-field": "type",
                            class: "text-block-6",
                            children: "Podcast"
                        })
                    }),
                    /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsxs)("div", {
                        class: "paragraph-podcast-meta",
                        children: [
                            /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("p", {
                                "fs-cmsfilter-field": "description",
                                class: "paragraph podcast-meta",
                                children: podcast.description
                            }),
                            /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("div", {
                                "fs-cmsfilter-field": "title",
                                class: "blog-title-new",
                                children: podcast.title
                            }),
                            /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsxs)("div", {
                                class: "info-wrap-new",
                                children: [
                                    /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("p", {
                                        "fs-cmsfilter-field": "author",
                                        class: "paragraph blog blog-author",
                                        children: podcast.author
                                    }),
                                    /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("div", {
                                        class: "blog-line",
                                        children: "-"
                                    }),
                                    /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsxs)("p", {
                                        "fs-cmsfilter-field": "author",
                                        class: "paragraph blog blog-author",
                                        children: [
                                            "Ep. #",
                                            podcast.episode
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("div", {
                                        class: "blog-line",
                                        children: "-"
                                    }),
                                    /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("p", {
                                        class: "paragraph blog date",
                                        children: podcast.date
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("div", {
                                "fs-cmsfilter-field": "tags",
                                class: "tags",
                                children: podcast.tags
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("div", {
                        class: "card-btn-wrapper",
                        children: /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("div", {
                            class: "card-btn line-btn blog-btn",
                            children: "Read More"
                        })
                    })
                ]
            })
        }, podcast.title);
    };
    const renderWebinar = (webinar)=>{
        return /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("div", {
            role: "listitem",
            class: "blog-item w-dyn-item",
            children: /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsxs)("a", {
                href: webinar.link,
                class: "blog-link-new w-inline-block",
                children: [
                    /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("div", {
                        class: "blog-img-wrap",
                        children: /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("img", {
                            src: webinar.image,
                            alt: "",
                            sizes: "(max-width: 479px) 84vw, (max-width: 767px) 33vw, (max-width: 991px) 29vw, (max-width: 1279px) 21vw, 278px",
                            class: "resource-image"
                        })
                    }),
                    /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("div", {
                        class: "pill-label",
                        children: /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("div", {
                            "fs-cmsfilter-field": "type",
                            class: "text-block-6",
                            children: "Webinar"
                        })
                    }),
                    /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsxs)("div", {
                        class: "paragraph-podcast-meta",
                        children: [
                            /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("p", {
                                "fs-cmsfilter-field": "description",
                                class: "paragraph podcast-meta",
                                children: webinar.description
                            }),
                            /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("div", {
                                "fs-cmsfilter-field": "title",
                                class: "blog-title-new",
                                children: webinar.title
                            }),
                            /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsxs)("div", {
                                class: "info-wrap-new",
                                children: [
                                    /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("p", {
                                        "fs-cmsfilter-field": "author",
                                        class: "paragraph blog blog-author",
                                        children: webinar.author
                                    }),
                                    /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("div", {
                                        class: "blog-line",
                                        children: "-"
                                    }),
                                    /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("p", {
                                        class: "paragraph blog date",
                                        children: webinar.date
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("div", {
                                "fs-cmsfilter-field": "tags",
                                class: "tags",
                                children: webinar.tags
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("div", {
                        class: "card-btn-wrapper",
                        children: /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("div", {
                            class: "card-btn line-btn blog-btn",
                            children: "Read More"
                        })
                    })
                ]
            })
        }, webinar.title);
    };
    const renderEbook = (ebook)=>{
        return /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("div", {
            role: "listitem",
            class: "blog-item w-dyn-item",
            children: /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsxs)("a", {
                href: ebook.link,
                class: "blog-link-new w-inline-block",
                children: [
                    /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("div", {
                        class: "blog-img-wrap",
                        children: /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("img", {
                            src: ebook.image,
                            alt: "",
                            sizes: "(max-width: 479px) 84vw, (max-width: 767px) 33vw, (max-width: 991px) 29vw, (max-width: 1279px) 21vw, 278px",
                            class: "resource-image"
                        })
                    }),
                    /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("div", {
                        class: "pill-label",
                        children: /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("div", {
                            "fs-cmsfilter-field": "type",
                            class: "text-block-6",
                            children: "Ebook"
                        })
                    }),
                    /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsxs)("div", {
                        class: "paragraph-podcast-meta",
                        children: [
                            /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("p", {
                                "fs-cmsfilter-field": "description",
                                class: "paragraph podcast-meta",
                                children: ebook.description
                            }),
                            /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("div", {
                                "fs-cmsfilter-field": "title",
                                class: "blog-title-new",
                                children: ebook.title
                            }),
                            /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsxs)("div", {
                                class: "info-wrap-new",
                                children: [
                                    /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("p", {
                                        "fs-cmsfilter-field": "author",
                                        class: "paragraph blog blog-author",
                                        children: ebook.author
                                    }),
                                    /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("div", {
                                        class: "blog-line"
                                    }),
                                    /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("p", {
                                        class: "paragraph blog date",
                                        children: ebook.date
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("div", {
                                "fs-cmsfilter-field": "tags",
                                class: "tags",
                                children: ebook.tags
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("div", {
                        class: "card-btn-wrapper",
                        children: /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("div", {
                            class: "card-btn line-btn blog-btn",
                            children: "Read More"
                        })
                    })
                ]
            })
        }, ebook.title);
    };
    const renderTestimonial = (testimonial)=>{
        return /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("div", {
            role: "listitem",
            class: "blog-item w-dyn-item",
            children: /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsxs)("a", {
                href: testimonial.link,
                class: "blog-link-new w-inline-block",
                children: [
                    /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("div", {
                        class: "blog-img-wrap",
                        children: /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("img", {
                            src: testimonial.image,
                            alt: "",
                            sizes: "(max-width: 479px) 84vw, (max-width: 767px) 33vw, (max-width: 991px) 29vw, (max-width: 1279px) 21vw, 278px",
                            class: "resource-image"
                        })
                    }),
                    /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("div", {
                        class: "pill-label",
                        children: /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("div", {
                            "fs-cmsfilter-field": "type",
                            class: "text-block-6",
                            children: "Testimonial"
                        })
                    }),
                    /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsxs)("div", {
                        class: "paragraph-podcast-meta",
                        children: [
                            /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("p", {
                                "fs-cmsfilter-field": "description",
                                class: "paragraph podcast-meta",
                                children: testimonial.description
                            }),
                            /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("div", {
                                "fs-cmsfilter-field": "title",
                                class: "blog-title-new",
                                children: testimonial.title
                            }),
                            /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsxs)("div", {
                                class: "info-wrap-new",
                                children: [
                                    /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("p", {
                                        "fs-cmsfilter-field": "author",
                                        class: "paragraph blog blog-author",
                                        children: testimonial.author
                                    }),
                                    /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("div", {
                                        class: "blog-line"
                                    }),
                                    /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("p", {
                                        class: "paragraph blog date",
                                        children: testimonial.date
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("div", {
                                "fs-cmsfilter-field": "tags",
                                class: "tags",
                                children: testimonial.tags
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("div", {
                        class: "card-btn-wrapper",
                        children: /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("div", {
                            class: "card-btn line-btn blog-btn",
                            children: "Read More"
                        })
                    })
                ]
            })
        }, testimonial.title);
    };
    return /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)((0, $8nPFR$reactjsxruntime.Fragment), {
        children: /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("div", {
            "fs-cmsfilter-element": "list",
            class: "blog-collection-list-wrapper blog-wrapper w-dyn-list",
            style: {
                display: "block"
            },
            children: /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsxs)("div", {
                role: "list",
                class: "blog-list w-dyn-items",
                children: [
                    allCards.filter((card)=>{
                        if (tags.length == 0) return true;
                        for (const tag of tags){
                            if (!card?.tags?.includes(tag)) return false;
                        }
                        return true;
                    }).filter((item)=>{
                        try {
                            if (searchFilter != "") {
                                if (item.title.toLowerCase().includes(searchFilter.toLowerCase()) || item.description.toLowerCase().includes(searchFilter.toLowerCase())) return true;
                                return false;
                            }
                            return true;
                        } catch (err) {
                            debugger;
                            console.error(err);
                            return false;
                        }
                    }).sort((a, b)=>window.moment(b.sortDate).format("YYYYMMDD") - window.moment(a.sortDate).format("YYYYMMDD")).filter((card, idx)=>{
                        if (contentTypes.length > 0 || tags.length > 0 || searchFilter.length > 0) return true;
                        return idx < limit;
                    }).map((card)=>{
                        let content = null;
                        if (card.contentType == "blog" && (contentTypes.length == 0 || contentTypes.includes("blog"))) content = renderBlog(card);
                        if (card.contentType == "podcast" && (contentTypes.length == 0 || contentTypes.includes("podcast"))) content = renderPodcast(card);
                        if (card.contentType == "webinar" && (contentTypes.length == 0 || contentTypes.includes("ce webinar"))) content = renderWebinar(card);
                        if (card.contentType == "ebook" && (contentTypes.length == 0 || contentTypes.includes("ebook"))) content = renderEbook(card);
                        if (card.contentType == "testimonial" && (contentTypes.length == 0 || contentTypes.includes("testimonial"))) content = renderTestimonial(card);
                        if (content == null) return null;
                        return /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("span", {
                            children: content
                        }, card.id);
                    }),
                    tags.length == 0 && contentTypes.length == 0 && searchFilter.length == 0 && /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)((0, $8nPFR$reactjsxruntime.Fragment), {
                        children: /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("div", {
                            class: "card-btn-wrapper resources-load-more-btn",
                            style: {
                                marginTop: "5px"
                            },
                            onClick: ()=>setLimit(limit + 6),
                            children: /*#__PURE__*/ (0, $8nPFR$reactjsxruntime.jsx)("div", {
                                class: "card-btn line-btn blog-btn",
                                style: {
                                    backgroundColor: "#002856",
                                    color: "white",
                                    marginTop: "20px"
                                },
                                children: "Load More"
                            })
                        })
                    })
                ]
            })
        })
    });
};
const $b31792062a8a00e2$var$domContainer = document.querySelector("#root");
const $b31792062a8a00e2$var$root = (0, ($parcel$interopDefault($8nPFR$reactdom))).createRoot($b31792062a8a00e2$var$domContainer);
$b31792062a8a00e2$var$root.render($b31792062a8a00e2$var$e($b31792062a8a00e2$var$Resources));


//# sourceMappingURL=main.js.map
