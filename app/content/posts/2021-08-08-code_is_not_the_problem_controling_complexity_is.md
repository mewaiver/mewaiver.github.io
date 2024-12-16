---
title: "Código não é o problema, complexidade sim"
date: "2021-08-08"
excerpt: "Quando nos aventuramos no mundo da programação, muitas vezes nos deparamos com um dilema que pode ser contraditório à primeira vista: **escrever código não é o problema**, mas controlar a complexidade é."
category: "cloud-computing"
author: "Diego Andrade"
image: "https://cdn.pixabay.com/photo/2019/02/10/08/49/math-3986758_1280.jpg"
---

Quando nos aventuramos no mundo da programação, muitas vezes nos deparamos com um dilema que pode ser contraditório à primeira vista: **escrever código não é o problema**, mas **controlar a complexidade** é. No início, escrever código pode parecer o desafio mais árduo, especialmente quando lidamos com sintaxes e lógica de programação desconhecidas. No entanto, à medida que ganhamos experiência e nossas habilidades técnicas melhoram, percebemos que o verdadeiro desafio não está em escrever o código, mas em como **gerenciá-lo**, **mantê-lo** e **escálá-lo** de maneira eficiente e sustentável.

A complexidade em um sistema de software pode surgir de várias fontes: desde o design e a arquitetura do sistema até a quantidade de código que precisamos gerenciar. A forma como lidamos com essa complexidade pode determinar se o projeto será bem-sucedido ou se se tornará um pesadelo difícil de manter e de evoluir.

Neste artigo, vamos explorar o conceito de **complexidade de software**, discutir as causas desse problema e oferecer algumas abordagens e boas práticas para controlá-la ao longo do ciclo de vida do desenvolvimento de software.

### O que é complexidade de software?

A **complexidade de software** refere-se à dificuldade de entender, modificar ou expandir um sistema de software devido à quantidade de interações e dependências entre suas partes. Em termos simples, trata-se de como um sistema é projetado e como suas várias partes interagem umas com as outras. A complexidade pode ser classificada de várias maneiras, incluindo:

1. **Complexidade Ciclomática**: Mede o número de caminhos lineares independentes em um programa. Quanto mais alto esse número, mais difícil é testar e entender o código.
   
2. **Complexidade de Arquitetura**: Refere-se à complexidade dos componentes de um sistema e como eles interagem. Sistemas com muitas dependências e integrações têm uma arquitetura mais complexa.

3. **Complexidade de Implementação**: Relacionada ao quão difícil é entender o código-fonte. Isso pode ser causado por código desorganizado, mal documentado ou altamente acoplado.

4. **Complexidade de Manutenção**: Surge ao longo do tempo, quando modificações ou melhorias no sistema se tornam mais difíceis devido a uma base de código difícil de entender ou de modificar.

### Como a complexidade afeta o desenvolvimento de software?

Embora escrever código seja a tarefa mais visível no desenvolvimento de software, controlar a complexidade é o que garante que o sistema permaneça saudável, escalável e sustentável ao longo do tempo. A complexidade mal gerida pode resultar em vários problemas:

- **Dificuldade em entender o código**: Quando o código se torna excessivamente complexo, pode ser muito difícil para outros desenvolvedores entenderem o que ele faz e como ele funciona. Isso leva a um aumento nos erros e retrabalho, além de tornar a colaboração entre equipes mais difícil.

- **Aumento do custo de manutenção**: Quanto mais complexo um sistema, mais difícil e caro é mantê-lo. Mudanças e melhorias no sistema podem se tornar arriscadas, pois uma modificação em uma parte do código pode afetar várias outras partes do sistema.

- **Redução da qualidade do software**: A complexidade mal controlada pode resultar em **código frágil**, que tende a quebrar com pequenas alterações. Isso prejudica a qualidade do software e dificulta sua evolução.

- **Desempenho prejudicado**: Sistemas mais complexos geralmente exigem mais recursos para executar. Isso pode resultar em problemas de desempenho, como maior tempo de resposta ou maior consumo de memória.

- **Dificuldade no teste**: Sistemas complexos são mais difíceis de testar. Aumentam as chances de erros não detectados e dificultam a cobertura de testes. Testes unitários, integração e testes de aceitação tornam-se mais difíceis de implementar de maneira eficaz.

### Causas da complexidade

A complexidade de um sistema pode ser resultado de diversos fatores, como:

#### 1. **Falta de Planejamento**

