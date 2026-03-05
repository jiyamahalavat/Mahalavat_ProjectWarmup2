function describeRoom(roomName) {
    if (roomName === "entrance") {
        return "The entrance smells of dust and something faintly metallic.";
    } else if (roomName === "kitchen") {
        return "The kitchen counters are coated in mold, and the sink drips slowly.";
    } else if (roomName === "upstairs") {
        return "The upstairs hallway creaks beneath your feet.";
    } else {
        return "This part of the house feels unfamiliar and unsettling.";
    }
}

const exampleNode = {
    image: "images/entrance.jpg",
    text: "You stand at the entrance of the abandoned house. The door's paint is coming off.",
    choices: [
        "Step inside",
        "Walk around the house"
    ]
};



const storyNodes = [
    {
        image: "images/entrance.jpg",
        text: "You stand at the entrance of the abandoned house. The door hangs crooked on its hinges.",
        choices: ["Come through the entrance", "Leave the property"]
    },
    {
        image: "images/hallway.jpg",
        text: "A long hallway stretches ahead. The wallpaper peels in long strips.",
        choices: ["Open the kitchen door", "Climb the stairs"]
    },
    {
        image: "images/kitchen.jpg",
        text: "The kitchen smells of mildew. Rusted pots sit abandoned on the stove.",
        choices: ["Search the cabinets", "Return to the hallway"]
    },
    {
        image: "images/upstairs.jpg",
        text: "At the top of the stairs, shadows gather near a cracked bedroom door.",
        choices: ["Enter the bedroom", "Go back downstairs"]
    }
];

console.log(storyNodes);

function displayNode(index) {
    const node = storyNodes[index];

    const imageElement = document.getElementById("scene-image");
    const textElement = document.getElementById("scene-text");

    imageElement.src = node.image;
    textElement.textContent = node.text;
}
//making first scene appear, i was initially having trouble with this but figured it out later :)
displayNode(0);
