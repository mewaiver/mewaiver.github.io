---
title: "Ethereum e Amazon QLDB na rastreabilidade automotiva: avaliação arquitetural retrospectiva"
date: "2021-05-04"
updated: "2026-11-19"
category: "blockchain"
type: "whitepaper"
authors:
  - name: "Pedro Duprat"
abstract: >-
  Cadeias de suprimentos automotivas exigem histórico confiável de eventos produzidos por organizações com diferentes responsabilidades e níveis de confiança. Este trabalho revisita um relato de protótipos associados ao contexto da BMW que considerou Ethereum, Amazon QLDB, AWS Lambda e Eclipse Vert.x para registrar e consultar eventos. O objetivo é avaliar quais garantias de auditoria decorrem de cada arquitetura e quais dependem de identidade, governança e integração. A metodologia define atores, fronteiras de confiança, fluxo de registros e critérios comparáveis de custo, latência, disponibilidade e verificabilidade; não presume equivalência entre blockchain pública e banco de dados ledger centralizado. A análise indica que Ethereum oferece validação distribuída e custos de transação dependentes de gas, enquanto QLDB oferecia um diário criptograficamente verificável sob uma autoridade central. Nenhum conjunto de medições, código reproduzível ou evidência de implantação na BMW acompanhou o texto original, logo não é possível afirmar ganhos quantitativos ou adoção em produção. A avaliação é retrospectiva: a AWS encerrou o Amazon QLDB em 31 de julho de 2025, impedindo sua recomendação para novos sistemas. Conclui-se que a escolha do mecanismo de registro deve partir do modelo de confiança e da vida útil do serviço, seguida de experimentos reproduzíveis e de uma política de migração.
