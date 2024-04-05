const fn = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let zt = (e = 21) => {
  let t = "", n = crypto.getRandomValues(new Uint8Array(e));
  for (; e--; )
    t += fn[n[e] & 63];
  return t;
};
const {
  SvelteComponent: an,
  assign: un,
  create_slot: cn,
  detach: _n,
  element: dn,
  get_all_dirty_from_scope: hn,
  get_slot_changes: mn,
  get_spread_update: pn,
  init: gn,
  insert: bn,
  safe_not_equal: vn,
  set_dynamic_element_data: Ge,
  set_style: z,
  toggle_class: K,
  transition_in: Bt,
  transition_out: Dt,
  update_slot_base: wn
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
  let o = [
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
  for (let f = 0; f < o.length; f += 1)
    r = un(r, o[f]);
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
    m(f, a) {
      bn(f, t, a), s && s.m(t, null), l = !0;
    },
    p(f, a) {
      s && s.p && (!l || a & /*$$scope*/
      131072) && wn(
        s,
        i,
        f,
        /*$$scope*/
        f[17],
        l ? mn(
          i,
          /*$$scope*/
          f[17],
          a,
          null
        ) : hn(
          /*$$scope*/
          f[17]
        ),
        null
      ), Ge(
        /*tag*/
        f[14]
      )(t, r = pn(o, [
        (!l || a & /*test_id*/
        128) && { "data-testid": (
          /*test_id*/
          f[7]
        ) },
        (!l || a & /*elem_id*/
        4) && { id: (
          /*elem_id*/
          f[2]
        ) },
        (!l || a & /*elem_classes*/
        8 && n !== (n = "block " + /*elem_classes*/
        f[3].join(" ") + " svelte-nl1om8")) && { class: n }
      ])), K(
        t,
        "hidden",
        /*visible*/
        f[10] === !1
      ), K(
        t,
        "padded",
        /*padding*/
        f[6]
      ), K(
        t,
        "border_focus",
        /*border_mode*/
        f[5] === "focus"
      ), K(
        t,
        "border_contrast",
        /*border_mode*/
        f[5] === "contrast"
      ), K(t, "hide-container", !/*explicit_call*/
      f[8] && !/*container*/
      f[9]), a & /*height*/
      1 && z(
        t,
        "height",
        /*get_dimension*/
        f[15](
          /*height*/
          f[0]
        )
      ), a & /*width*/
      2 && z(t, "width", typeof /*width*/
      f[1] == "number" ? `calc(min(${/*width*/
      f[1]}px, 100%))` : (
        /*get_dimension*/
        f[15](
          /*width*/
          f[1]
        )
      )), a & /*variant*/
      16 && z(
        t,
        "border-style",
        /*variant*/
        f[4]
      ), a & /*allow_overflow*/
      2048 && z(
        t,
        "overflow",
        /*allow_overflow*/
        f[11] ? "visible" : "hidden"
      ), a & /*scale*/
      4096 && z(
        t,
        "flex-grow",
        /*scale*/
        f[12]
      ), a & /*min_width*/
      8192 && z(t, "min-width", `calc(min(${/*min_width*/
      f[13]}px, 100%))`);
    },
    i(f) {
      l || (Bt(s, f), l = !0);
    },
    o(f) {
      Dt(s, f), l = !1;
    },
    d(f) {
      f && _n(t), s && s.d(f);
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
      t || (Bt(n, l), t = !0);
    },
    o(l) {
      Dt(n, l), t = !1;
    },
    d(l) {
      n && n.d(l);
    }
  };
}
function Cn(e, t, n) {
  let { $$slots: l = {}, $$scope: i } = t, { height: s = void 0 } = t, { width: o = void 0 } = t, { elem_id: r = "" } = t, { elem_classes: f = [] } = t, { variant: a = "solid" } = t, { border_mode: u = "base" } = t, { padding: m = !0 } = t, { type: g = "normal" } = t, { test_id: _ = void 0 } = t, { explicit_call: b = !1 } = t, { container: v = !0 } = t, { visible: y = !0 } = t, { allow_overflow: w = !0 } = t, { scale: C = null } = t, { min_width: p = 0 } = t, c = g === "fieldset" ? "fieldset" : "div";
  const h = (d) => {
    if (d !== void 0) {
      if (typeof d == "number")
        return d + "px";
      if (typeof d == "string")
        return d;
    }
  };
  return e.$$set = (d) => {
    "height" in d && n(0, s = d.height), "width" in d && n(1, o = d.width), "elem_id" in d && n(2, r = d.elem_id), "elem_classes" in d && n(3, f = d.elem_classes), "variant" in d && n(4, a = d.variant), "border_mode" in d && n(5, u = d.border_mode), "padding" in d && n(6, m = d.padding), "type" in d && n(16, g = d.type), "test_id" in d && n(7, _ = d.test_id), "explicit_call" in d && n(8, b = d.explicit_call), "container" in d && n(9, v = d.container), "visible" in d && n(10, y = d.visible), "allow_overflow" in d && n(11, w = d.allow_overflow), "scale" in d && n(12, C = d.scale), "min_width" in d && n(13, p = d.min_width), "$$scope" in d && n(17, i = d.$$scope);
  }, [
    s,
    o,
    r,
    f,
    a,
    u,
    m,
    _,
    b,
    v,
    y,
    w,
    C,
    p,
    c,
    h,
    g,
    i,
    l
  ];
}
class An extends an {
  constructor(t) {
    super(), gn(this, t, Cn, kn, vn, {
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
  attr: qn,
  create_slot: Nn,
  detach: Ln,
  element: En,
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
  ), i = Nn(
    l,
    e,
    /*$$scope*/
    e[0],
    null
  );
  return {
    c() {
      t = En("div"), i && i.c(), qn(t, "class", "svelte-1hnfib2");
    },
    m(s, o) {
      Vn(s, t, o), i && i.m(t, null), n = !0;
    },
    p(s, [o]) {
      i && i.p && (!n || o & /*$$scope*/
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
          o,
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
      s && Ln(t), i && i.d(s);
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
  detach: Ne,
  element: Kn,
  empty: Gn,
  get_all_dirty_from_scope: Wn,
  get_slot_changes: Jn,
  group_outros: Qn,
  init: jn,
  insert: Le,
  mount_component: xn,
  safe_not_equal: $n,
  set_data: el,
  space: tl,
  text: nl,
  toggle_class: ie,
  transition_in: ge,
  transition_out: Ee,
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
      n || (ge(t.$$.fragment, l), n = !0);
    },
    o(l) {
      Ee(t.$$.fragment, l), n = !1;
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
      Le(n, t, l);
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
      n && Ne(t);
    }
  };
}
function sl(e) {
  let t, n, l, i;
  const s = (
    /*#slots*/
    e[2].default
  ), o = Xn(
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
      t = Kn("span"), o && o.c(), n = tl(), r && r.c(), l = Gn(), We(t, "data-testid", "block-info"), We(t, "class", "svelte-22c38v"), ie(t, "sr-only", !/*show_label*/
      e[0]), ie(t, "hide", !/*show_label*/
      e[0]), ie(
        t,
        "has-info",
        /*info*/
        e[1] != null
      );
    },
    m(f, a) {
      Le(f, t, a), o && o.m(t, null), Le(f, n, a), r && r.m(f, a), Le(f, l, a), i = !0;
    },
    p(f, [a]) {
      o && o.p && (!i || a & /*$$scope*/
      8) && ll(
        o,
        s,
        f,
        /*$$scope*/
        f[3],
        i ? Jn(
          s,
          /*$$scope*/
          f[3],
          a,
          null
        ) : Wn(
          /*$$scope*/
          f[3]
        ),
        null
      ), (!i || a & /*show_label*/
      1) && ie(t, "sr-only", !/*show_label*/
      f[0]), (!i || a & /*show_label*/
      1) && ie(t, "hide", !/*show_label*/
      f[0]), (!i || a & /*info*/
      2) && ie(
        t,
        "has-info",
        /*info*/
        f[1] != null
      ), /*info*/
      f[1] ? r ? (r.p(f, a), a & /*info*/
      2 && ge(r, 1)) : (r = Je(f), r.c(), ge(r, 1), r.m(l.parentNode, l)) : r && (Qn(), Ee(r, 1, 1, () => {
        r = null;
      }), Zn());
    },
    i(f) {
      i || (ge(o, f), ge(r), i = !0);
    },
    o(f) {
      Ee(o, f), Ee(r), i = !1;
    },
    d(f) {
      f && (Ne(t), Ne(n), Ne(l)), o && o.d(f), r && r.d(f);
    }
  };
}
function rl(e, t, n) {
  let { $$slots: l = {}, $$scope: i } = t, { show_label: s = !0 } = t, { info: o = void 0 } = t;
  return e.$$set = (r) => {
    "show_label" in r && n(0, s = r.show_label), "info" in r && n(1, o = r.info), "$$scope" in r && n(3, i = r.$$scope);
  }, [s, o, l, i];
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
const Rt = typeof window < "u";
let je = Rt ? () => window.performance.now() : () => Date.now(), It = Rt ? (e) => requestAnimationFrame(e) : Fe;
const ae = /* @__PURE__ */ new Set();
function Ot(e) {
  ae.forEach((t) => {
    t.c(e) || (ae.delete(t), t.f());
  }), ae.size !== 0 && It(Ot);
}
function ul(e) {
  let t;
  return ae.size === 0 && It(Ot), {
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
      const f = !se.length;
      for (const a of l)
        a[1](), se.push(a, e);
      if (f) {
        for (let a = 0; a < se.length; a += 2)
          se[a][0](se[a + 1]);
        se.length = 0;
      }
    }
  }
  function s(r) {
    i(r(e));
  }
  function o(r, f = Fe) {
    const a = [r, f];
    return l.add(a), l.size === 1 && (n = t(i, s) || Fe), r(e), () => {
      l.delete(a), l.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: s, subscribe: o };
}
function xe(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function Oe(e, t, n, l) {
  if (typeof n == "number" || xe(n)) {
    const i = l - n, s = (n - t) / (e.dt || 1 / 60), o = e.opts.stiffness * i, r = e.opts.damping * s, f = (o - r) * e.inv_mass, a = (s + f) * e.dt;
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
  let o, r, f, a = e, u = e, m = 1, g = 0, _ = !1;
  function b(y, w = {}) {
    u = y;
    const C = f = {};
    return e == null || w.hard || v.stiffness >= 1 && v.damping >= 1 ? (_ = !0, o = je(), a = y, n.set(e = u), Promise.resolve()) : (w.soft && (g = 1 / ((w.soft === !0 ? 0.5 : +w.soft) * 60), m = 0), r || (o = je(), _ = !1, r = ul((p) => {
      if (_)
        return _ = !1, r = null, !1;
      m = Math.min(m + g, 1);
      const c = {
        inv_mass: m,
        opts: v,
        settled: !0,
        dt: (p - o) * 60 / 1e3
      }, h = Oe(c, a, e, u);
      return o = p, a = e, n.set(e = h), c.settled && (r = null), !c.settled;
    })), new Promise((p) => {
      r.promise.then(() => {
        C === f && p();
      });
    }));
  }
  const v = {
    set: b,
    update: (y, w) => b(y(u, e), w),
    subscribe: n.subscribe,
    stiffness: l,
    damping: i,
    precision: s
  };
  return v;
}
const {
  SvelteComponent: _l,
  append: O,
  attr: N,
  component_subscribe: et,
  detach: dl,
  element: hl,
  init: ml,
  insert: pl,
  noop: tt,
  safe_not_equal: gl,
  set_style: Ce,
  svg_element: U,
  toggle_class: nt
} = window.__gradio__svelte__internal, { onMount: bl } = window.__gradio__svelte__internal;
function vl(e) {
  let t, n, l, i, s, o, r, f, a, u, m, g;
  return {
    c() {
      t = hl("div"), n = U("svg"), l = U("g"), i = U("path"), s = U("path"), o = U("path"), r = U("path"), f = U("g"), a = U("path"), u = U("path"), m = U("path"), g = U("path"), N(i, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), N(i, "fill", "#FF7C00"), N(i, "fill-opacity", "0.4"), N(i, "class", "svelte-43sxxs"), N(s, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), N(s, "fill", "#FF7C00"), N(s, "class", "svelte-43sxxs"), N(o, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), N(o, "fill", "#FF7C00"), N(o, "fill-opacity", "0.4"), N(o, "class", "svelte-43sxxs"), N(r, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), N(r, "fill", "#FF7C00"), N(r, "class", "svelte-43sxxs"), Ce(l, "transform", "translate(" + /*$top*/
      e[1][0] + "px, " + /*$top*/
      e[1][1] + "px)"), N(a, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), N(a, "fill", "#FF7C00"), N(a, "fill-opacity", "0.4"), N(a, "class", "svelte-43sxxs"), N(u, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), N(u, "fill", "#FF7C00"), N(u, "class", "svelte-43sxxs"), N(m, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), N(m, "fill", "#FF7C00"), N(m, "fill-opacity", "0.4"), N(m, "class", "svelte-43sxxs"), N(g, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), N(g, "fill", "#FF7C00"), N(g, "class", "svelte-43sxxs"), Ce(f, "transform", "translate(" + /*$bottom*/
      e[2][0] + "px, " + /*$bottom*/
      e[2][1] + "px)"), N(n, "viewBox", "-1200 -1200 3000 3000"), N(n, "fill", "none"), N(n, "xmlns", "http://www.w3.org/2000/svg"), N(n, "class", "svelte-43sxxs"), N(t, "class", "svelte-43sxxs"), nt(
        t,
        "margin",
        /*margin*/
        e[0]
      );
    },
    m(_, b) {
      pl(_, t, b), O(t, n), O(n, l), O(l, i), O(l, s), O(l, o), O(l, r), O(n, f), O(f, a), O(f, u), O(f, m), O(f, g);
    },
    p(_, [b]) {
      b & /*$top*/
      2 && Ce(l, "transform", "translate(" + /*$top*/
      _[1][0] + "px, " + /*$top*/
      _[1][1] + "px)"), b & /*$bottom*/
      4 && Ce(f, "transform", "translate(" + /*$bottom*/
      _[2][0] + "px, " + /*$bottom*/
      _[2][1] + "px)"), b & /*margin*/
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
function wl(e, t, n) {
  let l, i, { margin: s = !0 } = t;
  const o = $e([0, 0]);
  et(e, o, (g) => n(1, l = g));
  const r = $e([0, 0]);
  et(e, r, (g) => n(2, i = g));
  let f;
  async function a() {
    await Promise.all([o.set([125, 140]), r.set([-125, -140])]), await Promise.all([o.set([-125, 140]), r.set([125, -140])]), await Promise.all([o.set([-125, 0]), r.set([125, -0])]), await Promise.all([o.set([125, 0]), r.set([-125, 0])]);
  }
  async function u() {
    await a(), f || u();
  }
  async function m() {
    await Promise.all([o.set([125, 0]), r.set([-125, 0])]), u();
  }
  return bl(() => (m(), () => f = !0)), e.$$set = (g) => {
    "margin" in g && n(0, s = g.margin);
  }, [s, l, i, o, r];
}
class yl extends _l {
  constructor(t) {
    super(), ml(this, t, wl, vl, gl, { margin: 0 });
  }
}
const {
  SvelteComponent: kl,
  append: ne,
  attr: G,
  binding_callbacks: lt,
  check_outros: Ut,
  create_component: Cl,
  create_slot: Al,
  destroy_component: Sl,
  destroy_each: Zt,
  detach: A,
  element: Q,
  empty: de,
  ensure_array_like: Ve,
  get_all_dirty_from_scope: ql,
  get_slot_changes: Nl,
  group_outros: Ht,
  init: Ll,
  insert: S,
  mount_component: El,
  noop: Ue,
  safe_not_equal: Fl,
  set_data: R,
  set_style: ee,
  space: W,
  text: E,
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
  const o = (
    /*#slots*/
    e[29].error
  ), r = Al(
    o,
    e,
    /*$$scope*/
    e[28],
    it
  );
  return {
    c() {
      t = Q("span"), l = E(n), i = W(), r && r.c(), G(t, "class", "error svelte-1yserjw");
    },
    m(f, a) {
      S(f, t, a), ne(t, l), S(f, i, a), r && r.m(f, a), s = !0;
    },
    p(f, a) {
      (!s || a[0] & /*i18n*/
      2) && n !== (n = /*i18n*/
      f[1]("common.error") + "") && R(l, n), r && r.p && (!s || a[0] & /*$$scope*/
      268435456) && Ml(
        r,
        o,
        f,
        /*$$scope*/
        f[28],
        s ? Nl(
          o,
          /*$$scope*/
          f[28],
          a,
          Tl
        ) : ql(
          /*$$scope*/
          f[28]
        ),
        it
      );
    },
    i(f) {
      s || (ce(r, f), s = !0);
    },
    o(f) {
      _e(r, f), s = !1;
    },
    d(f) {
      f && (A(t), A(i)), r && r.d(f);
    }
  };
}
function Bl(e) {
  let t, n, l, i, s, o, r, f, a, u = (
    /*variant*/
    e[8] === "default" && /*show_eta_bar*/
    e[18] && /*show_progress*/
    e[6] === "full" && ot(e)
  );
  function m(p, c) {
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
  let g = m(e), _ = g && g(e), b = (
    /*timer*/
    e[5] && ut(e)
  );
  const v = [Hl, Zl], y = [];
  function w(p, c) {
    return (
      /*last_progress_level*/
      p[15] != null ? 0 : (
        /*show_progress*/
        p[6] === "full" ? 1 : -1
      )
    );
  }
  ~(s = w(e)) && (o = y[s] = v[s](e));
  let C = !/*timer*/
  e[5] && gt(e);
  return {
    c() {
      u && u.c(), t = W(), n = Q("div"), _ && _.c(), l = W(), b && b.c(), i = W(), o && o.c(), r = W(), C && C.c(), f = de(), G(n, "class", "progress-text svelte-1yserjw"), D(
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
      u && u.m(p, c), S(p, t, c), S(p, n, c), _ && _.m(n, null), ne(n, l), b && b.m(n, null), S(p, i, c), ~s && y[s].m(p, c), S(p, r, c), C && C.m(p, c), S(p, f, c), a = !0;
    },
    p(p, c) {
      /*variant*/
      p[8] === "default" && /*show_eta_bar*/
      p[18] && /*show_progress*/
      p[6] === "full" ? u ? u.p(p, c) : (u = ot(p), u.c(), u.m(t.parentNode, t)) : u && (u.d(1), u = null), g === (g = m(p)) && _ ? _.p(p, c) : (_ && _.d(1), _ = g && g(p), _ && (_.c(), _.m(n, l))), /*timer*/
      p[5] ? b ? b.p(p, c) : (b = ut(p), b.c(), b.m(n, null)) : b && (b.d(1), b = null), (!a || c[0] & /*variant*/
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
      let h = s;
      s = w(p), s === h ? ~s && y[s].p(p, c) : (o && (Ht(), _e(y[h], 1, 1, () => {
        y[h] = null;
      }), Ut()), ~s ? (o = y[s], o ? o.p(p, c) : (o = y[s] = v[s](p), o.c()), ce(o, 1), o.m(r.parentNode, r)) : o = null), /*timer*/
      p[5] ? C && (C.d(1), C = null) : C ? C.p(p, c) : (C = gt(p), C.c(), C.m(f.parentNode, f));
    },
    i(p) {
      a || (ce(o), a = !0);
    },
    o(p) {
      _e(o), a = !1;
    },
    d(p) {
      p && (A(t), A(n), A(i), A(r), A(f)), u && u.d(p), _ && _.d(), b && b.d(), ~s && y[s].d(p), C && C.d(p);
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
      S(l, t, i);
    },
    p(l, i) {
      i[0] & /*eta_level*/
      131072 && n !== (n = `translateX(${/*eta_level*/
      (l[17] || 0) * 100 - 100}%)`) && ee(t, "transform", n);
    },
    d(l) {
      l && A(t);
    }
  };
}
function Dl(e) {
  let t;
  return {
    c() {
      t = E("processing |");
    },
    m(n, l) {
      S(n, t, l);
    },
    p: Ue,
    d(n) {
      n && A(t);
    }
  };
}
function Rl(e) {
  let t, n = (
    /*queue_position*/
    e[2] + 1 + ""
  ), l, i, s, o;
  return {
    c() {
      t = E("queue: "), l = E(n), i = E("/"), s = E(
        /*queue_size*/
        e[3]
      ), o = E(" |");
    },
    m(r, f) {
      S(r, t, f), S(r, l, f), S(r, i, f), S(r, s, f), S(r, o, f);
    },
    p(r, f) {
      f[0] & /*queue_position*/
      4 && n !== (n = /*queue_position*/
      r[2] + 1 + "") && R(l, n), f[0] & /*queue_size*/
      8 && R(
        s,
        /*queue_size*/
        r[3]
      );
    },
    d(r) {
      r && (A(t), A(l), A(i), A(s), A(o));
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
      for (let o = 0; o < l.length; o += 1)
        l[o] && l[o].m(i, s);
      S(i, t, s);
    },
    p(i, s) {
      if (s[0] & /*progress*/
      128) {
        n = Ve(
          /*progress*/
          i[7]
        );
        let o;
        for (o = 0; o < n.length; o += 1) {
          const r = rt(i, n, o);
          l[o] ? l[o].p(r, s) : (l[o] = at(r), l[o].c(), l[o].m(t.parentNode, t));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = n.length;
      }
    },
    d(i) {
      i && A(t), Zt(l, i);
    }
  };
}
function ft(e) {
  let t, n = (
    /*p*/
    e[38].unit + ""
  ), l, i, s = " ", o;
  function r(u, m) {
    return (
      /*p*/
      u[38].length != null ? Ul : Ol
    );
  }
  let f = r(e), a = f(e);
  return {
    c() {
      a.c(), t = W(), l = E(n), i = E(" | "), o = E(s);
    },
    m(u, m) {
      a.m(u, m), S(u, t, m), S(u, l, m), S(u, i, m), S(u, o, m);
    },
    p(u, m) {
      f === (f = r(u)) && a ? a.p(u, m) : (a.d(1), a = f(u), a && (a.c(), a.m(t.parentNode, t))), m[0] & /*progress*/
      128 && n !== (n = /*p*/
      u[38].unit + "") && R(l, n);
    },
    d(u) {
      u && (A(t), A(l), A(i), A(o)), a.d(u);
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
      n = E(t);
    },
    m(l, i) {
      S(l, n, i);
    },
    p(l, i) {
      i[0] & /*progress*/
      128 && t !== (t = oe(
        /*p*/
        l[38].index || 0
      ) + "") && R(n, t);
    },
    d(l) {
      l && A(n);
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
      n = E(t), l = E("/"), s = E(i);
    },
    m(o, r) {
      S(o, n, r), S(o, l, r), S(o, s, r);
    },
    p(o, r) {
      r[0] & /*progress*/
      128 && t !== (t = oe(
        /*p*/
        o[38].index || 0
      ) + "") && R(n, t), r[0] & /*progress*/
      128 && i !== (i = oe(
        /*p*/
        o[38].length
      ) + "") && R(s, i);
    },
    d(o) {
      o && (A(n), A(l), A(s));
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
      n && n.m(l, i), S(l, t, i);
    },
    p(l, i) {
      /*p*/
      l[38].index != null ? n ? n.p(l, i) : (n = ft(l), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    d(l) {
      l && A(t), n && n.d(l);
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
      t = E(
        /*formatted_timer*/
        e[20]
      ), l = E(n), i = E("s");
    },
    m(s, o) {
      S(s, t, o), S(s, l, o), S(s, i, o);
    },
    p(s, o) {
      o[0] & /*formatted_timer*/
      1048576 && R(
        t,
        /*formatted_timer*/
        s[20]
      ), o[0] & /*eta, formatted_eta*/
      524289 && n !== (n = /*eta*/
      s[0] ? `/${/*formatted_eta*/
      s[19]}` : "") && R(l, n);
    },
    d(s) {
      s && (A(t), A(l), A(i));
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
      El(t, l, i), n = !0;
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
  let t, n, l, i, s, o = `${/*last_progress_level*/
  e[15] * 100}%`, r = (
    /*progress*/
    e[7] != null && ct(e)
  );
  return {
    c() {
      t = Q("div"), n = Q("div"), r && r.c(), l = W(), i = Q("div"), s = Q("div"), G(n, "class", "progress-level-inner svelte-1yserjw"), G(s, "class", "progress-bar svelte-1yserjw"), ee(s, "width", o), G(i, "class", "progress-bar-wrap svelte-1yserjw"), G(t, "class", "progress-level svelte-1yserjw");
    },
    m(f, a) {
      S(f, t, a), ne(t, n), r && r.m(n, null), ne(t, l), ne(t, i), ne(i, s), e[30](s);
    },
    p(f, a) {
      /*progress*/
      f[7] != null ? r ? r.p(f, a) : (r = ct(f), r.c(), r.m(n, null)) : r && (r.d(1), r = null), a[0] & /*last_progress_level*/
      32768 && o !== (o = `${/*last_progress_level*/
      f[15] * 100}%`) && ee(s, "width", o);
    },
    i: Ue,
    o: Ue,
    d(f) {
      f && A(t), r && r.d(), e[30](null);
    }
  };
}
function ct(e) {
  let t, n = Ve(
    /*progress*/
    e[7]
  ), l = [];
  for (let i = 0; i < n.length; i += 1)
    l[i] = pt(st(e, n, i));
  return {
    c() {
      for (let i = 0; i < l.length; i += 1)
        l[i].c();
      t = de();
    },
    m(i, s) {
      for (let o = 0; o < l.length; o += 1)
        l[o] && l[o].m(i, s);
      S(i, t, s);
    },
    p(i, s) {
      if (s[0] & /*progress_level, progress*/
      16512) {
        n = Ve(
          /*progress*/
          i[7]
        );
        let o;
        for (o = 0; o < n.length; o += 1) {
          const r = st(i, n, o);
          l[o] ? l[o].p(r, s) : (l[o] = pt(r), l[o].c(), l[o].m(t.parentNode, t));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = n.length;
      }
    },
    d(i) {
      i && A(t), Zt(l, i);
    }
  };
}
function _t(e) {
  let t, n, l, i, s = (
    /*i*/
    e[40] !== 0 && Xl()
  ), o = (
    /*p*/
    e[38].desc != null && dt(e)
  ), r = (
    /*p*/
    e[38].desc != null && /*progress_level*/
    e[14] && /*progress_level*/
    e[14][
      /*i*/
      e[40]
    ] != null && ht()
  ), f = (
    /*progress_level*/
    e[14] != null && mt(e)
  );
  return {
    c() {
      s && s.c(), t = W(), o && o.c(), n = W(), r && r.c(), l = W(), f && f.c(), i = de();
    },
    m(a, u) {
      s && s.m(a, u), S(a, t, u), o && o.m(a, u), S(a, n, u), r && r.m(a, u), S(a, l, u), f && f.m(a, u), S(a, i, u);
    },
    p(a, u) {
      /*p*/
      a[38].desc != null ? o ? o.p(a, u) : (o = dt(a), o.c(), o.m(n.parentNode, n)) : o && (o.d(1), o = null), /*p*/
      a[38].desc != null && /*progress_level*/
      a[14] && /*progress_level*/
      a[14][
        /*i*/
        a[40]
      ] != null ? r || (r = ht(), r.c(), r.m(l.parentNode, l)) : r && (r.d(1), r = null), /*progress_level*/
      a[14] != null ? f ? f.p(a, u) : (f = mt(a), f.c(), f.m(i.parentNode, i)) : f && (f.d(1), f = null);
    },
    d(a) {
      a && (A(t), A(n), A(l), A(i)), s && s.d(a), o && o.d(a), r && r.d(a), f && f.d(a);
    }
  };
}
function Xl(e) {
  let t;
  return {
    c() {
      t = E(" /");
    },
    m(n, l) {
      S(n, t, l);
    },
    d(n) {
      n && A(t);
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
      n = E(t);
    },
    m(l, i) {
      S(l, n, i);
    },
    p(l, i) {
      i[0] & /*progress*/
      128 && t !== (t = /*p*/
      l[38].desc + "") && R(n, t);
    },
    d(l) {
      l && A(n);
    }
  };
}
function ht(e) {
  let t;
  return {
    c() {
      t = E("-");
    },
    m(n, l) {
      S(n, t, l);
    },
    d(n) {
      n && A(t);
    }
  };
}
function mt(e) {
  let t = (100 * /*progress_level*/
  (e[14][
    /*i*/
    e[40]
  ] || 0)).toFixed(1) + "", n, l;
  return {
    c() {
      n = E(t), l = E("%");
    },
    m(i, s) {
      S(i, n, s), S(i, l, s);
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
      i && (A(n), A(l));
    }
  };
}
function pt(e) {
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
      n && n.m(l, i), S(l, t, i);
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
      l && A(t), n && n.d(l);
    }
  };
}
function gt(e) {
  let t, n;
  return {
    c() {
      t = Q("p"), n = E(
        /*loading_text*/
        e[9]
      ), G(t, "class", "loading svelte-1yserjw");
    },
    m(l, i) {
      S(l, t, i), ne(t, n);
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
      l && A(t);
    }
  };
}
function Yl(e) {
  let t, n, l, i, s;
  const o = [Bl, zl], r = [];
  function f(a, u) {
    return (
      /*status*/
      a[4] === "pending" ? 0 : (
        /*status*/
        a[4] === "error" ? 1 : -1
      )
    );
  }
  return ~(n = f(e)) && (l = r[n] = o[n](e)), {
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
      S(a, t, u), ~n && r[n].m(t, null), e[31](t), s = !0;
    },
    p(a, u) {
      let m = n;
      n = f(a), n === m ? ~n && r[n].p(a, u) : (l && (Ht(), _e(r[m], 1, 1, () => {
        r[m] = null;
      }), Ut()), ~n ? (l = r[n], l ? l.p(a, u) : (l = r[n] = o[n](a), l.c()), ce(l, 1), l.m(t, null)) : l = null), (!s || u[0] & /*variant, show_progress*/
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
      a && A(t), ~n && r[n].d(), e[31](null);
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
  let l, { $$slots: i = {}, $$scope: s } = t, { i18n: o } = t, { eta: r = null } = t, { queue_position: f } = t, { queue_size: a } = t, { status: u } = t, { scroll_to_output: m = !1 } = t, { timer: g = !0 } = t, { show_progress: _ = "full" } = t, { message: b = null } = t, { progress: v = null } = t, { variant: y = "default" } = t, { loading_text: w = "Loading..." } = t, { absolute: C = !0 } = t, { translucent: p = !1 } = t, { border: c = !1 } = t, { autoscroll: h } = t, d, q = !1, L = 0, M = 0, T = null, F = null, he = 0, H = null, X, Y = null, le = !0;
  const ye = () => {
    n(0, r = n(26, T = n(19, j = null))), n(24, L = performance.now()), n(25, M = 0), q = !0, ke();
  };
  function ke() {
    requestAnimationFrame(() => {
      n(25, M = (performance.now() - L) / 1e3), q && ke();
    });
  }
  function me() {
    n(25, M = 0), n(0, r = n(26, T = n(19, j = null))), q && (q = !1);
  }
  Vl(() => {
    q && me();
  });
  let j = null;
  function rn(k) {
    lt[k ? "unshift" : "push"](() => {
      Y = k, n(16, Y), n(7, v), n(14, H), n(15, X);
    });
  }
  function on(k) {
    lt[k ? "unshift" : "push"](() => {
      d = k, n(13, d);
    });
  }
  return e.$$set = (k) => {
    "i18n" in k && n(1, o = k.i18n), "eta" in k && n(0, r = k.eta), "queue_position" in k && n(2, f = k.queue_position), "queue_size" in k && n(3, a = k.queue_size), "status" in k && n(4, u = k.status), "scroll_to_output" in k && n(21, m = k.scroll_to_output), "timer" in k && n(5, g = k.timer), "show_progress" in k && n(6, _ = k.show_progress), "message" in k && n(22, b = k.message), "progress" in k && n(7, v = k.progress), "variant" in k && n(8, y = k.variant), "loading_text" in k && n(9, w = k.loading_text), "absolute" in k && n(10, C = k.absolute), "translucent" in k && n(11, p = k.translucent), "border" in k && n(12, c = k.border), "autoscroll" in k && n(23, h = k.autoscroll), "$$scope" in k && n(28, s = k.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    218103809 && (r === null && n(0, r = T), r != null && T !== r && (n(27, F = (performance.now() - L) / 1e3 + r), n(19, j = F.toFixed(1)), n(26, T = r))), e.$$.dirty[0] & /*eta_from_start, timer_diff*/
    167772160 && n(17, he = F === null || F <= 0 || !M ? null : Math.min(M / F, 1)), e.$$.dirty[0] & /*progress*/
    128 && v != null && n(18, le = !1), e.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (v != null ? n(14, H = v.map((k) => {
      if (k.index != null && k.length != null)
        return k.index / k.length;
      if (k.progress != null)
        return k.progress;
    })) : n(14, H = null), H ? (n(15, X = H[H.length - 1]), Y && (X === 0 ? n(16, Y.style.transition = "0", Y) : n(16, Y.style.transition = "150ms", Y))) : n(15, X = void 0)), e.$$.dirty[0] & /*status*/
    16 && (u === "pending" ? ye() : me()), e.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    10493968 && d && m && (u === "pending" || u === "complete") && Kl(d, h), e.$$.dirty[0] & /*status, message*/
    4194320, e.$$.dirty[0] & /*timer_diff*/
    33554432 && n(20, l = M.toFixed(1));
  }, [
    r,
    o,
    f,
    a,
    u,
    g,
    _,
    v,
    y,
    w,
    C,
    p,
    c,
    d,
    H,
    X,
    Y,
    he,
    le,
    j,
    l,
    m,
    b,
    h,
    L,
    M,
    T,
    F,
    s,
    i,
    rn,
    on
  ];
}
class Wl extends kl {
  constructor(t) {
    super(), Ll(
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
function Xt() {
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
Me.prototype = Xt.prototype = {
  constructor: Me,
  on: function(e, t) {
    var n = this._, l = Ql(e + "", n), i, s = -1, o = l.length;
    if (arguments.length < 2) {
      for (; ++s < o; )
        if ((i = (e = l[s]).type) && (i = jl(n[i], e.name)))
          return i;
      return;
    }
    if (t != null && typeof t != "function")
      throw new Error("invalid callback: " + t);
    for (; ++s < o; )
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
const vt = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Ze,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Yt(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), vt.hasOwnProperty(t) ? { space: vt[t], local: e } : e;
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
function Kt(e) {
  var t = Yt(e);
  return (t.local ? $l : xl)(t);
}
function ei() {
}
function Gt(e) {
  return e == null ? ei : function() {
    return this.querySelector(e);
  };
}
function ti(e) {
  typeof e != "function" && (e = Gt(e));
  for (var t = this._groups, n = t.length, l = new Array(n), i = 0; i < n; ++i)
    for (var s = t[i], o = s.length, r = l[i] = new Array(o), f, a, u = 0; u < o; ++u)
      (f = s[u]) && (a = e.call(f, f.__data__, u, s)) && ("__data__" in f && (a.__data__ = f.__data__), r[u] = a);
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
    for (var o = t[s], r = o.length, f, a = 0; a < r; ++a)
      (f = o[a]) && (l.push(e.call(f, f.__data__, a, o)), i.push(f));
  return new I(l, i);
}
function oi(e) {
  return function() {
    return this.matches(e);
  };
}
function Wt(e) {
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
  return this.select(e == null ? ui : ai(typeof e == "function" ? e : Wt(e)));
}
var _i = Array.prototype.filter;
function di() {
  return Array.from(this.children);
}
function hi(e) {
  return function() {
    return _i.call(this.children, e);
  };
}
function mi(e) {
  return this.selectAll(e == null ? di : hi(typeof e == "function" ? e : Wt(e)));
}
function pi(e) {
  typeof e != "function" && (e = oi(e));
  for (var t = this._groups, n = t.length, l = new Array(n), i = 0; i < n; ++i)
    for (var s = t[i], o = s.length, r = l[i] = [], f, a = 0; a < o; ++a)
      (f = s[a]) && e.call(f, f.__data__, a, s) && r.push(f);
  return new I(l, this._parents);
}
function Jt(e) {
  return new Array(e.length);
}
function gi() {
  return new I(this._enter || this._groups.map(Jt), this._parents);
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
function vi(e, t, n, l, i, s) {
  for (var o = 0, r, f = t.length, a = s.length; o < a; ++o)
    (r = t[o]) ? (r.__data__ = s[o], l[o] = r) : n[o] = new Te(e, s[o]);
  for (; o < f; ++o)
    (r = t[o]) && (i[o] = r);
}
function wi(e, t, n, l, i, s, o) {
  var r, f, a = /* @__PURE__ */ new Map(), u = t.length, m = s.length, g = new Array(u), _;
  for (r = 0; r < u; ++r)
    (f = t[r]) && (g[r] = _ = o.call(f, f.__data__, r, t) + "", a.has(_) ? i[r] = f : a.set(_, f));
  for (r = 0; r < m; ++r)
    _ = o.call(e, s[r], r, s) + "", (f = a.get(_)) ? (l[r] = f, f.__data__ = s[r], a.delete(_)) : n[r] = new Te(e, s[r]);
  for (r = 0; r < u; ++r)
    (f = t[r]) && a.get(g[r]) === f && (i[r] = f);
}
function yi(e) {
  return e.__data__;
}
function ki(e, t) {
  if (!arguments.length)
    return Array.from(this, yi);
  var n = t ? wi : vi, l = this._parents, i = this._groups;
  typeof e != "function" && (e = bi(e));
  for (var s = i.length, o = new Array(s), r = new Array(s), f = new Array(s), a = 0; a < s; ++a) {
    var u = l[a], m = i[a], g = m.length, _ = Ci(e.call(u, u && u.__data__, a, l)), b = _.length, v = r[a] = new Array(b), y = o[a] = new Array(b), w = f[a] = new Array(g);
    n(u, m, v, y, w, _, t);
    for (var C = 0, p = 0, c, h; C < b; ++C)
      if (c = v[C]) {
        for (C >= p && (p = C + 1); !(h = y[p]) && ++p < b; )
          ;
        c._next = h || null;
      }
  }
  return o = new I(o, l), o._enter = r, o._exit = f, o;
}
function Ci(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Ai() {
  return new I(this._exit || this._groups.map(Jt), this._parents);
}
function Si(e, t, n) {
  var l = this.enter(), i = this, s = this.exit();
  return typeof e == "function" ? (l = e(l), l && (l = l.selection())) : l = l.append(e + ""), t != null && (i = t(i), i && (i = i.selection())), n == null ? s.remove() : n(s), l && i ? l.merge(i).order() : i;
}
function qi(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, l = t._groups, i = n.length, s = l.length, o = Math.min(i, s), r = new Array(i), f = 0; f < o; ++f)
    for (var a = n[f], u = l[f], m = a.length, g = r[f] = new Array(m), _, b = 0; b < m; ++b)
      (_ = a[b] || u[b]) && (g[b] = _);
  for (; f < i; ++f)
    r[f] = n[f];
  return new I(r, this._parents);
}
function Ni() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var l = e[t], i = l.length - 1, s = l[i], o; --i >= 0; )
      (o = l[i]) && (s && o.compareDocumentPosition(s) ^ 4 && s.parentNode.insertBefore(o, s), s = o);
  return this;
}
function Li(e) {
  e || (e = Ei);
  function t(m, g) {
    return m && g ? e(m.__data__, g.__data__) : !m - !g;
  }
  for (var n = this._groups, l = n.length, i = new Array(l), s = 0; s < l; ++s) {
    for (var o = n[s], r = o.length, f = i[s] = new Array(r), a, u = 0; u < r; ++u)
      (a = o[u]) && (f[u] = a);
    f.sort(t);
  }
  return new I(i, this._parents).order();
}
function Ei(e, t) {
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
      var o = l[i];
      if (o)
        return o;
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
    for (var i = t[n], s = 0, o = i.length, r; s < o; ++s)
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
  var n = Yt(e);
  if (arguments.length < 2) {
    var l = this.node();
    return n.local ? l.getAttributeNS(n.space, n.local) : l.getAttribute(n);
  }
  return this.each((t == null ? n.local ? Di : Bi : typeof t == "function" ? n.local ? Ui : Oi : n.local ? Ii : Ri)(n, t));
}
function Qt(e) {
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
  return e.style.getPropertyValue(t) || Qt(e).getComputedStyle(e, null).getPropertyValue(t);
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
function jt(e) {
  return e.trim().split(/^|\s+/);
}
function Ke(e) {
  return e.classList || new xt(e);
}
function xt(e) {
  this._node = e, this._names = jt(e.getAttribute("class") || "");
}
xt.prototype = {
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
function $t(e, t) {
  for (var n = Ke(e), l = -1, i = t.length; ++l < i; )
    n.add(t[l]);
}
function en(e, t) {
  for (var n = Ke(e), l = -1, i = t.length; ++l < i; )
    n.remove(t[l]);
}
function xi(e) {
  return function() {
    $t(this, e);
  };
}
function $i(e) {
  return function() {
    en(this, e);
  };
}
function es(e, t) {
  return function() {
    (t.apply(this, arguments) ? $t : en)(this, e);
  };
}
function ts(e, t) {
  var n = jt(e + "");
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
function hs(e) {
  var t = typeof e == "function" ? e : Kt(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function ms() {
  return null;
}
function ps(e, t) {
  var n = typeof e == "function" ? e : Kt(e), l = t == null ? ms : typeof t == "function" ? t : Gt(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), l.apply(this, arguments) || null);
  });
}
function gs() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function bs() {
  return this.each(gs);
}
function vs() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function ws() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function ys(e) {
  return this.select(e ? ws : vs);
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
function qs(e, t, n) {
  return function() {
    var l = this.__on, i, s = Cs(t);
    if (l) {
      for (var o = 0, r = l.length; o < r; ++o)
        if ((i = l[o]).type === e.type && i.name === e.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = s, i.options = n), i.value = t;
          return;
        }
    }
    this.addEventListener(e.type, s, n), i = { type: e.type, name: e.name, value: t, listener: s, options: n }, l ? l.push(i) : this.__on = [i];
  };
}
function Ns(e, t, n) {
  var l = As(e + ""), i, s = l.length, o;
  if (arguments.length < 2) {
    var r = this.node().__on;
    if (r) {
      for (var f = 0, a = r.length, u; f < a; ++f)
        for (i = 0, u = r[f]; i < s; ++i)
          if ((o = l[i]).type === u.type && o.name === u.name)
            return u.value;
    }
    return;
  }
  for (r = t ? qs : Ss, i = 0; i < s; ++i)
    this.each(r(l[i], t, n));
  return this;
}
function tn(e, t, n) {
  var l = Qt(e), i = l.CustomEvent;
  typeof i == "function" ? i = new i(t, n) : (i = l.document.createEvent("Event"), n ? (i.initEvent(t, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(t, !1, !1)), e.dispatchEvent(i);
}
function Ls(e, t) {
  return function() {
    return tn(this, e, t);
  };
}
function Es(e, t) {
  return function() {
    return tn(this, e, t.apply(this, arguments));
  };
}
function Fs(e, t) {
  return this.each((typeof t == "function" ? Es : Ls)(e, t));
}
function* Ms() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var l = e[t], i = 0, s = l.length, o; i < s; ++i)
      (o = l[i]) && (yield o);
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
  selectChildren: mi,
  filter: pi,
  data: ki,
  enter: gi,
  exit: Ai,
  join: Si,
  merge: qi,
  selection: Vs,
  order: Ni,
  sort: Li,
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
  append: hs,
  insert: ps,
  remove: bs,
  clone: ys,
  datum: ks,
  on: Ns,
  dispatch: Fs,
  [Symbol.iterator]: Ms
};
function ve(e) {
  return typeof e == "string" ? new I([[document.querySelector(e)]], [document.documentElement]) : new I([[e]], Ps);
}
function Ts(e) {
  let t;
  for (; t = e.sourceEvent; )
    e = t;
  return e;
}
function wt(e, t) {
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
const zs = { passive: !1 }, we = { capture: !0, passive: !1 };
function Ie(e) {
  e.stopImmediatePropagation();
}
function ue(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Bs(e) {
  var t = e.document.documentElement, n = ve(e).on("dragstart.drag", ue, we);
  "onselectstart" in t ? n.on("selectstart.drag", ue, we) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Ds(e, t) {
  var n = e.document.documentElement, l = ve(e).on("dragstart.drag", null);
  t && (l.on("click.drag", ue, we), setTimeout(function() {
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
  x: o,
  y: r,
  dx: f,
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
    x: { value: o, enumerable: !0, configurable: !0 },
    y: { value: r, enumerable: !0, configurable: !0 },
    dx: { value: f, enumerable: !0, configurable: !0 },
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
  var e = Rs, t = Is, n = Os, l = Us, i = {}, s = Xt("start", "drag", "end"), o = 0, r, f, a, u, m = 0;
  function g(c) {
    c.on("mousedown.drag", _).filter(l).on("touchstart.drag", y).on("touchmove.drag", w, zs).on("touchend.drag touchcancel.drag", C).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function _(c, h) {
    if (!(u || !e.call(this, c, h))) {
      var d = p(this, t.call(this, c, h), c, h, "mouse");
      d && (ve(c.view).on("mousemove.drag", b, we).on("mouseup.drag", v, we), Bs(c.view), Ie(c), a = !1, r = c.clientX, f = c.clientY, d("start", c));
    }
  }
  function b(c) {
    if (ue(c), !a) {
      var h = c.clientX - r, d = c.clientY - f;
      a = h * h + d * d > m;
    }
    i.mouse("drag", c);
  }
  function v(c) {
    ve(c.view).on("mousemove.drag mouseup.drag", null), Ds(c.view, a), ue(c), i.mouse("end", c);
  }
  function y(c, h) {
    if (e.call(this, c, h)) {
      var d = c.changedTouches, q = t.call(this, c, h), L = d.length, M, T;
      for (M = 0; M < L; ++M)
        (T = p(this, q, c, h, d[M].identifier, d[M])) && (Ie(c), T("start", c, d[M]));
    }
  }
  function w(c) {
    var h = c.changedTouches, d = h.length, q, L;
    for (q = 0; q < d; ++q)
      (L = i[h[q].identifier]) && (ue(c), L("drag", c, h[q]));
  }
  function C(c) {
    var h = c.changedTouches, d = h.length, q, L;
    for (u && clearTimeout(u), u = setTimeout(function() {
      u = null;
    }, 500), q = 0; q < d; ++q)
      (L = i[h[q].identifier]) && (Ie(c), L("end", c, h[q]));
  }
  function p(c, h, d, q, L, M) {
    var T = s.copy(), F = wt(M || d, h), he, H, X;
    if ((X = n.call(c, new He("beforestart", {
      sourceEvent: d,
      target: g,
      identifier: L,
      active: o,
      x: F[0],
      y: F[1],
      dx: 0,
      dy: 0,
      dispatch: T
    }), q)) != null)
      return he = X.x - F[0] || 0, H = X.y - F[1] || 0, function Y(le, ye, ke) {
        var me = F, j;
        switch (le) {
          case "start":
            i[L] = Y, j = o++;
            break;
          case "end":
            delete i[L], --o;
          case "drag":
            F = wt(ke || ye, h), j = o;
            break;
        }
        T.call(
          le,
          c,
          new He(le, {
            sourceEvent: ye,
            subject: X,
            target: g,
            identifier: L,
            active: j,
            x: F[0] + he,
            y: F[1] + H,
            dx: F[0] - me[0],
            dy: F[1] - me[1],
            dispatch: T
          }),
          q
        );
      };
  }
  return g.filter = function(c) {
    return arguments.length ? (e = typeof c == "function" ? c : Se(!!c), g) : e;
  }, g.container = function(c) {
    return arguments.length ? (t = typeof c == "function" ? c : Se(c), g) : t;
  }, g.subject = function(c) {
    return arguments.length ? (n = typeof c == "function" ? c : Se(c), g) : n;
  }, g.touchable = function(c) {
    return arguments.length ? (l = typeof c == "function" ? c : Se(!!c), g) : l;
  }, g.on = function() {
    var c = s.on.apply(s, arguments);
    return c === s ? g : c;
  }, g.clickDistance = function(c) {
    return arguments.length ? (m = (c = +c) * c, g) : Math.sqrt(m);
  }, g;
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
  attr: P,
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
  space: qt,
  text: fr,
  transition_in: ar,
  transition_out: ur
} = window.__gradio__svelte__internal, { onMount: cr, createEventDispatcher: _r } = window.__gradio__svelte__internal;
function dr(e) {
  let t, n, l, i, s, o, r, f, a = (
    /*prompt*/
    e[0].scale.toFixed(1) + ""
  ), u, m, g, _, b, v, y, w, C, p, c, h;
  return w = new js({}), {
    c() {
      t = Z("div"), n = Z("div"), l = Z("div"), i = Z("div"), s = Z("div"), o = Z("span"), r = Z("span"), f = Z("span"), u = fr(a), m = qt(), g = Z("div"), _ = Z("input"), v = qt(), y = Z("button"), $s(w.$$.fragment), P(f, "class", "text-black svelte-17cqa56"), P(r, "class", "text-black svelte-17cqa56"), P(o, "class", "flex text-[0.5rem] font-mono text-black dark:group-hover:text-white svelte-17cqa56"), P(s, "class", "bottom-full p-1 svelte-17cqa56"), P(i, "class", "relative svelte-17cqa56"), P(l, "class", "absolute z-10 flex items-center justify-center w-[2.5em] svelte-17cqa56"), P(_, "type", "text"), P(_, "placeholder", "Prompt"), P(_, "class", b = "text-sm z-0 pl pr py-2 outline-none text-black " + /*prompt*/
      (e[0].neg_guidance ? "line-through" : "") + " svelte-17cqa56"), St(_, "width", "calc(" + Math.max(
        14,
        /*prompt*/
        e[0].prompt.length + 1
      ) + "ch + 2em) "), P(g, "class", "relative flex z-0 svelte-17cqa56"), P(y, "class", "absolute z-1 right-1 text text-black hover:text-red-500 invisible group-hover:visible svelte-17cqa56"), P(y, "title", "Remove prompt"), P(n, "class", C = "flex justify-between items-center rounded-md overflow-hidden " + /*isDragging*/
      (e[2] || /*isHovering*/
      e[3] ? "select-none touch-manipulation" : "") + " svelte-17cqa56"), P(t, "class", "w-min flex flex-col group relative svelte-17cqa56");
    },
    m(d, q) {
      lr(d, t, q), B(t, n), B(n, l), B(l, i), B(i, s), B(s, o), B(o, r), B(r, f), B(f, u), B(n, m), B(n, g), B(g, _), e[7](_), At(
        _,
        /*prompt*/
        e[0].prompt
      ), B(n, v), B(n, y), ir(w, y, null), e[10](t), p = !0, c || (h = [
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
          e[8]
        ),
        J(
          y,
          "click",
          /*click_handler*/
          e[9]
        ),
        J(
          t,
          "pointerenter",
          /*pointerenter_handler*/
          e[11]
        ),
        J(
          t,
          "pointerleave",
          /*pointerleave_handler*/
          e[12]
        ),
        J(
          t,
          "pointercancel",
          /*pointercancel_handler*/
          e[13]
        ),
        J(
          t,
          "pointerover",
          /*pointerover_handler*/
          e[14]
        ),
        J(
          t,
          "pointerout",
          /*pointerout_handler*/
          e[15]
        ),
        J(
          t,
          "pointerenter",
          /*pointerenter_handler_1*/
          e[16]
        )
      ], c = !0);
    },
    p(d, [q]) {
      (!p || q & /*prompt*/
      1) && a !== (a = /*prompt*/
      d[0].scale.toFixed(1) + "") && or(u, a), (!p || q & /*prompt*/
      1 && b !== (b = "text-sm z-0 pl pr py-2 outline-none text-black " + /*prompt*/
      (d[0].neg_guidance ? "line-through" : "") + " svelte-17cqa56")) && P(_, "class", b), (!p || q & /*prompt*/
      1) && St(_, "width", "calc(" + Math.max(
        14,
        /*prompt*/
        d[0].prompt.length + 1
      ) + "ch + 2em) "), q & /*prompt*/
      1 && _.value !== /*prompt*/
      d[0].prompt && At(
        _,
        /*prompt*/
        d[0].prompt
      ), (!p || q & /*isDragging, isHovering*/
      12 && C !== (C = "flex justify-between items-center rounded-md overflow-hidden " + /*isDragging*/
      (d[2] || /*isHovering*/
      d[3] ? "select-none touch-manipulation" : "") + " svelte-17cqa56")) && P(n, "class", C);
    },
    i(d) {
      p || (ar(w.$$.fragment, d), p = !0);
    },
    o(d) {
      ur(w.$$.fragment, d), p = !1;
    },
    d(d) {
      d && tr(t), e[7](null), er(w), e[10](null), c = !1, sr(h);
    }
  };
}
function hr(e, t, n) {
  let l, i = !1, s = !1, { prompt: o } = t;
  const r = _r();
  let f = 0, a;
  cr(() => {
    const h = Zs().on("start", (d) => {
      f = o.scale, n(2, i = !0);
    }).on("drag", (d) => {
      const { dx: q, dy: L } = d;
      f -= L / 100, f = Math.min(f, 2), f = Math.max(f, 0), n(0, o.scale = f, o);
    }).on("end", (d) => {
      n(2, i = !1);
    });
    ve(a).call(h), l.focus();
  });
  function u(h) {
    h.key === "Enter" && r("add");
  }
  function m(h) {
    Ct[h ? "unshift" : "push"](() => {
      l = h, n(1, l);
    });
  }
  function g() {
    o.prompt = this.value, n(0, o);
  }
  const _ = () => r("remove");
  function b(h) {
    Ct[h ? "unshift" : "push"](() => {
      a = h, n(4, a);
    });
  }
  const v = () => n(3, s = !0), y = () => n(3, s = !1), w = () => n(3, s = !1), C = () => n(3, s = !0), p = () => n(3, s = !1), c = () => n(3, s = !0);
  return e.$$set = (h) => {
    "prompt" in h && n(0, o = h.prompt);
  }, [
    o,
    l,
    i,
    s,
    a,
    r,
    u,
    m,
    g,
    _,
    b,
    v,
    y,
    w,
    C,
    p,
    c
  ];
}
class mr extends xs {
  constructor(t) {
    super(), nr(this, t, hr, dr, rr, { prompt: 0 });
  }
}
const {
  SvelteComponent: pr,
  append: gr,
  attr: $,
  detach: br,
  init: vr,
  insert: wr,
  noop: Nt,
  safe_not_equal: yr,
  svg_element: Lt
} = window.__gradio__svelte__internal;
function kr(e) {
  let t, n;
  return {
    c() {
      t = Lt("svg"), n = Lt("path"), $(n, "fill", "currentColor"), $(n, "d", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"), $(t, "xmlns", "http://www.w3.org/2000/svg"), $(t, "width", "1em"), $(t, "height", "1em"), $(t, "viewBox", "0 0 512 512"), $(
        t,
        "class",
        /*classNames*/
        e[0]
      );
    },
    m(l, i) {
      wr(l, t, i), gr(t, n);
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
    i: Nt,
    o: Nt,
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
class Ar extends pr {
  constructor(t) {
    super(), vr(this, t, Cr, kr, yr, { classNames: 0 });
  }
}
const {
  SvelteComponent: Sr,
  add_flush_callback: qr,
  append: pe,
  attr: re,
  bind: Nr,
  binding_callbacks: Lr,
  check_outros: Er,
  create_component: nn,
  destroy_component: ln,
  destroy_each: Fr,
  detach: Mr,
  element: qe,
  ensure_array_like: Et,
  group_outros: Pr,
  init: Vr,
  insert: Tr,
  listen: zr,
  mount_component: sn,
  safe_not_equal: Br,
  space: Ft,
  transition_in: be,
  transition_out: Pe
} = window.__gradio__svelte__internal, { createEventDispatcher: Dr } = window.__gradio__svelte__internal;
function Mt(e, t, n) {
  const l = e.slice();
  return l[8] = t[n], l[9] = t, l[10] = n, l;
}
function Pt(e) {
  let t, n, l;
  function i(r) {
    e[4](
      r,
      /*prompt*/
      e[8],
      /*each_value*/
      e[9],
      /*prompt_index*/
      e[10]
    );
  }
  function s() {
    return (
      /*remove_handler*/
      e[5](
        /*prompt*/
        e[8]
      )
    );
  }
  let o = {};
  return (
    /*prompt*/
    e[8] !== void 0 && (o.prompt = /*prompt*/
    e[8]), t = new mr({ props: o }), Lr.push(() => Nr(t, "prompt", i)), t.$on("remove", s), t.$on(
      "add",
      /*addPrompt*/
      e[3]
    ), {
      c() {
        nn(t.$$.fragment);
      },
      m(r, f) {
        sn(t, r, f), l = !0;
      },
      p(r, f) {
        e = r;
        const a = {};
        !n && f & /*promptsList*/
        1 && (n = !0, a.prompt = /*prompt*/
        e[8], qr(() => n = !1)), t.$set(a);
      },
      i(r) {
        l || (be(t.$$.fragment, r), l = !0);
      },
      o(r) {
        Pe(t.$$.fragment, r), l = !1;
      },
      d(r) {
        ln(t, r);
      }
    }
  );
}
function Rr(e) {
  let t, n, l, i, s, o, r, f, a, u, m, g = Et(
    /*promptsList*/
    e[0]
  ), _ = [];
  for (let v = 0; v < g.length; v += 1)
    _[v] = Pt(Mt(e, g, v));
  const b = (v) => Pe(_[v], 1, 1, () => {
    _[v] = null;
  });
  return s = new Ar({}), {
    c() {
      t = qe("div");
      for (let v = 0; v < _.length; v += 1)
        _[v].c();
      n = Ft(), l = qe("div"), i = qe("button"), nn(s.$$.fragment), o = Ft(), r = qe("h2"), r.textContent = "Add Prompt", re(r, "class", "text-xs font-normal px-1 svelte-9vwpr1"), re(i, "title", "Add Concept"), re(i, "class", "flex items-center text-base text-black hover-text-cyan-500 dark:text-white svelte-9vwpr1"), re(l, "class", "flex flex-col gap-1 svelte-9vwpr1"), re(t, "class", f = "flex items-center gap-1 flex-wrap " + /*classNames*/
      e[1] + " svelte-9vwpr1");
    },
    m(v, y) {
      Tr(v, t, y);
      for (let w = 0; w < _.length; w += 1)
        _[w] && _[w].m(t, null);
      pe(t, n), pe(t, l), pe(l, i), sn(s, i, null), pe(i, o), pe(i, r), a = !0, u || (m = zr(
        i,
        "click",
        /*click_handler*/
        e[6]
      ), u = !0);
    },
    p(v, [y]) {
      if (y & /*promptsList, removeConcept, addPrompt*/
      13) {
        g = Et(
          /*promptsList*/
          v[0]
        );
        let w;
        for (w = 0; w < g.length; w += 1) {
          const C = Mt(v, g, w);
          _[w] ? (_[w].p(C, y), be(_[w], 1)) : (_[w] = Pt(C), _[w].c(), be(_[w], 1), _[w].m(t, n));
        }
        for (Pr(), w = g.length; w < _.length; w += 1)
          b(w);
        Er();
      }
      (!a || y & /*classNames*/
      2 && f !== (f = "flex items-center gap-1 flex-wrap " + /*classNames*/
      v[1] + " svelte-9vwpr1")) && re(t, "class", f);
    },
    i(v) {
      if (!a) {
        for (let y = 0; y < g.length; y += 1)
          be(_[y]);
        be(s.$$.fragment, v), a = !0;
      }
    },
    o(v) {
      _ = _.filter(Boolean);
      for (let y = 0; y < _.length; y += 1)
        Pe(_[y]);
      Pe(s.$$.fragment, v), a = !1;
    },
    d(v) {
      v && Mr(t), Fr(_, v), ln(s), u = !1, m();
    }
  };
}
function Ir(e, t, n) {
  let { classNames: l = "" } = t, { promptsList: i = [] } = t;
  function s(m) {
    n(0, i = i.filter((g) => g.id !== m.id));
  }
  function o(m = !1) {
    n(0, i = [
      ...i,
      {
        id: zt(),
        prompt: "",
        scale: 1,
        negative: m
      }
    ]);
  }
  const r = Dr();
  function f(m, g, _, b) {
    _[b] = m, n(0, i);
  }
  const a = (m) => s(m), u = () => o(!1);
  return e.$$set = (m) => {
    "classNames" in m && n(1, l = m.classNames), "promptsList" in m && n(0, i = m.promptsList);
  }, e.$$.update = () => {
    e.$$.dirty & /*promptsList*/
    1 && (r("change", i), r("input", i));
  }, [
    i,
    l,
    s,
    o,
    f,
    a,
    u
  ];
}
class Or extends Sr {
  constructor(t) {
    super(), Vr(this, t, Ir, Rr, Br, { classNames: 1, promptsList: 0 });
  }
}
const {
  SvelteComponent: Ur,
  append: Zr,
  assign: Hr,
  attr: Xr,
  check_outros: Yr,
  create_component: ze,
  destroy_component: Be,
  detach: Xe,
  element: Kr,
  flush: V,
  get_spread_object: Gr,
  get_spread_update: Wr,
  group_outros: Jr,
  init: Qr,
  insert: Ye,
  mount_component: De,
  safe_not_equal: jr,
  set_data: xr,
  space: Vt,
  text: $r,
  toggle_class: eo,
  transition_in: te,
  transition_out: fe
} = window.__gradio__svelte__internal;
function Tt(e) {
  let t, n;
  const l = [
    { autoscroll: (
      /*gradio*/
      e[0].autoscroll
    ) },
    { i18n: (
      /*gradio*/
      e[0].i18n
    ) },
    /*loading_status*/
    e[8]
  ];
  let i = {};
  for (let s = 0; s < l.length; s += 1)
    i = Hr(i, l[s]);
  return t = new Wl({ props: i }), {
    c() {
      ze(t.$$.fragment);
    },
    m(s, o) {
      De(t, s, o), n = !0;
    },
    p(s, o) {
      const r = o & /*gradio, loading_status*/
      257 ? Wr(l, [
        o & /*gradio*/
        1 && { autoscroll: (
          /*gradio*/
          s[0].autoscroll
        ) },
        o & /*gradio*/
        1 && { i18n: (
          /*gradio*/
          s[0].i18n
        ) },
        o & /*loading_status*/
        256 && Gr(
          /*loading_status*/
          s[8]
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
function to(e) {
  let t;
  return {
    c() {
      t = $r(
        /*label*/
        e[1]
      );
    },
    m(n, l) {
      Ye(n, t, l);
    },
    p(n, l) {
      l & /*label*/
      2 && xr(
        t,
        /*label*/
        n[1]
      );
    },
    d(n) {
      n && Xe(t);
    }
  };
}
function no(e) {
  let t, n, l, i, s, o, r = (
    /*loading_status*/
    e[8] && Tt(e)
  );
  return l = new ol({
    props: {
      show_label: (
        /*show_label*/
        e[5]
      ),
      info: void 0,
      $$slots: { default: [to] },
      $$scope: { ctx: e }
    }
  }), s = new Or({
    props: {
      classNames: "py-5",
      promptsList: (
        /*promptsList*/
        e[9]
      )
    }
  }), s.$on(
    "change",
    /*handle_prompt_change*/
    e[10]
  ), {
    c() {
      r && r.c(), t = Vt(), n = Kr("label"), ze(l.$$.fragment), i = Vt(), ze(s.$$.fragment), Xr(n, "class", "relative"), eo(n, "container", io);
    },
    m(f, a) {
      r && r.m(f, a), Ye(f, t, a), Ye(f, n, a), De(l, n, null), Zr(n, i), De(s, n, null), o = !0;
    },
    p(f, a) {
      /*loading_status*/
      f[8] ? r ? (r.p(f, a), a & /*loading_status*/
      256 && te(r, 1)) : (r = Tt(f), r.c(), te(r, 1), r.m(t.parentNode, t)) : r && (Jr(), fe(r, 1, 1, () => {
        r = null;
      }), Yr());
      const u = {};
      a & /*show_label*/
      32 && (u.show_label = /*show_label*/
      f[5]), a & /*$$scope, label*/
      1048578 && (u.$$scope = { dirty: a, ctx: f }), l.$set(u);
      const m = {};
      a & /*promptsList*/
      512 && (m.promptsList = /*promptsList*/
      f[9]), s.$set(m);
    },
    i(f) {
      o || (te(r), te(l.$$.fragment, f), te(s.$$.fragment, f), o = !0);
    },
    o(f) {
      fe(r), fe(l.$$.fragment, f), fe(s.$$.fragment, f), o = !1;
    },
    d(f) {
      f && (Xe(t), Xe(n)), r && r.d(f), Be(l), Be(s);
    }
  };
}
function lo(e) {
  let t, n;
  return t = new An({
    props: {
      visible: (
        /*visible*/
        e[4]
      ),
      elem_id: (
        /*elem_id*/
        e[2]
      ),
      elem_classes: (
        /*elem_classes*/
        e[3]
      ),
      scale: (
        /*scale*/
        e[6]
      ),
      min_width: (
        /*min_width*/
        e[7]
      ),
      allow_overflow: !1,
      padding: !0,
      $$slots: { default: [no] },
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
      16 && (s.visible = /*visible*/
      l[4]), i & /*elem_id*/
      4 && (s.elem_id = /*elem_id*/
      l[2]), i & /*elem_classes*/
      8 && (s.elem_classes = /*elem_classes*/
      l[3]), i & /*scale*/
      64 && (s.scale = /*scale*/
      l[6]), i & /*min_width*/
      128 && (s.min_width = /*min_width*/
      l[7]), i & /*$$scope, promptsList, show_label, label, gradio, loading_status*/
      1049379 && (s.$$scope = { dirty: i, ctx: l }), t.$set(s);
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
const io = !1;
function so(e) {
  return e.map((n) => `(${n.prompt})${n.scale.toFixed(4)} `).join(" ");
}
function ro(e, t, n) {
  let { gradio: l } = t, { label: i = "Prompt Weighting" } = t, { elem_id: s = "" } = t, { elem_classes: o = [] } = t, { visible: r = !0 } = t, { value: f = "" } = t, { placeholder: a = "" } = t, { show_label: u } = t, { scale: m = null } = t, { min_width: g = void 0 } = t, { loading_status: _ = void 0 } = t, { value_is_output: b = !1 } = t, { interactive: v } = t, { rtl: y = !1 } = t, w = [];
  function C() {
    n(9, w = c(f)), l.dispatch("change"), b || (l.dispatch("input"), l.dispatch("submit"));
  }
  function p(h) {
    const d = h.detail;
    n(11, f = so(d));
  }
  function c(h) {
    const d = /\(([^)]*)\)(\d+\.\d+)/g, q = [];
    let L;
    for (; (L = d.exec(h)) !== null; )
      q.push({
        id: zt(),
        prompt: L[1],
        scale: parseFloat(L[2])
      });
    return q;
  }
  return e.$$set = (h) => {
    "gradio" in h && n(0, l = h.gradio), "label" in h && n(1, i = h.label), "elem_id" in h && n(2, s = h.elem_id), "elem_classes" in h && n(3, o = h.elem_classes), "visible" in h && n(4, r = h.visible), "value" in h && n(11, f = h.value), "placeholder" in h && n(12, a = h.placeholder), "show_label" in h && n(5, u = h.show_label), "scale" in h && n(6, m = h.scale), "min_width" in h && n(7, g = h.min_width), "loading_status" in h && n(8, _ = h.loading_status), "value_is_output" in h && n(13, b = h.value_is_output), "interactive" in h && n(14, v = h.interactive), "rtl" in h && n(15, y = h.rtl);
  }, e.$$.update = () => {
    e.$$.dirty & /*value*/
    2048 && f === null && n(11, f = ""), e.$$.dirty & /*value*/
    2048 && C();
  }, [
    l,
    i,
    s,
    o,
    r,
    u,
    m,
    g,
    _,
    w,
    p,
    f,
    a,
    b,
    v,
    y
  ];
}
class oo extends Ur {
  constructor(t) {
    super(), Qr(this, t, ro, lo, jr, {
      gradio: 0,
      label: 1,
      elem_id: 2,
      elem_classes: 3,
      visible: 4,
      value: 11,
      placeholder: 12,
      show_label: 5,
      scale: 6,
      min_width: 7,
      loading_status: 8,
      value_is_output: 13,
      interactive: 14,
      rtl: 15
    });
  }
  get gradio() {
    return this.$$.ctx[0];
  }
  set gradio(t) {
    this.$$set({ gradio: t }), V();
  }
  get label() {
    return this.$$.ctx[1];
  }
  set label(t) {
    this.$$set({ label: t }), V();
  }
  get elem_id() {
    return this.$$.ctx[2];
  }
  set elem_id(t) {
    this.$$set({ elem_id: t }), V();
  }
  get elem_classes() {
    return this.$$.ctx[3];
  }
  set elem_classes(t) {
    this.$$set({ elem_classes: t }), V();
  }
  get visible() {
    return this.$$.ctx[4];
  }
  set visible(t) {
    this.$$set({ visible: t }), V();
  }
  get value() {
    return this.$$.ctx[11];
  }
  set value(t) {
    this.$$set({ value: t }), V();
  }
  get placeholder() {
    return this.$$.ctx[12];
  }
  set placeholder(t) {
    this.$$set({ placeholder: t }), V();
  }
  get show_label() {
    return this.$$.ctx[5];
  }
  set show_label(t) {
    this.$$set({ show_label: t }), V();
  }
  get scale() {
    return this.$$.ctx[6];
  }
  set scale(t) {
    this.$$set({ scale: t }), V();
  }
  get min_width() {
    return this.$$.ctx[7];
  }
  set min_width(t) {
    this.$$set({ min_width: t }), V();
  }
  get loading_status() {
    return this.$$.ctx[8];
  }
  set loading_status(t) {
    this.$$set({ loading_status: t }), V();
  }
  get value_is_output() {
    return this.$$.ctx[13];
  }
  set value_is_output(t) {
    this.$$set({ value_is_output: t }), V();
  }
  get interactive() {
    return this.$$.ctx[14];
  }
  set interactive(t) {
    this.$$set({ interactive: t }), V();
  }
  get rtl() {
    return this.$$.ctx[15];
  }
  set rtl(t) {
    this.$$set({ rtl: t }), V();
  }
}
export {
  oo as default
};
