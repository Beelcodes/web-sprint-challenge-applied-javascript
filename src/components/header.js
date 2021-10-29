const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const head = document.createElement("div");
  const dateContainer = document.createElement("span");
  const webTitle = document.createElement("h1");
  const temperature = document.createElement("span");
  head.classList.add("header");
  dateContainer.classList.add("date");
  temperature.classList.add("temp");
  dateContainer.textContent = date;
  webTitle.textContent = title;
  temperature.textContent = temp;

  head.appendChild(dateContainer);
  head.appendChild(webTitle);
  head.appendChild(temperature);

  return head;
};

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const headerFunction = document.querySelector(selector);
  headerFunction.append(Header("Lambda Times", "02-12-2021", "43 degrees"));
};

export { Header, headerAppender };
