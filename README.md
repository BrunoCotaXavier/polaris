# Projeto Polaris 🧬.

Polaris é o ecosistema de microserviço da Neohubble, onde vou deixar em codigo fonte aberto quase todas as soluções para uso.<br/>
Alguns serviços vão ficar com o codigo fonte sempre livre para quem quiser contribuir ou sla ...<br/>
Atualmente a solução inicial consiste em:
    - Serviço de mensageria Kafka. 👍🏼<br/>
    - Serviço de autenticaçao de usuario. ✍🏼 ...<br/>
    - Serviço de email. 👎🏼<br/>
    - Envio de mensagem (WhatsApp) em lote via API da meta. 👎🏼<br/>


# Rodando projeto local

🔍 obs: lembre-se que o docker é necessario, alem de ter que preencher o docker-compose.yml de forma correta na raiz do projeto. <br/>
Não esqueça de conferir os .env caso existir!<br/>

1. Inicialmente após clonar o projeto acesse a raiz do Polaris e execute: <br/>
    - `docker-compose up --build`
    [isso faz com que o docker cuide do ambiente e dependencia para você]
    - no console você vai conseguir acompanhar e ver se tudo está ok. 
    - caso não estiver "ok" verifique o erro e ajuste as configurações de ambiente.

2. Projeto rodando é só pau no gato. 🧹🐱