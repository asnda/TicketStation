function FashionWeekEvent(name, date, location, type, image, link, isPast) {
    this.name = name;
    this.date = date;
    this.location = location;
    this.type = type;
    this.image = image;
    this.link = link;
    this.isPast = isPast;

    this.formatDate = function() { 
        return `${this.date.getFullYear()}-${this.date.getMonth() + 1}-${this.date.getDate()}`;
        // return `${this.date.toString()}`;
    };
}

let events = [
    new FashionWeekEvent(
      "Cape Town Fashion Week (Summer time 2025)",
      new Date(2024, 11, 10), 
      "Cape Town, Waterfall",
      "Runway Shows",
      "images/september.jpg",
      "event-page.html",
      false 
    ),

    new FashionWeekEvent(
        "Woza Winter Fashion Week",
        new Date(2024, 5, 1),
        "Johannesburg, Shepstone Gardens",
        "Presentation",
        "images/winter.jpg",
        "event.html",
        false
    ),

    new FashionWeekEvent(
        "The Getaway Guide Fashion Week",
        new Date(2024, 7, 12),
        "Pretoria, Gautrain Station",
        "Street Runaway",
        "",
        "event.html",
        false
    ),

    new FashionWeekEvent(
        "Blooming Talent: Graduate Fashion Week",
        new Date(2024, 10, 26), 
        "Stellenbosch, Spier Wine Farm",
        "Emerging Designer Showcase",
        "images/graduate_fashion.jpg",
        "fashionweek.html",
        false
      ),

      new FashionWeekEvent(
        "Vintage Vibes: Retro Fashion Weekend",
        new Date(2024, 6, 29), 
        "Mbombela, Ilanga Mall",
        "Vintage Clothing & Accessories Market",
        "images/vintage_fashion.jpg",
        "fashionweek.html",
        false
      ),

      new FashionWeekEvent(
        "Plus is Power: Curvy Fashion Celebration",
        new Date(2024, 9, 7), 
        "Port Elizabeth, Boardwalk Casino",
        "Fashion for All Sizes",
        "images/curvy_fashion.jpg",
        "fashionweek.html",
        false
      ),

  ];

// sorting events by date 
events.sort((event1, event2) => event1.date - event2.date)


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
                <p><b>Type:</b> ${event.type}</p>
                <p><b>Location:</b> ${event.location}</p>
                <a href="${event.link}">${event.isPast ? "See Highlights" : "View Details"}</a>
              </div>
        </div>`
  
      eventElement.innerHTML = eventContent;
      eventsSection.appendChild(eventElement);
    });
  }
  
  displayEvents(events);
  