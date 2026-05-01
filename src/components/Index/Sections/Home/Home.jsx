import './Home.css';

export function Home() {
    return (
        <section className="home-banner">
            <div className="home-banner__content">
                <div className="home-banner__text">
                    <span>What is</span>
                    <h1>Lorem <strong>Ipsum?</strong></h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>

                    <div className="home-banner__cta">
                        <input type="email" placeholder="Email address" />
                        <button type="button">Connect With Me</button>
                    </div>
                </div>
                <div className="home-banner__visual" />
            </div>
        </section>
    );
}