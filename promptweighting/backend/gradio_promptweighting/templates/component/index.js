const on = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let fn = (e = 21) => {
  let t = "", n = crypto.getRandomValues(new Uint8Array(e));
  for (; e--; )
    t += on[n[e] & 63];
  return t;
};
const {
  SvelteComponent: an,
  assign: un,
  create_slot: cn,
  detach: _n,
  element: dn,
  get_all_dirty_from_scope: mn,
  get_slot_changes: hn,
  get_spread_update: gn,
  init: pn,
  insert: bn,
  safe_not_equal: wn,
  set_dynamic_element_data: Ge,
  set_style: z,
  toggle_class: K,
  transition_in: zt,
  transition_out: Bt,
  update_slot_base: vn
} = window.__gradio__svelte__internal;
function yn(e) {
  let t, n, l;
  const i = (
    /*#slots*/
    e[18].default
  ), s = cn(
    i,
    e,
    /*$$scope*/
    e[17],
    null
  );
  let f = [
    { "data-testid": (
      /*test_id*/
      e[7]
    ) },
    { id: (
      /*elem_id*/
      e[2]
    ) },
    {
      class: n = "block " + /*elem_classes*/
      e[3].join(" ") + " svelte-nl1om8"
    }
  ], r = {};
  for (let o = 0; o < f.length; o += 1)
    r = un(r, f[o]);
  return {
    c() {
      t = dn(
        /*tag*/
        e[14]
      ), s && s.c(), Ge(
        /*tag*/
        e[14]
      )(t, r), K(
        t,
        "hidden",
        /*visible*/
        e[10] === !1
      ), K(
        t,
        "padded",
        /*padding*/
        e[6]
      ), K(
        t,
        "border_focus",
        /*border_mode*/
        e[5] === "focus"
      ), K(
        t,
        "border_contrast",
        /*border_mode*/
        e[5] === "contrast"
      ), K(t, "hide-container", !/*explicit_call*/
      e[8] && !/*container*/
      e[9]), z(
        t,
        "height",
        /*get_dimension*/
        e[15](
          /*height*/
          e[0]
        )
      ), z(t, "width", typeof /*width*/
      e[1] == "number" ? `calc(min(${/*width*/
      e[1]}px, 100%))` : (
        /*get_dimension*/
        e[15](
          /*width*/
          e[1]
        )
      )), z(
        t,
        "border-style",
        /*variant*/
        e[4]
      ), z(
        t,
        "overflow",
        /*allow_overflow*/
        e[11] ? "visible" : "hidden"
      ), z(
        t,
        "flex-grow",
        /*scale*/
        e[12]
      ), z(t, "min-width", `calc(min(${/*min_width*/
      e[13]}px, 100%))`), z(t, "border-width", "var(--block-border-width)");
    },
    m(o, a) {
      bn(o, t, a), s && s.m(t, null), l = !0;
    },
    p(o, a) {
      s && s.p && (!l || a & /*$$scope*/
      131072) && vn(
        s,
        i,
        o,
        /*$$scope*/
        o[17],
        l ? hn(
          i,
          /*$$scope*/
          o[17],
          a,
          null
        ) : mn(
          /*$$scope*/
          o[17]
        ),
        null
      ), Ge(
        /*tag*/
        o[14]
      )(t, r = gn(f, [
        (!l || a & /*test_id*/
        128) && { "data-testid": (
          /*test_id*/
          o[7]
        ) },
        (!l || a & /*elem_id*/
        4) && { id: (
          /*elem_id*/
          o[2]
        ) },
        (!l || a & /*elem_classes*/
        8 && n !== (n = "block " + /*elem_classes*/
        o[3].join(" ") + " svelte-nl1om8")) && { class: n }
      ])), K(
        t,
        "hidden",
        /*visible*/
        o[10] === !1
      ), K(
        t,
        "padded",
        /*padding*/
        o[6]
      ), K(
        t,
        "border_focus",
        /*border_mode*/
        o[5] === "focus"
      ), K(
        t,
        "border_contrast",
        /*border_mode*/
        o[5] === "contrast"
      ), K(t, "hide-container", !/*explicit_call*/
      o[8] && !/*container*/
      o[9]), a & /*height*/
      1 && z(
        t,
        "height",
        /*get_dimension*/
        o[15](
          /*height*/
          o[0]
        )
      ), a & /*width*/
      2 && z(t, "width", typeof /*width*/
      o[1] == "number" ? `calc(min(${/*width*/
      o[1]}px, 100%))` : (
        /*get_dimension*/
        o[15](
          /*width*/
          o[1]
        )
      )), a & /*variant*/
      16 && z(
        t,
        "border-style",
        /*variant*/
        o[4]
      ), a & /*allow_overflow*/
      2048 && z(
        t,
        "overflow",
        /*allow_overflow*/
        o[11] ? "visible" : "hidden"
      ), a & /*scale*/
      4096 && z(
        t,
        "flex-grow",
        /*scale*/
        o[12]
      ), a & /*min_width*/
      8192 && z(t, "min-width", `calc(min(${/*min_width*/
      o[13]}px, 100%))`);
    },
    i(o) {
      l || (zt(s, o), l = !0);
    },
    o(o) {
      Bt(s, o), l = !1;
    },
    d(o) {
      o && _n(t), s && s.d(o);
    }
  };
}
function kn(e) {
  let t, n = (
    /*tag*/
    e[14] && yn(e)
  );
  return {
    c() {
      n && n.c();
    },
    m(l, i) {
      n && n.m(l, i), t = !0;
    },
    p(l, [i]) {
      /*tag*/
      l[14] && n.p(l, i);
    },
    i(l) {
      t || (zt(n, l), t = !0);
    },
    o(l) {
      Bt(n, l), t = !1;
    },
    d(l) {
      n && n.d(l);
    }
  };
}
function Cn(e, t, n) {
  let { $$slots: l = {}, $$scope: i } = t, { height: s = void 0 } = t, { width: f = void 0 } = t, { elem_id: r = "" } = t, { elem_classes: o = [] } = t, { variant: a = "solid" } = t, { border_mode: u = "base" } = t, { padding: d = !0 } = t, { type: m = "normal" } = t, { test_id: _ = void 0 } = t, { explicit_call: g = !1 } = t, { container: w = !0 } = t, { visible: y = !0 } = t, { allow_overflow: v = !0 } = t, { scale: C = null } = t, { min_width: p = 0 } = t, c = m === "fieldset" ? "fieldset" : "div";
  const A = (h) => {
    if (h !== void 0) {
      if (typeof h == "number")
        return h + "px";
      if (typeof h == "string")
        return h;
    }
  };
  return e.$$set = (h) => {
    "height" in h && n(0, s = h.height), "width" in h && n(1, f = h.width), "elem_id" in h && n(2, r = h.elem_id), "elem_classes" in h && n(3, o = h.elem_classes), "variant" in h && n(4, a = h.variant), "border_mode" in h && n(5, u = h.border_mode), "padding" in h && n(6, d = h.padding), "type" in h && n(16, m = h.type), "test_id" in h && n(7, _ = h.test_id), "explicit_call" in h && n(8, g = h.explicit_call), "container" in h && n(9, w = h.container), "visible" in h && n(10, y = h.visible), "allow_overflow" in h && n(11, v = h.allow_overflow), "scale" in h && n(12, C = h.scale), "min_width" in h && n(13, p = h.min_width), "$$scope" in h && n(17, i = h.$$scope);
  }, [
    s,
    f,
    r,
    o,
    a,
    u,
    d,
    _,
    g,
    w,
    y,
    v,
    C,
    p,
    c,
    A,
    m,
    i,
    l
  ];
}
class An extends an {
  constructor(t) {
    super(), pn(this, t, Cn, kn, wn, {
      height: 0,
      width: 1,
      elem_id: 2,
      elem_classes: 3,
      variant: 4,
      border_mode: 5,
      padding: 6,
      type: 16,
      test_id: 7,
      explicit_call: 8,
      container: 9,
      visible: 10,
      allow_overflow: 11,
      scale: 12,
      min_width: 13
    });
  }
}
const {
  SvelteComponent: Sn,
  attr: Nn,
  create_slot: Ln,
  detach: En,
  element: qn,
  get_all_dirty_from_scope: Fn,
  get_slot_changes: Mn,
  init: Pn,
  insert: Vn,
  safe_not_equal: Tn,
  transition_in: zn,
  transition_out: Bn,
  update_slot_base: Dn
} = window.__gradio__svelte__internal;
function Rn(e) {
  let t, n;
  const l = (
    /*#slots*/
    e[1].default
  ), i = Ln(
    l,
    e,
    /*$$scope*/
    e[0],
    null
  );
  return {
    c() {
      t = qn("div"), i && i.c(), Nn(t, "class", "svelte-1hnfib2");
    },
    m(s, f) {
      Vn(s, t, f), i && i.m(t, null), n = !0;
    },
    p(s, [f]) {
      i && i.p && (!n || f & /*$$scope*/
      1) && Dn(
        i,
        l,
        s,
        /*$$scope*/
        s[0],
        n ? Mn(
          l,
          /*$$scope*/
          s[0],
          f,
          null
        ) : Fn(
          /*$$scope*/
          s[0]
        ),
        null
      );
    },
    i(s) {
      n || (zn(i, s), n = !0);
    },
    o(s) {
      Bn(i, s), n = !1;
    },
    d(s) {
      s && En(t), i && i.d(s);
    }
  };
}
function In(e, t, n) {
  let { $$slots: l = {}, $$scope: i } = t;
  return e.$$set = (s) => {
    "$$scope" in s && n(0, i = s.$$scope);
  }, [i, l];
}
class On extends Sn {
  constructor(t) {
    super(), Pn(this, t, In, Rn, Tn, {});
  }
}
const {
  SvelteComponent: Un,
  attr: We,
  check_outros: Zn,
  create_component: Hn,
  create_slot: Xn,
  destroy_component: Yn,
  detach: Le,
  element: Kn,
  empty: Gn,
  get_all_dirty_from_scope: Wn,
  get_slot_changes: Jn,
  group_outros: Qn,
  init: jn,
  insert: Ee,
  mount_component: xn,
  safe_not_equal: $n,
  set_data: el,
  space: tl,
  text: nl,
  toggle_class: ie,
  transition_in: pe,
  transition_out: qe,
  update_slot_base: ll
} = window.__gradio__svelte__internal;
function Je(e) {
  let t, n;
  return t = new On({
    props: {
      $$slots: { default: [il] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Hn(t.$$.fragment);
    },
    m(l, i) {
      xn(t, l, i), n = !0;
    },
    p(l, i) {
      const s = {};
      i & /*$$scope, info*/
      10 && (s.$$scope = { dirty: i, ctx: l }), t.$set(s);
    },
    i(l) {
      n || (pe(t.$$.fragment, l), n = !0);
    },
    o(l) {
      qe(t.$$.fragment, l), n = !1;
    },
    d(l) {
      Yn(t, l);
    }
  };
}
function il(e) {
  let t;
  return {
    c() {
      t = nl(
        /*info*/
        e[1]
      );
    },
    m(n, l) {
      Ee(n, t, l);
    },
    p(n, l) {
      l & /*info*/
      2 && el(
        t,
        /*info*/
        n[1]
      );
    },
    d(n) {
      n && Le(t);
    }
  };
}
function sl(e) {
  let t, n, l, i;
  const s = (
    /*#slots*/
    e[2].default
  ), f = Xn(
    s,
    e,
    /*$$scope*/
    e[3],
    null
  );
  let r = (
    /*info*/
    e[1] && Je(e)
  );
  return {
    c() {
      t = Kn("span"), f && f.c(), n = tl(), r && r.c(), l = Gn(), We(t, "data-testid", "block-info"), We(t, "class", "svelte-22c38v"), ie(t, "sr-only", !/*show_label*/
      e[0]), ie(t, "hide", !/*show_label*/
      e[0]), ie(
        t,
        "has-info",
        /*info*/
        e[1] != null
      );
    },
    m(o, a) {
      Ee(o, t, a), f && f.m(t, null), Ee(o, n, a), r && r.m(o, a), Ee(o, l, a), i = !0;
    },
    p(o, [a]) {
      f && f.p && (!i || a & /*$$scope*/
      8) && ll(
        f,
        s,
        o,
        /*$$scope*/
        o[3],
        i ? Jn(
          s,
          /*$$scope*/
          o[3],
          a,
          null
        ) : Wn(
          /*$$scope*/
          o[3]
        ),
        null
      ), (!i || a & /*show_label*/
      1) && ie(t, "sr-only", !/*show_label*/
      o[0]), (!i || a & /*show_label*/
      1) && ie(t, "hide", !/*show_label*/
      o[0]), (!i || a & /*info*/
      2) && ie(
        t,
        "has-info",
        /*info*/
        o[1] != null
      ), /*info*/
      o[1] ? r ? (r.p(o, a), a & /*info*/
      2 && pe(r, 1)) : (r = Je(o), r.c(), pe(r, 1), r.m(l.parentNode, l)) : r && (Qn(), qe(r, 1, 1, () => {
        r = null;
      }), Zn());
    },
    i(o) {
      i || (pe(f, o), pe(r), i = !0);
    },
    o(o) {
      qe(f, o), qe(r), i = !1;
    },
    d(o) {
      o && (Le(t), Le(n), Le(l)), f && f.d(o), r && r.d(o);
    }
  };
}
function rl(e, t, n) {
  let { $$slots: l = {}, $$scope: i } = t, { show_label: s = !0 } = t, { info: f = void 0 } = t;
  return e.$$set = (r) => {
    "show_label" in r && n(0, s = r.show_label), "info" in r && n(1, f = r.info), "$$scope" in r && n(3, i = r.$$scope);
  }, [s, f, l, i];
}
class ol extends Un {
  constructor(t) {
    super(), jn(this, t, rl, sl, $n, { show_label: 0, info: 1 });
  }
}
const fl = [
  { color: "red", primary: 600, secondary: 100 },
  { color: "green", primary: 600, secondary: 100 },
  { color: "blue", primary: 600, secondary: 100 },
  { color: "yellow", primary: 500, secondary: 100 },
  { color: "purple", primary: 600, secondary: 100 },
  { color: "teal", primary: 600, secondary: 100 },
  { color: "orange", primary: 600, secondary: 100 },
  { color: "cyan", primary: 600, secondary: 100 },
  { color: "lime", primary: 500, secondary: 100 },
  { color: "pink", primary: 600, secondary: 100 }
], Qe = {
  inherit: "inherit",
  current: "currentColor",
  transparent: "transparent",
  black: "#000",
  white: "#fff",
  slate: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
    950: "#020617"
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
    950: "#030712"
  },
  zinc: {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b",
    950: "#09090b"
  },
  neutral: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
    950: "#0a0a0a"
  },
  stone: {
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917",
    950: "#0c0a09"
  },
  red: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
    950: "#450a0a"
  },
  orange: {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
    950: "#431407"
  },
  amber: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
    950: "#451a03"
  },
  yellow: {
    50: "#fefce8",
    100: "#fef9c3",
    200: "#fef08a",
    300: "#fde047",
    400: "#facc15",
    500: "#eab308",
    600: "#ca8a04",
    700: "#a16207",
    800: "#854d0e",
    900: "#713f12",
    950: "#422006"
  },
  lime: {
    50: "#f7fee7",
    100: "#ecfccb",
    200: "#d9f99d",
    300: "#bef264",
    400: "#a3e635",
    500: "#84cc16",
    600: "#65a30d",
    700: "#4d7c0f",
    800: "#3f6212",
    900: "#365314",
    950: "#1a2e05"
  },
  green: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
    950: "#052e16"
  },
  emerald: {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b",
    950: "#022c22"
  },
  teal: {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a",
    950: "#042f2e"
  },
  cyan: {
    50: "#ecfeff",
    100: "#cffafe",
    200: "#a5f3fc",
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4",
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63",
    950: "#083344"
  },
  sky: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
    950: "#082f49"
  },
  blue: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
    950: "#172554"
  },
  indigo: {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81",
    950: "#1e1b4b"
  },
  violet: {
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95",
    950: "#2e1065"
  },
  purple: {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87",
    950: "#3b0764"
  },
  fuchsia: {
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75",
    950: "#4a044e"
  },
  pink: {
    50: "#fdf2f8",
    100: "#fce7f3",
    200: "#fbcfe8",
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843",
    950: "#500724"
  },
  rose: {
    50: "#fff1f2",
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337",
    950: "#4c0519"
  }
};
fl.reduce(
  (e, { color: t, primary: n, secondary: l }) => ({
    ...e,
    [t]: {
      primary: Qe[t][n],
      secondary: Qe[t][l]
    }
  }),
  {}
);
function oe(e) {
  let t = ["", "k", "M", "G", "T", "P", "E", "Z"], n = 0;
  for (; e > 1e3 && n < t.length - 1; )
    e /= 1e3, n++;
  let l = t[n];
  return (Number.isInteger(e) ? e : e.toFixed(1)) + l;
}
function Fe() {
}
function al(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
const Dt = typeof window < "u";
let je = Dt ? () => window.performance.now() : () => Date.now(), Rt = Dt ? (e) => requestAnimationFrame(e) : Fe;
const ae = /* @__PURE__ */ new Set();
function It(e) {
  ae.forEach((t) => {
    t.c(e) || (ae.delete(t), t.f());
  }), ae.size !== 0 && Rt(It);
}
function ul(e) {
  let t;
  return ae.size === 0 && Rt(It), {
    promise: new Promise((n) => {
      ae.add(t = { c: e, f: n });
    }),
    abort() {
      ae.delete(t);
    }
  };
}
const se = [];
function cl(e, t = Fe) {
  let n;
  const l = /* @__PURE__ */ new Set();
  function i(r) {
    if (al(e, r) && (e = r, n)) {
      const o = !se.length;
      for (const a of l)
        a[1](), se.push(a, e);
      if (o) {
        for (let a = 0; a < se.length; a += 2)
          se[a][0](se[a + 1]);
        se.length = 0;
      }
    }
  }
  function s(r) {
    i(r(e));
  }
  function f(r, o = Fe) {
    const a = [r, o];
    return l.add(a), l.size === 1 && (n = t(i, s) || Fe), r(e), () => {
      l.delete(a), l.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: s, subscribe: f };
}
function xe(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function Oe(e, t, n, l) {
  if (typeof n == "number" || xe(n)) {
    const i = l - n, s = (n - t) / (e.dt || 1 / 60), f = e.opts.stiffness * i, r = e.opts.damping * s, o = (f - r) * e.inv_mass, a = (s + o) * e.dt;
    return Math.abs(a) < e.opts.precision && Math.abs(i) < e.opts.precision ? l : (e.settled = !1, xe(n) ? new Date(n.getTime() + a) : n + a);
  } else {
    if (Array.isArray(n))
      return n.map(
        (i, s) => Oe(e, t[s], n[s], l[s])
      );
    if (typeof n == "object") {
      const i = {};
      for (const s in n)
        i[s] = Oe(e, t[s], n[s], l[s]);
      return i;
    } else
      throw new Error(`Cannot spring ${typeof n} values`);
  }
}
function $e(e, t = {}) {
  const n = cl(e), { stiffness: l = 0.15, damping: i = 0.8, precision: s = 0.01 } = t;
  let f, r, o, a = e, u = e, d = 1, m = 0, _ = !1;
  function g(y, v = {}) {
    u = y;
    const C = o = {};
    return e == null || v.hard || w.stiffness >= 1 && w.damping >= 1 ? (_ = !0, f = je(), a = y, n.set(e = u), Promise.resolve()) : (v.soft && (m = 1 / ((v.soft === !0 ? 0.5 : +v.soft) * 60), d = 0), r || (f = je(), _ = !1, r = ul((p) => {
      if (_)
        return _ = !1, r = null, !1;
      d = Math.min(d + m, 1);
      const c = {
        inv_mass: d,
        opts: w,
        settled: !0,
        dt: (p - f) * 60 / 1e3
      }, A = Oe(c, a, e, u);
      return f = p, a = e, n.set(e = A), c.settled && (r = null), !c.settled;
    })), new Promise((p) => {
      r.promise.then(() => {
        C === o && p();
      });
    }));
  }
  const w = {
    set: g,
    update: (y, v) => g(y(u, e), v),
    subscribe: n.subscribe,
    stiffness: l,
    damping: i,
    precision: s
  };
  return w;
}
const {
  SvelteComponent: _l,
  append: O,
  attr: E,
  component_subscribe: et,
  detach: dl,
  element: ml,
  init: hl,
  insert: gl,
  noop: tt,
  safe_not_equal: pl,
  set_style: Ce,
  svg_element: U,
  toggle_class: nt
} = window.__gradio__svelte__internal, { onMount: bl } = window.__gradio__svelte__internal;
function wl(e) {
  let t, n, l, i, s, f, r, o, a, u, d, m;
  return {
    c() {
      t = ml("div"), n = U("svg"), l = U("g"), i = U("path"), s = U("path"), f = U("path"), r = U("path"), o = U("g"), a = U("path"), u = U("path"), d = U("path"), m = U("path"), E(i, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), E(i, "fill", "#FF7C00"), E(i, "fill-opacity", "0.4"), E(i, "class", "svelte-43sxxs"), E(s, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), E(s, "fill", "#FF7C00"), E(s, "class", "svelte-43sxxs"), E(f, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), E(f, "fill", "#FF7C00"), E(f, "fill-opacity", "0.4"), E(f, "class", "svelte-43sxxs"), E(r, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), E(r, "fill", "#FF7C00"), E(r, "class", "svelte-43sxxs"), Ce(l, "transform", "translate(" + /*$top*/
      e[1][0] + "px, " + /*$top*/
      e[1][1] + "px)"), E(a, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), E(a, "fill", "#FF7C00"), E(a, "fill-opacity", "0.4"), E(a, "class", "svelte-43sxxs"), E(u, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), E(u, "fill", "#FF7C00"), E(u, "class", "svelte-43sxxs"), E(d, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), E(d, "fill", "#FF7C00"), E(d, "fill-opacity", "0.4"), E(d, "class", "svelte-43sxxs"), E(m, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), E(m, "fill", "#FF7C00"), E(m, "class", "svelte-43sxxs"), Ce(o, "transform", "translate(" + /*$bottom*/
      e[2][0] + "px, " + /*$bottom*/
      e[2][1] + "px)"), E(n, "viewBox", "-1200 -1200 3000 3000"), E(n, "fill", "none"), E(n, "xmlns", "http://www.w3.org/2000/svg"), E(n, "class", "svelte-43sxxs"), E(t, "class", "svelte-43sxxs"), nt(
        t,
        "margin",
        /*margin*/
        e[0]
      );
    },
    m(_, g) {
      gl(_, t, g), O(t, n), O(n, l), O(l, i), O(l, s), O(l, f), O(l, r), O(n, o), O(o, a), O(o, u), O(o, d), O(o, m);
    },
    p(_, [g]) {
      g & /*$top*/
      2 && Ce(l, "transform", "translate(" + /*$top*/
      _[1][0] + "px, " + /*$top*/
      _[1][1] + "px)"), g & /*$bottom*/
      4 && Ce(o, "transform", "translate(" + /*$bottom*/
      _[2][0] + "px, " + /*$bottom*/
      _[2][1] + "px)"), g & /*margin*/
      1 && nt(
        t,
        "margin",
        /*margin*/
        _[0]
      );
    },
    i: tt,
    o: tt,
    d(_) {
      _ && dl(t);
    }
  };
}
function vl(e, t, n) {
  let l, i, { margin: s = !0 } = t;
  const f = $e([0, 0]);
  et(e, f, (m) => n(1, l = m));
  const r = $e([0, 0]);
  et(e, r, (m) => n(2, i = m));
  let o;
  async function a() {
    await Promise.all([f.set([125, 140]), r.set([-125, -140])]), await Promise.all([f.set([-125, 140]), r.set([125, -140])]), await Promise.all([f.set([-125, 0]), r.set([125, -0])]), await Promise.all([f.set([125, 0]), r.set([-125, 0])]);
  }
  async function u() {
    await a(), o || u();
  }
  async function d() {
    await Promise.all([f.set([125, 0]), r.set([-125, 0])]), u();
  }
  return bl(() => (d(), () => o = !0)), e.$$set = (m) => {
    "margin" in m && n(0, s = m.margin);
  }, [s, l, i, f, r];
}
class yl extends _l {
  constructor(t) {
    super(), hl(this, t, vl, wl, pl, { margin: 0 });
  }
}
const {
  SvelteComponent: kl,
  append: ne,
  attr: G,
  binding_callbacks: lt,
  check_outros: Ot,
  create_component: Cl,
  create_slot: Al,
  destroy_component: Sl,
  destroy_each: Ut,
  detach: S,
  element: Q,
  empty: de,
  ensure_array_like: Ve,
  get_all_dirty_from_scope: Nl,
  get_slot_changes: Ll,
  group_outros: Zt,
  init: El,
  insert: N,
  mount_component: ql,
  noop: Ue,
  safe_not_equal: Fl,
  set_data: R,
  set_style: ee,
  space: W,
  text: q,
  toggle_class: D,
  transition_in: ce,
  transition_out: _e,
  update_slot_base: Ml
} = window.__gradio__svelte__internal, { tick: Pl } = window.__gradio__svelte__internal, { onDestroy: Vl } = window.__gradio__svelte__internal, Tl = (e) => ({}), it = (e) => ({});
function st(e, t, n) {
  const l = e.slice();
  return l[38] = t[n], l[40] = n, l;
}
function rt(e, t, n) {
  const l = e.slice();
  return l[38] = t[n], l;
}
function zl(e) {
  let t, n = (
    /*i18n*/
    e[1]("common.error") + ""
  ), l, i, s;
  const f = (
    /*#slots*/
    e[29].error
  ), r = Al(
    f,
    e,
    /*$$scope*/
    e[28],
    it
  );
  return {
    c() {
      t = Q("span"), l = q(n), i = W(), r && r.c(), G(t, "class", "error svelte-1yserjw");
    },
    m(o, a) {
      N(o, t, a), ne(t, l), N(o, i, a), r && r.m(o, a), s = !0;
    },
    p(o, a) {
      (!s || a[0] & /*i18n*/
      2) && n !== (n = /*i18n*/
      o[1]("common.error") + "") && R(l, n), r && r.p && (!s || a[0] & /*$$scope*/
      268435456) && Ml(
        r,
        f,
        o,
        /*$$scope*/
        o[28],
        s ? Ll(
          f,
          /*$$scope*/
          o[28],
          a,
          Tl
        ) : Nl(
          /*$$scope*/
          o[28]
        ),
        it
      );
    },
    i(o) {
      s || (ce(r, o), s = !0);
    },
    o(o) {
      _e(r, o), s = !1;
    },
    d(o) {
      o && (S(t), S(i)), r && r.d(o);
    }
  };
}
function Bl(e) {
  let t, n, l, i, s, f, r, o, a, u = (
    /*variant*/
    e[8] === "default" && /*show_eta_bar*/
    e[18] && /*show_progress*/
    e[6] === "full" && ot(e)
  );
  function d(p, c) {
    if (
      /*progress*/
      p[7]
    )
      return Il;
    if (
      /*queue_position*/
      p[2] !== null && /*queue_size*/
      p[3] !== void 0 && /*queue_position*/
      p[2] >= 0
    )
      return Rl;
    if (
      /*queue_position*/
      p[2] === 0
    )
      return Dl;
  }
  let m = d(e), _ = m && m(e), g = (
    /*timer*/
    e[5] && ut(e)
  );
  const w = [Hl, Zl], y = [];
  function v(p, c) {
    return (
      /*last_progress_level*/
      p[15] != null ? 0 : (
        /*show_progress*/
        p[6] === "full" ? 1 : -1
      )
    );
  }
  ~(s = v(e)) && (f = y[s] = w[s](e));
  let C = !/*timer*/
  e[5] && pt(e);
  return {
    c() {
      u && u.c(), t = W(), n = Q("div"), _ && _.c(), l = W(), g && g.c(), i = W(), f && f.c(), r = W(), C && C.c(), o = de(), G(n, "class", "progress-text svelte-1yserjw"), D(
        n,
        "meta-text-center",
        /*variant*/
        e[8] === "center"
      ), D(
        n,
        "meta-text",
        /*variant*/
        e[8] === "default"
      );
    },
    m(p, c) {
      u && u.m(p, c), N(p, t, c), N(p, n, c), _ && _.m(n, null), ne(n, l), g && g.m(n, null), N(p, i, c), ~s && y[s].m(p, c), N(p, r, c), C && C.m(p, c), N(p, o, c), a = !0;
    },
    p(p, c) {
      /*variant*/
      p[8] === "default" && /*show_eta_bar*/
      p[18] && /*show_progress*/
      p[6] === "full" ? u ? u.p(p, c) : (u = ot(p), u.c(), u.m(t.parentNode, t)) : u && (u.d(1), u = null), m === (m = d(p)) && _ ? _.p(p, c) : (_ && _.d(1), _ = m && m(p), _ && (_.c(), _.m(n, l))), /*timer*/
      p[5] ? g ? g.p(p, c) : (g = ut(p), g.c(), g.m(n, null)) : g && (g.d(1), g = null), (!a || c[0] & /*variant*/
      256) && D(
        n,
        "meta-text-center",
        /*variant*/
        p[8] === "center"
      ), (!a || c[0] & /*variant*/
      256) && D(
        n,
        "meta-text",
        /*variant*/
        p[8] === "default"
      );
      let A = s;
      s = v(p), s === A ? ~s && y[s].p(p, c) : (f && (Zt(), _e(y[A], 1, 1, () => {
        y[A] = null;
      }), Ot()), ~s ? (f = y[s], f ? f.p(p, c) : (f = y[s] = w[s](p), f.c()), ce(f, 1), f.m(r.parentNode, r)) : f = null), /*timer*/
      p[5] ? C && (C.d(1), C = null) : C ? C.p(p, c) : (C = pt(p), C.c(), C.m(o.parentNode, o));
    },
    i(p) {
      a || (ce(f), a = !0);
    },
    o(p) {
      _e(f), a = !1;
    },
    d(p) {
      p && (S(t), S(n), S(i), S(r), S(o)), u && u.d(p), _ && _.d(), g && g.d(), ~s && y[s].d(p), C && C.d(p);
    }
  };
}
function ot(e) {
  let t, n = `translateX(${/*eta_level*/
  (e[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      t = Q("div"), G(t, "class", "eta-bar svelte-1yserjw"), ee(t, "transform", n);
    },
    m(l, i) {
      N(l, t, i);
    },
    p(l, i) {
      i[0] & /*eta_level*/
      131072 && n !== (n = `translateX(${/*eta_level*/
      (l[17] || 0) * 100 - 100}%)`) && ee(t, "transform", n);
    },
    d(l) {
      l && S(t);
    }
  };
}
function Dl(e) {
  let t;
  return {
    c() {
      t = q("processing |");
    },
    m(n, l) {
      N(n, t, l);
    },
    p: Ue,
    d(n) {
      n && S(t);
    }
  };
}
function Rl(e) {
  let t, n = (
    /*queue_position*/
    e[2] + 1 + ""
  ), l, i, s, f;
  return {
    c() {
      t = q("queue: "), l = q(n), i = q("/"), s = q(
        /*queue_size*/
        e[3]
      ), f = q(" |");
    },
    m(r, o) {
      N(r, t, o), N(r, l, o), N(r, i, o), N(r, s, o), N(r, f, o);
    },
    p(r, o) {
      o[0] & /*queue_position*/
      4 && n !== (n = /*queue_position*/
      r[2] + 1 + "") && R(l, n), o[0] & /*queue_size*/
      8 && R(
        s,
        /*queue_size*/
        r[3]
      );
    },
    d(r) {
      r && (S(t), S(l), S(i), S(s), S(f));
    }
  };
}
function Il(e) {
  let t, n = Ve(
    /*progress*/
    e[7]
  ), l = [];
  for (let i = 0; i < n.length; i += 1)
    l[i] = at(rt(e, n, i));
  return {
    c() {
      for (let i = 0; i < l.length; i += 1)
        l[i].c();
      t = de();
    },
    m(i, s) {
      for (let f = 0; f < l.length; f += 1)
        l[f] && l[f].m(i, s);
      N(i, t, s);
    },
    p(i, s) {
      if (s[0] & /*progress*/
      128) {
        n = Ve(
          /*progress*/
          i[7]
        );
        let f;
        for (f = 0; f < n.length; f += 1) {
          const r = rt(i, n, f);
          l[f] ? l[f].p(r, s) : (l[f] = at(r), l[f].c(), l[f].m(t.parentNode, t));
        }
        for (; f < l.length; f += 1)
          l[f].d(1);
        l.length = n.length;
      }
    },
    d(i) {
      i && S(t), Ut(l, i);
    }
  };
}
function ft(e) {
  let t, n = (
    /*p*/
    e[38].unit + ""
  ), l, i, s = " ", f;
  function r(u, d) {
    return (
      /*p*/
      u[38].length != null ? Ul : Ol
    );
  }
  let o = r(e), a = o(e);
  return {
    c() {
      a.c(), t = W(), l = q(n), i = q(" | "), f = q(s);
    },
    m(u, d) {
      a.m(u, d), N(u, t, d), N(u, l, d), N(u, i, d), N(u, f, d);
    },
    p(u, d) {
      o === (o = r(u)) && a ? a.p(u, d) : (a.d(1), a = o(u), a && (a.c(), a.m(t.parentNode, t))), d[0] & /*progress*/
      128 && n !== (n = /*p*/
      u[38].unit + "") && R(l, n);
    },
    d(u) {
      u && (S(t), S(l), S(i), S(f)), a.d(u);
    }
  };
}
function Ol(e) {
  let t = oe(
    /*p*/
    e[38].index || 0
  ) + "", n;
  return {
    c() {
      n = q(t);
    },
    m(l, i) {
      N(l, n, i);
    },
    p(l, i) {
      i[0] & /*progress*/
      128 && t !== (t = oe(
        /*p*/
        l[38].index || 0
      ) + "") && R(n, t);
    },
    d(l) {
      l && S(n);
    }
  };
}
function Ul(e) {
  let t = oe(
    /*p*/
    e[38].index || 0
  ) + "", n, l, i = oe(
    /*p*/
    e[38].length
  ) + "", s;
  return {
    c() {
      n = q(t), l = q("/"), s = q(i);
    },
    m(f, r) {
      N(f, n, r), N(f, l, r), N(f, s, r);
    },
    p(f, r) {
      r[0] & /*progress*/
      128 && t !== (t = oe(
        /*p*/
        f[38].index || 0
      ) + "") && R(n, t), r[0] & /*progress*/
      128 && i !== (i = oe(
        /*p*/
        f[38].length
      ) + "") && R(s, i);
    },
    d(f) {
      f && (S(n), S(l), S(s));
    }
  };
}
function at(e) {
  let t, n = (
    /*p*/
    e[38].index != null && ft(e)
  );
  return {
    c() {
      n && n.c(), t = de();
    },
    m(l, i) {
      n && n.m(l, i), N(l, t, i);
    },
    p(l, i) {
      /*p*/
      l[38].index != null ? n ? n.p(l, i) : (n = ft(l), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    d(l) {
      l && S(t), n && n.d(l);
    }
  };
}
function ut(e) {
  let t, n = (
    /*eta*/
    e[0] ? `/${/*formatted_eta*/
    e[19]}` : ""
  ), l, i;
  return {
    c() {
      t = q(
        /*formatted_timer*/
        e[20]
      ), l = q(n), i = q("s");
    },
    m(s, f) {
      N(s, t, f), N(s, l, f), N(s, i, f);
    },
    p(s, f) {
      f[0] & /*formatted_timer*/
      1048576 && R(
        t,
        /*formatted_timer*/
        s[20]
      ), f[0] & /*eta, formatted_eta*/
      524289 && n !== (n = /*eta*/
      s[0] ? `/${/*formatted_eta*/
      s[19]}` : "") && R(l, n);
    },
    d(s) {
      s && (S(t), S(l), S(i));
    }
  };
}
function Zl(e) {
  let t, n;
  return t = new yl({
    props: { margin: (
      /*variant*/
      e[8] === "default"
    ) }
  }), {
    c() {
      Cl(t.$$.fragment);
    },
    m(l, i) {
      ql(t, l, i), n = !0;
    },
    p(l, i) {
      const s = {};
      i[0] & /*variant*/
      256 && (s.margin = /*variant*/
      l[8] === "default"), t.$set(s);
    },
    i(l) {
      n || (ce(t.$$.fragment, l), n = !0);
    },
    o(l) {
      _e(t.$$.fragment, l), n = !1;
    },
    d(l) {
      Sl(t, l);
    }
  };
}
function Hl(e) {
  let t, n, l, i, s, f = `${/*last_progress_level*/
  e[15] * 100}%`, r = (
    /*progress*/
    e[7] != null && ct(e)
  );
  return {
    c() {
      t = Q("div"), n = Q("div"), r && r.c(), l = W(), i = Q("div"), s = Q("div"), G(n, "class", "progress-level-inner svelte-1yserjw"), G(s, "class", "progress-bar svelte-1yserjw"), ee(s, "width", f), G(i, "class", "progress-bar-wrap svelte-1yserjw"), G(t, "class", "progress-level svelte-1yserjw");
    },
    m(o, a) {
      N(o, t, a), ne(t, n), r && r.m(n, null), ne(t, l), ne(t, i), ne(i, s), e[30](s);
    },
    p(o, a) {
      /*progress*/
      o[7] != null ? r ? r.p(o, a) : (r = ct(o), r.c(), r.m(n, null)) : r && (r.d(1), r = null), a[0] & /*last_progress_level*/
      32768 && f !== (f = `${/*last_progress_level*/
      o[15] * 100}%`) && ee(s, "width", f);
    },
    i: Ue,
    o: Ue,
    d(o) {
      o && S(t), r && r.d(), e[30](null);
    }
  };
}
function ct(e) {
  let t, n = Ve(
    /*progress*/
    e[7]
  ), l = [];
  for (let i = 0; i < n.length; i += 1)
    l[i] = gt(st(e, n, i));
  return {
    c() {
      for (let i = 0; i < l.length; i += 1)
        l[i].c();
      t = de();
    },
    m(i, s) {
      for (let f = 0; f < l.length; f += 1)
        l[f] && l[f].m(i, s);
      N(i, t, s);
    },
    p(i, s) {
      if (s[0] & /*progress_level, progress*/
      16512) {
        n = Ve(
          /*progress*/
          i[7]
        );
        let f;
        for (f = 0; f < n.length; f += 1) {
          const r = st(i, n, f);
          l[f] ? l[f].p(r, s) : (l[f] = gt(r), l[f].c(), l[f].m(t.parentNode, t));
        }
        for (; f < l.length; f += 1)
          l[f].d(1);
        l.length = n.length;
      }
    },
    d(i) {
      i && S(t), Ut(l, i);
    }
  };
}
function _t(e) {
  let t, n, l, i, s = (
    /*i*/
    e[40] !== 0 && Xl()
  ), f = (
    /*p*/
    e[38].desc != null && dt(e)
  ), r = (
    /*p*/
    e[38].desc != null && /*progress_level*/
    e[14] && /*progress_level*/
    e[14][
      /*i*/
      e[40]
    ] != null && mt()
  ), o = (
    /*progress_level*/
    e[14] != null && ht(e)
  );
  return {
    c() {
      s && s.c(), t = W(), f && f.c(), n = W(), r && r.c(), l = W(), o && o.c(), i = de();
    },
    m(a, u) {
      s && s.m(a, u), N(a, t, u), f && f.m(a, u), N(a, n, u), r && r.m(a, u), N(a, l, u), o && o.m(a, u), N(a, i, u);
    },
    p(a, u) {
      /*p*/
      a[38].desc != null ? f ? f.p(a, u) : (f = dt(a), f.c(), f.m(n.parentNode, n)) : f && (f.d(1), f = null), /*p*/
      a[38].desc != null && /*progress_level*/
      a[14] && /*progress_level*/
      a[14][
        /*i*/
        a[40]
      ] != null ? r || (r = mt(), r.c(), r.m(l.parentNode, l)) : r && (r.d(1), r = null), /*progress_level*/
      a[14] != null ? o ? o.p(a, u) : (o = ht(a), o.c(), o.m(i.parentNode, i)) : o && (o.d(1), o = null);
    },
    d(a) {
      a && (S(t), S(n), S(l), S(i)), s && s.d(a), f && f.d(a), r && r.d(a), o && o.d(a);
    }
  };
}
function Xl(e) {
  let t;
  return {
    c() {
      t = q(" /");
    },
    m(n, l) {
      N(n, t, l);
    },
    d(n) {
      n && S(t);
    }
  };
}
function dt(e) {
  let t = (
    /*p*/
    e[38].desc + ""
  ), n;
  return {
    c() {
      n = q(t);
    },
    m(l, i) {
      N(l, n, i);
    },
    p(l, i) {
      i[0] & /*progress*/
      128 && t !== (t = /*p*/
      l[38].desc + "") && R(n, t);
    },
    d(l) {
      l && S(n);
    }
  };
}
function mt(e) {
  let t;
  return {
    c() {
      t = q("-");
    },
    m(n, l) {
      N(n, t, l);
    },
    d(n) {
      n && S(t);
    }
  };
}
function ht(e) {
  let t = (100 * /*progress_level*/
  (e[14][
    /*i*/
    e[40]
  ] || 0)).toFixed(1) + "", n, l;
  return {
    c() {
      n = q(t), l = q("%");
    },
    m(i, s) {
      N(i, n, s), N(i, l, s);
    },
    p(i, s) {
      s[0] & /*progress_level*/
      16384 && t !== (t = (100 * /*progress_level*/
      (i[14][
        /*i*/
        i[40]
      ] || 0)).toFixed(1) + "") && R(n, t);
    },
    d(i) {
      i && (S(n), S(l));
    }
  };
}
function gt(e) {
  let t, n = (
    /*p*/
    (e[38].desc != null || /*progress_level*/
    e[14] && /*progress_level*/
    e[14][
      /*i*/
      e[40]
    ] != null) && _t(e)
  );
  return {
    c() {
      n && n.c(), t = de();
    },
    m(l, i) {
      n && n.m(l, i), N(l, t, i);
    },
    p(l, i) {
      /*p*/
      l[38].desc != null || /*progress_level*/
      l[14] && /*progress_level*/
      l[14][
        /*i*/
        l[40]
      ] != null ? n ? n.p(l, i) : (n = _t(l), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    d(l) {
      l && S(t), n && n.d(l);
    }
  };
}
function pt(e) {
  let t, n;
  return {
    c() {
      t = Q("p"), n = q(
        /*loading_text*/
        e[9]
      ), G(t, "class", "loading svelte-1yserjw");
    },
    m(l, i) {
      N(l, t, i), ne(t, n);
    },
    p(l, i) {
      i[0] & /*loading_text*/
      512 && R(
        n,
        /*loading_text*/
        l[9]
      );
    },
    d(l) {
      l && S(t);
    }
  };
}
function Yl(e) {
  let t, n, l, i, s;
  const f = [Bl, zl], r = [];
  function o(a, u) {
    return (
      /*status*/
      a[4] === "pending" ? 0 : (
        /*status*/
        a[4] === "error" ? 1 : -1
      )
    );
  }
  return ~(n = o(e)) && (l = r[n] = f[n](e)), {
    c() {
      t = Q("div"), l && l.c(), G(t, "class", i = "wrap " + /*variant*/
      e[8] + " " + /*show_progress*/
      e[6] + " svelte-1yserjw"), D(t, "hide", !/*status*/
      e[4] || /*status*/
      e[4] === "complete" || /*show_progress*/
      e[6] === "hidden"), D(
        t,
        "translucent",
        /*variant*/
        e[8] === "center" && /*status*/
        (e[4] === "pending" || /*status*/
        e[4] === "error") || /*translucent*/
        e[11] || /*show_progress*/
        e[6] === "minimal"
      ), D(
        t,
        "generating",
        /*status*/
        e[4] === "generating"
      ), D(
        t,
        "border",
        /*border*/
        e[12]
      ), ee(
        t,
        "position",
        /*absolute*/
        e[10] ? "absolute" : "static"
      ), ee(
        t,
        "padding",
        /*absolute*/
        e[10] ? "0" : "var(--size-8) 0"
      );
    },
    m(a, u) {
      N(a, t, u), ~n && r[n].m(t, null), e[31](t), s = !0;
    },
    p(a, u) {
      let d = n;
      n = o(a), n === d ? ~n && r[n].p(a, u) : (l && (Zt(), _e(r[d], 1, 1, () => {
        r[d] = null;
      }), Ot()), ~n ? (l = r[n], l ? l.p(a, u) : (l = r[n] = f[n](a), l.c()), ce(l, 1), l.m(t, null)) : l = null), (!s || u[0] & /*variant, show_progress*/
      320 && i !== (i = "wrap " + /*variant*/
      a[8] + " " + /*show_progress*/
      a[6] + " svelte-1yserjw")) && G(t, "class", i), (!s || u[0] & /*variant, show_progress, status, show_progress*/
      336) && D(t, "hide", !/*status*/
      a[4] || /*status*/
      a[4] === "complete" || /*show_progress*/
      a[6] === "hidden"), (!s || u[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && D(
        t,
        "translucent",
        /*variant*/
        a[8] === "center" && /*status*/
        (a[4] === "pending" || /*status*/
        a[4] === "error") || /*translucent*/
        a[11] || /*show_progress*/
        a[6] === "minimal"
      ), (!s || u[0] & /*variant, show_progress, status*/
      336) && D(
        t,
        "generating",
        /*status*/
        a[4] === "generating"
      ), (!s || u[0] & /*variant, show_progress, border*/
      4416) && D(
        t,
        "border",
        /*border*/
        a[12]
      ), u[0] & /*absolute*/
      1024 && ee(
        t,
        "position",
        /*absolute*/
        a[10] ? "absolute" : "static"
      ), u[0] & /*absolute*/
      1024 && ee(
        t,
        "padding",
        /*absolute*/
        a[10] ? "0" : "var(--size-8) 0"
      );
    },
    i(a) {
      s || (ce(l), s = !0);
    },
    o(a) {
      _e(l), s = !1;
    },
    d(a) {
      a && S(t), ~n && r[n].d(), e[31](null);
    }
  };
}
let Ae = [], Re = !1;
async function Kl(e, t = !0) {
  if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
    if (Ae.push(e), !Re)
      Re = !0;
    else
      return;
    await Pl(), requestAnimationFrame(() => {
      let n = [0, 0];
      for (let l = 0; l < Ae.length; l++) {
        const s = Ae[l].getBoundingClientRect();
        (l === 0 || s.top + window.scrollY <= n[0]) && (n[0] = s.top + window.scrollY, n[1] = l);
      }
      window.scrollTo({ top: n[0] - 20, behavior: "smooth" }), Re = !1, Ae = [];
    });
  }
}
function Gl(e, t, n) {
  let l, { $$slots: i = {}, $$scope: s } = t, { i18n: f } = t, { eta: r = null } = t, { queue_position: o } = t, { queue_size: a } = t, { status: u } = t, { scroll_to_output: d = !1 } = t, { timer: m = !0 } = t, { show_progress: _ = "full" } = t, { message: g = null } = t, { progress: w = null } = t, { variant: y = "default" } = t, { loading_text: v = "Loading..." } = t, { absolute: C = !0 } = t, { translucent: p = !1 } = t, { border: c = !1 } = t, { autoscroll: A } = t, h, b = !1, L = 0, F = 0, T = null, M = null, me = 0, H = null, X, Y = null, le = !0;
  const ye = () => {
    n(0, r = n(26, T = n(19, j = null))), n(24, L = performance.now()), n(25, F = 0), b = !0, ke();
  };
  function ke() {
    requestAnimationFrame(() => {
      n(25, F = (performance.now() - L) / 1e3), b && ke();
    });
  }
  function he() {
    n(25, F = 0), n(0, r = n(26, T = n(19, j = null))), b && (b = !1);
  }
  Vl(() => {
    b && he();
  });
  let j = null;
  function sn(k) {
    lt[k ? "unshift" : "push"](() => {
      Y = k, n(16, Y), n(7, w), n(14, H), n(15, X);
    });
  }
  function rn(k) {
    lt[k ? "unshift" : "push"](() => {
      h = k, n(13, h);
    });
  }
  return e.$$set = (k) => {
    "i18n" in k && n(1, f = k.i18n), "eta" in k && n(0, r = k.eta), "queue_position" in k && n(2, o = k.queue_position), "queue_size" in k && n(3, a = k.queue_size), "status" in k && n(4, u = k.status), "scroll_to_output" in k && n(21, d = k.scroll_to_output), "timer" in k && n(5, m = k.timer), "show_progress" in k && n(6, _ = k.show_progress), "message" in k && n(22, g = k.message), "progress" in k && n(7, w = k.progress), "variant" in k && n(8, y = k.variant), "loading_text" in k && n(9, v = k.loading_text), "absolute" in k && n(10, C = k.absolute), "translucent" in k && n(11, p = k.translucent), "border" in k && n(12, c = k.border), "autoscroll" in k && n(23, A = k.autoscroll), "$$scope" in k && n(28, s = k.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    218103809 && (r === null && n(0, r = T), r != null && T !== r && (n(27, M = (performance.now() - L) / 1e3 + r), n(19, j = M.toFixed(1)), n(26, T = r))), e.$$.dirty[0] & /*eta_from_start, timer_diff*/
    167772160 && n(17, me = M === null || M <= 0 || !F ? null : Math.min(F / M, 1)), e.$$.dirty[0] & /*progress*/
    128 && w != null && n(18, le = !1), e.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (w != null ? n(14, H = w.map((k) => {
      if (k.index != null && k.length != null)
        return k.index / k.length;
      if (k.progress != null)
        return k.progress;
    })) : n(14, H = null), H ? (n(15, X = H[H.length - 1]), Y && (X === 0 ? n(16, Y.style.transition = "0", Y) : n(16, Y.style.transition = "150ms", Y))) : n(15, X = void 0)), e.$$.dirty[0] & /*status*/
    16 && (u === "pending" ? ye() : he()), e.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    10493968 && h && d && (u === "pending" || u === "complete") && Kl(h, A), e.$$.dirty[0] & /*status, message*/
    4194320, e.$$.dirty[0] & /*timer_diff*/
    33554432 && n(20, l = F.toFixed(1));
  }, [
    r,
    f,
    o,
    a,
    u,
    m,
    _,
    w,
    y,
    v,
    C,
    p,
    c,
    h,
    H,
    X,
    Y,
    me,
    le,
    j,
    l,
    d,
    g,
    A,
    L,
    F,
    T,
    M,
    s,
    i,
    sn,
    rn
  ];
}
class Wl extends kl {
  constructor(t) {
    super(), El(
      this,
      t,
      Gl,
      Yl,
      Fl,
      {
        i18n: 1,
        eta: 0,
        queue_position: 2,
        queue_size: 3,
        status: 4,
        scroll_to_output: 21,
        timer: 5,
        show_progress: 6,
        message: 22,
        progress: 7,
        variant: 8,
        loading_text: 9,
        absolute: 10,
        translucent: 11,
        border: 12,
        autoscroll: 23
      },
      null,
      [-1, -1]
    );
  }
}
var Jl = { value: () => {
} };
function Ht() {
  for (var e = 0, t = arguments.length, n = {}, l; e < t; ++e) {
    if (!(l = arguments[e] + "") || l in n || /[\s.]/.test(l))
      throw new Error("illegal type: " + l);
    n[l] = [];
  }
  return new Me(n);
}
function Me(e) {
  this._ = e;
}
function Ql(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var l = "", i = n.indexOf(".");
    if (i >= 0 && (l = n.slice(i + 1), n = n.slice(0, i)), n && !t.hasOwnProperty(n))
      throw new Error("unknown type: " + n);
    return { type: n, name: l };
  });
}
Me.prototype = Ht.prototype = {
  constructor: Me,
  on: function(e, t) {
    var n = this._, l = Ql(e + "", n), i, s = -1, f = l.length;
    if (arguments.length < 2) {
      for (; ++s < f; )
        if ((i = (e = l[s]).type) && (i = jl(n[i], e.name)))
          return i;
      return;
    }
    if (t != null && typeof t != "function")
      throw new Error("invalid callback: " + t);
    for (; ++s < f; )
      if (i = (e = l[s]).type)
        n[i] = bt(n[i], e.name, t);
      else if (t == null)
        for (i in n)
          n[i] = bt(n[i], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t)
      e[n] = t[n].slice();
    return new Me(e);
  },
  call: function(e, t) {
    if ((i = arguments.length - 2) > 0)
      for (var n = new Array(i), l = 0, i, s; l < i; ++l)
        n[l] = arguments[l + 2];
    if (!this._.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    for (s = this._[e], l = 0, i = s.length; l < i; ++l)
      s[l].value.apply(t, n);
  },
  apply: function(e, t, n) {
    if (!this._.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    for (var l = this._[e], i = 0, s = l.length; i < s; ++i)
      l[i].value.apply(t, n);
  }
};
function jl(e, t) {
  for (var n = 0, l = e.length, i; n < l; ++n)
    if ((i = e[n]).name === t)
      return i.value;
}
function bt(e, t, n) {
  for (var l = 0, i = e.length; l < i; ++l)
    if (e[l].name === t) {
      e[l] = Jl, e = e.slice(0, l).concat(e.slice(l + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Ze = "http://www.w3.org/1999/xhtml";
const wt = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Ze,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Xt(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), wt.hasOwnProperty(t) ? { space: wt[t], local: e } : e;
}
function xl(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Ze && t.documentElement.namespaceURI === Ze ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function $l(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Yt(e) {
  var t = Xt(e);
  return (t.local ? $l : xl)(t);
}
function ei() {
}
function Kt(e) {
  return e == null ? ei : function() {
    return this.querySelector(e);
  };
}
function ti(e) {
  typeof e != "function" && (e = Kt(e));
  for (var t = this._groups, n = t.length, l = new Array(n), i = 0; i < n; ++i)
    for (var s = t[i], f = s.length, r = l[i] = new Array(f), o, a, u = 0; u < f; ++u)
      (o = s[u]) && (a = e.call(o, o.__data__, u, s)) && ("__data__" in o && (a.__data__ = o.__data__), r[u] = a);
  return new I(l, this._parents);
}
function ni(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function li() {
  return [];
}
function ii(e) {
  return e == null ? li : function() {
    return this.querySelectorAll(e);
  };
}
function si(e) {
  return function() {
    return ni(e.apply(this, arguments));
  };
}
function ri(e) {
  typeof e == "function" ? e = si(e) : e = ii(e);
  for (var t = this._groups, n = t.length, l = [], i = [], s = 0; s < n; ++s)
    for (var f = t[s], r = f.length, o, a = 0; a < r; ++a)
      (o = f[a]) && (l.push(e.call(o, o.__data__, a, f)), i.push(o));
  return new I(l, i);
}
function oi(e) {
  return function() {
    return this.matches(e);
  };
}
function Gt(e) {
  return function(t) {
    return t.matches(e);
  };
}
var fi = Array.prototype.find;
function ai(e) {
  return function() {
    return fi.call(this.children, e);
  };
}
function ui() {
  return this.firstElementChild;
}
function ci(e) {
  return this.select(e == null ? ui : ai(typeof e == "function" ? e : Gt(e)));
}
var _i = Array.prototype.filter;
function di() {
  return Array.from(this.children);
}
function mi(e) {
  return function() {
    return _i.call(this.children, e);
  };
}
function hi(e) {
  return this.selectAll(e == null ? di : mi(typeof e == "function" ? e : Gt(e)));
}
function gi(e) {
  typeof e != "function" && (e = oi(e));
  for (var t = this._groups, n = t.length, l = new Array(n), i = 0; i < n; ++i)
    for (var s = t[i], f = s.length, r = l[i] = [], o, a = 0; a < f; ++a)
      (o = s[a]) && e.call(o, o.__data__, a, s) && r.push(o);
  return new I(l, this._parents);
}
function Wt(e) {
  return new Array(e.length);
}
function pi() {
  return new I(this._enter || this._groups.map(Wt), this._parents);
}
function Te(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Te.prototype = {
  constructor: Te,
  appendChild: function(e) {
    return this._parent.insertBefore(e, this._next);
  },
  insertBefore: function(e, t) {
    return this._parent.insertBefore(e, t);
  },
  querySelector: function(e) {
    return this._parent.querySelector(e);
  },
  querySelectorAll: function(e) {
    return this._parent.querySelectorAll(e);
  }
};
function bi(e) {
  return function() {
    return e;
  };
}
function wi(e, t, n, l, i, s) {
  for (var f = 0, r, o = t.length, a = s.length; f < a; ++f)
    (r = t[f]) ? (r.__data__ = s[f], l[f] = r) : n[f] = new Te(e, s[f]);
  for (; f < o; ++f)
    (r = t[f]) && (i[f] = r);
}
function vi(e, t, n, l, i, s, f) {
  var r, o, a = /* @__PURE__ */ new Map(), u = t.length, d = s.length, m = new Array(u), _;
  for (r = 0; r < u; ++r)
    (o = t[r]) && (m[r] = _ = f.call(o, o.__data__, r, t) + "", a.has(_) ? i[r] = o : a.set(_, o));
  for (r = 0; r < d; ++r)
    _ = f.call(e, s[r], r, s) + "", (o = a.get(_)) ? (l[r] = o, o.__data__ = s[r], a.delete(_)) : n[r] = new Te(e, s[r]);
  for (r = 0; r < u; ++r)
    (o = t[r]) && a.get(m[r]) === o && (i[r] = o);
}
function yi(e) {
  return e.__data__;
}
function ki(e, t) {
  if (!arguments.length)
    return Array.from(this, yi);
  var n = t ? vi : wi, l = this._parents, i = this._groups;
  typeof e != "function" && (e = bi(e));
  for (var s = i.length, f = new Array(s), r = new Array(s), o = new Array(s), a = 0; a < s; ++a) {
    var u = l[a], d = i[a], m = d.length, _ = Ci(e.call(u, u && u.__data__, a, l)), g = _.length, w = r[a] = new Array(g), y = f[a] = new Array(g), v = o[a] = new Array(m);
    n(u, d, w, y, v, _, t);
    for (var C = 0, p = 0, c, A; C < g; ++C)
      if (c = w[C]) {
        for (C >= p && (p = C + 1); !(A = y[p]) && ++p < g; )
          ;
        c._next = A || null;
      }
  }
  return f = new I(f, l), f._enter = r, f._exit = o, f;
}
function Ci(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Ai() {
  return new I(this._exit || this._groups.map(Wt), this._parents);
}
function Si(e, t, n) {
  var l = this.enter(), i = this, s = this.exit();
  return typeof e == "function" ? (l = e(l), l && (l = l.selection())) : l = l.append(e + ""), t != null && (i = t(i), i && (i = i.selection())), n == null ? s.remove() : n(s), l && i ? l.merge(i).order() : i;
}
function Ni(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, l = t._groups, i = n.length, s = l.length, f = Math.min(i, s), r = new Array(i), o = 0; o < f; ++o)
    for (var a = n[o], u = l[o], d = a.length, m = r[o] = new Array(d), _, g = 0; g < d; ++g)
      (_ = a[g] || u[g]) && (m[g] = _);
  for (; o < i; ++o)
    r[o] = n[o];
  return new I(r, this._parents);
}
function Li() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var l = e[t], i = l.length - 1, s = l[i], f; --i >= 0; )
      (f = l[i]) && (s && f.compareDocumentPosition(s) ^ 4 && s.parentNode.insertBefore(f, s), s = f);
  return this;
}
function Ei(e) {
  e || (e = qi);
  function t(d, m) {
    return d && m ? e(d.__data__, m.__data__) : !d - !m;
  }
  for (var n = this._groups, l = n.length, i = new Array(l), s = 0; s < l; ++s) {
    for (var f = n[s], r = f.length, o = i[s] = new Array(r), a, u = 0; u < r; ++u)
      (a = f[u]) && (o[u] = a);
    o.sort(t);
  }
  return new I(i, this._parents).order();
}
function qi(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Fi() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Mi() {
  return Array.from(this);
}
function Pi() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var l = e[t], i = 0, s = l.length; i < s; ++i) {
      var f = l[i];
      if (f)
        return f;
    }
  return null;
}
function Vi() {
  let e = 0;
  for (const t of this)
    ++e;
  return e;
}
function Ti() {
  return !this.node();
}
function zi(e) {
  for (var t = this._groups, n = 0, l = t.length; n < l; ++n)
    for (var i = t[n], s = 0, f = i.length, r; s < f; ++s)
      (r = i[s]) && e.call(r, r.__data__, s, i);
  return this;
}
function Bi(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Di(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Ri(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function Ii(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function Oi(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function Ui(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function Zi(e, t) {
  var n = Xt(e);
  if (arguments.length < 2) {
    var l = this.node();
    return n.local ? l.getAttributeNS(n.space, n.local) : l.getAttribute(n);
  }
  return this.each((t == null ? n.local ? Di : Bi : typeof t == "function" ? n.local ? Ui : Oi : n.local ? Ii : Ri)(n, t));
}
function Jt(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function Hi(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Xi(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function Yi(e, t, n) {
  return function() {
    var l = t.apply(this, arguments);
    l == null ? this.style.removeProperty(e) : this.style.setProperty(e, l, n);
  };
}
function Ki(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? Hi : typeof t == "function" ? Yi : Xi)(e, t, n ?? "")) : Gi(this.node(), e);
}
function Gi(e, t) {
  return e.style.getPropertyValue(t) || Jt(e).getComputedStyle(e, null).getPropertyValue(t);
}
function Wi(e) {
  return function() {
    delete this[e];
  };
}
function Ji(e, t) {
  return function() {
    this[e] = t;
  };
}
function Qi(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function ji(e, t) {
  return arguments.length > 1 ? this.each((t == null ? Wi : typeof t == "function" ? Qi : Ji)(e, t)) : this.node()[e];
}
function Qt(e) {
  return e.trim().split(/^|\s+/);
}
function Ke(e) {
  return e.classList || new jt(e);
}
function jt(e) {
  this._node = e, this._names = Qt(e.getAttribute("class") || "");
}
jt.prototype = {
  add: function(e) {
    var t = this._names.indexOf(e);
    t < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(e) {
    var t = this._names.indexOf(e);
    t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(e) {
    return this._names.indexOf(e) >= 0;
  }
};
function xt(e, t) {
  for (var n = Ke(e), l = -1, i = t.length; ++l < i; )
    n.add(t[l]);
}
function $t(e, t) {
  for (var n = Ke(e), l = -1, i = t.length; ++l < i; )
    n.remove(t[l]);
}
function xi(e) {
  return function() {
    xt(this, e);
  };
}
function $i(e) {
  return function() {
    $t(this, e);
  };
}
function es(e, t) {
  return function() {
    (t.apply(this, arguments) ? xt : $t)(this, e);
  };
}
function ts(e, t) {
  var n = Qt(e + "");
  if (arguments.length < 2) {
    for (var l = Ke(this.node()), i = -1, s = n.length; ++i < s; )
      if (!l.contains(n[i]))
        return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? es : t ? xi : $i)(n, t));
}
function ns() {
  this.textContent = "";
}
function ls(e) {
  return function() {
    this.textContent = e;
  };
}
function is(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function ss(e) {
  return arguments.length ? this.each(e == null ? ns : (typeof e == "function" ? is : ls)(e)) : this.node().textContent;
}
function rs() {
  this.innerHTML = "";
}
function os(e) {
  return function() {
    this.innerHTML = e;
  };
}
function fs(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function as(e) {
  return arguments.length ? this.each(e == null ? rs : (typeof e == "function" ? fs : os)(e)) : this.node().innerHTML;
}
function us() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function cs() {
  return this.each(us);
}
function _s() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function ds() {
  return this.each(_s);
}
function ms(e) {
  var t = typeof e == "function" ? e : Yt(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function hs() {
  return null;
}
function gs(e, t) {
  var n = typeof e == "function" ? e : Yt(e), l = t == null ? hs : typeof t == "function" ? t : Kt(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), l.apply(this, arguments) || null);
  });
}
function ps() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function bs() {
  return this.each(ps);
}
function ws() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function vs() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function ys(e) {
  return this.select(e ? vs : ws);
}
function ks(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Cs(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function As(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", l = t.indexOf(".");
    return l >= 0 && (n = t.slice(l + 1), t = t.slice(0, l)), { type: t, name: n };
  });
}
function Ss(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, l = -1, i = t.length, s; n < i; ++n)
        s = t[n], (!e.type || s.type === e.type) && s.name === e.name ? this.removeEventListener(s.type, s.listener, s.options) : t[++l] = s;
      ++l ? t.length = l : delete this.__on;
    }
  };
}
function Ns(e, t, n) {
  return function() {
    var l = this.__on, i, s = Cs(t);
    if (l) {
      for (var f = 0, r = l.length; f < r; ++f)
        if ((i = l[f]).type === e.type && i.name === e.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = s, i.options = n), i.value = t;
          return;
        }
    }
    this.addEventListener(e.type, s, n), i = { type: e.type, name: e.name, value: t, listener: s, options: n }, l ? l.push(i) : this.__on = [i];
  };
}
function Ls(e, t, n) {
  var l = As(e + ""), i, s = l.length, f;
  if (arguments.length < 2) {
    var r = this.node().__on;
    if (r) {
      for (var o = 0, a = r.length, u; o < a; ++o)
        for (i = 0, u = r[o]; i < s; ++i)
          if ((f = l[i]).type === u.type && f.name === u.name)
            return u.value;
    }
    return;
  }
  for (r = t ? Ns : Ss, i = 0; i < s; ++i)
    this.each(r(l[i], t, n));
  return this;
}
function en(e, t, n) {
  var l = Jt(e), i = l.CustomEvent;
  typeof i == "function" ? i = new i(t, n) : (i = l.document.createEvent("Event"), n ? (i.initEvent(t, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(t, !1, !1)), e.dispatchEvent(i);
}
function Es(e, t) {
  return function() {
    return en(this, e, t);
  };
}
function qs(e, t) {
  return function() {
    return en(this, e, t.apply(this, arguments));
  };
}
function Fs(e, t) {
  return this.each((typeof t == "function" ? qs : Es)(e, t));
}
function* Ms() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var l = e[t], i = 0, s = l.length, f; i < s; ++i)
      (f = l[i]) && (yield f);
}
var Ps = [null];
function I(e, t) {
  this._groups = e, this._parents = t;
}
function Vs() {
  return this;
}
I.prototype = {
  constructor: I,
  select: ti,
  selectAll: ri,
  selectChild: ci,
  selectChildren: hi,
  filter: gi,
  data: ki,
  enter: pi,
  exit: Ai,
  join: Si,
  merge: Ni,
  selection: Vs,
  order: Li,
  sort: Ei,
  call: Fi,
  nodes: Mi,
  node: Pi,
  size: Vi,
  empty: Ti,
  each: zi,
  attr: Zi,
  style: Ki,
  property: ji,
  classed: ts,
  text: ss,
  html: as,
  raise: cs,
  lower: ds,
  append: ms,
  insert: gs,
  remove: bs,
  clone: ys,
  datum: ks,
  on: Ls,
  dispatch: Fs,
  [Symbol.iterator]: Ms
};
function we(e) {
  return typeof e == "string" ? new I([[document.querySelector(e)]], [document.documentElement]) : new I([[e]], Ps);
}
function Ts(e) {
  let t;
  for (; t = e.sourceEvent; )
    e = t;
  return e;
}
function vt(e, t) {
  if (e = Ts(e), t === void 0 && (t = e.currentTarget), t) {
    var n = t.ownerSVGElement || t;
    if (n.createSVGPoint) {
      var l = n.createSVGPoint();
      return l.x = e.clientX, l.y = e.clientY, l = l.matrixTransform(t.getScreenCTM().inverse()), [l.x, l.y];
    }
    if (t.getBoundingClientRect) {
      var i = t.getBoundingClientRect();
      return [e.clientX - i.left - t.clientLeft, e.clientY - i.top - t.clientTop];
    }
  }
  return [e.pageX, e.pageY];
}
const zs = { passive: !1 }, ve = { capture: !0, passive: !1 };
function Ie(e) {
  e.stopImmediatePropagation();
}
function ue(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Bs(e) {
  var t = e.document.documentElement, n = we(e).on("dragstart.drag", ue, ve);
  "onselectstart" in t ? n.on("selectstart.drag", ue, ve) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Ds(e, t) {
  var n = e.document.documentElement, l = we(e).on("dragstart.drag", null);
  t && (l.on("click.drag", ue, ve), setTimeout(function() {
    l.on("click.drag", null);
  }, 0)), "onselectstart" in n ? l.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Se = (e) => () => e;
function He(e, {
  sourceEvent: t,
  subject: n,
  target: l,
  identifier: i,
  active: s,
  x: f,
  y: r,
  dx: o,
  dy: a,
  dispatch: u
}) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    subject: { value: n, enumerable: !0, configurable: !0 },
    target: { value: l, enumerable: !0, configurable: !0 },
    identifier: { value: i, enumerable: !0, configurable: !0 },
    active: { value: s, enumerable: !0, configurable: !0 },
    x: { value: f, enumerable: !0, configurable: !0 },
    y: { value: r, enumerable: !0, configurable: !0 },
    dx: { value: o, enumerable: !0, configurable: !0 },
    dy: { value: a, enumerable: !0, configurable: !0 },
    _: { value: u }
  });
}
He.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function Rs(e) {
  return !e.ctrlKey && !e.button;
}
function Is() {
  return this.parentNode;
}
function Os(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Us() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Zs() {
  var e = Rs, t = Is, n = Os, l = Us, i = {}, s = Ht("start", "drag", "end"), f = 0, r, o, a, u, d = 0;
  function m(c) {
    c.on("mousedown.drag", _).filter(l).on("touchstart.drag", y).on("touchmove.drag", v, zs).on("touchend.drag touchcancel.drag", C).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function _(c, A) {
    if (!(u || !e.call(this, c, A))) {
      var h = p(this, t.call(this, c, A), c, A, "mouse");
      h && (we(c.view).on("mousemove.drag", g, ve).on("mouseup.drag", w, ve), Bs(c.view), Ie(c), a = !1, r = c.clientX, o = c.clientY, h("start", c));
    }
  }
  function g(c) {
    if (ue(c), !a) {
      var A = c.clientX - r, h = c.clientY - o;
      a = A * A + h * h > d;
    }
    i.mouse("drag", c);
  }
  function w(c) {
    we(c.view).on("mousemove.drag mouseup.drag", null), Ds(c.view, a), ue(c), i.mouse("end", c);
  }
  function y(c, A) {
    if (e.call(this, c, A)) {
      var h = c.changedTouches, b = t.call(this, c, A), L = h.length, F, T;
      for (F = 0; F < L; ++F)
        (T = p(this, b, c, A, h[F].identifier, h[F])) && (Ie(c), T("start", c, h[F]));
    }
  }
  function v(c) {
    var A = c.changedTouches, h = A.length, b, L;
    for (b = 0; b < h; ++b)
      (L = i[A[b].identifier]) && (ue(c), L("drag", c, A[b]));
  }
  function C(c) {
    var A = c.changedTouches, h = A.length, b, L;
    for (u && clearTimeout(u), u = setTimeout(function() {
      u = null;
    }, 500), b = 0; b < h; ++b)
      (L = i[A[b].identifier]) && (Ie(c), L("end", c, A[b]));
  }
  function p(c, A, h, b, L, F) {
    var T = s.copy(), M = vt(F || h, A), me, H, X;
    if ((X = n.call(c, new He("beforestart", {
      sourceEvent: h,
      target: m,
      identifier: L,
      active: f,
      x: M[0],
      y: M[1],
      dx: 0,
      dy: 0,
      dispatch: T
    }), b)) != null)
      return me = X.x - M[0] || 0, H = X.y - M[1] || 0, function Y(le, ye, ke) {
        var he = M, j;
        switch (le) {
          case "start":
            i[L] = Y, j = f++;
            break;
          case "end":
            delete i[L], --f;
          case "drag":
            M = vt(ke || ye, A), j = f;
            break;
        }
        T.call(
          le,
          c,
          new He(le, {
            sourceEvent: ye,
            subject: X,
            target: m,
            identifier: L,
            active: j,
            x: M[0] + me,
            y: M[1] + H,
            dx: M[0] - he[0],
            dy: M[1] - he[1],
            dispatch: T
          }),
          b
        );
      };
  }
  return m.filter = function(c) {
    return arguments.length ? (e = typeof c == "function" ? c : Se(!!c), m) : e;
  }, m.container = function(c) {
    return arguments.length ? (t = typeof c == "function" ? c : Se(c), m) : t;
  }, m.subject = function(c) {
    return arguments.length ? (n = typeof c == "function" ? c : Se(c), m) : n;
  }, m.touchable = function(c) {
    return arguments.length ? (l = typeof c == "function" ? c : Se(!!c), m) : l;
  }, m.on = function() {
    var c = s.on.apply(s, arguments);
    return c === s ? m : c;
  }, m.clickDistance = function(c) {
    return arguments.length ? (d = (c = +c) * c, m) : Math.sqrt(d);
  }, m;
}
const {
  SvelteComponent: Hs,
  append: Xs,
  attr: x,
  detach: Ys,
  init: Ks,
  insert: Gs,
  noop: yt,
  safe_not_equal: Ws,
  svg_element: kt
} = window.__gradio__svelte__internal;
function Js(e) {
  let t, n;
  return {
    c() {
      t = kt("svg"), n = kt("path"), x(n, "fill", "currentColor"), x(n, "d", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"), x(t, "xmlns", "http://www.w3.org/2000/svg"), x(t, "width", "1em"), x(t, "height", "1em"), x(t, "viewBox", "0 0 512 512"), x(
        t,
        "class",
        /*classNames*/
        e[0]
      );
    },
    m(l, i) {
      Gs(l, t, i), Xs(t, n);
    },
    p(l, [i]) {
      i & /*classNames*/
      1 && x(
        t,
        "class",
        /*classNames*/
        l[0]
      );
    },
    i: yt,
    o: yt,
    d(l) {
      l && Ys(t);
    }
  };
}
function Qs(e, t, n) {
  let { classNames: l = "" } = t;
  return e.$$set = (i) => {
    "classNames" in i && n(0, l = i.classNames);
  }, [l];
}
class js extends Hs {
  constructor(t) {
    super(), Ks(this, t, Qs, Js, Ws, { classNames: 0 });
  }
}
const {
  SvelteComponent: xs,
  append: B,
  attr: V,
  binding_callbacks: Ct,
  create_component: $s,
  destroy_component: er,
  detach: tr,
  element: Z,
  init: nr,
  insert: lr,
  listen: J,
  mount_component: ir,
  run_all: sr,
  safe_not_equal: rr,
  set_data: or,
  set_input_value: At,
  set_style: St,
  space: Nt,
  text: fr,
  transition_in: ar,
  transition_out: ur
} = window.__gradio__svelte__internal, { onMount: cr, createEventDispatcher: _r } = window.__gradio__svelte__internal;
function dr(e) {
  let t, n, l, i, s, f, r, o, a = (
    /*prompt*/
    e[0].scale.toFixed(1) + ""
  ), u, d, m, _, g, w, y, v, C, p, c, A;
  return v = new js({}), {
    c() {
      t = Z("div"), n = Z("div"), l = Z("div"), i = Z("div"), s = Z("div"), f = Z("span"), r = Z("span"), o = Z("span"), u = fr(a), d = Nt(), m = Z("div"), _ = Z("input"), w = Nt(), y = Z("button"), $s(v.$$.fragment), V(o, "class", "text-black svelte-1wmphae"), V(r, "class", "text-black svelte-1wmphae"), V(f, "class", "flex text-[0.5rem] font-mono text-black dark:group-hover:text-white svelte-1wmphae"), V(s, "class", "bottom-full p-1 svelte-1wmphae"), V(i, "class", "relative svelte-1wmphae"), V(l, "class", "absolute z-10 flex items-center justify-center w-[2.5em] svelte-1wmphae"), V(_, "type", "text"), V(_, "placeholder", "Prompt"), V(_, "class", g = "text-sm z-0 pl pr py-2 outline-none text-black " + /*prompt*/
      (e[0].neg_guidance ? "line-through" : "") + " svelte-1wmphae"), St(_, "width", "calc(" + Math.max(
        14,
        /*prompt*/
        e[0].prompt.length + 1
      ) + "ch + 2em) "), V(m, "class", "relative flex z-0 svelte-1wmphae"), V(y, "class", "absolute z-1 right-1 text text-black hover:text-red-500 invisible group-hover:visible svelte-1wmphae"), V(y, "title", "Remove prompt"), V(n, "class", C = "flex justify-between items-center rounded-md overflow-hidden " + /*isDragging*/
      (e[1] || /*isHovering*/
      e[3] ? "select-none touch-manipulation" : "") + " svelte-1wmphae"), V(t, "class", "w-min flex flex-col group relative svelte-1wmphae");
    },
    m(h, b) {
      lr(h, t, b), B(t, n), B(n, l), B(l, i), B(i, s), B(s, f), B(f, r), B(r, o), B(o, u), B(n, d), B(n, m), B(m, _), e[10](_), At(
        _,
        /*prompt*/
        e[0].prompt
      ), B(n, w), B(n, y), ir(v, y, null), e[13](t), p = !0, c || (A = [
        J(
          _,
          "keypress",
          /*onKeyPress*/
          e[6]
        ),
        J(
          _,
          "input",
          /*input_input_handler*/
          e[11]
        ),
        J(
          y,
          "click",
          /*click_handler*/
          e[12]
        ),
        J(
          t,
          "pointerenter",
          /*pointerenter_handler*/
          e[14]
        ),
        J(
          t,
          "pointerleave",
          /*pointerleave_handler*/
          e[15]
        ),
        J(
          t,
          "pointercancel",
          /*pointercancel_handler*/
          e[16]
        ),
        J(
          t,
          "pointerover",
          /*pointerover_handler*/
          e[17]
        ),
        J(
          t,
          "pointerout",
          /*pointerout_handler*/
          e[18]
        ),
        J(
          t,
          "pointerenter",
          /*pointerenter_handler_1*/
          e[19]
        )
      ], c = !0);
    },
    p(h, [b]) {
      (!p || b & /*prompt*/
      1) && a !== (a = /*prompt*/
      h[0].scale.toFixed(1) + "") && or(u, a), (!p || b & /*prompt*/
      1 && g !== (g = "text-sm z-0 pl pr py-2 outline-none text-black " + /*prompt*/
      (h[0].neg_guidance ? "line-through" : "") + " svelte-1wmphae")) && V(_, "class", g), (!p || b & /*prompt*/
      1) && St(_, "width", "calc(" + Math.max(
        14,
        /*prompt*/
        h[0].prompt.length + 1
      ) + "ch + 2em) "), b & /*prompt*/
      1 && _.value !== /*prompt*/
      h[0].prompt && At(
        _,
        /*prompt*/
        h[0].prompt
      ), (!p || b & /*isDragging, isHovering*/
      10 && C !== (C = "flex justify-between items-center rounded-md overflow-hidden " + /*isDragging*/
      (h[1] || /*isHovering*/
      h[3] ? "select-none touch-manipulation" : "") + " svelte-1wmphae")) && V(n, "class", C);
    },
    i(h) {
      p || (ar(v.$$.fragment, h), p = !0);
    },
    o(h) {
      ur(v.$$.fragment, h), p = !1;
    },
    d(h) {
      h && tr(t), e[10](null), er(v), e[13](null), c = !1, sr(A);
    }
  };
}
function mr(e, t, n) {
  let { prompt: l } = t, { min: i = 0 } = t, { max: s = 2 } = t, { step: f = 0.01 } = t, r, o = !1, a = !1;
  const u = _r();
  let d = 0, m;
  cr(() => {
    const L = Zs().on("start", (F) => {
      d = l.scale, n(1, o = !0);
    }).on("drag", (F) => {
      const { dx: T, dy: M } = F;
      d -= M * f, d = Math.min(d, s), d = Math.max(d, i), n(0, l.scale = d, l);
    }).on("end", (F) => {
      n(1, o = !1);
    });
    we(m).call(L), r.focus();
  });
  function _(L) {
    L.key === "Enter" && u("add");
  }
  function g(L) {
    Ct[L ? "unshift" : "push"](() => {
      r = L, n(2, r);
    });
  }
  function w() {
    l.prompt = this.value, n(0, l);
  }
  const y = () => u("remove");
  function v(L) {
    Ct[L ? "unshift" : "push"](() => {
      m = L, n(4, m);
    });
  }
  const C = () => n(3, a = !0), p = () => n(3, a = !1), c = () => n(3, a = !1), A = () => n(3, a = !0), h = () => n(3, a = !1), b = () => n(3, a = !0);
  return e.$$set = (L) => {
    "prompt" in L && n(0, l = L.prompt), "min" in L && n(7, i = L.min), "max" in L && n(8, s = L.max), "step" in L && n(9, f = L.step);
  }, e.$$.update = () => {
    e.$$.dirty & /*isDragging*/
    2 && (o ? document.body.classList.add("grabbing") : document.body.classList.remove("grabbing"));
  }, [
    l,
    o,
    r,
    a,
    m,
    u,
    _,
    i,
    s,
    f,
    g,
    w,
    y,
    v,
    C,
    p,
    c,
    A,
    h,
    b
  ];
}
class hr extends xs {
  constructor(t) {
    super(), nr(this, t, mr, dr, rr, { prompt: 0, min: 7, max: 8, step: 9 });
  }
}
const {
  SvelteComponent: gr,
  append: pr,
  attr: $,
  detach: br,
  init: wr,
  insert: vr,
  noop: Lt,
  safe_not_equal: yr,
  svg_element: Et
} = window.__gradio__svelte__internal;
function kr(e) {
  let t, n;
  return {
    c() {
      t = Et("svg"), n = Et("path"), $(n, "fill", "currentColor"), $(n, "d", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"), $(t, "xmlns", "http://www.w3.org/2000/svg"), $(t, "width", "1em"), $(t, "height", "1em"), $(t, "viewBox", "0 0 512 512"), $(
        t,
        "class",
        /*classNames*/
        e[0]
      );
    },
    m(l, i) {
      vr(l, t, i), pr(t, n);
    },
    p(l, [i]) {
      i & /*classNames*/
      1 && $(
        t,
        "class",
        /*classNames*/
        l[0]
      );
    },
    i: Lt,
    o: Lt,
    d(l) {
      l && br(t);
    }
  };
}
function Cr(e, t, n) {
  let { classNames: l = "" } = t;
  return e.$$set = (i) => {
    "classNames" in i && n(0, l = i.classNames);
  }, [l];
}
class Ar extends gr {
  constructor(t) {
    super(), wr(this, t, Cr, kr, yr, { classNames: 0 });
  }
}
const {
  SvelteComponent: Sr,
  add_flush_callback: Nr,
  append: ge,
  attr: re,
  bind: Lr,
  binding_callbacks: Er,
  check_outros: qr,
  create_component: tn,
  destroy_component: nn,
  destroy_each: Fr,
  detach: Mr,
  element: Ne,
  ensure_array_like: qt,
  group_outros: Pr,
  init: Vr,
  insert: Tr,
  listen: zr,
  mount_component: ln,
  safe_not_equal: Br,
  space: Ft,
  transition_in: be,
  transition_out: Pe
} = window.__gradio__svelte__internal, { createEventDispatcher: Dr } = window.__gradio__svelte__internal;
function Mt(e, t, n) {
  const l = e.slice();
  return l[12] = t[n], l[13] = t, l[14] = n, l;
}
function Pt(e) {
  let t, n, l;
  function i(r) {
    e[7](
      r,
      /*prompt*/
      e[12],
      /*each_value*/
      e[13],
      /*prompt_index*/
      e[14]
    );
  }
  function s() {
    return (
      /*remove_handler*/
      e[8](
        /*prompt*/
        e[12]
      )
    );
  }
  let f = {
    min: (
      /*min*/
      e[2]
    ),
    max: (
      /*max*/
      e[3]
    ),
    step: (
      /*step*/
      e[4]
    )
  };
  return (
    /*prompt*/
    e[12] !== void 0 && (f.prompt = /*prompt*/
    e[12]), t = new hr({ props: f }), Er.push(() => Lr(t, "prompt", i)), t.$on("remove", s), t.$on(
      "add",
      /*add_handler*/
      e[9]
    ), {
      c() {
        tn(t.$$.fragment);
      },
      m(r, o) {
        ln(t, r, o), l = !0;
      },
      p(r, o) {
        e = r;
        const a = {};
        o & /*min*/
        4 && (a.min = /*min*/
        e[2]), o & /*max*/
        8 && (a.max = /*max*/
        e[3]), o & /*step*/
        16 && (a.step = /*step*/
        e[4]), !n && o & /*promptsList*/
        1 && (n = !0, a.prompt = /*prompt*/
        e[12], Nr(() => n = !1)), t.$set(a);
      },
      i(r) {
        l || (be(t.$$.fragment, r), l = !0);
      },
      o(r) {
        Pe(t.$$.fragment, r), l = !1;
      },
      d(r) {
        nn(t, r);
      }
    }
  );
}
function Rr(e) {
  let t, n, l, i, s, f, r, o, a, u, d, m = qt(
    /*promptsList*/
    e[0]
  ), _ = [];
  for (let w = 0; w < m.length; w += 1)
    _[w] = Pt(Mt(e, m, w));
  const g = (w) => Pe(_[w], 1, 1, () => {
    _[w] = null;
  });
  return s = new Ar({}), {
    c() {
      t = Ne("div");
      for (let w = 0; w < _.length; w += 1)
        _[w].c();
      n = Ft(), l = Ne("div"), i = Ne("button"), tn(s.$$.fragment), f = Ft(), r = Ne("h2"), r.textContent = "Add Prompt", re(r, "class", "text-xs font-normal px-1 svelte-9vwpr1"), re(i, "title", "Add Concept"), re(i, "class", "flex items-center text-base text-black hover-text-cyan-500 dark:text-white svelte-9vwpr1"), re(l, "class", "flex flex-col gap-1 svelte-9vwpr1"), re(t, "class", o = "flex items-center gap-1 flex-wrap " + /*classNames*/
      e[1] + " svelte-9vwpr1");
    },
    m(w, y) {
      Tr(w, t, y);
      for (let v = 0; v < _.length; v += 1)
        _[v] && _[v].m(t, null);
      ge(t, n), ge(t, l), ge(l, i), ln(s, i, null), ge(i, f), ge(i, r), a = !0, u || (d = zr(
        i,
        "click",
        /*click_handler*/
        e[10]
      ), u = !0);
    },
    p(w, [y]) {
      if (y & /*min, max, step, promptsList, removeConcept, addPrompt*/
      125) {
        m = qt(
          /*promptsList*/
          w[0]
        );
        let v;
        for (v = 0; v < m.length; v += 1) {
          const C = Mt(w, m, v);
          _[v] ? (_[v].p(C, y), be(_[v], 1)) : (_[v] = Pt(C), _[v].c(), be(_[v], 1), _[v].m(t, n));
        }
        for (Pr(), v = m.length; v < _.length; v += 1)
          g(v);
        qr();
      }
      (!a || y & /*classNames*/
      2 && o !== (o = "flex items-center gap-1 flex-wrap " + /*classNames*/
      w[1] + " svelte-9vwpr1")) && re(t, "class", o);
    },
    i(w) {
      if (!a) {
        for (let y = 0; y < m.length; y += 1)
          be(_[y]);
        be(s.$$.fragment, w), a = !0;
      }
    },
    o(w) {
      _ = _.filter(Boolean);
      for (let y = 0; y < _.length; y += 1)
        Pe(_[y]);
      Pe(s.$$.fragment, w), a = !1;
    },
    d(w) {
      w && Mr(t), Fr(_, w), nn(s), u = !1, d();
    }
  };
}
function Ir(e, t, n) {
  let { classNames: l = "" } = t, { promptsList: i = [] } = t, { min: s } = t, { max: f } = t, { step: r } = t;
  function o(g) {
    n(0, i = i.filter((w) => w.id !== g.id));
  }
  function a(g = !1) {
    n(0, i = [
      ...i,
      {
        id: fn(),
        prompt: "",
        scale: 1,
        negative: g
      }
    ]);
  }
  Dr();
  function u(g, w, y, v) {
    y[v] = g, n(0, i);
  }
  const d = (g) => o(g), m = () => a(), _ = () => a(!1);
  return e.$$set = (g) => {
    "classNames" in g && n(1, l = g.classNames), "promptsList" in g && n(0, i = g.promptsList), "min" in g && n(2, s = g.min), "max" in g && n(3, f = g.max), "step" in g && n(4, r = g.step);
  }, [
    i,
    l,
    s,
    f,
    r,
    o,
    a,
    u,
    d,
    m,
    _
  ];
}
class Or extends Sr {
  constructor(t) {
    super(), Vr(this, t, Ir, Rr, Br, {
      classNames: 1,
      promptsList: 0,
      min: 2,
      max: 3,
      step: 4
    });
  }
}
const {
  SvelteComponent: Ur,
  add_flush_callback: Zr,
  append: Hr,
  assign: Xr,
  attr: Yr,
  bind: Kr,
  binding_callbacks: Gr,
  check_outros: Wr,
  create_component: ze,
  destroy_component: Be,
  detach: Xe,
  element: Jr,
  flush: P,
  get_spread_object: Qr,
  get_spread_update: jr,
  group_outros: xr,
  init: $r,
  insert: Ye,
  mount_component: De,
  safe_not_equal: eo,
  set_data: to,
  space: Vt,
  text: no,
  toggle_class: lo,
  transition_in: te,
  transition_out: fe
} = window.__gradio__svelte__internal;
function Tt(e) {
  let t, n;
  const l = [
    { autoscroll: (
      /*gradio*/
      e[1].autoscroll
    ) },
    { i18n: (
      /*gradio*/
      e[1].i18n
    ) },
    /*loading_status*/
    e[10]
  ];
  let i = {};
  for (let s = 0; s < l.length; s += 1)
    i = Xr(i, l[s]);
  return t = new Wl({ props: i }), {
    c() {
      ze(t.$$.fragment);
    },
    m(s, f) {
      De(t, s, f), n = !0;
    },
    p(s, f) {
      const r = f & /*gradio, loading_status*/
      1026 ? jr(l, [
        f & /*gradio*/
        2 && { autoscroll: (
          /*gradio*/
          s[1].autoscroll
        ) },
        f & /*gradio*/
        2 && { i18n: (
          /*gradio*/
          s[1].i18n
        ) },
        f & /*loading_status*/
        1024 && Qr(
          /*loading_status*/
          s[10]
        )
      ]) : {};
      t.$set(r);
    },
    i(s) {
      n || (te(t.$$.fragment, s), n = !0);
    },
    o(s) {
      fe(t.$$.fragment, s), n = !1;
    },
    d(s) {
      Be(t, s);
    }
  };
}
function io(e) {
  let t;
  return {
    c() {
      t = no(
        /*label*/
        e[3]
      );
    },
    m(n, l) {
      Ye(n, t, l);
    },
    p(n, l) {
      l & /*label*/
      8 && to(
        t,
        /*label*/
        n[3]
      );
    },
    d(n) {
      n && Xe(t);
    }
  };
}
function so(e) {
  let t, n, l, i, s, f, r, o = (
    /*loading_status*/
    e[10] && Tt(e)
  );
  l = new ol({
    props: {
      show_label: (
        /*show_label*/
        e[7]
      ),
      info: (
        /*info*/
        e[2]
      ),
      $$slots: { default: [io] },
      $$scope: { ctx: e }
    }
  });
  function a(d) {
    e[18](d);
  }
  let u = {
    min: (
      /*min*/
      e[11]
    ),
    max: (
      /*max*/
      e[12]
    ),
    step: (
      /*step*/
      e[13]
    ),
    classNames: "py-5"
  };
  return (
    /*value*/
    e[0] !== void 0 && (u.promptsList = /*value*/
    e[0]), s = new Or({ props: u }), Gr.push(() => Kr(s, "promptsList", a)), {
      c() {
        o && o.c(), t = Vt(), n = Jr("label"), ze(l.$$.fragment), i = Vt(), ze(s.$$.fragment), Yr(n, "class", "relative"), lo(n, "container", oo);
      },
      m(d, m) {
        o && o.m(d, m), Ye(d, t, m), Ye(d, n, m), De(l, n, null), Hr(n, i), De(s, n, null), r = !0;
      },
      p(d, m) {
        /*loading_status*/
        d[10] ? o ? (o.p(d, m), m & /*loading_status*/
        1024 && te(o, 1)) : (o = Tt(d), o.c(), te(o, 1), o.m(t.parentNode, t)) : o && (xr(), fe(o, 1, 1, () => {
          o = null;
        }), Wr());
        const _ = {};
        m & /*show_label*/
        128 && (_.show_label = /*show_label*/
        d[7]), m & /*info*/
        4 && (_.info = /*info*/
        d[2]), m & /*$$scope, label*/
        8388616 && (_.$$scope = { dirty: m, ctx: d }), l.$set(_);
        const g = {};
        m & /*min*/
        2048 && (g.min = /*min*/
        d[11]), m & /*max*/
        4096 && (g.max = /*max*/
        d[12]), m & /*step*/
        8192 && (g.step = /*step*/
        d[13]), !f && m & /*value*/
        1 && (f = !0, g.promptsList = /*value*/
        d[0], Zr(() => f = !1)), s.$set(g);
      },
      i(d) {
        r || (te(o), te(l.$$.fragment, d), te(s.$$.fragment, d), r = !0);
      },
      o(d) {
        fe(o), fe(l.$$.fragment, d), fe(s.$$.fragment, d), r = !1;
      },
      d(d) {
        d && (Xe(t), Xe(n)), o && o.d(d), Be(l), Be(s);
      }
    }
  );
}
function ro(e) {
  let t, n;
  return t = new An({
    props: {
      visible: (
        /*visible*/
        e[6]
      ),
      elem_id: (
        /*elem_id*/
        e[4]
      ),
      elem_classes: (
        /*elem_classes*/
        e[5]
      ),
      scale: (
        /*scale*/
        e[8]
      ),
      min_width: (
        /*min_width*/
        e[9]
      ),
      allow_overflow: !1,
      padding: !0,
      $$slots: { default: [so] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      ze(t.$$.fragment);
    },
    m(l, i) {
      De(t, l, i), n = !0;
    },
    p(l, [i]) {
      const s = {};
      i & /*visible*/
      64 && (s.visible = /*visible*/
      l[6]), i & /*elem_id*/
      16 && (s.elem_id = /*elem_id*/
      l[4]), i & /*elem_classes*/
      32 && (s.elem_classes = /*elem_classes*/
      l[5]), i & /*scale*/
      256 && (s.scale = /*scale*/
      l[8]), i & /*min_width*/
      512 && (s.min_width = /*min_width*/
      l[9]), i & /*$$scope, min, max, step, value, show_label, info, label, gradio, loading_status*/
      8404111 && (s.$$scope = { dirty: i, ctx: l }), t.$set(s);
    },
    i(l) {
      n || (te(t.$$.fragment, l), n = !0);
    },
    o(l) {
      fe(t.$$.fragment, l), n = !1;
    },
    d(l) {
      Be(t, l);
    }
  };
}
const oo = !1;
function fo(e, t, n) {
  let { gradio: l } = t, { info: i = void 0 } = t, { label: s = "Prompt Weighting" } = t, { elem_id: f = "" } = t, { elem_classes: r = [] } = t, { visible: o = !0 } = t, { value: a = [] } = t, { placeholder: u = "" } = t, { show_label: d } = t, { scale: m = null } = t, { min_width: _ = void 0 } = t, { loading_status: g = void 0 } = t, { value_is_output: w = !1 } = t, { interactive: y } = t, { rtl: v = !1 } = t, { min: C = 0 } = t, { max: p = 2 } = t, { step: c = 0.01 } = t;
  function A() {
    l.dispatch("change", a), w || (l.dispatch("input"), l.dispatch("submit"));
  }
  function h(b) {
    a = b, n(0, a);
  }
  return e.$$set = (b) => {
    "gradio" in b && n(1, l = b.gradio), "info" in b && n(2, i = b.info), "label" in b && n(3, s = b.label), "elem_id" in b && n(4, f = b.elem_id), "elem_classes" in b && n(5, r = b.elem_classes), "visible" in b && n(6, o = b.visible), "value" in b && n(0, a = b.value), "placeholder" in b && n(14, u = b.placeholder), "show_label" in b && n(7, d = b.show_label), "scale" in b && n(8, m = b.scale), "min_width" in b && n(9, _ = b.min_width), "loading_status" in b && n(10, g = b.loading_status), "value_is_output" in b && n(15, w = b.value_is_output), "interactive" in b && n(16, y = b.interactive), "rtl" in b && n(17, v = b.rtl), "min" in b && n(11, C = b.min), "max" in b && n(12, p = b.max), "step" in b && n(13, c = b.step);
  }, e.$$.update = () => {
    e.$$.dirty & /*value*/
    1 && a === null && n(0, a = []), e.$$.dirty & /*value*/
    1 && A();
  }, [
    a,
    l,
    i,
    s,
    f,
    r,
    o,
    d,
    m,
    _,
    g,
    C,
    p,
    c,
    u,
    w,
    y,
    v,
    h
  ];
}
class ao extends Ur {
  constructor(t) {
    super(), $r(this, t, fo, ro, eo, {
      gradio: 1,
      info: 2,
      label: 3,
      elem_id: 4,
      elem_classes: 5,
      visible: 6,
      value: 0,
      placeholder: 14,
      show_label: 7,
      scale: 8,
      min_width: 9,
      loading_status: 10,
      value_is_output: 15,
      interactive: 16,
      rtl: 17,
      min: 11,
      max: 12,
      step: 13
    });
  }
  get gradio() {
    return this.$$.ctx[1];
  }
  set gradio(t) {
    this.$$set({ gradio: t }), P();
  }
  get info() {
    return this.$$.ctx[2];
  }
  set info(t) {
    this.$$set({ info: t }), P();
  }
  get label() {
    return this.$$.ctx[3];
  }
  set label(t) {
    this.$$set({ label: t }), P();
  }
  get elem_id() {
    return this.$$.ctx[4];
  }
  set elem_id(t) {
    this.$$set({ elem_id: t }), P();
  }
  get elem_classes() {
    return this.$$.ctx[5];
  }
  set elem_classes(t) {
    this.$$set({ elem_classes: t }), P();
  }
  get visible() {
    return this.$$.ctx[6];
  }
  set visible(t) {
    this.$$set({ visible: t }), P();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(t) {
    this.$$set({ value: t }), P();
  }
  get placeholder() {
    return this.$$.ctx[14];
  }
  set placeholder(t) {
    this.$$set({ placeholder: t }), P();
  }
  get show_label() {
    return this.$$.ctx[7];
  }
  set show_label(t) {
    this.$$set({ show_label: t }), P();
  }
  get scale() {
    return this.$$.ctx[8];
  }
  set scale(t) {
    this.$$set({ scale: t }), P();
  }
  get min_width() {
    return this.$$.ctx[9];
  }
  set min_width(t) {
    this.$$set({ min_width: t }), P();
  }
  get loading_status() {
    return this.$$.ctx[10];
  }
  set loading_status(t) {
    this.$$set({ loading_status: t }), P();
  }
  get value_is_output() {
    return this.$$.ctx[15];
  }
  set value_is_output(t) {
    this.$$set({ value_is_output: t }), P();
  }
  get interactive() {
    return this.$$.ctx[16];
  }
  set interactive(t) {
    this.$$set({ interactive: t }), P();
  }
  get rtl() {
    return this.$$.ctx[17];
  }
  set rtl(t) {
    this.$$set({ rtl: t }), P();
  }
  get min() {
    return this.$$.ctx[11];
  }
  set min(t) {
    this.$$set({ min: t }), P();
  }
  get max() {
    return this.$$.ctx[12];
  }
  set max(t) {
    this.$$set({ max: t }), P();
  }
  get step() {
    return this.$$.ctx[13];
  }
  set step(t) {
    this.$$set({ step: t }), P();
  }
}
export {
  ao as default
};
