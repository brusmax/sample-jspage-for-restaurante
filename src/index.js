import 'bootstrap';
import '/src/scss/app.scss';

// Create an element
var create_element = function(type, classes, text ){
  // run only if all params are set
  if( type.length == 0 || classes.length == 0 || text.length == 0)
    return false;
  // run only for this elements
  if(!['a', 'div', 'p', 'header', 'footer'].includes(type))
    return false;
  // Create element and attributes
  let this_element = document.createElement(type);
  
  if(typeof classes == "object"){
    classes.forEach(myclass => {
      this_element.classList.add(myclass);
    });

  }else{
    this_element.classList.add(classes);
  }
  
  this_element.innerText = text;
  return this_element;
}

var about_element = function(){
  var element = document.createElement('div');
  element.classList.add('cover-container', 'd-flex', 'w-100', 'h-100', 'p-3', 'mx-auto', 'flex-column', 'about', 'active');
  element.setAttribute('id', 'about');
  var title_container = document.createElement('div');
  title_container.classList.add('bg-h1');
  var title = document.createElement('h1');
  title.textContent = 'Italian Pizza';
  
  var info_container = document.createElement('div');
  info_container.classList.add('info');

  var info_p = document.createElement('p')
  info_p.classList.add('lead')
  info_p.textContent = 'Our cuisine is the tradition of more than 4 generations, feeding demanding palates with its excellent food from the northern Italian region.';
  
  var info_p2 = document.createElement('p');
  info_p2.classList.add('lead2');


  info_container.appendChild(info_p);
  info_container.appendChild(info_p2);

  title_container.appendChild(title);
  element.appendChild(title_container);
  element.appendChild(info_container);
  return element;
}

var element_menu = function(){
  let menu_elements = [
    {
      title: 'Margherita',
      content: '<b>Pizza Margherita</b> (more commonly known in English as Margherita pizza, literally "daisy pizza") is a typical Neapolitan pizza, made with San Marzano tomatoes, mozzarella cheese, fresh basil, salt and extra-virgin olive oil.',
      img_src: 'images/margherita.jpeg',
      
    },
    {
      title: 'Marinara',
      content: '<b>Pizza marinara</b>, seasoned with only tomato sauce, extra virgin olive oil, oregano and garlic. The name has little to do with the marinara sauce, besides sharing a similar origin. It is supposedly the most ancient tomato-topped pizza.',
      img_src: 'images/marinara.jpeg',
      
    },
    {
      title: 'Capricciosa',
      content: '<b> Pizza capricciosa</b>  prepared with mozzarella cheese, Italian baked ham, mushroom, artichoke and tomato.',
      img_src: 'images/capricciosa.jpeg',
      
    }
  ];
  let element = document.createElement('div');
  element.classList.add('container','menu', 'hide');
  element.setAttribute('id', 'menu');
  
  let element_row = document.createElement('div');
  element_row.classList.add('row');

  var element_title = document.createElement('h2');
  element_title.classList.add('menu-title');
  element_title.textContent = "Menu";

  menu_elements.forEach( (my_menu) =>{
    var menu_element = document.createElement('div')
    menu_element.classList.add('col-lg-4');
    
    let menu_img = document.createElement('img')
    menu_img.classList.add('rounded-circle');
    menu_img.setAttribute('src', my_menu.img_src);
    menu_img.setAttribute('alt', my_menu.title)
    menu_img.setAttribute('width', '140');
    menu_img.setAttribute('height', '140');

    let title = document.createElement('h3');
    title.textContent = my_menu.title;
    let content = document.createElement('p');
    content.innerHTML = my_menu.content;

    menu_element.appendChild(menu_img);
    menu_element.appendChild(title);
    menu_element.appendChild(content);
    element_row.appendChild(menu_element);
  });

  element.appendChild(element_row)
  element_row.prepend(element_title);
  
  return element;
}

