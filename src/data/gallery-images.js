import interacoustics_main_desktop_gallery from '../images/interacoustics_main_desktop_gallery.png'
import interacoustics_main_desktop from '../images/interacoustics_main_desktop.png';
import interacoustics_filter_desktop from '../images/interacoustics_filter_desktop.png';
import interacoustics_search_desktop from '../images/interacoustics_search_desktop.png';
import interacoustics_search_mobile from '../images/interacoustics_search_mobile.png';
import interacoustics_slider_mobile_1 from '../images/interacoustics_slider_mobile_1.png';
import interacoustics_slider_mobile_2 from '../images/interacoustics_slider_mobile_2.png';
import medical_home_desktop from '../images/medical_home_desktop.PNG';
import medical_full from '../images/medical_full.png';
import medical_menu_mobile from '../images/medical_menu_mobile.png';
import taskgazelle_1 from '../images/taskgazelle_1.png';
import taskgazelle_2 from '../images/taskgazelle_2.png';

const galleryImages = [
  {
    imageSrc: interacoustics_main_desktop_gallery,
    text: "Interacoustics brand for Demant Group",
    header: "Work for Interacoustics brand under Demant Group",
    overlayText: "A completely new site coded in React (not yet live). Sole developer for much of the project. Coded a filter function, most of the search function and many other components. Ensured the site was fully responsive",
    overlay: {
      img: interacoustics_filter_desktop,
      class: "large"
    },
    overlay2: {
      img: interacoustics_search_desktop,
      class: "medium"
    },
    overlay3: {
      img: interacoustics_search_mobile,
      class: "small"
    },
    overlay4: {
      img: interacoustics_slider_mobile_1,
      class: "small"
    },
    overlay5: {
      img: interacoustics_slider_mobile_2,
      class: "small"
    },
  },

  {
    imageSrc: medical_home_desktop,
    text: "Oticon Medical brand for Demant Group",
    header: "Work for Oticon Medical brand under Demant Group",
    link: "oticonmedical.com",
    href: "https://www.oticonmedical.com/",
    overlayText: "Primary developer, responsible for upkeep and creation of new components in React. See more at oticonmedical.com",
    overlay: {
      img: medical_full,
      class: "large"
    },
    overlay2: {
      img: medical_menu_mobile,
      class: "small"
    }
  }
]

export default galleryImages;