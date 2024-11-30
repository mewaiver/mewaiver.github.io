---
title: "Facebook Virus"
date: "2022-04-04"
excerpt: "Hackers estão usando o Facebook Messenger para espalhar malware que rouba senhas — como se manter seguro."
category: "security"
author: "Diego Andrade"
image: "https://cdn.pixabay.com/photo/2022/04/22/12/05/mail-7149606_1280.png"
---

Uma das melhores e piores coisas sobre plataformas de mídia social como o Facebook é que qualquer um pode lhe enviar uma mensagem. Embora na maioria das vezes essas mensagens não solicitadas venham de antigos colegas de classe e amigos, elas também podem ser enviadas por hackers.

Conforme relatado pelo BleepingComputer, os hackers estão usando uma rede massiva de contas falsas e hackeadas do Facebook para enviar mensagens de phishing com o objetivo final de enganar as pessoas para instalar malware que rouba senhas.

Embora esta nova campanha descoberta pelo Guardio Labs esteja mirando especificamente em contas comerciais do Facebook, ela ainda destaca o risco de abrir e responder a mensagens não solicitadas no Facebook e outras plataformas de mídia social.

### Usando Facebook para phishing

Assim como em outras campanhas de phishing que observamos no passado, esta usa avisos de violação de direitos autorais para chamar a atenção de empresários vulneráveis. No entanto, informações sobre produtos específicos vendidos por uma empresa são outra isca usada nesta campanha.

Após suas mensagens iniciais, os hackers enviam um arquivo em lote como um anexo RAR ou ZIP com a esperança de que usuários desavisados ​​possam baixá-lo e iniciá-lo. Se o fizerem, o arquivo em lote busca um dropper de malware do GitHub para infectar seus sistemas com malware que rouba senhas.

Juntamente com a carga útil, o arquivo em lote também baixa um ambiente Python autônomo que permite que o malware ganhe uma posição em um computador infectado, executando cada vez que o sistema é inicializado. Como o Guardio Labs aponta em uma postagem de blog detalhando suas descobertas, a carga útil tem cinco camadas de ofuscação, o que torna difícil até mesmo para o melhor software antivírus detectá-la.

Após infectar um computador vulnerável, o malware usado nesta campanha coleta todos os cookies e dados de login armazenados no navegador da vítima. Essas informações são então compiladas em um arquivo ZIP e enviadas de volta aos hackers responsáveis ​​usando o Telegram ou a API do bot Discord. No entanto, o malware vai um passo além, limpando todos os cookies do computador da vítima para desconectá-la de suas contas. Isso dá aos hackers o tempo necessário para alterar as senhas de todas as contas da vítima e assumi-las.

De acordo com os pesquisadores do Guardio Labs, cerca de 100.000 mensagens de phishing são enviadas a cada semana visando usuários do Facebook na América do Norte, Europa, Austrália, Japão e Sudeste Asiático. Para piorar a situação, 7% de todas as contas do Facebook Business foram alvos, embora apenas 0,4% tenham baixado o arquivo malicioso usado para infectar seus sistemas com malware.

### Como se manter protegido contra campanhas de phishing que espalham malware

Assim como ao verificar sua caixa de entrada, você precisa ser extremamente cuidadoso ao lidar com mensagens no Facebook e outros sites de mídia social de remetentes desconhecidos.

Para determinar se uma mensagem é genuína ou não, você deve procurar por sinais de alerta, como palavras com erros ortográficos e gramática ruim, além de um senso de urgência. O último é o mais importante, pois os hackers geralmente tentam usar suas emoções contra você para induzi-lo a clicar em suas mensagens ou baixar os anexos que eles lhe enviaram.

Na campanha descrita acima, os hackers responsáveis ​​usaram falsas violações de direitos autorais como um meio de criar um senso de urgência. Os usuários do Facebook Business que estão preocupados em serem atingidos por um processo de direitos autorais podem baixar e abrir o arquivo em lote anexado sem pensar, o que é uma maneira fácil de infectar seus sistemas com malware. Mesmo que você não seja proprietário de uma empresa, não deve abrir nenhum anexo ou mesmo imagens enviadas a você por alguém que você não conhece nas mídias sociais.

O malware pode frequentemente escapar do software antivírus e, por esse motivo, você também pode querer investir em um dos melhores serviços de proteção contra roubo de identidade, pois eles podem ajudá-lo a se recuperar de quaisquer perdas financeiras sofridas como resultado de fraudes ou golpes online.

Com três bilhões de usuários em todo o mundo em agosto deste ano, de acordo com a Statista, o Facebook continua sendo uma das plataformas de mídia social mais populares. Infelizmente, porém, seu tamanho e base de usuários enormes significam que ele provavelmente continuará sendo um tesouro para hackers. No entanto, cabe a você ler suas mensagens com cuidado e evitar abrir e responder a qualquer uma que pareça vir de hackers.