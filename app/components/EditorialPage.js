import Link from 'next/link';

const principles = [
  ['Sobre o Tech Chain', 'O Tech Chain publica artigos e análises sobre tecnologia e engenharia de software. O acervo reúne textos de diferentes autores e áreas técnicas.'],
  ['Abordagem editorial', 'A proposta é apresentar ideias com contexto, linguagem clara e utilidade para o leitor. Futuros perfis e entrevistas devem ser identificados pelo formato e sustentados por informações verificáveis.'],
  ['Autoria e atribuição', 'Cada publicação deve exibir sua autoria e data original. Contribuições, entrevistas, opiniões e eventuais relações comerciais precisam ser identificadas com clareza quando aplicáveis.'],
  ['Fontes e verificação', 'Afirmações factuais, dados e resultados merecem fontes adequadas. Para futuras reportagens, a intenção é distinguir declarações de entrevistados, documentos e análises independentes.'],
  ['Correções e transparência', 'Erros podem ser comunicados pelo canal de contato. Alterações substanciais devem preservar a data de publicação e indicar, quando relevante, a atualização do texto.'],
  ['Pautas e contato', 'Sugestões de pauta e pedidos de correção podem ser enviados pela página de contato. O envio de uma sugestão não garante publicação.'],
];

export default function EditorialPage() {
  return <div className="container editorial-page"><div className="page-kicker"><Link href="/" className="backlink">← Página inicial</Link></div><header className="page-intro policy-intro"><span className="eyebrow">Publicação / Princípios editoriais</span><h1>Credibilidade começa nos detalhes.</h1><p>Uma apresentação do Tech Chain e dos princípios que orientam a evolução da publicação.</p></header><div className="policy-grid">{principles.map(([title, copy], index) => <section className="policy-card" key={title}><span className="policy-num">{String(index + 1).padStart(2, '0')}</span><h2>{title}</h2><p>{copy}</p></section>)}</div><section className="policy-callout"><span className="eyebrow">Contato e transparência</span><h2>Uma conversa começa com uma mensagem.</h2><p>Para sugerir uma pauta, indicar uma correção ou entrar em contato sobre um artigo, use o formulário disponível no site.</p><Link href="/contact" className="button-primary">Entrar em contato <span className="arrow" aria-hidden="true">↗</span></Link></section></div>;
}