keywords: ["blockchain", "Ethereum", "Amazon QLDB", "supply chain", "auditability"]
version: "v1.0"
is_whitepaper: true
bibtex: |
  @techreport{2021-05-04-evaluating-the-feasibility-of-blockchain-solutions,
    title = {Ethereum e Amazon QLDB na rastreabilidade automotiva: avaliação arquitetural retrospectiva},
    author = {Pedro Duprat},
    year = {2021},
    url = {https://www.techchain.com.br/posts/2021-05-04-evaluating-the-feasibility-of-blockchain-solutions},
    note = {Versão v1.0; revisão editorial retrospectiva em 2026-11-19}
  }
---

## 1. Introdução

O rastreamento de componentes automotivos exige responder quem registrou um evento, quando ele foi registrado e se sua história foi alterada. O texto original descrevia protótipos de Ethereum e Amazon QLDB para um caso associado à BMW, mas não apresentava código, configuração, resultados quantitativos ou confirmação independente de implantação. Este documento reorganiza o material como uma avaliação **arquitetural e retrospectiva**, sem atribuir à BMW qualquer adoção operacional.

As contribuições são: (i) distinguir modelos de confiança; (ii) especificar uma metodologia comum de comparação; e (iii) registrar a mudança de viabilidade do QLDB após o encerramento do serviço em 2025 [1]. O escopo cobre trilhas de eventos e integração; não demonstra autenticidade física de peças nem conformidade regulatória.

## 2. Fundamentação e trabalhos relacionados

Em Ethereum, transações assinadas são propagadas à rede e incorporadas a blocos mediante taxas de gas. A finalização decorre do mecanismo de consenso proof-of-stake e de seus critérios de supermaioria [2, 3]. Essa infraestrutura distribui a validação, mas não verifica se o dado inserido por um fornecedor corresponde ao objeto físico. Também não elimina custos de operação, identidade ou privacidade.

O Amazon QLDB foi apresentado pela AWS como um banco ledger com diário imutável e verificável criptograficamente, **administrado por uma autoridade central** [4]. Portanto, a prova de integridade do histórico não equivale ao consenso entre organizações independentes. A AWS lista o serviço entre os encerrados, com data de desligamento em 31 de julho de 2025 [1]. Ele permanece nesta comparação apenas para interpretar o protótipo histórico.

O artigo original menciona AWS Lambda e Eclipse Vert.x como camadas de integração. Sistemas acionados por eventos devem prever entregas duplicadas e operações idempotentes; isso é documentado para eventos Lambda de SQS [5]. Vert.x reduz bloqueio quando suas APIs assíncronas são usadas corretamente, mas chamadas bloqueantes no event loop continuam sendo um risco [6]. Nenhuma dessas tecnologias, isoladamente, garante throughput ou consistência fim a fim.

## 3. Metodologia e arquitetura do sistema

O caso de avaliação define quatro atores: fornecedor que cria o evento, fabricante que recebe o componente, auditor que verifica a sequência e operador da plataforma. Cada evento deve conter identificador de peça, identificador do emissor, tipo, instante, referência ao evento anterior e assinatura do emissor. Dados pessoais e documentos extensos devem permanecer fora de uma cadeia pública; apenas compromissos criptográficos e identificadores mínimos devem ser considerados para ancoragem.

O fluxo proposto recebe o evento por uma API autenticada, valida a assinatura e a política de emissão, grava o registro no mecanismo escolhido, aguarda confirmação conforme a semântica do mecanismo e oferece uma consulta auditável. O protótipo histórico relatou Ethereum e QLDB; o esquema de evento, a política de identidade e a integração transacional entre ambos não foram publicados. Não se deve presumir escrita atômica entre dois ledgers distintos.

**Protocolo de comparação:** aplicar o mesmo conjunto de eventos, taxa de chegada, política de retries e consulta aos dois caminhos históricos. Registrar p50/p95/p99 de inclusão e leitura, eventos/s, custo por milhão de eventos, proporção de retries, tamanho do histórico e tempo de recuperação. Verificar assinaturas e reprocessar eventos duplicados. [TODO: Insert Benchmark Metric / Diagram — carga, custos, latência, falhas induzidas e diagrama de fronteiras de confiança.]

## 4. Avaliação e análise de trade-offs

| Critério | Ethereum público | Amazon QLDB (histórico) | Implicação para o caso |
| --- | --- | --- | --- |
| Autoridade de escrita | Validadores distribuídos e transações assinadas [2, 3] | Operação sob autoridade central da conta AWS [4] | Governança deve corresponder à confiança entre participantes |
| Verificação do histórico | Estado e transações verificáveis na rede | Diário com verificação criptográfica [4] | Integridade do registro não autentica a origem física |
| Custo | Gas por transação, variável [7] | Modelo comercial do serviço, agora encerrado [1] | Comparação monetária atual direta não é possível |
| Privacidade | Dados publicados requerem minimização | Controle de acesso administrado pela autoridade | Dados sensíveis exigem desenho fora do ledger |
| Disponibilidade futura | Depende de rede, clientes e governança | Serviço encerrado em 2025 [1] | QLDB não é opção para novo projeto |

O texto original sugeria alta escalabilidade e confiabilidade, mas não fornecia medições ou artefatos para sustentá-las. A tabela registra propriedades documentadas e implicações de projeto. Ela não é um benchmark. A combinação de Ethereum e QLDB ainda introduziria custo de reconciliação, falhas parciais e duplicidade de eventos; uma política de idempotência e uma fonte de verdade explícita seriam necessárias.

## 5. Limitações e ameaças à validade

Não há dados para reproduzir o protótipo, confirmar a participação operacional da BMW ou medir resultados. A comparação cruza um sistema distribuído público e um ledger centralizado, de modo que a escolha não pode ser reduzida a throughput. Mudanças de protocolo Ethereum desde 2021 tornam avaliações de custos daquela época inadequadas para decisões atuais. O encerramento do QLDB torna qualquer recomendação de nova implantação inválida [1]. Rastreabilidade digital também não comprova, sem controles externos, que uma peça física corresponde ao identificador registrado.

## 6. Conclusão e trabalho futuro

Para o caso histórico, Ethereum e QLDB representavam modelos distintos de confiança e auditoria. A evidência disponível permite explicar esses trade-offs, mas não demonstrar superioridade, ganhos quantitativos ou implantação em produção. Uma avaliação atual deve excluir QLDB de novas implementações, definir governança entre organizações e comparar alternativas suportadas com cargas e custos publicados. Trabalho futuro inclui um protótipo reproduzível, métricas verificáveis e um mecanismo de vínculo entre evento digital e componente físico.

## Referências

1. AWS. [Services in Full Shutdown — Amazon QLDB](https://docs.aws.amazon.com/general/latest/gr/full_shutdown_services.html).
2. Ethereum Foundation. [Transactions](https://ethereum.org/developers/docs/transactions/).
3. Ethereum Foundation. [Proof-of-stake and finality](https://ethereum.org/developers/docs/consensus-mechanisms/pos/).
4. AWS. [Announcing General Availability of Amazon QLDB](https://aws.amazon.com/about-aws/whats-new/2019/09/announcing-general-availability-qldb/).
5. AWS. [Using Lambda with Amazon SQS](https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html).
6. Eclipse Vert.x. [Vert.x Core documentation](https://vertx.io/docs/vertx-core/java/index.html).
7. Ethereum Foundation. [Gas and fees: technical overview](https://ethereum.org/developers/docs/gas/).
