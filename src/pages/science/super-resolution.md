# Exploration of Super Resolution Image Enhancement

## Introduction
Super Resolution is an Image Enhancement Technique, where the goal is to take a low resolution image and increase its resolution to improve its quality. In contrary with the reverse operation called the downscaling task, where a large area of pixels is converted into a small area of pixels, Super Resolution is a difficult task to execute: there are limited pixels on the original image to work with and the model must then predict and generate artificial data to create an improved image. 

<img width="95%" src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*W_ioPRwCxM464cVGvb7eGQ.png">

**This project serves to explore different types of super-resolution models and understand the feasibility of deploying such models into laboratory systems.**

## Motivation
Super Resolution plays a critical role in various fields for restoring old images to learn more about the history of our world, analyzing satellite images to create improved maps, and analyzing microscopic organisms in medical diagnoses. As technological and scientific advancements continue to improve, there is an increase in demand for image enhancement tools: the aid of AI in enhancing images helps play a pivotal role for decreasing the costs of developing advanced microscopes, telescopes, and cameras.

## Methods
For this project, I explored two different types of models that have played a revolutionary role in the Super Resolution field: GAN models and Diffusion models. I specifically chose the Real-ESRGAN model and Diffusion model because they were the best models for their respective models from my research. Here is a brief list of facts about each model.

**GAN Model**
- A Generator and a Discriminator compete against each other in hopes of boosting performance mutually
- Generator generates fake images using noise (all at once) to fool the Discriminator
- Discriminator tries to guess the real image between the generated image and the actual image
- May not produce the best results if the Discriminator or the Generator is not effective enough 
- **Real-ESRGAN:** has a powerful discriminator in contrary to other GAN models

<img width="80%" src="https://media.discordapp.net/attachments/492533276808970242/1270408200029732864/gan_model.png?ex=66b39755&is=66b245d5&hm=3a84a4a103fe87f330818e449c3c85dfe15e9489471e8ac5333f0bea730406b9&=&format=webp&quality=lossless">

**Diffusion Model**
- A type of generator
- Adds and removes noise from the original image at a slower rate
  - Better method than GAN Model generator since it gives model time to learn complex patterns
- Adjusts loss to make sure the image is as high quality as possible
<img width="80%" src="https://media.discordapp.net/attachments/492533276808970242/1270410104205873152/diffusion_model.png?ex=66b3991b&is=66b2479b&hm=3fa9e53357f624cae715492e2c1a9b1884aebb7c6b0d7f8126d196c7589acdcc&=&format=webp&quality=lossless">

- **SUPIR:**
  - There is an attached text prompt option to help guide the model to the correct output
    - Can plug in a Multi-Modal Large Language Model
  - Extremely computationally expensive, and the model is very large

## Results

| Input Image | Real-ESRGAN | SUPIR (with prompt) | SUPIR (without prompt) |
|-|-|-|-|
|<img width="120%" src="https://media.discordapp.net/attachments/492533276808970242/1270417960921726997/bus_stop_better.png?ex=66b3a06d&is=66b24eed&hm=80ea03b7b7a4d1e2f25ac5f1680cf6af1b36aaf3d9ed488342ac28b5ed1dc12b&=&format=webp&quality=lossless">|<img width="93%" src="https://media.discordapp.net/attachments/492533276808970242/1270415773634138254/image.png?ex=66b39e63&is=66b24ce3&hm=0ee2fea6d53dd1dda46508867e8a7def446f0ccd61c82d4a362e637b7ac20cc1&=&format=webp&quality=lossless&width=707&height=611">|<img width="100%" src="https://media.discordapp.net/attachments/492533276808970242/1270417960271482900/bus_stop_prompt.png?ex=66b3a06c&is=66b24eec&hm=29256342494f1d8f6d871713d4095d41e17b76ca0b2856e3b44a2caa6a6dfa4d&=&format=webp&quality=lossless">|<img width="100%" src="https://media.discordapp.net/attachments/492533276808970242/1270417959923224709/bus_stop_no_prompt.png?ex=66b3a06c&is=66b24eec&hm=fca91740646dc6af42fe61fe81154911ec24a68fe8a8b18f1a5e01eddcdf84a4&=&format=webp&quality=lossless">







