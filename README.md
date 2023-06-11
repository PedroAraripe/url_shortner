# Url Shortner

## Descrição
Esta aplicação é uma plataforma de encurtamento de url's. Ela utiliza o Docker para containerização,
vue no front-end como pwa (aplicação web progressiva), node no back-end e postgre como banco de dados, permitindo fácil implantação e escalabilidade.

## Pré-requisitos
Certifique-se de ter o seguinte instalado em sua máquina:

* [Docker](https://www.docker.com/get-started/)

## Instalação
1. Clone o repositório:
```bash
git clone https://github.com/PedroAraripe/url_shortner.git
```

2. Navegue até o diretório do projeto:
```bash
cd url_shortner
```

3. Montar a imagem do docker
```bash
docker-compose build
```

4. Executar imagem do docker criada no passo anteriormente, inicializando assim a aplicação
```bash
docker-compose up -d
```

## Informações Adicionais
* [Documentação do Docker](https://docs.docker.com/)
* [Documentação Docker Compose](https://docs.docker.com/compose/)

## Solução de Problemas
Se você encontrar algum problema durante a instalação ou execução da aplicação, tente o seguinte:

1. Verifique se o Docker está instalado e em execução corretamente.
2. Verifique se as portas necessárias não estão sendo usadas por outras aplicações.
3. Verifique se o repositório foi clonado corretamente e se você está no diretório do projeto correto.
4. Consulte a documentação da aplicação ou procure ajuda na comunidade ou com os desenvolvedores.
