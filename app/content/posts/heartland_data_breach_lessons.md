---
title: "Lições Cruciais de Segurança Cibernética"
date: "2015-04-24"
excerpt: "Descubra como a violação de dados da Heartland Payment Systems em 2008 expôs falhas críticas na segurança cibernética e ofereceu lições valiosas para empresas de todos os setores."
category: "security"
author: "Kai Dorneles"
image: "https://plus.unsplash.com/premium_photo-1671751034985-200369f12073?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
---

Qual é a pior coisa que pode acontecer em uma violação de dados? Se você disse milhões de reais em perdas, uma empresa forçada a entrar em hiato, uma série de violações de conformidade e toneladas de má publicidade, então você pode ter trabalhado na Heartland Payment Systems em 2008. (Embora as violações tenham ocorrido ao longo de vários meses em 2008, a empresa não divulgou as descobertas até janeiro de 2009.)

A empresa da Fortune 1000, que se especializa em sistemas de pagamento, ponto de venda e folha de pagamento, sofreu uma das piores violações de dados da história. Aqui está um rápido resumo da violação:

### Os Detalhes

A empresa foi notificada pela primeira vez pela Visa e MasterCard em outubro de 2008 sobre transações suspeitas provenientes de contas processadas pela Heartland. Suspeitando de um ataque cibernético, a Heartland contratou especialistas em forense de cibersegurança para investigar o problema. Levou mais de dois meses para desvendar o mistério.

Os computadores usados para processar transações de pagamento foram comprometidos por um ataque de injeção SQL em 2007. O ataque modificou o código de um script da web, dando aos atacantes acesso a uma página de login da web. O ataque, indetectado por meses enquanto se movia pelo sistema da Heartland, encontrou dados suficientes para criar novos cartões de crédito físicos, incluindo os dados codificados na faixa magnética do cartão.

### O resultado

Em 2009, Albert Gonzalez (mais tarde condenado a 20 anos) e dois parceiros no crime foram indiciados pelo ataque. Mas o dano já estava feito. A Heartland perdeu sua conformidade com o PCI DSS por quatro meses e perdeu centenas de clientes. A perda monetária total para a empresa, incluindo a compensação às vítimas, foi de mais de 200 milhões de dólares. O preço das ações da Heartland caiu 50% dentro de dias após o anúncio da violação, afundando mais de 77% nos meses seguintes. Foi, de longe, o ataque cibernético mais prejudicial publicamente relatado na época.

Aqui estão algumas lições que todos nós podemos aprender com o ataque.

#### Seja transparente

Embora a Heartland tenha descoberto a violação no final de 2008, uma de suas prioridades iniciais foi divulgar a violação ao público da maneira certa. Ela esperou até que as autoridades terminassem sua avaliação inicial. O anúncio ocorreu no Dia da Inauguração do Presidente Barack Obama, em 20 de janeiro de 2009 – fazendo com que críticos acusassem a empresa de tentar enterrar a notícia.

A divulgação pública não é fácil e geralmente resulta em danos. Mas, no final, notificar seus clientes e mantê-los atualizados de maneira honesta e transparente é a melhor maneira de limitar os danos e evitar uma perda total da opinião pública. Também é uma exigência legal. As organizações agora devem divulgar violações ao público dentro de 30 dias após serem descobertas.

#### Responda rapidamente

Uma vez que sua violação é descoberta, você precisa agir rapidamente para conter a violação e fechar quaisquer falhas de segurança potenciais que possam levar a mais ataques. Após o vazamento, a Heartland iniciou um plano para criptografar os dados do cartão no ponto em que é passado, para que não fique tão vulnerável ao se mover por redes.

#### Certifique-se de que todos os sistemas de terceiros estejam seguros, não apenas os servidores de alto perfil

A maioria das empresas foca em seus servidores mais críticos ao considerar a segurança de TI. Mas os atacantes não se importam se eles entram por um servidor de segurança crítico ou por um que controla seu HVAC. Em ataques, todos os terceiros SÃO criados iguais. Mesmo que um fornecedor ou parceiro externo gerencie um sistema menos crítico, certifique-se de que ele esteja seguro.

#### Não confunda conformidade com segurança

Na época da violação, a Heartland estava em conformidade com o PCI DSS. Infelizmente, muitas empresas acreditam que o software de conformidade mínimo é suficiente para mantê-las seguras. Regulamentações como o PCI não podem cobrir as necessidades específicas de cada negócio. Embora estruturas de conformidade e segurança possam ajudar, avalie suas próprias necessidades de segurança de TI, não apenas diretrizes gerais.

#### Lembre-se de que firewalls não são uma garantia

Como a Heartland mostrou, firewalls se tornam essencialmente inúteis uma vez que um usuário entra neles. No ambiente de negócios de hoje, as pessoas são o novo perímetro. Gonzalez entrou em seu sistema e conseguiu passar o tempo que precisasse indetectado porque a Heartland depositou muita fé em sua segurança de nível externo.

Embora essa violação tenha ocorrido há mais de seis anos, as lições que a Heartland aprendeu ainda podem ser aplicadas a qualquer negócio. Adapte-se às novas ameaças que as empresas enfrentam hoje