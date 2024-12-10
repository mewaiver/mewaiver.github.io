---
title: "Avaliando soluções de blockchain na BMW"
date: "2021-05-04"
excerpt: "Este artigo avalia a viabilidade de soluções de blockchain, focando em Ethereum e AWS QLDB. Através de uma análise detalhada, discutimos como essas tecnologias podem otimizar processos e melhorar a transparência na cadeia de suprimentos automotiva."
category: "abstract"
author: "Pedro Duprat"
image: "https://cdn.pixabay.com/photo/2021/05/22/06/53/btc-6272696_1280.jpg"
---

A tecnologia blockchain tem emergido como uma inovação disruptiva, oferecendo soluções para desafios complexos em diversos setores, incluindo o automotivo. Sua capacidade de criar registros imutáveis e transparentes tem atraído atenção crescente de empresas que buscam melhorar a eficiência, segurança e confiança em suas operações. No contexto do setor automotivo, o blockchain tem sido particularmente relevante para o gerenciamento da cadeia de suprimentos, a integridade dos dados e a promoção da transparência. A natureza descentralizada e à prova de alterações do blockchain torna-o ideal para rastrear componentes ao longo da cadeia de suprimentos, desde a fabricação até a entrega final, garantindo a autenticidade e a conformidade com normas regulatórias. Além disso, a tecnologia facilita a troca de informações entre diferentes partes de forma segura e eficiente, mitigando riscos como fraudes ou erros na documentação. À medida que o mercado automotivo se torna cada vez mais global e digitalizado, o blockchain oferece uma solução poderosa para otimizar processos, reduzir custos e aumentar a confiança entre fornecedores, fabricantes e consumidores.

### Resumo

Este trabalho apresentou uma análise e protótipos desenvolvidos para avaliar a viabilidade do uso de blockchain, especificamente AWS QLDB (Quantum Ledger Database) e Ethereum, na criação de aplicações confiáveis e seguras para a BMW. O objetivo central é explorar como essas tecnologias podem ser aplicadas para garantir que os registros de dados, uma vez salvos no "ledger", sejam imutáveis, auditáveis e transparentes, contribuindo para a integridade e a confiança nas informações ao longo da cadeia de suprimentos e operações internas.

Os protótipos construídos envolvem a configuração de nós em redes blockchain, utilizando a plataforma Ethereum, para garantir a integridade dos dados em tempo real. Além disso, foi implementada a utilização de AWS QLDB para armazenar e consultar registros de forma escalável e com alto desempenho, enquanto as Lambda Functions da AWS foram utilizadas para garantir a comunicação eficiente entre as camadas de blockchain e os sistemas corporativos da BMW. A análise da viabilidade incluiu a consideração de fatores como segurança, custos operacionais, escalabilidade e a integração com os sistemas existentes da empresa. Os resultados demonstraram que a combinação de AWS QLDB e Ethereum pode fornecer uma base robusta e escalável para o gerenciamento de dados de forma segura e transparente, com potencial para ser adotada em diversos processos da cadeia de valor da BMW, desde o rastreamento de componentes até a validação de transações financeiras e logísticas.

Este estudo oferece insights valiosos sobre as possibilidades e desafios da adoção de blockchain no setor automotivo, e propõe uma abordagem prática para integrar essas tecnologias em ambientes corporativos complexos.

### O que é o blockchain ?

Blockchain é uma tecnologia de registro distribuído que permite armazenar informações de forma segura e transparente em uma rede de computadores. Ao invés de depender de uma autoridade central, como um banco ou governo, para validar e registrar transações, o blockchain funciona de forma descentralizada, com múltiplos participantes (ou nós) validando as informações coletadas.

As principais características do blockchain são:

1. **Descentralização**: Não há um ponto central de controle. Em vez disso, a validação das transações ocorre por meio de uma rede distribuída de nós, o que torna o sistema mais resiliente a falhas e ataques.

2. **Imutabilidade**: Uma vez que uma transação é registrada em um bloco e inserida na cadeia, ela não pode ser alterada ou apagada sem que toda a rede concorde. Isso garante a integridade dos dados e evita fraudes ou manipulações.

3. **Transparência**: Todas as transações registradas no blockchain são visíveis para todos os participantes da rede, tornando o processo altamente transparente. Isso aumenta a confiança, pois qualquer um pode verificar o histórico de transações a qualquer momento.

Essas características tornam o blockchain uma tecnologia poderosa para aplicações que exigem segurança, rastreabilidade e confiança, como no gerenciamento da cadeia de suprimentos, registros financeiros e contratos inteligentes.

### Sobre as tecnologias utilizadas 

