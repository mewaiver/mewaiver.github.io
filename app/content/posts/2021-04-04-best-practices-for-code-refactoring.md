---
title: "Como melhorar a qualidade e a manutenção do seu software"
date: "2021-04-04"
excerpt: "Refatorar código é essencial para garantir a qualidade e a manutenibilidade de um software ao longo do tempo. Neste post, exploramos as melhores práticas para refatoração, como manter uma suíte de testes, refatorar em pequenos passos e aplicar princípios de design para melhorar a legibilidade e eficiência do código, sem alterar seu comportamento."
category: "engineering"
author: "Diego Andrade"
image: "https://cdn.pixabay.com/photo/2020/05/30/10/01/update-5238354_1280.jpg"
---

Refatorar código é essencial para garantir a qualidade e a manutenção de um software ao longo do tempo. Neste post, exploramos as melhores práticas para refatoração, com exemplos em Java para ilustrar como melhorar a legibilidade, estrutura e eficiência do seu código.

### 1. **Mantenha os Testes**

Antes de iniciar a refatoração, é crucial garantir que haja uma suíte de testes automatizados em vigor. Isso ajuda a verificar que o comportamento do sistema não foi alterado após a refatoração. No Java, você pode usar frameworks como JUnit para garantir que seus testes sejam executados corretamente.

**Exemplo:**

Antes da refatoração:

```java
public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }
}
```

Suíte de testes com JUnit:

```java
import static org.junit.jupiter.api.Assertions.*;

public class CalculatorTest {
    @Test
    public void testAdd() {
        Calculator calculator = new Calculator();
        assertEquals(5, calculator.add(2, 3));
    }
}
```

### 2. **Refatore em Pequenos Passos**

Refatorar o código em pequenos incrementos permite que você teste cada mudança de maneira isolada. Isso facilita a identificação de problemas, caso eles surjam.

**Exemplo:**

Suponha que você tenha um método que realiza várias operações dentro de um único método. Em vez de refatorar tudo de uma vez, faça a refatoração em partes:

Antes da refatoração:

```java
public class Order {
    public double calculateTotalPrice(double price, int quantity, double discount) {
        double total = price * quantity;
        total -= total * discount;
        total = applyTax(total);
        return total;
    }

    private double applyTax(double price) {
        return price * 1.1; // aplicação de 10% de imposto
    }
}
```

Então para refatoração em pequenos passos, crie um método separado para calcular o desconto:
   
```java
public class Order {
    public double calculateTotalPrice(double price, int quantity, double discount) {
        double total = price * quantity;
        total -= calculateDiscount(total, discount);
        total = applyTax(total);
        return total;
    }

    private double calculateDiscount(double price, double discount) {
        return price * discount;
    }

    private double applyTax(double price) {
        return price * 1.1;
    }
}
```

### 3. **Não Faça Mudanças Desnecessárias**

Durante a refatoração, evite mudar partes do código que não afetam a funcionalidade. O objetivo é melhorar o código sem introduzir riscos ou mudanças desnecessárias.

**Exemplo:**

Antes da refatoração:

```java
public class Employee {
    private String name;
    private double salary;

    public void setName(String name) {
        this.name = name;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }

    public double calculateSalary() {
        return salary;
    }
}
```

Se o cálculo de salário não precisa ser alterado, evite mudanças desnecessárias. Refatore apenas o que for necessário, como renomear variáveis ou melhorar a legibilidade.

```java
public class Employee {
    private String name;
    private double salary;

    public void setName(String name) {
        this.name = name;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }

    public double getSalary() {
        return salary;
    }
}
```

### 4. **Aplicar os Princípios de Design de Software**

A refatoração deve melhorar a aderência aos princípios de design, como o SOLID, para criar código modular e fácil de manter.

**Exemplo:**

Antes da refatoração (Violando o Princípio da Responsabilidade Única - SRP):

```java
public class Invoice {
    public void printInvoice() {
        // código para gerar e imprimir a fatura
    }

    public void saveInvoiceToDatabase() {
        // código para salvar a fatura no banco de dados
    }
}
```

Refatoração aplicando o SRP:

```java
public class Invoice {
    private InvoicePrinter printer;
    private InvoiceRepository repository;

    public Invoice(InvoicePrinter printer, InvoiceRepository repository) {
        this.printer = printer;
        this.repository = repository;
    }

    public void processInvoice() {
        printer.print(this);
        repository.save(this);
    }
}

class InvoicePrinter {
    public void print(Invoice invoice) {
        // código para gerar e imprimir a fatura
    }
}

class InvoiceRepository {
    public void save(Invoice invoice) {
        // código para salvar a fatura no banco de dados
    }
}
```

### 5. **Renomeação Clara e Consistente**

Um bom nome de variável ou método torna o código mais legível e fácil de entender. Durante a refatoração, aproveite para melhorar a clareza dos nomes.

**Exemplo:**

Antes da refatoração:

```java
public class User {
    private String n;
    private String em;

    public String getN() {
        return n;
    }

    public String getEm() {
        return em;
    }
}
```

Refatoração com nomes mais claros:

```java
public class User {
    private String name;
    private String email;

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }
}
```

### 6. **Evitar a Complexidade Desnecessária**

A refatoração deve buscar simplificar o código, eliminando redundâncias ou lógicas complexas.

**Exemplo:**

Antes da refatoração:

```java
public class DiscountCalculator {
    public double calculateDiscount(double price, String discountType) {
        if (discountType.equals("percentage")) {
            return price * 0.1;
        } else if (discountType.equals("fixed")) {
            return 10;
        } else {
            return 0;
        }
    }
}
```

Refatoração para simplificar a lógica:

```java
public class DiscountCalculator {
    public double calculateDiscount(double price, DiscountType discountType) {
        switch (discountType) {
            case PERCENTAGE:
                return price * 0.1;
            case FIXED:
                return 10;
            default:
                return 0;
        }
    }
}

enum DiscountType {
    PERCENTAGE, FIXED
}
```

### 7. **Refatoração Contínua**

Refatoração contínua não é um evento único, mas um processo contínuo. À medida que o sistema evolui, novas refatorações devem ser feitas para manter o código limpo e sustentável. Um exemplo disso, pode ser que a medida que novas funcionalidades forem adicionadas ao sistema, como a adição de mais tipos de desconto no exemplo acima, a refatoração contínua garantirá que o código se mantenha organizado e fácil de entender, sem se tornar um emaranhado de lógicas e regras.