A falta de um planejamento adequado no início do projeto é uma das principais causas de complexidade. Quando as decisões de design não são bem fundamentadas, o código tende a crescer de maneira desordenada, com múltiplas dependências e acoplamentos que tornam o sistema difícil de gerenciar. A arquitetura do sistema deve ser pensada desde o início, de forma modular, escalável e de fácil manutenção.

#### 2. **Código Desorganizado e Acoplado**

Um código **mal estruturado** ou **acoplado** é um grande gerador de complexidade. Se diferentes partes do sistema dependem fortemente umas das outras (acoplamento forte), alterações em uma parte podem afetar várias outras, o que dificulta a manutenção e a expansão do sistema. A falta de **modularização** e a presença de **duplicação de código** são sinais de que o sistema está se tornando cada vez mais complexo e difícil de entender.

#### 3. **Evolução de um Sistema sem Refatoração**

A evolução do software sem uma refatoração constante também pode ser uma causa de complexidade. À medida que novos recursos são adicionados, o código tende a crescer e se tornar cada vez mais difícil de manter. Se não houver esforço para refatorar o código de forma contínua, a base de código se tornará um amontoado de soluções temporárias e "gambiarras" que dificultam a implementação de novos recursos ou a correção de problemas existentes.

#### 4. **Falta de Documentação**

A ausência de uma documentação clara também pode aumentar a complexidade do código. Embora o código deva ser claro e legível por si só, a documentação é essencial para garantir que todos os membros da equipe compreendam a arquitetura, as dependências e as escolhas de design feitas ao longo do desenvolvimento.

### Como controlar a complexidade?

Agora que entendemos as causas da complexidade, é importante explorar como podemos controlá-la e garantir que ela não se torne um problema ao longo do desenvolvimento de software.

#### 1. **Adotar uma Arquitetura Modular**

A modularização é uma das melhores práticas para controlar a complexidade. Ao dividir o sistema em módulos independentes e bem definidos, podemos minimizar o acoplamento entre as partes e garantir que mudanças em uma parte do sistema não afetem outras partes. Arquiteturas como **Microserviços** ou **Domain-Driven Design (DDD)** são bons exemplos de abordagens que incentivam a modularização.

#### 2. **Refatoração Contínua**

Refatorar o código regularmente é essencial para manter a complexidade sob controle. A refatoração permite que o código seja reestruturado sem alterar seu comportamento, melhorando sua legibilidade e simplicidade. Isso pode incluir a eliminação de duplicação de código, a criação de funções menores e mais focadas ou a reorganização da arquitetura do sistema.

#### 3. **Práticas de Codificação Limpa**

Práticas de codificação limpa, como as defendidas no livro *Clean Code* de Robert C. Martin, são fundamentais para controlar a complexidade. Isso inclui escrever código legível, com nomes claros e funções pequenas e coesas. Manter a simplicidade no design e seguir convenções e padrões bem definidos também ajuda a reduzir a complexidade.

#### 4. **Testes Automatizados**

A implementação de testes automatizados é outra maneira de controlar a complexidade. Testes unitários, de integração e de aceitação ajudam a garantir que o código funciona conforme esperado e que mudanças no sistema não introduzam novos problemas. Além disso, a presença de testes facilita a refatoração, pois permite verificar rapidamente se o comportamento do sistema foi preservado.

#### 5. **Documentação e Comunicação**

Embora o código deva ser o mais autoexplicativo possível, a documentação também desempenha um papel fundamental no controle da complexidade. Documentar a arquitetura do sistema, as principais decisões de design e as dependências entre os módulos ajuda a equipe a entender como o sistema funciona e facilita a colaboração. Além disso, boas práticas de comunicação dentro da equipe, como revisões de código e discussões sobre o design, também são essenciais para garantir que a complexidade seja controlada.

### Conclusão

Embora escrever código seja uma habilidade importante para qualquer desenvolvedor, a verdadeira dificuldade está em **controlar a complexidade**. Sistemas de software tendem a crescer e a se tornar mais complexos à medida que novos recursos são adicionados, mas com boas práticas de design, refatoração contínua, testes e documentação, podemos garantir que a complexidade seja mantida sob controle.

O desafio de controlar a complexidade é um dos maiores desafios no desenvolvimento de software e é fundamental para garantir que um sistema seja sustentável, escalável e de fácil manutenção. Portanto, ao focar na **gestão da complexidade**, os desenvolvedores podem garantir que seus projetos não apenas funcionem bem agora, mas também no futuro.