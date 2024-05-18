function FashionWeekEvent(name, date, location, type, image, link, isPast) {
    this.name = name;
    this.date = date;
    this.location = location;
    this.type = type;
    this.image = image;
    this.link = link;
    this.isPast = isPast;

    this.formatDate = function() {
        return `${this.date.getDate()}-${this.date.getMonth() + 1}-${this.date.getFullYear()}`;
    };
}

const events = [
    new FashionWeekEvent(
      "Cape Town Fashion Week (Summer time 2025)",
      new Date(), 
      "Cape Town, Waterfall",
      "Runway Shows",
      "images/september.jpg",
      "event-page.html",
      false 
    ),

  ];
  console.log(events)

  function displayEvents(eventList) {
    const eventsSection = document.getElementById("day-2");
    eventList.forEach(event => {
      const eventElement = document.createElement("article");
      eventElement.classList.add("event"); 
  
      
    //   const eventContent = `
    //     <h4>${event.name}</h4>
    //     <p><b>Date:</b> ${event.formatDate()}</p>
    //     <p><b>Location:</b> ${event.location}</p>
    //     <p><b>Type:</b> ${event.type}</p>
    //     <a href="${event.link}">${event.isPast ? "See Highlights" : "View Details"}</a>
    //     <img src="${event.image}" alt="${event.name} image">
    //   `;
    const eventContent = `
        <div class="row schedule-item">
              <div class="col-md-2"><time>${event.formatDate()}</time></div>
              <div class="col-md-10">
                <div class="speaker">
                  <img src="${event.image}" alt="${event.name} image">
                </div>
                <h4>${event.name}</h4>
                <p><b>Location:</b> ${event.location}</p>
                <a href="${event.link}">${event.isPast ? "See Highlights" : "View Details"}</a>
              </div>
        </div>`
  
      eventElement.innerHTML = eventContent;
      eventsSection.appendChild(eventElement);
    });
  }
  
  displayEvents(events);
  