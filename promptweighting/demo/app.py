import gradio as gr
from gradio_promptweighting import PromptWeighting


example = PromptWeighting().example_value()

def predict(input):
    print(input)
    return (input, input)

with gr.Blocks() as demo:
    with gr.Row():
        with gr.Column():
            prompt = PromptWeighting(value="(a cat)1.5 eating a (dog)2.0")
            prompt2 = PromptWeighting(value="(a cat)1.5 eating a (dog)2.0", min=0, max=10)
            btn = gr.Button("Update Prompt")
        with gr.Column():
            text = gr.Textbox(
                label="Prompt",
                placeholder="",
            )
            prompt2 = PromptWeighting(value="(a cat)1.5 eating a (dog)2.0")
    inputs = [prompt]
    outputs = [text, prompt2]

    btn.click(fn=predict,
              inputs=inputs,
              outputs=outputs,
              show_progress=False)
    prompt.change(
        fn=predict,
        inputs=inputs,
        outputs=outputs,
        queue=False,
        trigger_mode="always_last",
        show_progress=False,
    )


if __name__ == "__main__":
    demo.launch()
