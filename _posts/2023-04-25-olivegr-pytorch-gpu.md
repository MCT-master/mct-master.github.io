---
layout: post
title: "Pytorch GPU Setup Guide"
date: 2023-04-25 20:11:00 +0200
categories: machine-learning
author: Oliver Getz
image: /assets/image/2023_04_25_olivegr_pytorch_gpu.jpg
excerpt: "Having trouble getting Pytorch to recognize your GPU? Try this!"
keywords: tutorial, machine learning, guide, pytorch, gpu, cuda, nvidia
---
Getting Pytorch to recognize my GPU is something I've spent more time on than should be necessary. Here are some things I learned while pulling my hair out.

<figure style="float: none">
   <img src="/assets/image/2023_04_25_olivegr_pytorch_gpu.jpg
" width="100%" height="100%" />
</figure>

# Setup

I'll be using conda for both environment and package management, and I'm setting up a Windows 10 PC. If you install Pytorch through your command line interface (CLI) like so...

<pre>
  <code>
    conda install torch
  </code>
</pre>

...a CPU compiled version of pytorch will be installed. A CPU is much slower than a GPU, and can speed up both training and inference tenfold, so wouldn't it be nice to be able to use a GPU instead? This is how:

1. Create a new environment with conda create -n "YOUR_ENVIRONMENT_NAME" python="DESIRED_PYTHON_VERSION"
    1. Pytorch requires python=3.7 and above.
2. Move into the new environment using conda activate "YOUR_ENVIRONMENT_NAME"
3. Go to the [Pytorch website](https://pytorch.org/get-started/locally/), enter your platform and package manager, and copy the resulting command.
    1. The conda command will look something like: conda install pytorch torchvision torchaudio pytorch-cuda=[CUDA_VERSION] -c pytorch -c nvidia
    2. The pip command will look something like: pip3 install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu[CUDA_VERSION]
4. Copy the command to your command line interface, and you should be good to go.

"Now hold up a minute", I hear you saying. "How do I know which CUDA_VERSION I need?" A web search will take you down a rabbit hole, so keep on reading and I will save you the trouble.

# CUDA Versions

CUDA has both a driver API and a runtime API, and their API versions can be entirely different. This CLI command:

<pre>
  <code>
    nvcc --version
  </code>
</pre>

will tell you the runtime API version, while

<pre>
  <code>
  nvidia-smi
  </code>
</pre>

will tell you the driver API version. This command points to the GPU driver, and it's this CUDA version you need when installing Pytorch. This means the original command from the Pytorch website works just fine for most cases. Just double check with the command above if you're running into issues.

# Troubleshooting

To check if Pytorch can find your GPU, use the following:

<pre>
  <code>
    import torch
    torch.cuda.is_available()
  </code>
</pre>

This will return True if a GPU is found, False otherwise. If your GPU cannot be found, it would be helpful to get some more feedback. Try sending something to the GPU. It will fail, and give you the reason:

<pre>
  <code>
    torch.zeros(1).cuda()
  </code>
</pre>

Should you want to start over because Pytorch is still not communicating with your GPU, you can remove your current environment and packages through your command line interface like so:

<pre>
  <code>
    conda activate base
    conda remove -n "YOUR_ENVIRONMENT_NAME" --all
  </code>
</pre>

You could start trying to downgrade one package and update another until you get the right configuration, but I think it's just easier to start from a clean slate, and I had to do so a few times.

# Additional notes

If any GPU is recognized, you can now get more info about them or even decide which tensors and operations should go on which GPU.

<pre>
  <code>
    torch.cuda.current_device()     # The ID of the current GPU.
    torch.cuda.get_device_name(id)  # The name of the specified GPU, where id is an integer.
    torch.cuda.device(id)           # The memory address of the specified GPU, where id is an integer.
    torch.cuda.device_count()       # The amount of GPUs that are accessible.
  </code>
</pre>

Hopefully, that will resolve some issues for you. Happy hacking!
