Kenzie Blog
===================

Introdução
----------

A ideia desse projeto é simular uma comunidade, onde todos os membros
cadastrados podem consumir, criar, atualizar e deletar publicações de
texto. Também por em pratica o fluxo de autenticação em APIs.

Tarefas
-------

**Funcionalidades!**

-   Documentação da Api

    [documentação](https://gitlab.com/-/snippets/2363840)

1.  Tem uma página de cadastro, com um formulário que recebe esses
    dados:

        {
            "username": "username", // Um nome de usuário único de até 12 digitos.
            "email": "mail@mail.com", // Um e-mail único para cada usuário.
            "avatarUrl": "https://github.com/wence-.png", // O link de uma imagem para o avatar do usuário.
            "password": "123" // com, pelo menos: 6 dígitos, 1 letra maiúscula e 1 número.
        }

2.  Tem uma página de login, com um formulário que recebe um
    **email** e uma **senha**. **O usuário só poderá ser redirecionado a
    pagina principal do seu projeto se o login for bem sucedido,
    retornando um token e o id do usuário.**

3.  Tem uma pagina principal, onde o usuário autenticado pode **escrever**
    um post e **ler** todos os posts existentes na API.

4.  O dono do post deverá ter a opção de atualizar ou deletar esse
    recurso. **APENAS o dono pode modificar ou excluir, nenhum outro
    usuário deve conseguir fazer isso.** *Na API já existe uma validação
    para isso, mas garanta que essa funcionalidade fique intuitiva no
    front-end.*

5.  As páginas estão separadas, cada uma estruturada em um
    arquivo HTML e com arquivos JS separados.

6.  Tem a versão mobile da aplicação.
  

