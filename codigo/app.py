# Sistema de Delivery
# Entrega 1 - Situacao de Aprendizagem

print("=" * 40)
print("       SISTEMA DE DELIVERY")
print("=" * 40)
print("\nCadastro de Pedido")
print("\n--- DADOS DO CLIENTE ---")

nome = input("Digite o nome do cliente: ")
telefone = input("Digite o telefone: ")
endereco = input("Digite o endereco: ")

print("\nCliente cadastrado!")
print("Nome:", nome)
print("Telefone:", telefone)
print("Endereco:", endereco)
print("\n--- PRODUTOS ---")

produto = input("Digite o nome do produto: ")
preco = float(input("Digite o preço do produto: R$ "))
while preco <= 0:
    print("O preço deve ser maior que zero!")
    preco = float(input("Digite novamente o preço: R$ "))

quantidade = int(input("Digite a quantidade: "))

while quantidade <= 0:
    print("A quantidade deve ser maior que zero!")
    quantidade = int(input("Digite novamente a quantidade: "))

subtotal = preco * quantidade

print("\n--- RESUMO DO PEDIDO ---")
print("Produto:", produto)
print("Preco unitario: R$", preco)
print("Quantidade:", quantidade)
print("Subtotal: R$", subtotal)
print("\n--- PAGAMENTO ---")

forma_pagamento = input("Forma de pagamento (Dinheiro, Pix ou Cartão): ")

print("\n" + "=" * 40)
print("       PEDIDO FINALIZADO")
print("=" * 40)

print("Cliente:", nome)
print("Produto:", produto)
print("Quantidade:", quantidade)
print("Total: R$", subtotal)
print("Pagamento:", forma_pagamento)

print("\nObrigado por comprar conosco!")
