<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Agende agora seu horario com a melhor Barbearia da região, bom para seu bolso e otimo para seu visual!">
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet"/>
    <link rel="stylesheet" href="estilos/style.css">
    <link rel="stylesheet" href="estilos/imprimir.css" media="print">
    <link rel="stylesheet" href="estilos/Agendar/agendar.css">
    <link rel="shortcut icon" href="imagens/favicon.ico" type="image/x-icon">
    <title>Bhorius - Agendar</title>
</head>
<body>
    <header>
        <img src="imagens/logo-bhorius.png" alt="Logo da barbearia">
        <nav>
            <input type="checkbox" name="toggler" id="toggler">
                <label for="toggler"><span class="material-symbols-outlined">
                    menu
                    </span></label>
                <div class="menu">
            <ul>
                <li><a href="index.html" target="_self" rel="prev">Inicio</a></li>
                <li><a href="sobre.html" target="_self" rel="prev">Sobre</a></li>
                <li><a href="produtos.html" target="_self" rel="next">Produtos</a></li>
                <li><a href="https://github.com/esdrasfurmanovicz">Contato</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <article >
            <div class="boa">
                <h1>Otima escolha!</h1>
                <p>Agora só falta agende seu <br> horario e estara tudo pronto!</p>
            </div>
            <div class="agendar">
                <h2>Agende</h2>
                <p>Agende um horario conosco e venha <br> conhecer o seu novo eu! <br> (retire seus produtos no balcão)</p>
                <form>

                  <div class="user-box">
                    <input type="text" name="name" id="name" required>
                    <label for="name">Nome:</label>
                  </div>
                  <div class="user-box">
                    <input type="tel" name="tell" id="tell" required>
                    <label for="tell">Telefone:</label>
                  </div>
                  <div class="user-box">
                    <input type="email" name="mail" id="mail" required>
                    <label for="mail">E-mail</label>
                  </div>
                  <div class="quand">
                    <label for="data">Data:</label>
                    <input type="date" name="data" id="data">
                  </div>
                  <div class="quand">
                    <label for="hora">Horario:</label>
                    <input type="time" name="hora" id="hora">
                  </div>

                  <div class="finish">
                      <input type="submit" value="Enviar">
                      <input type="reset" value="Limpar">
                  </div>
                </form>
              </div>
        </article>
    </main>


    <footer>
        <p>Site feito por <a href="https://github.com/esdrasfurmanovicz" target="_blank">Esdras Furmanovicz.</a></p>
        <p>&#169;Bhorius corp.</p>
    </footer>
</body>
</html>
