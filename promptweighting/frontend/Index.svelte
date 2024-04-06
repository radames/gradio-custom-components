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
    change: string;
    submit: never;
    blur: never;
    select: SelectData;
    input: never;
    focus: never;
  }>;
  export let label = "Prompt Weighting";
  export let elem_id = "";
  export let elem_classes: string[] = [];
  export let visible = true;
  export let value = "";
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

  let el: HTMLTextAreaElement | HTMLInputElement;
  const container = false;
  let promptsList: PromptType[] = [];

  function handle_change(): void {
    promptsList = parseInput(value);
    gradio.dispatch("change");
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

  $: if (value === null) value = "";

  $: value, handle_change();

  function handle_prompt_change(event: CustomEvent<PromptType[]>) {
    const newPrompts = event.detail;
    value = generateOuput(newPrompts);
  }
  function generateOuput(promptsList: PromptType[]) {
    const output = promptsList
      .map((prompt) => `(${prompt.prompt})${prompt.scale.toFixed(4)} `)
      .join(" ");
    return output;
  }
  function parseInput(prompt: string) {
    const regex = /\(([^)]*)\)(\d+\.\d+)/g;
    const parsed = [];

    let match;
    while ((match = regex.exec(prompt)) !== null) {
      const prompt = match[1] || "";
      parsed.push({
        id: nanoid(),
        prompt: prompt,
        scale: parseFloat(match[2]),
      });
    }
    return parsed;
  }
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
    <BlockTitle {show_label} info={undefined}>{label}</BlockTitle>

    <!-- <input
      data-testid="textbox"
      type="text"
      class="scroll-hide"
      bind:value
      bind:this={el}
      {placeholder}
      disabled={!interactive}
      dir={rtl ? "rtl" : "ltr"}
      on:keypress={handle_keypress}
    /> -->

    <PrompstList
      {min}
      {max}
      classNames={"py-5"}
      on:change={handle_prompt_change}
      {promptsList}
    />
  </label>
</Block>

<style>
</style>
