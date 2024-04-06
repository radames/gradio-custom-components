<script lang="ts">
  import { onMount, createEventDispatcher } from "svelte";
  import { drag } from "d3-drag";
  import { select } from "d3-selection";
  import Cross from "./Icons/Cross.svelte";
  import type { PromptType } from "../types";

  export let prompt: PromptType;
  export let min = 0;
  export let max = 2;
  export let step = 0.01;

  let inputEl: HTMLInputElement;
  let isDragging = false;
  let isHovering = false;
  const dispatch = createEventDispatcher();

  let wScale = 0;

  let dragEl: HTMLElement;

  onMount(() => {
    const dragHandler = drag()
      .on("start", (event) => {
        wScale = prompt.scale;
        isDragging = true;
      })
      .on("drag", (event) => {
        const { dx, dy } = event;

        wScale -= dy * step;
        wScale = Math.min(wScale, max);
        wScale = Math.max(wScale, min);

        prompt.scale = wScale;
      })
      .on("end", (event) => {
        isDragging = false;
      });

    select(dragEl).call(dragHandler);
    inputEl.focus();
  });
  function onKeyPress(event: InputEvent) {
    if (event.key === "Enter") {
      dispatch("add");
    }
  }
  $: if (isDragging) {
    document.body.classList.add("grabbing");
  } else {
    document.body.classList.remove("grabbing");
  }
</script>

<div
  class="w-min flex flex-col group relative"
  bind:this={dragEl}
  on:pointerenter={() => (isHovering = true)}
  on:pointerleave={() => (isHovering = false)}
  on:pointercancel={() => (isHovering = false)}
  on:pointerover={() => (isHovering = true)}
  on:pointerout={() => (isHovering = false)}
  on:pointerenter={() => (isHovering = true)}
>
  <div
    class="flex justify-between items-center rounded-md overflow-hidden
        {isDragging || isHovering ? 'select-none touch-manipulation' : ''}"
  >
    <div class="absolute z-10 flex items-center justify-center w-[2.5em]">
      <div class="relative">
        <div class="bottom-full p-1">
          <span
            class="flex text-[0.5rem] font-mono text-black dark:group-hover:text-white"
          >
            <span class="text-black">
              <span class="text-black">{prompt.scale.toFixed(1)}</span>
            </span>
          </span>
        </div>
      </div>
    </div>
    <div class="relative flex z-0">
      <input
        bind:this={inputEl}
        on:keypress={onKeyPress}
        type="text"
        placeholder="Prompt"
        class="text-sm z-0 pl pr py-2 outline-none text-black {prompt.neg_guidance
          ? 'line-through'
          : ''}"
        style="width: calc({Math.max(14, prompt.prompt.length + 1)}ch + 2em) ;"
        bind:value={prompt.prompt}
      />
    </div>
    <button
      class="absolute z-1 right-1 text text-black hover:text-red-500 invisible group-hover:visible"
      title="Remove prompt"
      on:click={() => dispatch("remove")}
    >
      <Cross />
    </button>
  </div>
</div>

<style scoped>
  :global(.grabbing *) {
    cursor: grabbing !important;
  }

  .w-min {
    width: min-content;
  }
  .flex {
    display: flex;
  }
  .flex-col {
    flex-direction: column;
  }
  .group:hover .group-hover\:block {
    display: block;
  }
  .group:hover .group-hover\:text-white {
    color: white;
  }
  .group:hover .group-hover\:visible {
    visibility: visible;
  }
  .relative {
    position: relative;
  }
  .justify-between {
    justify-content: space-between;
  }
  .items-center {
    align-items: center;
  }

  .overflow-hidden {
    overflow: hidden;
  }
  .select-none {
    user-select: none;
  }
  .touch-manipulation {
    touch-action: manipulation;
  }
  .absolute {
    position: absolute;
  }
  .z-10 {
    z-index: 10;
  }
  .p-1 {
    padding: 0.125rem;
  }
  .mx-3 {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
  .text-black {
    color: black !important;
  }
  .text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
  .cursor-ns-resize {
    cursor: ns-resize;
  }
  .bottom-full {
    bottom: 100%;
  }
  .mb-2 {
    margin-bottom: 0.5rem;
  }
  @media (prefers-color-scheme: dark) {
    .dark\:group-hover\:text-white {
      color: white;
    }
  }
  .text-\[0\.5rem\] {
    font-size: 0.5rem;
  }
  .font-mono {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
      "Liberation Mono", "Courier New", monospace;
  }
  .z-0 {
    z-index: 0;
  }
  .pl {
    padding-left: 1.5em;
  }
  .pr {
    padding-right: 0.5em;
  }
  .py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  .outline-none {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
  .line-through {
    text-decoration: line-through;
  }
  .z-1 {
    z-index: 1;
  }
  .right-1 {
    right: 0.25rem;
  }
  .hover\:text-red-500:hover {
    color: #ef4444 !important;
  }
  .invisible {
    visibility: hidden;
  }
</style>
