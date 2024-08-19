# Wildfire Detection

by Aristana Scourtas


Hi friendly reader! My name is Aristana Scourtas, and I’m currently pursuing my MS in Artificial Intelligence at Northwestern University. I have two years of industry software experience and a dream to apply my computing skills to environmental and climate change-related issues. This summer I’m committed to finding novel solutions to an old problem — early detection of wildfires.

## Fire moves fast
The early detection of smoke from wildfires is critical to saving lives, infrastructure, and the environment — and every minute counts. Once ignited, a fire can spread at speeds of up to around 14 mph<sup>[[1](#references)]</sup> — that’s about 2.3 miles every 10 minutes! The devastating Camp wildfire that tore through northern California in 2018 moved at more than a football field per second (160 ft/s) at its fastest point.<sup>[[2](#references)]</sup>

The Camp Wildfire (Nov 8th, 2018), imaged via Landsat 8, a NASA/USGS satellite.<sup>[[3](#references)]</sup>
So how can we do this? Currently, wildfires are detected any number of ways: in California, wildfires are typically first recorded via 911 (a US emergency hotline) calls<sup>[[4](#references)]</sup>, but we also detect wildfires via fire watchtowers or by camera networks and satellite images (like from the GOES<sup>[[5](#references)]</sup> or VIIRS<sup>[[6](#references)]</sup> satellites) that inspect areas of interest. In all of these cases, a person needs to continually monitor the data streams for signs of smoke and fires.

However, human beings can only do so much. Continuously monitoring multiple video feeds for fires is a fatiguing, error-prone task that would be challenging for any person.

But how about a computer?

## What deep learning can do
Deep learning is a subset of machine learning that focuses specifically on neural networks with a high number of layers. Machine learning is really good at doing things humans are typically bad at, like rapidly synthesizing Gigabytes of data and finding complicated patterns and relationships.

A simple neural network with only one hidden layer. We’d call this a “shallow” neural network. (Graphic modified from V. Valkov)<sup>[[8](#references)]</sup>
Neural networks are said to be “universal approximators”,<sup>[[7](#references)]</sup> because they can learn any nonlinear function between an input and an output — this is very helpful for analyzing the patterns and relationships in images, for example.

Deep learning algorithms are good for the task of smoke detection, because they can constantly and automatically “monitor” the image and video streams from fire watchtower networks and satellites, and alert officials when there’s likely smoke in the image.

## Current algorithms
As I’m writing this article, the current research out there on deep learning for wildfire smoke detection largely focuses on using Convolutional Neural Networks (CNNs) for static images. CNNs are commonly used for image data, and are good at learning spatial information.

For example, in my smoke detection research, we’re working with an image dataset from the HPWREN<sup>[[9](#references)]</sup> tower network in southern California.

An example HPWREN image capturing smoke. This image, after it is pre-processed for the neural network, is then fed to the CNN as input.
Unfortunately, while these CNN-based algorithms usually have high accuracy, they can also produce a high number of false positives, meaning they mistake other things, like clouds or fog, for smoke.

<!--(Images are missing for this footnote) Examples of false positives from the work of Govil et al in their 2020 paper. This model divided the image into a grid, and assigned the likelihood of each grid cell being smoke (the threshold for smoke was adjusted dynamically).4 On the left, clouds were mistaken for smoke. On the right, fog was mistaken for smoke. -->


Furthermore, while these models do well in their studies, oftentimes they do not perform well when assessed with images from other regions. For instance, the ForestWatch model, which has been deployed in a variety of countries such as South Africa, Slovakia, and the USA, did not perform well when assessed using data from Australian watch towers.

This begged the question: “well, how do humans detect wildfire smoke?” Looking through the dataset of images of California landscapes, I often found I could not tell if there was smoke in any of the early images.<sup>[[10](#references)]</sup>

Can you find the smoke in this image from the HPWREN towers? It was taken 9 minutes after the smoke plume was confirmed to be visible from the tower.
(Answer: from the left of the image, it’s 1/3 of the way in)
I’d only see the smoke once I compared images sequentially, from one timestamp to the next. Intuitively, movement on or below the horizon seemed to be a key aspect of recognizing smoke.

## Is time the secret ingredient?
After listening to the opinions of my mentors and a California fire marshal, it seemed like everyone agreed — movement was a key part of how we identified smoke.

Could we create a model that learns temporal information as well as spatial information? In other words, could it learn both what smoke looked like (spatial), and how the images of smoke changed over time (temporal)?

I’m now developing an algorithm that can do just that. Often, a Long Short-Term Memory network (LSTM), which is a kind of Recurrent Neural Network (RNN), are used for learning patterns over time (i.e. in sequential data). For instance, LSTMs are frequently used for text prediction and generation (like that in the Messages app on iPhones).

Models that combine spatial data (often learned via CNNs) with some other model or technique that captures temporal data have been used in a variety of other applications with video or sequential image data, such as person re-identification, object tracking, etc.

We’re exploring how we can apply a similar hybrid spatial-temporal model to our smoke dataset.

## Conclusion
Automated early detection of wildfire smoke using deep learning models has shown promising results, but false positive rates remain high, particularly when the models are deployed to novel environments.

Including a temporal component may be a key way we can improve these models, and help them distinguish better between smoke and clouds or fog.

This work doesn’t come a moment too soon, as wildfires are increasing in intensity and frequency due to climate change’s effects on air temperature, humidity, and vegetation, among other factors. Unfortunately, fires like the ones that tore across Australia earlier this year will become much more common in many parts of the globe.

Hopefully, as we improve the technology to detect these fires early on, we can save lives and ecosystems!


![The Amazon Rainforest](../imgs/wildfire-1.jpg)
> The Amazon Rainforest, home to many peoples and countless species. A home worth protecting. <sup>[[11](#references)]</sup>

## References
1. “How Wildfires Work”. https://science.howstuffworks.com/nature/natural-disasters/wildfire.htm
2. “Why the California wildfires are spreading so quickly”. https://www.cnn.com/2018/11/09/us/wildfires-why-they-spread-so-quickly-wcx/index.html
3. Camp Fire photo. https://en.wikipedia.org/wiki/Camp_Fire_(2018)
4. Govil, K., Welch, M. L., Ball, J. T., & Pennypacker, C. R. (2020). Preliminary Results from a Wildfire Detection System Using Deep Learning on Remote Camera Images. Remote Sensing, 12(1), 166. https://www.mdpi.com/2072-4292/12/1/166
5. GOES. https://www.nasa.gov/content/goes-overview/index.html
6. VIIRS. https://ncc.nesdis.noaa.gov/VIIRS/
7. Scarselli, F., & Tsoi, A. C. (1998). Universal approximation using feedforward neural networks: A survey of some existing methods, and some new results. Neural networks, 11(1), 15-37. https://www.sciencedirect.com/science/article/pii/S089360809700097X?casa_token=NaZxQdSUi6MAAAAA:zMhRIkTNDTZWSWze5wIHVK73EtlgHzLm3cAMkRBpQmepxH3cSAyhIvPKpu_H5b-2kYdTcG1IQA
8. NN graphic. https://towardsdatascience.com/build-a-simple-neural-network-with-tensorflow-js-d434a30fcb8
9. HPWREN. http://hpwren.ucsd.edu/cameras/
10. Alkhatib, A. A. (2014). A review on forest fire detection techniques. International Journal of Distributed Sensor Networks, 10(3), 597368. https://journals.sagepub.com/doi/full/10.1155/2014/597368
11. Amazon Rainforest photo. https://www.flickr.com/photos/cifor/35781446921/in/photolist-WvTgyD-Wswjpu-WvThhH-aDkLRK-gc6ber-pTyR3d-WDWRaN-5DmhEW-26zB5WS-Wsw47L-okSB39-tGJNa6-fmiT3G-WDWQt7-bhuWwB-apiuo5-Tiiyso-4Liefh-Wsw5a7-VriduL-Wsw2so-4CffYr-Wswded-WvTeXH-Vri41W-9BLm5D-WDWS1L-iDTuNX-27MfQ1F-fmPDax-KDSb2e-7J1mrw-28tozv-27NbL44-21FpxXP-CSH5z-c1pwo-c1oNM-WswfXQ-9c2X8q-9BLn9X-9BPeJY-VADYoe-XJJZUo-U8xYB1-9BPcuC-Vrjgjm-9BLhcZ-Wsx9s3-9BPfHU
