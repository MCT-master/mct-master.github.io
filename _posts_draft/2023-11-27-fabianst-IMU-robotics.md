---
layout: post
title: "Inntuitive Robotics"
date: 2023-11-27 07:00:00 +0200
categories: applied-projects
author: Emin Memis, Fabian Stordalen, Masoud Nikafs, Theo Griffin Halvorsen
image: /assets/image/2023_11_11_ahmetem_hyper_flute_review_01.jpg
keywords: imu, robotics, telerobotics
excerpt: "Controling a robot arm with medical sensors"
---

# Introduction
For our project we collaborated with [SiFi Labs](https://sifilabs.com/) to create and implement a system showcase how you can use their [BioPoint](https://sifilabs.com/biopoint/) biosensors to control a robotic arm. This was quite an ambitious and daring project. As this project was a collaboration between us MCT students and the informatics department we wanted to work on a project which could combine our different fields of expertise. The task we set out to do was to get the robot painting. We thought replicating the precise movements needed to paint is something was a fitting task for this project.

<figure>
  <img src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2023_11_23_fabianst_workinghard.jpg?alt=original"
  height="500"
  width="400">
  <figcaption>
    <span class="caption">Hard at work trying to figure out an optimal control interface</span>
  </figcaption>
</figure>

# Implementation 
<figure>
  <img src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2023_11_27_fabianst_robotcontrols.jpg?alt=original"
  height="200"
  width="1000">
  <figcaption>
    <span class="caption">The Control Pipeline for the System</span>
  </figcaption>
</figure>

## The BioPoint
The [BioPoint](https://sifilabs.com/biopoint/) is a powerful and lightweight device developed by SiFi labs featuring 6 different sensors capable of recording almost any biosignal imaginable. For our usecase we were mostly interested in utilizing the [Intertial Measurement Unit sensors (IMU)](https://en.wikipedia.org/wiki/Inertial_measurement_unit) on the device. Multiple of our team members have previous experience using these sensors for [artistic applications](https://mct-master.github.io/motion-capture/) so we thought it would be fitting for our project. 

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

... more to come here

<figure>
  <img src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2023_11_27_ahmetem_robotarm01.jpg?alt=original"
  height="500"
  width="400">
  <figcaption>
    <span class="caption">The UR10e Robot Arm</span>
  </figcaption>
</figure>

## What will the robot arm do?

With the powerful combination of SiFi Labs' BioPoint biosensors and the Universal Robots UR10e, we aimed to showcase the precision and versatility of our robotic system through a visually engaging task: painting 🎨. By harnessing the data from BioPoint's IMU sensors, we can translate the movements captured by the user into the movement of the robot arm.

The defined motion required for painting serves as a perfect proof of concept task for our project. The intricate and controlled movements involved in painting demand a high level of precision, making it an ideal scenario to test the interactivity aspect of our work. The BioPoint IMU sensors enable us to capture the nuanced motions of the user's hand, wrist, and arm, translating these inputs into coordinated actions for the robot arm.

## Problems and Frustrations
Embarking on the journey of creating a system that seamlessly integrates BioPoint biosensors with a robotic arm posed several challenges. Overcoming these hurdles was crucial for the success of our project, and it required a combination of creativity, collaboration, and perseverance.

### Establishing a Stable Connection with the BioPoints
One of the primary challenges we encountered was establishing an efficient and stable connection with the BioPoint sensor. The need for real-time data transmission added complexity to the task. To address this, we implemented parallel processing, where each thread utilized a separate command-line interface (CLI) instance provided by SiFi Labs. This approach allowed us to concurrently connect and control each BioPoint sensor device, ensuring a smoother and more responsive user experience.

### Data Cleaning and Processing
Obtaining meaningful movement data from the BioPoint sensor required data cleaning and processing. Dealing with multifaceted data and extracting accurate motion information was a big challenge for us. (MORE TO ADD HERE WHEN WE FINALIZE OUR DATA CLEANING APPROACH)

### Learning the Robot Arm Interface
Navigating and understanding the scripts used to control the Universal Robots UR10e presented a learning curve for our team. Familiarizing ourselves with the intricacies of the robot arm interface was essential for using the robot arm effectively and translating user movements into precise robotic actions. As we delved into this aspect of the project, we encountered challenges related to script integration, parameter tuning, and ensuring a seamless interaction between the user and the robotic system. The robotics team directed efforts towards mastering the robot arm interface to optimize the overall performance of our system.

# Navigating the Project: From Concept to Reality

Embarking on a three-month project, we knew time was of the essence, guiding us to keep our goals practical and achievable. Our chosen task, to get the robot to paint, offered a balanced challenge that aligned with our timeframe. To map out our journey, we utilized proven planning and project management tools.

### Work Breakdown Structure (WBS)
Our project's blueprint began with a Work Breakdown Structure (WBS), dividing it into six categories - costs, simulation software, the robot, Biopoint, real-time controls, and networking/latency optimization. While we initially considered simulation software, the robot's safety features encouraged us to dive into direct experimentation. This agile approach allowed us to adapt our focus as needed.

... ADD WBS HERE
<figure>
  <img src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2023_11_23_faibanst_wbs.png?alt=original"
  height="300"
  width="700">
  <figcaption>
    <span class="caption">Work Breakdown Structure</span>
  </figcaption>
</figure>

### Project Network Diagram (PND)

With the Project Network Diagram (PND), we visualized the sequential tasks, always having a clear next step in sight. This dynamic tool provided a bird's-eye view of our progress, ensuring we stayed on track and understood the needs and evolving aspects of our project.

... ADD PND HERE
<figure>
  <img src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2023_11_23_faibanst_pnd.png?alt=original"
  height="300"
  width="700">
  <figcaption>
    <span class="caption">Project Network Diagram</span>
  </figcaption>
</figure>

### Gantt Chart
The Gantt chart, a time-bound roadmap, helped us frame our project in weeks, even though some tasks proved more fluid than anticipated. While setting out with estimated timelines, the chart evolved as we delved into existing research, navigated literature, and utilized resources provided by our partner. From swiftly setting up the robot to the ongoing exploration of mappings, our timeline was a flexible guide, adapting to the dynamic nature of our work.

... ADD GANTT HERE
<figure>
  <img src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2023_11_23_faibanst_gantt.png?alt=original"
  height="300"
  width="700">
  <figcaption>
    <span class="caption">Gantt Chart</span>
  </figcaption>
</figure>

As we maneuvered through these visual aids, our project's evolution became a fascinating journey of discovery and adaptation. Stay tuned for more insights into the highs and lows of our hands-on exploration in the world of intuitive robotics.

# Solutions!

# Demonstration

# Conclusion
## Expanding Possibilities
Looking ahead, our project sets the stage for exciting future endeavors and advancements in the realm of intuitive robotics. As we refine our system based on real-world feedback and continue to address challenges, the door opens to explore applications beyond painting. Future work can involve further enhancing the precision of our robotic system, incorporating machine learning algorithms for adaptive control, and expanding the compatibility with additional sensors for a richer user experience.




