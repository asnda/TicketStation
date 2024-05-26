function FashionWeekEvent(name, slogan, description, date, location, type, image, link, isPast) {
    this.name = name;
    this.slogan = slogan;
    this.description = description;
    this.date = date;
    this.location = location;
    this.type = type;
    this.image = image;
    this.link = link;
    this.isPast = isPast;
  
    this.formatDate = function () {
      return `${this.date.getFullYear()}-${this.date.getMonth() + 1}-${this.date.getDate()}`;
    };
  }
  
  let events = [
    new FashionWeekEvent(
      "Cape Town Fashion Week (Summer time 2024)",
      "",
      "",
      new Date(2024, 11, 10),
      "Cape Town, Waterfall",
      "Runway Shows",
      "images/september.jpg",
      "event-page.html",
      false
    ),
  
    new FashionWeekEvent(
      "Woza Winter Fashion Week",
      "",
      "",
      new Date(2024, 5, 1),
      "Johannesburg, Shepstone Gardens",
      "Presentation",
      "images/winter.jpg",
      "event.html",
      false
    ),
  
    new FashionWeekEvent(
      "The Getaway Guide Fashion Week",
      "",
      "",
      new Date(2024, 7, 12),
      "Pretoria, Gautrain Station",
      "Street Runaway",
      "images/streetwear.jpg",
      "event.html",
      false
    ),
  
    new FashionWeekEvent(
      "Blooming Talent: Graduate Fashion Week",
      "",
      "",
      new Date(2024, 10, 26),
      "Stellenbosch, Spier Wine Farm",
      "Emerging Designer Showcase",
      "images/graduate.jpg",
      "fashionweek.html",
      false
    ),
  
    new FashionWeekEvent(
      "Vintage Vibes: Retro Fashion Weekend",
      "",
      "",
      new Date(2024, 6, 29),
      "Mbombela, Ilanga Mall",
      "Vintage Clothing & Accessories Market",
      "images/vintage Men.jpg",
      "fashionweek.html",
      false
    ),
  
    new FashionWeekEvent(
      "Jan Fashion Week Recap",
      "Sizzling Summer Styles",
      "From flowy silhouettes to vibrant colors, discover the inspiration for your next summer wardrobe.",
      new Date(2024, 0, 17),
      "Port Elizabeth, Boardwalk Casino",
      "Fashion for All Sizes",
      "images/september.jpg",
      "fashionweek.html",
      true
    ),
  
    new FashionWeekEvent(
      "Falling with Creativity",
      "Leaves are Falling, just like our designs",
      "This vibrant event showcased the latest collections bursting with color and fresh styles perfect for the upcoming chilly months.",
      new Date(2024, 3, 7),
      "Port Elizabeth, Boardwalk Casino",
      "Fashion for All Sizes",
      "images/spring.jpg",
      "fashionweek.html",
      true
    ),
  
    new FashionWeekEvent(
      "A Touch of Love and Luxury",
      "Love It or Leave It",
      "From flowy silhouettes to vibrant colors, discover the inspiration for your next summer wardrobe.",
      new Date(2024, 1, 9),
      "Port Elizabeth, Boardwalk Casino",
      "Fashion for All Sizes",
      "images/feb.jpg",
      "fashionweek.html",
      true
    ),
  
    new FashionWeekEvent(
      "Grand Opening",
      "A Night of Elegance",
      "Celebrate the launch of the new season with dazzling displays and exclusive offers.",
      new Date(2024, 4, 31),
      "Grand Fashion Hall",
      "Red Carpet",
      "images/Elegance.jpg",
      "grand_opening.html",
      true
    ),
  
    new FashionWeekEvent(
      "Swimwear Extravaganza",
      "Dive into the Latest Swimwear Trends",
      "See the hottest styles for the beach and pool from top designers.",
      new Date(2024, 0, 15),
      "Poolside Pavilion",
      "Swimwear",
      "images/swimwear (2).jpg",
      "swimwear.html",
      true
    ),
  
    new FashionWeekEvent(
      "Plus is Power: Curvy Fashion Celebration",
      "",
      "",
      new Date(2024, 9, 7),
      "Port Elizabeth, Boardwalk Casino",
      "Fashion for All Sizes",
      "images/plus size.jpg",
      "fashionweek.html",
      false
    ),
  
  ];
  
  // sorting events by date 
  events.sort((event1, event2) => event1.date - event2.date)
  
  //displays content to page 
  function displayEvents(eventList, divName, isPastPage) {
    const eventsSection = document.getElementById(divName);
    eventList.forEach(event => {
      if (isPastPage !== event.isPast) {
        return
      }
      const eventElement = document.createElement("article");
      eventElement.classList.add("event");
      const eventContent = event.isPast ? displayPastEvent(event) : displayFutureEvent(event);
  
      eventElement.innerHTML = eventContent;
      eventsSection.appendChild(eventElement);
    });
  }
  
  // builds structure for past events 
  function displayPastEvent(event) {
    return `
      <div class="row schedule-item">
            <div class="col-md-2"><time>${event.formatDate()}</time></div>
            <div class="col-md-10">
              <div class="speaker">
                <img src="${event.image}" alt="${event.name} image">
              </div>
              <h4>${event.name}: <span>${event.slogan}</span></h4>
              <p>${event.description}</p>
            </div>
      </div>`
  }
  
  // builds structure for future events
  function displayFutureEvent(event) {
    return `
      <div class="row schedule-item">
            <div class="col-md-2"><time>${event.formatDate()}</time></div>
            <div class="col-md-10">
              <div class="speaker">
                <img src="${event.image}" alt="${event.name} image">
              </div>
              <h4>${event.name}</h4>
              <p><b>Type:</b> ${event.type}</p>
              <p><b>Location:</b> ${event.location}</p>
              <a href="${event.link}">View Details</a>
            </div>
      </div>`
  }
  
  displayEvents(events, "past-events", true);
  displayEvents(events, "future-events", false);
  
  // ticket card 
  function TicketCategory(name, price, description, features) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.features = features; // Array of feature strings
  }
  
  const ticketInfo = {
    categories: [
      new TicketCategory(
        "Standard Access",
        350,
        "Regular seating with refreshments.",
        [
          "Regular Seating",
          "Refreshments",
          "**Not included:**",
          "Pre-show entertainment",
          "Meet-and-greet opportunities with designers",
          "Access to a VIP lounge",
          "After Party",
        ]
      ),
      new TicketCategory(
        "Pro Access",
        500,
        "Regular seating with refreshments and pre-show entertainment.",
        [
          "Regular Seating",
          "Refreshments",
          "Pre-show entertainment",
          "**Not included:**",
          "Meet-and-greet opportunities with designers",
          "Access to a VIP lounge",
          "After Party",
        ]
      ),
      new TicketCategory(
        "Premium Access",
        800,
        "Preferred seating, refreshments, pre-show entertainment, meet-and-greet, VIP lounge access, and after party.",
        [
          "Preferred seating with a closer view",
          "Refreshments",
          "Pre-show entertainment",
          "Meet-and-greet opportunities with designers",
          "Access to a VIP lounge",
          "After Party",
        ]
      ),
    ]
  };
  
  const ticketContainer = document.getElementById('ticket-container');
  
  function createTicketCard(category) {
    const card = document.createElement('div');
    card.classList.add('col-lg-4', 'mb-5', 'mb-lg-0');
    card.innerHTML = `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title text-muted text-uppercase text-center">${category.name}</h5>
          <h6 class="card-price text-center">R${category.price}</h6>
          <hr>
          <ul class="fa-ul">
            </ul>
          <hr>
          <div class="text-center">
            <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#buy-ticket-modal" data-ticket-type=">Buy Now</button>
          </div>
        </div>
      </div>
    `;
  
  //   const featureList = card.querySelector('ul.fa-ul');
  //   for (const feature of category.features) {
  //     const listItem = document.createElement('li');
  //     listItem.classList.add(feature.startsWith('**Not included:**') ? 'text-muted' : '');
  //     listItem.innerHTML = `<span class="fa-li"><i class="fa fa-check"></i></span> ${feature}`;
  //     featureList.appendChild(listItem);
  //   }
  
  //   const ticketCategories = ticketInfo.categories;
  //   for (const category of ticketCategories) {
  //     const ticketCard = createTicketCard(category);
  //     ticketContainer.appendChild(ticketCard);
  //   }
  
  //   return card;
  }