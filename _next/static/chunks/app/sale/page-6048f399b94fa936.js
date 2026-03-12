(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [744],
  {
    895: function (e, t, a) {
      (Promise.resolve().then(a.t.bind(a, 2346, 23)),
        Promise.resolve().then(a.bind(a, 8032)),
        Promise.resolve().then(a.bind(a, 837)),
        Promise.resolve().then(a.t.bind(a, 231, 23)));
    },
    8032: function (e, t, a) {
      "use strict";
      a.d(t, {
        default: function () {
          return ef;
        },
      });
      var r = a(7437),
        n = a(2265);
      let s = (e) =>
          Object.values(e)
            .flatMap((e) => Object.values(e))
            .reduce((e, t) => e + t.tables, 0),
        l = (e, t) =>
          Math.round(
            10 *
              Object.values(e).reduce(
                (e, a) => e + (t ? a.percentage : a.tables),
                0,
              ),
          ) / 10,
        c = (e) => {
          let t = s(e);
          if (0 === t) return e;
          let a = 0;
          Object.values(e).forEach((e) => {
            Object.values(e).forEach((e) => {
              if (e.tables >= 0) {
                let r = Math.round((e.tables / t) * 1e3) / 10;
                ((e.percentage = r), (a += r));
              }
            });
          });
          let r = (1e3 - 10 * a) / 10;
          if (0 !== r) {
            let t = [];
            (Object.entries(e).forEach((e) => {
              let [a, r] = e;
              Object.entries(r).forEach((e) => {
                let [r, n] = e;
                n.percentage > 0 && t.push([a, r, n.percentage]);
              });
            }),
              t.sort((e, t) => e[2] - t[2]));
            let a = 0;
            for (; t.length > 0 && Math.abs(r) > 0.001; ) {
              let [n, s] = t[a % t.length],
                l = 0;
              (r > 0 ? (l = 0.1) : r < 0 && (l = -0.1),
                (e[n][s].percentage += l),
                (e[n][s].percentage = Math.round(10 * e[n][s].percentage) / 10),
                (r -= l),
                a++);
            }
          }
          return e;
        },
        o = (e) => {
          let t = {};
          for (let a of (Object.keys(Object.values(e)[0] || {}).forEach((e) => {
            Number(e) > 0 && (t[Number(e)] = 0);
          }),
          Object.values(e)))
            Object.entries(a).forEach((e) => {
              let [a, r] = e;
              "0" !== a && (t[Number(a)] += Number(r) || 0);
            });
          return t;
        },
        d = (e, t) => {
          let a = {};
          for (let t of Object.values(e)) a[t[0]] = 0;
          for (let t of Object.values(e)) a[t[0]] += Number(t[2]) || 0;
          for (let e of Object.values(t)) a[e[0]] += Number(e[2]) || 0;
          return a;
        },
        i = (e) => {
          switch (e) {
            case 0:
              return "일요일";
            case 1:
              return "월요일";
            case 2:
              return "화요일";
            case 3:
              return "수요일";
            case 4:
              return "목요일";
            case 5:
              return "금요일";
            case 6:
              return "토요일";
          }
        },
        u = (e) => {
          let t = new Date(
              new Date().toLocaleString("en-US", { timeZone: "Asia/Seoul" }),
            ),
            a = String(t.getMonth() + 1).padStart(2, ""),
            r = String(t.getDate()).padStart(2, "0"),
            n = i(t.getDay());
          return "<"
            .concat(a, "월 ")
            .concat(r, "일 ")
            .concat(n, " ")
            .concat(e, " 상권보고>");
        },
        m = [
          { id: 1, name: "광안" },
          { id: 2, name: "남천 / 해변시장" },
          { id: 3, name: "동래" },
          { id: 4, name: "동래롯백" },
          { id: 5, name: "온천장" },
          { id: 6, name: "서원시장" },
          { id: 7, name: "수영" },
          { id: 8, name: "문현" },
          { id: 9, name: "시청" },
          { id: 10, name: "서동" },
          { id: 11, name: "부산대" },
          { id: 12, name: "용호" },
          { id: 13, name: "구서" },
          { id: 14, name: "부곡" },
        ],
        x = ["수영", "부산대"],
        b = (e, t, a, r, n, c, i) => {
          let m = "";
          for (let e of Object.values(r))
            m += ""
              .concat(e[0], ": ")
              .concat(e[1] || 0, "T(좋은데이) / ")
              .concat(e[2] || 0, "T(부산갈매기) / ")
              .concat(e[3] || 0, "T(톡톡)\n");
          let b = "";
          for (let e of Object.values(n))
            b += ""
              .concat(e[0], ": ")
              .concat(e[1] || 0, "T(좋은데이) / ")
              .concat(e[2] || 0, "T(부산갈매기) / ")
              .concat(e[3] || 0, "T(톡톡)\n");
          let h = o(r),
            p = o(n),
            f = Object.entries(d(r, n))
              .map((e) => {
                let [t, a] = e;
                return "".concat(t, " : ").concat(a, "본");
              })
              .join("\n"),
            j = c
              .map((e) =>
                "- "
                  .concat(e.name, ": 대판팀 ")
                  .concat(e.salesTeam || 0, "명 / 행사팀 ")
                  .concat(e.eventTeam || 0, "명"),
              )
              .join("\n"),
            g = i
              .map((e) =>
                " - ".concat(e.name, " ").concat(e.quantity || 0, "박스"),
              )
              .join("\n"),
            N = ""
              .concat(u(a), "\n\n1. 점유비\n- 총 방문업소: ")
              .concat(t, "개\n- 총 테이블 수: ")
              .concat(s(e), "T\n\n가. 무학: ")
              .concat(l(e["가. 무학"], !1), "T (")
              .concat(l(e["가. 무학"], !0), "%)\n- 좋은데이: ")
              .concat(e["가. 무학"]["좋은데이"].tables, "T (")
              .concat(
                e["가. 무학"]["좋은데이"].percentage,
                "%)\n- 톡시리즈: ",
              )
              .concat(e["가. 무학"]["톡시리즈"].tables, "T (")
              .concat(
                e["가. 무학"]["톡시리즈"].percentage,
                "%)\n- 부산갈매기: ",
              )
              .concat(e["가. 무학"]["부산갈매기"].tables, "T (")
              .concat(
                e["가. 무학"]["부산갈매기"].percentage,
                "%)\n- 기타: ",
              )
              .concat(e["가. 무학"]["기타"].tables, "T (")
              .concat(
                e["가. 무학"]["기타"].percentage,
                "%)\n\n나. 하이트진로: ",
              )
              .concat(l(e["나. 하이트진로"], !1), "T (")
              .concat(l(e["나. 하이트진로"], !0), "%)\n- 참이슬: ")
              .concat(e["나. 하이트진로"]["참이슬"].tables, "T (")
              .concat(
                e["나. 하이트진로"]["참이슬"].percentage,
                "%)\n- 진로: ",
              )
              .concat(e["나. 하이트진로"]["진로"].tables, "T (")
              .concat(e["나. 하이트진로"]["진로"].percentage, "%)\n- 기타: ")
              .concat(e["나. 하이트진로"]["기타"].tables, "T (")
              .concat(
                e["나. 하이트진로"]["기타"].percentage,
                "%)\n\n다. 대선주조: ",
              )
              .concat(l(e["다. 대선주조"], !1), "T (")
              .concat(l(e["다. 대선주조"], !0), "%)\n- 대선(C1 포함): ")
              .concat(e["다. 대선주조"]["대선(C1 포함)"].tables, "T (")
              .concat(
                e["다. 대선주조"]["대선(C1 포함)"].percentage,
                "%)\n- 부산: ",
              )
              .concat(e["다. 대선주조"]["부산"].tables, "T (")
              .concat(
                e["다. 대선주조"]["부산"].percentage,
                "%)\n- 기타: ",
              )
              .concat(e["다. 대선주조"]["기타"].tables, "T (")
              .concat(e["다. 대선주조"]["기타"].percentage, "%)\n\n라. 롯데: ")
              .concat(l(e["라. 롯데"], !1), "T (")
              .concat(l(e["라. 롯데"], !0), "%)\n- 새로(살구 포함): ")
              .concat(e["라. 롯데"]["새로(살구 포함)"].tables, "T (")
              .concat(
                e["라. 롯데"]["새로(살구 포함)"].percentage,
                "%)\n- 청하(별빛청하 포함): ",
              )
              .concat(e["라. 롯데"]["청하(별빛청하 포함)"].tables, "T (")
              .concat(
                e["라. 롯데"]["청하(별빛청하 포함)"].percentage,
                "%)\n- 기타: ",
              )
              .concat(e["라. 롯데"]["기타"].tables, "T (")
              .concat(
                e["라. 롯데"]["기타"].percentage,
                "%)\n\n마. 기타 주류회사: ",
              )
              .concat(
                (function () {
                  var n = e["마. 기타 주류회사"];
                  if (!n || Object.keys(n).length === 0)
                    return "0T (0.0%)\n";
                  return Object.entries(n)
                    .map(function (r) {
                      var o = r[1] ? r[1].tables : 0;
                      var i = r[1] ? r[1].percentage : 0;
                      return "- " + r[0] + ": " + o + "T (" + i + "%)\n";
                    })
                    .join("");
                })(),
              )
              .concat(
                "\n2. 전환 및 추가주문\n\n가. 근무인원\n\n부산 갈매기 총 판매 병 수\n",
              )
              .concat(f, "\n\n나. 총 전환: ")
              .concat(h[1] || 0, "T(좋은데이) / ")
              .concat(h[2] || 0, "T(부산갈매기) / ")
              .concat(h[3] || 0, "T(톡톡)\n")
              .concat(m, "\n다. 총 추가주문: ")
              .concat(p[1] || 0, "T(좋은데이) / ")
              .concat(p[2] || 0, "T(부산갈매기) / ")
              .concat(p[3] || 0, "T(톡톡)\n")
              .concat(b, "\n");
          return (
            (N += "3. 타사 활동\n".concat(j, "\n\n")),
            x.includes(a)
              ? (N += "4. 특이사항\n- 없음\n\n5. 판촉물 재고량\n".concat(
                  g,
                  "\n",
                ))
              : (N += "4. 특이사항\n- 없음\n"),
            N
          );
        },
        h = (e, t, a) => {
          let r = p(e, t, a),
            n = s(e);
          return "<이순조SM 퇴근보고>\n1. 야간판촉지역\n광안 바닷가\n총 테이블 수 : "
            .concat(n, "\n2. 야간 음용비\n좋은데이 : ")
            .concat(e["가. 무학"]["좋은데이"].tables, "T - ")
            .concat(
              e["가. 무학"]["좋은데이"].percentage,
              "%\n좋은데이 톡시리즈 : ",
            )
            .concat(e["가. 무학"]["톡시리즈"].tables, "T - ")
            .concat(e["가. 무학"]["톡시리즈"].percentage, "%\n갈매기 : ")
            .concat(e["가. 무학"]["부산갈매기"].tables, "T - ")
            .concat(
              e["가. 무학"]["부산갈매기"].percentage,
              "%\n대선(C1 포함) : ",
            )
            .concat(e["다. 대선주조"]["대선(C1 포함)"].tables, "T - ")
            .concat(
              e["다. 대선주조"]["대선(C1 포함)"].percentage,
              "%\n부산 : ",
            )
            .concat(e["다. 대선주조"]["부산"].tables, "T - ")
            .concat(e["다. 대선주조"]["부산"].percentage, "% \n진로 : ")
            .concat(e["나. 하이트진로"]["진로"].tables, "T - ")
            .concat(e["나. 하이트진로"]["진로"].percentage, "%\n참이슬 : ")
            .concat(e["나. 하이트진로"]["참이슬"].tables, "T - ")
            .concat(e["나. 하이트진로"]["참이슬"].percentage, "%\n새로: ")
            .concat(e["라. 롯데"]["새로(살구 포함)"].tables, "T - ")
            .concat(
              e["라. 롯데"]["새로(살구 포함)"].percentage,
              "%\n청하(별빛청하 포함): ",
            )
            .concat(e["라. 롯데"]["청하(별빛청하 포함)"].tables, "T - ")
            .concat(
              e["라. 롯데"]["청하(별빛청하 포함)"].percentage,
              "%\n\n갈매기 드시던 테이블 ",
            )
            .concat(e["가. 무학"]["부산갈매기"].tables, ",\n갈매기 전/추 ")
            .concat(r.order, ",\n총 ")
            .concat(r.sale + r.order, "개입니다.");
        },
        p = (e, t, a) => {
          let r = Object.values(d(t, a)).reduce((e, t) => e + t, 0);
          return { sale: e["가. 무학"]["부산갈매기"].tables, order: r };
        };
      function f(e) {
        let {
          orders: t,
          additionalOrders: a,
          orderSums: n,
          additionalOrderSums: s,
        } = e;
        return (0, r.jsxs)("section", {
          children: [
            (0, r.jsxs)("div", {
              children: [
                (0, r.jsxs)("h3", {
                  children: [
                    "나. 총 전환: ",
                    n[1] || 0,
                    "T(좋은데이) / ",
                    n[2] || 0,
                    "T(부산갈매기) / ",
                    n[3] || 0,
                    "T(톡톡)",
                  ],
                }),
                Object.values(t).map((e, t) =>
                  (0, r.jsxs)(
                    "p",
                    {
                      children: [
                        e[0],
                        ": ",
                        e[1] || 0,
                    "T(좋은데이) / ",
                        e[2] || 0,
                    "T(부산갈매기) / ",
                        e[3] || 0,
                    "T(톡톡)",
                      ],
                    },
                    t,
                  ),
                ),
              ],
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsxs)("div", {
              children: [
                (0, r.jsxs)("h3", {
                  children: [
                    "다. 총 추가주문: ",
                    s[1] || 0,
                    "T(좋은데이) /",
                    " ",
                    s[2] || 0,
                    "T(부산갈매기) /",
                    " ",
                    s[3] || 0,
                    "T(톡톡)",
                  ],
                }),
                Object.values(a).map((e, t) =>
                  (0, r.jsxs)(
                    "p",
                    {
                      children: [
                        e[0],
                        ": ",
                        e[1] || 0,
                        "T(좋은데이) / ",
                        e[2] || 0,
                        "T(부산갈매기) / ",
                        e[3] || 0,
                        "T(톡톡)",
                      ],
                    },
                    t,
                  ),
                ),
              ],
            }),
          ],
        });
      }
      function j(e) {
        let { otherCompanyPromotions: t } = e;
        return (0, r.jsxs)("section", {
          children: [
            (0, r.jsx)("h1", {
              children: "3. 타사 활동",
            }),
            (0, r.jsx)("div", {
              children: t.map((e, t) =>
                (0, r.jsxs)(
                  "p",
                  {
                    children: [
                      "- ",
                      e.name,
                      ": 대판팀 ",
                      e.salesTeam || 0,
                      "명 / 행사팀 ",
                      e.eventTeam || 0,
                      "명",
                    ],
                  },
                  "".concat(t, "-").concat(e.name),
                ),
              ),
            }),
          ],
        });
      }
      function g(e) {
        let { promotionStocks: t } = e;
        return (0, r.jsxs)("section", {
          children: [
            (0, r.jsx)("h1", {
              children: "5. 판촉물 재고량",
            }),
            (0, r.jsx)("div", {
              children: t.map((e, t) =>
                (0, r.jsxs)(
                  "p",
                  {
                    children: ["\xa0- ", e.name, " ", e.quantity || 0, "박스"],
                  },
                  "".concat(t, "-").concat(e.name),
                ),
              ),
            }),
          ],
        });
      }
      function N(e) {
        let { bskyReport: t, totalTableNum: a, galmegiSums: n } = e;
        return (0, r.jsxs)("div", {
          className: "border border-gray-300",
          children: [
            (0, r.jsxs)("h1", { children: ["<", "이순조SM 퇴근보고", ">"] }),
            (0, r.jsxs)("section", {
              children: [
                (0, r.jsx)("h1", { children: "1. 야간판촉지역" }),
                (0, r.jsx)("p", { children: "광안 바닷가" }),
                (0, r.jsxs)("p", { children: ["총 테이블 수 : ", a] }),
              ],
            }),
            (0, r.jsxs)("section", {
              children: [
                (0, r.jsx)("h1", { children: "2. 야간 음용비" }),
                (0, r.jsxs)("p", {
                  children: [
                    "좋은데이 : ",
                    t["가. 무학"]["좋은데이"].tables,
                    "T -",
                    " ",
                    t["가. 무학"]["좋은데이"].percentage,
                    "%",
                  ],
                }),
                (0, r.jsxs)("p", {
                  children: [
                    "좋은데이 톡시리즈 : ",
                    t["가. 무학"]["톡시리즈"].tables,
                    "T -",
                    " ",
                    t["가. 무학"]["톡시리즈"].percentage,
                    "%",
                  ],
                }),
                (0, r.jsxs)("p", {
                  children: [
                    "갈매기 : ",
                    t["가. 무학"]["부산갈매기"].tables,
                    "T -",
                    " ",
                    t["가. 무학"]["부산갈매기"].percentage,
                    "%",
                  ],
                }),
                (0, r.jsxs)("p", {
                  children: [
                    "대선(C1 포함) : ",
                    t["다. 대선주조"]["대선(C1 포함)"].tables,
                    "T -",
                    " ",
                    t["다. 대선주조"]["대선(C1 포함)"].percentage,
                    "%",
                  ],
                }),
                (0, r.jsxs)("p", {
                  children: [
                    "부산 : ",
                    t["다. 대선주조"]["부산"].tables,
                    "T -",
                    " ",
                    t["다. 대선주조"]["부산"].percentage,
                    "%",
                  ],
                }),
                (0, r.jsxs)("p", {
                  children: [
                    "진로 : ",
                    t["나. 하이트진로"]["진로"].tables,
                    "T -",
                    " ",
                    t["나. 하이트진로"]["진로"].percentage,
                    "%",
                  ],
                }),
                (0, r.jsxs)("p", {
                  children: [
                    "참이슬 : ",
                    t["나. 하이트진로"]["참이슬"].tables,
                    "T -",
                    " ",
                    t["나. 하이트진로"]["참이슬"].percentage,
                    "%",
                  ],
                }),
                (0, r.jsxs)("p", {
                  children: [
                    "새로: ",
                    t["라. 롯데"]["새로(살구 포함)"].tables,
                    "T -",
                    " ",
                    t["라. 롯데"]["새로(살구 포함)"].percentage,
                    "%",
                  ],
                }),
                (0, r.jsxs)("p", {
                  children: [
                    "청하(별빛청하 포함):",
                    " ",
                    t["라. 롯데"]["청하(별빛청하 포함)"].tables,
                    "T -",
                    " ",
                    t["라. 롯데"]["청하(별빛청하 포함)"].percentage,
                    "%",
                  ],
                }),
                (0, r.jsx)("br", {}),
                (0, r.jsxs)("p", {
                  children: ["갈매기 드시던 테이블 ", n.sale, ","],
                }),
                (0, r.jsxs)("p", { children: ["갈매기 전/추 ", n.order, ","] }),
                (0, r.jsxs)("p", {
                  children: ["총 ", n.sale + n.order, "개입니다."],
                }),
              ],
            }),
          ],
        });
      }
      var v = a(1538),
        w = a(3027),
        y = a(9052);
      let k = (0, w.j)(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-neutral-300",
          {
            variants: {
              variant: {
                default:
                  "bg-neutral-900 text-neutral-50 shadow hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90",
                destructive:
                  "bg-red-500 text-neutral-50 shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-neutral-50 dark:hover:bg-red-900/90",
                outline:
                  "border border-neutral-200 bg-white shadow-sm hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",
                secondary:
                  "bg-neutral-100 text-neutral-900 shadow-sm hover:bg-neutral-100/80 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80",
                ghost:
                  "hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",
                link: "text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-50",
              },
              size: {
                default: "h-9 px-4 py-2",
                sm: "h-8 rounded-md px-3 text-xs",
                lg: "h-10 rounded-md px-8",
                icon: "h-9 w-9",
              },
            },
            defaultVariants: { variant: "default", size: "default" },
          },
        ),
        C = n.forwardRef((e, t) => {
          let { className: a, variant: n, size: s, asChild: l = !1, ...c } = e,
            o = l ? v.g7 : "button";
          return (0, r.jsx)(o, {
            className: (0, y.cn)(k({ variant: n, size: s, className: a })),
            ref: t,
            ...c,
          });
        });
      C.displayName = "Button";
      var S = a(7168),
        O = a(2421);
      let T = S.fC,
        R = n.forwardRef((e, t) => {
          let { className: a, ...n } = e;
          return (0, r.jsx)(S.ck, {
            ref: t,
            className: (0, y.cn)("border-b", a),
            ...n,
          });
        });
      R.displayName = "AccordionItem";
      let Z = n.forwardRef((e, t) => {
        let { className: a, children: n, ...s } = e;
        return (0, r.jsx)(S.h4, {
          className: "flex",
          children: (0, r.jsxs)(S.xz, {
            ref: t,
            className: (0, y.cn)(
              "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
              a,
            ),
            ...s,
            children: [
              n,
              (0, r.jsx)(O.Z, {
                className:
                  "h-4 w-4 shrink-0 text-neutral-500 transition-transform duration-200 dark:text-neutral-400",
              }),
            ],
          }),
        });
      });
      Z.displayName = S.xz.displayName;
      let E = n.forwardRef((e, t) => {
        let { className: a, children: n, ...s } = e;
        return (0, r.jsx)(S.VY, {
          ref: t,
          className:
            "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
          ...s,
          children: (0, r.jsx)("div", {
            className: (0, y.cn)("pb-4 pt-0", a),
            children: n,
          }),
        });
      });
      function z(e) {
        let {
            bskyReport: t,
            totalBisness: a,
            selectedBusinessZone: c,
            orders: o,
            additionalOrders: i,
            orderSums: m,
            additionalOrderSums: v,
            otherCompanyPromotions: w,
            promotionStocks: y,
          } = e,
          k = (0, n.useMemo)(
            () => b(t, a, c, o, i, w, y),
            [t, a, c, o, i, w, y],
          ),
          S = (0, n.useMemo)(() => h(t, o, i), [t, o, i]),
          O = (0, n.useMemo)(() => p(t, o, i), [t, o, i]),
          z = (0, n.useMemo)(() => s(t), [t]),
          D = (0, n.useMemo)(() => d(o, i), [o, i]);
        return (0, r.jsx)("div", {
          children: (0, r.jsxs)("div", {
            children: [
              (0, r.jsx)(T, {
                type: "single",
                collapsible: !0,
                children: (0, r.jsxs)(R, {
                  value: "calculation-result",
                  children: [
                    (0, r.jsx)(Z, {
                      className: "px-4",
                      children: "계산 결과 보기",
                    }),
                    (0, r.jsxs)(E, {
                      children: [
                        (0, r.jsxs)("div", {
                          className: "border border-gray-300 my-2",
                          children: [
                            (0, r.jsx)("h1", { children: u(c) }),
                            (0, r.jsx)("h2", { children: "1. 점유비" }),
                            (0, r.jsxs)("p", {
                              children: ["\xa0\xa0- 총 방문업소: ", a],
                            }),
                            (0, r.jsxs)("p", {
                              children: ["\xa0\xa0- 총 테이블 수: ", z, "T"],
                            }),
                            (0, r.jsx)("br", {}),
                            (0, r.jsxs)("section", {
                              children: [
                                Object.entries(t).map((e) => {
                                  let [a, n] = e;
                                  return (0, r.jsxs)(
                                    "div",
                                    {
                                      children: [
                                        (0, r.jsxs)("div", {
                                          className:
                                            "flex flex-row items-center",
                                          children: [
                                            (0, r.jsxs)("h3", {
                                              children: [a, ":\xa0"],
                                            }),
                                            (0, r.jsxs)("span", {
                                              children: [
                                                l(t[a], !1),
                                                "T (",
                                                l(t[a], !0),
                                                "%)",
                                              ],
                                            }),
                                          ],
                                        }),
                                        Object.entries(n).map((e) => {
                                          let [t, a] = e;
                                          return (0, r.jsxs)(
                                            "p",
                                            {
                                              children: [
                                                "\xa0\xa0- ",
                                                t,
                                                ": ",
                                                a.tables,
                                                "T (",
                                                a.percentage,
                                                "%)",
                                              ],
                                            },
                                            t,
                                          );
                                        }),
                                        (0, r.jsx)("br", {}),
                                      ],
                                    },
                                    a,
                                  );
                                }),
                              ],
                            }),
                            (0, r.jsx)("br", {}),
                            (0, r.jsx)("h2", {
                              children: "2. 전환 및 추가주문",
                            }),
                            (0, r.jsx)("br", {}),
                            (0, r.jsxs)("section", {
                              children: [
                                (0, r.jsx)("h3", { children: "가. 근무인원" }),
                                (0, r.jsx)("br", {}),
                                (0, r.jsx)("p", {
                                  children: "부산 갈매기 총 판매 병 수",
                                }),
                                Object.entries(D).map((e) => {
                                  let [t, a] = e;
                                  return (0, r.jsxs)(
                                    "p",
                                    { children: [t, " : ", a, "본"] },
                                    t,
                                  );
                                }),
                                (0, r.jsx)("br", {}),
                              ],
                            }),
                            (0, r.jsx)(f, {
                              orders: o,
                              additionalOrders: i,
                              orderSums: m,
                              additionalOrderSums: v,
                            }),
                            (0, r.jsxs)("div", {
                              children: [
                                (0, r.jsx)("br", {}),
                                (0, r.jsx)(j, { otherCompanyPromotions: w }),
                                (0, r.jsx)("br", {}),
                                (0, r.jsxs)("section", {
                                  children: [
                                    (0, r.jsx)("h1", { children: "4. 특이사항" }),
                                    (0, r.jsx)("p", { children: "- 없음" }),
                                  ],
                                }),
                                x.includes(c) &&
                                  (0, r.jsxs)(r.Fragment, {
                                    children: [
                                      (0, r.jsx)("br", {}),
                                      (0, r.jsx)(g, { promotionStocks: y }),
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }),
                        "광안" === c &&
                          (0, r.jsx)(N, {
                            bskyReport: t,
                            totalTableNum: z,
                            galmegiSums: O,
                          }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, r.jsx)(C, {
                type: "button",
                className:
                  "my-2 bg-[#A8C7FA] text-[#062E6F] font-semibold hover:text-white rounded p-2 w-full",
                onClick: () => {
                  void 0 !== window.navigator &&
                    navigator.clipboard.writeText(k).then(() => {
                      alert("클립보드에 복사했습니다.");
                    });
                },
                children: "상권 톡방용 보고 복사하기",
              }),
              "광안" === c &&
                (0, r.jsx)(C, {
                  type: "button",
                  className:
                    "my-2 bg-green-400 text-white font-semibold rounded p-2 w-full",
                  onClick: () => {
                    void 0 !== window.navigator &&
                      navigator.clipboard.writeText(S).then(() => {
                        alert("클립보드에 복사했습니다.");
                      });
                  },
                  children: "담당자님용 보고 복사하기",
                }),
            ],
          }),
        });
      }
      function D(e) {
        let { orders: t, handleOrderChange: a, removeOrderLine: n } = e;
        return (0, r.jsxs)("div", {
          className: "flex flex-col mb-2",
          children: [
            (0, r.jsxs)("div", {
              className: "flex flex-row gap-2 mb-2",
              children: [
                (0, r.jsx)("label", { className: "w-1/4", children: "이름" }),
                (0, r.jsx)("label", {
                  className: "w-1/4",
                  children: "좋은데이",
                }),
                (0, r.jsx)("label", {
                  className: "w-1/4 text-xs flex flex-col justify-center",
                  children: "부산갈매기",
                }),
                (0, r.jsx)("label", { className: "w-1/4", children: "톡톡" }),
                (0, r.jsx)("div", { className: "w-1/12" }),
              ],
            }),
            Object.keys(t).map((e) =>
              (0, r.jsxs)(
                "div",
                {
                  className: "flex flex-row gap-2 mb-2",
                  children: [
                    (0, r.jsx)("input", {
                      className:
                        "border border-gray-300 rounded p-1 w-1/4 text-black",
                      placeholder: "이름",
                      value: t[Number(e)][0] || "",
                      onChange: (t) => a(Number(e), 0, t.target.value),
                    }),
                    (0, r.jsx)("input", {
                      type: "number",
                      pattern: "\\d*",
                      className:
                        "border border-gray-300 rounded p-1 w-1/4 text-black",
                      placeholder: "0",
                      onChange: (t) => a(Number(e), 1, t.target.value),
                    }),
                    (0, r.jsx)("input", {
                      type: "number",
                      pattern: "\\d*",
                      className:
                        "border border-gray-300 rounded p-1 w-1/4 text-black",
                      placeholder: "0",
                      onChange: (t) => a(Number(e), 2, t.target.value),
                    }),
                    (0, r.jsx)("input", {
                      type: "number",
                      pattern: "\\d*",
                      className:
                        "border border-gray-300 rounded p-1 w-1/4 text-black",
                      placeholder: "0",
                      onChange: (t) => a(Number(e), 3, t.target.value),
                    }),
                    (0, r.jsx)("button", {
                      className: "bg-red-500 w-1/12 text-white rounded",
                      onClick: () => n(Number(e)),
                      children: "X",
                    }),
                  ],
                },
                e,
              ),
            ),
          ],
        });
      }
      function M(e) {
        let {
          orders: t,
          additionalOrders: a,
          handleOrderChange: n,
          addOrderLine: s,
          removeOrderLine: l,
          handleAdditionalOrderChange: c,
          orderSums: o,
          additionalOrderSums: d,
        } = e;
        return (0, r.jsxs)("div", {
          className: "border border-gray-300 rounded p-4",
          children: [
            (0, r.jsxs)("div", {
              className: "flex flex-row justify-start items-center gap-3",
              children: [
                (0, r.jsx)("h1", {
                  className: "text-lg font-bold",
                  children: "전환 및 추가주문",
                }),
                (0, r.jsx)(C, {
                  type: "button",
                  onClick: s,
                  children: "인원 추가하기",
                }),
              ],
            }),
            (0, r.jsxs)("section", {
              className: "mb-4 text-sm",
              children: [
                (0, r.jsxs)("h2", {
                  className: "py-2 font-bold",
                  children: [
                    "전환: ",
                    o[1],
                    "T(좋은데이)/",
                    o[2],
                    "T(부산갈매기)/",
                    o[3],
                    "T(톡톡)",
                  ],
                }),
                (0, r.jsx)(D, {
                  orders: t,
                  handleOrderChange: n,
                  removeOrderLine: l,
                }),
              ],
            }),
            (0, r.jsxs)("section", {
              className: "mb-4 text-sm",
              children: [
                (0, r.jsxs)("h2", {
                  className: "py-2 font-bold",
                  children: [
                    "추가주문: ",
                    d[1],
                    "T(좋은데이)/",
                    d[2],
                    "T(부산갈매기)/",
                    d[3],
                    "T(톡톡)",
                  ],
                }),
                (0, r.jsx)(D, {
                  orders: a,
                  handleOrderChange: c,
                  removeOrderLine: l,
                }),
              ],
            }),
          ],
        });
      }
      E.displayName = S.VY.displayName;
      let _ = { 0: "", 1: 0, 2: 0, 3: 0 },
        P = [
          { name: "헛개밸런스", quantity: void 0 },
          { name: "청춘케어", quantity: void 0},
          { name: "물티슈", quantity: void 0 },
          { name: "쫀디기", quantity: void 0 },
        ],
        q = [
          {
            name: "하이트진로",
            salesTeam: void 0,
            eventTeam: void 0,
          },
          {
            name: "대선주조",
            salesTeam: void 0,
            eventTeam: void 0,
          },
          {
            name: "롯데주류",
            salesTeam: void 0,
            eventTeam: void 0,
          },
        ],
        F = {
          "가. 무학": {
            좋은데이: { tables: 0, percentage: 0 },
            톡시리즈: { tables: 0, percentage: 0 },
            부산갈매기: { tables: 0, percentage: 0 },
            기타: { tables: 0, percentage: 0 },
          },
          "나. 하이트진로": {
            참이슬: { tables: 0, percentage: 0 },
            진로: { tables: 0, percentage: 0 },
            기타: { tables: 0, percentage: 0 },
          },
          "다. 대선주조": {
            "대선(C1 포함)": { tables: 0, percentage: 0 },
            부산: { tables: 0, percentage: 0 },
            기타: { tables: 0, percentage: 0 },
          },
          "라. 롯데": {
            "새로(살구 포함)": { tables: 0, percentage: 0 },
            "청하(별빛청하 포함)": { tables: 0, percentage: 0 },
            기타: { tables: 0, percentage: 0 },
          },
        },
        Qb = [{ name: "", tables: void 0 }];
      function V(e) {
        let { selectedBusinessZone: t, handleSelectBusinessZone: a } = e,
          [s, l] = (0, n.useState)(!1),
          c = (e) => {
            (a(e), l(!1));
          };
        return (0, r.jsxs)("div", {
          className: "relative",
          children: [
            (0, r.jsxs)("button", {
              onClick: () => l(!s),
              className:
                "flex justify-between items-center text-sm border border-gray-300 rounded p-1 text-black w-32 text-left",
              children: [
                t || "상권을 선택해주세요.",
                (0, r.jsx)(O.Z, {
                  className: "transition-transform duration-200 ".concat(
                    s ? "rotate-180" : "rotate-0",
                  ),
                }),
              ],
            }),
            s &&
              (0, r.jsx)("ul", {
                className:
                  "absolute w-32 border border-gray-300 bg-white max-h-80 overflow-y-auto rounded shadow-md mt-1",
                children: m.map((e) =>
                  (0, r.jsx)(
                    "li",
                    {
                      onClick: () => c(e.name),
                      className: "p-2 text-sm hover:bg-gray-200 cursor-pointer",
                      children: e.name,
                    },
                    e.id,
                  ),
                ),
              }),
          ],
        });
      }
      function A(e) {
        let {
            companyName: t,
            handleOtherCompanyPromotion: s,
          } = e,
          [l, c] = (0, n.useState)(),
          [o, d] = (0, n.useState)(),
          i = (e) => {
            let a = parseInt(e),
              r = Number.isNaN(a) ? void 0 : a;
            (c(r), s({ name: t, salesTeam: r || 0, eventTeam: o || 0 }));
          },
          u = (e) => {
            let a = parseInt(e),
              r = Number.isNaN(a) ? void 0 : a;
            (d(r), s({ name: t, salesTeam: l || 0, eventTeam: r || 0 }));
          };
        return (0, r.jsxs)("div", {
          className: "flex flex-row gap-2 items-center align-middle py-1.5",
          children: [
            (0, r.jsxs)("div", {
              className: "flex flex-row items-center align-middle",
              children: [
                (0, r.jsx)("span", {
                  className: "whitespace-nowrap pr-1",
                  children: t,
                }),
                (0, r.jsx)("span", {
                  className: "whitespace-nowrap pr-1",
                  children: "대판팀",
                }),
                (0, r.jsx)("input", {
                  type: "number",
                  pattern: "\\d*",
                  className:
                    "border border-gray-300 rounded p-1 w-[60px] text-black",
                  value: void 0 !== l ? l : "",
                  placeholder: "0",
                  onChange: (e) => i(e.target.value),
                }),
                (0, r.jsx)("span", { children: "명" }),
              ],
            }),
            (0, r.jsxs)("div", {
              className: "flex flex-row items-center align-middle",
              children: [
                (0, r.jsx)("span", {
                  className: "whitespace-nowrap pr-1",
                  children: "행사팀",
                }),
                (0, r.jsx)("input", {
                  type: "number",
                  pattern: "\\d*",
                  className:
                    "border border-gray-300 rounded p-1 w-[60px] text-black",
                  value: void 0 !== o ? o : "",
                  placeholder: "0",
                  onChange: (e) => u(e.target.value),
                }),
                (0, r.jsx)("span", { children: "명" }),
              ],
            }),
          ],
        });
      }
      function L(e) {
        let { otherCompanyPromotions: t, handleOtherCompanyPromotion: a } = e;
        return (0, r.jsxs)("section", {
          className:
            "border border-gray-300 rounded p-4 w-full text-black mt-4",
          children: [
            (0, r.jsx)("h1", {
              className: "text-lg font-bold",
              children: "타사 활동",
            }),
            t.map((e, t) =>
              (0, r.jsx)(
                A,
                {
                  companyName: e.name,
                  handleOtherCompanyPromotion: a,
                },
                t,
              ),
            ),
          ],
        });
      }
      function B(e) {
        let { promotionStocks: t, handlePromotionStockChange: a } = e,
          [s, l] = (0, n.useState)(t),
          c = (e) => {
            if (e > -1 && e < s.length) {
              let t = [...s];
              (t.splice(e, 1), l(t), a(t));
            }
          },
          o = (e, t) => {
            let r = [...s];
            ((r[t] = { ...r[t], name: e }), l(r), a(r));
          },
          d = (e, t) => {
            let r = [...s],
              n = "" === e ? 0 : parseFloat(e);
            ((r[t] = { ...r[t], quantity: n }), l(r), a(r));
          };
        return (0, r.jsxs)("section", {
          className:
            "border border-gray-300 rounded p-4 w-full text-black mt-4",
          children: [
            (0, r.jsxs)("div", {
              className: "flex flex-row items-center gap-3 mb-2",
              children: [
                (0, r.jsx)("h1", {
                  className: "text-lg font-bold",
                  children: "자사 판촉물 재고량",
                }),
                (0, r.jsx)("button", {
                  type: "button",
                  className: "bg-sky-500 text-white rounded p-1",
                  onClick: () => {
                    let e = [...s, { name: "", quantity: void 0 }];
                    (l(e), a(e));
                  },
                  children: "판촉물 추가하기",
                }),
              ],
            }),
            s.map((e, t) =>
              (0, r.jsxs)(
                "div",
                {
                  className: "flex flex-row justify-between items-center mb-2",
                  children: [
                    (0, r.jsx)("input", {
                      type: "text",
                      className:
                        "border border-gray-300 rounded p-1 w-1/2 text-black",
                      value: e.name,
                      onChange: (e) => o(e.target.value, t),
                    }),
                    (0, r.jsx)("input", {
                      type: "number",
                      className:
                        "border border-gray-300 rounded p-1 w-1/4 text-black",
                      placeholder: "0",
                      value: void 0 === e.quantity ? "" : e.quantity,
                      onChange: (e) => d(e.target.value, t),
                    }),
                    (0, r.jsx)("button", {
                      type: "button",
                      className: "ml-2 p-1 bg-red-500 text-white rounded",
                      onClick: () => c(t),
                      children: "삭제",
                    }),
                  ],
                },
                t,
              ),
            ),
          ],
        });
      }
      function Uc(e) {
        let { otherDrinks: t, handleOtherDrinks: a } = e,
          s = (e) => {
            if (e > -1 && e < t.length) {
              let r = [...t];
              (r.splice(e, 1), a(r));
            }
          },
          l = (e, r) => {
            let n = [...t];
            ((n[r] = { ...n[r], name: e }), a(n));
          },
          c = (e, r) => {
            let n = [...t],
              o = "" === e ? void 0 : parseInt(e, 10);
            ((n[r] = { ...n[r], tables: "" === e || Number.isNaN(o) ? void 0 : o }), a(n));
          };
        return (0, r.jsxs)("section", {
          className:
            "mb-4 border border-gray-300 p-2",
          children: [
            (0, r.jsxs)("div", {
              className: "flex flex-row items-center gap-3 mb-2",
              children: [
                (0, r.jsx)("h1", {
                  className: "text-lg",
                  children: "마. 기타 주류회사",
                }),
                (0, r.jsx)("button", {
                  type: "button",
                  className: "bg-sky-500 text-white rounded p-1 text-sm",
                  onClick: () => {
                    a([...t, { name: "", tables: void 0 }]);
                  },
                  children: "제품 추가하기",
                }),
              ],
            }),
            t.map((e, n) =>
              (0, r.jsxs)(
                "div",
                {
                  className: "flex flex-row flex-nowrap justify-between items-center mb-2",
                  children: [
                    (0, r.jsx)("input", {
                      type: "text",
                      className:
                        "border border-gray-300 rounded p-1 w-24 max-w-[30%] text-black flex-shrink-0",
                      placeholder: "제품명",
                      value: e.name || "",
                      onChange: (e) => l(e.target.value, n),
                    }),
                    (0, r.jsx)("input", {
                      type: "number",
                      pattern: "\\d*",
                      className:
                        "border border-gray-300 rounded p-1 w-1/4 text-black",
                      placeholder: "0",
                      value: void 0 === e.tables ? "" : e.tables,
                      onChange: (e) => c(e.target.value, n),
                    }),
                    (0, r.jsx)("span", { children: "T", className: "flex-shrink-0" }),
                    (0, r.jsx)("button", {
                      type: "button",
                      className: "ml-2 p-1 bg-red-500 text-white rounded flex-shrink-0",
                      onClick: () => s(n),
                      children: "삭제",
                    }),
                  ],
                },
                n,
              ),
            ),
          ],
        });
      }
      let I = n.forwardRef((e, t) => {
        let { className: a, ...n } = e;
        return (0, r.jsx)("div", {
          ref: t,
          className: (0, y.cn)(
            "rounded-xl border border-neutral-200 bg-white text-neutral-950 shadow dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50",
            a,
          ),
          ...n,
        });
      });
      I.displayName = "Card";
      let $ = n.forwardRef((e, t) => {
        let { className: a, ...n } = e;
        return (0, r.jsx)("div", {
          ref: t,
          className: (0, y.cn)("flex flex-col space-y-1.5 p-6", a),
          ...n,
        });
      });
      $.displayName = "CardHeader";
      let Y = n.forwardRef((e, t) => {
        let { className: a, ...n } = e;
        return (0, r.jsx)("div", {
          ref: t,
          className: (0, y.cn)("font-semibold leading-none tracking-tight", a),
          ...n,
        });
      });
      ((Y.displayName = "CardTitle"),
        (n.forwardRef((e, t) => {
          let { className: a, ...n } = e;
          return (0, r.jsx)("div", {
            ref: t,
            className: (0, y.cn)(
              "text-sm text-neutral-500 dark:text-neutral-400",
              a,
            ),
            ...n,
          });
        }).displayName = "CardDescription"));
      let H = n.forwardRef((e, t) => {
        let { className: a, ...n } = e;
        return (0, r.jsx)("div", {
          ref: t,
          className: (0, y.cn)("p-6 pt-0", a),
          ...n,
        });
      });
      function U(e) {
        let { className: t, ...a } = e;
        return (0, r.jsx)("div", {
          className: (0, y.cn)(
            "animate-pulse rounded-md bg-neutral-900/10 dark:bg-neutral-50/10",
            t,
          ),
          ...a,
        });
      }
      function W() {
        return (0, r.jsxs)("div", {
          className: "space-y-2",
          children: [
            (0, r.jsx)(U, { className: "h-10 w-full" }),
            (0, r.jsx)(U, { className: "h-10 w-full" }),
            (0, r.jsx)(U, { className: "h-10 w-full" }),
          ],
        });
      }
      ((H.displayName = "CardContent"),
        (n.forwardRef((e, t) => {
          let { className: a, ...n } = e;
          return (0, r.jsx)("div", {
            ref: t,
            className: (0, y.cn)("flex items-center p-6 pt-0", a),
            ...n,
          });
        }).displayName = "CardFooter"),
        a(4590));
      var X = a(8064),
        G = (0, X.$)("47e1bd1597c696b8f1116dd51ab3491e5c6de155"),
        J = (0, X.$)("b94f216d1dfb7aeb043175221b94fe0522be0e23"),
        K = (0, X.$)("a119bfac6c1aa42eb567c881a9a85978f9d0d9b3"),
        Q = (0, X.$)("80aa405da5330452cc91bed9c862ab7d003323a4"),
        ee = a(883);
      function et(e) {
        let { shop: t, onDelete: a } = e,
          [s, l] = (0, n.useState)(!1),
          c = async () => {
            confirm(
              "".concat(
                t.name,
                "을(를) 삭제하시겠어요?\n타 상권 업소를 삭제하지 말아 주세요.",
              ),
            ) && ((await G(t.id)) ? (a(), l(!1)) : l(!0));
          };
        return (0, r.jsxs)("div", {
          children: [
            (0, r.jsx)(C, {
              variant: "outline",
              size: "icon",
              type: "button",
              onClick: c,
              className:
                "bg-red-500 text-white hover:bg-red-400 hover:text-white",
              children: (0, r.jsx)(ee.Z, {}),
            }),
            s &&
              (0, r.jsx)("p", {
                className: "text-red-500",
                children: "삭제에 실패했습니다.",
              }),
          ],
        });
      }
      let ea = n.forwardRef((e, t) => {
        let { className: a, ...n } = e;
        return (0, r.jsx)("div", {
          className: "relative w-full overflow-auto",
          children: (0, r.jsx)("table", {
            ref: t,
            className: (0, y.cn)("w-full caption-bottom text-sm", a),
            ...n,
          }),
        });
      });
      ea.displayName = "Table";
      let er = n.forwardRef((e, t) => {
        let { className: a, ...n } = e;
        return (0, r.jsx)("thead", {
          ref: t,
          className: (0, y.cn)("[&_tr]:border-b", a),
          ...n,
        });
      });
      er.displayName = "TableHeader";
      let en = n.forwardRef((e, t) => {
        let { className: a, ...n } = e;
        return (0, r.jsx)("tbody", {
          ref: t,
          className: (0, y.cn)("[&_tr:last-child]:border-0", a),
          ...n,
        });
      });
      ((en.displayName = "TableBody"),
        (n.forwardRef((e, t) => {
          let { className: a, ...n } = e;
          return (0, r.jsx)("tfoot", {
            ref: t,
            className: (0, y.cn)(
              "border-t bg-neutral-100/50 font-medium [&>tr]:last:border-b-0 dark:bg-neutral-800/50",
              a,
            ),
            ...n,
          });
        }).displayName = "TableFooter"));
      let es = n.forwardRef((e, t) => {
        let { className: a, ...n } = e;
        return (0, r.jsx)("tr", {
          ref: t,
          className: (0, y.cn)(
            "border-b transition-colors hover:bg-neutral-100/50 data-[state=selected]:bg-neutral-100 dark:hover:bg-neutral-800/50 dark:data-[state=selected]:bg-neutral-800",
            a,
          ),
          ...n,
        });
      });
      es.displayName = "TableRow";
      let el = n.forwardRef((e, t) => {
        let { className: a, ...n } = e;
        return (0, r.jsx)("th", {
          ref: t,
          className: (0, y.cn)(
            "h-10 px-2 text-left align-middle font-medium text-neutral-500 [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] dark:text-neutral-400",
            a,
          ),
          ...n,
        });
      });
      el.displayName = "TableHead";
      let ec = n.forwardRef((e, t) => {
        let { className: a, ...n } = e;
        return (0, r.jsx)("td", {
          ref: t,
          className: (0, y.cn)(
            "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
            a,
          ),
          ...n,
        });
      });
      ((ec.displayName = "TableCell"),
        (n.forwardRef((e, t) => {
          let { className: a, ...n } = e;
          return (0, r.jsx)("caption", {
            ref: t,
            className: (0, y.cn)(
              "mt-4 text-sm text-neutral-500 dark:text-neutral-400",
              a,
            ),
            ...n,
          });
        }).displayName = "TableCaption"));
      let eo = n.forwardRef((e, t) => {
        let { className: a, type: n, ...s } = e;
        return (0, r.jsx)("input", {
          type: n,
          className: (0, y.cn)(
            "flex h-9 w-full rounded-md border border-neutral-200 bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-950 placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-neutral-800 dark:file:text-neutral-50 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300",
            a,
          ),
          ref: t,
          ...s,
        });
      });
      eo.displayName = "Input";
      var ed = a(3274),
        ei = a(2468),
        eu = a(4697);
      function em(e) {
        let { businessZone: t, shopList: a, onFetch: s, isLoading: l } = e,
          [c, o] = (0, n.useState)(null),
          [d, i] = (0, n.useState)(""),
          [u, m] = (0, n.useState)(!1),
          x = (0, n.useRef)(null),
          [b, h] = (0, n.useState)(!1),
          p = (e, t) => {
            (o(e), i(t), m(!1));
          },
          f = async (e, t) => {
            if (
              d !== t &&
              confirm(
                "".concat(
                  d,
                  "(으)로 수정하시겠어요?\n타 상권 업소를 수정하지 말아 주세요.",
                ),
              ) &&
              "" !== d.trim()
            ) {
              let t = { ...a[e], name: d };
              (h(!0), (await Q(t.id, t.name)) && (await s()));
            }
            (h(!1), o(null), m(!1));
          },
          j = () => {
            (o(null), m(!1));
          };
        return (
          (0, n.useEffect)(() => {
            null !== c && x.current && x.current.focus();
          }, [c]),
          (0, r.jsxs)(I, {
            className: "mt-2 mb-4 border border-gray-300 w-full max-w-full",
            children: [
              (0, r.jsxs)($, {
                className: "pb-2",
                children: [
                  (0, r.jsxs)(Y, {
                    className: "text-lg font-medium",
                    children: ["<", "갈매기 16", ">", "입고 업소 리스트"],
                  }),
                  (0, r.jsxs)("p", {
                    className: "text-sm text-muted-foreground",
                    children: ["상권명: ", t],
                  }),
                ],
              }),
              (0, r.jsx)(H, {
                className: "p-0",
                children: l
                  ? (0, r.jsx)(W, {})
                  : a.length > 0
                    ? (0, r.jsxs)(ea, {
                        children: [
                          (0, r.jsx)(er, {
                            children: (0, r.jsxs)(es, {
                              children: [
                                (0, r.jsx)(el, {
                                  className: "w-12",
                                  children: "번호",
                                }),
                                (0, r.jsx)(el, { children: "업소명" }),
                                (0, r.jsx)(el, {
                                  className: "text-right",
                                  children: "관리",
                                }),
                              ],
                            }),
                          }),
                          (0, r.jsx)(en, {
                            children: a.map((e, t) =>
                              (0, r.jsxs)(
                                es,
                                {
                                  children: [
                                    (0, r.jsx)(ec, {
                                      className: "font-medium",
                                      children: t + 1,
                                    }),
                                    (0, r.jsx)(ec, {
                                      children:
                                        c === t
                                          ? (0, r.jsx)("div", {
                                              className: "py-3 px-4",
                                              children: (0, r.jsxs)("div", {
                                                className: "relative",
                                                children: [
                                                  (0, r.jsx)(eo, {
                                                    ref: x,
                                                    value: d,
                                                    onChange: (e) =>
                                                      i(e.target.value),
                                                    onFocus: () => m(!0),
                                                    disabled: b,
                                                    className:
                                                      "border-0 shadow-none focus-visible:ring-1 focus-visible:ring-offset-0 h-7 px-2 py-0 rounded bg-muted/30 focus-visible:bg-background",
                                                  }),
                                                  (0, r.jsxs)("div", {
                                                    className:
                                                      "mt-1 flex justify-end space-x-1 overflow-hidden transition-all duration-200 ease-in-out ".concat(
                                                        u
                                                          ? "max-h-8 opacity-100"
                                                          : "max-h-0 opacity-0",
                                                      ),
                                                    children: [
                                                      (0, r.jsx)(C, {
                                                        size: "sm",
                                                        variant: "outline",
                                                        onClick: () =>
                                                          f(t, e.name),
                                                        disabled: b,
                                                        className:
                                                          "h-7 px-2 py-0 text-xs",
                                                        children: b
                                                          ? (0, r.jsx)(ed.Z, {
                                                              className:
                                                                "animate-spin",
                                                            })
                                                          : (0, r.jsxs)(
                                                              r.Fragment,
                                                              {
                                                                children: [
                                                                  (0, r.jsx)(
                                                                    ei.Z,
                                                                    {
                                                                      className:
                                                                        "h-3.5 w-3.5 mr-1",
                                                                    },
                                                                  ),
                                                                  "저장",
                                                                ],
                                                              },
                                                            ),
                                                      }),
                                                      (0, r.jsxs)(C, {
                                                        size: "sm",
                                                        variant: "ghost",
                                                        onClick: j,
                                                        className:
                                                          "h-7 px-2 py-0 text-xs",
                                                        children: [
                                                          (0, r.jsx)(eu.Z, {
                                                            className:
                                                              "h-3.5 w-3.5 mr-1",
                                                          }),
                                                          "취소",
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            })
                                          : (0, r.jsx)("div", {
                                              className:
                                                "cursor-pointer py-3 px-4 hover:bg-muted/50 rounded transition-colors",
                                              onClick: () => p(t, e.name),
                                              children: e.name,
                                            }),
                                    }),
                                    (0, r.jsx)(ec, {
                                      className: "text-right",
                                      children: (0, r.jsx)(et, {
                                        shop: e,
                                        onDelete: () => s(),
                                      }),
                                    }),
                                  ],
                                },
                                "shop-".concat(e.id),
                              ),
                            ),
                          }),
                        ],
                      })
                    : (0, r.jsx)("p", {
                        className: "text-center py-4 text-muted-foreground",
                        children: "없음",
                      }),
              }),
            ],
          })
        );
      }
      var ex = function (e) {
        let { businessZone: t, onAdd: a } = e,
          [s, l] = (0, n.useState)(""),
          [c, o] = (0, n.useState)(!1),
          [d, i] = (0, n.useState)(!1),
          [u, m] = (0, n.useState)(!1),
          x = (e) => {
            l(e);
          },
          b = async (e) => {
            e.preventDefault();
            let r = s.replace(/\s+/g, "");
            if (0 === s.length || 0 === r.length) {
              (m(!0), l(""));
              return;
            }
            (m(!1),
              o(!0),
              (await K(t, s)) ? (a(), i(!1)) : i(!0),
              o(!1),
              l(""));
          };
        return (0, r.jsxs)("form", {
          onSubmit: (e) => b(e),
          className: "",
          children: [
            (0, r.jsx)("input", {
              className: "border rounded p-1 w-1/2 mr-2 text-black ".concat(
                u ? "border-red-400 border-2" : "border-gray-300",
              ),
              placeholder: "업소명",
              value: s,
              onChange: (e) => x(e.target.value),
            }),
            (0, r.jsx)("button", {
              type: "submit",
              className: "my-2 bg-blue-500 text-white rounded p-2",
              children: "추가",
            }),
            c && (0, r.jsx)("p", { children: "추가 중..." }),
            d &&
              (0, r.jsx)("p", {
                className: "text-red-500",
                children: "저장에 실패했습니다.",
              }),
            u &&
              (0, r.jsx)("p", {
                className: "text-red-500",
                children: "업소명을 입력해주세요.",
              }),
          ],
        });
      };
      let eb = (e, t) => {
        let a = t
          .map((e, t) => "".concat(t + 1, ". ").concat(e.name))
          .join("\n");
        return (
          0 === a.length && (a = "없음"),
          "<갈매기 16>입고 업소 리스트\n상권명 : ".concat(e, "\n").concat(a)
        );
      };
      function eh(e) {
        let { businessZone: t } = e,
          [a, s] = (0, n.useState)([]),
          [l, c] = (0, n.useState)(!1),
          o = async () => {
            c(!0);
            let e = await J(t);
            (e && s(e), c(!1));
          };
        return (
          (0, n.useEffect)(() => {
            o();
          }, [t]),
          (0, r.jsxs)("section", {
            children: [
              (0, r.jsx)(em, {
                businessZone: t,
                shopList: a,
                onFetch: () => o(),
                isLoading: l,
              }),
              (0, r.jsx)(ex, { businessZone: t, onAdd: () => o() }),
              (0, r.jsx)(C, {
                type: "button",
                className:
                  "my-2 bg-cyan-500 hover:bg-[#2098ad] text-white font-semibold rounded p-2 w-full",
                onClick: () => {
                  if (void 0 !== window.navigator) {
                    let e = eb(t, a);
                    navigator.clipboard.writeText(e).then(() => {
                      alert("클립보드에 복사했습니다.");
                    });
                  }
                },
                disabled: l,
                children: l
                  ? (0, r.jsx)(ed.Z, { className: "animate-spin" })
                  : "갈매기 보고 복사하기",
              }),
            ],
          })
        );
      }
      var ep = (0, X.$)("36a102d824da01ef21c767a501157303177e2a77");
      function ef() {
        let [e, t] = (0, n.useState)(F),
          [a, s] = (0, n.useState)(!1),
          [l, d] = (0, n.useState)(0),
          [i, u] = (0, n.useState)({}),
          [b, h] = (0, n.useState)({}),
          [p, f] = (0, n.useState)(1),
          [j, g] = (0, n.useState)(m[0].name),
          [N, v] = (0, n.useState)(o(i)),
          [w, y] = (0, n.useState)(o(b)),
          [k, S] = (0, n.useState)(q),
          [O, T] = (0, n.useState)(P),
          [U, Ua] = (0, n.useState)(Qb),
          [R, Z] = (0, n.useState)(!1),
          [E, D] = (0, n.useState)({ show: !1, message: "" }),
          A = (0, n.useRef)(null);
        ((0, n.useEffect)(() => {
          v(o(i));
        }, [i]),
          (0, n.useEffect)(() => {
            y(o(b));
          }, [b]));
        let I = (e, a, r) => {
            t((t) => ({
              ...t,
              [e]: { ...t[e], [a]: { ...t[e][a], tables: Number(r) } },
            }));
          },
          $ = (e) => {
            let t = Number(e);
            if (Number.isNaN(t)) {
              D((e) => ({ ...e, show: !0, message: "숫자를 입력해주세요." }));
              return;
            }
            (d(t), D((e) => ({ ...e, show: !1, message: "" })));
          },
          Y = async () => {
            if (l <= 0) {
              var a, r;
              (D((e) => ({
                ...e,
                show: !0,
                message: "방문업소 수를 입력해주세요.",
              })),
                null === (a = A.current) ||
                  void 0 === a ||
                  a.scrollIntoView({ behavior: "smooth", block: "center" }),
                null === (r = A.current) || void 0 === r || r.focus());
              return;
            }
            D((e) => ({ ...e, show: !1, message: "" }));
            let n = { ...e };
            n["마. 기타 주류회사"] = {};
            U.forEach((e) => {
              let t = (e.name || "").trim();
              if (t) {
                n["마. 기타 주류회사"][t] = {
                  tables: Number(e.tables) || 0,
                  percentage: 0,
                };
              }
            });
            n = c(n);
            (t(n), s(!0), Z(!0));
            let o = Object.values(i)
              .map((e) => e["0"])
              .join(",");
            (await ep(j, l, n, o, i, b), Z(!1));
          };
        return (0, r.jsxs)("div", {
          className: "p-4 max-w-[500px]",
          children: [
            (0, r.jsxs)("section", {
              className: "flex flex-col mb-4",
              children: [
                (0, r.jsxs)("label", {
                  className: "text-lg mb-1 flex items-center",
                  children: [
                    "총 방문업소:",
                    (0, r.jsx)("input", {
                      ref: A,
                      type: "number",
                      pattern: "\\d*",
                      className:
                        "ml-2 border border-gray-300 rounded p-1 text-black",
                      placeholder: "0",
                      onChange: (e) => $(e.target.value),
                    }),
                    (0, r.jsx)("span", { className: "ml-1", children: "개" }),
                  ],
                }),
                E.show &&
                  (0, r.jsx)("p", {
                    className: "text-sm text-red-600 mt-1",
                    children: E.message,
                  }),
              ],
            }),
            (0, r.jsxs)("section", {
              className: "flex flex-row mb-4 items-center",
              children: [
                (0, r.jsx)("h1", {
                  className: "text-lg pr-2",
                  children: "상권 선택: ",
                }),
                (0, r.jsx)(V, {
                  selectedBusinessZone: j,
                  handleSelectBusinessZone: (e) => {
                    g(e);
                  },
                }),
              ],
            }),
            (0, r.jsxs)("form", {
              onSubmit: (e) => {
                (e.preventDefault(), Y());
              },
              children: [
                Object.entries(F).map((e, t) => {
                  let [a, n] = e;
                  return (0, r.jsxs)(
                    "section",
                    {
                      className: "mb-4 border border-gray-300 p-2",
                      children: [
                        (0, r.jsx)("h1", { className: "text-lg", children: a }),
                        Object.keys(n).map((e, t) =>
                          (0, r.jsxs)(
                            "div",
                            {
                              className: "mt-2",
                              children: [
                                (0, r.jsxs)("span", {
                                  className: "pr-1",
                                  children: [e, ":"],
                                }),
                                (0, r.jsx)("input", {
                                  type: "number",
                                  pattern: "\\d*",
                                  className:
                                    "border border-gray-300 rounded p-1 w-1/2 text-black",
                                  placeholder: "0",
                                  onChange: (t) => I(a, e, t.target.value),
                                }),
                                "T",
                              ],
                            },
                            "drink-".concat(t),
                          ),
                        ),
                      ],
                    },
                    "company-".concat(t),
                  );
                }),
                (0, r.jsx)(Uc, {
                  otherDrinks: U,
                  handleOtherDrinks: Ua,
                }),
                (0, r.jsx)(M, {
                  orders: i,
                  additionalOrders: b,
                  handleOrderChange: (e, t, a) => {
                    let r = Number(a);
                    (u((n) => ({
                      ...n,
                      [e]: { ...n[e], [t]: 0 === t ? a : r },
                    })),
                      0 === t &&
                        h((r) => ({ ...r, [e]: { ...r[e], [t]: a } })));
                  },
                  addOrderLine: () => {
                    (u((e) => ({ ...e, [p]: _ })),
                      h((e) => ({ ...e, [p]: _ })),
                      f(p + 1));
                  },
                  removeOrderLine: (e) => {
                    (u((t) => {
                      let a = { ...t };
                      return (delete a[e], a);
                    }),
                      h((t) => {
                        let a = { ...t };
                        return (delete a[e], a);
                      }));
                  },
                  handleAdditionalOrderChange: (e, t, a) => {
                    let r = Number(a);
                    (h((n) => ({
                      ...n,
                      [e]: { ...n[e], [t]: 0 === t ? a : r },
                    })),
                      0 === t &&
                        u((r) => ({ ...r, [e]: { ...r[e], [t]: a } })));
                  },
                  orderSums: N,
                  additionalOrderSums: w,
                }),
                (0, r.jsx)(L, {
                  otherCompanyPromotions: k,
                  handleOtherCompanyPromotion: (e) => {
                    S((t) => {
                      let a = t.findIndex((t) => t.name === e.name);
                      if (-1 === a) return [...t, e];
                      {
                        let r = [...t];
                        return ((r[a] = e), r);
                      }
                    });
                  },
                }),
                x.includes(j) &&
                  (0, r.jsx)(B, {
                    promotionStocks: O,
                    handlePromotionStockChange: (e) => {
                      T(e);
                    },
                  }),
                (0, r.jsx)("p", {
                  className: "text-xs text-gray-600",
                  children: '⚠️테이블 수를 수정했다면 "계산하기"를 눌러주세요.',
                }),
                (0, r.jsx)(C, {
                  type: "submit",
                  className:
                    "my-2 bg-[#3967b3] hover:bg-[#3871cc] text-white font-semibold rounded p-2 w-full",
                  disabled: R,
                  children: R
                    ? (0, r.jsx)(ed.Z, { className: "animate-spin" })
                    : "계산하기",
                }),
              ],
            }),
            a &&
              (0, r.jsx)(z, {
                bskyReport: e,
                totalBisness: l,
                selectedBusinessZone: j,
                orders: i,
                additionalOrders: b,
                orderSums: N,
                additionalOrderSums: w,
                otherCompanyPromotions: k,
                promotionStocks: O,
              }),
            (0, r.jsx)(eh, { businessZone: j }),
          ],
        });
      }
    },
    837: function (e, t, a) {
      "use strict";
      a.d(t, {
        Dialog: function () {
          return o;
        },
        DialogContent: function () {
          return m;
        },
        DialogTrigger: function () {
          return d;
        },
      });
      var r = a(7437),
        n = a(2265),
        s = a(1332),
        l = a(4697),
        c = a(9052);
      let o = s.fC,
        d = s.xz,
        i = s.h_;
      s.x8;
      let u = n.forwardRef((e, t) => {
        let { className: a, ...n } = e;
        return (0, r.jsx)(s.aV, {
          ref: t,
          className: (0, c.cn)(
            "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            a,
          ),
          ...n,
        });
      });
      u.displayName = s.aV.displayName;
      let m = n.forwardRef((e, t) => {
        let { className: a, children: n, ...o } = e;
        return (0, r.jsxs)(i, {
          children: [
            (0, r.jsx)(u, {}),
            (0, r.jsxs)(s.VY, {
              ref: t,
              className: (0, c.cn)(
                "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-neutral-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg dark:border-neutral-800 dark:bg-neutral-950",
                a,
              ),
              ...o,
              children: [
                n,
                (0, r.jsxs)(s.x8, {
                  className:
                    "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-neutral-100 data-[state=open]:text-neutral-500 dark:ring-offset-neutral-950 dark:focus:ring-neutral-300 dark:data-[state=open]:bg-neutral-800 dark:data-[state=open]:text-neutral-400",
                  children: [
                    (0, r.jsx)(l.Z, { className: "h-4 w-4" }),
                    (0, r.jsx)("span", {
                      className: "sr-only",
                      children: "Close",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      });
      ((m.displayName = s.VY.displayName),
        (n.forwardRef((e, t) => {
          let { className: a, ...n } = e;
          return (0, r.jsx)(s.Dx, {
            ref: t,
            className: (0, c.cn)(
              "text-lg font-semibold leading-none tracking-tight",
              a,
            ),
            ...n,
          });
        }).displayName = s.Dx.displayName),
        (n.forwardRef((e, t) => {
          let { className: a, ...n } = e;
          return (0, r.jsx)(s.dk, {
            ref: t,
            className: (0, c.cn)(
              "text-sm text-neutral-500 dark:text-neutral-400",
              a,
            ),
            ...n,
          });
        }).displayName = s.dk.displayName));
    },
    9052: function (e, t, a) {
      "use strict";
      a.d(t, {
        cn: function () {
          return s;
        },
      });
      var r = a(4839),
        n = a(6164);
      function s() {
        for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        return (0, n.m6)((0, r.W)(t));
      }
    },
    2346: function () {},
  },
  function (e) {
    (e.O(0, [362, 127, 971, 526, 560], function () {
      return e((e.s = 895));
    }),
      (_N_E = e.O()));
  },
]);
