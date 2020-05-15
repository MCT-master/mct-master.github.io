---
layout: post
title: Sound Painting
date: 2020-05-15 00:00:10 +0200
categories: Motion Tracking
author: Aleksander Tidemann
image: /assets/img/Tidemann/sound-painting.jpg
excerpt: "An application that tracks, visualizes and sonifies the motion of colors."
Keywords: MCT, Motion Tracking, Color tracking, maxMSP 
--- 

In this project, I have explored how sonification through motion tracking can make daily activities more interesting and multi-modal. I have done this by creating a sound painting application that tracks and visualizes colors in a video and produces sounds based on the motion of those colors. My goal was just to create a visually and sonically precise color tracking system, in MaxMSP, that was intuitive to use and easy to understand.

<figure>
    <iframe src="https://drive.google.com/file/d/1KUodlOrqJxHMgMVfSz8KYd5L07GFG36k/preview" height="340px" width="600px" frameborder="0">
    </iframe>
    <figcaption>Video Demo</figcaption>
</figure>

When I starting working on this I immediately realized that certain key aspects were essential for the project to succeed. The application would have to:

1. Track some motion precisely. 
2. Visualize the motion tracking in a meaningful way. 
3. Extract tracking coordinates in realtime. 
4. Use tracking coordinates as basis for sonification.

## Tracking

I experimented with three different methods of motion tracking. The first method revolved around tracking specific RGB-values by using a bounding box technique before calculating the center coordinates of that box. However, this resulted in a considerable amount of jitter due to constant variations in light and varying camera-feed quality which in turn generated very unstable RGB-data input.

<figure>
    <iframe src="https://drive.google.com/file/d/1gnMoPbQGuJBiFcgG3CVP-5Z1gFf32ROl/preview" height="340px" width="600px" frameborder="0">
    </iframe>
    <figcaption>Tracking method 1 - Findbounds</figcaption>
</figure>

The second method featured motion tracking through generating a motion image, the difference between two consecutive frames, and calculating the center of mass (centroid) from this image. Additionally, to enhance the visualization of the tracking, I implemented a feature that paints several colored circles on the display based on the centroid coordinates using the jit.lcd object.

This method yielded better visual results but still lacked a good sense of agency similar to the first method. This was because the centroid was calculated from the sum total of motion on the screen.

<figure>
    <iframe src="https://drive.google.com/file/d/1IaIHp4XUgDPs02zcIkaEAVWr1RKU01tg/preview" height="340px" width="600px" frameborder="0">
    </iframe>
    <figcaption>Tracking method 2 - Centroid of Motion</figcaption>
</figure>

It thus became clear that a combination of color tracking and centroid calculation would be the way to go. This meant that I had to devise a better color tracking module. 

I decided to use a set of filtering approaches to isolate specific colors in the video-stream and further processes it so that it satisfied the input requirements of the centroid calculation. Additionally, I added a controllable noise threshold parameter to allow for some calibration of the module to accommodate various contexts. Then, I implemented it together with the visualization module previously constructed and made the system respond to both blue and red colors.

<figure>
    <iframe src="https://drive.google.com/file/d/1ih-aH2XgOYEQyT2eZkV0wpK9fwHEqITd/preview" height="340px" width="600px" frameborder="0">
    </iframe>
    <figcaption>Tracking method 3 - Centroid of Color</figcaption>
</figure>

## Sonification

For the sonification I ended up using a model where the motion controls the central frequency and the number of active audio channels in the mix. I chose these parameters because of their independence of one another which I believe could enhance sonic proprioception of an object moving around in a two-dimensional space.

<figure>
    <iframe src="https://drive.google.com/file/d/1N3NURJglAKMWCvZS85JfgPgsURChfH1B/preview" height="340px" width="600px" frameborder="0">
    </iframe>
    <figcaption>Sonification diagram</figcaption>
</figure>

The frequency of the sound is controlled by movement along the y-axis. When the user moves an object along the x-axis, more audio channels are audible and the frequency of the previous channel is held in place. The number of audio channels can also be adjusted which consequently divides the x-dimension of the screen into greater of fewer equally big sections. The idea is that this would generate a path of sound, like a pencil sketching lines on paper. 

To further enhance this effect I used panning to spatialize the sound based on the number of audio channels. The panning values are also automatically rescaled from left to right according to the number of channels selected. 

<figure>
    <iframe src="https://drive.google.com/file/d/12mm3d0S5ye6-EmoAiJki-wRSlRQTPF2v/preview" height="340px" width="600px" frameborder="0">
    </iframe>
    <figcaption>Panning diagram</figcaption>
</figure>

## Summing up

After several rounds of testing I was generally surprised by how well the color tracking worked, both by itself and in conjunction with the centroid calculations for the visualization and sonification. However, there was still some jitter when subjecting the system to various lighting conditions and different locations. In these scenarios, the noise threshold parameter comes in handy and was usually able to calibrate the system to a working standard. 

Another interesting discovery was the musical use of audio channels. Although I originally expected the sonification to be somewhat uninteresting, the dynamic use of audio channels uniquely colored the sound. However, when painting with multiple colors on a high number of channels, the sounds quickly gets cluttered and noisy.   

## Future Development

A future development if this project would involve extracting more motion parameters to create more complex sonifications and visualizations. For instance, it would be interesting to extract the acceleration of the movement and the intensity of the colors to enhance the sense of agency and user control. Additionally, by having a standardized size for the tracking objects and extracting the size of those objects in realtime, it would be worth exploring whether it was possible to represent a virtual 3D space through binaural panning or other spatial audio techniques.
