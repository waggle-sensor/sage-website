import ImageSearchVideo from './Image_Search.mp4'

# Sage Image Search

In the age of AI-powered tools, searching through thousands of images shouldn't just be about basic metadata. What if you could search by meaning? That’s exactly what this project aims to do: combine the best of **semantic understanding** and **keyword precision** into one powerful **hybrid image search engine** to help you find relevant image series for your project.

<video className="w-full h-auto" controls>
  <source src={ImageSearchVideo} type="video/mp4" />
</video>

> All images in this demo were captured by Sage nodes and retrieved from Beehive in near real-time.

Let’s walk through what it does, how it works, and where it’s going next.

## What We're Building

This project is all about **hybrid search** — combining **vector-based** and **keyword-based** search — to enable smarter image retrieval. At its core, the system:

* **Generates captions** for each image using a **LLM ([Florence 2](https://huggingface.co/microsoft/Florence-2-base))**
* **Creates multi-modal embeddings** using a **Multimodal Embedding Model ([ImageBind](https://imagebind.metademolab.com))**
* **Stores embeddings** using a **Vector Database ([Weaviate](https://weaviate.io))**
* Performs **vector search** (using those embeddings)
* Also does a traditional **keyword search** on the image captions and metadata
* **Combines the results** into a hybrid search result set
* Finally, applies a **reranker model ([ms-marco-MiniLM-L6-v2](https://huggingface.co/cross-encoder/ms-marco-MiniLM-L6-v2))** to prioritize the most relevant results

Why all this? Because combining these techniques helps you go beyond surface-level matching — it helps find the *right* image even if the words in the query aren’t an exact match to the caption.

## The Tech Stack & Pipeline

Here’s how it all fits together:

### Step 1: Captioning with Florence 2

We start with raw images. [Florence 2](https://huggingface.co/microsoft/Florence-2-base), a vision-language model by Microsoft, generates descriptive captions for each one. These captions help both with embedding generation and keyword search later on.

For example, an image of a storm in Chicago might be captioned as:

> *"A wet intersection of cars with a sky filled with dark clouds."*

### Step 2: Embedding with ImageBind

We then use **[ImageBind](https://imagebind.metademolab.com)**, a multi-modal embedding model by Meta, to generate vector representations — not just for the images, but for the generated captions as well. The key is that ImageBind places all these different modalities (images, text, audio, etc.) into the **same vector space**. This enables meaningful similarity comparisons.

### Step 3: Vector + Keyword Search

At query time, we do two types of search:

* **Vector Search:** The user’s query is embedded into the same space, and we search for the most similar image-caption vectors.
* **Keyword Search:** The query is also run as a traditional text search against the metadata and captions using **BM25**.

Each method has its strengths. Vector search understands *meaning*, while keyword search catches *literal matches*.

### Step 4: Hybrid Search Fusion

We merge the results from both search types by calculating a weighted score based on a [fusion algorithm](https://weaviate.io/blog/hybrid-search-fusion-algorithms). This hybrid strategy balances **semantic relevance** from vector search with the **precision** of keyword matching, ensuring more accurate and meaningful results.

### Step 5: Reranking with ms-marco-MiniLM-L6-v2

Now we pass all those results through a **reranker** — a small but powerful transformer model trained on the MS MARCO dataset. It re-evaluates how well each result matches the original query, using a deeper level of semantic understanding, and reorders them accordingly.

This is the finishing touch that helps boost the most relevant images to the top.

## Next Steps

There’s a lot of exciting ground to cover next. Some upcoming improvements include:

* **Better Captions**: Experimenting with prompts or other models to produce more concise, relevant captions.
* **Tuning Hybrid Weighting**: Adjusting how much influence each search type has in the final result.
* **Fine-tuning the Reranker**: Custom training the reranker could further improve accuracy.
* **User Interface**: Building a front-end interface to make this interactive and visually intuitive.

## Why This Matters

As our object database continues to grow, the challenge of finding the right image at the right moment becomes increasingly difficult. With thousands of visuals available, building rich datasets with Sage is possible — but navigating that volume can be frustrating and time-consuming. Traditional search methods in our cyberinfrastructure are starting to show their limits. **Time-based filtering** assumes users already know when the relevant images were captured, while **metadata filtering** often forces them to sift through large volumes manually to find what they need. That’s where this **hybrid approach** makes a real difference — by combining the **semantic power of vector search** with the **precision of keyword matching**, users can efficiently locate the exact image they’re looking for — and pinpoint the precise moment it was captured.

If you’re working on something similar or curious to dive deeper, feel free to reach out.

[Browse the project code on GitHub](https://github.com/your-username/sage-image-search)