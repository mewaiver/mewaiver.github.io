---
title: "Benefícios e desvantagens da arquitetura de microsserviços"
date: "2020-07-04"
excerpt: "A arquitetura de microsserviços é uma abordagem de desenvolvimento de software que divide uma aplicação em serviços menores e independentes, cada um responsável por uma funcionalidade específica. Essa abordagem tem seus benefícios e desvantagens, e considerá-los pode ajudar na tomada de decisões mais informadas."
category: "engineering"
author: "Pedro Duprat"
image: "https://cdn.pixabay.com/photo/2023/01/03/08/12/bitcoin-7693848_1280.png"
draft: false
---

### Benefícios da arquitetura de microsserviços
A arquitetura de microsserviços tem os seguintes benefícios:

- Ela permite a entrega e implantação contínuas de aplicativos grandes e complexos.
- Os serviços são pequenos e de fácil manutenção.
- Os serviços são implantáveis ​​de forma independente.
- Os serviços são escaláveis ​​de forma independente.
- A arquitetura de microsserviços permite que as equipes sejam autônomas.
- Ela permite fácil experimentação e adoção de novas tecnologias.
- Ela tem melhor isolamento de falhas.

#### Implantação contínua de aplicações
O benefício mais importante da arquitetura de microsserviços é que ela permite a entrega e a implantação contínuas de aplicativos grandes e complexos. A entrega contínua faz parte do DevOps, um conjunto de práticas para a
entrega rápida, frequente e confiável de software. 
Organizações DevOps de alto desempenho normalmente implantam mudanças em produção com muito poucos problemas de produção.
Existem três maneiras pelas quais a arquitetura de microsserviços permite a entrega contínua:
- Ela tem a testabilidade exigida pela entrega/implantação contínua — O teste automatizado é
uma prática essencial da entrega/implantação contínua. Como cada serviço em uma
arquitetura de microsserviços é relativamente pequeno, os testes automatizados são muito mais fáceis de
escrever e mais rápidos de executar. Como resultado, o aplicativo terá menos bugs.
- Ele tem a capacidade de implantação necessária para entrega/implantação contínua — Cada serviço pode
ser implantado independentemente de outros serviços. Se os desenvolvedores responsáveis ​​por um
serviço precisarem implantar uma mudança que seja local para esse serviço, eles não precisam
coordenar com outros desenvolvedores. Eles podem implantar suas mudanças. Como resultado,
é muito mais fácil implantar mudanças com frequência na produção.
- Ele permite que as equipes de desenvolvimento sejam autônomas e fracamente acopladas — Você pode estruturar
a organização de engenharia como uma coleção de pequenas (por exemplo, duas pizzas)
equipes. Cada equipe é a única responsável pelo desenvolvimento e implantação de
um ou mais serviços relacionados. Como mostra a figura 1.8, cada equipe pode desenvolver, implantar
e dimensionar seus serviços independentemente de todas as outras equipes. Como resultado, a
velocidade de desenvolvimento é muito maior.

##### A capacidade de fazer entrega e implantação contínuas tem vários benefícios comerciais:
- Reduz o tempo de comercialização, o que permite que a empresa reaja rapidamente ao feedback dos clientes.
- Permite que a empresa forneça o tipo de serviço confiável que os clientes de hoje esperam.
- A satisfação dos funcionários é maior porque mais tempo é gasto entregando recursos valiosos em vez de apagar incêndios.


#### Cada serviço é pequeno e fácil de manter  
Outro benefício da arquitetura de microserviços é que cada serviço é relativamente pequeno. O código é mais fácil de entender para um desenvolvedor. A pequena base de código não desacelera o IDE, tornando os desenvolvedores mais produtivos. E cada serviço geralmente inicia muito mais rápido do que um grande monólito, o que também torna os desenvolvedores mais produtivos e acelera as implantações.

#### Serviços são escaláveis independentemente  
Cada serviço em uma arquitetura de microserviços pode ser escalado independentemente de outros serviços, utilizando clonagem no eixo X e particionamento no eixo Z. Além disso, cada serviço pode ser implantado em hardware que seja mais adequado às suas necessidades de recursos. Isso é bem diferente de quando se utiliza uma arquitetura monolítica, onde componentes com requisitos de recursos muito diferentes—por exemplo, intensivos em CPU vs. intensivos em memória—devem ser implantados juntos.

#### Melhor isolamento de falhas  
A arquitetura de microserviços possui um melhor isolamento de falhas. Por exemplo, um vazamento de memória em um serviço afeta apenas aquele serviço. Outros serviços continuarão a lidar com as solicitações normalmente. Em comparação, um componente com mau funcionamento em uma arquitetura monolítica derrubará todo o sistema.

#### Fácil experimentação e adoção de novas tecnologias  
Por último, mas não menos importante, a arquitetura de microserviços elimina qualquer compromisso de longo prazo com uma pilha de tecnologia. Em princípio, ao desenvolver um novo serviço, os desenvolvedores são livres para escolher qualquer linguagem e frameworks que sejam mais adequados para aquele serviço. Em muitas organizações, faz sentido restringir as escolhas, mas o ponto chave é que você não está limitado por decisões passadas. Além disso, como os serviços são pequenos, reescrevê-los usando linguagens e tecnologias melhores se torna prático. Se a experiência com uma nova tecnologia falhar, você pode descartar esse trabalho sem arriscar todo o projeto. Isso é bem diferente de quando se utiliza uma arquitetura monolítica, onde suas escolhas iniciais de tecnologia restringem severamente sua capacidade de usar diferentes linguagens e frameworks no futuro.


