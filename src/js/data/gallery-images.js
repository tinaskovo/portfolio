
import interacoustics_logo from '../../assets/images/interacoustics_logo.png'
import interacoustics_filter_desktop from '../../assets/images/interacoustics_filter_desktop.png'
import interacoustics_search_desktop from '../../assets/images/interacoustics_search_desktop.png';
import interacoustics_search_mobile from '../../assets/images/interacoustics_search_mobile.png';
import interacoustics_slider_mobile_1 from '../../assets/images/interacoustics_slider_mobile_1.png';
import interacoustics_slider_mobile_2 from '../../assets/images/interacoustics_slider_mobile_2.png';

import medical_logo from '../../assets/images/medical_logo.png'
import medical_full from '../../assets/images/medical_full.png';
import medical_menu_mobile from '../../assets/images/medical_menu_mobile.png';

import demant_logo from '../../assets/images/demant_logo.png'
import demant from '../../assets/images/demant.png'

import Prodition_logo from '../../assets/images/Prodition_logo.png'
import prodition from '../../assets/images/prodition.png'

import shd_logo from '../../assets/images/shd_logo.PNG'
import shd_1 from '../../assets/images/shd_1.png'
import shd_2 from '../../assets/images/shd_2.png'

import depo_logo from '../../assets/images/depo_logo.png';
import delivery_portal_1 from '../../assets/images/delivery_portal_1.png';
import delivery_portal from '../../assets/images/delivery_portal.png'

const galleryImages = [
  {
    imageSrc: interacoustics_logo,
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
    imageSrc: medical_logo,
    text: "Oticon Medical brand for Demant Group",
    header: "Work for Oticon Medical",
    link: "oticonmedical.com",
    href: "https://www.oticonmedical.com/",
    overlayText: "Primary developer, responsible for upkeep and creation of new components in React. See more at",
    overlay: {
      img: medical_full,
      class: "large"
    },
    overlay2: {
      img: medical_menu_mobile,
      class: "small"
    }
  },

  {
    imageSrc: demant_logo,
    text: "Demant Group",
    header: "Work for Demant Group",
    link: "demant.com",
    href: "https://www.demant.com/",
    overlayText: "Part of a team responsible for upkeep and implementation of new features for ",
    overlay: {
      img: demant,
      class: "large"
    }
  },

  {
    imageSrc: Prodition_logo,
    text: "Prodition",
    header: "New mini site for Prodition.fr",
    overlayText: "Responsible for creating a new, responsive site for prodition.fr (not yet live)",
    overlay: {
      img: prodition,
      class: "large"
    }
  },

  {
    imageSrc: shd_logo,
    text: "Swiss Hearing Day",
    header: "New site for Swiss Hearing Day",
    link: "swisshearingday.ch",
    href: "https://www.swisshearingday.ch/",
    overlayText: "Created a new, responsible site for ",
    overlay: {
      img: shd_1,
      class: "large"
    },
    overlay2: {
      img: shd_2,
      class: "large"
    }
  },

  {
    imageSrc: depo_logo,
    text: "Delivery Portal",
    header: "Delivery Portal Content Management System",
    overlayText: "Part of a team developing a custom CMS for Demant Group",
    overlay: {
      img: delivery_portal_1,
      class: "large"
    },
    overlay2: {
      img: delivery_portal,
      class: "large"
    }
  }
]

export default galleryImages;