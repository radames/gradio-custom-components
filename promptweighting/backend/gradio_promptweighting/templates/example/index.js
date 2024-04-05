const {
  SvelteComponent: y,
  add_iframe_resize_listener: v,
  add_render_callback: b,
  append: m,
  attr: h,
  binding_callbacks: w,
  detach: p,
  element: z,
  init: k,
  insert: E,
  noop: f,
  safe_not_equal: S,
  set_data: q,
  text: C,
  toggle_class: r
} = window.__gradio__svelte__internal, { onMount: M } = window.__gradio__svelte__internal;
function P(t) {
  let e, n = (
    /*value*/
    (t[0] ? (
      /*value*/
      t[0]
    ) : "") + ""
  ), _, d;
  return {
    c() {
      e = z("div"), _ = C(n), h(e, "class", "svelte-1r1gryw"), b(() => (
        /*div_elementresize_handler*/
        t[5].call(e)
      )), r(
        e,
        "table",
        /*type*/
        t[1] === "table"
      ), r(
        e,
        "gallery",
        /*type*/
        t[1] === "gallery"
      ), r(
        e,
        "selected",
        /*selected*/
        t[2]
      );
    },
    m(l, s) {
      E(l, e, s), m(e, _), d = v(
        e,
        /*div_elementresize_handler*/
        t[5].bind(e)
      ), t[6](e);
    },
    p(l, [s]) {
      s & /*value*/
      1 && n !== (n = /*value*/
      (l[0] ? (
        /*value*/
        l[0]
      ) : "") + "") && q(_, n), s & /*type*/
      2 && r(
        e,
        "table",
        /*type*/
        l[1] === "table"
      ), s & /*type*/
      2 && r(
        e,
        "gallery",
        /*type*/
        l[1] === "gallery"
      ), s & /*selected*/
      4 && r(
        e,
        "selected",
        /*selected*/
        l[2]
      );
    },
    i: f,
    o: f,
    d(l) {
      l && p(e), d(), t[6](null);
    }
  };
}
function W(t, e, n) {
  let { value: _ } = e, { type: d } = e, { selected: l = !1 } = e, s, a;
  function c(i, u) {
    !i || !u || (a.style.setProperty("--local-text-width", `${u < 150 ? u : 200}px`), n(4, a.style.whiteSpace = "unset", a));
  }
  M(() => {
    c(a, s);
  });
  function o() {
    s = this.clientWidth, n(3, s);
  }
  function g(i) {
    w[i ? "unshift" : "push"](() => {
      a = i, n(4, a);
    });
  }
  return t.$$set = (i) => {
    "value" in i && n(0, _ = i.value), "type" in i && n(1, d = i.type), "selected" in i && n(2, l = i.selected);
  }, [_, d, l, s, a, o, g];
}
class j extends y {
  constructor(e) {
    super(), k(this, e, W, P, S, { value: 0, type: 1, selected: 2 });
  }
}
export {
  j as default
};
