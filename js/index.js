console.log("Your index.js file is loaded correctly! WooHoo!");






 $('a').on('click', function (event) {
  event.preventDefault()

  $('html, body').animate(
    {
      scrollTop: $($(this).attr('href')).offset().top,
    },
    600,
    'linear'
  )
})
