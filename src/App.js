import * as React from "react";
import MuiCard from "@mui/material/Card";
import MuiAvatar from "@mui/material/Avatar";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { TextField, styled } from "@mui/material";

import video from "./assets/dinasavra.mp4";
import avatar from "./assets/dina.jpeg";
import wing from "./assets/wing.jpeg";
import bant from "./assets/2.jpg";
import img3 from "./assets/3.png";
import img4 from "./assets/4.png";
import img5 from "./assets/5.png";
import img6 from "./assets/6.png";
import img7 from "./assets/7.png";
import img8 from "./assets/8.png";
import img9 from "./assets/9.png";
import img10 from "./assets/10.png";
import img11 from "./assets/11.png";
import img12 from "./assets/12.png";
import img13 from "./assets/13.png";

import "./App.css";

const Main = styled("div")({
  height: "100%",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
});

const Avatar = styled(MuiAvatar)({
  height: 200,
  width: 200,
  marginRight: 40,
});

const TitlePart = styled("div")({
  display: "flex",
  alignItems: "center",
});

const Card = styled(MuiCard)({
  width: "90%",
  margin: 20,
  borderRadius: 20,
  padding: 20,
  maxWidth: 700,
});

const Video = styled("video")({
  height: "100vh",
});


function Passwords() {
  return (
    <div
      style={{ display: "flex", marginTop: 16 }}
      ref={(el) => {
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }}
    >
      <div style={{ marginRight: 16 }} id="pass">
        <p style={{ marginmarginTop: 90 }}>
          <span style={{ color: "#5f6368" }}>login:</span>
        </p>
        <p>
          <span style={{ color: "#5f6368" }}>password:</span>
        </p>
      </div>
      <div style={{ flexGrow: 1 }}>
        <p style={{ marginmarginTop: 90 }}>linadakill@gmail.com</p>
        <p>LHwn5.$iPZ,KtAv</p>
      </div>
    </div>
  );
}