Na criação dos protótipos para a solução de blockchain da BMW, a escolha das tecnologias foi guiada pela necessidade de combinar **segurança, transparência e escalabilidade** para o gerenciamento de dados e transações. Optamos por utilizar o **Ethereum** e o **AWS QLDB** devido às suas características complementares, que atendem aos requisitos de integridade e auditabilidade dos dados ao longo da cadeia de suprimentos.

O **Ethereum** foi selecionado por ser uma plataforma amplamente adotada para a criação de **contratos inteligentes** e pela sua capacidade de fornecer uma infraestrutura descentralizada, transparente e imutável, ideal para garantir a confiança nas transações. Sua flexibilidade para executar contratos programáveis oferece uma base robusta para rastrear dados de forma segura e transparente, o que é essencial em um ambiente corporativo dinâmico como o automotivo.

Por outro lado, o **AWS QLDB** foi escolhido para complementar o Ethereum, oferecendo um banco de dados centralizado com um **ledger imutável** e altamente escalável, ideal para armazenar e consultar transações de forma eficiente. Sua integração nativa com outros serviços AWS e a garantia de consistência transacional tornam o QLDB uma opção atraente para manter a integridade dos dados de maneira rápida e segura, sem a complexidade de uma rede blockchain pública.

Essa combinação de **Ethereum** e **QLDB** nos protótipos permitiu aproveitar o melhor dos dois mundos: a transparência e imutabilidade do Ethereum, junto à performance e escalabilidade do QLDB, criando uma solução eficaz para o gerenciamento de dados em ambientes corporativos e industriais.

#### Ethereum

**Ethereum** é uma plataforma blockchain descentralizada que permite o desenvolvimento e a execução de **contratos inteligentes** (smart contracts) e **aplicações descentralizadas** (dApps). Lançado em 2015 por Vitalik Buterin e outros desenvolvedores, Ethereum expandiu as capacidades do blockchain além de transações financeiras, permitindo a criação de aplicativos autônomos que operam sem a necessidade de intermediários.

As principais características do Ethereum incluem:

1. **Contratos Inteligentes**: São contratos autoexecutáveis cujas condições são programadas diretamente no código. Quando as condições do contrato são atendidas, a ação é automaticamente executada sem a intervenção de uma autoridade central. Isso garante a automação de processos e a redução de custos operacionais.

2. **Ether (ETH)**: O Ethereum utiliza sua criptomoeda nativa, o **Ether (ETH)**, para realizar transações e pagar por serviços na rede, como a execução de contratos inteligentes. O Ether também é utilizado como "combustível" para validar e minerar transações dentro da plataforma.

3. **Descentralização**: Assim como outras blockchains, o Ethereum é descentralizado, ou seja, não depende de uma entidade central para validar e registrar transações. Isso é feito por meio de uma rede de nós distribuídos globalmente.

4. **Máquina Virtual Ethereum (EVM)**: A EVM é o ambiente de execução que processa os contratos inteligentes na rede Ethereum. Ela garante que os contratos sejam executados de forma consistente em toda a rede, independentemente da máquina ou sistema operacional em que os nós estão operando.

5. **DApps (Aplicações Descentralizadas)**: O Ethereum facilita o desenvolvimento de **dApps**, que são aplicativos baseados na blockchain que operam sem a necessidade de servidores centralizados. Esses aplicativos são imutáveis, transparentes e operam de forma confiável devido à infraestrutura do Ethereum.

6. **Escalabilidade e Atualizações (Ethereum 2.0)**: O Ethereum está passando por uma atualização significativa conhecida como **Ethereum 2.0**, que visa melhorar a escalabilidade, segurança e eficiência energética da rede. A principal mudança é a transição do modelo de consenso de **Prova de Trabalho (PoW)** para **Prova de Participação (PoS)**, o que deve reduzir o consumo de energia e aumentar a capacidade de transações por segundo.

#### QLDB (Quantum Ledger Database)

**AWS QLDB (Quantum Ledger Database)** é um serviço de banco de dados gerenciado pela Amazon Web Services (AWS), projetado para oferecer um **registro imutável e transparente** de transações, mantendo a **integridade dos dados** ao longo do tempo, sem a complexidade e a escalabilidade de uma blockchain pública como o Ethereum. O QLDB é ideal para casos de uso onde há a necessidade de um banco de dados centralizado, mas com características de imutabilidade e auditabilidade típicas de uma blockchain.

##### Características principais do QLDB:

1. **Imutabilidade e Transparência**: Assim como uma blockchain, o QLDB mantém um **histórico imutável** de todas as transações. Cada modificação no banco de dados é registrada em um **ledger** (livro de registros) e não pode ser alterada ou apagada, garantindo a integridade dos dados. Isso é útil para auditoria e rastreamento de mudanças, especialmente em setores como finanças, saúde, e logística.

