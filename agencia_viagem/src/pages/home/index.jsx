import React from "react";

import "./style.css"
export default function Cadastro () {

    return (
       <div className="bk-01">
       <h1>Cadastre-se</h1>
            <div className="escreva-box">
                <div className="box-esquerdo">
                    <form>
                        <input type="text" placeholder="Nome" required class="input-box"/>
                        <input type="text" placeholder="Sobrenome" required class="input-box"/>
                        <input type="email" placeholder="E-mail" required class="input-box"/>
                        <input type="text" placeholder="CPF" required class="input-box"/>
                        <input type="password" placeholder="Senha" required class="input-box"/>
                        <input type="password" placeholder="Confirme sua Senha" required class="input-box"/>
                        <input type="checkbox" id="terms"></input>
                        <label for="terms">Li e aceito os Termos e Condições de serviço</label>
                        <button type="submit">Cadastrar <span></span></button>
                    </form>
                </div>
                 <div className="box-direito">
                        <a href="" class="fb-link"><i class="fa-brands fa-facebook"></i>Continuar com Facebook</a>
                        <a href=""class="gg-link"><i class="fa-brands fa-google"></i>Continuar com Google</a>
                        <a href="" class="tw-link"><i class="fa fa-twitter"></i>Continuar com Twitter</a>
                </div>
            </div>
       </div>
    )
}