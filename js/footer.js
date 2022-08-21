const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
        <img src="./image/clothing logo.jpg" class="logo" alt="" />
        <div class="footer-ul-container">
          <ul class="category">
            <li class="category-title">men</li>
            <li><a href="#" class="footer-link">t-shirts</a></li>
            <li><a href="#" class="footer-link">sweatshirts</a></li>
            <li><a href="#" class="footer-link">t-shirts</a></li>
            <li><a href="#" class="footer-link">jeans</a></li>
            <li><a href="#" class="footer-link">trousers</a></li>
            <li><a href="#" class="footer-link">shoes</a></li>
            <li><a href="#" class="footer-link">casuals</a></li>
            <li><a href="#" class="footer-link">formals</a></li>
            <li><a href="#" class="footer-link">sports</a></li>
            <li><a href="#" class="footer-link">watch</a></li>
          </ul>
          <ul class="category">
            <li class="category-title">women</li>
            <li><a href="#" class="footer-link">t-shirts</a></li>
            <li><a href="#" class="footer-link">sweatshirts</a></li>
            <li><a href="#" class="footer-link">t-shirts</a></li>
            <li><a href="#" class="footer-link">jeans</a></li>
            <li><a href="#" class="footer-link">trousers</a></li>
            <li><a href="#" class="footer-link">shoes</a></li>
            <li><a href="#" class="footer-link">casuals</a></li>
            <li><a href="#" class="footer-link">formals</a></li>
            <li><a href="#" class="footer-link">sports</a></li>
            <li><a href="#" class="footer-link">watch</a></li>
          </ul>
        </div>
      </div>
      <p class="footer-title">about company</p>
      <p class="info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ullam,
        laborum mollitia amet aspernatur iusto nulla sunt numquam ratione dicta
        illum. Accusamus praesentium exercitationem hic id blanditiis animi
        provident numquam aut fuga, adipisci, consequatur dicta eos iure aliquam
        nesciunt odio harum accusantium. Saepe explicabo exercitationem iste
        veritatis laboriosam excepturi laborum consequatur eius nobis maxime
        enim corporis qui et sequi incidunt dolore neque, vitae quis quae quia
        accusamus. Pariatur repudiandae, sed quibusdam at vero corrupti, libero
        quis est neque rerum culpa consectetur doloribus molestiae explicabo
        reprehenderit error iste illum dicta ipsum optio perferendis ratione
        tenetur animi. Eveniet consequatur nam repudiandae voluptatibus.
      </p>
      <p class="info">
        support emails - help@clothing.com, customersupport@clothing.com
      </p>
      <p class="info">telephone - +234 00 00 001, +234 00 00 002</p>
      <div class="footer-social-container">
        <div>
          <a href="#" class="social-link">terms & services</a>
          <a href="#" class="social-link">privacy page</a>
        </div>
        <div>
          <a href="#" class="social-link"
            >instagram <i class="uil uil-instagram"></i
          ></a>
          <a href="#" class="social-link"
            >facebook <i class="uil uil-facebook"></i
          ></a>
          <a href="#" class="social-link"
            >instagram <i class="uil uil-twitter"></i
          ></a>
        </div>
      </div>
      <p class="footer-credit">
        &copy; 2022 Clothing Best Apparels Online Store
      </p>
    
    `;
}

createFooter();