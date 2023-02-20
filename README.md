# Liz Design Token

Token Liz, é uma maneira de escalar o design system de produtos digitais visando a coesão visual


# Como Importar para seu projeto

NPM
```
npm i @gleissonneves/liz-design-token
```

YARN

```
yarn add @gleissonneves/liz-design-token
```

Use no root do app para disponibilizar os token
``
 import '@gleissonneves/liz-design-token'
``


or CDN

```
<!DOCTYPE html>
<html lang="pt-br">
<head>
    ...

    <!-- START LIZ DESIGN TOKEN -->
    
    <link rel="stylesheet" type="text/css" href="https://unpkg.com/@gleissonneves/liz-design-token@2.0.5/dist/index.css">
    
    <!-- END LIZ DESIGN TOKEN -->

    ...
</head>
...
```


# Documento de visão
No link abaixo você encontra o documento de token:

https://www.figma.com/file/cPVx6CuoMyIz2Vwp8RETxe/Liz-Design-Token?node-id=6%3A13&t=SqvGhwafBGXJrevw-1

Parar alterar um token você terar que sobrescrever

Exemplo:
```
Token de origem:
:root {
    --color-brand-primary-100: #FDB9D2;
}


Token de modificado:
:root {
    --color-brand-primary-100: #FF00FF;
}
```
