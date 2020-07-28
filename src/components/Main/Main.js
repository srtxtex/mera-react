import React, {Component} from 'react';
import './index.css';
import {Link} from "react-router-dom";

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
                                    <div class="portfolio-item__title">
                                        <Link to={'/calc'}>Калькулятор</Link>
                                    </div>
                                    <div class="portfolio-item__text">
                                        <p>Простой пример калькулятора с исльзованием классовой компоненты</p>
                                    </div>
                                </div>
                            </div>



                            <div class="col-4">
                                <div class="portfolio-item">
                                    <div class="portfolio-item__title">
                                        <Link to={'/timer'}>Таймер</Link>
                                    </div>
                                    <div class="portfolio-item__text">
                                        <p>Запуск, остановка, сохранение результата таймера. Есть возможность скрыть таймер размонировав компоненту</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-4">
                                <div class="portfolio-item">

                                    <div class="portfolio-item__title">
                                        <Link to={'/tracking'}>Трекинг курсора</Link>
                                    </div>
                                    <div class="portfolio-item__text">
                                        <p>За курсором передвигается div с координатами курсора</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="row">

                            <div className="col-4">
                                <div className="portfolio-item">
                                    <div className="portfolio-item__title">
                                        <Link to={'/todo'}>TODO лист</Link>
                                    </div>
                                    <div className="portfolio-item__text">
                                        <p>Добавление, удаление, редактирование списка</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-4">
                                <div className="portfolio-item">
                                    <div className="portfolio-item__title">
                                        <Link to={'/resize'}>Ресайз</Link>
                                    </div>
                                    <div className="portfolio-item__text">
                                        <p>Изменение размеров внутреннего плока пропорционально размерам окна</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-4">
                                <div className="portfolio-item">
                                    <div className="portfolio-item__title">
                                        <a href="https://www.efset.org/cert/8BEbru">Сертификат</a>
                                    </div>
                                    <div className="portfolio-item__text">
                                        <p>Сертификат по тесту английского языка.</p>
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