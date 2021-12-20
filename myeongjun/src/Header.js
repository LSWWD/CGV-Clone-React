import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
        <header class='header'>
            <div class="header__logo">
            <a href="/"><img src="https://img.cgv.co.kr/R2014/images/common/logo/logoRed.png" alt="CGV_logo" size="50px" height="53" width="117"/></a>
            </div>
            <div class="header__link">
                <ul>
                    <a href="/">
                        <li class="header__link__item">                                          
                            <span class="iconify" data-icon="ph:lock-key-open-bold"></span>
                            <p>로그인</p>          
                        </li>
                    </a>
                    <a href="/">               
                        <li class="header__link__item">
                            <span class="iconify" data-icon="icon-park-outline:people-plus-one"></span>
                            <p>회원가입</p>
                        </li>
                    </a>
                    <a href="/">
                        <li class="header__link__item">
                            <span class="iconify" data-icon="icon-park-outline:people"></span>
                            <p>MY CGV</p>
                        </li>
                    </a>
                    <a href="/">
                        <li class="header__link__item">
                            <span class="iconify" data-icon="healthicons:call-centre"></span>
                            <p>고객센터</p>
                        </li>
                    </a>
                </ul>
            </div>
        </header>
        );
    }
}

export default Header