var element_contact = function(){
  let contact_elements = [
    {
      title: 'Phone',
      content: '+52 1 333 333 333'
    },
    {
      title: 'Address',
      content: 'My address street #1203, México'
    },
    {
      title: 'Email',
      content: 'pizza@sample.com'
    }
  ];

  let element_container = document.createElement('div');
  element_container.classList.add('container', 'contact', 'hide');
  element_container.setAttribute('id', 'contact');
  let row1 = document.createElement('div');
  row1.classList.add('row');
  let title = document.createElement('h2')
  title.classList.add('menu-title');
  title.textContent = 'Contact'

  element_container.appendChild(title);

  contact_elements.forEach( (elem) => {
    var box_element = document.createElement('div');
    box_element.classList.add('col-lg-3','contact-box');
    let title = document.createElement('h3');
    title.textContent = elem.title;
    let p = document.createElement('p');
    p.textContent = elem.content;
    box_element.appendChild(title);
    box_element.appendChild(p);
    row1.appendChild(box_element);
  });
  element_container.appendChild(row1);

  let row2 = document.createElement('div');
  row2.classList.add('row');
  let element_whatsapp = document.createElement('div');
  element_whatsapp.classList.add('col-lg-4');
  let p_wa = document.createElement('p');
  let wa_img = document.createElement('img');
  wa_img.setAttribute('src', 'images/whatsappbtn.png');
  wa_img.setAttribute('width', '300');

  p_wa.appendChild(wa_img);
  element_whatsapp.appendChild(p_wa)
  row2.appendChild(element_whatsapp)

  let p_map = document.createElement('div');
  p_map.classList.add('col-lg-8');
  let map_img = document.createElement('img');
  map_img.setAttribute('src', 'images/maps.jpeg');
  map_img.setAttribute('alt', 'Maps');
  map_img.setAttribute('class', '');

  p_map.appendChild(map_img);
  row2.appendChild(p_map);

  element_container.appendChild(row2)
  return element_container;
}

var element_footer = function(){
 var element = document.createElement('footer')
 element.classList.add('container');
 let p = document.createElement('p');
 p.innerHTML = '&copy; By <a href="https://brusmax.com">Brusmax</a>';
 element.appendChild(p);
 return element;
}

function clear_conainer(){
  let element = document.getElementById('content');
  element.innerHTML = "";
}

// TITLE
document.title = "Pizza Italiana Demo";

// Creating header element container for navbar
const header = document.createElement('header');
// Creating nav element
const navbar = document.createElement('nav');
// adding classes name for styling
navbar.classList.add("navbar", "navbar-expand-md", "navbar-dark", "fixed-top","bg-danger", "justify-content-md-center");

// MENU
const link_about = create_element('a', ['navbar-brand', 'about-a'], 'About');
link_about.setAttribute('data-section', 'about');
const link_menu = create_element('a', ['navbar-brand', 'menu-a'], 'Menu');
link_menu.setAttribute('data-section', 'menu');
const link_contact = create_element('a', ['navbar-brand', 'contact-a'], 'Contact');
link_contact.setAttribute('data-section', 'contact');
navbar.appendChild(link_about);
navbar.appendChild(link_menu);
navbar.appendChild(link_contact);

// MAIN CONTENT
var content = document.getElementById("content");

// NAVBAR
header.appendChild(navbar);
content.appendChild(header);

['about-a','menu-a','contact-a'].forEach( (section) => {
  var link_element = document.getElementsByClassName(section);
  link_element[0].addEventListener('click', function(){
  var section = link_element[0].getAttribute('data-section');
  // Clear main container;
  content.innerHTML = "";
  if(section == 'about'){
    var about = about_element();
    content.appendChild(about);
  }else if(section == 'menu'){
    var menu = element_menu();
    content.appendChild(menu);
  }else if(section == 'contact'){
    var contact = element_contact();
    content.appendChild(contact);
  }
  const footer = element_footer();
  header.appendChild(navbar);
  content.appendChild(header);
  content.appendChild(footer);
  });

});

// ABOUT
const about = about_element();
content.prepend(about);

// FOOTER
const footer = element_footer();
content.appendChild(footer);