function Content() {
  const [showPassword, setShowPassword] = React.useState(false);

  const checkPassword = (e) => {
    console.log(e.target.value);

    if (e.target.value?.toLowerCase().trim() === "слава") {
      setShowPassword(true);
    }
  };

  const onAccordeonChange = (val) => {
    if (val) {
      setTimeout(() => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
      }, 300);
    }
  };

  return (
    <Main>
      <Card sx={{ position: "relative" }}>
        <TitlePart>
          <Avatar alt="Remy Sharp" src={avatar} />
          <div>
            <h2>Це ти, Діно, знайомся ^_=</h2>
            <h3>
              А цей сайт присвячується твоєму двадцятому дню народження <img height='21px' src={img13}/> <img height='21px' src={img13}/> <img height='21px' src={img13}/>
            </h3>
          </div>
        </TitlePart>
      </Card>

      <Card>
        <h3>Шо я маю тобі сказати</h3>

        <p>
          Так так, тепер в тебе є персональна веб сторінка. ОТАКОЇ. Але
          предназначена вона тіко для тебе!!! Шоста ранку як я сів писати цей
          текст, ти викупай, роби трошки знижку))) По звичці затягнув таску по
          програмуванню, бло ^^/)). Але певен ти будеш задоволена цим
          результатом в цілому. Якщо навіть я задоволений, ахах) Хотів додати ще
          глоу еффектів та глічів і бльосточок щоб зовсім вже добити, але
          вирішив тебе пощадити....
        </p>

        <p>
          Ладно, досить передісторій. Тепер до серйозного. Дарагой днєвнік.
          Сєводня мєня поздравіл одін мілий мальчік. Ладно ладно, сорі,
          стєбуся))
        </p>

        <p>
          Діно. Я щиро та безмежно радий що ми з тобою спілкуємося. Знову. І що
          я знову пізнаю тебе. Більш глибоко, більш відверто і многогранно. Це
          до безтями цікаво та приємно! От правда-правда. Ріл толк. Ти якось
          суміщаєш в собі несумісне. По доброму, в хорошему сенсі проста. Але
          при цьому глибока та цікава. Буваєш трохи наївною та імпульсивною. Але
          при цьому продуманна, вмієш прорахувати дії та вчинки. Вмієш і несеш
          відповідальність за себе та близьких. Зі сторони здається що ти рожева
          дівчинка. Але слухаєш такий розйоб що старічкі б перехрестилися))
          Доречі мері крістмас, ахаха! Для мене ти дійсно дивовижна. Від тебе
          прямо йде якась аура світла та тепла, котра зігріває та заспокоює. З
          тобою приємно проговорювати як якісь серйозні теми так і якусь повну
          банальщину чи рутину. Або планувати щось. Не дивлячись на те що ти
          скуповуєш усі квитки на літаки варто тебе тлошки полишити ахахха))
          Вибач!! Часто буває ти вибачаєшся за те що ведеш себе несерйозно, типу
          розганяєш якісь сіллі жарти. Не вибачайся. Це класно) І я бажаю тобі
          це зберігти, бажання та можливість отак от побалуватися. Щоб
          незважаючи на всю серйозність життя була така змога, свій островок
          вседозволеності. Зберігти в собі всі ті особливі ніжні та радісні риси
          і дрібнички, котрих в тебе дуже, дуже багато. Знаю, ти любиш всякі
          маленькі гарненькі дрібничкі-вєщічцкі) Люби і свої. Бо є за що. Люби
          себе. Бо є за що! Ти зріла та відповідальна дівчина. Вирішуєш питання
          котрі вже зовсім не підліткові. І в тебе виходить. І мені від цього
          стає тепло на серці.. Я щиро радуюсь за це! Також на тебе можна
          покластися. І ти вмієш підтримати близьких. Не жалієш для цього часу.
          Про шо це я... Про тебе. Про те, що ти велика молодець! Правда так
          вважаю і горжуся тобою.
        </p>

        <p>
          Шо ж тобі побажати такого едакого...для початку напевно доброго
          ранку?) Хай ти та твої близькі будуть здорові (хаха побажав здоров'я і
          сам собі палучаіца, отакий от я корисливий). Ні, правда. Це дуже
          важливо. В здаровам тєлє здаровий ХуХ)) Да такий що ухуху! Принайні в
          тебе так точно. Знаєш шо згадав може не доречний комент буде але
          сорі.. Згадалось що ти відпускала у свій бік щось типу "ера амьоби" і
          бувало зациклювалася на тому що от тобі в когось треба чомусь
          повчитися. А може це іншим треба повчитися в тебе?) Як на мене якщо
          така ера колись і була, то вона пройшла. Цей дінозавр подолав епохи і
          йде далі з гордо піднятою головою, горящими оченятами, і нечуханою
          силою та стараннями прокладуює собі дорогу в майбутнє крізь єбануті
          обставини. Отакою Діназаврою я тебе бачу. Не сумнівайся в собі. Тіко
          трошки і по ділу) Бажаю тобі щоб навіть якщо ти у чомусь будеш
          сумніватися стосовно себе то це тобі приносило зрештою тільки користь
          та розвиток. Завершу тут напевно на серйозних щах, бо далі йде релакс
          контент. Приємного перегляду ^_= Сподіваюся ти все це дивишся на
          ноуті, маєш поруч навушники та щиру посмішку на своєму супер елегантному та
          солодкому личику. І спину рівно тримаєш!!! <br/> <br/> Всьо, проганяю з цього
          блоку, давай йди до наступного)) Всього їх ще 2 залишилось, нічого
          не пропусти, всьо важна і всьо для тебе!
        </p>
      </Card>

      <Card>
        <h3>Оце бубь ласка сматрєть зі звуком і фулл скрінє</h3>
        <Video controls="controls" width="100%" height="100%" src={video} />
      </Card>

      <Card>
        <h3 style={{ padding: "0px 16px", textTransform: "uppercase" }}>
          І шо це за день народження без подарунків, правильно?
        </h3>

        <p style={{ padding: "0px 16px" }}>
          Саме тому я дещо для тебе приготував. Змушу тебе клацать кнопкі!!
        </p>

        <Accordion onChange={onAccordeonChange}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h3 style={{ margin: 0 }}>ХОЧУ ПОДАРКІІІ!!!!!!!</h3>
          </AccordionSummary>
          <AccordionDetails>
            {!showPassword && (
              <>
                <p style={{ marginmarginTop: 90 }}>А також решать ребуси.</p>
                <TextField
                  placeholder='Введи закінчення фрази "ЗАРОДИШУ..."'
                  fullWidth
                  onChange={checkPassword}
                  id="textfield"
                  sx={{
                    "& .MuiOutlinedInput-root.Mui-focused": {
                      "& > fieldset": {
                        borderColor: "#FFC0CB",
                      },
                    },
                  }}
                />
              </>
            )}
            
            {showPassword && <Passwords />}

            {showPassword && (
              <>
                <h3>І шо це за фігня????????</h3>

                <p>
                  А це те, що допоможе тобі у прояві твоєї творчості, надасть
                  буквальна нєогранічєнную власть та можливості ^_=
                </p>

                <p>
                  Ти дійсно талановита людина. І я хочу бути хоч трішечки
                  причетним до того, аби ці таланти були розкриті на всі сто
                  відсотків. Мені цікаво як звучить твоя душа. Тож тепер ти
                  зможеш перекласти свої настрої та думки у музику коли тобі
                  заманеться ;) Причому це абсолютєлі лігал та абсолютелі ендлес
                  опортьюнеті. Ліцензійовано))) Ніхто навіть в суд не подасть та
                  поліцію не викличе. Здогадалася шо пора скачувать? Давай
                  бігом!!!!
                </p>

                <h3>
                  Бажаю тобі Натхнення та Нових Відкриттів, Сонечко! Звучи ярко,
                  виразно, неперевершено, так само яка ти сама по собі є....
                  Обіймаю. Ще раз, з днем народження!!!
                </h3>
              </>
            )}
          </AccordionDetails>
        </Accordion>
      </Card>

      <img
        src={img9}
        style={{ height: 300, transform: "rotate(90deg)", marginTop: -20 }}
      />
    </Main>
  );
}

