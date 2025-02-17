const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The html tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const divHeader = document.createElement('div');
  divHeader.classList.add('header');

  const divh1Title = document.createElement('h1');
  divh1Title.textContent = `${title}`;
  divHeader.appendChild(divh1Title);

  const divSpanDate = document.createElement('span');
  divSpanDate.classList.add('date');
  divSpanDate.textContent = `${date}`;
  divHeader.appendChild(divSpanDate);

  const divSpanTemp = document.createElement('span');
  divSpanTemp.classList.add('temp');
  divSpanTemp.textContent = `${temp}`;
  divHeader.appendChild(divSpanTemp);

  return divHeader;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  // HINT: querySelector can take in a string (ie querySelector("#wrapper")) 
  // but it can also take in a variable (ie querySelector(selector))
  // We are taking care of passing in the correct selector on line 16,
  // so all that you need to do is pass it into the querySelector method
  // for the tests to work!
  const headerWrapper = document.querySelector(selector);
  const headerComponent = Header("Lambda Times", "2/10/2022", "70°");
  headerWrapper.appendChild(headerComponent);
};

export { Header, headerAppender }
