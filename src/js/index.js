import 'swiper/swiper.scss'
import Swiper from 'swiper'
import 'swiper/modules/pagination.scss'
import { Pagination } from 'swiper/modules'
import '../scss/style.scss'
Swiper.use([Pagination])

document.addEventListener('DOMContentLoaded', function () {
  let menu = document.querySelector('.menu-mobile')
  let openButton = document.querySelector('.button--open')
  let closeButton = menu.querySelector('.button--close')

  openButton.addEventListener('click', function (evt) {
    evt.preventDefault()
    menu.classList.add('menu-mobile--show')
  })

  closeButton.addEventListener('click', function () {
    menu.classList.remove('menu-mobile--show')
  })

  document.addEventListener('click', function (evt) {
    if (
      menu.classList.contains('menu-mobile--show') &&
      !evt.target.closest('.menu-mobile') &&
      !evt.target.closest('.button--open')
    ) {
      menu.classList.remove('menu-mobile--show')
    }
  })

  document.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
      menu.classList.remove('menu-mobile--show')
    }
  })
})

document.addEventListener('DOMContentLoaded', function () {
  const modalCaller = document.querySelector('.modal--caller')
  const openCallerBtns = document.querySelectorAll('.button--caller')
  const closeCaller = modalCaller.querySelector('.modal__close')

  openCallerBtns.forEach(function (btn) {
    btn.addEventListener('click', function (evt) {
      evt.preventDefault()
      modalCaller.classList.add('modal--open')
    })
  })

  closeCaller.addEventListener('click', function () {
    modalCaller.classList.remove('modal--open')
  })

  document.addEventListener('click', function (evt) {
    if (
      modalCaller.classList.contains('modal--open') &&
      !evt.target.closest('.modal--caller') &&
      !evt.target.closest('.button--caller')
    ) {
      modalCaller.classList.remove('modal--open')
    }
  })

  document.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
      modalCaller.classList.remove('modal--open')
    }
  })
})

document.addEventListener('DOMContentLoaded', function () {
  const modalFeedback = document.querySelector('.modal--feedback')
  const openFeedbackBtns = document.querySelectorAll('.button--feedback')
  const closeFeedback = modalFeedback.querySelector('.modal__close')

  openFeedbackBtns.forEach(function (btn) {
    btn.addEventListener('click', function (evt) {
      evt.preventDefault()
      modalFeedback.classList.add('modal--open')
    })
  })

  closeFeedback.addEventListener('click', function () {
    modalFeedback.classList.remove('modal--open')
  })

  document.addEventListener('click', function (evt) {
    if (
      modalFeedback.classList.contains('modal--open') &&
      !evt.target.closest('.modal--feedback') &&
      !evt.target.closest('.button--feedback')
    ) {
      modalFeedback.classList.remove('modal--open')
    }
  })

  document.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
      modalFeedback.classList.remove('modal--open')
    }
  })
})

document.addEventListener('DOMContentLoaded', function () {
  let swiperInstance = null

  function initializeSwiper() {
    const isMobile = window.innerWidth < 768

    if (isMobile && !swiperInstance) {
      swiperInstance = new Swiper('.swiper', {
        speed: 800,
        loop: true,
        slidesPerView: 1.2,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        breakpoints: {
          0: {
            slidesPerView: 1
          },
          320: {
            slidesPerView: 1.3
          },
          350: {
            slidesPerView: 1.5
          },
          390: {
            slidesPerView: 1.7
          },
          540: {
            slidesPerView: 2.4
          },
          768: {
            enabled: false
          }
        }
      })
    } else if (
      !isMobile &&
      swiperInstance &&
      typeof swiperInstance.destroy === 'function'
    ) {
      swiperInstance.destroy(true, true)
      swiperInstance = null
    }
  }

  initializeSwiper()
  window.addEventListener('resize', initializeSwiper)

  document.querySelectorAll('.repair').forEach((repairBlock) => {
    const toggleButton = repairBlock.querySelector('.repair__toggle')
    const toggleIcon = toggleButton.querySelector('.repair__toggle-icon')
    const toggleText = toggleButton.querySelector('.repair__toggle-text')

    toggleButton.addEventListener('click', function () {
      repairBlock.classList.toggle('repair--expanded')

      if (repairBlock.classList.contains('repair--expanded')) {
        toggleText.textContent = 'Скрыть'
        toggleIcon.src = 'img/hide.svg'
      } else {
        toggleText.textContent = 'Показать все'
        toggleIcon.src = 'img/show-all.svg'
      }
    })
  })
})
