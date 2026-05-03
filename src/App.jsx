import { useState } from "react";
import './App.css';
import { Header } from "./components/Index/Header/Header";
import { Home } from "./components/Index/Sections/Home/Home";
import { About } from "./components/Index/Sections/About/About";
import { Footer } from "./components/Index/Sections/Footer/Footer";
import { loginUser, registerUser } from "./services/api";

function App() {
    const [showAuthModal, setShowAuthModal] = useState(false);
    const [authMode, setAuthMode] = useState("login");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nome, setNome] = useState("");
    const [authError, setAuthError] = useState("");
    const [loading, setLoading] = useState(false);

    const generateIdPublic = () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = (Math.random() * 16) | 0;
            const v = c === 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    };

    const handleLoginClick = () => {
        setShowAuthModal(true);
    };

    const handleCloseModal = () => {
        setShowAuthModal(false);
        setAuthError("");
        setEmail("");
        setPassword("");
        setNome("");
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setAuthError("");

        try {
            if (authMode === "register") {
                const userData = {
                    idPublic: generateIdPublic(),
                    email,
                    senha: password,
                    nome,
                    tipo: "CONTRIBUIDOR"
                };
                await registerUser(userData);
                console.log("Registro realizado com sucesso");
            } else {
                const loginData = { email, senha: password };
                const response = await loginUser(loginData);
                
                // Salva o token no localStorage
                if (response.data?.token) {
                    localStorage.setItem("authToken", response.data.token);
                    console.log("Token salvo no localStorage");
                }
            }

            setShowAuthModal(false);
            setEmail("");
            setPassword("");
            setNome("");
        } catch (error) {
            const message = error.response?.data?.message || "Erro ao conectar com o servidor.";
            setAuthError(message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="App">
            <Header onLoginClick={handleLoginClick} />
            {showAuthModal && (
                <div className="auth-modal-overlay" onClick={handleCloseModal}>
                    <div className="auth-modal" onClick={(event) => event.stopPropagation()}>
                        <div className="auth-modal-header">
                            <div>
                                <h2>{authMode === "register" ? "Criar conta" : "Fazer login"}</h2>
                                <p>Escolha abaixo e insira seu email e senha.</p>
                            </div>
                            <button type="button" className="auth-modal-close" onClick={handleCloseModal}>
                                ×
                            </button>
                        </div>

                        <div className="auth-modal-switch">
                            <button
                                type="button"
                                className={authMode === "register" ? "active" : ""}
                                onClick={() => setAuthMode("register")}
                            >
                                Registrar
                            </button>
                            <button
                                type="button"
                                className={authMode === "login" ? "active" : ""}
                                onClick={() => setAuthMode("login")}
                            >
                                Login
                            </button>
                        </div>

                        <form className="auth-modal-form" onSubmit={handleSubmit}>
                            {authMode === "register" && (
                                <label>
                                    Nome
                                    <input
                                        type="text"
                                        value={nome}
                                        onChange={(event) => setNome(event.target.value)}
                                        placeholder="Seu nome completo"
                                        required
                                    />
                                </label>
                            )}
                            <label>
                                Email
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    placeholder="seu@email.com"
                                    required
                                />
                            </label>
                            <label>
                                Senha
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                    placeholder="senha"
                                    required
                                />
                            </label>
                            {authError && <p className="auth-error">{authError}</p>}
                            <button type="submit" className="auth-modal-submit" disabled={loading}>
                                {loading ? "Aguarde..." : authMode === "register" ? "Cadastrar" : "Entrar"}
                            </button>
                        </form>
                    </div>
                </div>
            )}
            <Home />
            <About />
            <Footer />
        </div>
    )
}

export default App;