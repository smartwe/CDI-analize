"use strict";
(self["webpackChunklearningportalfrontend_cd5_0"] = self["webpackChunklearningportalfrontend_cd5_0"] || []).push([
    [310], {
        5581: function(t, e, s) {
            s.r(e), s.d(e, {
                default: function() {
                    return m
                }
            });
            var i = function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "masterGalleryContainer"
                    }, [e("header", [e("div", {
                        staticClass: "header-top"
                    }, [e("router-link", {
                        attrs: {
                            tag: "h1",
                            to: {
                                name: "Main"
                            }
                        }
                    }, [e("a", [e("img", {
                        attrs: {
                            src: s(3858),
                            alt: ""
                        }
                    })])])], 1)]), e("div", {
                        attrs: {
                            id: "content"
                        }
                    }, [e("div", {
                        attrs: {
                            id: "MasterGallery"
                        }
                    }, [t._m(0), e("div", {
                        staticClass: "change-screen-switch-wrap"
                    }, [e("div", {
                        staticClass: "switch-wrap"
                    }, [e("div", {
                        staticClass: "switch-item switch-newWorks",
                        class: {
                            on: 0 === t.showIndex
                        },
                        on: {
                            click: function(e) {
                                return t.clickSwitch(0)
                            }
                        }
                    }, [e("div", {
                        staticClass: "switch-icon"
                    }), e("div", {
                        staticClass: "switch-name"
                    }, [t._v("New Works")])]), e("div", {
                        staticClass: "switch-item switch-project",
                        class: {
                            on: 1 === t.showIndex
                        },
                        on: {
                            click: function(e) {
                                return t.clickSwitch(1)
                            }
                        }
                    }, [e("div", {
                        staticClass: "switch-icon"
                    }), e("div", {
                        staticClass: "switch-name"
                    }, [t._v("Project")])]), e("div", {
                        staticClass: "switch-item switch-iLearning",
                        class: {
                            on: 2 === t.showIndex
                        },
                        on: {
                            click: function(e) {
                                return t.clickSwitch(2)
                            }
                        }
                    }, [e("div", {
                        staticClass: "switch-icon"
                    }), e("div", {
                        staticClass: "switch-name"
                    }, [t._v("i-Learning")])])]), e("div", {
                        staticClass: "search-wrap"
                    }, [e("div", {
                        staticClass: "switch-item switch-search",
                        class: {
                            on: 3 === t.showIndex
                        },
                        on: {
                            click: function(e) {
                                return t.handleSwitchSearch(3)
                            }
                        }
                    }, [e("div", {
                        staticClass: "switch-icon"
                    }), e("div", {
                        staticClass: "switch-name"
                    }, [t._v("Search")]), e("div", {
                        staticClass: "search-input-wrap"
                    }, [e("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.keyword,
                            expression: "keyword"
                        }],
                        attrs: {
                            type: "text",
                            placeholder: "Please enter nicknames to search."
                        },
                        domProps: {
                            value: t.keyword
                        },
                        on: {
                            keyup: t.validateEnglish,
                            click: function(e) {
                                t.keyword = ""
                            },
                            input: function(e) {
                                e.target.composing || (t.keyword = e.target.value)
                            }
                        }
                    }), e("button", {
                        staticClass: "btn-search",
                        attrs: {
                            type: "button"
                        },
                        on: {
                            click: t.getMGalleryList
                        }
                    }), t.keywordList !== [] && t.keywordList.length > 0 ? e("div", {
                        staticClass: "search-auto-complete"
                    }, [e("ul", t._l(t.keywordList, (function(s, i) {
                        return e("li", {
                            key: i,
                            on: {
                                click: function(e) {
                                    return t.setKeywordStd(s)
                                }
                            }
                        }, [e("p", {
                            domProps: {
                                innerHTML: t._s(t.getKeywordHighlight(s.std_nickname))
                            }
                        })])
                    })), 0)]) : t._e(), e("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [t.showWarning ? e("div", {
                        staticClass: "warning-only-eng"
                    }, [e("p", [t._v("�곸뼱留� �낅젰�� �� �덉뼱��.")])]) : t._e()])], 1)])])]), e("div", {
                        staticClass: "rolling-wrap"
                    }, [e("div", {
                        staticClass: "rolling-item on"
                    }, [e("NoDataDisplay", {
                        attrs: {
                            contents: t.galleryList
                        }
                    }), t.galleryList ? e("div", {
                        staticClass: "preserve-wrap"
                    }, [e("div", {
                        staticClass: "inner"
                    }, [t._m(1), e("div", {
                        staticClass: "card-list-wrap"
                    }, t._l(t.row, (function(s, i) {
                        return e("div", {
                            key: i,
                            staticClass: "list-row"
                        }, [e("div", {
                            staticClass: "row-inner"
                        }, t._l(s, (function(s, a) {
                            return e("div", {
                                key: `row1_${a}`,
                                staticClass: "card",
                                class: "type" + ((a + i) % 3 + 1),
                                on: {
                                    click: function(e) {
                                        return t.openMasterGalleryDetail(s)
                                    }
                                }
                            }, [e("div", {
                                staticClass: "grade-wrap"
                            }, [e("div", {
                                staticClass: "grade",
                                class: t.getAplusGrade(s.display_score, s.project_type)
                            })]), e("div", {
                                staticClass: "card-img"
                            }, [e("div", {
                                staticClass: "img",
                                style: `background-image: url(${s.thumbnail_uri})`
                            })]), e("div", {
                                staticClass: "center-info-wrap"
                            }, [e("div", {
                                staticClass: "title"
                            }, [t._v(t._s(s.title))]), e("div", {
                                staticClass: "learning-info-wrap"
                            }, [e("div", {
                                staticClass: "category"
                            }, [t._v(t._s(s.esdtl_type))]), e("div", {
                                staticClass: "bar"
                            }), e("div", {
                                staticClass: "level"
                            }, [t._v(t._s(s.sub_type))])])]), e("div", {
                                staticClass: "join-student-wrap"
                            }, [e("div", {
                                staticClass: "student-list-wrap"
                            }, [e("ul", ["P" === s.project_type ? t._l(s.members, (function(t, s) {
                                return e("li", {
                                    key: s
                                }, [e("UserThumbnailWrap", {
                                    attrs: {
                                        member: t
                                    }
                                })], 1)
                            })) : [e("li", [e("UserThumbnailWrap", {
                                attrs: {
                                    member: s
                                }
                            })], 1)]], 2)])]), s.is_social ? e("div", {
                                staticClass: "btm-info-wrap"
                            }, [e("div", {
                                staticClass: "info-buff",
                                class: s.is_buff ? "on" : "",
                                on: {
                                    click: function(e) {
                                        return e.stopPropagation(), t.setBuff(s)
                                    }
                                }
                            }, [e("span", [t._v(t._s(s.buff_count))])]), e("div", {
                                staticClass: "info-comment"
                            }, [e("span", [t._v(t._s(s.comment_count))])])]) : t._e()])
                        })), 0)])
                    })), 0)])]) : t._e()], 1), e("div", {
                        staticClass: "rolling-item"
                    }, [e("NoDataDisplay", {
                        attrs: {
                            contents: t.galleryList
                        }
                    }), t.galleryList ? e("div", {
                        staticClass: "preserve-wrap"
                    }, [e("div", {
                        staticClass: "inner"
                    }, [t._m(2), e("div", {
                        staticClass: "card-list-wrap"
                    }, t._l(t.row, (function(s, i) {
                        return e("div", {
                            key: i,
                            staticClass: "list-row"
                        }, [e("div", {
                            staticClass: "row-inner"
                        }, t._l(s, (function(s, a) {
                            return e("div", {
                                key: `row1_${a}`,
                                staticClass: "card",
                                class: "type" + ((a + i) % 3 + 1),
                                on: {
                                    click: function(e) {
                                        return t.openMasterGalleryDetail(s)
                                    }
                                }
                            }, [e("div", {
                                staticClass: "grade-wrap"
                            }, [e("div", {
                                staticClass: "grade",
                                class: t.getAplusGrade(s.display_score, s.project_type)
                            })]), e("div", {
                                staticClass: "card-img"
                            }, [e("div", {
                                staticClass: "img",
                                style: `background-image: url(${s.thumbnail_uri})`
                            })]), e("div", {
                                staticClass: "center-info-wrap"
                            }, [e("div", {
                                staticClass: "title"
                            }, [t._v(t._s(s.title))]), e("div", {
                                staticClass: "learning-info-wrap"
                            }, [e("div", {
                                staticClass: "category"
                            }, [t._v(t._s(s.esdtl_type))]), e("div", {
                                staticClass: "bar"
                            }), e("div", {
                                staticClass: "level"
                            }, [t._v(t._s(s.sub_type))])])]), e("div", {
                                staticClass: "join-student-wrap"
                            }, [e("div", {
                                staticClass: "student-list-wrap"
                            }, [e("ul", ["P" === s.project_type ? t._l(s.members, (function(t, s) {
                                return e("li", {
                                    key: s
                                }, [e("UserThumbnailWrap", {
                                    attrs: {
                                        member: t
                                    }
                                })], 1)
                            })) : [e("li", [e("UserThumbnailWrap", {
                                attrs: {
                                    member: s
                                }
                            })], 1)]], 2)])]), s.is_social ? e("div", {
                                staticClass: "btm-info-wrap"
                            }, [e("div", {
                                staticClass: "info-buff",
                                class: s.is_buff ? "on" : "",
                                on: {
                                    click: function(e) {
                                        return e.stopPropagation(), t.setBuff(s)
                                    }
                                }
                            }, [e("span", [t._v(t._s(s.buff_count))])]), e("div", {
                                staticClass: "info-comment"
                            }, [e("span", [t._v(t._s(s.comment_count))])])]) : t._e()])
                        })), 0)])
                    })), 0)])]) : t._e()], 1), e("div", {
                        staticClass: "rolling-item"
                    }, [e("NoDataDisplay", {
                        attrs: {
                            contents: t.galleryList
                        }
                    }), t.galleryList ? e("div", {
                        staticClass: "preserve-wrap"
                    }, [e("div", {
                        staticClass: "inner"
                    }, [t._m(3), e("div", {
                        staticClass: "card-list-wrap"
                    }, t._l(t.row, (function(s, i) {
                        return e("div", {
                            key: i,
                            staticClass: "list-row"
                        }, [e("div", {
                            staticClass: "row-inner"
                        }, t._l(s, (function(s, a) {
                            return e("div", {
                                key: `row1_${a}`,
                                staticClass: "card",
                                class: "type" + ((a + i) % 3 + 1),
                                on: {
                                    click: function(e) {
                                        return t.openMasterGalleryDetail(s)
                                    }
                                }
                            }, [e("div", {
                                staticClass: "grade-wrap"
                            }, [e("div", {
                                staticClass: "grade",
                                class: t.getAplusGrade(s.display_score, s.project_type)
                            })]), e("div", {
                                staticClass: "card-img"
                            }, [e("div", {
                                staticClass: "img",
                                style: `background-image: url(${s.thumbnail_uri})`
                            })]), e("div", {
                                staticClass: "center-info-wrap"
                            }, [e("div", {
                                staticClass: "title"
                            }, [t._v(t._s(s.title))]), e("div", {
                                staticClass: "learning-info-wrap"
                            }, [e("div", {
                                staticClass: "category"
                            }, [t._v(t._s(s.esdtl_type))]), e("div", {
                                staticClass: "bar"
                            }), e("div", {
                                staticClass: "level"
                            }, [t._v(t._s(s.sub_type))])])]), e("div", {
                                staticClass: "join-student-wrap"
                            }, [e("div", {
                                staticClass: "student-list-wrap"
                            }, [e("ul", ["P" === s.project_type ? t._l(s.members, (function(t, s) {
                                return e("li", {
                                    key: s
                                }, [e("UserThumbnailWrap", {
                                    attrs: {
                                        member: t
                                    }
                                })], 1)
                            })) : [e("li", [e("UserThumbnailWrap", {
                                attrs: {
                                    member: s
                                }
                            })], 1)]], 2)])]), s.is_social ? e("div", {
                                staticClass: "btm-info-wrap"
                            }, [e("div", {
                                staticClass: "info-buff",
                                class: s.is_buff ? "on" : "",
                                on: {
                                    click: function(e) {
                                        return e.stopPropagation(), t.setBuff(s)
                                    }
                                }
                            }, [e("span", [t._v(t._s(s.buff_count))])]), e("div", {
                                staticClass: "info-comment"
                            }, [e("span", [t._v(t._s(s.comment_count))])])]) : t._e()])
                        })), 0)])
                    })), 0)])]) : t._e()], 1), e("div", {
                        staticClass: "rolling-item"
                    }, [e("NoDataDisplay", {
                        attrs: {
                            contents: t.galleryList
                        }
                    }), t.galleryList ? e("div", {
                        staticClass: "preserve-wrap"
                    }, [e("div", {
                        staticClass: "inner"
                    }, [e("div", {
                        staticClass: "list-title-wrap"
                    }, [e("h2", [e("span", {
                        staticClass: "search-title"
                    }), t._v(t._s(t.selectedKeywordStd.std_nickname) + "'s"), e("br"), t._v("All Works")])]), e("div", {
                        staticClass: "card-list-wrap"
                    }, t._l(t.row, (function(s, i) {
                        return e("div", {
                            key: i,
                            staticClass: "list-row"
                        }, [e("div", {
                            staticClass: "row-inner"
                        }, t._l(s, (function(s, a) {
                            return e("div", {
                                key: `row1_${a}`,
                                staticClass: "card",
                                class: "type" + ((a + i) % 3 + 1),
                                on: {
                                    click: function(e) {
                                        return t.openMasterGalleryDetail(s)
                                    }
                                }
                            }, [e("div", {
                                staticClass: "grade-wrap"
                            }, [e("div", {
                                staticClass: "grade",
                                class: t.getAplusGrade(s.display_score, s.project_type)
                            })]), e("div", {
                                staticClass: "card-img"
                            }, [e("div", {
                                staticClass: "img",
                                style: `background-image: url(${s.thumbnail_uri})`
                            })]), e("div", {
                                staticClass: "center-info-wrap"
                            }, [e("div", {
                                staticClass: "title"
                            }, [t._v(t._s(s.title))]), e("div", {
                                staticClass: "learning-info-wrap"
                            }, [e("div", {
                                staticClass: "category"
                            }, [t._v(t._s(s.esdtl_type))]), e("div", {
                                staticClass: "bar"
                            }), e("div", {
                                staticClass: "level"
                            }, [t._v(t._s(s.sub_type))])])]), e("div", {
                                staticClass: "join-student-wrap"
                            }, [e("div", {
                                staticClass: "student-list-wrap"
                            }, [e("ul", ["P" === s.project_type ? t._l(s.members, (function(t, s) {
                                return e("li", {
                                    key: s
                                }, [e("UserThumbnailWrap", {
                                    attrs: {
                                        member: t
                                    }
                                })], 1)
                            })) : [e("li", [e("UserThumbnailWrap", {
                                attrs: {
                                    member: s
                                }
                            })], 1)]], 2)])]), s.is_social ? e("div", {
                                staticClass: "btm-info-wrap"
                            }, [e("div", {
                                staticClass: "info-buff",
                                class: s.is_buff ? "on" : "",
                                on: {
                                    click: function(e) {
                                        return e.stopPropagation(), t.setBuff(s)
                                    }
                                }
                            }, [e("span", [t._v(t._s(s.buff_count))])]), e("div", {
                                staticClass: "info-comment"
                            }, [e("span", [t._v(t._s(s.comment_count))])])]) : t._e()])
                        })), 0)])
                    })), 0)])]) : t._e()], 1)]), 3 !== t.showIndex ? e("div", {
                        staticClass: "btm-toolbar-wrap"
                    }, [e("div", {
                        staticClass: "select-date-wrap"
                    }, [e("button", {
                        staticClass: "btn-prev",
                        attrs: {
                            type: "button",
                            disabled: 0 === t.selectedWeekIndex
                        },
                        on: {
                            click: function(e) {
                                return t.goWeek("prev")
                            }
                        }
                    }), e("div", {
                        staticClass: "date"
                    }, [e("b", [t._v(t._s(t.weekList[t.selectedWeekIndex].week_title))]), e("span", [t._v(t._s(t.$day(t.weekList[t.selectedWeekIndex].week_fromdate).format("MMM DD")) + " ~ " + t._s(t.$day(t.weekList[t.selectedWeekIndex].week_todate).format("MMM DD")))])]), e("button", {
                        staticClass: "btn-next",
                        attrs: {
                            type: "button",
                            disabled: t.selectedWeekIndex >= t.weekList.length - 1
                        },
                        on: {
                            click: function(e) {
                                return t.goWeek("next")
                            }
                        }
                    })]), e("div", {
                        staticClass: "bar"
                    }), e("div", {
                        staticClass: "checkBox-wrap"
                    }, [e("div", {
                        staticClass: "checkbox-item"
                    }, [e("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.searchForm.isMybranch,
                            expression: "searchForm.isMybranch"
                        }],
                        attrs: {
                            type: "checkbox",
                            name: "myBranch-check-1",
                            id: "myBranch-check-1"
                        },
                        domProps: {
                            checked: Array.isArray(t.searchForm.isMybranch) ? t._i(t.searchForm.isMybranch, null) > -1 : t.searchForm.isMybranch
                        },
                        on: {
                            change: [function(e) {
                                var s = t.searchForm.isMybranch,
                                    i = e.target,
                                    a = !!i.checked;
                                if (Array.isArray(s)) {
                                    var l = null,
                                        r = t._i(s, l);
                                    i.checked ? r < 0 && t.$set(t.searchForm, "isMybranch", s.concat([l])) : r > -1 && t.$set(t.searchForm, "isMybranch", s.slice(0, r).concat(s.slice(r + 1)))
                                } else t.$set(t.searchForm, "isMybranch", a)
                            }, t.getMGalleryList]
                        }
                    }), e("label", {
                        attrs: {
                            for: "myBranch-check-1"
                        }
                    }, [t._v("My Branch")])])])]) : t._e()])]), t.modal.projectOutput ? e("ModalProjectOutput", {
                        attrs: {
                            id: t.selectedMasterGalleryDetail.id
                        },
                        on: {
                            close: t.closeMasterGalleryDetail
                        }
                    }) : t._e(), t.modal.ModalPortfolioiLearning ? e("ModalPortfolioiLearning", {
                        attrs: {
                            portfolio: t.selectedMasterGalleryDetail
                        },
                        on: {
                            close: t.closeMasterGalleryDetail
                        }
                    }) : t._e()], 1)
                },
                a = [function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "bg-wrap"
                    }, [e("div", {
                        staticClass: "bg-item bg-1 on"
                    }, [e("div", {
                        staticClass: "bg"
                    }), e("div", {
                        staticClass: "bubble-wrap"
                    }, [e("div", {
                        staticClass: "bubble bubble-3"
                    }), e("div", {
                        staticClass: "bubble bubble-1"
                    }), e("div", {
                        staticClass: "bubble bubble-2"
                    }), e("div", {
                        staticClass: "bubble bubble-1"
                    }), e("div", {
                        staticClass: "bubble bubble-1"
                    }), e("div", {
                        staticClass: "bubble bubble-2"
                    }), e("div", {
                        staticClass: "bubble bubble-2"
                    }), e("div", {
                        staticClass: "bubble bubble-1"
                    }), e("div", {
                        staticClass: "bubble bubble-3"
                    }), e("div", {
                        staticClass: "bubble bubble-2"
                    }), e("div", {
                        staticClass: "bubble bubble-3"
                    }), e("div", {
                        staticClass: "bubble bubble-2"
                    }), e("div", {
                        staticClass: "bubble bubble-1"
                    })])]), e("div", {
                        staticClass: "bg-item bg-2"
                    }, [e("div", {
                        staticClass: "bg"
                    }), e("div", {
                        staticClass: "bubble-wrap"
                    }, [e("div", {
                        staticClass: "bubble bubble-3"
                    }), e("div", {
                        staticClass: "bubble bubble-1"
                    }), e("div", {
                        staticClass: "bubble bubble-2"
                    }), e("div", {
                        staticClass: "bubble bubble-1"
                    }), e("div", {
                        staticClass: "bubble bubble-1"
                    }), e("div", {
                        staticClass: "bubble bubble-2"
                    }), e("div", {
                        staticClass: "bubble bubble-2"
                    }), e("div", {
                        staticClass: "bubble bubble-1"
                    }), e("div", {
                        staticClass: "bubble bubble-3"
                    }), e("div", {
                        staticClass: "bubble bubble-2"
                    }), e("div", {
                        staticClass: "bubble bubble-3"
                    }), e("div", {
                        staticClass: "bubble bubble-2"
                    }), e("div", {
                        staticClass: "bubble bubble-1"
                    })])]), e("div", {
                        staticClass: "bg-item bg-3"
                    }, [e("div", {
                        staticClass: "bg"
                    }), e("div", {
                        staticClass: "bubble-wrap"
                    }, [e("div", {
                        staticClass: "bubble bubble-3"
                    }), e("div", {
                        staticClass: "bubble bubble-1"
                    }), e("div", {
                        staticClass: "bubble bubble-2"
                    }), e("div", {
                        staticClass: "bubble bubble-1"
                    }), e("div", {
                        staticClass: "bubble bubble-1"
                    }), e("div", {
                        staticClass: "bubble bubble-2"
                    }), e("div", {
                        staticClass: "bubble bubble-2"
                    }), e("div", {
                        staticClass: "bubble bubble-1"
                    }), e("div", {
                        staticClass: "bubble bubble-3"
                    }), e("div", {
                        staticClass: "bubble bubble-2"
                    }), e("div", {
                        staticClass: "bubble bubble-3"
                    }), e("div", {
                        staticClass: "bubble bubble-2"
                    }), e("div", {
                        staticClass: "bubble bubble-1"
                    })])]), e("div", {
                        staticClass: "bg-item bg-4"
                    }, [e("div", {
                        staticClass: "bg"
                    }), e("div", {
                        staticClass: "bubble-wrap"
                    }, [e("div", {
                        staticClass: "bubble bubble-3"
                    }), e("div", {
                        staticClass: "bubble bubble-1"
                    }), e("div", {
                        staticClass: "bubble bubble-2"
                    }), e("div", {
                        staticClass: "bubble bubble-1"
                    }), e("div", {
                        staticClass: "bubble bubble-1"
                    }), e("div", {
                        staticClass: "bubble bubble-2"
                    }), e("div", {
                        staticClass: "bubble bubble-2"
                    }), e("div", {
                        staticClass: "bubble bubble-1"
                    }), e("div", {
                        staticClass: "bubble bubble-3"
                    }), e("div", {
                        staticClass: "bubble bubble-2"
                    }), e("div", {
                        staticClass: "bubble bubble-3"
                    }), e("div", {
                        staticClass: "bubble bubble-2"
                    }), e("div", {
                        staticClass: "bubble bubble-1"
                    })])])])
                }, function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "list-title-wrap"
                    }, [e("h2", [t._v("Welcome to the"), e("br"), t._v("Master's Gallery")])])
                }, function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "list-title-wrap"
                    }, [e("h2", [t._v("Master's"), e("br"), t._v("Project Output")])])
                }, function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "list-title-wrap"
                    }, [e("h2", [t._v("Master's"), e("br"), t._v("i-Learning Output")])])
                }],
                l = function() {
                    var t = this,
                        e = t._self._c;
                    return e("div")
                },
                r = [],
                c = {
                    name: "MixinMasterGalleryUI",
                    data() {
                        return {
                            showIndex: 0,
                            scrollPosition: 0,
                            windowWidth: window.innerWidth,
                            wallAutoSetInverval: null,
                            afterWallAutoSetTimeout: null,
                            switchIndex: null,
                            clickDelay: 0,
                            preserve: null,
                            showSearchTooltip: !1,
                            touchPoint: 0
                        }
                    },
                    computed: {
                        _switchItems() {
                            return document.querySelectorAll(".switch-item")
                        }
                    },
                    mounted() {
                        this.$nextTick((() => {
                            this.preserve = document.querySelector(".rolling-item.on .preserve-wrap > .inner"), this.scrollWallAuto(), this.scrollEnterStop(), this.scrollLeaveStart(), document.querySelectorAll(".card .btm-info-wrap .info-buff").forEach((t => t.addEventListener("click", (function() {
                                this.classList.toggle("on")
                            }))))
                        })), window.addEventListener("wheel", this.scrollWall), window.addEventListener("touchstart", this.scrollTouchStart), window.addEventListener("touchmove", this.scrollTouchMove)
                    },
                    beforeDestroy() {
                        window.removeEventListener("wheel", this.scrollWall), window.removeEventListener("touchstart", this.scrollTouchStart), window.removeEventListener("touchmove", this.scrollTouchMove)
                    },
                    methods: {
                        scrollTouchStart(t) {
                            t.touches && (this.touchPoint = t.touches[0].pageX)
                        },
                        scrollTouchMove(t) {
                            if (!document.querySelector(".rolling-item.on .preserve-wrap")) return !1;
                            let e = t.changedTouches[0].pageX,
                                s = e;
                            s > this.touchPoint && (this.touchPoint = e, this.scrollPosition += 15), s < this.touchPoint && (this.touchPoint = e, this.scrollPosition -= 15), clearTimeout(this.afterWallAutoSetTimeout), -this.scrollPosition > this.preserve.offsetWidth && (this.scrollPosition = 1.33 * this.windowWidth), this.scrollPosition > 1.33 * this.windowWidth && (this.scrollPosition = -this.preserve.offsetWidth), this.preserve.style.transform = "rotateY(30deg) translateX(" + this.scrollPosition + "px)", clearInterval(this.wallAutoSetInverval), this.afterWallAutoSetTimeout = setTimeout((() => {
                                this.scrollWallAuto()
                            }), 1e3)
                        },
                        scrollWall(t) {
                            if (!document.querySelector(".rolling-item.on .preserve-wrap")) return !1;
                            clearTimeout(this.afterWallAutoSetTimeout), this.scrollPosition -= 1.5 * t.deltaY, -this.scrollPosition > this.preserve.offsetWidth && (this.scrollPosition = 1.33 * this.windowWidth), this.scrollPosition > 1.33 * this.windowWidth && (this.scrollPosition = -this.preserve.offsetWidth), this.preserve.style.transform = "rotateY(30deg) translateX(" + this.scrollPosition + "px)", clearInterval(this.wallAutoSetInverval), this.afterWallAutoSetTimeout = setTimeout((() => {
                                this.scrollWallAuto()
                            }), 1e3)
                        },
                        scrollWallAuto() {
                            if (clearTimeout(this.wallAutoSetInverval), !document.querySelector(".rolling-item.on .preserve-wrap")) return !1;
                            this.wallAutoSetInverval = setInterval((() => {
                                this.scrollPosition -= 1, this.preserve.style.transform = "rotateY(30deg) translateX(" + this.scrollPosition + "px)", -this.scrollPosition > this.preserve.offsetWidth && (this.scrollPosition = 1.33 * this.windowWidth)
                            }), 10)
                        },
                        scrollEnterStop() {
                            if (!document.querySelector(".rolling-item.on .preserve-wrap")) return !1;
                            const t = document.querySelectorAll(".card-list-wrap");
                            t.forEach((t => {
                                t.addEventListener("mouseenter", (() => {
                                    clearInterval(this.wallAutoSetInverval), clearTimeout(this.afterWallAutoSetTimeout)
                                }))
                            }))
                        },
                        scrollLeaveStart() {
                            if (!document.querySelector(".rolling-item.on .preserve-wrap")) return !1;
                            const t = document.querySelectorAll(".card-list-wrap");
                            t.forEach((t => {
                                t.addEventListener("mouseleave", (() => {
                                    this.scrollWallAuto()
                                }))
                            }))
                        },
                        clickSwitch(t) {
                            switch (t) {
                                case 0:
                                    this.searchForm.category = "NEW", this.searchForm.searchStdId = "";
                                    break;
                                case 1:
                                    this.searchForm.category = "PROJECT", this.searchForm.searchStdId = "";
                                    break;
                                case 2:
                                    this.searchForm.category = "ILEARNING", this.searchForm.searchStdId = "";
                                    break
                            }
                            0 == this.clickDelay && (this.showIndex = t, this.changeScreen(this._switchItems[t])), this.getMGalleryList()
                        },
                        changeScreen(t) {
                            const e = document.querySelector(".bg-wrap"),
                                s = document.querySelector(".change-screen-switch-wrap"),
                                i = s.querySelectorAll(".switch-item");
                            if (t.classList.contains("on")) return !1;
                            0 == this.clickDelay && (this.clickDelay = 1, clearInterval(this.wallAutoSetInverval), document.querySelector(".rolling-item.on").classList.add("prev"), document.querySelectorAll(".rolling-item")[this.showIndex].classList.add("on"), document.querySelectorAll(".rolling-item")[this.showIndex].classList.add("next"), document.querySelector(".rolling-item.next .preserve-wrap") && (this.scrollPosition = 0, this.preserve = document.querySelector(".rolling-item.on.next .preserve-wrap > .inner"), this.preserve.style.transform = "rotateY(30deg) translateX(0px)"), i.forEach((t => t.classList.remove("on"))), document.querySelector(".search-wrap").classList.remove("on"), t.classList.add("on"), e.querySelector(".bg-item.on").classList.add("fadeout"), e.querySelectorAll(".bg-item")[this.showIndex].classList.add("on"), setTimeout((() => {
                                const t = e.querySelector(".bg-item.on.fadeout");
                                t.classList.remove("fadeout"), t.classList.remove("on");
                                const s = document.querySelector(".rolling-item.prev");
                                s.classList.remove("on"), s.classList.remove("prev");
                                const i = document.querySelector(".rolling-item.next");
                                i.classList.remove("next"), this.scrollWallAuto(), this.clickDelay = 0
                            }), 800))
                        },
                        handleSwitchSearch(t) {
                            this._switchItems[t].closest(".search-wrap").classList.contains("on") || (this._switchItems[t].closest(".search-wrap").querySelector(".search-input-wrap input").value = ""), this._switchItems[t].closest(".search-wrap").classList.add("on"), this._switchItems[t].closest(".search-wrap").querySelector(".search-input-wrap input").focus()
                        },
                        handleSwitchSearchBtn(t) {
                            const e = document.querySelector(".change-screen-switch-wrap"),
                                s = e.querySelector(".search-wrap input");
                            t.stopPropagation();
                            const i = s.value;
                            document.querySelector(".search-title") && (document.querySelector(".search-title").textContent = i), this.resetSearchMotion()
                        },
                        checkSearchNickName(t) {
                            const e = /[^A-Za-z]/gi;
                            e.test(t.target.value) ? this.showSearchTooltip = !0 : this.showSearchTooltip = !1, t.target.value = t.target.value.replace(/[^A-Za-z]/gi, "")
                        },
                        resetSearchMotion() {
                            const t = document.querySelector(".change-screen-switch-wrap");
                            clearTimeout(this.wallAutoSetInverval), t.querySelector(".search-wrap").classList.remove("on"), this.showIndex = 3, this.changeScreen(this._switchItems[3]), this.scrollPosition = 0, document.querySelector(".search-title") && (this.preserve.style.transform = "rotateY(30deg) translateX(0px)"), setTimeout((() => {
                                this.scrollWallAuto()
                            }), 800)
                        }
                    }
                },
                o = c,
                n = s(1001),
                d = (0, n.Z)(o, l, r, !1, null, "0a499a4c", null),
                u = d.exports,
                b = s(7260),
                h = s(6777),
                v = {
                    name: "MasterGallery",
                    components: {
                        ModalProjectOutput: b.Z,
                        ModalPortfolioiLearning: h.Z
                    },
                    mixins: [u],
                    created() {
                        this.getWeekList(), this.getSearchList()
                    },
                    computed: {},
                    data() {
                        return {
                            selectedMasterGalleryDetail: {},
                            imageURL: "https://learning.chungdahm.com/photo/image",
                            showWarning: !1,
                            keyword: "",
                            searchForm: {
                                isMybranch: !1,
                                category: "NEW",
                                weekIdArr: "",
                                searchStdId: ""
                            },
                            selectedWeekIndex: 0,
                            weekList: [{
                                week_title: "",
                                week_fromdate: "",
                                week_todate: ""
                            }],
                            row: [
                                [],
                                [],
                                []
                            ],
                            galleryList: [],
                            keywordList: [],
                            selectedKeywordStd: {},
                            modal: {
                                projectOutput: !1,
                                ModalPortfolioiLearning: !1
                            }
                        }
                    },
                    methods: {
                        openMasterGalleryDetail(t) {
                            this.selectedMasterGalleryDetail = t, window.removeEventListener("wheel", this.scrollWall), window.removeEventListener("touchstart", this.scrollTouchStart), window.removeEventListener("touchmove", this.scrollTouchMove), "P" !== t.project_type ? this.openModal("ModalPortfolioiLearning") : this.openModal("projectOutput")
                        },
                        closeMasterGalleryDetail() {
                            window.addEventListener("wheel", this.scrollWall), window.addEventListener("touchstart", this.scrollTouchStart), window.addEventListener("touchmove", this.scrollTouchMove), "P" !== this.selectedMasterGalleryDetail.project_type ? this.closeModal("ModalPortfolioiLearning") : this.closeModal("projectOutput")
                        },
                        getWeekList() {
                            this.$http.get("/v2/cdi/mgallery/week/list", {}).then((t => {
                                if (this.weekList = t, this.weekList && this.weekList.length) {
                                    for (let t = 0; t < this.weekList.length; t++) {
                                        let e = this.weekList[t];
                                        if (e.is_active) {
                                            this.selectedWeekIndex = t;
                                            break
                                        }
                                    }
                                    this.searchForm.weekIdArr = this.weekList[this.selectedWeekIndex].week_id_arr, this.getMGalleryList()
                                }
                            }))
                        },
                        getMGalleryList() {
                            this.$http.get("/v2/cdi/mgallery/list", {
                                ...this.searchForm
                            }).then((t => {
                                this.galleryList = t;
                                const e = [
                                    [],
                                    [],
                                    []
                                ];
                                for (let s = 0; s < this.galleryList.length; s++) switch (s % 3) {
                                    case 0:
                                        e[0].push(this.galleryList[s]);
                                        break;
                                    case 1:
                                        e[1].push(this.galleryList[s]);
                                        break;
                                    case 2:
                                        e[2].push(this.galleryList[s]);
                                        break
                                }
                                this.row = e
                            }))
                        },
                        getSearchList() {
                            this.keywordList = [], "" !== this.keyword && this.$http.get("/v2/cdi/mgallery/std/search/list", {
                                keyword: this.keyword
                            }).then((t => {
                                this.keywordList = t
                            }))
                        },
                        goWeek(t) {
                            switch (t) {
                                case "prev":
                                    this.selectedWeekIndex--;
                                    break;
                                case "next":
                                    this.selectedWeekIndex++;
                                    break
                            }
                            this.searchForm.weekIdArr = this.weekList[this.selectedWeekIndex].week_id_arr, this.getMGalleryList()
                        },
                        getKeywordHighlight(t) {
                            let e = t.split(""),
                                s = [];
                            return e.forEach(((t, e) => {
                                let i = "";
                                i = e <= this.keyword.length - 1 ? `<b>${t}</b>` : `<span>${t}</span>`, s.push(i)
                            })), s.join("")
                        },
                        validateEnglish(t) {
                            if (!(t.keyCode >= 37 && t.keyCode <= 40)) {
                                let e = /[��-��|��-��|媛�-��]/;
                                e.test(t.target.value) ? this.showWarning = !0 : this.showWarning = !1;
                                let s = t.target.value.replace(/[^A-z0-9~!@#$%^&*/()_+|<>?,.'":;{}(\d)(?=(?:\d{3})+(?!\d))\s]/gi, "");
                                t.target.value = s, this.keyword = s, this.getSearchList()
                            }
                        },
                        setKeywordStd(t) {
                            this.selectedKeywordStd = t, this.searchForm.searchStdId = this.selectedKeywordStd.std_id, this.keyword = this.selectedKeywordStd.std_nickname, this.keywordList = [], this.clickSwitch(3), this.getMGalleryList()
                        },
                        getAplusGrade(t, e) {
                            const s = this.getGrade(t, e);
                            return s && s.length && s.indexOf("-plus") > -1 ? s : ""
                        },
                        setBuff(t) {
                            "P" === t.project_type ? this.$http.post("/v2/cdi/social-learning/project/buff/set", {
                                cjprId: t.cjpr_id,
                                isBuff: !t.is_buff
                            }).then((() => {
                                t.is_buff = !t.is_buff
                            })) : this.$http.post("/v2/cdi/mgallery/buff/set", {
                                projectId: t.id,
                                isBuff: !t.is_buff
                            }).then((() => {
                                t.is_buff = !t.is_buff
                            }))
                        }
                    }
                },
                p = v,
                w = (0, n.Z)(p, i, a, !1, null, null, null),
                m = w.exports
        }
    }
]);
//# sourceMappingURL=MasterGallery.95f15e6b.js.map
