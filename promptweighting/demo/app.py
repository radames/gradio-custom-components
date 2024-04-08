import gradio as gr
from gradio_promptweighting import PromptWeighting


example = PromptWeighting().example_value()


def predict(input):
    return (input, input)


with gr.Blocks() as demo:
    with gr.Row():
        with gr.Column():
            prompt = PromptWeighting(
                value=[
                    {"prompt": "a cat", "scale": 1.5},
                    {"prompt": "a dog", "scale": 1},
                    {"prompt": "a bird", "scale": 0.5},
                ],
                step=0.001,
                info="Please drag up or down to adjust the weight of the prompt.",
            )
            btn = gr.Button("Update Prompt")
        with gr.Column():
            text = gr.Textbox(
                label="Prompt",
                placeholder="",
            )
            prompt2 = PromptWeighting(min=0, max=10, step=0.001)
    inputs = [prompt]
    outputs = [text, prompt2]

    btn.click(fn=predict, inputs=inputs, outputs=outputs, show_progress=False)
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
