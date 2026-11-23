
# ==========================================
# SISTEMA DE DELIVERY
# Entrega 1 - Situacao de Aprendizagem
# ==========================================

# FUNCAO PARA LER TEXTOS
def ler_texto(mensagem):
    texto = input(mensagem)

    while texto == "":
        print("Este campo nao pode ficar vazio!")
        texto = input(mensagem)

    return texto


# FUNCAO PARA LER PRECO
def ler_preco():
    while True:
        try:
            preco = float(input("Digite o preco do produto: R$ ").replace(",", "."))

            if preco > 0:
                return preco
            else:
                print("O preco deve ser maior que zero!")

        except ValueError:
            print("Digite um valor numerico valido!")


# FUNCAO PARA LER QUANTIDADE
def ler_quantidade():
    while True:
        try:
            quantidade = int(input("Digite a quantidade: "))

            if quantidade > 0:
                return quantidade
            else:
                print("A quantidade deve ser maior que zero!")

        except ValueError:
            print("Digite uma quantidade valida!")


# FUNCAO PARA ESCOLHER PAGAMENTO
def escolher_pagamento():
    print("\n--- FORMAS DE PAGAMENTO ---")
    print("1 - Dinheiro")
    print("2 - Pix")
    print("3 - Cartao")

    while True:
        opcao = input("Escolha a forma de pagamento: ")

        if opcao == "1":
            return "Dinheiro"
        elif opcao == "2":
            return "Pix"
        elif opcao == "3":
            return "Cartao"
        else:
            print("Opcao invalida! Tente novamente.")


# FUNCAO PRINCIPAL
def cadastrar_pedido():

    print("=" * 40)
    print("       SISTEMA DE DELIVERY")
    print("=" * 40)

    # DADOS DO CLIENTE
    print("\n--- DADOS DO CLIENTE ---")

    nome = ler_texto("Digite o nome do cliente: ")
    telefone = ler_texto("Digite o telefone: ")
    endereco = ler_texto("Digite o endereco: ")

    # DADOS DO PRODUTO
    print("\n--- PRODUTOS ---")

    produto = ler_texto("Digite o nome do produto: ")
    preco = ler_preco()
    quantidade = ler_quantidade()

    # CALCULO DO PEDIDO
    subtotal = preco * quantidade

    # PAGAMENTO
    pagamento = escolher_pagamento()

    # RESUMO
    print("\n" + "=" * 40)
    print("       PEDIDO FINALIZADO")
    print("=" * 40)

    print("Cliente:", nome)
    print("Telefone:", telefone)
    print("Endereco:", endereco)

    print("\n--- RESUMO DO PEDIDO ---")
    print("Produto:", produto)
    print("Preco unitario: R$", round(preco, 2))
    print("Quantidade:", quantidade)
    print("Subtotal: R$", round(subtotal, 2))
    print("Pagamento:", pagamento)

    print("\nObrigado por comprar conosco!")
    print("=" * 40)


# EXECUCAO DO SISTEMA
cadastrar_pedido()