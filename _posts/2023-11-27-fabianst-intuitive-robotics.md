---
layout: post
title: "Intuitive Robotics"
date: 2023-11-27 07:00:00 +0200
categories: applied-project
author: Emin Memis, Fabian Stordalen, Masoud Niknafs, Theo Griffin Halvorsen
image: https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2023_11_25_fabianst_blogcover.png?alt=original
keywords: imu, robotics, telerobotics
excerpt: "Controlling a robot arm with medical sensors"
---

# Introduction
For our project we collaborated with [SiFi Labs](https://sifilabs.com/) to create and implement a system to showcase how you can use their [BioPoint](https://sifilabs.com/biopoint/) biosensors to control a robotic arm. This was quite an ambitious and daring project. As this project was a collaboration between us MCT students and the informatics department we wanted to work on a project which could combine our different fields of expertise.

<figure>
  <img src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2023_11_23_fabianst_workinghard.jpg?alt=original"
  height="500"
  width="400">
  <figcaption>
    <span class="caption">Hard at work trying to figure out an optimal control interface</span>
  </figcaption>
</figure>

## What will the robot arm do?

With the powerful combination of SiFi Labs' BioPoint biosensors and the Universal Robots UR10e, we aimed to showcase the precision and versatility of our robotic system through a visually engaging task: painting 🎨. By harnessing the data from BioPoint's IMU sensors, we can translate the movements captured by the user into the movement of the robot arm.

## The BioPoint
The [BioPoint](https://sifilabs.com/biopoint/) is a powerful and lightweight device developed by SiFi labs featuring 6 different sensors capable of recording almost any biosignal imaginable. For our use case we were mostly interested in utilizing the [Intertial Measurement Unit sensors (IMU)](https://en.wikipedia.org/wiki/Inertial_measurement_unit) on the device. Multiple of our team members had previous experience using these sensors for [artistic applications](https://mct-master.github.io/motion-capture/) so we thought it would be fitting for our project. 

<figure>
  <img src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2023_11_27_fabianst_biopoint.jpg?alt=original"
  height="500"
  width="400">
  <figcaption>
    <span class="caption">The BioPoint Biosensor</span>
  </figcaption>
</figure>

## Introducing the Robot
Meet the robot we worked on for this project. The [Universal Robots UR10e](https://www.universal-robots.com/products/ur10-robot/). This is a medium sized industrial robot, and is also quite large as you can see! This big guy is known for its robust capabilities and ease of integration into various applications - it opens up a world of possibilities for automation in diverse industries.

<figure>
  <img src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2023_11_27_ahmetem_robotarm01.jpg?alt=original"
  height="500"
  width="400">
  <figcaption>
    <span class="caption">The UR10e Robot Arm</span>
  </figcaption>
</figure>



<figure style="float: none">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/GYB5D0WIcmQ?si=mEKbO0NLhAFNZpW7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
    </iframe>
  <figcaption> The first move matters! </figcaption>
</figure>

# Navigating the Project: From Concept to Reality

Embarking on a three-month project, we knew time was of the essence, guiding us to keep our goals practical and achievable. Our chosen task, to get the robot to paint, offered a balanced challenge that aligned with our timeframe. To map out our journey, we utilized proven planning and project management tools.

## Project Network Diagram (PND)

With the Project Network Diagram (PND), we visualized the sequential tasks, always having a clear next step in sight. This dynamic tool provided a bird's-eye view of our progress, ensuring we stayed on track and understood the needs and evolving aspects of our project.

<figure>
  <img src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2023_11_23_faibanst_pnd.png?alt=original"
  height="300"
  width="700">
  <figcaption>
    <span class="caption">Project Network Diagram</span>
  </figcaption>
</figure>

# Implementation

Our team recently embarked on a complex project involving the programming and maneuvering of a robot. We kicked off this endeavor by plunging deep into the mechanics of robotics control, learning the intricacies of tech pendant manipulation, and slowly mastering manual control using Joint and TCP actions. Although initially, we were tethered by local networks, later, we successfully tapped into the world of remote control through the Universal Robots ROS driver, which was quite a hurdle given our unfamiliarity with a ROS environment.

We persisted, exploring UR’s predefined protocols for communication over TCP/IP. We examined only two among the six communication interfaces available - the Primary/Secondary and RTDE interfaces. While the Primary/Secondary interface made it possible to transmit data to the robot and alter specific state changes, the weak link was its low frequency, manifesting in choppy motion. Thus, we advanced towards the RTDE interface with a higher frequency and, in turn, smoother motion. This improvement came with the added burden of managing data on the robot's end, which was handled by developing a custom program to interpret and act upon the data.

Simultaneously, we implemented other necessary software for handling data streaming and processing from the BioPoint devices. With rigorous research, planning, and trials, we created a Python program that established a seamless and efficient connection with the devices, streamed the IMU data, and processed it to extract purposeful parameters for robot control.

<figure>
  <img src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2023_11_27_ahmetem_diagram01.jpg?alt=original">
  <figcaption>
    <span class="caption">The Control Pipeline for the System</span>
  </figcaption>
</figure>

# The Robot Arm in Action

<figure style="float: none">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/cqzUbot4i0c?si=4Z1wLm5yeVKEAEF6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  <figcaption> Robot moving in harmony with the arm! </figcaption>
</figure>

# Conclusion
Looking ahead, our project sets the stage for exciting future endeavors and advancements in the realm of intuitive robotics. As we refine our system based on real-world feedback and continue to address challenges, the door opens to explore applications beyond painting. Future work can involve further enhancing the precision of our robotic system, incorporating machine learning algorithms for adaptive control, and expanding the compatibility with additional sensors for a richer user experience. We originally indented to implement haptics for this project which we sadly did not have time for, but this is also a possiblity in regards to future work.