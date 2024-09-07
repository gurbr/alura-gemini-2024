function search() {
    let section = document.getElementById("results-search");

    let searchField = document.getElementById("search-field").value
      if (!searchField) {
        section.innerHTML = "<p>Please, type a Season or a Year.</p>"
        return
      }
    
    searchField = searchField.toLowerCase()

    let results = "";
    let title = "";
    let description = "";
    let tags = "";
  
    for (let info of data) {
      //title = info.title.toLowerCase()
      //description = info.description.toLowerCase()
        // DISCLAIMER: essas duas estão como comentários para que o usuário consiga pesquisar os títulos do Liverpool apenas através da temporada ou ano em que foram conquistados
      tags = info.tags.toLowerCase()
      if (title.includes(searchField) || description.includes(searchField) || tags.includes(searchField)) {
        results += `
        <div class="item-result">
          <h2>
            <a href="#" target="_blank">${info.title}</a>
          </h2>
          <img src=${info.image} alt="Team Celebrating">
            <p class="description-meta">${info.description}</p>
            <a href=${info.link} target="_blank"><b><i>Read more</b></i></a>
        </div>
      `;
      }

      info.title.includes(searchField)

    }

    if (!results) {
      results = "<p>Nothing found. Please, type a Season or a Year.</p>"
    }

    section.innerHTML = results;
  }