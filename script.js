

const DataItems = [
    {
        id: 1,
        title: "Guatemala",
        image:"img/land-guatemala.png",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit faucibus rhoncus taciti volutpat arcu sodales, dui malesuada sociosqu himenaeos gravida porttitor dictumst lectus hendrerit et fusce mollis, urna maecenas convallis tempus tortor aptent ridiculus ornare platea interdum a tellus. Semper ut congue rutrum gravida lacinia scelerisque conubia suspendisse tempus mus curabitur, facilisi nullam dictumst ornare ac nisl luctus faucibus curae felis. Est rhoncus nibh augue donec ligula natoque turpis, id eleifend ac curae varius vestibulum molestie, interdum mattis aliquam congue hac primis. Sociis ridiculus ligula nam aptent interdum ultricies fames facilisi urna, placerat rhoncus fusce habitant nec porta dictumst lobortis. Ac velit ante ligula et blandit rhoncus, metus duis dictum porttitor bibendum, proin vestibulum nam per integer. Nascetur lobortis venenatis primis pharetra neque est rhoncus dui, accumsan commodo sem aliquam tellus mauris vulputate lacinia, convallis nulla posuere hac senectus quis maecenas.",
        buttonText: "Show More"
    },
    {
        id: 2,
        title: "United states of America",
        image:"img/land-usa.png",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit faucibus rhoncus taciti volutpat arcu sodales, dui malesuada sociosqu himenaeos gravida porttitor dictumst lectus hendrerit et fusce mollis, urna maecenas convallis tempus tortor aptent ridiculus ornare platea interdum a tellus. Semper ut congue rutrum gravida lacinia scelerisque conubia suspendisse tempus mus curabitur, facilisi nullam dictumst ornare ac nisl luctus faucibus curae felis. Est rhoncus nibh augue donec ligula natoque turpis, id eleifend ac curae varius vestibulum molestie, interdum mattis aliquam congue hac primis. Sociis ridiculus ligula nam aptent interdum ultricies fames facilisi urna, placerat rhoncus fusce habitant nec porta dictumst lobortis. Ac velit ante ligula et blandit rhoncus, metus duis dictum porttitor bibendum, proin vestibulum nam per integer. Nascetur lobortis venenatis primis pharetra neque est rhoncus dui, accumsan commodo sem aliquam tellus mauris vulputate lacinia, convallis nulla posuere hac senectus quis maecenas.",
        buttonText: "Show More"
    },
    {
        id: 3,
        title: "Spain",
        image:"img/land-spain.png",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit faucibus rhoncus taciti volutpat arcu sodales, dui malesuada sociosqu himenaeos gravida porttitor dictumst lectus hendrerit et fusce mollis, urna maecenas convallis tempus tortor aptent ridiculus ornare platea interdum a tellus. Semper ut congue rutrum gravida lacinia scelerisque conubia suspendisse tempus mus curabitur, facilisi nullam dictumst ornare ac nisl luctus faucibus curae felis. Est rhoncus nibh augue donec ligula natoque turpis, id eleifend ac curae varius vestibulum molestie, interdum mattis aliquam congue hac primis. Sociis ridiculus ligula nam aptent interdum ultricies fames facilisi urna, placerat rhoncus fusce habitant nec porta dictumst lobortis. Ac velit ante ligula et blandit rhoncus, metus duis dictum porttitor bibendum, proin vestibulum nam per integer. Nascetur lobortis venenatis primis pharetra neque est rhoncus dui, accumsan commodo sem aliquam tellus mauris vulputate lacinia, convallis nulla posuere hac senectus quis maecenas.",
        buttonText: "Click me"
    },
    
]
 const divsProjects = document.querySelector(".divs-projects");

DataItems.map(item => {
    const divContent = document.createElement("div"); // Create a new div for each content
    divContent.className = "div-pro1"; // Apply the same style class as div-pro1

    const title = document.createElement("h2");
    title.textContent = item.title;

    const imageDiv = document.createElement("div");
    imageDiv.className = "div-image";
    const img = document.createElement('img')
    img.src = item.image;
    img.alt = item.title;
    imageDiv.appendChild(img)
   
    const description = document.createElement("p");
    const button = document.createElement("button");
    description.textContent = item.description;
    const midpointIndex = Math.ceil(item.description.length / 2);
    const initialDescription = item.description.substring(0, midpointIndex);
    
    let showFullDescription = false;
    button.addEventListener("click", () => {
        showFullDescription = !showFullDescription;
        if (showFullDescription) {
            description.textContent = item.description;
            button.textContent = "Show Less";
        }else {
            description.textContent = initialDescription;
            button.textContent = item.buttonText;
        } 
        
    });
    
    description.textContent = initialDescription;
    button.textContent = item.buttonText; // Use the buttonText property

    divContent.appendChild(title); // Append the title to the divContent
    divContent.appendChild(imageDiv); // Append the title to the divContent
    divContent.appendChild(description);   
    divContent.appendChild(button); // Append the button to the divContent
    divsProjects.appendChild(divContent); // Append the divContent to divsProjects
}); 

 const switchTo = (id) => {
    document.querySelector(`#${id}`).scrollIntoView({ block: 'center',  behavior: 'smooth' })
    
}