(function() {
    var t = {
            6459: function(t, e, i) {
                "use strict";
                i.d(e, {
                    Z: function() {
                        return c
                    }
                });
                var s = function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", {
                            staticClass: "modal modal-couponBox"
                        }, [e("div", {
                            staticClass: "modal-inner"
                        }, [e("div", {
                            staticClass: "modal-box-wrap"
                        }, [e("button", {
                            staticClass: "btn-modal-close",
                            on: {
                                click: function(e) {
                                    return t.$emit("close")
                                }
                            }
                        }), t._m(0), e("div", {
                            staticClass: "modal-cont-wrap"
                        }, [e("div", {
                            staticClass: "tab-nav-wrap tab-link-1"
                        }, [e("Tabs", {
                            attrs: {
                                tabType: "round",
                                options: t.couponTabs.options,
                                field: {
                                    name: "name",
                                    value: "isUsed"
                                },
                                selected: t.couponTabs.selected
                            },
                            on: {
                                select: t.handleSelectTab
                            }
                        })], 1), t._m(1), t.couponList.list ? e("div", {
                            staticClass: "tab-cont-wrap tab-link-1"
                        }, [e("div", {
                            staticClass: "tab-cont",
                            class: {
                                on: 0 === t.couponList.list.length
                            }
                        }, [e("div", {
                            staticClass: "coupon-list-wrap"
                        }, [e("div", {
                            staticClass: "list-empty"
                        }, [e("p", [t._v(t._s(t._emptyMessage))])])])])]) : t._e(), e("div", {
                            staticClass: "tab-cont-wrap tab-link-1"
                        }, [e("div", {
                            staticClass: "tab-cont",
                            class: {
                                on: 0 === t._tabIndex
                            }
                        }, [e("div", {
                            staticClass: "coupon-list-wrap"
                        }, [e("ul", t._l(t.couponList.list, (function(i, s) {
                            return e("li", {
                                key: s
                            }, [t._m(2, !0), e("div", {
                                staticClass: "coupon-info"
                            }, [e("div", {
                                staticClass: "coupon-name"
                            }, [t._v(" " + t._s(i.sem_eng_name) + " "), e("div", {
                                staticClass: "bar"
                            }), t._v(" " + t._s(i.coupon_name) + " ")]), e("div", {
                                staticClass: "coupon-desc"
                            }, [t._v("Social Learning�먯꽌 �ъ슜�� �� �덈뒗 Emoji 荑좏룿�� 諛쒓툒�섏뿀�듬땲��.")]), e("div", {
                                staticClass: "coupon-date"
                            }, [t._v("�좏슚湲곌컙 : �곴뎄")])])])
                        })), 0)])]), e("div", {
                            staticClass: "tab-cont",
                            class: {
                                on: 1 === t._tabIndex
                            }
                        }, [e("div", {
                            staticClass: "coupon-list-wrap"
                        }, [e("ul", t._l(t.couponList.list, (function(i, s) {
                            return e("li", {
                                key: s
                            }, [t._m(3, !0), e("div", {
                                staticClass: "coupon-info"
                            }, [e("div", {
                                staticClass: "coupon-name"
                            }, [t._v(" " + t._s(i.sem_eng_name) + " "), e("div", {
                                staticClass: "bar"
                            }), t._v(" " + t._s(i.coupon_name) + " ")]), e("div", {
                                staticClass: "coupon-desc"
                            }, [t._v("Social Learning�먯꽌 �ъ슜�� �� �덈뒗 Emoji 荑좏룿�� 諛쒓툒�섏뿀�듬땲��.")]), e("div", {
                                staticClass: "coupon-date"
                            }, [t._v("�ъ슜 �쇱옄 : " + t._s(i.use_date))])])])
                        })), 0)])])])])])])])
                    },
                    a = [function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", {
                            staticClass: "modal-title-wrap"
                        }, [e("div", {
                            staticClass: "title"
                        }, [t._v("Coupon Box")])])
                    }, function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", {
                            staticClass: "desc-box-wrap"
                        }, [e("ul", [e("li", [t._v("荑좏룿�� Social Learning�� 吏곸쟾 �ъ썝 �숆린�� �ъ꽦 �덈꺼�� �곕씪 荑좏룿�� 諛쒓툒�⑸땲��.")]), e("li", [t._v("荑좏룿�� Social Learning�먯꽌 �ъ슜 媛��ν븳 Emoji濡� 援먰솚�� �� �덉뒿�덈떎.")]), e("li", [t._v("1媛쒖쓽 荑좏룿�쇰줈�� Emoji 1�명듃濡� 援먰솚 媛��ν빀�덈떎.")]), e("li", [t._v("荑좏룿�� 諛쒓툒諛쏆� 釉뚮옖�쒖� �곴��놁씠 �ъ썝�섍퀬 �덈뒗 紐⑤뱺 �щ떇�ы깉�� Get Emoji�먯꽌 援먰솚�� �� �덉뒿�덈떎.")]), e("li", [t._v("援먰솚 �꾨즺�� 荑좏룿�� 痍⑥냼媛� 遺덇��� �⑸땲��.")])])])
                    }, function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", {
                            staticClass: "coupon-img"
                        }, [e("img", {
                            attrs: {
                                src: i(9149),
                                alt: ""
                            }
                        })])
                    }, function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", {
                            staticClass: "coupon-img"
                        }, [e("img", {
                            attrs: {
                                src: i(4319),
                                alt: ""
                            }
                        })])
                    }],
                    n = {
                        name: "ModalCouponBox",
                        data() {
                            return {
                                couponTabs: {
                                    selected: {},
                                    options: [{
                                        name: "My Coupons",
                                        isUsed: !1
                                    }, {
                                        name: "Used Coupons",
                                        isUsed: !0
                                    }]
                                },
                                couponList: [],
                                page: {
                                    pageIndex: 1,
                                    pageSize: 10
                                }
                            }
                        },
                        computed: {
                            _tabIndex() {
                                return this.couponTabs.options.findIndex((t => t === this.couponTabs.selected))
                            },
                            _emptyMessage() {
                                switch (this._tabIndex) {
                                    case 0:
                                        return "�ъ슜 媛��ν븳 荑좏룿�� �놁뒿�덈떎.";
                                    case 1:
                                        return "�ъ슜�� 荑좏룿�� �놁뒿�덈떎.";
                                    default:
                                        return ""
                                }
                            }
                        },
                        created() {
                            this.couponTabs.selected = this.couponTabs.options[0], this.getEmojiDetail()
                        },
                        methods: {
                            getEmojiDetail() {
                                this.$http.get("/v2/cdi/emoji/coupon/list", {
                                    isUsed: this.couponTabs.selected.isUsed,
                                    pageIndex: this.page.pageIndex,
                                    pageSize: this.page.pageSize
                                }).then((t => {
                                    this.couponList = t
                                }))
                            },
                            handleSelectTab(t) {
                                this.couponTabs.selected = t, this.getEmojiDetail()
                            }
                        }
                    },
                    o = n,
                    r = i(1001),
                    l = (0, r.Z)(o, s, a, !1, null, null, null),
                    c = l.exports
            },
            3180: function(t, e, i) {
                "use strict";
                i.d(e, {
                    Z: function() {
                        return d
                    }
                });
                var s = function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", {
                            staticClass: "modal modal-socialPointHistory"
                        }, [e("div", {
                            staticClass: "modal-inner"
                        }, [e("div", {
                            staticClass: "modal-box-wrap"
                        }, [e("button", {
                            staticClass: "btn-modal-close",
                            attrs: {
                                type: "button"
                            },
                            on: {
                                click: function(e) {
                                    return t.$emit("close")
                                }
                            }
                        }), t._m(0), e("div", {
                            staticClass: "modal-cont-wrap"
                        }, [e("SelectBoxGroup", [e("SelectBox", {
                            attrs: {
                                orderName: "first",
                                options: t.semesterList.options,
                                selected: t.semesterList.selected,
                                field: {
                                    name: "sem_name",
                                    value: "sem_id"
                                }
                            },
                            on: {
                                select: t.handleSelect
                            }
                        })], 1), e("div", {
                            staticClass: "table-top-wrap"
                        }, [e("div", {
                            staticClass: "point-level-wrap"
                        }, [e("dl", [e("dt", [t._v(t._s(t._userProfile.info.std_name) + "(" + t._s(t._userProfile.info.std_nickname) + ")�셲 Cumulative Social Points")]), e("dd", [t._v(t._s(t._socialAccumulativePoint) + " Points")])]), e("div", {
                            staticClass: "bar"
                        }), e("dl", [e("dt", [t._v("Social Level")]), e("dd", [t._v(t._s(t._userProfile.info.std_level_name))])])]), t._m(1)]), e("div", {
                            staticClass: "table-wrap"
                        }, [e("table", [t._m(2), e("tbody", t._l(t.pointList.list, (function(i, s) {
                            return e("tr", {
                                key: s
                            }, [e("td", [t._v(t._s(i.date_time))]), e("td", [e("strong", [t._v(t._s(i.ctitle))]), t._v(t._s(i.ctext) + " ")]), e("td", [t._v(t._s(i.point))]), e("td", [t._v(t._s(i.now_point))])])
                        })), 0)])]), e("div", {
                            staticClass: "viewmore-btn-wrap"
                        }, [e("button", {
                            staticClass: "btn-line-blue",
                            on: {
                                click: t.viewMore
                            }
                        }, [t._v(" View More "), e("span", [t._v("(" + t._s(t.pointList.list.length) + "/" + t._s(t.pointList.total) + ")")])])])], 1)])])])
                    },
                    a = [function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", {
                            staticClass: "modal-title-wrap"
                        }, [e("div", {
                            staticClass: "title"
                        }, [t._v("Social Point History")])])
                    }, function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", {
                            staticClass: "guide-wrap"
                        }, [e("p", [t._v("Social Level is updated at midnight and reset every term.")])])
                    }, function() {
                        var t = this,
                            e = t._self._c;
                        return e("thead", [e("tr", [e("th", [t._v(" Date "), e("div", {
                            staticClass: "bar"
                        }), t._v(" Time ")]), e("th", [t._v("Social Activity")]), e("th", [t._v("Changes")]), e("th", [t._v("Total Social Point")])])])
                    }],
                    n = i(629),
                    o = {
                        name: "ModalSocialPointHistory",
                        created() {
                            this.getStudentPoint(), this.getSemesterList()
                        },
                        computed: {
                            _socialAccumulativePoint() {
                                return this._userProfile.pointList.filter((t => "social_accumulative" === t.point_type))[0].point.toString()
                            }
                        },
                        data() {
                            return {
                                searchForm: {
                                    pageIndex: 1,
                                    pageSize: 10
                                },
                                semesterList: {
                                    selected: {},
                                    options: []
                                },
                                pointList: {
                                    list: [],
                                    total: 0
                                }
                            }
                        },
                        methods: {
                            ...(0, n.nv)({
                                getStudentPoint: "student/getStudentPoint"
                            }),
                            getSemesterList() {
                                this.$http.get("/v2/cdi/portfolio/semester/list", {}).then((t => {
                                    this.semesterList.options = t, this.semesterList.selected = t[0], this.getPointList()
                                }))
                            },
                            getPointList(t) {
                                "paging" !== t && (this.searchForm.pageIndex = 1, this.searchForm.pageSize = 10), this.$http.get("/v2/cdi/social-learning/point/list", {
                                    semId: this.semesterList.selected.sem_id,
                                    pageIndex: this.searchForm.pageIndex,
                                    pageSize: this.searchForm.pageSize
                                }).then((e => {
                                    "paging" === t ? (this.pointList.list.push(...e.list), this.pointList.total = e.total) : this.pointList = e
                                }))
                            },
                            viewMore() {
                                this.searchForm.pageIndex++, this.getPointList("paging")
                            },
                            handleSelect(t, e) {
                                switch (t) {
                                    case "first":
                                        this.semesterList.selected = e;
                                        break
                                }
                                this.getPointList()
                            }
                        }
                    },
                    r = o,
                    l = i(1001),
                    c = (0, l.Z)(r, s, a, !1, null, null, null),
                    d = c.exports
            },
            7020: function(t, e, i) {
                "use strict";
                i.d(e, {
                    Z: function() {
                        return d
                    }
                });
                var s = function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", {
                            staticClass: "modal modal-settings-changeImg type2"
                        }, [e("div", {
                            staticClass: "modal-inner"
                        }, [e("div", {
                            staticClass: "modal-box-wrap"
                        }, [e("button", {
                            staticClass: "btn-modal-close",
                            on: {
                                click: function(e) {
                                    return t.$emit("close")
                                }
                            }
                        }), t._m(0), e("div", {
                            staticClass: "modal-cont-wrap"
                        }, [e("div", {
                            staticClass: "select-bg-wrap"
                        }, [e("div", {
                            staticClass: "select-wrap"
                        }, [e("div", {
                            staticClass: "select-item",
                            class: {
                                on: t.isDefault
                            },
                            on: {
                                click: function(e) {
                                    return e.preventDefault(), e.stopPropagation(), t.defaultClick.apply(null, arguments)
                                }
                            }
                        }, [t._m(1), e("span", [t._v("Default")])]), e("div", {
                            staticClass: "select-item",
                            class: {
                                on: !t.isDefault
                            },
                            on: {
                                click: function(e) {
                                    return e.preventDefault(), e.stopPropagation(), t.uploadClick.apply(null, arguments)
                                }
                            }
                        }, [t._m(2), e("span", [t._v("Upload Image")])]), e("form", {
                            staticStyle: {
                                display: "none"
                            },
                            attrs: {
                                id: "uploadBgForm",
                                name: "uploadBgForm"
                            }
                        }, [e("input", {
                            ref: "uploadBgFileInput",
                            attrs: {
                                type: "file",
                                accept: ".jpg, .png"
                            },
                            on: {
                                change: function(e) {
                                    return t.onBgFileChange(e)
                                }
                            }
                        })])])]), e("div", {
                            staticClass: "confirm-btn-wrap"
                        }, [e("button", {
                            staticClass: "btn-line-blue btn-save",
                            attrs: {
                                disabled: t.isUploading
                            },
                            on: {
                                click: function(e) {
                                    return e.preventDefault(), e.stopPropagation(), t.saveClick.apply(null, arguments)
                                }
                            }
                        }, [t._v("Save")])])])])])])
                    },
                    a = [function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", {
                            staticClass: "modal-title-wrap"
                        }, [e("div", {
                            staticClass: "title"
                        }, [t._v("Change Profile Picture")])])
                    }, function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", {
                            staticClass: "img-wrap"
                        }, [e("div", {
                            staticClass: "img img-default"
                        })])
                    }, function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", {
                            staticClass: "img-wrap"
                        }, [e("div", {
                            staticClass: "img img-uploadImg"
                        })])
                    }],
                    n = i(629),
                    o = {
                        name: "ModalProfileImage",
                        data() {
                            return {
                                isDefault: !0,
                                isUploading: !1,
                                imageName: null
                            }
                        },
                        created() {},
                        methods: {
                            ...(0, n.nv)({
                                getStudentImageList: "student/getStudentImageList"
                            }),
                            defaultClick() {
                                this.isDefault = !0
                            },
                            uploadClick() {
                                this.isDefault = !1
                            },
                            async onBgFileChange(t) {
                                let e = t.target,
                                    i = t.target.files[0];
                                if (!e || !i || !i.name) return;
                                const s = i.name.split(".").pop();
                                switch (s.toLowerCase()) {
                                    case "png":
                                    case "jpg":
                                        break;
                                    default:
                                        return e.value = null, void alert("jpg, png �대�吏� �뺤떇留� �낅줈�� 媛��ν빀�덈떎.")
                                }
                                if (i.size && i.size >= 5242880) return e.value = null, void alert("5MB �댁긽�� �대�吏��� �낅줈�� �섏떎 �� �놁뒿�덈떎.");
                                this.isUploading = !0;
                                let a = !1;
                                try {
                                    const t = await this.$http.upload("/v2/file/upload?brand=CDI&imageType=SLIT01", {
                                        file: i
                                    });
                                    t && (this.imageName = t, a = !0)
                                } catch (n) {
                                    alert("�대�吏�瑜� �낅줈�� �섏� 紐삵븯���듬땲��."), console.log(n)
                                }
                                if (a) {
                                    console.log(this.imageName);
                                    try {
                                        await this.$http.post("/v2/common/student/image/set", {
                                            brand: "CDI",
                                            imgType: "SLIT01",
                                            fileName: this.imageName
                                        }), this.getStudentImageList(), alert("�ㅼ젙 �섏뿀�듬땲��."), this.$emit("close")
                                    } catch (n) {
                                        alert("�대�吏�瑜� �낅줈�� �섏� 紐삵븯���듬땲��."), console.log(n)
                                    }
                                }
                                this.isUploading = !1, e.value = null
                            },
                            async saveClick() {
                                if (!this.isUploading)
                                    if (this.isDefault) await this.$http.post("/v2/common/student/image/set", {
                                        brand: "CDI",
                                        imgType: "SLIT01",
                                        fileName: ""
                                    }), this.getStudentImageList(), alert("�ㅼ젙 �섏뿀�듬땲��."), this.$emit("close");
                                    else {
                                        const t = this.$refs.uploadBgFileInput;
                                        t.click()
                                    }
                            }
                        }
                    },
                    r = o,
                    l = i(1001),
                    c = (0, l.Z)(r, s, a, !1, null, null, null),
                    d = c.exports
            },
            4860: function(t, e, i) {
                "use strict";
                var s = i(144),
                    a = i(7398),
                    n = function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", {
                            attrs: {
                                id: "app"
                            }
                        }, [e("router-view", {
                            attrs: {
                                name: "Header"
                            }
                        }), e("router-view", {
                            attrs: {
                                name: "Navigation"
                            }
                        }), e("router-view"), e("router-view", {
                            attrs: {
                                name: "Footer"
                            }
                        }), e("div", {
                            attrs: {
                                id: "empty"
                            }
                        })], 1)
                    },
                    o = [],
                    r = {
                        name: "App",
                        data: () => ({
                            resizeLock: !0
                        }),
                        created() {
                            this.$eventBus.$on("open:iLearning", (t => {
                                0 == this.isLogin ? this.$eventBus.$emit("view:denied", "濡쒓렇�� �� �ъ슜 媛��ν빀�덈떎.") : this.$viewUtil.openILearning(t)
                            }))
                        },
                        methods: {
                            initEventListener() {
                                window.addEventListener("resize", (() => {
                                    this.resizeLock && (document.querySelector("meta[name=viewport]").setAttribute("content", "width=device-width, initial-scale=1.0"), this.setViewPort())
                                }), !1)
                            },
                            setViewPort() {
                                this.resizeLock = !1;
                                const t = document.querySelector("body").offsetWidth,
                                    e = t / 1440;
                                document.querySelector("meta[name=viewport]").setAttribute("content", "width=device-width, initial-scale=" + e + ", maximum-scale=" + e + ", minimum-scale=" + e + ", user-scalable=no, viewport-fit=cover"), setTimeout((() => {
                                    this.resizeLock = !0
                                }), 100)
                            }
                        }
                    },
                    l = r,
                    c = i(1001),
                    d = (0, c.Z)(l, n, o, !1, null, null, null),
                    u = d.exports,
                    p = i(8345),
                    h = function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", {
                            attrs: {
                                id: "root"
                            }
                        }, [e("div", {
                            staticClass: "mainContainer",
                            attrs: {
                                id: "container"
                            }
                        }, [e("header", {
                            class: {
                                scrolled: !t.isScrollTop
                            }
                        }, [e("div", {
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
                                src: i(3858),
                                alt: ""
                            }
                        })])]), t._noProfile ? t._e() : e("div", {
                            staticClass: "header-right-wrap"
                        }, [t._showMainHeader ? e("div", {
                            staticClass: "round-btn-wrap"
                        }, [t._showCeREELS ? e("a", {
                            staticClass: "link-item link-cereels",
                            on: {
                                click: function(e) {
                                    return e.preventDefault(), e.stopPropagation(), t.openCeREELs.apply(null, arguments)
                                }
                            }
                        }, [t._m(0), t._m(1)]) : t._e(), t._showOnlineClass ? e("button", {
                            staticClass: "link-item link-onlineClass",
                            on: {
                                click: function(e) {
                                    return e.preventDefault(), e.stopPropagation(), t.openModal("onlineClass")
                                }
                            }
                        }, [t._m(2), t._m(3)]) : t._e()]) : t._e(), e("div", {
                            staticClass: "circle-btn-wrap"
                        }, [e("div", {
                            staticClass: "btn-couponBox",
                            class: t.popup.couponBox ? "on" : ""
                        }, [e("button", {
                            on: {
                                click: function(e) {
                                    return t.openModal("couponBox")
                                }
                            }
                        })]), e("div", {
                            staticClass: "link-getEmoji"
                        }, [e("router-link", {
                            attrs: {
                                to: {
                                    name: "Emoji"
                                }
                            }
                        })], 1), e("div", {
                            directives: [{
                                name: "click-outside",
                                rawName: "v-click-outside",
                                value: () => t.closePopup("support"),
                                expression: "() => closePopup('support')"
                            }],
                            staticClass: "btn-support",
                            class: t.popup.support ? "on" : ""
                        }, [e("button", {
                            on: {
                                click: function(e) {
                                    return t.togglePopup("support")
                                }
                            }
                        }), e("div", {
                            staticClass: "header-support-popup"
                        }, [e("ul", [e("li", [e("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function(e) {
                                    return e.preventDefault(), e.stopPropagation(), t.moveNamePage("Materials")
                                }
                            }
                        }, [t._v("Materials")])]), e("li", [e("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function(e) {
                                    return e.preventDefault(), e.stopPropagation(), t.moveNamePage("Settings")
                                }
                            }
                        }, [t._v("Settings")])]), e("li", [e("a", {
                            on: {
                                click: function(e) {
                                    return e.preventDefault(), e.stopPropagation(), t.openSettingsURL(e, t.settings.notice)
                                }
                            }
                        }, [t._v("Notice")])]), e("li", [e("a", {
                            on: {
                                click: function(e) {
                                    return e.preventDefault(), e.stopPropagation(), t.openSettingsURL(e, t.settings.customerService)
                                }
                            }
                        }, [t._v("Customer Service")])])])])])]), e("div", {
                            directives: [{
                                name: "click-outside",
                                rawName: "v-click-outside",
                                value: t.closeProfile,
                                expression: "closeProfile"
                            }],
                            staticClass: "profile-cont-wrap",
                            class: t.openProfile ? "on" : ""
                        }, [t.staffProfile && t.shouldSelectPupil ? [e("div", {
                            staticClass: "profile-box",
                            on: {
                                click: t.toggleProfile
                            }
                        }, [e("div", {
                            staticClass: "profile-thumbnail-wrap"
                        }, [e("div", {
                            staticClass: "thumbnail",
                            style: `background-image: url('${t.$options.filters.fstfimg(t.staffProfile.member_img)}'), url(${t.defaultImage.profile})`
                        })]), e("div", {
                            staticClass: "text-wrap"
                        }, [e("div", {
                            staticClass: "top-text"
                        }, [t._v(t._s(t.staffProfile.member_name))])])])] : t.guardianProfile && t.shouldSelectChild ? [e("div", {
                            staticClass: "profile-box",
                            on: {
                                click: t.toggleProfile
                            }
                        }, [e("div", {
                            staticClass: "profile-thumbnail-wrap"
                        }, [e("div", {
                            staticClass: "thumbnail",
                            style: `background-image: url('${t.$options.filters.fstdimg(t.guardianProfile.member_img,"SLIT01")}'), url(${t.defaultImage.profile})`
                        })]), e("div", {
                            staticClass: "text-wrap"
                        }, [e("div", {
                            staticClass: "top-text"
                        }, [t._v(t._s(t.guardianProfile.member_name))])])])] : t._userProfile ? [e("div", {
                            staticClass: "profile-box",
                            on: {
                                click: t.toggleProfile
                            }
                        }, [e("div", {
                            staticClass: "profile-thumbnail-wrap"
                        }, [e("div", {
                            staticClass: "thumbnail",
                            style: `background-image: url('${t.$options.filters.fstdimg(t._userProfile.imageList,"SLIT01")}'), url(${t.defaultImage.profile})`
                        })]), e("div", {
                            staticClass: "text-wrap"
                        }, [e("div", {
                            staticClass: "top-text"
                        }, [t._v(t._s(t._userProfile.info ? t._userProfile.info.std_nickname : ""))]), e("div", {
                            staticClass: "btm-text"
                        }, [t._v(t._s(t._userProfile.dreamjob ? t._userProfile.dreamjob.title : ""))])])])] : [e("div", {
                            staticClass: "login-wrap"
                        }, [e("a", {
                            on: {
                                click: t.login
                            }
                        }, [t._v("Login")])])], e("ProfileWrapper")], 2)])], 1), t._noNavigation ? t._e() : e("nav", [e("div", {
                            staticClass: "nav-inner"
                        }, [e("ul", [e("router-link", {
                            attrs: {
                                tag: "li",
                                to: {
                                    name: "iLearning"
                                }
                            }
                        }, [e("a", [t._v("i-Learning")])]), e("li", {
                            on: {
                                click: function(e) {
                                    return t.openElibrary(null)
                                }
                            }
                        }, [e("a", [t._v("e-Library")])]), e("router-link", {
                            attrs: {
                                tag: "li",
                                to: {
                                    name: "cLearning"
                                }
                            }
                        }, [e("a", [t._v("c-Learning")])]), e("router-link", {
                            attrs: {
                                tag: "li",
                                to: {
                                    name: "sLearning"
                                }
                            }
                        }, [e("a", [t._v("Social Learning")])]), e("router-link", {
                            attrs: {
                                tag: "li",
                                to: {
                                    name: "MasterGallery"
                                }
                            }
                        }, [e("a", [t._v("Master�셲 Gallery")])])], 1), e("ul", [e("router-link", {
                            attrs: {
                                tag: "li",
                                to: {
                                    name: "Portfolio"
                                }
                            }
                        }, [e("a", [t._v("Portfolio")])]), e("router-link", {
                            attrs: {
                                tag: "li",
                                to: {
                                    name: "Report"
                                }
                            }
                        }, [e("a", [t._v("Report")])])], 1)])])])]), e("transition", {
                            attrs: {
                                name: "fade"
                            }
                        }, [t.modal.couponBox ? e("ModalCouponBox", {
                            on: {
                                close: function(e) {
                                    return t.closeModal("couponBox")
                                }
                            }
                        }) : t._e()], 1), e("transition", {
                            attrs: {
                                name: "fade"
                            }
                        }, [t.modal.onlineClass ? e("ModalOnlineClass", {
                            on: {
                                close: function(e) {
                                    return t.closeModal("onlineClass")
                                }
                            }
                        }) : t._e()], 1)], 1)
                    },
                    m = [function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", {
                            staticClass: "thumbnail-wrap"
                        }, [e("div", {
                            staticClass: "thumbnail"
                        })])
                    }, function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", {
                            staticClass: "text-wrap"
                        }, [e("div", {
                            staticClass: "top-text"
                        }, [t._v("Storytelling Animation")]), e("div", {
                            staticClass: "btm-text"
                        }, [e("strong", [t._v("CeREELs")]), t._v(" 利먭린湲�")])])
                    }, function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", {
                            staticClass: "thumbnail-wrap"
                        }, [e("div", {
                            staticClass: "thumbnail"
                        })])
                    }, function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", {
                            staticClass: "text-wrap"
                        }, [e("div", {
                            staticClass: "btm-text"
                        }, [e("strong", [t._v("Online Class")]), t._v(" �쒖옉�섍린")])])
                    }],
                    _ = i(6459),
                    g = function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", {
                            staticClass: "modal",
                            class: {
                                "modal-onlineClass": "Agree" != t.component,
                                "modal-onlineClass-agree": "Agree" === t.component
                            }
                        }, [e("div", {
                            staticClass: "modal-inner"
                        }, [e("div", {
                            staticClass: "modal-box-wrap"
                        }, [e("button", {
                            staticClass: "btn-modal-close",
                            on: {
                                click: function(e) {
                                    return t.$emit("close")
                                }
                            }
                        }), t.semester ? ["Agree" === t.component ? e("Agree", {
                            on: {
                                setComponent: t.setComponent
                            }
                        }) : t._e(), "Book" === t.component ? e("Book", {
                            attrs: {
                                semester: t.semester
                            },
                            on: {
                                setComponent: t.setComponent
                            }
                        }) : t._e(), "Vod" === t.component ? e("Vod", {
                            attrs: {
                                semester: t.semester
                            },
                            on: {
                                setComponent: t.setComponent
                            }
                        }) : t._e(), "Achievement" === t.component ? e("Achievement", {
                            attrs: {
                                semester: t.semester
                            },
                            on: {
                                setComponent: t.setComponent
                            }
                        }) : t._e()] : t._e()], 2)])])
                    },
                    f = [],
                    v = function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", [t._m(0), e("div", {
                            staticClass: "modal-cont-wrap"
                        }, [e("div", {
                            staticClass: "desc-wrap"
                        }, [t._m(1), e("div", {
                            staticClass: "btm-btn-wrap",
                            staticStyle: {
                                "text-align": "center"
                            }
                        }, [e("button", {
                            staticClass: "btn-blue",
                            on: {
                                click: function(e) {
                                    return e.preventDefault(), e.stopPropagation(), t.confirm.apply(null, arguments)
                                }
                            }
                        }, [t._v("�뺤씤")])])])])])
                    },
                    P = [function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", {
                            staticClass: "modal-title-wrap"
                        }, [e("div", {
                            staticClass: "title"
                        }, [t._v("�숇�紐⑤떂, �숈깮 �щ윭遺�")])])
                    }, function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", {
                            staticClass: "text"
                        }, [e("p", [t._v("혻")]), e("p", [t._v("肄붾줈��19 媛먯뿼 �덈갑 諛� �뺤궛 諛⑹�瑜� �꾪빐 援먯쑁遺� 吏�移⑥뿉 �곕씪 �섏뾽 李몄뿬媛� �대젮�� �꾩떆湲곌컙 �숈븞 援먯떎 �숈뒿�� �먭꺽 �섏뾽�쇰줈 吏꾪뻾�섍퀬 �덉뒿�덈떎.")]), e("p", [t._v("혻")]), e("p", [t._v("�댁뿉 ���� �댁슜�� �덈궡 諛쏆쑝�⑤떎硫� �꾨옒�� �뺤씤 踰꾪듉�� �대┃�댁＜�몄슂")]), e("p", [t._v("혻")]), e("p", [t._v("�숈깮�� �덉쟾�� 蹂댄샇�섍퀬 �숈뒿 寃곗넀�� 理쒖냼�� �섍린 �꾪빐 媛��뺤뿉�쒕룄 �섏뾽�� 李몄뿬�� �� �덈룄濡� 理쒖꽑�� �ㅽ븯寃좎뒿�덈떎.")]), e("p", [t._v("혻")])])
                    }],
                    w = {
                        name: "oc-agree",
                        data() {
                            return {}
                        },
                        created() {},
                        methods: {
                            async confirm() {
                                try {
                                    await this.$http.post("/v2/oc/agree/set"), this._userProfile.info.is_oc_agree = !0, this.$emit("setComponent", "Book")
                                } catch (t) {
                                    alert("�묒냽�� �먰솢�섏� �딆뒿�덈떎. �좎떆 �� �ㅼ떆 �쒕룄�� 二쇱떆湲� 諛붾엻�덈떎."), console.log("error", t)
                                }
                            }
                        }
                    },
                    b = w,
                    L = (0, c.Z)(b, v, P, !1, null, null, null),
                    C = L.exports,
                    A = function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", [t._m(0), e("div", {
                            staticClass: "modal-cont-wrap"
                        }, [t._m(1), e("div", {
                            staticClass: "table-cont-wrap",
                            staticStyle: {
                                "margin-top": "40px"
                            }
                        }, [e("div", {
                            staticClass: "table-wrap"
                        }, [e("table", [t._m(2), e("tbody", [t.programList && t.programList.length ? t._l(t.programList, (function(i, s) {
                            return e("tr", {
                                key: `p-${s}`
                            }, [e("td", [t._v(t._s(i.name))]), e("td", t._l(i.bookList, (function(i, a) {
                                return e("button", {
                                    key: `p-${s}-book-${a}`,
                                    class: {
                                        "btn-line-blue": "Y" != i.download_yn,
                                        "btn-line-grey": "Y" === i.download_yn
                                    },
                                    on: {
                                        click: function(e) {
                                            return e.preventDefault(), e.stopPropagation(), t.bookClick(e, i)
                                        }
                                    }
                                }, [t._v(" " + t._s("Y" === i.download_yn ? "�ㅼ떆諛쏄린" : "�대젮諛쏄린") + " ")])
                            })), 0)])
                        })) : [t._m(3)]], 2)])]), e("div", {
                            staticClass: "btm-btn-wrap"
                        }, [t._isAllBookDownloaded && t.isDataLoaded ? e("button", {
                            staticClass: "btn-blue",
                            on: {
                                click: function(e) {
                                    return e.preventDefault(), e.stopPropagation(), t.$emit("setComponent", "Vod")
                                }
                            }
                        }, [t._v("Online Class �쒖옉�섍린")]) : t._e()])])])])
                    },
                    E = [function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", {
                            staticClass: "modal-title-wrap"
                        }, [e("div", {
                            staticClass: "title"
                        }, [t._v("Online Class �ㅻ쭏�� �띿뒪�몃턿(STB) �대젮諛쏄린")])])
                    }, function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", {
                            staticClass: "desc-wrap"
                        }, [e("div", {
                            staticClass: "text"
                        }, [e("p", [t._v(" STB瑜� �ㅼ슫濡쒕뱶 �댁빞 Online Class�� 李몄뿬�� �� �덉뒿�덈떎. �꾨줈洹몃옩 蹂꾨줈 媛곴컖 �대젮諛쏆븘二쇱떗�쒖삤."), e("br"), t._v(" 援먯옱 誘멸뎄留� �� 援먯옱 �대젮諛쏄린媛� �섏� �딆쑝硫� �섏뾽 李몄뿬�� �쒗븳�� �덉쓣 �� �덉뒿�덈떎. ")])])])
                    }, function() {
                        var t = this,
                            e = t._self._c;
                        return e("thead", [e("tr", [e("th", [t._v("�꾨줈洹몃옩")]), e("th", [t._v("STB �대젮諛쏄린")])])])
                    }, function() {
                        var t = this,
                            e = t._self._c;
                        return e("tr", {
                            staticClass: "nodata"
                        }, [e("td", {
                            attrs: {
                                colspan: "2"
                            }
                        }, [t._v("No data to display.")])])
                    }],
                    U = {
                        name: "oc-book",
                        props: {
                            semester: {
                                type: Object,
                                require: !0,
                                default: null
                            }
                        },
                        data() {
                            return {
                                bookList: [],
                                programList: [],
                                isDataLoaded: !1
                            }
                        },
                        created() {
                            this.bindBookList()
                        },
                        computed: {
                            _isAllBookDownloaded() {
                                return !this.bookList || !this.bookList.length || this.bookList.length === this.bookList.filter((t => "Y" === t.download_yn)).length
                            }
                        },
                        methods: {
                            async bindBookList() {
                                this.bookList = [], this.programList = [];
                                const t = await this.$http.get("/v2/oc/bookList", {
                                    semId: this.semester.sem_id
                                });
                                if (t && t.length && this.bookList.push.apply(this.bookList, t), this.isDataLoaded = !0, this.bookList && this.bookList.length) {
                                    let t = Array.from(new Set(this.bookList.map((t => t.top_cors_name))));
                                    for (let e of t) {
                                        const t = {
                                            name: e,
                                            bookList: this.bookList.filter((t => t.top_cors_name === e))
                                        };
                                        this.programList.push(t)
                                    }
                                }
                            },
                            async bookClick(t, e) {
                                if ("Y" !== e.stb_yn) return void this.$viewUtil.showAlert("援먯옱瑜� 援щℓ�섏� �딆븘 STB �대젮諛쏄린媛� �섏� �딆뒿�덈떎.\n�먯꽭�� �댁슜�� �숈썝 �먮뒗 怨좉컼�쇳꽣濡� 臾몄쓽 諛붾엻�덈떎.");
                                let i = {
                                    semId: e.sem_id,
                                    corsId: e.cors_id,
                                    levelCode: e.level_code,
                                    fileId: e.file_id
                                };
                                try {
                                    await this.$http.post("/v2/oc/log/book/add", i, !0), e.download_yn = "Y", this._isAllBookDownloaded && (this._userProfile.info.is_oc_book_down = !0)
                                } catch (s) {
                                    return void console.log("error", s)
                                }
                                this.$viewUtil.isApp() ? this.$viewUtil.openBlankIfApp(t, e.downloadFileURL) : this.$viewUtil.downloadFiles([e.downloadFileURL], !0)
                            }
                        }
                    },
                    S = U,
                    I = (0, c.Z)(S, A, E, !1, null, null, null),
                    y = I.exports,
                    k = function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", [t._m(0), e("div", {
                            staticClass: "modal-cont-wrap"
                        }, [e("div", {
                            staticClass: "desc-wrap"
                        }, [t._m(1), t._showAchievement ? e("div", {
                            staticClass: "btn-wrap"
                        }, [e("button", {
                            staticClass: "btn-blue btn-take-exam",
                            on: {
                                click: function(e) {
                                    return e.preventDefault(), e.stopPropagation(), t.achievementClick.apply(null, arguments)
                                }
                            }
                        }, [t._v("�뺢린�됯� �묒떆�섍린")])]) : t._e()]), e("div", {
                            staticClass: "table-cont-wrap oc"
                        }, [e("div", {
                            staticClass: "table-header-wrap"
                        }, [e("div", {
                            staticClass: "checkBox-wrap"
                        }, [e("div", {
                            staticClass: "checkbox-item"
                        }, [e("input", {
                            directives: [{
                                name: "model",
                                rawName: "v-model",
                                value: t.params.isAll,
                                expression: "params.isAll"
                            }],
                            attrs: {
                                type: "checkbox",
                                id: "showAll"
                            },
                            domProps: {
                                checked: Array.isArray(t.params.isAll) ? t._i(t.params.isAll, null) > -1 : t.params.isAll
                            },
                            on: {
                                change: [function(e) {
                                    var i = t.params.isAll,
                                        s = e.target,
                                        a = !!s.checked;
                                    if (Array.isArray(i)) {
                                        var n = null,
                                            o = t._i(i, n);
                                        s.checked ? o < 0 && t.$set(t.params, "isAll", i.concat([n])) : o > -1 && t.$set(t.params, "isAll", i.slice(0, o).concat(i.slice(o + 1)))
                                    } else t.$set(t.params, "isAll", a)
                                }, t.isAllChanged]
                            }
                        }), e("label", {
                            attrs: {
                                for: "showAll"
                            }
                        }, [t._v("�꾩껜 媛뺤쓽 蹂닿린")])])]), e("div", {
                            staticClass: "btn-wrap"
                        }, [e("button", {
                            staticClass: "btn-line-blue btn-guide-paper",
                            on: {
                                click: function(e) {
                                    return e.preventDefault(), e.stopPropagation(), t.guideClick.apply(null, arguments)
                                }
                            }
                        }, [t._v("Live Class User Guide")]), e("button", {
                            staticClass: "btn-line-blue btn-download",
                            on: {
                                click: function(e) {
                                    return e.preventDefault(), e.stopPropagation(), t.$emit("setComponent", "Book")
                                }
                            }
                        }, [t._v("STB �대젮諛쏄린")])])]), e("div", {
                            staticClass: "table-wrap"
                        }, [e("table", [t._m(2), e("tbody", [t.journalList && t.journalList.length ? t._l(t.journalList, (function(i, s) {
                            return e("tr", {
                                key: `j-${s}`,
                                class: {
                                    today: "Y" === i.is_today
                                }
                            }, [e("td", [t._v(t._s(t._f("fdate")(i.cjrn_classdate)))]), e("td", [t._v(t._s(i.cls_name))]), e("td", [t._v(t._s(i.class_time))]), e("td", [t._l(i.items, (function(i, a) {
                                return [i.type_url && i.type_url.length ? [e("p", {
                                    key: `vid-${s}-${a}`,
                                    staticStyle: {
                                        "line-height": "10px"
                                    }
                                }, ["video" === i.type_class ? e("button", {
                                    staticClass: "btn-cam-video",
                                    class: {
                                        "btn-line-grey": "Y" != i.is_today
                                    },
                                    on: {
                                        click: function(e) {
                                            return t.openVideo(e, i)
                                        }
                                    }
                                }, [t._v(" " + t._s(i.type_class_name) + " ")]) : t._e(), "vod" === i.type_class ? e("button", {
                                    staticClass: "btn-cam-play",
                                    class: {
                                        "btn-line-grey": "Y" != i.is_today
                                    },
                                    on: {
                                        click: function(e) {
                                            return t.openVideo(e, i)
                                        }
                                    }
                                }, [t._v(" " + t._s(i.type_class_name) + " ")]) : t._e(), "live" === i.type_class ? e("button", {
                                    staticClass: "btn-line-blue btn-cam-live",
                                    attrs: {
                                        disabled: "Y" != i.is_today
                                    },
                                    on: {
                                        click: function(e) {
                                            return t.openVideo(e, i)
                                        }
                                    }
                                }, [t._v(" " + t._s(i.type_class_name) + " ")]) : t._e()])] : [e("p", {
                                    key: `vid-${s}-${a}`
                                }, [t._v("-")])]]
                            }))], 2)])
                        })) : [t._m(3)]], 2)])])])]), e("transition", {
                            attrs: {
                                name: "fade"
                            }
                        }, [t.modal.vod ? e("ModalVod", {
                            attrs: {
                                video: t.video
                            },
                            on: {
                                close: function(e) {
                                    return t.closeModal("vod")
                                }
                            }
                        }) : t._e()], 1)], 1)
                    },
                    R = [function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", {
                            staticClass: "modal-title-wrap"
                        }, [e("div", {
                            staticClass: "title"
                        }, [t._v("Online Class �댁슜 �덈궡")])])
                    }, function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", {
                            staticClass: "text"
                        }, [e("p", [t._v(" 肄붾줈�� 19 媛먯뿼 �덈갑 諛� �뺤궛 諛⑹�瑜� �꾪븳 援먯쑁遺� 吏�移⑥뿉 �곕씪, �숈썝 �섏뾽 李몄뿬媛� �대젮�� �꾩떆 湲곌컙 �숈븞 Online Class�� �ㅼ떆�⑸땲��."), e("br"), t._v(" �숈깮�� �덉쟾�� 蹂댄샇�섍퀬 �숈뒿 寃곗넀�� 理쒖냼�뷀븯湲� �꾪빐 媛��뺤뿉�쒕룄 �섏뾽�� 李몄뿬�� �� �덈룄濡� 理쒖꽑�� �ㅽ븯寃좎뒿�덈떎. ")])])
                    }, function() {
                        var t = this,
                            e = t._self._c;
                        return e("thead", [e("tr", [e("th", [t._v("Date")]), e("th", [t._v("Class")]), e("th", [t._v("Class Time")]), e("th", [t._v("Online Class 李몄뿬")])])])
                    }, function() {
                        var t = this,
                            e = t._self._c;
                        return e("tr", {
                            staticClass: "nodata"
                        }, [e("td", {
                            attrs: {
                                colspan: "4"
                            }
                        }, [t._v("No data to display.")])])
                    }],
                    N = function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", {
                            staticClass: "modal"
                        }, [e("div", {
                            staticClass: "modal-inner"
                        }, [e("div", {
                            staticClass: "modal-box-wrap"
                        }, [e("button", {
                            staticClass: "btn-modal-close",
                            attrs: {
                                type: "button"
                            },
                            on: {
                                click: function(e) {
                                    return t.$emit("close")
                                }
                            }
                        }), t.video && t.video.title ? e("div", {
                            staticClass: "modal-title-wrap"
                        }, [e("div", {
                            staticClass: "title"
                        }, [t._v(t._s(t.video.title))])]) : t._e(), e("div", {
                            staticClass: "modal-cont-wrap",
                            staticStyle: {
                                "text-align": "center"
                            }
                        }, [t.video ? e("plyr", [t.video.isIframe ? [e("iframe", {
                            attrs: {
                                frameborder: "0",
                                width: "1206",
                                height: "680",
                                src: t.video.src,
                                allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                                allowfullscreen: ""
                            }
                        })] : e("temlate", [e("video", {
                            staticClass: "player-wrap",
                            attrs: {
                                width: "1206",
                                height: "680",
                                poster: t.video.poster,
                                src: t.video.src,
                                controls: ""
                            }
                        })])], 2) : t._e()], 1)])])])
                    },
                    O = [],
                    T = function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", [t._t("default")], 2)
                    },
                    V = [],
                    M = i(3679),
                    D = i.n(M),
                    B = {
                        name: "plyr",
                        props: {
                            options: {
                                type: Object,
                                required: !1,
                                default () {
                                    return {}
                                }
                            },
                            emit: {
                                type: Array,
                                required: !1,
                                default () {
                                    return []
                                }
                            }
                        },
                        data() {
                            return {
                                player: {}
                            }
                        },
                        mounted() {
                            this.player = new(D())(this.$el.firstChild, this.opts), this.$emit("player", this.player), this.emit.forEach((t => {
                                this.player.on(t, this.emitPlayerEvent)
                            }))
                        },
                        beforeDestroy() {
                            try {
                                this.player.destroy()
                            } catch (t) {
                                this.opts.hideYouTubeDOMError && "The YouTube player is not attached to the DOM." === t.message || console.log(t)
                            }
                        },
                        methods: {
                            emitPlayerEvent(t) {
                                this.$emit(t.type, t)
                            }
                        },
                        computed: {
                            opts() {
                                const t = this.options;
                                return Object.prototype.hasOwnProperty.call(this.options, "hideYouTubeDOMError") && (t.hideYouTubeDOMError = !0), t
                            }
                        }
                    },
                    x = B,
                    G = (0, c.Z)(x, T, V, !1, null, null, null),
                    $ = G.exports,
                    Z = {
                        name: "ModalVod",
                        components: {
                            plyr: $
                        },
                        props: {
                            video: {
                                type: Object,
                                require: !0,
                                default: null
                            }
                        },
                        methods: {}
                    },
                    j = Z,
                    H = (0, c.Z)(j, N, O, !1, null, null, null),
                    W = H.exports,
                    F = {
                        name: "oc-vod",
                        components: {
                            ModalVod: W
                        },
                        props: {
                            semester: {
                                type: Object,
                                require: !0,
                                default: null
                            }
                        },
                        data() {
                            return {
                                modal: {
                                    vod: !1
                                },
                                video: {
                                    src: null,
                                    isIframe: !0
                                },
                                params: {
                                    semId: null,
                                    isAll: !1
                                },
                                journalList: []
                            }
                        },
                        created() {
                            this.bindJournalList()
                        },
                        computed: {
                            _showAchievement() {
                                return this.semester && "Y" === this.semester.is_btn_achievement && !this.$viewUtil.isApp()
                            }
                        },
                        methods: {
                            async bindJournalList() {
                                this.journalList = [], this.params.semId = this.semester.sem_id;
                                let t = await this.$http.get("/v2/oc/journal/list", this.params);
                                if (t && t.length) {
                                    let e = Array.from(new Set(t.map((t => t.cjrn_id)))).map((e => {
                                        let i = t.find((t => t.cjrn_id === e));
                                        return {
                                            cjrn_id: i.cjrn_id,
                                            is_today: i.is_today,
                                            cjrn_classdate: i.cjrn_classdate,
                                            cls_name: i.cls_name,
                                            class_time: i.class_time,
                                            type_class: i.type_class,
                                            type_class_name: i.type_class_name,
                                            items: t.filter((t => t.cjrn_id === e)).map((t => ({
                                                ...t,
                                                sem_id: this.semester.sem_id
                                            }))),
                                            type_url: i.type_url
                                        }
                                    }));
                                    this.journalList = e
                                }
                            },
                            isAllChanged() {
                                this.bindJournalList()
                            },
                            guideClick() {
                                this.video = {
                                    src: "https://www.youtube.com/embed/krqchvdsfYU",
                                    isIframe: !0
                                }, this.openModal("vod")
                            },
                            async openVideo(t, e) {
                                const i = {
                                    cjrnId: e.cjrn_id,
                                    ssectId: e.ssect_id,
                                    ssvSeq: e.ssv_seq
                                };
                                try {
                                    await this.$http.post("/v2/oc/log/class/add", i, !0)
                                } catch (s) {
                                    return void this.$viewUtil.showAlert("Online Class �묒냽�� �먰솢�섏� �딆뒿�덈떎. �좎떆 �� �ㅼ떆 �묒냽 諛붾엻�덈떎.")
                                }
                                switch (e.type_class) {
                                    case "video":
                                    case "vod":
                                        this.video = {
                                            src: e.type_url.trim(),
                                            isIframe: !0
                                        }, this.openModal("vod");
                                        break;
                                    case "live":
                                        this.$viewUtil.isApp() ? this.$viewUtil.openBlankIfApp(t, e.type_url.trim()) : window.open(e.type_url, "_blank");
                                        break;
                                    default:
                                        console.log("check type_class!");
                                        break
                                }
                            },
                            achievementClick() {
                                this.semester && "Y" === this.semester.is_achievement ? this.$emit("setComponent", "Achievement") : alert("�묒떆 媛��ν븳 �ㅼ�以꾩씠 �놁뒿�덈떎.")
                            }
                        }
                    },
                    Y = F,
                    J = (0, c.Z)(Y, k, R, !1, null, "2c9cb31e", null),
                    z = J.exports,
                    q = function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", [e("div", {
                            staticClass: "modal-title-wrap"
                        }, [t.achievement ? ["inclass" === t.achievement.as_type ? e("div", {
                            staticClass: "title"
                        }, [t._v("�쒗뿕�� �쒖옉�섍린 �꾪빐�쒕뒗 諛섎뱶�� Live Class'�� 癒쇱� �묒냽�댁빞 �⑸땲��.")]) : e("div", {
                            staticClass: "title"
                        }, [t._v("�쒗뿕�� �쒖옉�섍린 �꾪빐�쒕뒗 諛섎뱶�� �쒗뿕�μ뿉 癒쇱� �낆옣�댁빞 �⑸땲��.")])] : [e("div", {
                            staticClass: "title"
                        }, [t._v("Loading ...")])]], 2), e("div", {
                            staticClass: "modal-cont-wrap"
                        }, [t._m(0), e("div", {
                            staticClass: "table-cont-wrap"
                        }, [e("div", {
                            staticClass: "table-wrap"
                        }, [e("table", [t._m(1), e("tbody", [t.achievement ? e("tr", [e("td", [t._v(t._s(t.achievement.ach_date))]), e("td", [t._v(t._s(t.achievement.brch_name))]), e("td", [t._v(t._s(t.achievement.pbt_name))]), e("td", [t._v(t._s(t.achievement.std_name))])]) : e("tr", {
                            staticClass: "nodata"
                        }, [e("td", {
                            attrs: {
                                colspan: "4"
                            }
                        }, [t._v("No data to display.")])])])])]), t.achievement ? e("div", {
                            staticClass: "btm-btn-wrap"
                        }, ["inclass" === t.achievement.as_type ? [e("button", {
                            staticClass: "btn-blue",
                            on: {
                                click: t.openAchievement
                            }
                        }, [t._v("�쒗뿕 �쒖옉�섍린")])] : t._e(), "makeup" === t.achievement.as_type ? [e("button", {
                            staticClass: "btn-blue",
                            on: {
                                click: t.zoomIn
                            }
                        }, [t._v("�쒗뿕�� �낆옣�섍린")]), e("button", {
                            staticClass: "btn-blue",
                            attrs: {
                                disabled: !t.achievement.makeup_zoom_in
                            },
                            on: {
                                click: t.openAchievement
                            }
                        }, [t._v("�쒗뿕 �쒖옉�섍린")])] : t._e()], 2) : t._e()])])])
                    },
                    X = [function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", {
                            staticClass: "desc-wrap"
                        }, [e("div", {
                            staticClass: "notice"
                        }, [e("p", {
                            staticClass: "title"
                        }, [t._v("�쒗뿕 二쇱쓽�ы빆")]), e("ul", [e("li", [t._v("�ㅽ뵾而� �ъ슜�� �ㅻⅨ �숈깮�먭쾶 諛⑺빐�� �� �덉쑝�� 諛섎뱶�� �ㅻ뱶�뗭씠��"), e("br"), t._v("�댁뼱留덉씠�щ� 李⑹슜�댁빞 �⑸땲��.")]), e("li", [t._v("�좎깮�섏쓽 �덈궡�� �곕씪 �쒗뿕�� 吏꾪뻾�� 二쇱떆湲� 諛붾엻�덈떎.")]), e("li", [t._v("�쒗뿕�� �쒖옉�섎㈃ �숈깮 �ㅼ뒪濡� 臾몄젣瑜� ���댁빞 �⑸땲��."), e("br"), t._v("(遺�紐⑤떂 �먮뒗 移쒓뎄�� �꾩��� �곷컻�� �� 遺��뺥뻾�꾨줈 媛꾩＜)")]), e("li", [t._v(" �묒떆 以� 湲곗닠�곸씤 �ㅻ쪟 諛쒖깮 �� �듯빀怨좉컼吏��먯꽱��(1670-9407)濡� 臾몄쓽�섏떆湲� 諛붾엻�덈떎. "), e("span", [t._v("[�댁쁺�쒓컙]"), e("br"), t._v("��~湲�: �ㅽ썑 1��~10��, 二쇰쭚 諛� 怨듯쑕��: �ㅼ쟾 11�� ~ �ㅽ썑 4�� (*異붿꽍 諛� �ㅻ궇 �뱀씪�� �대Т)")])])])]), e("div", {
                            staticClass: "notice"
                        }, [e("p", {
                            staticClass: "title"
                        }, [t._v("遺��뺥뻾�� 湲덉�")]), e("ul", [e("li", [t._v("��由ъ떆�섏쓣 �섎ː�섍굅�� ��由щ줈 �쒗뿕�� �묒떆�섎뒗 �됱쐞")]), e("li", [t._v("臾몄젣瑜� 硫붾え �먮뒗 珥ъ쁺�섎뒗 �됱쐞")]), e("li", [t._v("臾몄젣�� �쇰� �먮뒗 �꾨�瑜� �좎텧�섍굅�� �몃��� 諛고룷�섎뒗 �됱쐞")]), e("li", [t._v("���멸낵 �듭쓣 二쇨퀬 諛쏅뒗 �됱쐞")]), e("li", [t._v(" 洹� �� 遺��뺥븳 諛⑸쾿�쇰줈 寃곌낵�� �곹뼢�� 誘몄튂�� �됱쐞"), e("br"), e("span", {
                            staticClass: "blue"
                        }, [t._v("�쒗뿕 �꾩쨷 遺��뺥뻾�꾧� �곷컻�� 寃쎌슦 �쒗뿕 寃곌낵媛� 痍⑥냼�� �� �덉뒿�덈떎.")])])])])])
                    }, function() {
                        var t = this,
                            e = t._self._c;
                        return e("thead", [e("tr", [e("th", [t._v("�묒떆��")]), e("th", [t._v("�숈썝")]), e("th", [t._v("�쒗뿕紐�")]), e("th", [t._v("�묒떆�숈깮")])])])
                    }],
                    K = {
                        name: "oc-achievement",
                        props: {
                            semester: {
                                type: Object,
                                require: !0,
                                default: null
                            }
                        },
                        data() {
                            return {
                                achievement: null
                            }
                        },
                        created() {
                            this.bindAchievement()
                        },
                        compuuted: {},
                        methods: {
                            async bindAchievement() {
                                try {
                                    this.achievement = await this.$http.get("/v2/oc/achievement", {
                                        semId: this.semester.sem_id
                                    })
                                } catch (t) {
                                    console.log(t)
                                }
                                this.achievement || (alert("�뺢린�됯�瑜� 遺덈윭�ㅼ� 紐삵븯���듬땲��. �좎떆 �� �ㅼ떆 �쒕룄�� 二쇱떆湲� 諛붾엻�덈떎."), this.$emit("setComponent", "Vod"))
                            },
                            async zoomIn() {
                                try {
                                    await this.$http.post("/v2/oc/achievement/zoomin", {
                                        cjrnAsId: this.achievement.cjrn_as_id
                                    }, !0), this.achievement.makeup_zoom_in = 1, this.$viewUtil.openBlank(this.achievement.as_zoom_url)
                                } catch (t) {
                                    console.log(t)
                                }
                            },
                            openAchievement() {
                                const t = `achievementtest/?std_id=${this._userProfile.info.std_id}&sem_id=${this.semester.sem_id}&pbt_id=${this.achievement.pbt_id}&psec_id=${this.achievement.psec_id}`;
                                this.$viewUtil.openOnlineAchievement(t)
                            }
                        }
                    },
                    Q = K,
                    tt = (0, c.Z)(Q, q, X, !1, null, "a6b16b02", null),
                    et = tt.exports,
                    it = {
                        name: "onlineClass",
                        components: {
                            Agree: C,
                            Book: y,
                            Vod: z,
                            Achievement: et
                        },
                        data() {
                            return {
                                semester: null,
                                component: ""
                            }
                        },
                        created() {
                            this._userProfile && this._userProfile.info && (this.bindSenester(), this._userProfile.info.is_oc_agree ? this._userProfile.info.is_oc_book_down ? this.component = "Vod" : this.component = "Book" : this.component = "Agree")
                        },
                        computed: {},
                        methods: {
                            async bindSenester() {
                                this.semester = await this.$http.get("/v2/oc/semester", {
                                    brand: "CDI"
                                })
                            },
                            setComponent(t) {
                                this.component = t
                            }
                        }
                    },
                    st = it,
                    at = (0, c.Z)(st, g, f, !1, null, "5dec23b1", null),
                    nt = at.exports,
                    ot = function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", {
                            staticClass: "header-profile-popup",
                            class: t.theme
                        }, [t.staffProfile ? e("ProfileStaff", {
                            on: {
                                openSwitchBrand: t.openSwitchBrand
                            }
                        }) : t.guardianProfile ? e("ProfileGuardian", {
                            on: {
                                openSwitchBrand: t.openSwitchBrand
                            }
                        }) : t._userProfile ? e("ProfileStudent", {
                            on: {
                                openSwitchBrand: t.openSwitchBrand
                            }
                        }) : t._e(), t.staffProfile || t.isLogin ? [e("div", {
                            staticClass: "btm-btn-wrap"
                        }, [e("button", {
                            staticClass: "btn-logout",
                            on: {
                                click: t.logout
                            }
                        }, [t._v("Logout")])]), e("transition", {
                            attrs: {
                                name: "fade"
                            }
                        }, [t.modal.switchBrand ? e("ModalSwitchBrand", {
                            attrs: {
                                customBrandList: t.customBrandList
                            },
                            on: {
                                close: function(e) {
                                    return t.closeModal("switchBrand")
                                }
                            }
                        }) : t._e()], 1)] : t._e()], 2)
                    },
                    rt = [],
                    lt = function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", {
                            staticClass: "modal modal-switchBrand"
                        }, [e("div", {
                            staticClass: "modal-inner"
                        }, [e("div", {
                            staticClass: "modal-box-wrap"
                        }, [e("button", {
                            staticClass: "btn-modal-close",
                            attrs: {
                                type: "button"
                            },
                            on: {
                                click: function(e) {
                                    return t.$emit("close")
                                }
                            }
                        }), t._m(0), e("div", {
                            staticClass: "modal-cont-wrap"
                        }, [e("div", {
                            staticClass: "brand-list-wrap"
                        }, [e("Simplebar", {
                            staticClass: "scroll-wrap",
                            attrs: {
                                "data-simplebar-auto-hide": "false"
                            }
                        }, [e("ul", t._l(t.brandList, (function(i, s) {
                            return e("li", {
                                key: s,
                                on: {
                                    click: function(e) {
                                        return t.handleSwitchBrand(i.host)
                                    }
                                }
                            }, [e("div", {
                                staticClass: "brand-name"
                            }, [t._v(t._s(i.brand_name))]), e("div", {
                                staticClass: "brand-img",
                                class: i.css_class
                            })])
                        })), 0)])], 1)])])])])
                    },
                    ct = [function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", {
                            staticClass: "modal-title-wrap"
                        }, [e("div", {
                            staticClass: "title"
                        }, [t._v("Switch Brand")])])
                    }],
                    dt = i(629),
                    ut = {
                        name: "ModalSwitchBrand",
                        props: {
                            customBrandList: {
                                type: [Array, Object],
                                require: !1,
                                default: () => []
                            }
                        },
                        computed: {
                            ...(0, dt.Se)({
                                staffProfile: "staff/profile",
                                staffBrandList: "staff/brandList",
                                shouldSelectPupil: "user/shouldSelectPupil",
                                guardianProfile: "guardian/profile",
                                guardianBrandList: "guardian/brandList",
                                shouldSelectChild: "user/shouldSelectChild",
                                isLogin: "user/isLogin"
                            }),
                            brandList() {
                                return this.customBrandList && this.customBrandList.length ? this.$viewUtil.calcBrandSwitchData("S", "CDI", this.customBrandList) : this.staffProfile ? this.$viewUtil.calcBrandSwitchData("E", "CDI", this.staffBrandList) : this.guardianProfile ? this.$viewUtil.calcBrandSwitchData("P", "CDI", this.guardianBrandList) : this._userProfile ? this.$viewUtil.calcBrandSwitchData("S", "CDI", this._userProfile.brandList) : []
                            }
                        },
                        methods: {
                            handleSwitchBrand(t) {
                                location.href = t
                            }
                        }
                    },
                    pt = ut,
                    ht = (0, c.Z)(pt, lt, ct, !1, null, "190bcb5a", null),
                    mt = ht.exports,
                    _t = function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", [e("div", {
                            staticClass: "top-profile-wrap"
                        }, [e("div", {
                            staticClass: "profile-wrap"
                        }, [e("div", {
                            staticClass: "userLevelThumbanil-wrap"
                        }, [e("div", {
                            staticClass: "thumbnail-wrap"
                        }, [e("div", {
                            staticClass: "thumbnail",
                            style: `background-image: url('${t.$options.filters.fstfimg(t.staffProfile.member_img)}'), url(${t.defaultImage.profile})`
                        })]), t._m(0)]), e("div", {
                            staticClass: "text-wrap"
                        }, [e("div", {
                            staticClass: "top-text"
                        }, [t._v(t._s(t.staffProfile.member_name))])])]), t.showChangeBrand ? e("div", {
                            staticClass: "brand-wrap"
                        }, [e("div", {
                            staticClass: "brand CDI"
                        }), e("button", {
                            staticClass: "btn-switch-brand",
                            attrs: {
                                type: "button"
                            },
                            on: {
                                click: function(e) {
                                    return t.$emit("openSwitchBrand")
                                }
                            }
                        })]) : t._e()]), e("div", {
                            staticClass: "center-detail-wrap"
                        }, [e("Simplebar", {
                            staticClass: "scroll-wrap",
                            attrs: {
                                "data-simplebar-auto-hide": "false"
                            }
                        }, [e("div", {
                            staticClass: "center-scroll-inner"
                        }, [e("div", {
                            staticClass: "select-user-wrap"
                        }, [e("div", {
                            staticClass: "title-wrap"
                        }, [e("div", {
                            staticClass: "title"
                        }, [t._v("�섏쓽 �숈깮")])]), e("div", {
                            staticClass: "user-list-wrap"
                        }, [e("Simplebar", {
                            staticClass: "scroll-wrap",
                            attrs: {
                                "data-simplebar-auto-hide": "false"
                            }
                        }, [e("div", {
                            staticClass: "list-wrap"
                        }, [e("ul", t._l(t.pupilList, (function(i, s) {
                            return e("li", {
                                key: `child-${s}`,
                                class: {
                                    on: t.userInfo && t.userInfo.std_id == i.std_id
                                },
                                on: {
                                    click: function(e) {
                                        return t.pupilClick(i)
                                    }
                                }
                            }, [e("div", {
                                staticClass: "user-info-wrap"
                            }, [e("div", {
                                staticClass: "userLevelThumbanil-wrap",
                                class: t.getIdentityCss(i.std_level_img)
                            }, [e("div", {
                                staticClass: "thumbnail-wrap"
                            }, [e("div", {
                                staticClass: "thumbnail",
                                style: `background-image: url('${t.$options.filters.fstdimg(i.std_photo,"SLIT01")}'), url(${t.defaultImage.profile})`
                            })]), e("div", {
                                staticClass: "level-wrap"
                            }, [e("div", {
                                staticClass: "level-round"
                            }), e("div", {
                                staticClass: "level-star",
                                class: t.getHonor(i.std_sem_level_img).grade
                            }, t._l(t.getHonor(i.std_sem_level_img).count, (function(t) {
                                return e("div", {
                                    key: `star_${t}`,
                                    staticClass: "star"
                                })
                            })), 0)])]), e("div", {
                                staticClass: "text-wrap"
                            }, [e("div", {
                                staticClass: "top-text"
                            }, [t._v(t._s(i.std_nickname))]), e("div", {
                                staticClass: "btm-text"
                            }, [t._v(t._s(i.std_name))])])]), i.brandList && i.brandList.length ? e("div", {
                                staticClass: "brand-wrap"
                            }, [e("div", {
                                staticClass: "brand CDI"
                            }), e("button", {
                                staticClass: "btn-switch-brand",
                                on: {
                                    click: function(e) {
                                        return t.pupilSwitchBrandClick(i)
                                    }
                                }
                            })]) : t._e()])
                        })), 0)])])], 1)]), t._userProfile ? e("div", {
                            staticClass: "profile-wrap"
                        }, [e("div", {
                            staticClass: "userLevelThumbanil-wrap",
                            class: t.getIdentityCss(t._userProfile.info.std_level_img)
                        }, [e("div", {
                            staticClass: "thumbnail-wrap"
                        }, [e("div", {
                            staticClass: "thumbnail",
                            style: `background-image: url('${t.$options.filters.fstdimg(t._userProfile.imageList,"SLIT01")}'), url(${t.defaultImage.profile})`
                        })]), e("div", {
                            staticClass: "level-wrap"
                        }, [e("div", {
                            staticClass: "level-round"
                        }), e("div", {
                            staticClass: "level-star",
                            class: t.getHonor(t._userProfile.info.std_sem_level_img).grade
                        }, t._l(t.getHonor(t._userProfile.info.std_sem_level_img).count, (function(t) {
                            return e("div", {
                                key: `star_${t}`,
                                staticClass: "star"
                            })
                        })), 0)]), e("button", {
                            staticClass: "btn-edit-thumbnail",
                            on: {
                                click: function(e) {
                                    return t.openModal("profileImage")
                                }
                            }
                        })]), e("div", {
                            staticClass: "text-wrap"
                        }, [e("div", {
                            staticClass: "top-text"
                        }, [t._v(t._s(t._userProfile.info.std_nickname))]), e("div", {
                            staticClass: "btm-text"
                        }, [t._v(t._s(t._userProfile.info.std_name))])])]) : t._e(), t._userProfile ? e("ProfileStudentDetail") : e("div", {
                            staticClass: "before-select-info-wrap"
                        }, [e("p", [t._v("�숈깮�� �좏깮�댁＜�몄슂.")])])], 1)])], 1)])
                    },
                    gt = [function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", {
                            staticClass: "level-wrap"
                        }, [e("div", {
                            staticClass: "level-round"
                        }), e("div", {
                            staticClass: "level-star"
                        })])
                    }],
                    ft = function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", {
                            staticClass: "detail-info-wrap"
                        }, [e("div", {
                            staticClass: "dreamJob-wrap"
                        }, [t._m(0), e("div", {
                            staticClass: "dreamJob-detail"
                        }, [e("div", {
                            staticClass: "dreamJob"
                        }, [t._v(t._s(t.dreamjob))])])]), e("div", {
                            staticClass: "selected-trait-wrap"
                        }, t._l(t.traitList, (function(i, s) {
                            return e("div", {
                                key: `trait-${s}`,
                                staticClass: "selected-item"
                            }, [e("div", {
                                staticClass: "trait-item"
                            }, [e("div", {
                                staticClass: "trait-icon"
                            }, [i.stfId > 0 ? [e("div", {
                                staticClass: "icon",
                                class: i.imageUri
                            })] : [e("div", {
                                staticClass: "icon trait-custom",
                                style: `background-image: url('${t.$options.filters.ftrtimg(i.imageUri)}')`
                            })]], 2), e("div", {
                                staticClass: "trait-name"
                            }, [t._v(t._s(i.title))])])])
                        })), 0), e("div", {
                            staticClass: "info-box-wrap"
                        }, [e("div", {
                            staticClass: "info-box"
                        }, [e("div", {
                            staticClass: "personal-logo-link-wrap"
                        }, [e("a", {
                            on: {
                                click: function(e) {
                                    return t.openWindow(e, {
                                        name: "MyPersonalLog"
                                    })
                                }
                            }
                        }, [e("div", {
                            staticClass: "title"
                        }, [t._v("Personal Log")]), e("div", {
                            staticClass: "date"
                        }, [t._v(t._s(t.personalLogLastUpdateDate))])])])]), t.homework ? e("div", {
                            staticClass: "info-box"
                        }, [e("div", {
                            staticClass: "homeWork-wrap"
                        }, [e("div", {
                            staticClass: "title-wrap"
                        }, [e("div", {
                            staticClass: "title"
                        }, [t._v("Homework To Do")]), e("div", {
                            staticClass: "date"
                        }, [t._v(t._s(t.homework.week ? t.homework.week.period : ""))])]), e("div", {
                            staticClass: "homeWork-list"
                        }, [e("ul", t._l(t.homework.list, (function(i, s) {
                            return e("li", {
                                key: s
                            }, [e("div", {
                                staticClass: "name"
                            }, [t._v(t._s(i.todo_type))]), e("div", {
                                staticClass: "count"
                            }, [t._v(t._s(i.hw_count))])])
                        })), 0)])])]) : t._e(), e("div", {
                            staticClass: "info-box"
                        }, [e("div", {
                            staticClass: "point-wrap"
                        }, [e("div", {
                            staticClass: "point-item"
                        }, [e("div", {
                            staticClass: "point-name"
                        }, [t._v("Social Point"), e("a", {
                            on: {
                                click: function(e) {
                                    return t.openModal("socialPointHistory")
                                }
                            }
                        })]), e("div", {
                            staticClass: "point-count"
                        }, [e("b", [t._v(t._s(t.socialPoint.toLocaleString()))]), t._v("SP ")])]), e("div", {
                            staticClass: "bar"
                        }), e("div", {
                            staticClass: "point-item"
                        }, [e("div", {
                            staticClass: "point-name"
                        }, [t._v("Learning Point")]), e("div", {
                            staticClass: "point-count"
                        }, [e("b", [t._v(t._s(t.learningPoint.toLocaleString()))]), t._v("LP ")])])])])]), e("transition", {
                            attrs: {
                                name: "fade"
                            }
                        }, [t.modal.socialPointHistory ? e("ModalSocialPointHistory", {
                            on: {
                                close: function(e) {
                                    return t.closeModal("socialPointHistory")
                                }
                            }
                        }) : t._e()], 1)], 1)
                    },
                    vt = [function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", {
                            staticClass: "dreamJob-title"
                        }, [e("div", {
                            staticClass: "title"
                        }, [t._v("Dream Job")])])
                    }],
                    Pt = i(5391),
                    wt = i(3180),
                    bt = {
                        name: "ProfileStudentDetail",
                        components: {
                            ModalSocialPointHistory: wt.Z
                        },
                        data() {
                            return {
                                modal: {
                                    socialPointHistory: !1
                                },
                                homework: null,
                                isApp: Pt.Z.isApp()
                            }
                        },
                        created() {
                            !this.isLogin || this.shouldSelectChild || this.shouldSelectPupil || this.getHomeworkTodoList()
                        },
                        computed: {
                            ...(0, dt.Se)({
                                staffProfile: "staff/profile",
                                staffBrandList: "staff/brandList",
                                shouldSelectPupil: "user/shouldSelectPupil",
                                guardianProfile: "guardian/profile",
                                guardianBrandList: "guardian/brandList",
                                shouldSelectChild: "user/shouldSelectChild",
                                isLogin: "user/isLogin"
                            }),
                            showChangeBrandStaff() {
                                return this.staffBrandList && this.staffBrandList.length > 0
                            },
                            showChangeBrandGuardian() {
                                return this.guardianBrandList && this.guardianBrandList.length > 0
                            },
                            showChangeBrandStudent() {
                                return this._userProfile && this._userProfile.brandList && this._userProfile.brandList.length > 0
                            },
                            dreamjob() {
                                return this._userProfile && this._userProfile.dreamjob && this._userProfile.dreamjob.title || "-"
                            },
                            traitList() {
                                return this._userProfile && this._userProfile.traitList ? this._userProfile.traitList : []
                            },
                            personalLog() {
                                return this._userProfile && this._userProfile.personalLog ? this._userProfile.personalLog : null
                            },
                            personalLogLastUpdateDate() {
                                if (this._userProfile && this._userProfile.personalLog) {
                                    const t = this.$day(this._userProfile.personalLog.updateDate).format("MMM DD, YYYY");
                                    return t
                                }
                                return "-"
                            },
                            socialPoint() {
                                if (this._userProfile && this._userProfile.pointList && this._userProfile.pointList.length) {
                                    const t = this._userProfile.pointList.find((t => "social" === t.point_type));
                                    return t.point
                                }
                                return 0
                            },
                            learningPoint() {
                                if (this._userProfile && this._userProfile.personalLog && this._userProfile.pointList.length) {
                                    const t = this._userProfile.pointList.find((t => "learning" === t.point_type));
                                    return t.point
                                }
                                return 0
                            }
                        },
                        methods: {
                            ...(0, dt.nv)({
                                logout: "user/logout"
                            }),
                            getHomeworkTodoList() {
                                this.$http.get("/v2/cdi/student/homework", {}).then((t => {
                                    t && (this.homework = {
                                        week: t.week,
                                        list: t.list.filter((t => "New" !== t.todo_type))
                                    })
                                }))
                            }
                        }
                    },
                    Lt = bt,
                    Ct = (0, c.Z)(Lt, ft, vt, !1, null, null, null),
                    At = Ct.exports,
                    Et = {
                        name: "Profile-Staff",
                        components: {
                            ProfileStudentDetail: At
                        },
                        data() {
                            return {}
                        },
                        created() {},
                        computed: {
                            ...(0, dt.Se)({
                                staffProfile: "staff/profile",
                                staffBrandList: "staff/brandList",
                                pupilList: "staff/pupilList",
                                shouldSelectPupil: "user/shouldSelectPupil",
                                userInfo: "user/userInfo"
                            }),
                            showChangeBrand() {
                                return this.staffBrandList && this.staffBrandList.length > 0
                            }
                        },
                        methods: {
                            ...(0, dt.nv)({
                                logout: "user/logout",
                                switchUser: "user/switchUser"
                            }),
                            pupilSwitchBrandClick(t) {
                                this.$emit("openSwitchBrand", t.brandList)
                            },
                            pupilClick(t) {
                                this.userInfo && this.userInfo.std_id == t.std_id || this.switchUser(t.std_id)
                            }
                        }
                    },
                    Ut = Et,
                    St = (0, c.Z)(Ut, _t, gt, !1, null, null, null),
                    It = St.exports,
                    yt = function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", [e("div", {
                            staticClass: "top-profile-wrap"
                        }, [e("div", {
                            staticClass: "profile-wrap"
                        }, [e("div", {
                            staticClass: "userLevelThumbanil-wrap"
                        }, [e("div", {
                            staticClass: "thumbnail-wrap"
                        }, [e("div", {
                            staticClass: "thumbnail",
                            style: `background-image: url('${t.$options.filters.fstdimg(t.guardianProfile.member_img,"SLIT01")}'), url(${t.defaultImage.profile})`
                        })]), t._m(0), e("button", {
                            staticClass: "btn-edit-thumbnail",
                            on: {
                                click: function(e) {
                                    return t.openModal("profileImage")
                                }
                            }
                        })]), e("div", {
                            staticClass: "text-wrap"
                        }, [e("div", {
                            staticClass: "top-text"
                        }, [t._v(t._s(t.guardianProfile.member_name))])])]), t.showChangeBrand ? e("div", {
                            staticClass: "brand-wrap"
                        }, [e("div", {
                            staticClass: "brand CDI"
                        }), e("button", {
                            staticClass: "btn-switch-brand",
                            attrs: {
                                type: "button"
                            },
                            on: {
                                click: function(e) {
                                    return t.$emit("openSwitchBrand")
                                }
                            }
                        })]) : t._e()]), e("div", {
                            staticClass: "center-detail-wrap"
                        }, [e("Simplebar", {
                            staticClass: "scroll-wrap",
                            attrs: {
                                "data-simplebar-auto-hide": "false"
                            }
                        }, [e("div", {
                            staticClass: "center-scroll-inner"
                        }, [e("div", {
                            staticClass: "select-user-wrap"
                        }, [e("div", {
                            staticClass: "title-wrap"
                        }, [e("div", {
                            staticClass: "title"
                        }, [t._v("�섏쓽 �먮�")]), e("button", {
                            staticClass: "btn-line-white btn-add-list",
                            on: {
                                click: function(e) {
                                    return e.preventDefault(), e.stopPropagation(), t.goToRelation.apply(null, arguments)
                                }
                            }
                        }, [t._v("�먮� 異붽�")])]), e("div", {
                            staticClass: "user-list-wrap"
                        }, [e("Simplebar", {
                            staticClass: "scroll-wrap",
                            attrs: {
                                "data-simplebar-auto-hide": "false"
                            }
                        }, [e("div", {
                            staticClass: "list-wrap"
                        }, [e("ul", t._l(t.childList, (function(i, s) {
                            return e("li", {
                                key: `child-${s}`,
                                class: {
                                    on: t.userInfo.std_id == i.std_id
                                },
                                on: {
                                    click: function(e) {
                                        return t.childClick(i)
                                    }
                                }
                            }, [e("div", {
                                staticClass: "user-info-wrap"
                            }, [e("div", {
                                staticClass: "userLevelThumbanil-wrap",
                                class: t.getIdentityCss(i.std_level_img)
                            }, [e("div", {
                                staticClass: "thumbnail-wrap"
                            }, [e("div", {
                                staticClass: "thumbnail",
                                style: `background-image: url('${t.$options.filters.fstdimg(i.std_photo,"SLIT01")}'), url(${t.defaultImage.profile})`
                            })]), e("div", {
                                staticClass: "level-wrap"
                            }, [e("div", {
                                staticClass: "level-round"
                            }), e("div", {
                                staticClass: "level-star",
                                class: t.getHonor(i.std_sem_level_img).grade
                            }, t._l(t.getHonor(i.std_sem_level_img).count, (function(t) {
                                return e("div", {
                                    key: `star_${t}`,
                                    staticClass: "star"
                                })
                            })), 0)])]), e("div", {
                                staticClass: "text-wrap"
                            }, [e("div", {
                                staticClass: "top-text"
                            }, [t._v(t._s(i.std_nickname))]), e("div", {
                                staticClass: "btm-text"
                            }, [t._v(t._s(i.std_name))])])]), i.brandList && i.brandList.length ? e("div", {
                                staticClass: "brand-wrap"
                            }, [e("div", {
                                staticClass: "brand CDI"
                            }), e("button", {
                                staticClass: "btn-switch-brand",
                                on: {
                                    click: function(e) {
                                        return e.target !== e.currentTarget ? null : t.childSwitchBrandClick(i)
                                    }
                                }
                            })]) : t._e()])
                        })), 0)])])], 1)]), t._userProfile ? e("div", {
                            staticClass: "profile-wrap"
                        }, [e("div", {
                            staticClass: "userLevelThumbanil-wrap",
                            class: t.getIdentityCss(t._userProfile.info.std_level_img)
                        }, [e("div", {
                            staticClass: "thumbnail-wrap"
                        }, [e("div", {
                            staticClass: "thumbnail",
                            style: `background-image: url('${t.$options.filters.fstdimg(t._userProfile.imageList,"SLIT01")}'), url(${t.defaultImage.profile})`
                        })]), e("div", {
                            staticClass: "level-wrap"
                        }, [e("div", {
                            staticClass: "level-round"
                        }), e("div", {
                            staticClass: "level-star",
                            class: t.getHonor(t._userProfile.info.std_sem_level_img).grade
                        }, t._l(t.getHonor(t._userProfile.info.std_sem_level_img).count, (function(t) {
                            return e("div", {
                                key: `star_${t}`,
                                staticClass: "star"
                            })
                        })), 0)]), e("button", {
                            staticClass: "btn-edit-thumbnail",
                            on: {
                                click: function(e) {
                                    return t.openModal("profileImage")
                                }
                            }
                        })]), e("div", {
                            staticClass: "text-wrap"
                        }, [e("div", {
                            staticClass: "top-text"
                        }, [t._v(t._s(t._userProfile.info.std_nickname))]), e("div", {
                            staticClass: "btm-text"
                        }, [t._v(t._s(t._userProfile.info.std_name))])])]) : t._e(), t._userProfile ? e("ProfileStudentDetail") : e("div", {
                            staticClass: "before-select-info-wrap"
                        }, [e("p", [t._v("�먮�瑜� �좏깮�댁＜�몄슂.")])])], 1)])], 1), e("transition", {
                            attrs: {
                                name: "fade"
                            }
                        }, [t.modal.profileImage ? e("ModalProfileImage", {
                            on: {
                                close: function(e) {
                                    return t.closeModal("profileImage")
                                }
                            }
                        }) : t._e()], 1)], 1)
                    },
                    kt = [function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", {
                            staticClass: "level-wrap"
                        }, [e("div", {
                            staticClass: "level-round"
                        }), e("div", {
                            staticClass: "level-star"
                        })])
                    }],
                    Rt = i(7020),
                    Nt = {
                        name: "Profile-Guardian",
                        components: {
                            ProfileStudentDetail: At,
                            ModalProfileImage: Rt.Z
                        },
                        data: () => ({
                            modal: {
                                profileImage: !1
                            }
                        }),
                        created() {},
                        computed: {
                            ...(0, dt.Se)({
                                guardianProfile: "guardian/profile",
                                guardianBrandList: "guardian/brandList",
                                childList: "guardian/childList",
                                shouldSelectChild: "user/shouldSelectChild",
                                userInfo: "user/userInfo"
                            }),
                            showChangeBrand() {
                                return this.guardianBrandList && this.guardianBrandList.length > 0
                            }
                        },
                        methods: {
                            ...(0, dt.nv)({
                                logout: "user/logout",
                                switchUser: "user/switchUser"
                            }),
                            goToRelation() {
                                window.location.href = "https://account.chungdahm.com/my/relation_list?redirect=https://learning.chungdahm.com/"
                            },
                            childSwitchBrandClick(t) {
                                this.$emit("openSwitchBrand", t.brandList)
                            },
                            childClick(t) {
                                this.userInfo.std_id != t.std_id && this.switchUser(t.std_id)
                            }
                        }
                    },
                    Ot = Nt,
                    Tt = (0, c.Z)(Ot, yt, kt, !1, null, null, null),
                    Vt = Tt.exports,
                    Mt = function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", [e("div", {
                            staticClass: "top-profile-wrap"
                        }, [e("div", {
                            staticClass: "profile-wrap"
                        }, [e("div", {
                            staticClass: "userLevelThumbanil-wrap",
                            class: t.getIdentityCss(t._userProfile.info.std_level_img)
                        }, [e("div", {
                            staticClass: "thumbnail-wrap"
                        }, [e("div", {
                            staticClass: "thumbnail",
                            style: `background-image: url('${t.$options.filters.fstdimg(t._userProfile.imageList,"SLIT01")}'), url(${t.defaultImage.profile})`
                        })]), e("div", {
                            staticClass: "level-wrap"
                        }, [e("div", {
                            staticClass: "level-round"
                        }), e("div", {
                            staticClass: "level-star",
                            class: t.getHonor(t._userProfile.info.std_sem_level_img).grade
                        }, t._l(t.getHonor(t._userProfile.info.std_sem_level_img).count, (function(t) {
                            return e("div", {
                                key: `star_${t}`,
                                staticClass: "star"
                            })
                        })), 0)]), e("button", {
                            staticClass: "btn-edit-thumbnail",
                            on: {
                                click: function(e) {
                                    return t.openModal("profileImage")
                                }
                            }
                        })]), e("div", {
                            staticClass: "text-wrap"
                        }, [e("div", {
                            staticClass: "top-text"
                        }, [t._v(t._s(t._userProfile.info.std_nickname))]), e("div", {
                            staticClass: "btm-text"
                        }, [t._v(t._s(t._userProfile.info.std_name))])])]), t.showChangeBrand ? e("div", {
                            staticClass: "brand-wrap"
                        }, [e("div", {
                            staticClass: "brand CDI"
                        }), e("button", {
                            staticClass: "btn-switch-brand",
                            attrs: {
                                type: "button"
                            },
                            on: {
                                click: function(e) {
                                    return t.$emit("openSwitchBrand")
                                }
                            }
                        })]) : t._e()]), e("div", {
                            staticClass: "center-detail-wrap"
                        }, [e("Simplebar", {
                            staticClass: "scroll-wrap",
                            attrs: {
                                "data-simplebar-auto-hide": "false"
                            }
                        }, [e("div", {
                            staticClass: "center-scroll-inner"
                        }, [e("ProfileStudentDetail")], 1)])], 1), e("transition", {
                            attrs: {
                                name: "fade"
                            }
                        }, [t.modal.profileImage ? e("ModalProfileImage", {
                            on: {
                                close: function(e) {
                                    return t.closeModal("profileImage")
                                }
                            }
                        }) : t._e()], 1)], 1)
                    },
                    Dt = [],
                    Bt = {
                        name: "ProfileStudent",
                        components: {
                            ProfileStudentDetail: At,
                            ModalProfileImage: Rt.Z
                        },
                        data: () => ({
                            modal: {
                                profileImage: !1
                            }
                        }),
                        created() {},
                        computed: {
                            ...(0, dt.Se)({
                                staffProfile: "staff/profile",
                                staffBrandList: "staff/brandList",
                                shouldSelectPupil: "user/shouldSelectPupil",
                                guardianProfile: "guardian/profile",
                                guardianBrandList: "guardian/brandList",
                                shouldSelectChild: "user/shouldSelectChild",
                                isLogin: "user/isLogin"
                            }),
                            showChangeBrand() {
                                return this._userProfile && this._userProfile.brandList && this._userProfile.brandList.length > 0
                            }
                        },
                        methods: {
                            ...(0, dt.nv)({
                                logout: "user/logout"
                            })
                        }
                    },
                    xt = Bt,
                    Gt = (0, c.Z)(xt, Mt, Dt, !1, null, null, null),
                    $t = Gt.exports,
                    Zt = {
                        name: "ProfileWrapper",
                        components: {
                            ModalSwitchBrand: mt,
                            ProfileStaff: It,
                            ProfileGuardian: Vt,
                            ProfileStudent: $t
                        },
                        data() {
                            return {
                                modal: {
                                    switchBrand: !1
                                },
                                customBrandList: []
                            }
                        },
                        created() {},
                        computed: {
                            ...(0, dt.Se)({
                                staffProfile: "staff/profile",
                                staffBrandList: "staff/brandList",
                                guardianProfile: "guardian/profile",
                                guardianBrandList: "guardian/brandList",
                                isLogin: "user/isLogin"
                            }),
                            theme() {
                                return this.guardianProfile ? `theme-${this.guardianProfile.colorSet}` : this._userProfile ? `theme-${this._userProfile.info.colorSet}` : "theme-1"
                            }
                        },
                        methods: {
                            ...(0, dt.nv)({
                                logout: "user/logout"
                            }),
                            openSwitchBrand(t) {
                                this.customBrandList = t || [], this.openModal("switchBrand")
                            }
                        }
                    },
                    jt = Zt,
                    Ht = (0, c.Z)(jt, ot, rt, !1, null, null, null),
                    Wt = Ht.exports,
                    Ft = {
                        name: "Header",
                        components: {
                            ProfileWrapper: Wt,
                            ModalCouponBox: _.Z,
                            ModalOnlineClass: nt
                        },
                        created() {},
                        data() {
                            return {
                                modal: {
                                    couponBox: !1,
                                    profile: !1,
                                    onlineClass: !1
                                },
                                popup: {
                                    support: !1,
                                    getEmoji: !1
                                },
                                settings: {
                                    notice: "https://www.chungdahm.com/channel/news/list",
                                    customerService: "https://www.chungdahm.com/cs"
                                },
                                openProfile: !1,
                                isScrollTop: !0
                            }
                        },
                        watch: {
                            $route() {
                                this.openProfile = !1
                            }
                        },
                        computed: {
                            ...(0, dt.Se)({
                                staffProfile: "staff/profile",
                                guardianProfile: "guardian/profile",
                                isLogin: "user/isLogin",
                                userInfo: "user/userInfo",
                                shouldSelectChild: "user/shouldSelectChild",
                                shouldSelectPupil: "user/shouldSelectPupil"
                            }),
                            _noNavigation() {
                                return !!this.$route.meta.noNavigation && this.$route.meta.noNavigation
                            },
                            _noProfile() {
                                return !!this.$route.meta.noProfile && this.$route.meta.noProfile
                            },
                            _showMainHeader() {
                                return !!this.$route.meta.showMainHeader
                            },
                            _showCeREELS() {
                                return this._userProfile && 4 === this._userProfile.accessLevel
                            },
                            _showOnlineClass() {
                                return this._userProfile && this._userProfile.info && this._userProfile.info.is_oc && 4 === this._userProfile.accessLevel
                            }
                        },
                        mounted() {
                            document.addEventListener("scroll", this.onScroll)
                        },
                        beforeDestroy() {
                            document.removeEventListener("scroll", this.onScroll)
                        },
                        methods: {
                            ...(0, dt.nv)({
                                login: "user/login"
                            }),
                            onScroll() {
                                window.pageYOffset > 0 ? this.isScrollTop = !1 : this.isScrollTop = !0
                            },
                            toggleProfile() {
                                this.openProfile = !this.openProfile
                            },
                            closeProfile() {
                                if (!this.openProfile) return !1;
                                this.openProfile = !1
                            },
                            togglePopup(t) {
                                this.popup[t] = !this.popup[t]
                            },
                            closePopup(t) {
                                if (!this.popup[t]) return !1;
                                this.popup[t] = !1
                            },
                            moveNamePage(t) {
                                this.closePopup("support"), this.$route.name !== t && this.$router.push({
                                    name: t
                                })
                            },
                            openCeREELs(t) {
                                this.$viewUtil.openBlankIfApp(t, `https://www.cereels.tv?channelCode=CDI&stdId=${this.userInfo.std_id}`)
                            },
                            openSettingsURL(t, e) {
                                this.$viewUtil.openBlankIfApp(t, e)
                            }
                        }
                    },
                    Yt = Ft,
                    Jt = (0, c.Z)(Yt, h, m, !1, null, null, null),
                    zt = Jt.exports,
                    qt = function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", {
                            class: {
                                mainContainer: t._isMain
                            }
                        }, [e("footer", [e("a", {
                            on: {
                                click: function(e) {
                                    return e.preventDefault(), e.stopPropagation(), t.openWindow(e, "https://www.chungdahm.com/html/login/pop_provision.html", "provision")
                                }
                            }
                        }, [t._v("�댁슜�쎄�")]), e("div", {
                            staticClass: "bar"
                        }), e("a", {
                            on: {
                                click: function(e) {
                                    return e.preventDefault(), e.stopPropagation(), t.openWindow(e, "https://www.chungdahm.com/html/login/pop_policy.html", "policy")
                                }
                            }
                        }, [t._v("媛쒖씤�뺣낫泥섎━諛⑹묠")]), e("div", {
                            staticClass: "bar"
                        }), e("p", {
                            staticClass: "copyright"
                        }, [t._v("COPYRIGHT 짤 CREVERSE INC. ALL RIGHTS RESERVED.")])])])
                    },
                    Xt = [],
                    Kt = {
                        name: "Footer",
                        computed: {
                            _isMain() {
                                return "Main" === this.$route.name
                            }
                        },
                        methods: {
                            openWindow(t, e, i) {
                                Pt.Z.isApp() ? (e.startsWith("/") && (e = location.protocol + "//" + location.host + e), Pt.Z.openBlankIfApp(t, e)) : window.open(e, i, "left=10,top=10,width=780,height=723,toolbar=no,menubar=no,status=no,resizable=no,scrollbars=yes")
                            }
                        }
                    },
                    Qt = Kt,
                    te = (0, c.Z)(Qt, qt, Xt, !1, null, null, null),
                    ee = te.exports,
                    ie = i(6686);
                s["default"].use(p.Z);
                const se = [{
                        path: "/",
                        name: "Main",
                        components: {
                            default: () => i.e(12).then(i.bind(i, 5365)),
                            Header: zt,
                            Footer: ee
                        },
                        meta: {
                            level: 0,
                            platform: 1,
                            noNavigation: !0,
                            showMainHeader: !0
                        }
                    }, {
                        path: "*",
                        name: "PageNotFound",
                        component: () => i.e(12).then(i.bind(i, 9061)),
                        meta: {
                            level: 0,
                            platform: 0
                        }
                    }, {
                        path: "/iLearning",
                        name: "iLearning",
                        components: {
                            default: () => Promise.all([i.e(545), i.e(800)]).then(i.bind(i, 5069)),
                            Header: zt,
                            Footer: ee
                        },
                        meta: {
                            level: 2,
                            platform: 2,
                            requireChrome: !0
                        }
                    }, {
                        path: "/iLearning/skillTest",
                        name: "SkillTest",
                        components: {
                            default: () => Promise.all([i.e(545), i.e(769)]).then(i.bind(i, 6957)),
                            Header: zt,
                            Footer: ee
                        },
                        meta: {
                            level: 2,
                            platform: 2,
                            requireChrome: !0
                        }
                    }, {
                        path: "/iLearning/skillTest/report/:id",
                        name: "SkillTestReport",
                        components: {
                            default: () => Promise.all([i.e(545), i.e(558)]).then(i.bind(i, 7645)),
                            Header: zt,
                            Footer: ee
                        },
                        meta: {
                            level: 2,
                            platform: 2,
                            requireChrome: !0
                        }
                    }, {
                        path: "/iLearning/my-vocab",
                        name: "MyVocab",
                        components: {
                            default: () => Promise.all([i.e(545), i.e(936)]).then(i.bind(i, 3320)),
                            Header: zt,
                            Footer: ee
                        },
                        meta: {
                            level: 2,
                            platform: 2,
                            requireChrome: !0
                        }
                    }, {
                        path: "/iLearning/my-vocab-print",
                        name: "MyVocabPrint",
                        components: {
                            default: () => Promise.all([i.e(545), i.e(936)]).then(i.bind(i, 4947))
                        },
                        meta: {
                            level: 2,
                            platform: 2,
                            requireChrome: !0
                        }
                    }, {
                        path: "/materials",
                        name: "Materials",
                        components: {
                            default: () => i.e(242).then(i.bind(i, 8844)),
                            Header: zt,
                            Footer: ee
                        },
                        meta: {
                            level: 4,
                            platform: 1
                        }
                    }, {
                        path: "/report",
                        name: "Report",
                        components: {
                            default: () => i.e(392).then(i.bind(i, 2643)),
                            Header: zt,
                            Footer: ee
                        },
                        meta: {
                            level: 2,
                            platform: 1
                        },
                        children: [{
                            path: "capability",
                            name: "Capability",
                            components: {
                                default: () => i.e(392).then(i.bind(i, 993)),
                                Header: zt,
                                Footer: ee
                            },
                            meta: {
                                level: 2,
                                platform: 1
                            }
                        }, {
                            path: "regular/point",
                            name: "RegularPoint",
                            components: {
                                default: () => i.e(392).then(i.bind(i, 4508)),
                                Header: zt,
                                Footer: ee
                            },
                            meta: {
                                level: 2,
                                platform: 1
                            }
                        }, {
                            path: "regular/cumulative",
                            name: "RegularGrade",
                            components: {
                                default: () => i.e(392).then(i.bind(i, 9803)),
                                Header: zt,
                                Footer: ee
                            },
                            meta: {
                                level: 2,
                                platform: 1
                            }
                        }, {
                            path: "jump/point",
                            name: "JumpPoint",
                            components: {
                                default: () => i.e(392).then(i.bind(i, 3283)),
                                Header: zt,
                                Footer: ee
                            },
                            meta: {
                                level: 2,
                                platform: 1
                            }
                        }, {
                            path: "jump/cumulative",
                            name: "JumpGrade",
                            components: {
                                default: () => i.e(392).then(i.bind(i, 5484)),
                                Header: zt,
                                Footer: ee
                            },
                            meta: {
                                level: 2,
                                platform: 1
                            }
                        }, {
                            path: "special",
                            name: "Special",
                            components: {
                                default: () => i.e(392).then(i.bind(i, 5232)),
                                Header: zt,
                                Footer: ee
                            },
                            meta: {
                                level: 2,
                                platform: 1
                            }
                        }, {
                            path: "achievement/language",
                            name: "AchievementLanguage",
                            components: {
                                default: () => i.e(392).then(i.bind(i, 6275)),
                                Header: zt,
                                Footer: ee
                            },
                            meta: {
                                level: 2,
                                platform: 1
                            }
                        }, {
                            path: "achievement/creativity",
                            name: "AchievementCreativity",
                            components: {
                                default: () => i.e(392).then(i.bind(i, 293)),
                                Header: zt,
                                Footer: ee
                            },
                            meta: {
                                level: 2,
                                platform: 1
                            }
                        }, {
                            path: "placement",
                            name: "Placement",
                            components: {
                                default: () => i.e(392).then(i.bind(i, 5999)),
                                Header: zt,
                                Footer: ee
                            },
                            meta: {
                                level: 2,
                                platform: 1
                            }
                        }, {
                            path: "attendance",
                            name: "Attendance",
                            components: {
                                default: () => i.e(392).then(i.bind(i, 3877)),
                                Header: zt,
                                Footer: ee
                            },
                            meta: {
                                level: 2,
                                platform: 1
                            }
                        }, {
                            path: "history",
                            name: "History",
                            components: {
                                default: () => i.e(392).then(i.bind(i, 260)),
                                Header: zt,
                                Footer: ee
                            },
                            meta: {
                                level: 2,
                                platform: 1
                            }
                        }]
                    }, {
                        path: "/portfolio",
                        name: "Portfolio",
                        components: {
                            default: () => Promise.all([i.e(260), i.e(777), i.e(288)]).then(i.bind(i, 6380)),
                            Header: zt,
                            Footer: ee
                        },
                        meta: {
                            level: 1,
                            platform: 1
                        }
                    }, {
                        path: "/sLearning",
                        name: "sLearning",
                        components: {
                            default: () => Promise.all([i.e(260), i.e(189)]).then(i.bind(i, 906)),
                            Header: zt,
                            Footer: ee
                        },
                        meta: {
                            level: 4,
                            platform: 1
                        }
                    }, {
                        path: "/weekBuffRanking",
                        name: "WeekBuffRanking",
                        components: {
                            default: () => Promise.all([i.e(260), i.e(282)]).then(i.bind(i, 4882)),
                            Header: zt,
                            Footer: ee
                        },
                        meta: {
                            level: 4,
                            platform: 1
                        }
                    }, {
                        path: "/hof",
                        name: "HOF",
                        components: {
                            default: () => i.e(694).then(i.bind(i, 4410)),
                            Header: zt,
                            Footer: ee
                        },
                        meta: {
                            level: 4,
                            platform: 1
                        }
                    }, {
                        path: "/cLearning",
                        name: "cLearning",
                        components: {
                            default: () => i.e(695).then(i.bind(i, 3961)),
                            Header: zt,
                            Footer: ee
                        },
                        meta: {
                            level: 1,
                            platform: 1,
                            requireChrome: !0
                        }
                    }, {
                        path: "/emoji",
                        name: "Emoji",
                        components: {
                            default: () => i.e(675).then(i.bind(i, 967)),
                            Header: zt,
                            Footer: ee
                        },
                        meta: {
                            level: 4,
                            platform: 1
                        }
                    }, {
                        path: "/emoji/:id",
                        name: "EmojiDetail",
                        components: {
                            default: () => i.e(312).then(i.bind(i, 9482)),
                            Header: zt,
                            Footer: ee
                        },
                        meta: {
                            level: 4,
                            platform: 1
                        }
                    }, {
                        path: "/settings",
                        name: "Settings",
                        components: {
                            default: () => i.e(265).then(i.bind(i, 5710)),
                            Header: zt,
                            Footer: ee
                        },
                        meta: {
                            level: 0,
                            platform: 1
                        }
                    }, {
                        path: "/masterGallery",
                        name: "MasterGallery",
                        components: {
                            default: () => Promise.all([i.e(260), i.e(777), i.e(310)]).then(i.bind(i, 5581))
                        },
                        meta: {
                            level: 4,
                            platform: 1,
                            noNavigation: !0,
                            noProfile: !0
                        }
                    }, {
                        path: "/myPersonalLog",
                        name: "MyPersonalLog",
                        components: {
                            default: () => Promise.all([i.e(260), i.e(777), i.e(339), i.e(109)]).then(i.bind(i, 2505))
                        },
                        meta: {
                            level: 2,
                            platform: 1
                        }
                    }, {
                        path: "/personalLog/:stdId",
                        name: "PersonalLog",
                        components: {
                            default: () => Promise.all([i.e(260), i.e(777), i.e(339), i.e(958)]).then(i.bind(i, 4557))
                        },
                        beforeEnter: (t, e, i) => {
                            parseInt(t.params.stdId) === parseInt(ie.Z.getters["student/profile"].info.std_id) ? i({
                                name: "MyPersonalLog"
                            }) : i()
                        },
                        meta: {
                            level: 2,
                            platform: 1
                        }
                    }],
                    ae = new p.Z({
                        mode: "history",
                        scrollBehavior() {
                            return {
                                x: 0,
                                y: 0
                            }
                        },
                        linkActiveClass: "on",
                        base: "/cdi/",
                        routes: se
                    });
                ae.beforeEach(((t, e, i) => {
                    document.body.classList.remove("modal-open"), i()
                }));
                var ne = ae,
                    oe = i(7536),
                    re = i.n(oe),
                    le = i(6123),
                    ce = i.n(le),
                    de = i(7484),
                    ue = i.n(de),
                    pe = (i(9132), i(2994));
                const he = i(6607);
                s["default"].use(re()), s["default"].use(ce()), s["default"].component("Simplebar", pe.Z), ue().extend(he), ue().locale("ko"), s["default"].prototype.$day = ue();
                var me = i(4722),
                    _e = {
                        install(t) {
                            t.mixin({
                                mounted() {},
                                computed: {
                                    _userInfo() {
                                        return this.$store.getters["user/userInfo"]
                                    },
                                    _userProfile() {
                                        return this.$store.getters["student/profile"]
                                    }
                                },
                                data() {
                                    return {
                                        defaultImage: {
                                            profile: i(6827),
                                            prsnlProfile: ""
                                        }
                                    }
                                },
                                methods: {
                                    openModal(t) {
                                        document.body.classList.add("modal-open"), this.modal[t] = !0
                                    },
                                    closeModal(t) {
                                        document.body.classList.remove("modal-open"), this.modal[t] = !1
                                    },
                                    getIdentityCss(t) {
                                        switch (t) {
                                            case "SL0005":
                                            case "Diamond":
                                            case "level5.jpg":
                                                return "level-5";
                                            case "SL0004":
                                            case "Platinum":
                                            case "level4.jpg":
                                                return "level-4";
                                            case "SL0003":
                                            case "Gold":
                                            case "level3.jpg":
                                                return "level-3";
                                            case "SL0002":
                                            case "Silver":
                                            case "level2.jpg":
                                                return "level-2";
                                            case "SL0001":
                                            case "Bronze":
                                            case "level1.jpg":
                                                return "level-1";
                                            default:
                                                return "level-1"
                                        }
                                    },
                                    getHonor(t) {
                                        let e = {
                                            grade: "",
                                            count: 0
                                        };
                                        if (!t) return e;
                                        const i = parseInt(t.slice(3, 6));
                                        switch (parseInt(i / 3)) {
                                            case 0:
                                                e.grade = "star-yellow";
                                                break;
                                            case 1:
                                                e.grade = "star-green";
                                                break;
                                            case 2:
                                                e.grade = "star-blue";
                                                break;
                                            case 3:
                                                e.grade = "star-red";
                                                break;
                                            case 4:
                                                e.grade = "star-black";
                                                break;
                                            case 5:
                                                e.grade = "star-rainbow";
                                                break
                                        }
                                        return 0 === parseInt(i % 3) ? e.count = 3 : e.count = parseInt(i % 3), e
                                    },
                                    getGrade(t, e) {
                                        if ("P" === e) return "";
                                        if (!t || "" === t) return "grade-incomplete";
                                        let i = "";
                                        return 2 === t.length && "+" === t.slice(1, 2) && (i = "-plus"), `grade-${this.getSpeakingOrWriting(e)}-${t.slice(0,1).toLowerCase()}${i}`
                                    },
                                    getSpeakingOrWriting(t) {
                                        switch (t) {
                                            case "W":
                                            case "WS":
                                                return "wr";
                                            case "S":
                                            case "F_S":
                                                return "sp"
                                        }
                                    },
                                    openElibrary(t) {
                                        this.$store.getters["user/isLogin"] ? this.$store.getters["user/shouldSelectChild"] || this.$store.getters["user/shouldSelectPupil"] ? alert("�ъ썝�앹뿉寃뚮쭔 �쒓났�섎뒗 �쒕퉬�ㅼ엯�덈떎.") : this._userProfile ? (this._userProfile.accessLevel < 4 && alert("�꾩옱 �숆린 �ъ썝�앹뿉寃뚮쭔 �쒓났�섎뒗 �쒕퉬�ㅻ줈,\ne-Library �⑦궎吏� 援щℓ�� �좎엯 �숈깮�ㅼ쓽 寃쎌슦 �숆린 �쒖옉 �꾧퉴吏��� 泥�떞�룹뺨�� My Page 硫붾돱�� 泥�떞 e-Library app�쇰줈 �곗꽑 �댁슜 遺��� �쒕┰�덈떎."), Pt.Z.openELibrary(t)) : alert("濡쒓렇�� �� �ъ슜 媛��ν빀�덈떎.") : alert("濡쒓렇�� �� �ъ슜 媛��ν빀�덈떎.")
                                    },
                                    deepSearchByKey(t, e) {
                                        return me.Z.deepSearchByKey(t, e)
                                    },
                                    openWindow(t, e) {
                                        console.log(t, e);
                                        const i = this.$router.resolve(e).route.fullPath;
                                        let s = `${location.protocol}//${location.host}/cdi${i}`;
                                        Pt.Z.isApp() ? this.$router.push(e) : window.open(s, "_blank")
                                    }
                                }
                            })
                        }
                    };
                const ge = "https://learning.chungdahm.com/StaffImage/",
                    fe = "https://learning.chungdahm.com/photo/image",
                    ve = i(6827),
                    Pe = "/photo/image/personallog/trait/";
                var we = {
                    install(t) {
                        t.filter("numberWithComma", (t => 0 === t || t ? t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "")), t.filter("fstfimg", (t => me.Z.isNullOrEmpty(t) ? ve : `${ge}${t}`)), t.filter("fstdimg", ((t, e) => {
                            if (Array.isArray(t)) {
                                const i = t.find((t => t.std_lp_img_type === e));
                                if (!i) return ve;
                                t = i.slpto_name
                            }
                            if (me.Z.isNullOrEmpty(t)) return ve;
                            let i = "";
                            switch (e) {
                                case "SLIT01":
                                    i = "/profile/";
                                    break;
                                case "SLIT02":
                                    i = "/bgImg/";
                                    break;
                                case "SLIT03":
                                    i = "/mypage/";
                                    break;
                                case "SLIT04":
                                    i = "/personallog/profile/";
                                    break;
                                case "SLIT05":
                                    i = "/personallog/bg/";
                                    break;
                                case "SLIT06":
                                    i = "/personallog/trait/";
                                    break;
                                default:
                                    i = "/profile/";
                                    break
                            }
                            return `${fe}${i}${t}`
                        })), t.filter("ftrtimg", (t => `${Pe}${t}`)), t.filter("fdate", (t => t ? ue()(t).format("YYYY-MM-DD") : ""))
                    }
                };
                const be = {
                    groupBy(t, e) {
                        return t.reduce(((t, i) => ((t[i[e]] = t[i[e]] || []).push(i), t)), {})
                    },
                    UUID() {
                        function t() {
                            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
                        }
                        return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
                    },
                    getTelFormat(t) {
                        let e = t.replace(/-/g, "");
                        var i = e;
                        return !i || isNaN(i) ? (e = "", "") : (e.length > 2 && ("02" === e.substring(0, 2) ? e.length > 5 ? i = e.length > 9 ? e.substring(0, 2) + "-" + e.substring(2, 6) + "-" + e.substring(6, 10) : e.substring(0, 2) + "-" + e.substring(2, 5) + "-" + e.substring(5, e.length) : e.length > 2 && (i = e.substring(0, 2) + "-" + e.substring(2, e.length)) : e.length > 6 ? i = e.length > 10 ? e.substring(0, 3) + "-" + e.substring(3, 7) + "-" + e.substring(7, 11) : e.substring(0, 3) + "-" + e.substring(3, 6) + "-" + e.substring(6, e.length) : e.length > 3 && (i = e.substring(0, 3) + "-" + e.substring(3, e.length))), i)
                    }
                };
                var Le = be,
                    Ce = function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", {
                            staticClass: "select-box-wrap"
                        }, [e("div", {
                            staticClass: "inner"
                        }, [t._t("default")], 2)])
                    },
                    Ae = [],
                    Ee = {
                        name: "SelectBoxGroup"
                    },
                    Ue = Ee,
                    Se = (0, c.Z)(Ue, Ce, Ae, !1, null, "11fa07b6", null),
                    Ie = Se.exports,
                    ye = function() {
                        var t = this,
                            e = t._self._c;
                        return 1 === t.options.length ? e("div", {
                            staticClass: "text"
                        }, [t._v(t._s(t.options[0][t.field.name]))]) : e("div", {
                            directives: [{
                                name: "click-outside",
                                rawName: "v-click-outside",
                                value: () => t.showSelectList = !1,
                                expression: "() => (showSelectList = false)"
                            }],
                            staticClass: "select-box",
                            class: {
                                active: t.showSelectList
                            },
                            on: {
                                click: t.handleToggleSelectList
                            }
                        }, [e("div", {
                            staticClass: "selectOption",
                            class: {
                                placeholder: "" !== t.placeholder && 0 === Object.keys(t.selected).length
                            }
                        }, [t._v(" " + t._s("" !== t.placeholder && 0 === Object.keys(t.selected).length ? t.placeholder : t.selected[t.field.name]) + " ")]), 0 !== t.options.length ? e("div", {
                            ref: "optionsBoxRef",
                            staticClass: "optionList",
                            style: {
                                width: 0 === t.isOptionsWidth ? "auto" : `${t.isOptionsWidth}px`
                            }
                        }, [e("Simplebar", {
                            staticClass: "scroll-wrap",
                            attrs: {
                                "data-simplebar-auto-hide": "false"
                            }
                        }, [e("ul", t._l(t.options, (function(i, s) {
                            return e("li", {
                                key: s,
                                ref: "optionsRef",
                                refInFor: !0,
                                class: {
                                    on: t.selected[t.field.value] === i[t.field.value]
                                },
                                on: {
                                    click: function(e) {
                                        return t.onSelect(t.orderName, i)
                                    }
                                }
                            }, [t._v(" " + t._s(i[t.field.name]) + " ")])
                        })), 0)])], 1) : t._e()])
                    },
                    ke = [],
                    Re = {
                        name: "SelectBox",
                        props: {
                            orderName: {
                                type: String,
                                required: !0
                            },
                            options: {
                                type: Array,
                                required: !0
                            },
                            field: {
                                type: Object,
                                default () {
                                    return {}
                                }
                            },
                            selected: {
                                type: Object,
                                default () {
                                    return {}
                                }
                            },
                            placeholder: {
                                type: String,
                                default: ""
                            }
                        },
                        data() {
                            return {
                                showSelectList: !1,
                                isOptionsWidth: 0
                            }
                        },
                        watch: {
                            showSelectList(t) {
                                if (t) {
                                    let t = [];
                                    this.$nextTick((() => {
                                        const e = this.$refs.optionsBoxRef.clientWidth;
                                        this.$refs.optionsRef.map((e => t.push(e.scrollWidth)));
                                        const i = Math.max(...t) + 20;
                                        e < i && (this.isOptionsWidth = Math.max(...t) + 40)
                                    }))
                                } else this.isOptionsWidth = 0
                            }
                        },
                        methods: {
                            handleToggleSelectList() {
                                if (0 === this.options.length) return !1;
                                this.showSelectList = !this.showSelectList
                            },
                            onSelect(t, e) {
                                this.$emit("select", t, e), this.handleToggleSelectList
                            }
                        }
                    },
                    Ne = Re,
                    Oe = (0, c.Z)(Ne, ye, ke, !1, null, "c41c1362", null),
                    Te = Oe.exports,
                    Ve = function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", {
                            staticClass: "tab-nav-wrap tab-link-1"
                        }, [e("div", {
                            class: {
                                "tab-normal": "normal" === t.tabType,
                                "tab-round": "round" === t.tabType
                            }
                        }, ["normal" === t.tabType ? e("div", {
                            staticClass: "tab-border",
                            style: {
                                width: 100 / t.options.length + "%",
                                left: 100 / t.options.length * t._tabIndex + "%"
                            }
                        }) : t._e(), "round" === t.tabType ? e("div", {
                            staticClass: "tab-background",
                            style: {
                                left: 202 * t._tabIndex + 4 + "px"
                            }
                        }) : t._e(), e("ul", t._l(t.options, (function(i, s) {
                            return e("li", {
                                key: s,
                                class: {
                                    on: t.selected[t.field.value] === i[t.field.value]
                                },
                                on: {
                                    click: function(e) {
                                        return t.handleChangeTab(i)
                                    }
                                }
                            }, [t._v(" " + t._s(i[t.field.name]) + " ")])
                        })), 0)])])
                    },
                    Me = [],
                    De = {
                        name: "Tabs",
                        props: {
                            tabType: {
                                type: String,
                                default: "normal"
                            },
                            options: {
                                type: Array,
                                required: !0
                            },
                            field: {
                                type: Object,
                                required: !0,
                                default () {
                                    return {}
                                }
                            },
                            selected: {
                                type: Object,
                                default () {
                                    return {}
                                }
                            }
                        },
                        computed: {
                            _tabIndex() {
                                return this.options.findIndex((t => t[this.field.value] === this.selected[this.field.value]))
                            }
                        },
                        methods: {
                            handleChangeTab(t) {
                                this.$emit("select", t)
                            }
                        }
                    },
                    Be = De,
                    xe = (0, c.Z)(Be, Ve, Me, !1, null, "66429e43", null),
                    Ge = xe.exports,
                    $e = function() {
                        var t = this,
                            e = t._self._c;
                        return t._isShow && !t.colspan ? e("div", {
                            staticClass: "noData-display"
                        }, [t._isShow ? [t._m(0)] : t._e()], 2) : t._isShow && t.colspan ? e("tr", {
                            staticClass: "nodata"
                        }, [e("td", {
                            attrs: {
                                colspan: t._colspan
                            }
                        }, [t._v("No data to display.")])]) : t._e()
                    },
                    Ze = [function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", {
                            staticClass: "inner"
                        }, [e("div", {
                            staticClass: "img"
                        }), e("p", [t._v("No data to display.")])])
                    }],
                    je = {
                        name: "NoDataDisplay",
                        computed: {
                            _isShow() {
                                return Array.isArray(this.contents) ? this.contents.length < 1 : !this.contents || 0 === Object.keys(this.contents).length
                            },
                            _colspan() {
                                return parseInt(this.colspan)
                            }
                        },
                        props: {
                            contents: {
                                type: [Array, Object],
                                require: !0,
                                default: () => []
                            },
                            colspan: {
                                type: [String, Number],
                                require: !1,
                                default: () => null
                            }
                        }
                    },
                    He = je,
                    We = (0, c.Z)(He, $e, Ze, !1, null, "72a4ef98", null),
                    Fe = We.exports,
                    Ye = function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", {
                            style: `height: ${t._height}`
                        }, [e("video", {
                            attrs: {
                                poster: t.thumbnail,
                                autoplay: t.autoplay,
                                src: t.URL,
                                "data-plyr-config": '{"controls" : ["play-large", "play", "progress", "current-time", "mute", "volume", "settings", "fullscreen"] }'
                            }
                        }), t.showPlayIcon ? e("div", [t._t("default")], 2) : t._e(), t.showPlayIcon ? e("div", {
                            staticClass: "center-icon-wrap",
                            on: {
                                click: function(e) {
                                    return t.player.play()
                                }
                            }
                        }, [e("div", {
                            staticClass: "icon icon-play"
                        })]) : t._e()])
                    },
                    Je = [],
                    ze = i(1443),
                    qe = i.n(ze),
                    Xe = {
                        name: "VuePlyr",
                        props: {
                            autoplay: {
                                type: Boolean,
                                require: !1,
                                default: () => !1
                            },
                            thumbnail: {
                                type: String,
                                require: !0,
                                default: () => ""
                            },
                            URL: {
                                type: String,
                                require: !0,
                                default: () => ""
                            },
                            height: {
                                type: [String, Number],
                                require: !1,
                                default: () => ""
                            },
                            options: {
                                type: Object,
                                required: !1,
                                default () {
                                    return {}
                                }
                            },
                            emit: {
                                type: Array,
                                required: !1,
                                default () {
                                    return []
                                }
                            }
                        },
                        data() {
                            return {
                                player: {},
                                showPlayIcon: !0
                            }
                        },
                        mounted() {
                            this.player = new(qe())(this.$el.firstChild, this.opts), this.$emit("player", this.player), this.emit.forEach((t => {
                                this.player.on(t, this.emitPlayerEvent)
                            })), this.player.on("play", (() => {
                                this.showPlayIcon = !1
                            })), this.player.on("pause", (() => {
                                this.showPlayIcon = !0
                            })), this.player.on("ended", (() => {
                                this.showPlayIcon = !1
                            }))
                        },
                        beforeDestroy() {
                            try {
                                this.player.destroy()
                            } catch (t) {
                                this.opts.hideYouTubeDOMError && "The YouTube player is not attached to the DOM." === t.message || console.log(t)
                            }
                        },
                        methods: {
                            emitPlayerEvent(t) {
                                console.log("event", t), this.$emit(t.type, t)
                            }
                        },
                        computed: {
                            _height() {
                                return parseInt(this.height) > 0 ? `${this.height}px` : "inherit"
                            },
                            opts() {
                                const t = this.options;
                                return Object.prototype.hasOwnProperty.call(this.options, "hideYouTubeDOMError") || (t.hideYouTubeDOMError = !0), t
                            }
                        }
                    },
                    Ke = Xe,
                    Qe = (0, c.Z)(Ke, Ye, Je, !1, null, null, null),
                    ti = Qe.exports,
                    ei = function() {
                        var t = this,
                            e = t._self._c;
                        return e("a", {
                            on: {
                                click: function(e) {
                                    return t.openWindow(e, {
                                        name: "PersonalLog",
                                        params: {
                                            stdId: t.member.std_id
                                        }
                                    })
                                }
                            }
                        }, [e("div", {
                            staticClass: "userLevelThumbanil-wrap",
                            class: t.getIdentityCss(t.member.std_level_img)
                        }, [e("div", {
                            staticClass: "thumbnail-wrap"
                        }, [e("div", {
                            staticClass: "thumbnail",
                            style: `background-image: url(${t.imageURL}/profile/${t.member.slpto_name}), url(${t.defaultImage.profile})`
                        })]), e("div", {
                            staticClass: "level-wrap"
                        }, [e("div", {
                            staticClass: "level-round"
                        }), e("div", {
                            staticClass: "level-star",
                            class: t.getHonor(t.member.std_sem_level_img).grade
                        }, t._l(t.getHonor(t.member.std_sem_level_img).count, (function(t) {
                            return e("div", {
                                key: `star_${t}`,
                                staticClass: "star"
                            })
                        })), 0)]), t.tooltip ? e("div", {
                            staticClass: "name-tooltip"
                        }, [e("div", {
                            staticClass: "tooltip-box"
                        }, [t.members ? t._l(t.members, (function(i, s) {
                            return e("a", {
                                key: `members-${s}`,
                                on: {
                                    click: function(e) {
                                        return t.openWindow(e, {
                                            name: "PersonalLog",
                                            params: {
                                                stdId: i.std_id
                                            }
                                        })
                                    }
                                }
                            }, [t._v(t._s(i.std_nickname))])
                        })) : [e("span", [t._v(t._s(t.member.std_nickname))])]], 2)]) : t._e()])])
                    },
                    ii = [],
                    si = {
                        name: "UserThumbnailWrap",
                        props: {
                            member: {
                                type: Object,
                                require: !0,
                                default: null
                            },
                            members: {
                                type: Array,
                                require: !0,
                                default: null
                            },
                            tooltip: {
                                type: Boolean,
                                require: !1,
                                default: !0
                            }
                        },
                        data: () => ({
                            imageURL: "https://learning.chungdahm.com/photo/image",
                            isApp: Pt.Z.isApp()
                        }),
                        created() {},
                        methods: {}
                    },
                    ai = si,
                    ni = (0, c.Z)(ai, ei, ii, !1, null, null, null),
                    oi = ni.exports,
                    ri = {
                        install(t) {
                            t.component("SelectBoxGroup", Ie), t.component("SelectBox", Te), t.component("Tabs", Ge), t.component("VuePlyr", ti), t.component("NoDataDisplay", Fe), t.component("UserThumbnailWrap", oi)
                        }
                    },
                    li = i(8108),
                    ci = i(3631),
                    di = i(5088);
                s["default"].use(_e), s["default"].use(we), s["default"].use(ri), s["default"].use(a.ZP, {
                    config: {
                        id: "G-73ZT6DKN23"
                    }
                }, ne), s["default"].config.productionTip = !1, s["default"].prototype.$http = li.Z, s["default"].prototype.$COMMON = Le, s["default"].prototype.$viewUtil = Pt.Z, s["default"].prototype.$eventBus = new s["default"];
                let ui = !1;
                (async () => {
                    if (navigator.userAgent.match(/SM-T/i) && (ui = !0), navigator.userAgent.match(/SM-P/i) && (ui = !0), !di.isMobile || di.isTablet || ui || Pt.Z.isApp()) {
                        await ie.Z.dispatch("user/readUserCookie");
                        try {
                            const t = ie.Z.getters["user/staff"];
                            t.isLogin && await ie.Z.dispatch("staff/getStaffData");
                            const e = ie.Z.getters["user/isLogin"];
                            if (e) {
                                const t = ie.Z.getters["user/memberType"];
                                "P" === t && await ie.Z.dispatch("guardian/getGuardianData");
                                const e = ie.Z.getters["user/shouldSelectChild"];
                                e || await ie.Z.dispatch("student/getStudentProfile")
                            }
                        } catch (t) {
                            console.log(t)
                        }
                        new s["default"]({
                            router: ne,
                            store: ie.Z,
                            render: t => t(u)
                        }).$mount("#app")
                    } else window.location.href = `${location.protocol}//${location.host}/cdim`
                })();
                const pi = () => {
                    const t = !!navigator.userAgent.match(/InAppBrowser/i);
                    if (t) window.NI.util.setChildWindowStateListener((function(t) {
                        let e = t.event;
                        "closed" == e && (s["default"].prototype.$eventBus.$emit("view:skilltest", "reload"), s["default"].prototype.$eventBus.$emit("view:i-learning", "reload-learning-log"))
                    }));
                    else {
                        const t = "https://books.chungdahm.com",
                            e = "https://www.teacherportals.com";
                        window.addEventListener("message", (i => {
                            i.origin == t || i.origin == e || "close_stb" === i.data ? s["default"].prototype.$eventBus.$emit("view:c-learning", "1") : "i-Learning" == i.data ? (s["default"].prototype.$eventBus.$emit("view:c-learning", "1"), s["default"].prototype.$eventBus.$emit("view:i-learning", "reload-learning-log")) : "ai-Learning" == i.data ? s["default"].prototype.$eventBus.$emit("view:ai-learning", "reload") : "Skill-Test" == i.data && s["default"].prototype.$eventBus.$emit("view:skilltest", "reload")
                        }), !0)
                    }
                };
                pi();
                const hi = t => {
                        const e = ie.Z.getters["user/isStaff"],
                            i = ie.Z.getters["user/isGuardian"],
                            s = ie.Z.getters["user/shouldSelectChild"],
                            a = ie.Z.getters["user/isLogin"];
                        let n = 0;
                        const o = t.meta && t.meta.level ? t.meta.level : 0;
                        if (0 !== o) {
                            if (o > 0) {
                                if (e && !a) throw "�숈깮�� �좏깮�댁＜�몄슂.";
                                if (i && s) throw "�먮�瑜� �좏깮�댁＜�몄슂.";
                                if (!a) throw "濡쒓렇�� �� �ъ슜 媛��ν빀�덈떎."
                            }
                            if (a) {
                                const t = ie.Z.getters["student/profile"];
                                t && (n = t.accessLevel)
                            }
                            if (o && t.meta.level > n) switch (t.meta.level) {
                                case 5:
                                case 4:
                                case 3:
                                case 2:
                                case 1:
                                    throw "�ъ썝�앹뿉寃뚮쭔 �쒓났�섎뒗 �쒕퉬�ㅼ엯�덈떎.";
                                default:
                                    break
                            }
                        }
                    },
                    mi = t => {
                        const e = t.meta && t.meta.platform ? t.meta.platform : 0,
                            i = Pt.Z.isCDApp,
                            s = Pt.Z.isAllimApp;
                        if (0 === e) return;
                        let a = 0;
                        if (i ? a = 2 : s ? a = 0 : di.isTablet || ui ? a = 1 : di.isMobile || (a = 3), a < e) switch (e) {
                            case 3:
                                throw "PC Chrome�먯꽌留� 媛��ν븳 �쒕퉬�� �낅땲��.";
                            case 2:
                                throw "Tablet App �먮뒗 PC Chrome�먯꽌留� �ъ슜 媛��ν빀�덈떎.";
                            case 1:
                                throw "Phone�먯꽌 媛��ν븯吏� �딆� �쒕퉬�� �낅땲��.";
                            default:
                                break
                        }
                    },
                    _i = t => {
                        const e = !(!t.meta || !t.meta.requireChrome) && t.meta.requireChrome;
                        if (!e) return;
                        const i = Pt.Z.isCDApp,
                            s = (0, ci.qY)(),
                            a = null == s || "chrome" == s.name || "opera" == s.name || "crios" == s.name;
                        if (!i && !a) throw "Tablet App �먮뒗 PC Chrome�먯꽌留� �ъ슜 媛��ν빀�덈떎."
                    },
                    gi = (t, e, i, s) => {
                        try {
                            hi(e), mi(e), _i(e), s()
                        } catch (a) {
                            alert(a), i.name && "resolve" !== t || s({
                                path: "/"
                            })
                        }
                    };
                ne.beforeEach(((t, e, i) => {
                    gi("before", t, e, i)
                })), ne.beforeResolve(((t, e, i) => {
                    gi("resolve", t, e, i)
                }))
            },
            6686: function(t, e, i) {
                "use strict";
                i.d(e, {
                    Z: function() {
                        return W
                    }
                });
                var s = i(144),
                    a = i(629),
                    n = i(4722);
                const o = {
                        menuList: [{
                            title: "Capability",
                            route: "Capability",
                            children: null,
                            class: "menu-capability",
                            isActive: !1,
                            isCurrent: !1,
                            isExpanded: !1,
                            parent: null
                        }, {
                            title: "Regular Course",
                            route: "Regular",
                            children: [{
                                title: "Learning Point",
                                route: "RegularPoint",
                                class: "menu-learningPoint",
                                isActive: !1,
                                isCurrent: !1,
                                isExpanded: !1,
                                parent: "Regular"
                            }, {
                                title: "Cumulative Grade",
                                route: "RegularGrade",
                                class: "menu-cumulativeGrade",
                                isActive: !1,
                                isCurrent: !1,
                                isExpanded: !1,
                                parent: "Regular"
                            }],
                            class: null,
                            isActive: !1,
                            isCurrent: !1,
                            isExpanded: !1,
                            parent: null
                        }, {
                            title: "Jump Course",
                            route: "Jump",
                            children: [{
                                title: "Learning Point",
                                route: "JumpPoint",
                                class: "menu-learningPoint",
                                isActive: !1,
                                isCurrent: !1,
                                isExpanded: !1,
                                parent: "Jump"
                            }, {
                                title: "Cumulative Grade",
                                route: "JumpGrade",
                                class: "menu-cumulativeGrade",
                                isActive: !1,
                                isCurrent: !1,
                                isExpanded: !1,
                                parent: "Jump"
                            }],
                            class: null,
                            isActive: !1,
                            isCurrent: !1,
                            isExpanded: !1,
                            parent: null
                        }, {
                            title: "Special Course",
                            route: "Special",
                            children: null,
                            class: "menu-specialCourse",
                            isActive: !1,
                            isCurrent: !1,
                            isExpanded: !1,
                            parent: null
                        }, {
                            title: "Achievement Test",
                            route: "Achievement",
                            children: [{
                                title: "Language",
                                route: "AchievementLanguage",
                                class: "menu-language",
                                isActive: !1,
                                isCurrent: !1,
                                isExpanded: !1,
                                parent: "Achievement"
                            }, {
                                title: "Creativity",
                                route: "AchievementCreativity",
                                class: "menu-creativity",
                                isActive: !1,
                                isCurrent: !1,
                                isExpanded: !1,
                                parent: "Achievement"
                            }],
                            class: null,
                            isActive: !1,
                            isCurrent: !1,
                            isExpanded: !1,
                            parent: null
                        }, {
                            title: "New Term Placement",
                            route: "Placement",
                            children: null,
                            class: "menu-newTermPlacement",
                            isActive: !1,
                            isCurrent: !1,
                            isExpanded: !1,
                            parent: null
                        }, {
                            title: "Attendance",
                            route: "Attendance",
                            children: null,
                            class: "menu-attendance",
                            isActive: !0,
                            isCurrent: !1,
                            isExpanded: !1,
                            parent: null
                        }, {
                            title: "History",
                            route: "History",
                            children: null,
                            class: "menu-history",
                            isActive: !0,
                            isCurrent: !1,
                            isExpanded: !1,
                            parent: null
                        }]
                    },
                    r = {
                        menuList(t) {
                            return t.menuList
                        }
                    },
                    l = {},
                    c = {
                        resetCurrentMenu(t) {
                            const e = n.Z.deepSearchByKey(t.menuList, "isCurrent"),
                                i = e.filter((t => t.isCurrent));
                            for (let s of i) s.isCurrent = !1, s.isExpanded = !1
                        }
                    };
                var d = {
                        namespaced: !0,
                        state: o,
                        getters: r,
                        actions: l,
                        mutations: c
                    },
                    u = i(6245),
                    p = i(6123),
                    h = i.n(p),
                    m = i(5391),
                    _ = i(9669),
                    g = i.n(_);
                const f = "/rest",
                    v = `${f}`,
                    P = g().create({
                        baseURL: v
                    });
                P.interceptors.request.use((function(t) {
                    return W.state.user.staff.isLogin && !t.url.startsWith("http") && (t.headers["Authorization"] = `Bearer ${W.state.user.staff.accessToken}`), t
                }), (function(t) {
                    return console && console.log(t), Promise.reject(t)
                })), P.interceptors.response.use((function(t) {
                    return t.data
                }), (function(t) {
                    return t.response && t.response.message && t.response.message.startsWith("MESSAGE:") && console.log(t.response.message.replace("MESSAGE:", "")), console && console.log("error response", t.response), t.response && 401 == t.response.status && W.dispatch("user/logout"), Promise.reject(t)
                }));
                const w = {
                    get(t, e) {
                        return P.get(t, {
                            params: e
                        })
                    },
                    post(t, e) {
                        return P.post(t, e)
                    },
                    put(t, e) {
                        return P.put(t, e)
                    },
                    delete(t, e) {
                        return P.delete(t, e)
                    }
                };
                var b = w;
                const L = "production",
                    C = "chungdahm.com";
                s["default"].use(h());
                const A = {
                        staff: {
                            isLogin: !1,
                            accessToken: null,
                            userInfo: null
                        },
                        isLogin: !1,
                        accessToken: null,
                        userInfo: null,
                        memberType: null
                    },
                    E = {
                        isLogin(t) {
                            return t.isLogin
                        },
                        isStudent() {
                            return "P" != A.memberType && !A.staff.isLogin
                        },
                        isGuardian() {
                            return "P" === A.memberType
                        },
                        isStaff() {
                            return A.staff.isLogin
                        },
                        staff(t) {
                            return t.staff
                        },
                        accessToken(t) {
                            return t.accessToken
                        },
                        userInfo(t) {
                            return t.userInfo
                        },
                        memberType(t) {
                            return t.memberType
                        },
                        shouldSelectChild(t) {
                            return !!t.isLogin && ("P" === t.memberType && t.userInfo.member_id === t.userInfo.std_id)
                        },
                        shouldSelectPupil(t) {
                            return !!t.staff.isLogin && !t.isLogin
                        }
                    },
                    U = {
                        login() {
                            location.href = `https://account.chungdahm.com/login?redirect=https://learning.chungdahm.com/${window.location.href}`
                        },
                        logout() {
                            s["default"].$cookies.remove("accesstoken", C), s["default"].$cookies.remove("stfaccesstoken", C), s["default"].$cookies.remove("authcommon", "/", C), s["default"].$cookies.remove("content_id", "/", C), s["default"].$cookies.remove("item_id", "/", C), s["default"].$cookies.remove("sem_id", "/", C), s["default"].$cookies.remove("c%5Fusr", "/", C), s["default"].$cookies.remove("c%5Fcdio", "/", C), s["default"].$cookies.remove("c%5FloginBox", "/", C), window.location.href = "https://account.chungdahm.com/html/login/logout.asp?redirect=https://learning.chungdahm.com/", m.Z.isApp() && window.NI.util.logout({}, (function() {
                                console.log("success")
                            }), (function() {
                                console.log("failed")
                            }))
                        },
                        async switchUser({
                            state: t
                        }, e) {
                            if (t.userInfo && "P" === t.userInfo.member_login_type) {
                                let t = "https://account.chungdahm.com/html/login/changeLogin.asp?logtype=S&isCdi=1&stdid=[STDID]&redirect=https://learning.chungdahm.com/".replace("[STDID]", e.toString());
                                window.location.href = t
                            } else if (t.staff.userInfo) {
                                const t = await b.get("/v2/common/autologin/url/get", {
                                    stdId: e
                                });
                                window.location.href = `${t}${window.location.href}`
                            }
                        },
                        async readUserCookie({
                            commit: t
                        }) {
                            let e = s["default"].$cookies.get("stfaccesstoken"),
                                i = s["default"].$cookies.get("accesstoken");
                            "local" === L && (i = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJqd3QgY29uc29sZSIsInN1YiI6IkNvbnNvbGUgTG9naW4iLCJhdWQiOiJsZWFybmluZ3BvcnRhbCIsImlhdCI6MTY2MDczNTYxNSwiZXhwIjoxNjY5Mzc1NjE1LCJuYmYiOjE2NjkzNzU2MTUsIm1lbWJlcl9pZCI6OTU3MzUzLCJtZW1iZXJfbmFtZSI6IkVhZ2xlIiwibWVtYmVyX2xvZ2luX3R5cGUiOiJTIiwic3RkX2lkIjo5NTczNTMsImJyY2hfaWQiOjUwLCJicmNoX2lkX2FyciI6IiIsImJyY2hfdHlwZV9hcnIiOiIiLCJtZW1iZXJfZ3JvdXBfYXJyIjoiMSIsImNvdW50cnlfY29kZSI6IktSX0NETCJ9.JHXHBEAoQB_6ADODswcV5Ugv_QRnRs2s97Tq_wzoLWA", i = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJqd3QgY29uc29sZSIsInN1YiI6IkNvbnNvbGUgTG9naW4iLCJhdWQiOiJsZWFybmluZ3BvcnRhbCIsImlhdCI6MTY2MDc1OTgxMywiZXhwIjoxNjY5Mzk5ODEzLCJuYmYiOjE2NjkzOTk4MTMsIm1lbWJlcl9pZCI6OTc3MzQwLCJtZW1iZXJfbmFtZSI6IkNESTPtlZnsg502NDkiLCJtZW1iZXJfbG9naW5fdHlwZSI6IlMiLCJzdGRfaWQiOjk3NzM0MCwiYnJjaF9pZCI6MTAwLCJicmNoX2lkX2FyciI6IiIsImJyY2hfdHlwZV9hcnIiOiIiLCJtZW1iZXJfZ3JvdXBfYXJyIjoiMSIsImNvdW50cnlfY29kZSI6IktSX0NETCJ9.R66Zb2iVyyKgfs8kRcBDph7v7AktPS9e2ttDdwIIuf0", i = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJqd3QgY29uc29sZSIsInN1YiI6IkNvbnNvbGUgTG9naW4iLCJhdWQiOiJsZWFybmluZ3BvcnRhbCIsImlhdCI6MTY2MTUzMTgwNSwiZXhwIjoxNjcwMTcxODA1LCJuYmYiOjE2NzAxNzE4MDUsIm1lbWJlcl9pZCI6OTc3MzA1LCJtZW1iZXJfbmFtZSI6IkNESTPtlZnsg502MTQiLCJtZW1iZXJfbG9naW5fdHlwZSI6IlMiLCJzdGRfaWQiOjk3NzMwNSwiYnJjaF9pZCI6MTAwLCJicmNoX2lkX2FyciI6IiIsImJyY2hfdHlwZV9hcnIiOiIiLCJtZW1iZXJfZ3JvdXBfYXJyIjoiMSIsImNvdW50cnlfY29kZSI6IktSX0NETCJ9.86aqDUDKDAdMS9-V6XXSbNu3V3nVNJldG57X33HG7ws", i = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJqd3QgY29uc29sZSIsInN1YiI6IkNvbnNvbGUgTG9naW4iLCJhdWQiOiJsZWFybmluZ3BvcnRhbCIsImlhdCI6MTY2MTcwNjIxOCwiZXhwIjoxNjcwMzQ2MjE4LCJuYmYiOjE2NzAzNDYyMTgsIm1lbWJlcl9pZCI6MTQ5MjU4OSwibWVtYmVyX25hbWUiOiJ2bGNfY2RfNTkiLCJtZW1iZXJfbG9naW5fdHlwZSI6IlMiLCJzdGRfaWQiOjE0OTI1ODksImJyY2hfaWQiOjEwMCwiYnJjaF9pZF9hcnIiOiIiLCJicmNoX3R5cGVfYXJyIjoiIiwibWVtYmVyX2dyb3VwX2FyciI6IjEiLCJjb3VudHJ5X2NvZGUiOiJLUl9DREwifQ.nMr1kn6dRhBEKOsea_ExHVq3Bj9XezTe_J5zyZHZ-F4"), i && t("setToken", i), e && t("setStaffToken", e)
                        }
                    },
                    S = {
                        setStaffToken(t, e) {
                            t.staff.isLogin = !0, t.staff.accessToken = e, t.staff.userInfo = (0, u.Z)(e)
                        },
                        setToken(t, e) {
                            t.isLogin = !0, t.accessToken = e, t.userInfo = (0, u.Z)(e), t.userInfo && (t.memberType = t.userInfo.member_login_type)
                        }
                    };
                var I = {
                        namespaced: !0,
                        state: A,
                        getters: E,
                        actions: U,
                        mutations: S
                    },
                    y = i(8108);
                const k = {
                        profile: null
                    },
                    R = {
                        profile(t) {
                            return t.profile
                        }
                    },
                    N = {
                        async getStudentProfile({
                            commit: t
                        }) {
                            let e = await y.Z.get("/v2/cdi/student/profile");
                            t("setStudentProfile", e)
                        },
                        async getStudentPoint({
                            commit: t
                        }) {
                            let e = await y.Z.get("/v2/cdi/student/point");
                            t("setStudentPoint", e)
                        },
                        async getStudentDreamjob({
                            commit: t
                        }) {
                            let e = await y.Z.get("/v2/cdi/student/dreamjob");
                            t("setStudentDreamjob", e)
                        },
                        async getStudentTrait({
                            commit: t
                        }) {
                            let e = await y.Z.get("/v2/cdi/student/trait");
                            t("setStudentTrait", e)
                        },
                        async getStudentImageList({
                            commit: t
                        }) {
                            let e = await y.Z.get("/v2/common/student/image/list");
                            t("setStudentImage", e)
                        },
                        setStudentColorSet({
                            commit: t
                        }, e) {
                            t("setStudentColorSet", e)
                        }
                    },
                    O = {
                        setStudentProfile(t, e) {
                            e && e.brandList && (e.brandList = e.brandList.filter((t => "CDI" != t.brand))), t.profile = e
                        },
                        setStudentPoint(t, e) {
                            t.profile && t.profile.pointList && (t.profile.pointList = e)
                        },
                        setStudentDreamjob(t, e) {
                            t.profile && t.profile.dreamjob && (t.profile.dreamjob = e)
                        },
                        setStudentTrait(t, e) {
                            t.profile && t.profile.pointList && (t.profile.traitList = e)
                        },
                        setStudentImage(t, e) {
                            t.profile && t.profile.imageList && (t.profile.imageList = e)
                        },
                        setStudentColorSet(t, e) {
                            t.profile && t.profile.info && (t.profile.info.colorSet = e)
                        }
                    };
                var T = {
                    namespaced: !0,
                    state: k,
                    getters: R,
                    actions: N,
                    mutations: O
                };
                const V = {
                        profile: null,
                        childList: [],
                        brandList: []
                    },
                    M = {
                        profile(t) {
                            return t.profile
                        },
                        childList(t) {
                            return t.childList
                        },
                        brandList(t) {
                            return t.brandList
                        }
                    },
                    D = {
                        async getGuardianData({
                            commit: t
                        }) {
                            const e = await y.Z.get("/v2/common/profile", {
                                brand: "CDI"
                            });
                            t("setGuardianData", e)
                        }
                    },
                    B = {
                        setGuardianData(t, e) {
                            t.profile = e.info, e.childList && e.childList.length && e.childList.forEach((t => {
                                t.brandList && t.brandList.length && (t.brandList = t.brandList.filter((t => "CDI" != t.brand)))
                            })), t.childList = e.childList, e.brandList && e.brandList.length && (t.brandList = e.brandList.filter((t => "CDI" != t.brand)))
                        }
                    };
                var x = {
                    namespaced: !0,
                    state: V,
                    getters: M,
                    actions: D,
                    mutations: B
                };
                const G = {
                        profile: null,
                        pupilList: [],
                        brandList: []
                    },
                    $ = {
                        profile(t) {
                            return t.profile
                        },
                        pupilList(t) {
                            return t.pupilList
                        },
                        brandList(t) {
                            return t.brandList
                        }
                    },
                    Z = {
                        async getStaffData({
                            commit: t
                        }) {
                            const e = await b.get("/v2/common/profile", {
                                brand: "CDI"
                            });
                            t("setStaffData", e)
                        }
                    },
                    j = {
                        setStaffData(t, e) {
                            t.profile = e.info, t.pupilList = e.pupilList, e.brandList && e.brandList.length && (t.brandList = e.brandList.filter((t => "CDI" != t.brand)))
                        }
                    };
                var H = {
                    namespaced: !0,
                    state: G,
                    getters: $,
                    actions: Z,
                    mutations: j
                };
                s["default"].use(a.ZP);
                var W = new a.ZP.Store({
                    state: {},
                    getters: {},
                    mutations: {},
                    actions: {},
                    modules: {
                        reportMenu: d,
                        user: I,
                        student: T,
                        guardian: x,
                        staff: H
                    }
                })
            },
            8108: function(t, e, i) {
                "use strict";
                var s = i(9669),
                    a = i.n(s),
                    n = i(6686),
                    o = i(129),
                    r = i.n(o);
                const l = "/rest",
                    c = `${l}`,
                    d = a().create({
                        baseURL: c
                    });
                d.interceptors.request.use((function(t) {
                    return n.Z.state.user.isLogin && !t.url.startsWith("http") && (t.headers["Authorization"] = `Bearer ${n.Z.state.user.accessToken}`), t
                }), (function(t) {
                    return console && console.log(t), Promise.reject(t)
                })), d.interceptors.response.use((function(t) {
                    return t.data
                }), (function(t) {
                    return t.response && t.response.message && t.response.message.startsWith("MESSAGE:") && console.log(t.response.message.replace("MESSAGE:", "")), console && console.log("error response", t.response), t.response && 401 == t.response.status && n.Z.dispatch("user/logout"), Promise.reject(t)
                }));
                const u = {
                    get(t, e) {
                        return d.get(t, {
                            params: e
                        })
                    },
                    post(t, e, i) {
                        return i ? d.post(t, r().stringify(e)) : d.post(t, e)
                    },
                    upload(t, e) {
                        const i = new FormData;
                        return i.append("file", e.file), d.post(t, i)
                    },
                    put(t, e) {
                        return d.put(t, e)
                    },
                    delete(t, e) {
                        return d.delete(t, e)
                    }
                };
                e["Z"] = u
            },
            4722: function(t, e) {
                "use strict";
                const i = {
                    isNullOrEmpty(t) {
                        return !t || (0 === t.length || !t.trim())
                    },
                    deepSearchByKey(t, e, i = []) {
                        if (null != t)
                            if (Array.isArray(t))
                                for (let s of t) this.deepSearchByKey(s, e, i);
                            else if ("object" == typeof t)
                            for (let s of Object.keys(t)) s == e ? i.push(t) : this.deepSearchByKey(t[s], e, i);
                        return i
                    }
                };
                e["Z"] = i
            },
            5391: function(t, e, i) {
                "use strict";
                var s = i(144),
                    a = i(8108),
                    n = i(9669),
                    o = i.n(n),
                    r = i(3631);
                const l = "aprillearning.chungdahm.com" === window.location.hostname,
                    c = "https://il.chungdahm.com",
                    d = l ? {
                        NODE_ENV: "production",
                        VUE_APP_AZURE_CDIL_ROOT: "https://cdncdil.chungdahm.com/cdi3",
                        VUE_APP_AZURE_STORAGE_CONTAINER: "learning",
                        VUE_APP_AZURE_STORAGE_URL: "https://ktcdil.blob.core.windows.net",
                        VUE_APP_CEREELS: "https://www.cereels.tv",
                        VUE_APP_COOKIE_DOMAIN: "chungdahm.com",
                        VUE_APP_NAME: "production",
                        VUE_APP_URL_CHANGE_LOGIN: "https://account.chungdahm.com/html/login/changeLogin.asp?logtype=S&isCdi=1&stdid=[STDID]&redirect=https://learning.chungdahm.com/",
                        VUE_APP_URL_CS: "https://www.chungdahm.com/cs",
                        VUE_APP_URL_C_LEARNING: "https://globalteachers.chungdahm.com/clearning/ContentStudent",
                        VUE_APP_URL_C_LEARNING_DOMAIN: "https://books.chungdahm.com",
                        VUE_APP_URL_ICS: "https://cdncdil.chungdahm.com/cdi3",
                        VUE_APP_URL_IMAGE: "https://learning.chungdahm.com/photo/image",
                        VUE_APP_URL_LEARNING: "https://il.chungdahm.com",
                        VUE_APP_URL_LOGOUT: "https://account.chungdahm.com/html/login/logout.asp?redirect=https://learning.chungdahm.com/",
                        VUE_APP_URL_NEWS: "https://www.chungdahm.com/channel/news/list",
                        VUE_APP_URL_NEW_CLASS_BOOK: "https://www.chungdahm.com/learn21-sso-login?url=https://www.learn21.co.kr/mypage/shopping/fee",
                        VUE_APP_URL_ONLINE_ACHIEVEMENT: "https://exam.chungdahm.com",
                        VUE_APP_URL_ONTEST: "https://ontest.chungdahm.com",
                        VUE_APP_URL_RELATION_LIST: "https://account.chungdahm.com/my/relation_list?redirect=https://learning.chungdahm.com/",
                        VUE_APP_URL_SIGN_IN: "https://account.chungdahm.com/login?redirect=https://learning.chungdahm.com/",
                        VUE_APP_URL_SKILL_TEST: "https://il.chungdahm.com/skilltest/",
                        VUE_APP_URL_SOCIAL_LEARNING: "https://krcdn.azureedge.net",
                        VUE_APP_URL_SPINDEL: "https://cdi.spindlebooks.com/auth/cdi?token=",
                        VUE_APP_URL_TEACHERS_PORTAL: "https://www.teacherportals.com",
                        VUE_APP_URL_TEACHER_IMG: "https://learning.chungdahm.com/StaffImage/",
                        VUE_APP_WAS: "/rest",
                        BASE_URL: "/cdi/"
                    }.VUE_APP_URL_ILEARNINGTEST_APRIL : {
                        NODE_ENV: "production",
                        VUE_APP_AZURE_CDIL_ROOT: "https://cdncdil.chungdahm.com/cdi3",
                        VUE_APP_AZURE_STORAGE_CONTAINER: "learning",
                        VUE_APP_AZURE_STORAGE_URL: "https://ktcdil.blob.core.windows.net",
                        VUE_APP_CEREELS: "https://www.cereels.tv",
                        VUE_APP_COOKIE_DOMAIN: "chungdahm.com",
                        VUE_APP_NAME: "production",
                        VUE_APP_URL_CHANGE_LOGIN: "https://account.chungdahm.com/html/login/changeLogin.asp?logtype=S&isCdi=1&stdid=[STDID]&redirect=https://learning.chungdahm.com/",
                        VUE_APP_URL_CS: "https://www.chungdahm.com/cs",
                        VUE_APP_URL_C_LEARNING: "https://globalteachers.chungdahm.com/clearning/ContentStudent",
                        VUE_APP_URL_C_LEARNING_DOMAIN: "https://books.chungdahm.com",
                        VUE_APP_URL_ICS: "https://cdncdil.chungdahm.com/cdi3",
                        VUE_APP_URL_IMAGE: "https://learning.chungdahm.com/photo/image",
                        VUE_APP_URL_LEARNING: "https://il.chungdahm.com",
                        VUE_APP_URL_LOGOUT: "https://account.chungdahm.com/html/login/logout.asp?redirect=https://learning.chungdahm.com/",
                        VUE_APP_URL_NEWS: "https://www.chungdahm.com/channel/news/list",
                        VUE_APP_URL_NEW_CLASS_BOOK: "https://www.chungdahm.com/learn21-sso-login?url=https://www.learn21.co.kr/mypage/shopping/fee",
                        VUE_APP_URL_ONLINE_ACHIEVEMENT: "https://exam.chungdahm.com",
                        VUE_APP_URL_ONTEST: "https://ontest.chungdahm.com",
                        VUE_APP_URL_RELATION_LIST: "https://account.chungdahm.com/my/relation_list?redirect=https://learning.chungdahm.com/",
                        VUE_APP_URL_SIGN_IN: "https://account.chungdahm.com/login?redirect=https://learning.chungdahm.com/",
                        VUE_APP_URL_SKILL_TEST: "https://il.chungdahm.com/skilltest/",
                        VUE_APP_URL_SOCIAL_LEARNING: "https://krcdn.azureedge.net",
                        VUE_APP_URL_SPINDEL: "https://cdi.spindlebooks.com/auth/cdi?token=",
                        VUE_APP_URL_TEACHERS_PORTAL: "https://www.teacherportals.com",
                        VUE_APP_URL_TEACHER_IMG: "https://learning.chungdahm.com/StaffImage/",
                        VUE_APP_WAS: "/rest",
                        BASE_URL: "/cdi/"
                    }.VUE_APP_URL_ILEARNING_APRIL,
                    u = l ? {
                        NODE_ENV: "production",
                        VUE_APP_AZURE_CDIL_ROOT: "https://cdncdil.chungdahm.com/cdi3",
                        VUE_APP_AZURE_STORAGE_CONTAINER: "learning",
                        VUE_APP_AZURE_STORAGE_URL: "https://ktcdil.blob.core.windows.net",
                        VUE_APP_CEREELS: "https://www.cereels.tv",
                        VUE_APP_COOKIE_DOMAIN: "chungdahm.com",
                        VUE_APP_NAME: "production",
                        VUE_APP_URL_CHANGE_LOGIN: "https://account.chungdahm.com/html/login/changeLogin.asp?logtype=S&isCdi=1&stdid=[STDID]&redirect=https://learning.chungdahm.com/",
                        VUE_APP_URL_CS: "https://www.chungdahm.com/cs",
                        VUE_APP_URL_C_LEARNING: "https://globalteachers.chungdahm.com/clearning/ContentStudent",
                        VUE_APP_URL_C_LEARNING_DOMAIN: "https://books.chungdahm.com",
                        VUE_APP_URL_ICS: "https://cdncdil.chungdahm.com/cdi3",
                        VUE_APP_URL_IMAGE: "https://learning.chungdahm.com/photo/image",
                        VUE_APP_URL_LEARNING: "https://il.chungdahm.com",
                        VUE_APP_URL_LOGOUT: "https://account.chungdahm.com/html/login/logout.asp?redirect=https://learning.chungdahm.com/",
                        VUE_APP_URL_NEWS: "https://www.chungdahm.com/channel/news/list",
                        VUE_APP_URL_NEW_CLASS_BOOK: "https://www.chungdahm.com/learn21-sso-login?url=https://www.learn21.co.kr/mypage/shopping/fee",
                        VUE_APP_URL_ONLINE_ACHIEVEMENT: "https://exam.chungdahm.com",
                        VUE_APP_URL_ONTEST: "https://ontest.chungdahm.com",
                        VUE_APP_URL_RELATION_LIST: "https://account.chungdahm.com/my/relation_list?redirect=https://learning.chungdahm.com/",
                        VUE_APP_URL_SIGN_IN: "https://account.chungdahm.com/login?redirect=https://learning.chungdahm.com/",
                        VUE_APP_URL_SKILL_TEST: "https://il.chungdahm.com/skilltest/",
                        VUE_APP_URL_SOCIAL_LEARNING: "https://krcdn.azureedge.net",
                        VUE_APP_URL_SPINDEL: "https://cdi.spindlebooks.com/auth/cdi?token=",
                        VUE_APP_URL_TEACHERS_PORTAL: "https://www.teacherportals.com",
                        VUE_APP_URL_TEACHER_IMG: "https://learning.chungdahm.com/StaffImage/",
                        VUE_APP_WAS: "/rest",
                        BASE_URL: "/cdi/"
                    }.VUE_APP_URL_ILEARNINGTEST_PAGE : {
                        NODE_ENV: "production",
                        VUE_APP_AZURE_CDIL_ROOT: "https://cdncdil.chungdahm.com/cdi3",
                        VUE_APP_AZURE_STORAGE_CONTAINER: "learning",
                        VUE_APP_AZURE_STORAGE_URL: "https://ktcdil.blob.core.windows.net",
                        VUE_APP_CEREELS: "https://www.cereels.tv",
                        VUE_APP_COOKIE_DOMAIN: "chungdahm.com",
                        VUE_APP_NAME: "production",
                        VUE_APP_URL_CHANGE_LOGIN: "https://account.chungdahm.com/html/login/changeLogin.asp?logtype=S&isCdi=1&stdid=[STDID]&redirect=https://learning.chungdahm.com/",
                        VUE_APP_URL_CS: "https://www.chungdahm.com/cs",
                        VUE_APP_URL_C_LEARNING: "https://globalteachers.chungdahm.com/clearning/ContentStudent",
                        VUE_APP_URL_C_LEARNING_DOMAIN: "https://books.chungdahm.com",
                        VUE_APP_URL_ICS: "https://cdncdil.chungdahm.com/cdi3",
                        VUE_APP_URL_IMAGE: "https://learning.chungdahm.com/photo/image",
                        VUE_APP_URL_LEARNING: "https://il.chungdahm.com",
                        VUE_APP_URL_LOGOUT: "https://account.chungdahm.com/html/login/logout.asp?redirect=https://learning.chungdahm.com/",
                        VUE_APP_URL_NEWS: "https://www.chungdahm.com/channel/news/list",
                        VUE_APP_URL_NEW_CLASS_BOOK: "https://www.chungdahm.com/learn21-sso-login?url=https://www.learn21.co.kr/mypage/shopping/fee",
                        VUE_APP_URL_ONLINE_ACHIEVEMENT: "https://exam.chungdahm.com",
                        VUE_APP_URL_ONTEST: "https://ontest.chungdahm.com",
                        VUE_APP_URL_RELATION_LIST: "https://account.chungdahm.com/my/relation_list?redirect=https://learning.chungdahm.com/",
                        VUE_APP_URL_SIGN_IN: "https://account.chungdahm.com/login?redirect=https://learning.chungdahm.com/",
                        VUE_APP_URL_SKILL_TEST: "https://il.chungdahm.com/skilltest/",
                        VUE_APP_URL_SOCIAL_LEARNING: "https://krcdn.azureedge.net",
                        VUE_APP_URL_SPINDEL: "https://cdi.spindlebooks.com/auth/cdi?token=",
                        VUE_APP_URL_TEACHERS_PORTAL: "https://www.teacherportals.com",
                        VUE_APP_URL_TEACHER_IMG: "https://learning.chungdahm.com/StaffImage/",
                        VUE_APP_WAS: "/rest",
                        BASE_URL: "/cdi/"
                    }.VUE_APP_URL_ILEARNING_PAGE,
                    p = "https://exam.chungdahm.com",
                    h = "https://cdi.spindlebooks.com/auth/cdi?token=",
                    m = "https://www.teacherportals.com",
                    _ = {
                        androidUrl: "cdi://cdi/",
                        androidSecondaryUrl: "market://details?id=com.spindle.cdi",
                        iOSUrl: "cdielibrary://cdi/",
                        iOSSecondaryUrl: "https://apps.apple.com/kr/app/%EC%B2%AD%EB%8B%B4e-library/id1488577718"
                    },
                    g = {
                        androidUrl: "learningportal://app/",
                        androidSecondaryUrl: "market://details?id=com.chungdahm.nscreen.android",
                        iOSUrl: "learningportal://app/",
                        iOSSecondaryUrl: "https://itunes.apple.com/kr/app/%EC%B2%AD%EB%8B%B4%EB%9F%AC%EB%8B%9D%ED%8F%AC%ED%84%B8/id1450136350?mt=8"
                    },
                    f = {
                        androidUrl: "aprilportal://",
                        androidSecondaryUrl: "market://details?id=com.chungdahm.april30.android",
                        iOSUrl: "aprilportal://",
                        iOSSecondaryUrl: "https://apps.apple.com/kr/app/april%EB%9F%AC%EB%8B%9D%ED%8F%AC%ED%84%B8/id1490221727?l=ko&ls=1"
                    },
                    v = {
                        androidUrl: "aprilvenatalk://april/",
                        androidSecondaryUrl: "market://details?id=com.chungdahm.vena_talk",
                        iOSUrl: "aprilvenatalk://",
                        iOSSecondaryUrl: "https://apps.apple.com/kr/app/april%EB%B9%84%EB%82%98%ED%86%A1/id1486317712"
                    },
                    P = {
                        androidUrl: "aprilmeme://april/",
                        androidSecondaryUrl: "market://details?id=com.chungdahm.aprilmeme",
                        iOSUrl: "aprilmeme://",
                        iOSSecondaryUrl: "https://apps.apple.com/kr/app/April-MeMe/id1498580359?l=ko&ls=1"
                    },
                    w = {
                        androidUrl: "aprilbuff://april/",
                        androidSecondaryUrl: "market://details?id=com.chungdahm.aprilbuffar",
                        iOSUrl: "aprilbuff://",
                        iOSSecondaryUrl: "https://apps.apple.com/kr/app/April-Buff/id1498580532?l=ko&ls=1"
                    },
                    b = {
                        androidUrl: "istoryar://igarten/",
                        androidSecondaryUrl: "market://details?id=com.chungdahm.istoryar",
                        iOSUrl: "istoryar://",
                        iOSSecondaryUrl: "https://apps.apple.com/kr/app/i-garten-i-story/id1498580543?l=ko"
                    },
                    L = () => "P" == {
                        NODE_ENV: "production",
                        VUE_APP_AZURE_CDIL_ROOT: "https://cdncdil.chungdahm.com/cdi3",
                        VUE_APP_AZURE_STORAGE_CONTAINER: "learning",
                        VUE_APP_AZURE_STORAGE_URL: "https://ktcdil.blob.core.windows.net",
                        VUE_APP_CEREELS: "https://www.cereels.tv",
                        VUE_APP_COOKIE_DOMAIN: "chungdahm.com",
                        VUE_APP_NAME: "production",
                        VUE_APP_URL_CHANGE_LOGIN: "https://account.chungdahm.com/html/login/changeLogin.asp?logtype=S&isCdi=1&stdid=[STDID]&redirect=https://learning.chungdahm.com/",
                        VUE_APP_URL_CS: "https://www.chungdahm.com/cs",
                        VUE_APP_URL_C_LEARNING: "https://globalteachers.chungdahm.com/clearning/ContentStudent",
                        VUE_APP_URL_C_LEARNING_DOMAIN: "https://books.chungdahm.com",
                        VUE_APP_URL_ICS: "https://cdncdil.chungdahm.com/cdi3",
                        VUE_APP_URL_IMAGE: "https://learning.chungdahm.com/photo/image",
                        VUE_APP_URL_LEARNING: "https://il.chungdahm.com",
                        VUE_APP_URL_LOGOUT: "https://account.chungdahm.com/html/login/logout.asp?redirect=https://learning.chungdahm.com/",
                        VUE_APP_URL_NEWS: "https://www.chungdahm.com/channel/news/list",
                        VUE_APP_URL_NEW_CLASS_BOOK: "https://www.chungdahm.com/learn21-sso-login?url=https://www.learn21.co.kr/mypage/shopping/fee",
                        VUE_APP_URL_ONLINE_ACHIEVEMENT: "https://exam.chungdahm.com",
                        VUE_APP_URL_ONTEST: "https://ontest.chungdahm.com",
                        VUE_APP_URL_RELATION_LIST: "https://account.chungdahm.com/my/relation_list?redirect=https://learning.chungdahm.com/",
                        VUE_APP_URL_SIGN_IN: "https://account.chungdahm.com/login?redirect=https://learning.chungdahm.com/",
                        VUE_APP_URL_SKILL_TEST: "https://il.chungdahm.com/skilltest/",
                        VUE_APP_URL_SOCIAL_LEARNING: "https://krcdn.azureedge.net",
                        VUE_APP_URL_SPINDEL: "https://cdi.spindlebooks.com/auth/cdi?token=",
                        VUE_APP_URL_TEACHERS_PORTAL: "https://www.teacherportals.com",
                        VUE_APP_URL_TEACHER_IMG: "https://learning.chungdahm.com/StaffImage/",
                        VUE_APP_WAS: "/rest",
                        BASE_URL: "/cdi/"
                    }.VUE_APP_UI_MODE || "T" == {
                        NODE_ENV: "production",
                        VUE_APP_AZURE_CDIL_ROOT: "https://cdncdil.chungdahm.com/cdi3",
                        VUE_APP_AZURE_STORAGE_CONTAINER: "learning",
                        VUE_APP_AZURE_STORAGE_URL: "https://ktcdil.blob.core.windows.net",
                        VUE_APP_CEREELS: "https://www.cereels.tv",
                        VUE_APP_COOKIE_DOMAIN: "chungdahm.com",
                        VUE_APP_NAME: "production",
                        VUE_APP_URL_CHANGE_LOGIN: "https://account.chungdahm.com/html/login/changeLogin.asp?logtype=S&isCdi=1&stdid=[STDID]&redirect=https://learning.chungdahm.com/",
                        VUE_APP_URL_CS: "https://www.chungdahm.com/cs",
                        VUE_APP_URL_C_LEARNING: "https://globalteachers.chungdahm.com/clearning/ContentStudent",
                        VUE_APP_URL_C_LEARNING_DOMAIN: "https://books.chungdahm.com",
                        VUE_APP_URL_ICS: "https://cdncdil.chungdahm.com/cdi3",
                        VUE_APP_URL_IMAGE: "https://learning.chungdahm.com/photo/image",
                        VUE_APP_URL_LEARNING: "https://il.chungdahm.com",
                        VUE_APP_URL_LOGOUT: "https://account.chungdahm.com/html/login/logout.asp?redirect=https://learning.chungdahm.com/",
                        VUE_APP_URL_NEWS: "https://www.chungdahm.com/channel/news/list",
                        VUE_APP_URL_NEW_CLASS_BOOK: "https://www.chungdahm.com/learn21-sso-login?url=https://www.learn21.co.kr/mypage/shopping/fee",
                        VUE_APP_URL_ONLINE_ACHIEVEMENT: "https://exam.chungdahm.com",
                        VUE_APP_URL_ONTEST: "https://ontest.chungdahm.com",
                        VUE_APP_URL_RELATION_LIST: "https://account.chungdahm.com/my/relation_list?redirect=https://learning.chungdahm.com/",
                        VUE_APP_URL_SIGN_IN: "https://account.chungdahm.com/login?redirect=https://learning.chungdahm.com/",
                        VUE_APP_URL_SKILL_TEST: "https://il.chungdahm.com/skilltest/",
                        VUE_APP_URL_SOCIAL_LEARNING: "https://krcdn.azureedge.net",
                        VUE_APP_URL_SPINDEL: "https://cdi.spindlebooks.com/auth/cdi?token=",
                        VUE_APP_URL_TEACHERS_PORTAL: "https://www.teacherportals.com",
                        VUE_APP_URL_TEACHER_IMG: "https://learning.chungdahm.com/StaffImage/",
                        VUE_APP_WAS: "/rest",
                        BASE_URL: "/cdi/"
                    }.VUE_APP_UI_MODE || !!navigator.userAgent.match(/InAppBrowser/i),
                    C = "P" == {
                        NODE_ENV: "production",
                        VUE_APP_AZURE_CDIL_ROOT: "https://cdncdil.chungdahm.com/cdi3",
                        VUE_APP_AZURE_STORAGE_CONTAINER: "learning",
                        VUE_APP_AZURE_STORAGE_URL: "https://ktcdil.blob.core.windows.net",
                        VUE_APP_CEREELS: "https://www.cereels.tv",
                        VUE_APP_COOKIE_DOMAIN: "chungdahm.com",
                        VUE_APP_NAME: "production",
                        VUE_APP_URL_CHANGE_LOGIN: "https://account.chungdahm.com/html/login/changeLogin.asp?logtype=S&isCdi=1&stdid=[STDID]&redirect=https://learning.chungdahm.com/",
                        VUE_APP_URL_CS: "https://www.chungdahm.com/cs",
                        VUE_APP_URL_C_LEARNING: "https://globalteachers.chungdahm.com/clearning/ContentStudent",
                        VUE_APP_URL_C_LEARNING_DOMAIN: "https://books.chungdahm.com",
                        VUE_APP_URL_ICS: "https://cdncdil.chungdahm.com/cdi3",
                        VUE_APP_URL_IMAGE: "https://learning.chungdahm.com/photo/image",
                        VUE_APP_URL_LEARNING: "https://il.chungdahm.com",
                        VUE_APP_URL_LOGOUT: "https://account.chungdahm.com/html/login/logout.asp?redirect=https://learning.chungdahm.com/",
                        VUE_APP_URL_NEWS: "https://www.chungdahm.com/channel/news/list",
                        VUE_APP_URL_NEW_CLASS_BOOK: "https://www.chungdahm.com/learn21-sso-login?url=https://www.learn21.co.kr/mypage/shopping/fee",
                        VUE_APP_URL_ONLINE_ACHIEVEMENT: "https://exam.chungdahm.com",
                        VUE_APP_URL_ONTEST: "https://ontest.chungdahm.com",
                        VUE_APP_URL_RELATION_LIST: "https://account.chungdahm.com/my/relation_list?redirect=https://learning.chungdahm.com/",
                        VUE_APP_URL_SIGN_IN: "https://account.chungdahm.com/login?redirect=https://learning.chungdahm.com/",
                        VUE_APP_URL_SKILL_TEST: "https://il.chungdahm.com/skilltest/",
                        VUE_APP_URL_SOCIAL_LEARNING: "https://krcdn.azureedge.net",
                        VUE_APP_URL_SPINDEL: "https://cdi.spindlebooks.com/auth/cdi?token=",
                        VUE_APP_URL_TEACHERS_PORTAL: "https://www.teacherportals.com",
                        VUE_APP_URL_TEACHER_IMG: "https://learning.chungdahm.com/StaffImage/",
                        VUE_APP_WAS: "/rest",
                        BASE_URL: "/cdi/"
                    }.VUE_APP_UI_MODE || !(!L() || "T" == {
                        NODE_ENV: "production",
                        VUE_APP_AZURE_CDIL_ROOT: "https://cdncdil.chungdahm.com/cdi3",
                        VUE_APP_AZURE_STORAGE_CONTAINER: "learning",
                        VUE_APP_AZURE_STORAGE_URL: "https://ktcdil.blob.core.windows.net",
                        VUE_APP_CEREELS: "https://www.cereels.tv",
                        VUE_APP_COOKIE_DOMAIN: "chungdahm.com",
                        VUE_APP_NAME: "production",
                        VUE_APP_URL_CHANGE_LOGIN: "https://account.chungdahm.com/html/login/changeLogin.asp?logtype=S&isCdi=1&stdid=[STDID]&redirect=https://learning.chungdahm.com/",
                        VUE_APP_URL_CS: "https://www.chungdahm.com/cs",
                        VUE_APP_URL_C_LEARNING: "https://globalteachers.chungdahm.com/clearning/ContentStudent",
                        VUE_APP_URL_C_LEARNING_DOMAIN: "https://books.chungdahm.com",
                        VUE_APP_URL_ICS: "https://cdncdil.chungdahm.com/cdi3",
                        VUE_APP_URL_IMAGE: "https://learning.chungdahm.com/photo/image",
                        VUE_APP_URL_LEARNING: "https://il.chungdahm.com",
                        VUE_APP_URL_LOGOUT: "https://account.chungdahm.com/html/login/logout.asp?redirect=https://learning.chungdahm.com/",
                        VUE_APP_URL_NEWS: "https://www.chungdahm.com/channel/news/list",
                        VUE_APP_URL_NEW_CLASS_BOOK: "https://www.chungdahm.com/learn21-sso-login?url=https://www.learn21.co.kr/mypage/shopping/fee",
                        VUE_APP_URL_ONLINE_ACHIEVEMENT: "https://exam.chungdahm.com",
                        VUE_APP_URL_ONTEST: "https://ontest.chungdahm.com",
                        VUE_APP_URL_RELATION_LIST: "https://account.chungdahm.com/my/relation_list?redirect=https://learning.chungdahm.com/",
                        VUE_APP_URL_SIGN_IN: "https://account.chungdahm.com/login?redirect=https://learning.chungdahm.com/",
                        VUE_APP_URL_SKILL_TEST: "https://il.chungdahm.com/skilltest/",
                        VUE_APP_URL_SOCIAL_LEARNING: "https://krcdn.azureedge.net",
                        VUE_APP_URL_SPINDEL: "https://cdi.spindlebooks.com/auth/cdi?token=",
                        VUE_APP_URL_TEACHERS_PORTAL: "https://www.teacherportals.com",
                        VUE_APP_URL_TEACHER_IMG: "https://learning.chungdahm.com/StaffImage/",
                        VUE_APP_WAS: "/rest",
                        BASE_URL: "/cdi/"
                    }.VUE_APP_UI_MODE) && window.innerWidth < window.innerHeight,
                    A = "T" == {
                        NODE_ENV: "production",
                        VUE_APP_AZURE_CDIL_ROOT: "https://cdncdil.chungdahm.com/cdi3",
                        VUE_APP_AZURE_STORAGE_CONTAINER: "learning",
                        VUE_APP_AZURE_STORAGE_URL: "https://ktcdil.blob.core.windows.net",
                        VUE_APP_CEREELS: "https://www.cereels.tv",
                        VUE_APP_COOKIE_DOMAIN: "chungdahm.com",
                        VUE_APP_NAME: "production",
                        VUE_APP_URL_CHANGE_LOGIN: "https://account.chungdahm.com/html/login/changeLogin.asp?logtype=S&isCdi=1&stdid=[STDID]&redirect=https://learning.chungdahm.com/",
                        VUE_APP_URL_CS: "https://www.chungdahm.com/cs",
                        VUE_APP_URL_C_LEARNING: "https://globalteachers.chungdahm.com/clearning/ContentStudent",
                        VUE_APP_URL_C_LEARNING_DOMAIN: "https://books.chungdahm.com",
                        VUE_APP_URL_ICS: "https://cdncdil.chungdahm.com/cdi3",
                        VUE_APP_URL_IMAGE: "https://learning.chungdahm.com/photo/image",
                        VUE_APP_URL_LEARNING: "https://il.chungdahm.com",
                        VUE_APP_URL_LOGOUT: "https://account.chungdahm.com/html/login/logout.asp?redirect=https://learning.chungdahm.com/",
                        VUE_APP_URL_NEWS: "https://www.chungdahm.com/channel/news/list",
                        VUE_APP_URL_NEW_CLASS_BOOK: "https://www.chungdahm.com/learn21-sso-login?url=https://www.learn21.co.kr/mypage/shopping/fee",
                        VUE_APP_URL_ONLINE_ACHIEVEMENT: "https://exam.chungdahm.com",
                        VUE_APP_URL_ONTEST: "https://ontest.chungdahm.com",
                        VUE_APP_URL_RELATION_LIST: "https://account.chungdahm.com/my/relation_list?redirect=https://learning.chungdahm.com/",
                        VUE_APP_URL_SIGN_IN: "https://account.chungdahm.com/login?redirect=https://learning.chungdahm.com/",
                        VUE_APP_URL_SKILL_TEST: "https://il.chungdahm.com/skilltest/",
                        VUE_APP_URL_SOCIAL_LEARNING: "https://krcdn.azureedge.net",
                        VUE_APP_URL_SPINDEL: "https://cdi.spindlebooks.com/auth/cdi?token=",
                        VUE_APP_URL_TEACHERS_PORTAL: "https://www.teacherportals.com",
                        VUE_APP_URL_TEACHER_IMG: "https://learning.chungdahm.com/StaffImage/",
                        VUE_APP_WAS: "/rest",
                        BASE_URL: "/cdi/"
                    }.VUE_APP_UI_MODE || !(!L() || "P" == {
                        NODE_ENV: "production",
                        VUE_APP_AZURE_CDIL_ROOT: "https://cdncdil.chungdahm.com/cdi3",
                        VUE_APP_AZURE_STORAGE_CONTAINER: "learning",
                        VUE_APP_AZURE_STORAGE_URL: "https://ktcdil.blob.core.windows.net",
                        VUE_APP_CEREELS: "https://www.cereels.tv",
                        VUE_APP_COOKIE_DOMAIN: "chungdahm.com",
                        VUE_APP_NAME: "production",
                        VUE_APP_URL_CHANGE_LOGIN: "https://account.chungdahm.com/html/login/changeLogin.asp?logtype=S&isCdi=1&stdid=[STDID]&redirect=https://learning.chungdahm.com/",
                        VUE_APP_URL_CS: "https://www.chungdahm.com/cs",
                        VUE_APP_URL_C_LEARNING: "https://globalteachers.chungdahm.com/clearning/ContentStudent",
                        VUE_APP_URL_C_LEARNING_DOMAIN: "https://books.chungdahm.com",
                        VUE_APP_URL_ICS: "https://cdncdil.chungdahm.com/cdi3",
                        VUE_APP_URL_IMAGE: "https://learning.chungdahm.com/photo/image",
                        VUE_APP_URL_LEARNING: "https://il.chungdahm.com",
                        VUE_APP_URL_LOGOUT: "https://account.chungdahm.com/html/login/logout.asp?redirect=https://learning.chungdahm.com/",
                        VUE_APP_URL_NEWS: "https://www.chungdahm.com/channel/news/list",
                        VUE_APP_URL_NEW_CLASS_BOOK: "https://www.chungdahm.com/learn21-sso-login?url=https://www.learn21.co.kr/mypage/shopping/fee",
                        VUE_APP_URL_ONLINE_ACHIEVEMENT: "https://exam.chungdahm.com",
                        VUE_APP_URL_ONTEST: "https://ontest.chungdahm.com",
                        VUE_APP_URL_RELATION_LIST: "https://account.chungdahm.com/my/relation_list?redirect=https://learning.chungdahm.com/",
                        VUE_APP_URL_SIGN_IN: "https://account.chungdahm.com/login?redirect=https://learning.chungdahm.com/",
                        VUE_APP_URL_SKILL_TEST: "https://il.chungdahm.com/skilltest/",
                        VUE_APP_URL_SOCIAL_LEARNING: "https://krcdn.azureedge.net",
                        VUE_APP_URL_SPINDEL: "https://cdi.spindlebooks.com/auth/cdi?token=",
                        VUE_APP_URL_TEACHERS_PORTAL: "https://www.teacherportals.com",
                        VUE_APP_URL_TEACHER_IMG: "https://learning.chungdahm.com/StaffImage/",
                        VUE_APP_WAS: "/rest",
                        BASE_URL: "/cdi/"
                    }.VUE_APP_UI_MODE) && window.innerWidth >= window.innerHeight,
                    E = !(!L() || !navigator.userAgent.match(/com.chungdahm.nscreen/i)),
                    U = !(!L() || !navigator.userAgent.match(/com.chungdahm.april/i)),
                    S = !(!L() || !navigator.userAgent.match(/com.chungdahm.allim/i)),
                    I = () => {
                        const t = (0, r.qY)();
                        if (!t) return "I";
                        if (t && t.os) {
                            if (t.os.indexOf("Android") >= 0) return "A";
                            if (t.os.indexOf(/[iOS|iPad]/) >= 0) return "I";
                            if (!t.name || "safari" === t.name) return "I"
                        }
                        return "W"
                    },
                    y = t => !!L() && (window.NI.util.openStudyWindow({
                        url: t
                    }, (function() {}), (function() {
                        console.log("open failed")
                    })), !0),
                    k = t => !!L() && (navigator.userAgent.match(/InAppBrowser/i) ? window.NI.util.openChildWindow({
                        url: t,
                        isPortrait: C
                    }, (function() {}), (function() {
                        console.log("open failed")
                    })) : window.location = t, !0),
                    R = (t, e, i, s, a) => {
                        if (t) {
                            var n = navigator.userAgent.toLowerCase().indexOf("chrome") > -1 && navigator.vendor.toLowerCase().indexOf("google") > -1;
                            if (n) {
                                let n = window.open(t, e, `toolbar=no,scrollbars=no,resizable=no,width=${i},height=${s}`);
                                a && (n.onbeforeunload = function() {
                                    a()
                                })
                            } else location.href = t
                        }
                    },
                    N = {
                        isAprilLearning: l,
                        isApp: () => L(),
                        isPhone: C,
                        isTablet: A,
                        isCDApp: E,
                        isAprilApp: U,
                        isAllimApp: S,
                        getBrowserOS: () => I(),
                        graphColorArr: ["#62DADE", "#FFC129", "#FE838C", "#A97FE9"],
                        showAlert: (t, e = null) => {
                            L() ? window.NI.util.showToast({
                                body: t
                            }, (function() {
                                e && e()
                            }), (function() {})) : (window.alert(t), e && e())
                        },
                        openILearning: t => {
                            let e = `${c}/${t}`,
                                i = y(e);
                            if (!i) {
                                let t = screen.availWidth,
                                    i = screen.availHeight - 50;
                                R(e, "nscreenIL", t, i, (() => {
                                    s["default"].prototype.$eventBus.$emit("view:i-learning", "reload-learning-log")
                                }))
                            }
                        },
                        openILearningApril: t => {
                            let e = `${d}/${t}`,
                                i = y(e);
                            if (!i) {
                                let t = screen.availWidth,
                                    i = screen.availHeight - 50;
                                R(e, "nscreenIL", t, i, (() => {
                                    s["default"].prototype.$eventBus.$emit("view:i-learning", "reload-learning-log")
                                }))
                            }
                        },
                        openILearningPage: t => {
                            let e = `${u}/${t}`,
                                i = y(e);
                            if (!i) {
                                let t = screen.availWidth,
                                    i = screen.availHeight - 50;
                                R(e, "nscreenIL", t, i, (() => {
                                    s["default"].prototype.$eventBus.$emit("view:i-learning", "reload-learning-log")
                                }))
                            }
                        },
                        openILearningIg: t => {
                            let e = `${u}/${t}`,
                                i = y(e);
                            if (!i) {
                                let t = screen.availWidth,
                                    i = screen.availHeight - 50;
                                R(e, "nscreenIL", t, i, (() => {
                                    s["default"].prototype.$eventBus.$emit("view:i-learning", "reload-learning-log")
                                }))
                            }
                        },
                        openOnlineAchievement: t => {
                            let e = `${p}/${t}`,
                                i = y(e);
                            if (!i) {
                                let t = screen.availWidth,
                                    i = screen.availHeight - 50;
                                R(e, "nscreenIL", t, i, (() => {}))
                            }
                        },
                        openThinkingSkillTest: () => {
                            let t = "https://ontest.chungdahm.com",
                                e = y(t);
                            if (!e) {
                                let e = screen.availWidth,
                                    i = screen.availHeight - 50;
                                R(t, "ontest", e, i, (() => {}))
                            }
                        },
                        openELibrary: async (t = null) => {
                            if (L()) window.NI.util.openUrlScheme(_, (function() {}), (function() {
                                N.showAlert("open failed")
                            }));
                            else {
                                let i = I();
                                if ("W" === i)
                                    if (null == t) try {
                                        const t = await a.Z.get("/v2/common/elibrary/token");
                                        if ("ok" === t.result) {
                                            const e = `${h}${t.data}`;
                                            window.open(e, "_blank")
                                        } else "string" === typeof t && "forbidden" == t ? N.showAlert("�ъ썝�앹뿉寃뚮쭔 �쒓났�섎뒗 �쒕퉬�ㅼ엯�덈떎.") : N.showAlert("e-Library�대룞�� 臾몄젣媛� 諛쒖깮�섏��듬땲��. �좎떆�� �ㅼ떆 �쒕룄�댁＜�몄슂.")
                                    } catch (e) {
                                        console.log("elibrary", e), N.showAlert("e-Library�대룞�� 臾몄젣媛� 諛쒖깮�섏��듬땲��. �좎떆�� �ㅼ떆 �쒕룄�댁＜�몄슂.")
                                    } else window.open(t, "_blank");
                                    else "A" === i ? (location.href = _.androidUrl, setTimeout((function() {
                                        location.href = _.androidSecondaryUrl
                                    }), 500)) : "I" === i && (location.href = _.iOSUrl, setTimeout((function() {
                                        location.href = _.iOSSecondaryUrl
                                    }), 500))
                            }
                        },
                        openLPApp: () => {
                            if (console.log("openLPApp"), L()) window.NI.util.openUrlScheme(g, (function() {}), (function() {
                                console.log("open failed")
                            }));
                            else {
                                let t = I();
                                "A" === t ? (location.href = g.androidUrl, setTimeout((function() {
                                    location.href = g.androidSecondaryUrl
                                }), 500)) : "I" === t && (location.href = g.iOSUrl, setTimeout((function() {
                                    location.href = g.iOSSecondaryUrl
                                }), 500))
                            }
                        },
                        openAprilLPApp: () => {
                            if (console.log("openLPApp"), L()) window.NI.util.openUrlScheme(f, (function() {}), (function() {
                                console.log("open failed")
                            }));
                            else {
                                let e = I();
                                if ("A" === e) {
                                    var t = ["intent://open#Intent", "scheme=aprilportal", "package=com.chungdahm.april30.android", "S.browser_fallback_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.chungdahm.april30.android", "end"].join(";");
                                    window.location.href = t
                                } else "I" === e && (location.href = f.iOSUrl, setTimeout((function() {
                                    location.href = f.iOSSecondaryUrl
                                }), 500))
                            }
                        },
                        openLPMarket: () => {
                            let t = I();
                            L() ? window.NI.util.openUrlScheme({
                                androidUrl: "learningportalmarket://app/",
                                androidSecondaryUrl: g.androidSecondaryUrl,
                                iOSUrl: "learningportalmarket://app/",
                                iOSSecondaryUrl: g.iOSSecondaryUrl
                            }, (function() {}), (function() {
                                console.log("open failed")
                            })) : "A" === t ? location.href = g.androidSecondaryUrl : "I" === t && (location.href = g.iOSSecondaryUrl)
                        },
                        openAprilLPMarket: () => {
                            let t = I();
                            if (L()) window.NI.util.openUrlScheme({
                                androidUrl: "learningportalmarket://app/",
                                androidSecondaryUrl: f.androidSecondaryUrl,
                                iOSUrl: "learningportalmarket://app/",
                                iOSSecondaryUrl: f.iOSSecondaryUrl
                            }, (function() {}), (function() {
                                console.log("open failed")
                            }));
                            else if ("A" === t) {
                                var e = ["intent://open#Intent", "scheme=aprilportal", "package=com.chungdahm.april30.android", "S.browser_fallback_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.chungdahm.april30.android", "end"].join(";");
                                window.location.href = e
                            } else "I" === t && (location.href = f.iOSSecondaryUrl)
                        },
                        openAILearningApril: () => {
                            let t = I();
                            L() ? window.NI.util.openUrlScheme(v, (function() {}), (function() {
                                console.log("open failed")
                            })) : "A" === t ? (location.href = v.androidUrl, setTimeout((function() {
                                location.href = v.androidSecondaryUrl
                            }), 500), location.href = v.androidSecondaryUrl) : "I" === t && (location.href = v.iOSUrl, setTimeout((function() {
                                location.href = v.iOSSecondaryUrl
                            }), 500), location.href = v.iOSSecondaryUrl)
                        },
                        openAprilMeMe: () => {
                            if (L()) window.NI.util.openUrlScheme(P, (function() {}), (function() {
                                console.log("open failed")
                            }));
                            else {
                                let t = I();
                                "A" === t ? location.href = P.androidSecondaryUrl : "I" === t && (location.href = P.iOSSecondaryUrl)
                            }
                        },
                        openAprilBuff: () => {
                            if (L()) window.NI.util.openUrlScheme(w, (function() {}), (function() {
                                console.log("open failed")
                            }));
                            else {
                                let t = I();
                                "A" === t ? location.href = w.androidSecondaryUrl : "I" === t && (location.href = w.iOSSecondaryUrl)
                            }
                        },
                        openARLearning: () => {
                            let t = I();
                            L() ? window.NI.util.openUrlScheme(b, (function() {}), (function() {
                                console.log("open failed")
                            })) : "A" === t ? (location.href = b.androidUrl, setTimeout((function() {
                                location.href = b.androidSecondaryUrl
                            }), 500), location.href = b.androidSecondaryUrl) : "I" === t && (location.href = b.iOSUrl, setTimeout((function() {
                                location.href = b.iOSSecondaryUrl
                            }), 500), location.href = b.iOSSecondaryUrl)
                        },
                        openBlank: t => {
                            if (L()) event.preventDefault(), window.NI.util.openUrl({
                                url: t
                            }, (function() {}), (function() {
                                console.log("failed")
                            }));
                            else {
                                let e = document.getElementById("empty"),
                                    i = document.createElement("a");
                                i.setAttribute("href", t), i.setAttribute("target", "_blank"), e.appendChild(i), i.click(), e.removeChild(i)
                            }
                        },
                        openBlankIfApp: (t, e) => {
                            t && t.preventDefault(), L() ? S ? window.parent.postMessage({
                                action: "open:",
                                msg: {
                                    url: e
                                }
                            }, "*") : window.NI.util.openUrl({
                                url: e
                            }, (function() {}), (function() {
                                console.log("failed")
                            })) : window.open(e)
                        },
                        openSkilltest: t => {
                            let e = y(t);
                            if (!e) {
                                let e = screen.availWidth,
                                    i = screen.availHeight - 50;
                                R(`${t}`, "", e, i)
                            }
                        },
                        openTeachersPortal: () => {
                            let t = m;
                            L() ? (event.preventDefault(), window.NI.util.openUrl({
                                url: t
                            }, (function() {}), (function() {
                                console.log("failed")
                            }))) : location.href = t
                        },
                        printImage: t => {
                            let e = function() {
                                    document.body.removeChild(this.__container__)
                                },
                                i = function() {
                                    this.contentWindow.__container__ = this, this.contentWindow.onbeforeunload = e, this.contentWindow.onafterprint = e, this.contentWindow.document.write("<html><head><title>print</title>"), this.contentWindow.document.write("</head><body >"), this.contentWindow.document.write("<img src='" + t + "'/>"), this.contentWindow.document.write("</body></html>"), this.contentWindow.focus(), this.contentWindow.print()
                                };
                            var s = document.createElement("iframe");
                            s.onload = i, s.style.visibility = "hidden", s.style.position = "fixed", s.style.right = "0", s.style.bottom = "0", document.body.appendChild(s)
                        },
                        openChildWindow: t => k(t),
                        closeChildWindow: t => {
                            if (L()) {
                                if (S) history.back();
                                else {
                                    var e = "boolean" === typeof t && t;
                                    window.NI.util.closeThisWindow({
                                        autoRefreshParentWindow: e
                                    }, (function() {}), (function() {
                                        console.log("error")
                                    }))
                                }
                                return !0
                            }
                            return !1
                        },
                        removeAllCookies: () => {
                            console.log("removeAllCookies"), L() && window.NI.isMobile.iOS() && window.NI.util.removeAllCookies((function() {}), (function() {}))
                        },
                        getCurrentBrand: () => {
                            let t = "",
                                e = location.pathname.split("/", 2);
                            return e.length >= 2 && (t = e[1]), "ig" === t && (t = "i-GARTEN"), t = t.toLowerCase(), t
                        },
                        getRouterTitle: t => t && t.meta && t.meta.mtitle ? t.meta.mtitle : null,
                        getFileName: t => t && t.length ? t.substring(t.lastIndexOf("/") + 1, t.length) : "",
                        downloadFiles: (t, e) => {
                            if (!t) return;
                            Array.isArray(t) || (t = [t]);
                            let i = navigator.userAgent.toLowerCase().indexOf("chrome") > -1,
                                s = navigator.userAgent.toLowerCase().indexOf("safari") > -1;

                            function a(t) {
                                let e = N.getFileName(t);
                                o()({
                                    url: t,
                                    method: "GET",
                                    responseType: "blob",
                                    crossDomain: !0,
                                    xDomain: !0,
                                    xDomainRequest: !0
                                }).then((t => {
                                    const i = window.URL.createObjectURL(new Blob([t.data])),
                                        s = document.createElement("a");
                                    s.href = i, s.setAttribute("download", e), document.body.appendChild(s), s.click()
                                }))
                            }

                            function n(o) {
                                const l = (0, r.qY)();
                                let c = !1,
                                    d = !1;
                                if (l && l.os && (c = l.os.indexOf("Android") >= 0, d = l.os.indexOf("iOS") >= 0, (c || d) && (e = !1)), o >= t.length) return;
                                let u = t[o];
                                if ((i || s) && e) a(u);
                                else {
                                    let t = document.createElement("a"),
                                        e = N.getFileName(u);
                                    t.href = u, N.isTablet || N.isPhone || ("download" in t && (t.download = e), t.target = "_blank"), (document.body || document.documentElement).appendChild(t), t.click && t.click(), t.parentNode.removeChild(t)
                                }
                                setTimeout((function() {
                                    n(o + 1)
                                }), 500)
                            }
                            n(0)
                        },
                        toggleStyleSheet: (t, e) => {
                            for (var i = 0, s = 0; s < document.styleSheets.length; s++) document.styleSheets[s].href && document.styleSheets[s].href.indexOf(t) > -1 && (i = document.styleSheets[s].ownerNode);
                            if (void 0 == e && (e = !i), e) {
                                if (i) return e;
                                var a = document.createElement("link");
                                a.rel = "stylesheet", a.type = "text/css";
                                const s = `${(new Date).toISOString().slice(-24).replace(/\D/g,"").slice(0,14)}`;
                                a.href = t + `?dc=${s}`, document.getElementsByTagName("head")[0].appendChild(a)
                            } else i && i.parentNode.removeChild(i);
                            return e
                        },
                        getUrlFromRouteInfo(t, e, i) {
                            let s = location.href.substring(0, location.href.lastIndexOf(location.pathname)),
                                a = null;
                            a = i ? t.resolve({
                                name: e,
                                params: i
                            }) : t.resolve({
                                name: e
                            });
                            let n = `${s}${a.href}`;
                            return n
                        },
                        getbrandSwitchData(t, e) {
                            let i = [];
                            if (t && e) switch (e) {
                                case "P":
                                    i = [{
                                        brand: "cdi",
                                        allow: !1
                                    }, {
                                        brand: "april",
                                        allow: !1
                                    }, {
                                        brand: "page",
                                        allow: !1
                                    }, {
                                        brand: "i-garten",
                                        allow: !1
                                    }];
                                    break;
                                case "E":
                                    i = [{
                                        brand: "cdi",
                                        allow: !U
                                    }, {
                                        brand: "april",
                                        allow: !E
                                    }, {
                                        brand: "page",
                                        allow: !U
                                    }, {
                                        brand: "i-garten",
                                        allow: !E
                                    }];
                                    break;
                                default:
                                    i = [{
                                        brand: "cdi",
                                        allow: "Y" === t.cdiYN && !U
                                    }, {
                                        brand: "april",
                                        allow: "Y" === t.aprilYN
                                    }, {
                                        brand: "page",
                                        allow: "Y" === t.pageYN && !U
                                    }, {
                                        brand: "i-garten",
                                        allow: "Y" === t.igtYN
                                    }];
                                    break
                            } else i = [{
                                brand: "cdi",
                                allow: !1
                            }, {
                                brand: "april",
                                allow: !1
                            }, {
                                brand: "page",
                                allow: !1
                            }, {
                                brand: "i-garten",
                                allow: !1
                            }];
                            return i && i.length && i.forEach((function(t) {
                                switch (t.brand) {
                                    case "cdi":
                                        t.cssClass = "CDI", t.routerName = "Main";
                                        break;
                                    case "april":
                                        t.cssClass = "April", t.routerName = "AprilHome";
                                        break;
                                    case "page":
                                        t.cssClass = "PBP", t.routerName = "PbpHome";
                                        break;
                                    case "i-garten":
                                        t.cssClass = "IG", t.routerName = "IgHomeTpl";
                                        break;
                                    default:
                                        t.cssClass = ""
                                }
                            })), i
                        },
                        calcBrandSwitchData(t, e, i) {
                            let s = [];
                            return "S" !== t && "E" !== t || i && i.length && (i = i.filter((t => t.brand != e))), i && i.length && i.forEach((function(t) {
                                switch (t.brand) {
                                    case "CDI":
                                    case "Page":
                                        U || s.push(t);
                                        break;
                                    case "APRIL":
                                    case "i-GARTEN":
                                        E || s.push(t);
                                        break;
                                    case "Bouncy":
                                    case "NOISY":
                                    case "MT":
                                        U || E || s.push(t);
                                        break;
                                    default:
                                        break
                                }
                            })), s
                        },
                        isOnlineClassBlockedPlatform() {
                            let t = I();
                            return "W" !== t && !A
                        },
                        Browser() {
                            if (navigator && navigator.userAgent) {
                                const t = !!navigator.userAgent.match(/Android/i),
                                    e = !!navigator.userAgent.match(/BlackBerry/i),
                                    i = !!navigator.userAgent.match(/iPhone|iPad|iPod/i),
                                    s = !!navigator.userAgent.match(/IEMobile/i);
                                return {
                                    isMobile: t || e || i || s,
                                    isAOS: t,
                                    isBlackBerry: e,
                                    isIOS: i,
                                    isIEM: s,
                                    InAppBrowser: !!navigator.userAgent.match(/InAppBrowser/i)
                                }
                            }
                            return null
                        }
                    };
                e["Z"] = N
            },
            9149: function(t, e, i) {
                "use strict";
                t.exports = i.p + "img/img_emoji_coupon.427bcc08.png"
            },
            4319: function(t, e, i) {
                "use strict";
                t.exports = i.p + "img/img_emoji_coupon_used.127e742d.png"
            },
            3858: function(t) {
                "use strict";
                t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKIAAABaCAYAAAA7M41vAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAjdSURBVHgB7Z3Pb9tkGMef1066rhSWSbBxQMK7IYSodyjiFu/Cj+1AkbgTDiBOUE5IXMj+AsYNxIHuL9iQYIMT4UontYeJ64KENmlDare2LE1ivzyP/bp1PadN4zfO6+z5SK8Sv3HixP7m+77P8762ARiGYRiGYRiGYRiGYRiDETAF3PG82uz2tmsLsSAB3LOrqx8BUyoqUELuvfmmA92uJ2x7ARc92NlxQQgIopfbwJQO44WYdLtASk8I4Unfr4FtAzM9GCfEQ90OHyUw08hEhVik28lrbq1rgycsqx6ARHHL67OX1r8FxggKFWKRbrf9i+vij6sLablSSG9XgkP1Um0Fo7QWMMYwNiEW2reT6HF+F8DfBeuU73R+Pr+BequFL5HwuD03Hm1CTLmdK9DtpBC1cbidDHooug4APfZRgNLff9EPhV6DHPzy5z+uDTP1d944w013QYwkxHTeTlIz6/tO0u20CS/hdhB0I/FJfbK+tnandsKf8UBW6yL6LS5uAP9A4TZYiAUxlBBJeDNbW56NHX1Iu51mDnU7DWz1bdjcrcD9Z95eunnrt4bsR33H/d4jMwkyhfjP4qI7gx39Pbfb2XHAsvZeL4vb9aWAjW4FNrFs9WzYRhFSXcgzZ9xRf8gr73zq4I5zbv/6XQsYLVSecLtIfONxO7Sf0OWCzljcriNseGTNwt2Hc6EAO4EFeXG95Vp/tuNawsduiMCgS3pSBjUpZQs48tZG5eTOzsbY3C5sZneV42l2OwyAtkUVNm0s1gw+r4R1lm3Bs50Z0MHr736y5sN/9OfE/RI5qZRTMTxvHNqi5iLcLhSchY92JLxxEwUuTBGMfjTJ8fo76HaqjzcGtyOxxY5Hdcz0kkuIsPsIdDAJt2PMovAjzm7HZFG4EG/P1FB8VWCYJPnzGwyjARYiYwQsRMYIODw1GBy9oVlEezOJhBBtmFJYiGZDCfXf4wUZzev8Y5g34rpO/LxoAY+ybW6ap5c7cUFh1KEglAiPvW12RCYEBfMjPjjHeQ+63QXQBAvRAFRf8JuMl9IzzZu4bjtjvcsaml8PjilEnbAQzYAE1xhiPW9A/QqU/MICLEQmiyuqFAYL0QCoWU1GmgmorpVYXsKynrHeQ9DLJn6nv6FAWIiGkHXgUZznUlW1ogWiAQd/R/I7k8g30yuxEM1mIbVMecWryQo8yA18eBnMZSW13MRyOb0SC9FsllLLDRTe5ZSjfAiDg5jSwEI0FBpFgScFRtH155DhKAZDfdrkHyeza8FCNJcfB9Qvo0h/QleMg5YvsJzKWK8FZrA8zLAkC9FAUGiUOnESVcuqUB254jVc5wJF2wlBpj8DygQL0TBQQE2Imt+YJortW3JBiCZAOKr8jnUf4Wst0I+jugYH6hLPKTiqJQoFUVfoe8KIsBANQQ3zUXOcDFBW8OCG/UGVa6Sx3bQYyT0vZ6VEctCA4UZ6kuS68BXPvjEA5T5r8KQID1yUXo0nkxjbiWpqstcGJMSLog0DgpBhYUecMEpA1+CgozRjJ0yjxHgO30eTJJZVdUvDpIcrcLirbcJ+9NtWBXQl2FmIEybV5NKBbgwTZeI6X+D7qE+mJZ2Tp3+nAxaiAVDki6I6DwOGvw55Xxui9I1ptOGYsBAN4bhNq+pXvgcHr8/TwnJVfVYzUV/Y+HTcdYBjwkIsGapPSdG1l/Ey1dHkWUql5HZKFckvQT6uD+PyLMQSoURI0fVRqRIafXE1TOWPU0p5iPu+h8Lpm5Kg3IkOaixCOrhN2M8penBwpounIutSwI5YHqiJdBLLF1LDe9QP/APFRwKN0zrLGbN18tCEowMRN7H9oWEhlofksN/KoDFmiFI5Ddh3Tpompis10zoqtaQmwR5biNw0l4dkdLwyaCXlfq0B7zMWFiJjBCzE8tBOPD/K5dwB7zMW7iOWh+twMAi5mhWEqGlkTqKqBfpYyjihK81I58+wEMsDBRwNiIIQB6IZNxfiERmV3mnCwaDmuhjyok1DcuwgZFhYiCVBTY6giDjODToQXeRoPbGcTHS3wcxx6ExYiCUCxXhFnQLwNeyLLqu/SOJ8X8PUsHA2EORjqJP/WYglQ4mR+oskRhf2hUiiIQFSjvEqaED1QbV81lGwEEuIcrq92dvUP9R8qkDhcPpmCii7CAkWImMELETGCAoXYkWO407QTNkpPFh5rfswvA/fthXdiy+8L5/FMdPTzkQUMC/7MO/34UW/Ey5HN4qshDeIpPv0bWPhG0U+XYwuRGGBOHEapP8YIPCjO9SP+iUwSVuTPaglPoNd8+kilxChOgcCSwhl/NHhJN1InARFJUd/kF3z6UKfzZAoKidBYNkj6IZ3uJd0h/sxuWYoTHRNuvm4bteUUrSEFbggRa7rujBHU3nc652er1YXpO+70rI8oJNuhKYdjyKhIqrz0XLaNUmgOYhd8yU/WiaHfHRyFoK5Wdjq27DZzSfM279+H54F9+rFj10IwLUB6rhvXFGSWc9lIrNtu7+46FpSvowH1hMkzHHu+NAte5FroqgAxZUH67QNp756fm95A8W43bNho4ePKM6OrzJWZz+IyiFcXDybuX8cr1Gbm6s6f934YR0YLQzVybrjujVyzUBKcktPSOlqc800YRPeHdk100JMQ0IkYd6de2v93xc+w6GxJ64DuMcgITL6GXlHk2v62Jxbtk03/XNNcc2jhBgjhGyeuLQeXrzoxp8P6hZINxAoSoG/Q0YznFmIxTFyJ+rM6io1S+G0I1oeq2vaJ8Ky19fM6ZppLr7xAs1iphKednlz7Z4j+tUFYApjrP/4SbimeK4Pp76cb8euNoikIzKTZ6xZ4km4pnwM7dlLq+ce33SdagC4LfCC8A8gPGCMZeJ9oDG4ZvvF1dXMM816N87XfRQ/RNeJac1eWp/oxSmZfYzrjGtwzYFCZMylFFEhuSb4fj1MuAvhHOGaLMQSUsr0BLnms5VKnRLuuOimXJOFWEKmJk/2YHGxTsOUYFnOmVu3SnM+L8MwDMMwDMMwDMMwzOH8DyD6/aARjPODAAAAAElFTkSuQmCC"
            },
            6827: function(t, e, i) {
                "use strict";
                t.exports = i.p + "img/img_modal_setting_bg_default.83c7d368.png"
            },
            4654: function() {}
        },
        e = {};

    function i(s) {
        var a = e[s];
        if (void 0 !== a) return a.exports;
        var n = e[s] = {
            exports: {}
        };
        return t[s].call(n.exports, n, n.exports, i), n.exports
    }
    i.m = t,
        function() {
            var t = [];
            i.O = function(e, s, a, n) {
                if (!s) {
                    var o = 1 / 0;
                    for (d = 0; d < t.length; d++) {
                        s = t[d][0], a = t[d][1], n = t[d][2];
                        for (var r = !0, l = 0; l < s.length; l++)(!1 & n || o >= n) && Object.keys(i.O).every((function(t) {
                            return i.O[t](s[l])
                        })) ? s.splice(l--, 1) : (r = !1, n < o && (o = n));
                        if (r) {
                            t.splice(d--, 1);
                            var c = a();
                            void 0 !== c && (e = c)
                        }
                    }
                    return e
                }
                n = n || 0;
                for (var d = t.length; d > 0 && t[d - 1][2] > n; d--) t[d] = t[d - 1];
                t[d] = [s, a, n]
            }
        }(),
        function() {
            i.n = function(t) {
                var e = t && t.__esModule ? function() {
                    return t["default"]
                } : function() {
                    return t
                };
                return i.d(e, {
                    a: e
                }), e
            }
        }(),
        function() {
            i.d = function(t, e) {
                for (var s in e) i.o(e, s) && !i.o(t, s) && Object.defineProperty(t, s, {
                    enumerable: !0,
                    get: e[s]
                })
            }
        }(),
        function() {
            i.f = {}, i.e = function(t) {
                return Promise.all(Object.keys(i.f).reduce((function(e, s) {
                    return i.f[s](t, e), e
                }), []))
            }
        }(),
        function() {
            i.u = function(t) {
                return "js/" + ({
                    12: "Main",
                    109: "MyPersonalLog",
                    189: "sLearning",
                    242: "Materials",
                    265: "Settings",
                    282: "WeekBuffRanking",
                    288: "Portfolio",
                    310: "MasterGallery",
                    312: "EmojiDetail",
                    392: "Report",
                    558: "SkillTestReport",
                    675: "Emoji",
                    694: "HallOfFame",
                    695: "cLearning",
                    769: "SkillTest",
                    800: "iLearning",
                    936: "MyVocab",
                    958: "PersonalLog"
                } [t] || t) + "." + {
                    12: "190137b1",
                    109: "d71afe61",
                    189: "4526f0b1",
                    242: "e69bcd6d",
                    260: "e26880c8",
                    265: "278da070",
                    282: "4b948f38",
                    288: "8182e7b7",
                    310: "95f15e6b",
                    312: "cbbae3ff",
                    339: "a5d54cca",
                    392: "a2b49dfe",
                    545: "9bf4cabd",
                    558: "153052dd",
                    675: "785b101b",
                    694: "b0732081",
                    695: "7426fc3b",
                    769: "fa944281",
                    777: "4f993bbc",
                    800: "e8b52056",
                    936: "bbfd10eb",
                    958: "29030c78"
                } [t] + ".js"
            }
        }(),
        function() {
            i.miniCssF = function(t) {
                return "css/" + ({
                    12: "Main",
                    189: "sLearning",
                    242: "Materials",
                    265: "Settings",
                    288: "Portfolio",
                    310: "MasterGallery",
                    312: "EmojiDetail",
                    392: "Report",
                    558: "SkillTestReport",
                    675: "Emoji",
                    694: "HallOfFame",
                    695: "cLearning",
                    769: "SkillTest",
                    800: "iLearning",
                    936: "MyVocab"
                } [t] || t) + "." + {
                    12: "f9ca839c",
                    189: "2c162dcd",
                    242: "7de567c5",
                    265: "369259fb",
                    288: "b27730da",
                    310: "57e8a3ac",
                    312: "aabb8a80",
                    339: "3ceafa29",
                    392: "cccd2f88",
                    545: "64fed7fd",
                    558: "4f034e44",
                    675: "87c524e8",
                    694: "ea1d9a81",
                    695: "a790a8c5",
                    769: "4f034e44",
                    800: "c78f8c13",
                    936: "7be95344"
                } [t] + ".css"
            }
        }(),
        function() {
            i.g = function() {
                if ("object" === typeof globalThis) return globalThis;
                try {
                    return this || new Function("return this")()
                } catch (t) {
                    if ("object" === typeof window) return window
                }
            }()
        }(),
        function() {
            i.o = function(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }
        }(),
        function() {
            var t = {},
                e = "learningportalfrontend_cd5.0:";
            i.l = function(s, a, n, o) {
                if (t[s]) t[s].push(a);
                else {
                    var r, l;
                    if (void 0 !== n)
                        for (var c = document.getElementsByTagName("script"), d = 0; d < c.length; d++) {
                            var u = c[d];
                            if (u.getAttribute("src") == s || u.getAttribute("data-webpack") == e + n) {
                                r = u;
                                break
                            }
                        }
                    r || (l = !0, r = document.createElement("script"), r.charset = "utf-8", r.timeout = 120, i.nc && r.setAttribute("nonce", i.nc), r.setAttribute("data-webpack", e + n), r.src = s), t[s] = [a];
                    var p = function(e, i) {
                            r.onerror = r.onload = null, clearTimeout(h);
                            var a = t[s];
                            if (delete t[s], r.parentNode && r.parentNode.removeChild(r), a && a.forEach((function(t) {
                                    return t(i)
                                })), e) return e(i)
                        },
                        h = setTimeout(p.bind(null, void 0, {
                            type: "timeout",
                            target: r
                        }), 12e4);
                    r.onerror = p.bind(null, r.onerror), r.onload = p.bind(null, r.onload), l && document.head.appendChild(r)
                }
            }
        }(),
        function() {
            i.r = function(t) {
                "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            }
        }(),
        function() {
            i.p = "/cdi/"
        }(),
        function() {
            var t = function(t, e, i, s) {
                    var a = document.createElement("link");
                    a.rel = "stylesheet", a.type = "text/css";
                    var n = function(n) {
                        if (a.onerror = a.onload = null, "load" === n.type) i();
                        else {
                            var o = n && ("load" === n.type ? "missing" : n.type),
                                r = n && n.target && n.target.href || e,
                                l = new Error("Loading CSS chunk " + t + " failed.\n(" + r + ")");
                            l.code = "CSS_CHUNK_LOAD_FAILED", l.type = o, l.request = r, a.parentNode.removeChild(a), s(l)
                        }
                    };
                    return a.onerror = a.onload = n, a.href = e, document.head.appendChild(a), a
                },
                e = function(t, e) {
                    for (var i = document.getElementsByTagName("link"), s = 0; s < i.length; s++) {
                        var a = i[s],
                            n = a.getAttribute("data-href") || a.getAttribute("href");
                        if ("stylesheet" === a.rel && (n === t || n === e)) return a
                    }
                    var o = document.getElementsByTagName("style");
                    for (s = 0; s < o.length; s++) {
                        a = o[s], n = a.getAttribute("data-href");
                        if (n === t || n === e) return a
                    }
                },
                s = function(s) {
                    return new Promise((function(a, n) {
                        var o = i.miniCssF(s),
                            r = i.p + o;
                        if (e(o, r)) return a();
                        t(s, r, a, n)
                    }))
                },
                a = {
                    143: 0
                };
            i.f.miniCss = function(t, e) {
                var i = {
                    12: 1,
                    189: 1,
                    242: 1,
                    265: 1,
                    288: 1,
                    310: 1,
                    312: 1,
                    339: 1,
                    392: 1,
                    545: 1,
                    558: 1,
                    675: 1,
                    694: 1,
                    695: 1,
                    769: 1,
                    800: 1,
                    936: 1
                };
                a[t] ? e.push(a[t]) : 0 !== a[t] && i[t] && e.push(a[t] = s(t).then((function() {
                    a[t] = 0
                }), (function(e) {
                    throw delete a[t], e
                })))
            }
        }(),
        function() {
            var t = {
                143: 0
            };
            i.f.j = function(e, s) {
                var a = i.o(t, e) ? t[e] : void 0;
                if (0 !== a)
                    if (a) s.push(a[2]);
                    else if (/^(339|545)$/.test(e)) t[e] = 0;
                else {
                    var n = new Promise((function(i, s) {
                        a = t[e] = [i, s]
                    }));
                    s.push(a[2] = n);
                    var o = i.p + i.u(e),
                        r = new Error,
                        l = function(s) {
                            if (i.o(t, e) && (a = t[e], 0 !== a && (t[e] = void 0), a)) {
                                var n = s && ("load" === s.type ? "missing" : s.type),
                                    o = s && s.target && s.target.src;
                                r.message = "Loading chunk " + e + " failed.\n(" + n + ": " + o + ")", r.name = "ChunkLoadError", r.type = n, r.request = o, a[1](r)
                            }
                        };
                    i.l(o, l, "chunk-" + e, e)
                }
            }, i.O.j = function(e) {
                return 0 === t[e]
            };
            var e = function(e, s) {
                    var a, n, o = s[0],
                        r = s[1],
                        l = s[2],
                        c = 0;
                    if (o.some((function(e) {
                            return 0 !== t[e]
                        }))) {
                        for (a in r) i.o(r, a) && (i.m[a] = r[a]);
                        if (l) var d = l(i)
                    }
                    for (e && e(s); c < o.length; c++) n = o[c], i.o(t, n) && t[n] && t[n][0](), t[n] = 0;
                    return i.O(d)
                },
                s = self["webpackChunklearningportalfrontend_cd5_0"] = self["webpackChunklearningportalfrontend_cd5_0"] || [];
            s.forEach(e.bind(null, 0)), s.push = e.bind(null, s.push.bind(s))
        }();
    var s = i.O(void 0, [998], (function() {
        return i(4860)
    }));
    s = i.O(s)
})();
//# sourceMappingURL=app.700521cd.js.map
