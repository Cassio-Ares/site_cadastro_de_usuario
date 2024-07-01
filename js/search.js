window.addEventListener("load", (event) => {
    event.preventDefault();
  let events;

  fetch("http://localhost:3000/events", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then((response) => {
    response.json().then((json) => {
      events = json;

      const sortEvent = events.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });

      document.getElementById('city').innerHTML = sortEvent[0].city
      document.getElementById('date').innerHTML = sortEvent[0].date


      filterSearchEvent()
    });
  });





  const filterSearchEvent = () =>{
    const search = location.search;

    const query = new URLSearchParams(search);

    const filter = query.get('search');

      const eventSearch = events.filter(element => element.city.toLowerCase().indexOf(filter.toLowerCase()) > -1 || element.date.toLowerCase().indexOf(filter.toLowerCase()) > -1)

    const eventMap = eventSearch.map(element => element.city + ' ' + element.date)


    const dateAlert = eventMap.join("\n")

    alert(dateAlert)
}

});
