<svelte:options accessors={true} />

<script lang="ts">
  import type { Gradio } from "@gradio/utils";
  import { BlockTitle } from "@gradio/atoms";
  import { Block } from "@gradio/atoms";
  import { StatusTracker } from "@gradio/statustracker";
  import type { LoadingStatus } from "@gradio/statustracker";
  import { tick } from "svelte";
  import "./output.css";
  import QuickSearch from "./QuickSearch/QuickSearch.svelte";
  import type { QuickSearchType } from "./QuickSearch/Types";
  export let gradio: Gradio<{
    change: never;
    submit: never;
    input: never;
  }>;
  export let label = "Textbox";
  export let elem_id = "";
  export let elem_classes: string[] = [];
  export let visible = true;
  export let value = "";
  export let placeholder = "Search models, datasets, users...";
  export let show_label: boolean;
  export let scale: number | null = null;
  export let min_width: number | undefined = undefined;
  export let loading_status: LoadingStatus | undefined = undefined;
  export let value_is_output = false;
  export let interactive: boolean;
  export let searchType: QuickSearchType[] = [
    "model",
    "dataset",
    "space",
    "org",
    "user",
  ];
  export let sumbit_on_select = false;

  let el: HTMLTextAreaElement | HTMLInputElement;
  elem_classes = ["z-40", ...elem_classes];

  function handle_change(): void {
    console.log("handle_change");
    gradio.dispatch("change");
    if (!value_is_output) {
      gradio.dispatch("input");
    }
  }

  $: if (value === null) value = "";

  // When the value changes, dispatch the change event via handle_change()
  // See the docs for an explanation: https://svelte.dev/docs/svelte-components#script-3-$-marks-a-statement-as-reactive
  $: value, handle_change();
</script>

<Block
  {visible}
  {elem_id}
  {elem_classes}
  {scale}
  {min_width}
  allow_overflow={true}
  padding={true}
>
  {#if loading_status}
    <StatusTracker
      autoscroll={gradio.autoscroll}
      i18n={gradio.i18n}
      {...loading_status}
    />
  {/if}
  <BlockTitle {show_label} info={undefined}>{label}</BlockTitle>
  <div class="custom-component">
    <QuickSearch
      bind:inputValue={value}
      classNames="flex-1 lg:max-w-sm mr-2 sm:mr-4 md:mr-3 xl:mr-6"
      header
      showIcon
      disabled={!interactive}
      {placeholder}
      searchParams={{
        withLinks: true,
        searchType: searchType,
      }}
      on:selected={() => {
        if (sumbit_on_select) {
          gradio.dispatch("submit");
        }
      }}
      withFullTextSearchLink
    />
  </div>
</Block>

<style>
</style>