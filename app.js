const { useState } = React;

function SvgIcon({ size = 24, className = "", children, fill = "none" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const Heart = ({ size = 24, className = "", fill = "none" }) => (
  <SvgIcon size={size} className={className} fill={fill}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
  </SvgIcon>
);

const ShoppingBag = ({ size = 24, className = "" }) => (
  <SvgIcon size={size} className={className}>
    <path d="M6 2l1.5 2h9L18 2" />
    <path d="M3 6h18l-1.5 14H4.5L3 6z" />
    <path d="M9 10a3 3 0 0 0 6 0" />
  </SvgIcon>
);

const SortAsc = ({ size = 24, className = "" }) => (
  <SvgIcon size={size} className={className}>
    <path d="M11 5h10" />
    <path d="M11 9h7" />
    <path d="M11 13h4" />
    <path d="M6 16l-3 3-3-3" />
    <path d="M3 19V4" />
  </SvgIcon>
);

const Check = ({ size = 24, className = "" }) => (
  <SvgIcon size={size} className={className}>
    <path d="M20 6L9 17l-5-5" />
  </SvgIcon>
);

const Filter = ({ size = 24, className = "" }) => (
  <SvgIcon size={size} className={className}>
    <path d="M22 3H2l8 9v7l4 2v-9l8-9z" />
  </SvgIcon>
);

const MessageCircle = ({ size = 24, className = "" }) => (
  <SvgIcon size={size} className={className}>
    <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.3 0-2.55-.3-3.66-.83L3 21l1.83-5.84A8.44 8.44 0 0 1 3.5 11.5 8.5 8.5 0 0 1 12 3a8.5 8.5 0 0 1 9 8.5z" />
  </SvgIcon>
);

const PRODUTOS = [
  {
    id: 1,
    nome: "Jogo de Panelas Tramontina",
    descricao: "Conjunto com 5 peças antiaderentes",
    preco: 350.0,
    imagem:
      "https://images.unsplash.com/photo-1556911261-6bd341186b2f?w=800&h=600&fit=crop",
    link: "https://www.americanas.com.br/produto/exemplo1",
    comprado: false,
  },
  {
    id: 2,
    nome: "Jogo de Copos",
    descricao: "12 copos de vidro elegantes",
    preco: 89.9,
    imagem:
      "https://images.unsplash.com/photo-1585516173212-c0f1f31d0fc5?w=800&h=600&fit=crop",
    link: "https://www.americanas.com.br/produto/exemplo2",
    comprado: true,
  },
];

const WHATSAPP = "5534991597928";
const formatBRL = (valor) =>
  valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

function App() {
  const [ordenacao, setOrdenacao] = useState("padrao");
  const [filtro, setFiltro] = useState("todos"); // 'todos', 'disponiveis', 'comprados'

  const produtosFiltrados = PRODUTOS.filter((produto) => {
    if (filtro === "disponiveis") return !produto.comprado;
    if (filtro === "comprados") return produto.comprado;
    return true;
  });

  const produtosOrdenados = [...produtosFiltrados].sort((a, b) => {
    if (ordenacao === "nome") return a.nome.localeCompare(b.nome);
    if (ordenacao === "preco-menor") return a.preco - b.preco;
    if (ordenacao === "preco-maior") return b.preco - a.preco;
    return 0;
  });

  const totalDisponiveis = PRODUTOS.filter((p) => !p.comprado).length;
  const totalComprados = PRODUTOS.filter((p) => p.comprado).length;

  const mensagemWhatsApp = encodeURIComponent(
    "Olá! Acabei de comprar um presente do chá de casa nova de vocês 🎁: "
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="text-pink-500" size={32} fill="currentColor" />
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-800">
                Felipe <span className="text-pink-500">&</span> Bárbara
              </h1>
              <p className="text-gray-600 text-sm">Nosso Chá de Casa Nova</p>
            </div>
            <Heart className="text-pink-500" size={32} fill="currentColor" />
          </div>

          {/* Botão WhatsApp Destaque */}
          <div className="bg-gradient-to-r from-green-400 to-green-500 rounded-xl p-4 shadow-lg">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-3 text-white">
                <MessageCircle size={32} className="animate-bounce" />
                <div>
                  <p className="font-bold text-lg">Comprou alguma coisa?</p>
                  <p className="text-sm text-green-50">
                    Nos avise para marcarmos como comprado!
                  </p>
                </div>
              </div>
              <a
                href={`https://wa.me/${WHATSAPP}?text=${mensagemWhatsApp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-green-600 font-bold rounded-lg hover:bg-green-50 transition-all transform hover:scale-105 shadow-md flex items-center gap-2"
              >
                <MessageCircle size={20} />
                Avisar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Controles */}
      <div className="max-w-6xl mx-auto px-4 mt-6 space-y-4">
        {/* Estatísticas */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow-sm p-4 text-center">
            <div className="text-3xl font-bold text-pink-500">
              {PRODUTOS.length}
            </div>
            <div className="text-gray-600 text-sm">Total de Itens</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4 text-center">
            <div className="text-3xl font-bold text-green-500">
              {totalComprados}
            </div>
            <div className="text-gray-600 text-sm">Já Comprados</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4 text-center col-span-2 md:col-span-1">
            <div className="text-3xl font-bold text-blue-500">
              {totalDisponiveis}
            </div>
            <div className="text-gray-600 text-sm">Disponíveis</div>
          </div>
        </div>

        {/* Filtros */}
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center gap-4 flex-wrap mb-4">
            <span className="text-gray-700 font-medium flex items-center gap-2">
              <Filter size={20} />
              Mostrar:
            </span>
            <button
              onClick={() => setFiltro("todos")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filtro === "todos"
                  ? "bg-pink-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Todos ({PRODUTOS.length})
            </button>
            <button
              onClick={() => setFiltro("disponiveis")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filtro === "disponiveis"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Disponíveis ({totalDisponiveis})
            </button>
            <button
              onClick={() => setFiltro("comprados")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filtro === "comprados"
                  ? "bg-green-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Comprados ({totalComprados})
            </button>
          </div>

          <div className="flex items-center gap-4 flex-wrap border-t pt-4">
            <span className="text-gray-700 font-medium flex items-center gap-2">
              <SortAsc size={20} />
              Ordenar por:
            </span>
            <button
              onClick={() => setOrdenacao("padrao")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                ordenacao === "padrao"
                  ? "bg-pink-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Padrão
            </button>
            <button
              onClick={() => setOrdenacao("nome")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                ordenacao === "nome"
                  ? "bg-pink-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Nome A-Z
            </button>
            <button
              onClick={() => setOrdenacao("preco-menor")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                ordenacao === "preco-menor"
                  ? "bg-pink-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Menor Preço
            </button>
            <button
              onClick={() => setOrdenacao("preco-maior")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                ordenacao === "preco-maior"
                  ? "bg-pink-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Maior Preço
            </button>
          </div>
        </div>
      </div>

      {/* Grid de Produtos */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {produtosOrdenados.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg">
            <p className="text-gray-500 text-lg">
              Nenhum produto para exibir neste filtro
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {produtosOrdenados.map((produto) => (
              <div
                key={produto.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl"
              >
                {/* Imagem com faixa de "Comprado" */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={produto.imagem}
                    alt={produto.nome}
                    className={`w-full h-full object-cover ${
                      produto.comprado ? "filter grayscale opacity-60" : ""
                    }`}
                    loading="lazy"
                  />
                  {produto.comprado && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-green-500 text-white font-bold py-2 px-16 transform rotate-[-30deg] shadow-lg">
                        <div className="flex items-center gap-2 text-xl">
                          <Check size={24} />
                          JÁ COMPRADO
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Conteúdo */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {produto.nome}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {produto.descricao}
                  </p>
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-pink-600 font-bold text-xl">
                      {formatBRL(produto.preco)}
                    </div>
                    {!produto.comprado ? (
                      <a
                        href={produto.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors text-sm font-medium"
                      >
                        <ShoppingBag size={16} />
                        Ver Produto
                      </a>
                    ) : (
                      <div className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-lg text-sm font-medium">
                        <Check size={16} />
                        Comprado
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white mt-12 py-8 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <Heart className="text-pink-500 mx-auto mb-3" size={32} fill="currentColor" />
          <p className="text-gray-600 text-lg font-medium">
            Com amor, Felipe e Bárbara 💕
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Obrigado por fazer parte deste momento especial!
          </p>
        </div>
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);