2. **Centralizado, mas com características de blockchain**: Diferente de blockchains públicas como o Ethereum, o QLDB é um **banco de dados centralizado** administrado pela AWS. Isso significa que ele é controlado por uma autoridade única (AWS), o que facilita a gestão e o desempenho, sem a complexidade de uma rede descentralizada. Porém, ele mantém os benefícios de um ledger imutável e auditável.

3. **Escalabilidade e Desempenho**: O QLDB foi projetado para ser altamente escalável e de alto desempenho, com o benefício de ser totalmente gerenciado pela AWS. Isso permite que as empresas integrem um sistema de ledger imutável sem se preocupar com a infraestrutura subjacente, mantendo uma experiência de uso consistente e de baixa latência.

4. **Facilidade de integração**: O QLDB oferece suporte nativo a **SQL** e APIs integradas para facilitar a integração com outros sistemas e aplicativos existentes. Isso é especialmente útil para empresas que já utilizam serviços AWS, pois permite uma implementação rápida e sem grandes reconfigurações de arquitetura.

5. **Transações e Consultas**: O QLDB suporta transações de múltiplas etapas e consultas complexas, permitindo que os desenvolvedores realizem operações de leitura e escrita com segurança e consistência. Ele também oferece **visibilidade completa** do histórico de registros, o que pode ser crucial em auditorias e verificações de conformidade.

6. **Consistência e Garantias de Ordem**: O QLDB fornece **garantias de consistência transacional** (ACID), o que significa que as transações são processadas de forma confiável, mantendo a integridade dos dados mesmo em casos de falhas. Além disso, ele preserva a **ordem temporal das transações**, garantindo que o histórico de mudanças no banco de dados seja sempre acessível de forma sequencial.

### Metodologia

Ao desenvolver a solução de integração blockchain para a BMW, levei em consideração a escalabilidade e o desempenho como fatores cruciais para garantir uma operação eficiente e de baixo custo, especialmente em ambientes corporativos de grande porte. Para atender a esses requisitos, optei por utilizar um framework reativo com **Vert.x**, que oferece alta performance e suporte para processamento assíncrono de transações. O Vert.x permite gerenciar de forma eficiente múltiplas transações simultâneas, aproveitando a natureza não-bloqueante do modelo reativo, o que reduz o tempo de latência e melhora a escalabilidade do sistema.

Essa escolha foi fundamental para otimizar a comunicação entre os diversos componentes da aplicação, como a interação com a rede blockchain (Ethereum e AWS QLDB) e o gerenciamento de dados em tempo real. O uso do Java com Eclipse Vert.x também facilitou o manuseio de grandes volumes de transações e a integração assíncrona com sistemas externos, garantindo que as operações de blockchain sejam processadas de forma eficiente e sem sobrecarregar os recursos do sistema, mesmo em cenários de alto tráfego. Isso assegurou que a solução fosse escalável, ágil e capaz de se adaptar ao crescimento da demandas no futuro.

### Resultados e Desafios

Os resultados obtidos nessa pesquisas foram impressionantes, mesmo que ambos, Ethereum e QLDB, não sejam exatamente um banco de
dados, o uso de processos assincronos permitiu com que o uso dos mesmo para um grande quantidade de usuários pudesse trazer
grandes beneficios, pois for possivel criar aplicações altamente confiaveis, auditaveis e desentralizadas.

Os maios desafios encontrados, foram o fato de que não existem muitas bibliotecas disponiveis, sendo a mais madura
delas o Web3j, que embora tinha grande suporte da comunidade, ainda existinam alguns pontos de melhoria, o que poderia
comprometer a segrança. Existia também a alta complexidade de configuração de um rede P2P seja ela privada ou publica
no que diz respeito a infraestrutuara e segurança.

### Principais Conclusões da Avaliação

1. **Viabilidade das Soluções**: Tanto o Ethereum quanto o AWS QLDB demonstraram ser viáveis para aplicações no setor automotivo, oferecendo características que promovem a confiabilidade e a auditabilidade das transações.
  
2. **Benefícios de Processos Assíncronos**: O uso de processos assíncronos permitiu que ambas as tecnologias suportassem um grande número de usuários, resultando em aplicações descentralizadas que podem melhorar a eficiência operacional.

3. **Desafios Técnicos**: A escassez de bibliotecas maduras e a complexidade na configuração de redes P2P foram identificadas como desafios significativos que precisam ser abordados para uma adoção mais ampla.

## Conclusão

Explorar tecnologias inovadoras como blockchain no setor automotivo é crucial para enfrentar os desafios contemporâneos, como a necessidade de maior transparência, segurança e rastreabilidade nas cadeias de suprimento. A adoção dessas soluções pode não apenas otimizar processos internos, mas também criar novas oportunidades de negócios, melhorando a confiança do consumidor e a integridade dos dados. A inovação contínua é essencial para que as empresas se mantenham competitivas em um mercado em rápida evolução.


