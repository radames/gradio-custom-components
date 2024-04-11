
import gradio as gr
from gradio_huggingfacehub_search import HuggingfaceHubSearch


example = HuggingfaceHubSearch().example_value()

def predict(search_in):
    return search_in

with gr.Blocks() as demo:
    with gr.Row():
        with gr.Column():
            search_in = HuggingfaceHubSearch(label="Search Huggingface Hub", sumbit_on_select=True)
            btn = gr.Button("Run")
        with gr.Column():
            search_out = HuggingfaceHubSearch(label="Search Huggingface Hub")

    btn.click(predict, inputs=search_in, outputs=search_out)


if __name__ == "__main__":
    demo.launch()
