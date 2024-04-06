<script lang="ts">
  import { nanoid } from "nanoid";
  import { createEventDispatcher } from "svelte";
  import type { PromptType } from "../types";
  import Prompt from "./Prompt.svelte";
  import Plus from "./Icons/Plus.svelte";
  export let classNames = "";
  export let promptsList: PromptType[] = [];
  export let min: number;
  export let max: number;
  export let step: number;

  function removeConcept(conceptToRemove: PromptType) {
    promptsList = promptsList.filter(
      (concept) => concept.id !== conceptToRemove.id
    );
  }
  function addPrompt(negative = false) {
    promptsList = [
      ...promptsList,
      {
        id: nanoid(),
        prompt: "",
        scale: 1,
        negative: negative,
      },
    ];
  }
  const dispatch = createEventDispatcher();
  // $: promptsList,
  //   dispatch("change", promptsList),
  //   dispatch("input", promptsList);
</script>

<div class="flex items-center gap-1 flex-wrap {classNames}">
  {#each promptsList as prompt}
    <Prompt
      {min}
      {max}
      {step}
      bind:prompt
      on:remove={() => removeConcept(prompt)}
      on:add={() => addPrompt()}
    />
  {/each}
  <div class="flex flex-col gap-1">
    <button
      title="Add Concept"
      class="flex items-center text-base text-black hover-text-cyan-500 dark:text-white"
      on:click={() => addPrompt(false)}
      ><Plus />
      <h2 class="text-xs font-normal px-1">Add Prompt</h2>
    </button>
  </div>
</div>

<style scoped>
  .flex {
    display: flex;
  }
  .items-center {
    align-items: center;
  }
  .gap-1 {
    gap: 0.25rem;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .flex-col {
    flex-direction: column;
  }
  .text-base {
    font-size: 1rem;
    line-height: 1.5rem;
  }
  .text-black {
    color: #000;
  }
  .hover-text-cyan-500:hover {
    color: #06b6d4;
  }
  @media (prefers-color-scheme: dark) {
    .dark\:text-white {
      color: #fff;
    }
  }

  .text-xs {
    font-size: 0.75rem;
    line-height: 1rem;
  }
  .font-normal {
    font-weight: 400;
  }
  .px-1 {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
  }
</style>