function App() {
  return (
    <div style={{ display: "flex", justifyItems: "center", width: "100%" }}>
      <div
        style={{
          flexGrow: 1,
          display: "flex",
          alignItems: "flex-end",
          flexDirection: "column",
        }}
      >
        <img src={wing} style={{ left: 0, marginTop: 90, height: 600 }} />

        <img src={bant} style={{ left: 0, marginTop: 90, height: 100 }} />

        <img src={img5} style={{ left: 0, marginTop: 90, height: 400 }} />

        <img src={img7} style={{ left: 0, marginTop: 90, height: 300 }} />

        <img
          src={img10}
          style={{
            left: 0,
            marginTop: 90,
            height: 250,
            transform: "scaleX(-1)",
          }}
        />

        <img src={img11} style={{ left: 0, marginTop: 90, height: 200 }} />
      </div>

      <Content />

      <div
        style={{
          flexGrow: 1,
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
        }}
      >
        <img
          src={wing}
          style={{
            left: 0,
            marginTop: 90,
            height: 600,
            transform: "scaleX(-1)",
          }}
        />

        <img src={img3} style={{ left: 0, marginTop: 90, height: 100 }} />

        <img src={img4} style={{ left: 0, marginTop: 90, height: 400 }} />

        <img src={img6} style={{ left: 0, marginTop: 90, height: 300 }} />

        <img src={img12} style={{ left: 0, marginTop: 90, height: 300 }} />

        <img src={img8} style={{ left: 0, marginTop: 90, height: 200 }} />
      </div>
    </div>
  );
}

export default App;
