import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState(0);

  // =========================
  // COUNTDOWN
  // =========================

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const birthday = new Date("2026-08-23T00:00:00");

    const updateCountdown = () => {
      const now = new Date();
      const difference = birthday - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });

        return;
      }

      setTimeLeft({
        days: Math.floor(
          difference / (1000 * 60 * 60 * 24)
        ),

        hours: Math.floor(
          (difference / (1000 * 60 * 60)) % 24
        ),

        minutes: Math.floor(
          (difference / (1000 * 60)) % 60
        ),

        seconds: Math.floor(
          (difference / 1000) % 60
        ),
      });
    };

    updateCountdown();

    const timer = setInterval(
      updateCountdown,
      1000
    );

    return () => clearInterval(timer);
  }, []);

  const birthdayHasArrived =
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  return (
    <div className="app">

      {/* =====================================
          FLOATING DECORATIONS
      ===================================== */}

      <div className="sparkle sparkle-1">✦</div>
      <div className="sparkle sparkle-2">✧</div>
      <div className="sparkle sparkle-3">✦</div>
      <div className="sparkle sparkle-4">✧</div>

      <div className="heart heart-1">♡</div>
      <div className="heart heart-2">♡</div>
      <div className="heart heart-3">♡</div>


      {/* =====================================
          PAGE 0 — WELCOME
      ===================================== */}

      {page === 0 && (
        <main className="welcome-card">

          <div className="bow">
            🎀
          </div>

          <p className="small-text">
            ✨ A little something for you... ✨
          </p>

          <h1>
            Happy Birthday
            <span>Shalom</span>
          </h1>

          <p className="birthday-intro">
            Your 21st birthday surprise is waiting...
          </p>

          <button
            className="open-button"
            onClick={() => setPage(1)}
          >
            💌 Open Your Surprise
          </button>

          <p className="bottom-text">
            made with love ♡
          </p>

        </main>
      )}


      {/* =====================================
          PAGE 1 — GRADE 11
      ===================================== */}

      {page === 1 && (
        <main className="story-card">

          <div className="chapter-number">
            Chapter 01
          </div>

          <div className="story-icon">
            🌷
          </div>

          <p className="small-text">
            Where it all started...
          </p>

          <h2>
            Grade 11
          </h2>

          <div className="story-line"></div>

          <p className="story-text">
            We met in Grade 11...
          </p>

          <p className="story-text">
            And I honestly didn't know that I
            was meeting someone who would
            become such an important part of
            my life.
          </p>

          <p className="story-highlight">
            Little did I know, I was meeting
            one of my favourite people. 💗
          </p>

          <button
            className="next-button"
            onClick={() => setPage(2)}
          >
            Continue ✨
          </button>

        </main>
      )}


      {/* =====================================
          PAGE 2 — GRADE 12
      ===================================== */}

      {page === 2 && (
        <main className="story-card">

          <div className="chapter-number">
            Chapter 02
          </div>

          <div className="story-icon">
            
          </div>

          <p className="small-text">
            Then came Grade 12...
          </p>

          <h2>
            The days were different
          </h2>

          <div className="story-line"></div>

          <p className="story-text">
            If you didn't come to school,
            the day felt so long and boring. 
          </p>

          <p className="story-highlight">
            Because you made everything better.
          </p>

          <p className="story-text">
            You made me laugh, even on the days
            when I didn't feel like laughing.
          </p>

          <p className="story-text">
            Somehow, school just wasn't the
            same when you weren't there.
          </p>

          <button
            className="next-button"
            onClick={() => setPage(3)}
          >
            There's more... 💕
          </button>

        </main>
      )}


      {/* =====================================
          PAGE 3 — UNDERSTANDING
      ===================================== */}

      {page === 3 && (
        <main className="story-card">

          <div className="chapter-number">
            Chapter 03
          </div>

          <div className="story-icon">
            💗
          </div>

          <p className="small-text">
            And this is what I love most...
          </p>

          <h2>
            You just get me.
          </h2>

          <div className="story-line"></div>

          <p className="story-text">
            You understand me without me even
            having to tell you what's wrong.
          </p>

          <p className="story-highlight">
            Somehow, you just know.
          </p>

          <p className="story-text">
            I don't always have to explain myself
            because you already understand.
          </p>

          <p className="story-text">
            And that is something I'll always
            be grateful for.
          </p>

          <button
            className="next-button"
            onClick={() => setPage(4)}
          >
            Keep going 🎀
          </button>

        </main>
      )}


      {/* =====================================
          PAGE 4 — 21 THINGS
      ===================================== */}

      {page === 4 && (
        <main className="story-card things-card">

          <div className="chapter-number">
            Chapter 04
          </div>

          <div className="story-icon">
            💕
          </div>

          <p className="small-text">
            21 little things...
          </p>

          <h2>
            21 Things About You
          </h2>

          <p className="things-intro">
            Since you're turning 21, I couldn't
            just give you one reason why you're
            special. So here's 21. 🎀
          </p>

          <div className="things-grid">

            <div className="thing">
              <span>01</span>
              You are a good person.
            </div>

            <div className="thing">
              <span>02</span>
              You are beautiful. 💗
            </div>

            <div className="thing">
              <span>03</span>
              You make boring days fun.
            </div>

            <div className="thing">
              <span>04</span>
              You are a good friend. A really good friend.
            </div>

            <div className="thing">
              <span>05</span>
              You make people feel comfortable around you.
            </div>

            <div className="thing">
              <span>06</span>
              You have the funniest moments. 😂
            </div>

            <div className="thing">
              <span>07</span>
              You are someone I can be myself around.
            </div>

            <div className="thing">
              <span>08</span>
              You listen.
            </div>

            <div className="thing">
              <span>09</span>
              You love to eat and bake
            </div>

            <div className="thing">
              <span>10</span>
              You make memories unforgettable. ✨
            </div>

            <div className="thing">
              <span>11</span>
              You bring good energy wherever you go.
            </div>

            <div className="thing">
              <span>12</span>
              You always know how to make me smile.
            </div>

            <div className="thing">
              <span>13</span>
              You are genuinely special.
            </div>

            <div className="thing">
              <span>14</span>
              You're a good mother.
            </div>

            <div className="thing">
              <span>15</span>
              You're someone I'll always be grateful for.
            </div>

            <div className="thing">
              <span>16</span>
              You are a proud young Christian,
              and that makes you even more special. 🌷
            </div>

            <div className="thing">
              <span>17</span>
              You are a good sister. A really good sister.
            </div>

            <div className="thing">
              <span>18</span>
              You have a beautiful heart.
            </div>

            <div className="thing">
              <span>19</span>
              You are one of those people I'll always remember.
            </div>

            <div className="thing">
              <span>20</span>
              I'm really lucky to call you my friend.
            </div>

            <div className="thing special-thing">
              <span>21</span>
              You're simply YOU. 💕
            </div>

          </div>

          <button
            className="next-button"
            onClick={() => setPage(5)}
          >
            Our memories 
          </button>

        </main>
      )}


      {/* =====================================
          PAGE 5 — PHOTO GALLERY
          NO TEXT NEXT TO IMAGES
      ===================================== */}

      {page === 5 && (
        <main className="gallery-page">

          <div className="gallery-grid">

            <img
              src="/photos/image.png"
              alt="Shalom memory"
            />

            <img
              src="/photos/image copy.png"
              alt="Shalom memory"
            />

            <img
              src="/photos/image copy 2.png"
              alt="Shalom memory"
            />

            <img
              src="/photos/image copy 3.png"
              alt="Shalom memory"
            />

          </div>

          <button
            className="next-button gallery-button"
            onClick={() => setPage(6)}
          >
            Continue 💕
          </button>

        </main>
      )}


      {/* =====================================
          PAGE 6 — LETTER
      ===================================== */}

      {page === 6 && (
        <main className="story-card letter-card">

          <div className="letter-bow">
            🎀
          </div>

          <p className="small-text">
            A little letter for you
          </p>

          <h2>
            Dear Shalom...
          </h2>

          <div className="story-line"></div>

          <div className="letter">

            <p>
              Happy 21st Birthday, Shalom! 💗
            </p>

            <p>
              I'm so grateful that we met in Grade 11.
              I never knew then how special our
              friendship would become.
            </p>

            <p>
              You made Grade 12 so much more fun.
              Whenever you weren't at school, the day
              honestly felt so long and boring
            </p>

            <p>
              You made me laugh, you made ordinary
              days feel special, and somehow you always
              understood me without me having to say
              anything.
            </p>

            <p>
              Thank you for all the laughs, the memories,
              the conversations, and for simply being you.
            </p>

            <p>
              I hope this new chapter of your life brings
              you so much happiness, love, success,
              peace and beautiful memories.
            </p>

            <p>
              May God continue to guide you, protect you
              and bless you in this new chapter of your life. 🙏🏽💗
            </p>

            <p className="final-message">
              Happy 21st Birthday, Shalom! 🎂🎀💕
            </p>

          </div>

          <button
            className="next-button"
            onClick={() => setPage(7)}
          >
            Wait... there's one last thing 🎀
          </button>

        </main>
      )}


      {/* =====================================
          PAGE 7 — COUNTDOWN
      ===================================== */}

      {page === 7 && (
        <main className="countdown-card">

          <div className="countdown-sparkle">
            ✦
          </div>

          <div className="birthday-bow">
            🎀
          </div>

          <p className="small-text">
            Something special is coming...
          </p>

          <h2>
            Shalom is turning

            <span className="big-number">
              21
            </span>
          </h2>

          <div className="story-line"></div>

          <p className="countdown-message">
            The countdown to your special day
            has officially begun. 💕
          </p>

          <div className="countdown-boxes">

            <div className="count-box">
              <span>
                {String(timeLeft.days).padStart(2, "0")}
              </span>

              <small>
                DAYS
              </small>
            </div>

            <div className="count-box">
              <span>
                {String(timeLeft.hours).padStart(2, "0")}
              </span>

              <small>
                HOURS
              </small>
            </div>

            <div className="count-box">
              <span>
                {String(timeLeft.minutes).padStart(2, "0")}
              </span>

              <small>
                MINUTES
              </small>
            </div>

            <div className="count-box">
              <span>
                {String(timeLeft.seconds).padStart(2, "0")}
              </span>

              <small>
                SECONDS
              </small>
            </div>

          </div>

          <p className="birthday-date">
            📅 23 August 2026
          </p>

          {birthdayHasArrived ? (

            <button
              className="birthday-reveal-button"
              onClick={() => setPage(8)}
            >
              🎂 It's Your Birthday! 🎉
            </button>

          ) : (

            <p className="waiting-text">
              Come back on your birthday
              for your final surprise... 💌
            </p>

          )}

        </main>
      )}


      {/* =====================================
          PAGE 8 — FINAL SURPRISE
      ===================================== */}

      {page === 8 && (
        <main className="final-surprise">

          <div className="confetti-big">
            🎉 ✨ 🎀 ✨ 🎉
          </div>

          <div className="birthday-cake">
            🎂
          </div>

          <p className="small-text">
            Today is the day...
          </p>

          <h1>
            Happy 21st
            <span>
              Shalom! 💕
            </span>
          </h1>

          <div className="story-line"></div>

          <p className="final-birthday-text">
            21 looks beautiful on you. ✨
          </p>

          <p className="final-birthday-message">
            I hope this new chapter brings you
            everything your heart has been praying for.
            May you experience happiness, love,
            success, peace and that God will reveal is purspose for your life,and that you will live as beautiful christian
            and that you will get a good husband,and please dont get another child before you get married, cause you have a great future ahead of you 
          </p>

          <p className="final-birthday-message">
            From the girl I met in Grade 11
            to the amazing woman turning 21...
            I'm so grateful I got to know you. 💗
          </p>

          <p className="final-birthday-message">
            Here's to more laughter, more memories,
            more random conversations and many
            more birthdays💕
          </p>

          <div className="final-hearts">
            ♡ ♡ ♡
          </div>

          <h3>
            Here's to 21! 🥂✨
          </h3>

          <p className="made-with-love">
            Made especially for you, Shalom 🎀
          </p>

        </main>
      )}

    </div>
  );
}

export default App;