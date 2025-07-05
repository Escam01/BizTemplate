import { LogIn } from "lucide-react";
import { Button } from "../UI/button/button";
import Icon from "../UI/icon/Icon";
import st from "./Hero.module.scss";
import { Link } from "react-router-dom";

const navigation = [
  {
    name: "Войти",
    href: "/login",
  },
];

function Hero() {
  return (
    <section className={st.root}>
      <div className={st.container}>
        <div className={st.grid}>
          <div className={st.textContainer}>
            <div className={st.titleContainer}>
              <h1 className={st.title}>
                Современные решения для вашего
                <span className={st.highlight}> бизнеса</span>
              </h1>
              <p className={st.description}>
                Мы создаем инновационные продукты, которые помогают компаниям
                расти и достигать новых высот в цифровой эпохе.
              </p>
            </div>
            <div className={st.buttonContainer}>
                <Link to="/register">
                  <Button size="lg" className={st.primaryButton}>
                    <Icon
                      name="ArrowRight"
                      size={24}
                      className={st.iconMargin}
                    />
                    Начать сейчас
                  </Button>
                </Link>
			  
			  <Link to='/dashboard' >
              <Button variant="outline" size="lg" className={st.outlineButton}>
                <Icon name="Play" size={24} className={st.iconMargin} />
                Посмотреть демо
              </Button>
			  </Link>
            </div>
            <div className={st.statsContainer}>
              <div className={st.statItem}>
                <div className={st.statValue}>10k+</div>
                <div className={st.statLabel}>Клиентов</div>
              </div>
              <div className={st.statItem}>
                <div className={st.statValue}>99%</div>
                <div className={st.statLabel}>Удовлетворенность</div>
              </div>
              <div className={st.statItem}>
                <div className={st.statValue}>24/7</div>
                <div className={st.statLabel}>Поддержка</div>
              </div>
            </div>
          </div>
          <div className={st.imageContainer}>
            <div className={st.imageWrapper}>
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center"
                alt="Дашборд аналитики"
                className={st.image}
              />
              <div className={st.trendingIcon}>
                <Icon name="TrendingUp" size={24} />
              </div>
            </div>
            <div className={st.floatingElement}>
              <div className={st.onlineStatus}>
                <div className={st.onlineDot}></div>
                <span className={st.onlineText}>Онлайн сейчас</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
