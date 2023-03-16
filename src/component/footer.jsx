import React from 'react'

function Footer() {
  return (
    <div>
<footer class="text-center text-lg-start mt-5 " >
  <section class="d-flex justify-content-center justify-content-lg-between p-4  " style={{backgroundColor:' rgba(0, 0, 0, 0.025)'}}>
    <div class="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>

    <div>
      <a href="" class="me-4 link-secondary">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="" class="me-4 link-secondary">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="" class="me-4 link-secondary">
        <i class="fab fa-google"></i>
      </a>
      <a href="" class="me-4 link-secondary">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="" class="me-4 link-secondary">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="" class="me-4 link-secondary">
        <i class="fab fa-github"></i>
      </a>
    </div>
  </section>


  <div class="text-center p-4 "style={{backgroundColor:' rgba(0, 0, 0, 0.025)'}} >
    © 2021 Copyright:
    <a class="text-reset fw-bold" href="https://mdbootstrap.com/">Sultan.com</a>
  </div>
</footer>
    </div>
  )
}

export default Footer
