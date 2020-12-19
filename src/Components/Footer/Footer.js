import React from 'react'
import './App.css'

function Footer() {
    return (
        <>
            <footer id="footer">
                <div className="container">
                    <h3>Selecao</h3>
                    <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi
      placeat.</p>
                    <div className="social-links">
                        <a href="#" className="twitter"><i class="fab fa-twitter"></i></a>
                        <a href="#" className="facebook"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" className="instagram"><i class="fab fa-instagram"></i></a>
                        <a href="#" className="google-plus"><i class="fab fa-skype"></i></a>
                        <a href="#" className="linkedin"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                    <div className="copyright">
                        © Copyright <strong><span>Selecao</span></strong>. All Rights Reserved
    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer
