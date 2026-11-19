---
title: "CANIS: análise arquitetural de um serviço de gestão de chaves com Java e JCA"
date: "2022-06-08"
updated: "2026-11-19"
category: "security"
type: "whitepaper"
authors:
  - name: "Tiago Souza"
abstract: >-
  Sistemas que processam dados sensíveis dependem de políticas verificáveis para geração, armazenamento, uso e rotação de chaves criptográficas. Este trabalho examina a arquitetura descrita para o CANIS, um serviço de gestão de chaves implementado em Java e integrado a aplicações por um protocolo próprio, CANISP. O objetivo é separar as garantias oferecidas pelas APIs da Java Cryptography Architecture (JCA) das garantias que dependem da implementação e da operação do serviço. A metodologia consiste em decompor o fluxo de chaves, identificar fronteiras de confiança, comparar mecanismos de persistência e definir critérios reproduzíveis para uma avaliação futura. A análise indica que JCA oferece interfaces para geração de chaves, cifragem autenticada, assinaturas e repositórios de chaves, mas nenhuma dessas interfaces demonstra, isoladamente, controle de acesso, isolamento de material privado ou resistência à substituição de chaves. O armazenamento em arquivos .dat e o protocolo CANISP, mencionados na descrição original, exigem especificação, revisão e testes independentes antes de sustentar alegações de segurança. São propostos controles para autenticação mútua, trilhas de auditoria, rotação, proteção em repouso e tratamento de falhas. Não foram disponibilizados código, modelo de ameaças formal nem resultados de benchmark; portanto, as conclusões são arquiteturais e não constituem validação empírica do CANIS.
keywords: ["key management", "JCA", "Java", "cryptography", "CANIS"]
version: "v1.0"
is_whitepaper: true
bibtex: |
  @techreport{2022-06-08-java-and-jca-in-the-development-of-canis-key-management-system-kms-a-technical-perspective-md,
    title = {CANIS: análise arquitetural de um serviço de gestão de chaves com Java e JCA},
    author = {Tiago Souza},
    year = {2022},
    url = {https://www.techchain.com.br/posts/2022-06-08-java-and-jca-in-the-development-of-canis-key-management-system-kms-a-technical-perspective.md},
    note = {Versão v1.0; revisão editorial em 2026-11-19}
  }
---

## 1. Introdução

Um serviço de gestão de chaves (KMS) concentra operações cuja falha pode comprometer a confidencialidade e a autenticidade de vários sistemas. O problema central do CANIS é permitir que aplicações usem chaves sem ampliar desnecessariamente o acesso ao material privado. A descrição original relata um serviço Java, um protocolo de integração denominado CANISP e persistência em arquivos `.dat`; não apresenta especificação pública do protocolo, código verificável ou resultados experimentais. Este texto trata esses elementos como **arquitetura relatada**, não como propriedades comprovadas.

As contribuições são: (i) delimitar as responsabilidades de JCA e do serviço; (ii) formular um modelo de ameaças e controles de referência; e (iii) estabelecer critérios de avaliação para uma implementação auditável. A análise cobre geração, armazenamento e uso de chaves. Certificação de módulos criptográficos e validação de produção ficam fora do escopo.

## 2. Fundamentação e trabalhos relacionados

A JCA oferece interfaces extensíveis por provedores para `KeyPairGenerator`, `Cipher`, `Signature` e `KeyStore`. O tipo de repositório, a política de senha e o provedor determinam como o material é protegido; a presença da classe `KeyStore` não prova que a chave privada permaneça inacessível ao processo ou ao operador [1]. A orientação de gestão de chaves do NIST exige considerar ciclo de vida, metadados, acesso, recuperação e comprometimento, além da escolha de algoritmo [2].

Para dados cifrados, um modo autenticado como AES-GCM permite verificar integridade e confidencialidade no mesmo procedimento. A segurança depende, entre outros fatores, de não repetir a combinação chave–IV e de preservar a autenticidade dos metadados associados [1, 3]. Assinaturas digitais verificam a origem de mensagens quando a chave pública utilizada é autenticada; um hash isolado, como SHA-256, detecta diferenças, mas não autentica quem produziu o dado.

## 3. Metodologia e arquitetura do sistema

O fluxo de referência separa quatro papéis: aplicação cliente, serviço CANIS, armazenamento de chaves e operador. A aplicação solicita uma operação por CANISP; o serviço autentica o solicitante, autoriza a operação para uma chave identificada, executa a primitiva criptográfica e registra um evento de auditoria. A especificação de CANISP deve definir formato, versão, autenticação, proteção contra repetição, semântica de erro e transporte seguro. Nada disso pode ser inferido apenas do uso de JCA.

| Fronteira | Ativo ou operação | Controle a verificar | Evidência necessária |
| --- | --- | --- | --- |
| Cliente → CANISP | Pedido de cifragem/assinatura | Identidade, autorização por chave, antirreplay | Especificação e testes de protocolo |
| CANIS → provedor JCA | Chave em uso | Escolha de algoritmo, IV único, limpeza de memória quando aplicável | Código e testes criptográficos |
| CANIS → `.dat`/keystore | Chave privada em repouso | Cifragem, integridade, permissões, backup e rotação | Formato e testes de restauração |
| Operador → CANIS | Administração | Separação de funções e auditoria | Política e logs verificáveis |

O arquivo `.dat` relatado pode ser um contêiner de metadados ou de chaves; o formato não foi publicado. Uma avaliação deve primeiro determinar se material privado é exportável, como a senha mestra é fornecida, onde os segredos residem durante a execução e como ocorre a revogação. Quando o requisito é impedir extração de chaves, uma implementação de `KeyStore` baseada em token ou HSM deve ser comparada a um arquivo local [1].

**Plano de avaliação:** implementar cargas idênticas para geração, assinatura, verificação, cifragem e rotação; registrar versão do JDK, provedor, hardware e tamanho das mensagens. Executar testes de recuperação após falha de energia, acesso não autorizado, troca de chave pública e reutilização de IV. [TODO: Insert Benchmark Metric / Diagram — latência p50/p95/p99, operações/s, taxa de erro e diagrama de confiança.]

## 4. Avaliação e análise de trade-offs

| Alternativa | Benefício verificável | Custo ou risco | Situação neste estudo |
| --- | --- | --- | --- |
| Arquivo `.dat` próprio | Controle do formato | Exige desenho de cifragem, integridade, migração e recuperação | Formato não disponibilizado |
| `KeyStore` PKCS#12 | Formato e API padronizados no JDK | Proteção depende de senha, provedor e operação | Referência de comparação [1] |
| `KeyStore` PKCS#11/HSM | Pode restringir exportação da chave | Custo, disponibilidade e dependência operacional | Não avaliado [1] |
| AES-GCM para dados | Cifragem autenticada | Gestão rigorosa de IV por chave | Controle proposto [1, 3] |

Não há medições de latência, throughput, resistência a ataques ou disponibilidade para o CANIS. Assim, a tabela compara propriedades e obrigações de projeto, não resultados medidos. A complexidade operacional cresce com políticas de rotação, cópias de segurança, alta disponibilidade e integração de clientes; esses custos devem ser medidos antes de afirmar vantagem sobre um KMS gerenciado.

## 5. Limitações e ameaças à validade

A ausência de código, especificação CANISP e artefatos de teste impede verificar a implementação. As propriedades de um provedor JCA não se transferem automaticamente à persistência `.dat`, à rede ou às políticas de acesso. A análise também não cobre proteção física, side channels, comprometimento do host ou requisitos regulatórios específicos. Mudanças de versão do JDK e de provedor podem alterar suporte a algoritmos e desempenho. Qualquer conclusão de segurança ou escalabilidade exige revisão independente e medições reproduzíveis.

## 6. Conclusão e trabalho futuro

Java/JCA fornece mecanismos úteis para implementar o CANIS, mas a segurança de um KMS depende principalmente de protocolo, política de acesso, proteção das chaves e operação auditável. O próximo passo é publicar a especificação CANISP e um modelo de ameaças, substituir afirmações de segurança por testes rastreáveis e comparar o armazenamento atual com PKCS#12 e HSM sob a mesma carga.

## Referências

1. Oracle. [Java Cryptography Architecture Reference Guide](https://docs.oracle.com/en/java/javase/21/security/java-cryptography-architecture-jca-reference-guide.html).
2. NIST. [SP 800-57 Part 1 Rev. 5: Recommendation for Key Management](https://csrc.nist.gov/pubs/sp/800/57/pt1/r5/final).
3. NIST. [SP 800-38D: Galois/Counter Mode (GCM) and GMAC](https://csrc.nist.gov/pubs/sp/800/38/d/final).
