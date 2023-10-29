import './App.css'
import Header from './components/Header';
import Body from './components/Body'

function App() {


  return (

    <div>
      <Header />
      <div className="main-layout">

        <div className="loader_bg">
          <div className="loader"><img src="images/loading.gif" alt="#" /></div>
        </div>


        <header>

          <div className="header">
            <div className="header_top d_none1">
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <ul className="conta_icon ">
                      <li><a href="#"><img src="images/call.png" alt="#" />Call us: 0126 - 922 - 0162</a> </li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <ul className="social_icon">
                      <li> <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                      </li>
                      <li> <a href="#"><i className="fa fa-twitter"></i></a></li>
                      <li> <a href="#"> <i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                      <li> <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i>
                      </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <div className="se_fonr1">
                      <form action="#" >
                        <div className="select-box">
                          <label for="select-box1" className="label select-box1"><span className="label-desc">English</span> </label>
                          <select id="select-box1" className="select">
                            <option value="Choice 1">English</option>
                            <option value="Choice 1">Falkla</option>
                            <option value="Choice 2">Germa</option>
                            <option value="Choice 3">Neverl</option>
                          </select>
                        </div>
                      </form>
                      <span className="time_o"> Open hour: 8.00 - 18.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="header_midil">
              <div className="container">
                <div className="row d_flex">
                  <div className="col-md-4">
                    <ul className="conta_icon d_none1">
                      <li><a href="#"><img src="images/email.png" alt="#" /> demo@gmail.com</a> </li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <a className="logo" href="#"><img src="images/logo.png" alt="#" /></a>
                  </div>
                  <div className="col-md-4">
                    <ul className="right_icon d_none1">
                      <li><a href="#"><img src="images/shopping.png" alt="#" /></a> </li>
                      <a href="#" className="order">Order Now</a>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="header_bottom">
              <div className="container">
                <div className="row">
                  <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                    <nav className="navigation navbar navbar-expand-md navbar-dark ">
                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarsExample04">
                        <ul className="navbar-nav mr-auto">
                          <li className="nav-item active">
                            <a className="nav-link" href="index.html">Home</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="about.html">About</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="products.html">Products</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="fashion.html">Fashion</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="news.html">News</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="contact.html">Contact Us</a>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                  <div className="col-md-4">
                    <div className="search">
                      <form action="/action_page.php">
                        <input className="form_sea" type="text" placeholder="Search" name="search" />
                        <button type="submit" className="seach_icon"><i className="fa fa-search"></i></button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>



        <section className="banner_main">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="text-bg">
                  <h1> <span className="blodark" /> Romofyi</h1>
                  <p>A huge fashion collection for ever </p>
                  <a className="read_more" href="#">Shop now</a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="ban_img">
                  <figure><img src="images/ban_img.png" alt="#" /></figure>
                </div>
              </div>
            </div>
          </div>
        </section>


        <div className="six_box">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-2 col-sm-4 pa_left">
                <div className="six_probpx yellow_bg">
                  <i><img src="images/shoes.png" alt="#" /></i>
                  <span>Shoes</span>
                </div>
              </div>
              <div className="col-md-2 col-sm-4 pa_left">
                <div className="six_probpx bluedark_bg">
                  <i><img src="images/underwear.png" alt="#" /></i>
                  <span>underwear</span>
                </div>
              </div>
              <div className="col-md-2 col-sm-4 pa_left">
                <div className="six_probpx yellow_bg">
                  <i><img src="images/pent.png" alt="#" /></i>
                  <span>Pante & socks</span>
                </div>
              </div>
              <div className="col-md-2 col-sm-4 pa_left">
                <div className="six_probpx bluedark_bg">
                  <i><img src="images/t_shart.png" alt="#" /></i>
                  <span>T-shirt & tankstop</span>
                </div>
              </div>
              <div className="col-md-2 col-sm-4 pa_left">
                <div className="six_probpx yellow_bg">
                  <i><img src="images/jakit.png" alt="#" /></i>
                  <span>cardigans & jumpers</span>
                </div>
              </div>
              <div className="col-md-2 col-sm-4 pa_left">
                <div className="six_probpx bluedark_bg">
                  <i><img src="images/helbet.png" alt="#" /></i>
                  <span>Top & hat</span>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div id="project" className="project">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="titlepage">
                  <h2>Featured Products</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="product_main">

                <div className="project_box ">
                  <div className="dark_white_bg" ><img src="images/shoes1.png" alt="#" /></div>
                  <h3>Short Openwork Cardigan $120.00</h3>
                </div>


                <div className="project_box ">
                  <div className="dark_white_bg" ><img src="images/shoes2.png" alt="#" /></div>
                  <h3 >Short Openwork Cardigan $120.00</h3>
                </div>

                <div className="project_box">
                  <div className="dark_white_bg" ><img src="images/shoes3.png" alt="#" /></div>
                  <h3>Short Openwork Cardigan $120.00</h3>
                </div>

                <div className="project_box">
                  <div className="dark_white_bg" ><img src="images/shoes4.png" alt="#" /></div>
                  <h3>Short Openwork Cardigan $120.00</h3>
                </div>

                <div className="project_box">
                  <div className="dark_white_bg" ><img src="images/shoes5.png" alt="#" /></div>
                  <h3>Short Openwork Cardigan $120.00</h3>
                </div>


                <div className="project_box ">
                  <div className="dark_white_bg" ><img src="images/tisat1.png" alt="#" /></div>
                  <h3>Short Openwork Cardigan $120.00</h3>
                </div>

                <div className="project_box ">
                  <div className="dark_white_bg" ><img src="images/tisat2.png" alt="#" /></div>
                  <h3 >Short Openwork Cardigan $120.00</h3>
                </div>

                <div className="project_box">
                  <div className="dark_white_bg" ><img src="images/tisat3.png" alt="#" /></div>
                  <h3>Short Openwork Cardigan $120.00</h3>
                </div>

                <div className="project_box">
                  <div className="dark_white_bg" ><img src="images/tisat4.png" alt="#" /></div>
                  <h3>Short Openwork Cardigan $120.00</h3>
                </div>

                <div className="project_box">
                  <div className="dark_white_bg" ><img src="images/tisat5.png" alt="#" /></div>
                  <h3>Short Openwork Cardigan $120.00</h3>
                </div>


                <div className="project_box ">
                  <div className="dark_white_bg" ><img src="images/mix1.png" alt="#" /></div>
                  <h3>Short Openwork Cardigan $120.00</h3>
                </div>

                <div className="project_box ">
                  <div className="dark_white_bg" ><img src="images/mix2.png" alt="#" /></div>
                  <h3 >Short Openwork Cardigan $120.00</h3>
                </div>

                <div className="project_box">
                  <div className="dark_white_bg" ><img src="images/mix3.png" alt="#" /></div>
                  <h3>Short Openwork Cardigan $120.00</h3>
                </div>

                <div className="project_box">
                  <div className="dark_white_bg" ><img src="images/mix4.png" alt="#" /></div>
                  <h3>Short Openwork Cardigan $120.00</h3>
                </div>

                <div className="project_box">
                  <div className="dark_white_bg" ><img src="images/mix5.png" alt="#" /></div>
                  <h3>Short Openwork Cardigan $120.00</h3>
                </div>

                <div className="col-md-12">
                  <a className="read_more" href="#">See More</a>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="fashion">
          <img src="images/fashion.jpg" alt="#" />
        </div>


        <div className="news">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="titlepage">
                  <h2>Letest News</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 margin_top40">
                <div className="row d_flex">
                  <div className="col-md-5">
                    <div className="news_img">
                      <img src="images/news_img1.jpg" />
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="news_text">
                      <h3>Specimen book. It has survived not only five</h3>
                      <span>7 July 2019</span>
                      <div className="date_like">
                        <span>Like </span><span className="pad_le">Comment</span>
                      </div>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 margin_top40">
                <div className="row d_flex">
                  <div className="col-md-5">
                    <div className="news_img">
                      <img src="images/news_img2.jpg" />
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="news_text">
                      <h3>Specimen book. It has survived not only five</h3>
                      <span>7 July 2019</span>
                      <div className="date_like">
                        <span>Like </span><span className="pad_le">Comment</span>
                      </div>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 margin_top40">
                <div className="row d_flex">
                  <div className="col-md-5">
                    <div className="news_img">
                      <img src="images/news_img3.jpg" />
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="news_text">
                      <h3>Specimen book. It has survived not only five</h3>
                      <span>7 July 2019</span>
                      <div className="date_like">
                        <span>Like </span><span className="pad_le">Comment</span>
                      </div>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="newslatter">
          <div className="container">
            <div className="row d_flex">
              <div className="col-md-5">
                <h3 className="neslatter">Subscribe To The Newsletter</h3>
              </div>
              <div className="col-md-7">
                <form className="news_form">
                  <input className="letter_form" placeholder=" Enter your email" type="text" name="Enter your email" />
                  <button className="sumbit">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>


        <div className="three_box">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="gift_box">
                  <img src="images/icon_mony.png" />
                  <span>Money Back</span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="gift_box">
                  <img src="images/icon_gift.png" />
                  <span>Special Gift</span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="gift_box">
                  <img src="images/icon_car.png" />
                  <span>Free Shipping</span>
                </div>
              </div>
            </div>
          </div>
        </div>



        <footer>
          <div className="footer">
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <div className="inror_box">
                    <h3>INFORMATION </h3>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="inror_box">
                    <h3>MY ACCOUNT </h3>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="inror_box">
                    <h3>ABOUT  </h3>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="inror_box">
                    <h3>CONTACTS  </h3>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="copyright">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <p>© 2019 All Rights Reserved. Design by<a href="https://html.design/"> Free Html Templates</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>

      </div>

    </div>
  )
}

export default App
