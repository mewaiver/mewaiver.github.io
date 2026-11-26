---
title: "Quantum Computing's Promise Depends on the Problem"
date: "2020-01-04"
excerpt: "Quantum processors can tackle certain calculations in new ways, but useful advantage depends on algorithms, error correction, and honest comparisons with classical computing."
category: "engineering"
author: "Tech Chain Editorial"
image: "https://cdn.pixabay.com/photo/2023/07/08/07/24/ai-generated-8113881_1280.jpg"
---

*Editor's note (November 2026): This article has been revised since its original 2020 publication. The original publication date and URL are retained.*

In 2019, researchers at Google used a 53-qubit processor to sample the output of a specially designed random quantum circuit. The [published experiment](https://www.nature.com/articles/s41586-019-1666-5) was an important test of control over a difficult quantum system. It was not a demonstration that a quantum computer could design a drug or optimize a delivery network. IBM researchers subsequently [proposed a different classical simulation method](https://arxiv.org/abs/1910.09534) for circuits of this kind, illustrating how claims of speed depend on the task and the best available classical comparison.

That distinction is the central issue in quantum computing. Which problems can a quantum machine solve usefully, with an advantage that survives the cost of preparing inputs, controlling errors, and extracting an answer?

## Where the computational difference comes from

A classical bit takes the value 0 or 1. A qubit can be prepared in a superposition whose two possible measurement outcomes have different amplitudes. Several qubits can also be entangled, so their joint state cannot be described as independent states for each qubit. Quantum gates change those amplitudes; an algorithm arranges for interference to suppress unwanted outcomes and make useful ones more likely.

The state space grows rapidly with the number of qubits, but measurement does not reveal all its amplitudes. Reading a register yields an ordinary string of bits. A useful algorithm must exploit the structure of a particular problem to make that limited output informative, often by repeating the circuit and checking its results classically. Superposition alone is therefore no guarantee of a faster answer.

Proposed applications therefore warrant different degrees of confidence. Some quantum algorithms have a clear mathematical advantage under defined assumptions. Other proposals are research programs whose performance on practical instances remains unsettled. Hardware demonstrations, meanwhile, may show excellent control without solving an industrial problem.

## Chemistry offers a plausible target, with a demanding test

Molecules are quantum systems. Computing their electronic behavior accurately can require resources that grow steeply with system size, which makes chemistry and materials science natural candidates for quantum simulation. A quantum processor could encode an approximation of a molecular Hamiltonian, prepare a state, and estimate a property such as its energy. That result would still need to be translated into a chemically meaningful prediction and compared with established classical methods.

The gap between a laboratory calculation and a useful discovery tool is substantial. Researchers have [calculated molecular energies on quantum hardware](https://www.nature.com/articles/s41534-020-0259-3), but small demonstrations often use reduced models or restricted basis sets to fit noisy devices. A [study of molecular nitrogen](https://www.nature.com/articles/s41534-024-00952-4) warns that a low error against an exact answer *within a small chosen basis* does not establish accuracy against experiment. For a catalyst or drug candidate, the relevant test is whether a quantum-assisted calculation predicts a property at useful accuracy, scale, and total cost where strong classical approaches cannot.

Even a successful calculation would be one component of a longer scientific process. Molecular modeling does not replace synthesis, measurement, safety testing, or the many other steps in developing a medicine or material. The potential contribution is narrower and more concrete: better answers to selected simulation problems that are difficult for classical computers.

## Optimization is a separate, less settled proposition

Routing vehicles or scheduling production sounds like an obvious use for a powerful computer, but these are classical optimization problems. A quantum algorithm needs an efficient way to encode the constraints, run enough reliable operations, and return a solution that beats a well-tuned classical solver on the same instances. The time spent preparing a problem and repeating measurements belongs in that comparison.

The quantum approximate optimization algorithm, or QAOA, combines a quantum circuit with a classical loop that adjusts its parameters. It is an active area of research, but a [review of QAOA and its variants](https://arxiv.org/abs/2306.09198) treats whether and when it can outperform classical methods as an open question. A demonstration on a small, simplified graph does not establish an advantage for a logistics network with capacity limits, changing demand, and operational deadlines. For an engineering team, the useful question is not whether a problem can be *expressed* for a quantum processor; it is whether the resulting system improves a measured outcome against the best practical alternative.

## The bottleneck between qubits and useful computation

Physical qubits lose information through interactions with their environment and through imperfect gates and measurements. Errors accumulate as circuits grow deeper. John Preskill's [account of noisy intermediate-scale quantum computing](https://arxiv.org/abs/1801.00862) made the distinction clear: devices with dozens of qubits can support valuable experiments, while their noise limits the algorithms they can run reliably.

Error correction addresses this by encoding a *logical* qubit across multiple physical qubits and repeatedly measuring patterns that reveal likely errors without directly reading the protected information. The method has a cost: extra qubits, gates, measurements, control electronics, and classical decoding. In a [2023 surface-code experiment](https://www.nature.com/articles/s41586-022-05434-1), a larger encoded qubit modestly reduced the logical error rate compared with smaller versions. That was evidence for a key scaling principle, not a fault-tolerant machine ready for large applications.

A credible claim of practical advantage therefore needs more than a physical-qubit count. It needs the logical error rate, circuit depth, runtime, accuracy of the answer, and a classical baseline appropriate to the application. As classical algorithms and hardware improve, the baseline can move. Access through a cloud service may lower the barrier to experimentation, but it does not remove the hardware or error-correction costs behind a useful computation.

## Security has a different timetable

Peter Shor's [quantum algorithm](https://arxiv.org/abs/quant-ph/9508027) shows how a sufficiently capable quantum computer could factor large integers and compute discrete logarithms efficiently. That threatens public-key systems based on those problems, including RSA and widely used elliptic-curve cryptography. It does not mean today's quantum devices can break deployed keys, nor does it mean every cryptographic primitive is affected in the same way.

The defensive response does not require a quantum computer. In 2024, NIST [finalized three post-quantum cryptography standards](https://csrc.nist.gov/news/2024/postquantum-cryptography-fips-approved): FIPS 203 for key establishment and FIPS 204 and 205 for digital signatures. These are algorithms intended to run on classical computers. Migration is an engineering task involving protocol support, software inventories, interoperability, and data that must remain confidential for years. It should not be confused with quantum key distribution, which is a different technology with different infrastructure requirements.

Quantum computing may eventually become valuable for specific scientific or commercial workloads, but its impact will be uneven. Chemistry, optimization, and cryptography pose different questions and demand different evidence. The most useful measure of progress is whether a machine can deliver a trustworthy result for a real problem at a competitive total cost. Until then, careful experiments and strong classical benchmarks are more informative than a catalogue of industries it might one day transform.
