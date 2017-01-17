# Background
This project takes a machine learning approach to produce an intelligent agent that can locate a spot in two dimensional space, without being explicitly programmed to do so. 

# Objective
The goal is to demonstrate that a single layer artifical neural network is capable of "learning" the simple equation of X = Y, where X represents a set point in a two dimensional space, and Y represents the network's desired output. This is achievable for such a simple relation using no hidden layers thanks to the principle of connectionism. Two input nodes represent the X and Y co-ordinates of the target point, and two ouput nodes represent the X and Y co-ordinates of the network's estimate as to where that target point is. Connecting the two input nodes to the two output nodes produces four connections, where the weights that are applied to each connection dictate the outcome of the network.

# Motivation
Video games. Programming complex and effective artifical intelligence into video games is notoriously difficult, costly, and time consuming. With modern day hardware becoming more powerful at a faster rate than ever, and cloud technology becoming increasingly accessible and affordable, there is great potential for evolutionary artifical intelligence in video games to not only provide highly individualized experiences, but also to cut development time on and improve the effectiveness of smaller features like "follow the player" or "shoot in their general direction". Further, with supervised learning constructs such as neural networks, the players themselves could provide the data sets just by playing the game, potentially providing millions of data points for the network to learn from at little to no extra cost from the developer's perspective.

# Further work
Building on this, next steps could include more dynamic environments with multiple moving pieces being driven by the network in response to one or many inputs, whether those are random or human controlled.