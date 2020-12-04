/***********************************Fetch ***************************************************************************/
customAjax = (url, method, data) => {
  return new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    request.responseType = 'json';
    request.onreadystatechange = function() {
      if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.status));
        }
      }
    };
    request.onerror = function() {
      reject(Error("Network Error"));
    };
    request.open(method, url, true);
    request.send(data);
  });
}
customAjax('https://restcountries.eu/rest/v2/all', 'GET')
.then((result) => {
  data(result);
  console.log(result);
})
  .catch((error) =>
    console.error(error));



    /***********************************DOM HTML ***************************************************************************/
    
    function list(country)
    {
        const card = document.createElement('div','card');
        card.classList.add('card')
        card.style.width = '25rem';
        card.style.display = 'inline-block';
        card.style.marginRight='15px';

          const heading = document.createElement('h5','card-title');
          card.classList.add('card-title')
            heading.innerHTML = country.name;

            const image = document.createElement("img", "card-img-top");
            image.classList.add('card-img-top')
                image.src = country.flag;
                image.alt = country.name;

            const cardBody = document.createElement('div','cardBody');
            card.classList.add('card-Body')

              const capital = document.createElement('p','capital');
               capital.innerHTML = 'Capital:';

                const capitalname = document.createElement('span');
                 capitalname.innerHTML = country.capital;
                 capitalname.style.backgroundColor = 'darkgreen';
                 capitalname.style.color= 'white';
                 capitalname.style.borderRadius='5px'
                 capitalname.style.display = 'inline-block';
                 capitalname.style.padding = '5px 6px'
                 capitalname.style.margin = '1px 2px'
                capital.append(capitalname);

                const countrycode = document.createElement('p');
                countrycode.innerHTML = 'country Code: ';

                const countrycodename = document.createElement('span');
                countrycodename.innerHTML =  country.alpha2Code, country.alpha3Code;
                countrycode.append(countrycodename);



                  const region = document.createElement('p');
                  region.innerHTML = 'Region: ';
                  const regionname = document.createElement('span');
                    regionname.innerHTML = country.region;
                    region.append(regionname);

                    const latilong = document.createElement('p');
                    latilong.innerHTML = "LatLong: ";
                    const latlongdet = document.createElement('span');
                    latlongdet.innerHTML = country.latlng;
                    latilong.append(latlongdet);
     cardBody.append(capital,countrycode, region, latilong);
     card.append(heading, image, cardBody);
    return card
    }

    function data(countries) {
      const container = document.createElement("div", "container-fluid");
      container.classList.add('container-fluid');
        const row = document.createElement("div", "row");
        row.classList.add('row');
          const column = document.createElement("div", "col-12 countries");
          column.classList.add('col-12');
    
          countries.forEach((country) => {
            const card = list(country);
            column.append(card);
          });
    
        row.append(column); 
        container.append(row);
      document.body.append(container);
    }
    
    
   