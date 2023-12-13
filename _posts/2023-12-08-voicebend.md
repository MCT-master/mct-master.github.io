---
layout: post
title:  "Voice/Bend"
date:   2023-12-04 11:09:00 +0200
categories: interactive-music
author: Nino Jakeli
image: /assets/image/2023_12_08_ninojak_cover.png
excerpt: Microphone Gestural controller
keywords: interactive music instruments
---





# Introduction

<div align="center" style="display: flex; justify-content: center; align-items: center; margin-bottom: 20px;">
    <!-- Flex Sensor Image and Caption -->
    <div style="text-align: center; margin-right: 5px;"> <!-- Adjusted margin-right for slight space -->
        <img src="{{ '/assets/image/2023_12_08_ninojak_300_flex.jpg' | relative_url }}" alt="Flex Sensor" style="width: auto; height: auto; max-width: 100%; max-height: 300px;">
        <em>Flex Sensors</em>
    </div>

    <!-- IR Sensor Image and Caption -->
    <div style="text-align: center;">
        <img src="{{ '/assets/image/2023_12_08_ninojak_IR.jpg' | relative_url }}" alt="IR Sensor" style="width: auto; height: auto; max-width: 100%; max-height: 300px;">
        <em>IR Sensor</em>
    </div>
</div>




   




Voice/Bend is an interactive gestural controller for improvised vocal performance. The idea is to interact with the sound like a physical object. 

It is wearable glove a singer wears on their right hand. It's fitted with bend sensors that detect the flexing of the fingers and an Infrared Distance (IR) sensor on the palm to measure how far the hand is from other objects. The left-hand holds a microphone, capturing the performer's voice.

This approach differs from traditional electronic instruments, which typically rely on knobs or sliders for sound control. With Voice/Bend, the concept is more about physically interacting with sound, as if you could shape and touch it with your hands.
This concept emerged from understanding how singers often use hand movements as part of their expression. The development of interactive systems in music performances has been increasing. These systems, particularly sensor-based ones, have made it simpler for musicians and vocalists to interact with their music.

Gestures play an important role in performances. They can add a different dimension beyond just their visual aspect. This was a key consideration in creating Voice/Bend. The glove's sensors and the dynamic microphone allow for a different way to control sound based on the singer's movements.





# Technical Implementation

<div align="center" style="display: flex; flex-direction: column; justify-content: center; align-items: center; margin-bottom: 20px;">
    <!-- Image 1 -->
    <img src="{{ '/assets/image/2023_12_08_ninojak_diagram1.png' | relative_url }}" alt="Diagram of Voice/Bend" style="width: auto; height: auto; max-width: 100%; max-height: 300px;">
    <!-- Italicized caption for the image -->
    <i>Voice/Bend Diagram</i>
</div>








The glove has flex sensors attached to the index and ring fingers, which detect the amount of  fingers deflection. These sensors change their electrical resistance based on the bending, which is captured to understand the finger's position. I used double-sided tape to mount these sensors onto the glove, ensuring they stay in place during performances.

Additionally, there's an Infrared Distance (IR) sensor on the palm of the glove. This sensor is crucial for detecting how far the hand is from various objects. It generates an electrical potential that changes with distance, making it a reliable proximity sensor.

Regarding sound, voice manipulation can be tricky, especially to avoid feedback issues in live settings. I chose the Shure SM58 microphone, known for its resilience against feedback and excellent sound rejection capabilities.

I utilized Pure Data (Pd), an open-source graphical programming language, and Bela, a unique hardware-software environment. This combination allowed me to prototype the sound and sensor mappings rapidly.

The mapping process in Voice/Bend is multi-layered, translating physical gestures into sound through various stages. This process is integral in converting the data from the glove's sensors into meaningful musical parameters. 

The microphone captures the voice and tracks the pitch, generating two distinct sound waves. These waves are then modified based on the glove's sensor data, offering an intuitive way for vocalists to add new dimensions to their performance.

# User-Study


In an evaluation of the Voice/Bend a performer with a background in singing participated. This user-centric evaluation aimed to assess the controller's usability, musicality, expressiveness, and overall performance utility, integrating subjective and objective elements.

The performer found the Voice/Bend controller relatively straightforward in usability. While certain aspects were intuitive and easy to use, others presented a moderate learning curve. The controller excelled in its expressiveness, significantly enhancing the dynamic and emotional range of the performance. However, the intuitiveness of control received mixed responses, with some functions integrating smoothly into the performer's style while others required more adaptation.

The user reported high levels of enjoyment and engagement, appreciating the controller’s ability to add new dimensions of sound and expression. Objective measurements indicated a reasonable learning time, with precise and accurate control over sound modulation tasks. The performer proficiently managed various musical aspects, including polyphony and feature modulation, essential elements of the controller's design.
Feedback also included suggestions for ergonomic improvements and increased sensor sensitivity, indicating areas for refinement. The flex sensors for controlling FM synthesis parameters were rated positively, with the index finger sensor rated as 'Good' and the ring finger sensor as 'Very Good'. The IR sensor, used for controlling other sound parameters, was rated as 'Fair', suggesting a need for enhancement in its design for better precision and responsiveness.

Overall, the Voice/Bend showed the potential to enhance interactive music performances. The performer's feedback highlighted the importance of continuous refinement to realize the controller's capabilities in live settings fully.

# Future Considerations

To make the system more expressive, a key upgrade will be the addition of three extra flex sensors on each glove. These sensors will allow for a more comprehensive tracking of finger movements, enabling precise modulation of sound parameters like pitch, timbre, and volume. By accurately capturing the bending of each finger, musicians can express more complex gestures, thus enriching their performance with greater depth and nuance.

Another significant enhancement will be integrating an Inertial Measurement Unit (IMU) into each glove. Positioned centrally on the back of the gloves, the IMU, with its 9 degrees of freedom, will track the orientation and movement of the hands. This technology is particularly effective in influencing the sound's spatial characteristics, such as panning and spatial effects. With this addition, performers can manipulate the spatial positioning of the sound in real time, creating a more dynamic and immersive auditory experience.

To ensure the optimal functioning of these sensors, I will design custom 3D-printed mounts. These mounts will secure the sensors on the gloves while allowing full finger mobility. Additionally, I plan to use soft, stretchable fabric for the gloves, similar to materials used for osteoarthritis patients. This choice will ensure comfort and adaptability to various hand sizes, crucial for prolonged use without compromising the sensors' sensitivity or responsiveness. These future enhancements aim to make Voice/Bend a more powerful and versatile tool for interactive music performance.













