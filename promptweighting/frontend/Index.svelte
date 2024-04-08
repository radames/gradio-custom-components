<svelte:options accessors={true} />

<script lang="ts">
  import type { PromptType, SelectData } from "types";
  import { nanoid } from "nanoid";
  import type { Gradio } from "@gradio/utils";
  import { BlockTitle } from "@gradio/atoms";
  import { Block } from "@gradio/atoms";
  import { StatusTracker } from "@gradio/statustracker";
  import type { LoadingStatus } from "@gradio/statustracker";
  import PrompstList from "./lib/PrompstList.svelte";

  import { tick } from "svelte";

  export let gradio: Gradio<{
    change: PromptType[];
    submit: never;
    blur: never;
    select: SelectData;
    input: never;
    focus: never;
  }>;
  export let info: string | undefined = undefined;
  export let label = "Prompt Weighting";
  export let elem_id = "";
  export let elem_classes: string[] = [];
  export let visible = true;
  export let value: PromptType[] = [];
  export let placeholder = "";
  export let show_label: boolean;
  export let scale: number | null = null;
  export let min_width: number | undefined = undefined;
  export let loading_status: LoadingStatus | undefined = undefined;
  export let value_is_output = false;
  export let interactive: boolean;
  export let rtl = false;
  export let min = 0;
  export let max = 2;
  export let step = 0.01;
  let promptsList: PromptType[] = [];

  let el: HTMLTextAreaElement | HTMLInputElement;
  const container = false;

  function handle_change(): void {
    gradio.dispatch("change", value);
    if (!value_is_output) {
      gradio.dispatch("input");
      gradio.dispatch("submit");
    }
  }

  async function handle_keypress(e: KeyboardEvent): Promise<void> {
    await tick();
    if (e.key === "Enter") {
      e.preventDefault();
      gradio.dispatch("submit");
    }
  }

  $: if (value === null) value = [];

  $: value, handle_change();
</script>

<Block
  {visible}
  {elem_id}
  {elem_classes}
  {scale}
  {min_width}
  allow_overflow={false}
  padding={true}
>
  {#if loading_status}
    <StatusTracker
      autoscroll={gradio.autoscroll}
      i18n={gradio.i18n}
      {...loading_status}
    />
  {/if}

  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label class:container class="relative">
    <BlockTitle {show_label} {info}>{label}</BlockTitle>
    <PrompstList
      {min}
      {max}
      {step}
      classNames={"py-5"}
      bind:promptsList={value}
    />
  </label>
</Block>

<style>
</style>
