# Exploration of Super Resolution Image Enhancement

## Introduction
Super Resolution is an Image Enhancement Technique, where the goal is to take a low resolution image and increase its resolution to improve its quality. In contrary with the reverse operation called the downscaling task, where a large area of pixels is converted into a small area of pixels, Super Resolution is a difficult task to execute: there are limited pixels on the original image to work with and the model must then predict and generate artificial data to create an improved image. 

<img width="95%" src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*W_ioPRwCxM464cVGvb7eGQ.png">

**This project serves to explore different types of super-resolution models and understand the feasibility of deploying such models into laboratory systems.**

## Motivation
Super Resolution plays a critical role in various fields for restoring old images to learn more about the history of our world, analyzing satellite images to create improved maps, and analyzing microscopic organisms in medical diagnoses. As technological and scientific advancements continue to improve, there is an increase in demand for image enhancement tools: the aid of AI in enhancing images helps play a pivotal role for decreasing the costs of developing advanced microscopes, telescopes, and cameras.

## Methods
For this project, I explored two different types of models that have played a revolutionary role in the Super Resolution field: GAN (Generative Advertisal Network) models and Diffusion models. I specifically chose the Real-ESRGAN model and Diffusion model because they were the best models for their respective models from my research. Here is a brief list of facts about each model.

**GAN Model**
- A Generator and a Discriminator compete against each other to mutually boost performance
- The Generator creates a fake image using noise (all at once) to fool the Discriminator
- The Discriminator tries to guess the real image between the generated image and the actual image
- May not produce the best results if the Discriminator or the Generator is not effective enough 
- **Real-ESRGAN:** has a powerful Discriminator in contrary to other GAN models

<img width="90%" src="https://media.discordapp.net/attachments/492533276808970242/1270408200029732864/gan_model.png?ex=66b39755&is=66b245d5&hm=3a84a4a103fe87f330818e449c3c85dfe15e9489471e8ac5333f0bea730406b9&=&format=webp&quality=lossless">

**Diffusion Model**
- A type of Generator
- Adds and removes noise from the original image at a slower rate
  - Better method than GAN Model generator since it gives model time to learn complex patterns
- Adjusts loss to make sure the image is as high quality as possible
<img width="90%" src="https://media.discordapp.net/attachments/492533276808970242/1270410104205873152/diffusion_model.png?ex=66b3991b&is=66b2479b&hm=3fa9e53357f624cae715492e2c1a9b1884aebb7c6b0d7f8126d196c7589acdcc&=&format=webp&quality=lossless">

- **SUPIR:**
  - There is an attached text prompt option to help guide the model to the correct output
    - Can plug in a Multi-Modal Large Language Model
  - Extremely computationally expensive, and the model is very large

## Results

Below are tables highlighting the results when using each of the models. The Numbers in the Input Image column highlight the dimensions of each image. The input images are less than 250x250 pixels in dimension and the output images are upscaled at least 4x in size to highlight the differences in generation.

From the results below, it is very apparent that SUPIR produces results that are much more clear compared to Real-ESRGAN. 

<img width="80%" src="https://media.discordapp.net/attachments/492533276808970242/1270446793846554677/table2.png?ex=66b3bb47&is=66b269c7&hm=9926b9bfdee6f800d4768fb1050e8f217c6acf55c59c049e9f0188b769d59c70&=&format=webp&quality=lossless">

<img width="80%" src="https://media.discordapp.net/attachments/492533276808970242/1270446794160996505/table1.png?ex=66b3bb47&is=66b269c7&hm=aba8bbe57c52c83904d2f73d2d374b0a4e31f634db375cf415296473c1e200cb&=&format=webp&quality=lossless">

## Summary

**Advantages of Real-ESRGAN:**
- Small model (<1 GB)
- Requires <1 GB of VRAM
- Runs on CPU as well
- Fast compute time
- Deployable on Edge