### Desvantagens da arquitetura de microserviços  
Certamente, nenhuma tecnologia é uma solução mágica, e a arquitetura de microserviços tem uma série de desvantagens e problemas significativos. De fato, a maior parte deste livro é sobre como abordar essas desvantagens e problemas. À medida que você lê sobre os desafios, não se preocupe. Mais adiante neste livro, descreverei maneiras de abordá-los.  
Aqui estão as principais desvantagens e problemas da arquitetura de microserviços:  
- Encontrar o conjunto certo de serviços é desafiador.  
- Sistemas distribuídos são complexos, o que torna o desenvolvimento, teste e implantação difíceis.  
- Implantar recursos que abrangem vários serviços requer coordenação cuidadosa.  
- Decidir quando adotar a arquitetura de microserviços é difícil.  
Vamos analisar cada um deles.  

#### Encontrar os serviços certos é desafiador  
Um desafio ao usar a arquitetura de microserviços é que não existe um algoritmo concreto e bem definido para decompor um sistema em serviços. Assim como em grande parte do desenvolvimento de software, é algo que envolve um pouco de arte. Para piorar, se você decompor um sistema incorretamente, você construirá um monólito distribuído, um sistema composto por serviços acoplados que devem ser implantados juntos. Um monólito distribuído tem as desvantagens tanto da arquitetura monolítica quanto da arquitetura de microserviços.  

#### Sistemas distribuídos são complexos  
Outro problema ao usar a arquitetura de microserviços é que os desenvolvedores devem lidar com a complexidade adicional de criar um sistema distribuído. Os serviços devem usar um mecanismo de comunicação entre processos. Isso é mais complexo do que uma simples chamada de método. Além disso, um serviço deve ser projetado para lidar com falhas parciais e lidar com o serviço remoto que pode estar indisponível ou apresentando alta latência.  
Implementar casos de uso que abrangem vários serviços requer o uso de técnicas não familiares. Cada serviço tem seu próprio banco de dados, o que torna desafiador implementar transações e consultas que abrangem serviços. Como descrito no capítulo 4, uma aplicação baseada em microserviços deve usar o que é conhecido como sagas para manter a consistência dos dados entre os serviços. O capítulo 7 explica que uma aplicação baseada em microserviços não pode recuperar dados de vários serviços usando consultas simples. Em vez disso, deve implementar consultas usando composição de API ou visões CQRS.  

IDEs e outras ferramentas de desenvolvimento estão focadas na construção de aplicações monolíticas e não oferecem suporte explícito para o desenvolvimento de aplicações distribuídas. Escrever testes automatizados que envolvem vários serviços é desafiador. Esses são todos problemas específicos da arquitetura de microserviços. Consequentemente, os desenvolvedores da sua organização devem ter habilidades sofisticadas em desenvolvimento e entrega de software para usar microserviços com sucesso.  
A arquitetura de microserviços também introduz uma complexidade operacional significativa. Muitas mais partes móveis—múltiplas instâncias de diferentes tipos de serviço—devem ser gerenciadas em produção. Para implantar microserviços com sucesso, você precisa de um alto nível de automação. Você deve usar tecnologias como as seguintes:  
- Ferramentas de implantação automatizadas, como Netflix Spinnaker  
- Um PaaS pronto para uso, como Pivotal Cloud Foundry ou Red Hat OpenShift  
- Uma plataforma de orquestração Docker, como Docker Swarm ou Kubernetes  

#### Implantar recursos que abrangem vários serviços requer coordenação cuidadosa  
Outro desafio ao usar a arquitetura de microserviços é que implantar recursos que abrangem vários serviços requer coordenação cuidadosa entre as várias equipes de desenvolvimento. Você precisa criar um plano de implantação que ordene as implantações de serviços com base nas dependências entre os serviços. Isso é bem diferente de uma arquitetura monolítica, onde você pode facilmente implantar atualizações em vários componentes de forma atômica.

#### Decidir quando adotar é difícil  
Outro problema ao usar a arquitetura de microserviços é decidir em que ponto durante o ciclo de vida da aplicação você deve usar essa arquitetura. Ao desenvolver a primeira versão de uma aplicação, muitas vezes você não tem os problemas que essa arquitetura resolve. Além disso, usar uma arquitetura distribuída elaborada pode desacelerar o desenvolvimento. Isso pode ser um grande dilema para startups, onde o maior problema geralmente é como evoluir rapidamente o modelo de negócios e a aplicação correspondente.  
Usar a arquitetura de microserviços torna muito mais difícil iterar rapidamente. Uma startup deve quase certamente começar com uma aplicação monolítica.  
Mais tarde, no entanto, quando o problema é como lidar com a complexidade, é quando faz sentido decompor funcionalmente a aplicação em um conjunto de microserviços. Você pode achar a refatoração difícil devido a dependências emaranhadas.

#### Conclusão
A adoção da arquitetura de microsserviços pode trazer vantagens significativas em termos de escalabilidade e agilidade, mas também impõe desafios relacionados à complexidade e à gestão. As organizações devem avaliar suas necessidades específicas, a maturidade de suas equipes e a infraestrutura disponível antes de decidir pela implementação dessa abordagem. Uma análise cuidadosa pode ajudar a maximizar os benefícios enquanto se minimizam as desvantagens.