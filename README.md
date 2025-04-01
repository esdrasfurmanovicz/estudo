
# **ESDRAS FURMANOVICZ**  

🇧🇷 **Decidi criar esse portfólio para poder compartilhar um pouco mais da minha vida profissional, como evoluí como Desenvolvedor Web com diversos projetos. Caso queira clonar esse repositório e executá-lo localmente, siga o passo a passo abaixo.**  

🇺🇸 **I decided to create this portfolio to share more about my professional life, how I evolved as a Web Developer with several projects. If you want to clone this repository and run it locally, follow the steps below.**  

---

## **> Passo a passo** / **Step by step**  

**Clone este repositório seguindo o comando abaixo, ou utilize o botão "Code" no início da página, conforme sua preferência.**  
**Clone this repository using the command below, or use the "Code" button at the top of the page, according to your preference.**  

```sh
git clone https://github.com/esdrasfurmanovicz/portfolio.git
```  

**Crie o arquivo `.env`.**  
**Create the `.env` file.**  

```sh
cp .env.example .env
```  

**Via Docker, suba os containers deste repositório.**  
**Using Docker, start the containers for this repository.**  

```sh
docker-compose up -d
```  

**Acesse o container principal via bash ("app", caso não tenha alterado o nome), e instale as dependências do Composer.**  
**Access the main container via bash ("app", if you haven't changed the name), and install Composer dependencies.**  

```sh
docker-compose exec app bash && composer install
```  

**Gere a chave do Laravel.**  
**Generate the Laravel application key.**  

```sh
php artisan key:generate
```  

**Execute as migrações do banco de dados.**  
**Run the database migrations.**  

```sh
php artisan migrate
```  

**Depois disso, o projeto deve rodar sem problemas. 🚀**  
**After that, the project should run without issues. 🚀**  