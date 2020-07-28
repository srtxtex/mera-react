import React, {Component} from 'react';
import './index.css';

class Main extends Component {
    render() {
        return (
            <div>

                <div class="header">
                    <div class="header__title">Юрий Запатоцкий</div>
                    <div class="header__slogan">Разработка сайтов на React<br/>HTML5 CSS3 JS JQuery React</div>
                    <div class="header__arrow">
                        <i class="fa fa-chevron-down" aria-hidden="true"></i>
                    </div>
                </div>



                <div class="portfolio">
                    <div class="container">
                        <div class="title">
                            Портфолио
                        </div>
                        <div class="row">

                            <div class="col-4">
                                <div class="portfolio-item">
                                    <div class="portfolio-item__img">
                                        <img src="project_organica.jpg" alt="Макет органика" />
                                    </div>
                                    <div class="portfolio-item__title">
                                        <a href="work-organica.html">Макет органика</a>
                                    </div>
                                    <div class="portfolio-item__text">
                                        <p>Верстка одностраничного сайта по PSD макету.</p>
                                    </div>
                                </div>
                            </div>



                            <div class="col-4">
                                <div class="portfolio-item">
                                    <div class="portfolio-item__img">
                                        <img src="/img/portfolio/project_apollo.jpg" alt="Учебный макет Аполло" />
                                    </div>
                                    <div class="portfolio-item__title">
                                        <a href="#">Учебный макет Аполло</a>
                                    </div>
                                    <div class="portfolio-item__text">
                                        <p>Верстка лендинга хостинг компании. Мобильная адаптивность.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-4">
                                <div class="portfolio-item">
                                    <div class="portfolio-item__img">
                                        <img src="/img/portfolio/project_portfolio.jpg" alt="Личный сайт портфолио" />
                                    </div>
                                    <div class="portfolio-item__title">
                                        <a href="#">Личный сайт портфолио</a>
                                    </div>
                                    <div class="portfolio-item__text">
                                        <p>Верстка личного сайта портфолио на котором вы сейчас находитесь.</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>


                <div class="footer">
                    <div class="container">
                        <div class="row">
                            <div class="col-4">
                                <p class="footer__name">
                                    Юрий Запатоцкий
                                </p>
                                <p>
                                    React разработка сайтов
                                </p>
                            </div>
                            <div class="col-4">
                                <p class="footer__social">Мои профили в социальных сетях</p>
                                <p class="footer__social-icons">
                                    <a href="#" target="_blank">
                                        <i class="fa fa-vk" aria-hidden="true"></i>
                                    </a>
                                    <a href="#" target="_blank">
                                        <i class="fa fa-twitter" aria-hidden="true"></i>
                                    </a>
                                    <a href="#" target="_blank">
                                        <i class="fa fa-facebook" aria-hidden="true"></i>
                                    </a>
                                    <a href="#" target="_blank">
                                        <i class="fa fa-instagram" aria-hidden="true"></i>
                                    </a>
                                    <a href="#" target="_blank">
                                        <i class="fa fa-youtube" aria-hidden="true"></i>
                                    </a>
                                </p>
                            </div>
                            <div class="col-4">
                                <div>
                                    <a href="#" class="button" target="_blank">Связаться Вконтакте</a>
                                </div>
                                <p>
                                    Напишите мне, чтобы заказать или узнать <br/> стоимость верстки вашего провекта
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;