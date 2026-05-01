import "./About.css";
import celularImage from "../../../../assets/celular.png";
import Card from "../../Card/Card";

const cardData = [
  {
    imageSrc: celularImage,
    badge: "Culinary",
    title: "Dion Lucas",
    description:
      "",
  },
  {
    imageSrc: celularImage,
    badge: "Design",
    title: "Modern Visual Storytelling",
    description:
      "Layouts that combine bold typography, strong contrast, and clean structure.",
  },
  {
    imageSrc: celularImage,
    badge: "Strategy",
    title: "Brand Presence",
    description:
      "Content designed to engage users and build a memorable digital identity.",
  },
];

export function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="about-visual">
          <img src={celularImage} alt="Celular" />
        </div>
        <div className="about-copy">
          <span className="about-copy__eyebrow">Quem é</span>
          <div className="about-copy__title">
            <h2>POLLEN?</h2>
            <h1>About</h1>
          </div>
          <p className="about-copy__text">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy.
          </p>
        </div>
      </div>

      <div className="about-features">
        <div className="feature-card">
          <i className="bi bi-phone-fill" aria-hidden="true" />
          <h3>Mobile First</h3>
          <p>
            Layouts responsivos e experiência fluida em qualquer tamanho de
            tela, com foco em usabilidade.
          </p>
        </div>
        <div className="feature-card">
          <i className="bi bi-lock-fill" aria-hidden="true" />
          <h3>Segurança</h3>
          <p>
            Práticas fortes de segurança e proteção de dados para que sua
            presença web seja confiável.
          </p>
        </div>
        <div className="feature-card">
          <i className="bi bi-brush-fill" aria-hidden="true" />
          <h3>Design Premium</h3>
          <p>
            Visual moderno e profissional, usando cores de marca e tipografia
            clara para destacar o conteúdo.
          </p>
        </div>
      </div>

      <div className="titlo">
        <h2>Equipe:</h2>
      </div>

      <div className="about-cards">

        {cardData.map((card) => (
          <Card
            key={card.title}
            imageSrc={card.imageSrc}
            badge={card.badge}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
}
