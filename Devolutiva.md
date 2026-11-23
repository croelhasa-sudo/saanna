
# Devolutiva formativa — Atividade 02 da SA

**Estudante:** Anna Clara Gomes Croelhas  
**Turma:** São Bento do Sul — Manhã  
**Unidade Curricular:** Programação de Aplicativos  
**Projeto:** Hospital — Cadastro de pacientes (interface) / Delivery (Python)  
**Repositório:** https://github.com/croelhasa-sudo/saanna  
**Arquivos observados:** `codigo/app.py`, `interface/index.html`, `interface/script.js` e `interface/style.css`  
**Data da verificação:** 23/11/2026  
**Escopo:** evidências técnicas dos critérios CT6 e CT7, sem atribuição de nota numérica.

## Situação atual do projeto

O repositório contém uma interface de cadastro de pacientes com HTML, CSS e JavaScript. O JavaScript foi escrito para buscar, cadastrar e excluir pacientes por uma API. Porém, o arquivo Python publicado ainda implementa um sistema de delivery executado pelo terminal, sem as rotas de pacientes esperadas pela interface.

## Pontos positivos identificados

- Criou uma página com formulário para nome, CPF, telefone e idade, incluindo campos obrigatórios.
- Separou a apresentação HTML, o estilo CSS e o comportamento JavaScript.
- Organizou funções assíncronas para carregar, cadastrar e excluir registros.
- Utilizou `fetch()` e métodos HTTP para expressar a intenção de integrar uma interface a um servidor.
- Incluiu mensagem de retorno ao usuário e confirmação antes da exclusão.

## O que precisa ser corrigido ou concluído

### 1. Corrigir a diferença entre os projetos

O README indica *hospital* e a interface cadastra pacientes, mas `codigo/app.py` ainda trata de *delivery de comida*. **Como melhorar:** definir um único tema para a atividade e atualizar o código Python para corresponder à interface escolhida, preservando o que já foi aprendido.

### 2. Implementar ou adaptar as rotas utilizadas pelo JavaScript

O código faz requisições a `/api/pacientes` (GET e POST) e `/api/pacientes/<id>` (DELETE), mas essas rotas não estão no Python publicado. **Como melhorar:** para uma integração com servidor, criar rotas e respostas JSON apropriadas. Se a etapa atual exigir apenas interface, usar dados fictícios locais e explicar que é um protótipo, sem afirmar que uma API já funciona.

### 3. Validar corretamente as entradas

O formulário possui `required`, porém faltam verificações coerentes para CPF fictício, telefone e idade antes de aceitar os dados. **Como melhorar:** criar funções simples de validação e mensagens que expliquem a correção necessária.

### 4. Tratar respostas e erros de rede

Chamadas `fetch()` dependem do servidor e podem falhar. **Como melhorar:** verificar `resposta.ok`, tratar exceções nas operações e mostrar mensagens sem deixar o formulário em um estado confuso.

## Oportunidades de melhoria

- Atualizar o README com o tema definitivo, a estrutura de pastas e a forma de execução.
- Documentar o que já funciona no navegador e o que ainda depende de um backend.
- Evitar o uso de dados pessoais reais durante a apresentação do sistema hospitalar.

## Testes recomendados

1. Abrir o HTML e conferir o carregamento do CSS e do JavaScript.
2. Tentar cadastrar um paciente com campos vazios.
3. Conferir o comportamento de `fetch()` quando a API não está disponível.
4. Após implementar a API, cadastrar, listar e excluir pacientes fictícios.
5. Verificar a confirmação de exclusão e a mensagem de erro ou sucesso.
6. Comparar os arquivos para confirmar que todos pertencem ao mesmo tema.

## Prioridades para a próxima versão

1. **Alinhar o tema do Python à interface hospitalar.**
2. **Concluir ou simular adequadamente as operações solicitadas pelo JavaScript.**
3. **Criar validações de formulário e mensagens para falhas.**
4. **Documentar o funcionamento e os limites do protótipo.**

## Mensagem final

Anna, sua interface demonstra aprendizado de formulários, manipulação do navegador e chamadas assíncronas. Agora o foco deve ser garantir que a operação exibida na tela corresponda à lógica desenvolvida e possa ser demonstrada de maneira confiável.

---

**Registro da avaliação:** análise do conteúdo publicado no GitHub. Não foram executados testes completos de interface e integração no ambiente do estudante. Os critérios socioemocionais (CS1, CS2 e CS3) dependem da observação docente presencial. Arquivos vazios ou ausentes significam **sem evidência verificável no repositório**, e não nota zero automática.
