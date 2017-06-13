import React from 'react';
class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <section className="index">
                    <ul>
                        <li>
                            <dl>
                                <dt>
                                    <i className="iconfont icon-biaoti"></i>基本信息
                                </dt>
                                <dd>
                                    <span>个人信息:</span>李永超 / 男 / 27岁
                                </dd>
                                <dd>
                                    <span>毕业院校:</span>廊坊燕京职业技术学院
                                </dd>
                                <dd>
                                    <span>应聘岗位:</span>前端工程师
                                </dd>
                                <dd>
                                    <span>现居住地:</span>河北唐山
                                </dd>
                                <dd>
                                    <span>婚姻状况:</span>已婚
                                </dd>
                                <dd>
                                    <span>目前情况:</span>可随时到岗
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>
                                    <i className="iconfont icon-biaoti"></i>联系方式
                                </dt>
                                <dd>
                                    <span>
                                        <i className="iconfont icon-phone"></i>
                                        联系电话:
                                    </span>
                                    18633133583
                                </dd>
                                <dd>
                                    <span>
                                        <i className="iconfont icon-weixin"></i>
                                        联系微信:
                                    </span>
                                    419491539
                                </dd>
                                <dd>
                                    <span>
                                        <i className="iconfont icon-QQ"></i>
                                        联系QQ:
                                    </span>
                                    419491539
                                </dd>
                                <dd>
                                    <span>
                                        <i className="iconfont icon-gmail"></i>
                                        联系邮箱:
                                    </span>
                                    dearaugust@qq.com
                                </dd>
                                <dd>
                                    <span>
                                        <i className="iconfont icon-github"></i>
                                        github:
                                    </span>
                                    <a href="https://github.com/dearaugust">https://github.com/dearaugust</a>
                                </dd>
                                <dd>
                                    <span>
                                        <i className="iconfont icon-icon"></i>
                                        简历源码:
                                    </span>
                                    <a href="https://github.com/dearaugust/my-resume">https://github.com/dearaugust/my-resume</a>
                                </dd>
                            </dl>
                        </li>

                        <li>
                            <dl>
                                <dt>
                                    <i className="iconfont icon-biaoti"></i>主要技能
                                </dt>
                                <dd className="skill">
                                    <ul>
                                        <li className="primary">HTML5</li>
                                        <li className="primary">CSS3</li>
                                        <li className="primary">Javascript</li>
                                        <li className="primary">jQuery</li>
                                        <li className="secondary">Bootstrap</li>
                                        <li className="secondary">git</li>
                                        <li className="secondary">Sass</li>
                                        <li className="secondary">React</li>
                                        <li className="secondary">Redux</li>
                                        <li className="secondary">Ajax</li>
                                        <li className="secondary">JSON</li>
                                        <li className="secondary">ES6</li>
                                        <li className="know">HTTP</li>
                                        <li className="know">node.js</li>
                                        <li className="know">express</li>
                                    </ul>
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>
                                    <i className="iconfont icon-biaoti"></i>技能详解
                                </dt>
                                <dd className="detail-skill">
                                    <ul>
                                        <li>
                                            <div className="round"></div>
                                            <h4>HTML5 / CSS3 / SCSS</h4>
                                            <p>能够编写语义化的HTML，熟练运用div+css 浮动布局，flexbox 弹性布局。</p>
                                            <p>熟悉SCSS书写，webpack自动化工具的运用，进行模块化开发。</p>
                                        </li>
                                        <li>
                                            <div className="round"></div>
                                            <h4>Javascript</h4>
                                            <p>熟悉原生的Javascript，对原型，对象，闭包等都有一定的了解。能脱离jQuery等库编写一些常见的功能，如轮播图，计算器，购物车等等。</p>
                                        </li>
                                        <li>
                                            <div className="round"></div>
                                            <h4>jQuery, zepto, swiper</h4>
                                            <p>熟悉jQ的用法，能使用jQuery快速完成常见功能的开发。能够开发移动端页面，熟练使用zepto,swiper手机端应用库。</p>
                                        </li>
                                        <li>
                                            <div className="round"></div>
                                            <h4>Bootstrap</h4>
                                            <p>熟悉Bootstrap框架，使用栅格系统，媒体查询，Bootstrap组件，来完成响应式的页面开发。</p>
                                        </li>
                                        <li>
                                            <div className="round"></div>
                                            <h4>git</h4>
                                            <p>熟悉Linux操作系统，有自己的github账号，能使用git命令行操作实现代码的上传、分支合并、克隆、版本回滚、等常用的一些操作。</p>
                                        </li>
                                        <li>
                                            <div className="round"></div>
                                            <h4>React /  Ajax / JSON  / ES6 / Redux / React-Redux / Redux-thunk /</h4>
                                            <p>掌握npm包管理工具的使用，能使用ES6语法和React库进行模块化的开发，能实现基本的页面布局和常见的功能，轮播，TODOMVC等。掌握了 React-router实现页面的无刷新体验 、axios或者fetch 来实现Ajax请求数据实现页面的局部刷新,完成一个SPA页面的开发工作。</p>
                                            <p>
                                              对于比较复杂的单页面应用，使用 Redux 来进行 state数据的统一管理，使用 Redux-thunk 来实现发送 action 的异步操作。
                                            </p>
                                        </li>
                                        <li>
                                            <div className="round"></div>
                                            <h4>PhotoShop</h4>
                                            <p>熟练使用PhotoShop，能够简单完成图片的美化和修饰(不局限于切图)。</p>
                                        </li>
                                    </ul>
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>
                                    <i className="iconfont icon-biaoti"></i>自我评价
                                </dt>
                                <dd>
                                    <p>自信，谦虚，是我为人的最大特点。善于发现自己的不足，同时也能够谦虚的接受别人批评与指点。</p>
                                    <p>两年的创业经历都让我在与人沟通的能力上得到了很好的锻炼，懂得如何去尊重他人，懂得如何与周围人处理好关系，最重要的是我懂得了团队合作的重要性！</p>
                                </dd>
                            </dl>
                        </li>
                    </ul>
                </section>
            </div>
        )
    }
}

export default Home;
