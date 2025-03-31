// All questions with their options and correct answers
const allQuestions = [
    // Módulo 1 Questions
    {
        question: "O que é um intermediário de crédito?",
        options: [
            "Um intermediário de crédito é uma pessoa coletiva, que participa no processo de concessão de crédito",
            "Um intermediário de crédito é uma pessoa, singular ou coletiva, que participa no processo de concessão de crédito",
            "Um intermediário de crédito é uma pessoa, singular ou coletiva, que concede crédito",
            "Um intermediário de crédito é uma pessoa singular que participa no processo de concessão de crédito"
        ],
        correct: 1
    },
    {
        question: "Quais são os serviços de intermediação que os intermediários de crédito podem prestar no âmbito da sua atividade?",
        options: [
            "Apresentar ou propor contratos de crédito a consumidores; celebrar contratos de crédito com consumidores em nome das instituições mutuantes; prestar serviços de consultoria, analisando personalizadamente as necessidades e objetivos dos consumidores.",
            "Apresentar ou propor contratos de crédito a consumidores; prestar assistência a consumidores na preparação dos contratos de crédito; celebrar contratos de crédito com consumidores em nome das instituições mutuantes; prestar serviços de consultoria, analisando personalizadamente as necessidades e objetivos dos consumidores.",
            "Apresentar ou propor contratos de crédito a consumidores; prestar assistência a consumidores na preparação dos contratos de crédito; prestar serviços de consultoria, analisando personalizadamente as necessidades e objetivos dos consumidores.",
            "Apresentar ou propor contratos de crédito a consumidores; prestar assistência a consumidores na preparação dos contratos de crédito; celebrar contratos de crédito com consumidores em nome das instituições mutuantes."
        ],
        correct: 1
    },
    {
        question: "Pode a atividade de intermediário de crédito ser desenvolvida por instituições de crédito, sociedades financeiras, instituições de pagamento e instituições de moeda eletrónica legalmente habilitadas a desenvolver a sua atividade em Portugal, relativamente a contratos de crédito em que não atuem como mutuantes?",
        options: ["Não", "Sim"],
        correct: 1
    },
    {
        question: "A prestação de serviços de consultoria relativamente a contratos de crédito pode ser desenvolvida por pessoas singulares e coletivas com domicílio profissional ou com sede social e administração central em Portugal autorizadas a desenvolver a atividade de intermediação de crédito e registadas para o efeito junto do Banco de Portugal, e que estejam igualmente autorizadas a prestar serviços de consultoria?",
        options: ["Não", "Sim"],
        correct: 1
    },
    {
        question: "No exercício da sua atividade, os intermediários de crédito podem intervir em contratos de crédito concedidos ou a conceder por pessoa singular ou coletiva que não seja um mutuante (qualquer entidade habilitada a exercer, a título profissional, a atividade de concessão de crédito em Portugal, nos termos do Regime Geral das Instituições de Crédito e Sociedades Financeiras, aprovado pelo Decreto-Lei n.º 298/92, de 31 de dezembro e do Regime Jurídico dos Serviços de Pagamento e da Moeda Eletrónica, aprovado pelo Decreto-Lei n.º 317/2009, de 30 de outubro)?",
        options: ["Sim", "Não"],
        correct: 1
    },
    {
        question: "O intermediário de crédito está autorizado a conceder crédito e a intervir na comercialização de outros produtos ou serviços bancários, como, por exemplo, depósitos a prazo ou serviços de pagamento?",
        options: ["Sim", "Não"],
        correct: [1]
    },
    {
        question: "Os intermediários de crédito não vinculados podem incluir na sua firma ou denominação, ou usar no exercício da sua atividade, expressões como \"intermediário independente\" ou \"consultor independente\"?",
        options: ["Não", "Sim"],
        correct: 1
    },
    {
        question: "Os mutuantes, assim como os intermediários de crédito vinculados que estejam autorizados a prestar de serviços de consultoria, podem incluir na sua firma ou denominação, ou utilizar na sua atividade, os termos \"consultor\", \"consultoria\", \"recomendação\", e as expressões \"consultor de crédito\", \"consultoria de crédito\", \"consultor financeiro\", \"consultoria financeira\" ou similares?",
        options: ["Sim", "Não"],
        correct: 1
    },
    {
        question: "Quantas categorias existem de intermediários de crédito?",
        options: ["2", "3", "4"],
        correct: 1
    },
    {
        question: "Um intermediário de crédito pode desenvolver a sua atividade em mais do que uma categoria?",
        options: ["Sim", "Não"],
        correct: 1
    },
    // Módulo 2 Questions
    {
        question: "Dos seguintes requisitos, indique quais os requisitos gerais existentes para as pessoas singulares que pretendem exercer atividade de intermediário de crédito ou prestar serviços de consultoria em território nacional:",
        options: [
            "Menor de idade",
            "Domicílio profissional em território estrangeiro",
            "Seguro de responsabilidade civil relativamente ao exercício da atividade de intermediários de crédito, ou qualquer outra garantia equivalente",
            "Domicílio profissional em território nacional",
            "Nível adequado de conhecimentos e competências em matéria de contratos de crédito",
            "Maior de idade",
            "Reconhecida idoneidade de acordo com o art. 12º",
            "Nacionalidade portuguesa, de outro Estado-Membro da União Europeia ou de país terceiro em relação à União Europeia que confira reciprocidade no tratamento a nacionais portugueses no âmbito da atividade dos intermediários de crédito",
            "Organização comercial e administrativa adequada ao exercício da atividade de intermediário de crédito e, sendo caso disso, à prestação de serviços de consultoria",
            "Capacidade legal para a prática de atos de comércio"
        ],
        correct: [2,3,4,5,6,7,8,9]
    },
    {
        question: "Dos seguintes requisitos, indique quais os requisitos gerais existentes para as pessoas colectivas que pretendam exercer atividade de intermediário de crédito ou prestar serviços de consultoria em território nacional:",
        options: [
            "Seguro de responsabilidade civil relativamente ao exercício da atividade de intermediários de crédito, ou qualquer outra garantia equivalente",
            "Organização comercial e administrativa adequada ao exercício da atividade",
            "Sociedade unipessoal",
            "Sede social e administração central em território estrangeiro",
            "Membros do orgão de administração que disponham de capacidade legal para a prática de atos de comércio; Maiores de idade; Tenham reconhecida idoneidade; Possuam um nível adequado de conhecimentos e competência e não se encontrem em situação de incompatibilidade para o exercício de funções na instituição de crédito",
            "Sede social e administração central em território nacional",
            "Forma de sociedade por quotas ou sociedade anónima"
        ],
        correct: [0,1,4,5,6]
    },
    {
        question: "A avaliação da idoneidade tem em conta o modo como a pessoa gere habitualmente os negócios ou exerce a profissão, em especial nos aspetos que demonstrem a sua capacidade para decidir de forma ponderada e criteriosa, o cumprimento pontual das suas obrigações e um comportamento compatível com a preservação da confiança do mercado, bem como todas as circunstâncias que permitam avaliar o comportamento profissional para as funções em causa.",
        options: ["Não", "Sim"],
        correct: 1
    },
    {
        question: "Na avaliação da idoneidade é tido em conta a recusa, revogação, cancelamento ou cessação de registo, autorização, admissão ou licença para o exercício de uma atividade comercial, empresarial ou profissional, por autoridade de supervisão, ordem profissional ou organismo com funções análogas, ou destituição do exercício de um cargo por entidade pública.",
        options: ["Não", "Sim"],
        correct: 1
    },
    {
        question: "A condenação, ainda que definitiva, por factos ilícitos de natureza criminal, contraordenacional ou outra tem como efeito necessário a perda de idoneidade para o exercício de funções nas instituições de crédito?",
        options: ["Sim", "Não"],
        correct: 1
    },
    {
        question: "Que matérias deverá o candidato dominar?",
        options: [
            "As características dos produtos de crédito comercializados e dos serviços acessórios associados",
            "A legislação aplicável aos contratos de crédito",
            "O processo de aquisição e registo de imóveis, relativamente a intermediário de crédito que trabalhe com contratos de crédito à habitação",
            "A avaliação das garantias habitualmente exigidas para a concessão do crédito",
            "O mercado do crédito em Portugal",
            "A avaliação de solvabilidade dos consumidores",
            "Normas de ética empresarial",
            "Noções fundamentais de economia e de finanças"
        ],
        correct: [0, 1, 2, 3, 4, 5, 6, 7]
    },
    {
        question: "Presume-se que o candidato, pessoa singular, possui conhecimentos e competências adequadas quando:",
        options: [
            "Possua certificação profissional que pode ser obtida mediante a realização de formação para o exercício da atividade de intermediário de crédito ou tenha um grau académico, um diploma de técnico superior profissional, ou de formação pós-secundário conferente de diploma",
            "Cumpre com a escolaridade obrigatória e possua certificação profissional que pode ser obtida mediante a realização de formação para o exercício da atividade de intermediário de crédito ou tenha um grau académico, um diploma de técnico superior profissional, ou de formação pós-secundário conferente de diploma cujo plano de estudos inclua os conteúdos mínimos da formação profissional legalmente exigida",
            "Cumpre com a escolaridade obrigatória ou tenha um diploma de técnico superior profissional, ou de formação pós-secundário conferente de diploma cujo plano de estudos inclua os conteúdos mínimos da formação profissional legalmente exigida"
        ],
        correct: 1
    },
    {
        question: "Em que tipo de contratos de crédito, se consideram cumpridos os requisitos de conhecimentos e competências com a designação de, pelo menos, um responsável técnico pela atividade do intermediário de crédito (art. 11º/6)?",
        options: [
            "Caso pretenda exercer a atividade de intermediário de crédito ou prestar serviços de consultoria relativamente a contratos de crédito à habitação",
            "Quando o interessado pretenda exercer a atividade de intermediário de crédito ou prestar serviços de consultoria apenas relativamente a contratos de crédito aos consumidores"
        ],
        correct: 1
    },
    {
        question: "Quantos anos de experiência são necessários para que os interessados que apresentem o pedido de autorização até ao dia 21 de março de 2019, possam comprovar os conhecimentos e competências adequados, caso tenham atuado como intermediário de crédito, membro do órgão de administração de intermediário de crédito, responsável técnico pela atividade de intermediação de crédito, trabalhador de mutuante envolvido na concessão de crédito ou trabalhador de intermediário de crédito diretamente envolvido na prestação de serviços de intermediação?",
        options: ["Três anos", "Cinco anos", "Seis anos"],
        correct: 0
    },
    {
        question: "Em que tipo de contratos de crédito, o interessado deve assegurar que também os seus trabalhadores possuem o nível adequado de conhecimentos e competências?",
        options: [
            "Quando o interessado pretenda exercer a atividade de intermediário de crédito ou prestar serviços de consultoria apenas relativamente a contratos de crédito aos consumidores",
            "Caso pretenda exercer a atividade de intermediário de crédito ou prestar serviços de consultoria relativamente a contratos de crédito à habitação"
        ],
        correct: 1
    },
    {
        question: "Para que se considere que os interessados possuem organização comercial e administrativa adequada ao exercício da atividade, há-que verificar, entre outros requisitos, que dispõem de meios informáticos que permitam a comunicação por via eletrónica e o acesso à Internet.",
        options: ["Não", "Sim"],
        correct: 1
    },
    {
        question: "Caso pretendam desenvolver a atividade de intermediário de crédito ou prestar serviço de consultadoria no âmbito do crédito de habitação, os interessados devem subscrever um seguro de responsabilidade civil profissional que deve observar os seguintes montantes mínimos:",
        options: [
            "€500.000,00 para os intermediários que sejam pessoas coletivas",
            "€200.000,00 para os intermediários que sejam pessoas singulares",
            "€250.000,00 para os intermediários que sejam pessoas singulares",
            "€400.000,00 para os intermediários que sejam pessoas coletivas"
        ],
        correct: [0, 2]
    },
    {
        question: "Para o exercício da atividade de intermediário de crédito vinculado e intermediário de crédito a título acessório, quer este, seja pessoa singular ou coletiva, está obrigado à celebração de um contrato de vinculação com um único mutuante ou com um grupo de mutuantes, desde que estes não representem a maioria de mercado (art. 17º).",
        options: ["Sim", "Não"],
        correct: 0
    },
    {
        question: "Os intermediários de crédito não vinculados podem não ter por objeto social exclusivo a atividade de intermediário de crédito?",
        options: ["Não", "Sim"],
        correct: 0
    },
    {
        question: "A prestação dos serviços de intermediação de crédito por parte dos intermediários não vinculados deve ser precedida da celebração de contrato de intermediação de crédito com o consumidor?",
        options: ["Não", "Sim"],
        correct: 1
    },
    {
        question: "O pedido de autorização para o exercício da atividade de intermediário de crédito é apresentado pelo interessado junto do Banco de Portugal. No caso de pessoas singulares, a descrição detalhada do percurso formativo e da experiência profissional nos últimos cinco anos é um documento obrigatório?",
        options: ["Não", "Sim"],
        correct: 1
    },
    {
        question: "O pedido de autorização para o exercício da atividade de intermediário de crédito é apresentado pelo interessado junto do Banco de Portugal. No caso de pessoas coletivas, a indicação do domicílio e contactos dos interessados para efeitos profissionais é um documento obrigatório?",
        options: ["Não", "Sim"],
        correct: 0
    },
    {
        question: "Pode o Banco de Portugal recusar a concessão de autorização para o exercício da atividade sempre que o pedido seja falho nos seus elementos ou documentos necessários?",
        options: ["Não", "Sim"],
        correct: 1
    },
    {
        question: "No caso de morte ou dissolução do intermediário de crédito, a autorização para o exercício da atividade pode caducar?",
        options: ["Não", "Sim"],
        correct: 1
    },
    {
        question: "No caso do interessado, que não estava constituído à data da apresentação do requerimento inicial não solicite o respetivo registo junto do BdP nos três meses subsequentes após ter sido notificado da decisão de autorização ou após o deferimento tácito da mesma, a autorização para o exercício da atividade pode caducar?",
        options: ["Não", "Sim"],
        correct: 0
    },
    {
        question: "Pode o Banco de Portugal revogar a autorização concedida com base no não exercício da atividade de intermediário de crédito ou da prestação de serviços de consultoria nos três meses anteriores.",
        options: ["Não", "Sim"],
        correct: 0
    },
    // Módulo 3 Questions
    {
        question: "Sendo o exercício da atividade de intermediário de crédito uma matéria de âmbito transversal, existem diversos deveres que resultam de legislação avulsa relacionada.",
        options: ["Não", "Sim"],
        correct: 1
    },
    {
        question: "Na publicitação dos seus serviços, os intermediários de crédito devem mencionar se desenvolvem a sua atividade em regime de exclusividade.",
        options: ["Não", "Sim"],
        correct: 1
    },
    {
        question: "O relacionamento entre os intermediários de crédito e todas as pessoas envolvidas deve pautar-se sempre por diligência, lealdade, discrição e respeito consciencioso pelos interesses que lhes estão confiados.",
        options: ["Não", "Sim"],
        correct: 1
    },
    {
        question: "Os intermediários podem receber ou entregar quaisquer valores relacionados com a formação, execução e o cumprimento antecipado dos contratos de crédito.",
        options: ["Sim", "Não"],
        correct: 1
    },
    {
        question: "Os intermediários podem entregar aos mutuantes os fundos referentes a juros e encargos de contratos de crédito, quando o contrato tenha como finalidade a aquisição de bens ou serviços comercializados pelo intermediário a título acessório e este tenha assumido o pagamento desses juros ou encargos perante o mutuante.",
        options: ["Não", "Sim"],
        correct: 1
    },
    {
        question: "Os intermediários podem entregar a outrem, no todo ou em parte, o exercício da atividade de intermediário de crédito e a prestação de serviços de consultoria.",
        options: ["Sim", "Não"],
        correct: 1
    },
    {
        question: "Os intermediários de crédito podem celebrar contratos de crédito em representação de consumidores.",
        options: ["Sim", "Não"],
        correct: 1
    },
    {
        question: "Os intermediários não vinculados, podem celebrar contratos em representação de mutuantes.",
        options: ["Sim", "Não"],
        correct: 1
    },
    {
        question: "Um trabalhador de uma empresa de intermediação de crédito pode exercer funções idênticas em mais do que um intermediário de crédito?",
        options: ["Sim", "Não"],
        correct: 1
    },
    {
        question: "Um trabalhador de um intermediário de crédito pode trabalhar em part-time noutra empresa de intermediação de crédito enquanto intermediário de crédito?",
        options: ["Sim", "Não"],
        correct: 1
    },
    {
        question: "Os intermediários de crédito que trabalhem com crédito à habitação devem assegurar que a remuneração dos seus trabalhadores não põe em causa o cumprimento dos deveres de conduta gerais de diligência, lealdade, discrição e respeito consciencioso pelos interesses dos consumidores e, no caso dos intermediários de crédito não vinculados, a imparcialidade e isenção.",
        options: ["Não", "Sim"],
        correct: 1
    },
    {
        question: "O intermediário não tem o dever de transmitir ao mutuante, informação sobre os rendimentos, despesas e outras circunstâncias financeiras ou económicas do consumidor, de que tenham conhecimento.",
        options: ["Sim", "Não"],
        correct: 1
    },
    {
        question: "No exterior dos estabelecimentos abertos ao público, os intermediários devem ter, de forma bem visível e legível, a indicação da sua categoria de intermediário?",
        options: ["Não", "Sim"],
        correct: 1
    },
    {
        question: "Previamente ao início da prestação de serviços de intermediação, o intermediário disponibiliza ao consumidor um documento, em papel ou noutro suporte duradouro, em que seja especificado os meios de resolução alternativa de litígios a que o intermediário aderiu.",
        options: ["Não", "Sim"],
        correct: 1
    },
    {
        question: "Os intermediários de crédito não vinculados podem cumprir o dever de informação mediante a disponibilização de cópia do projeto de contrato de intermediação de crédito que inclua os elementos previstos para o contrato de intermediação de crédito, em momento prévio à celebração do contrato e independentemente de solicitação do consumidor.",
        options: ["Não", "Sim"],
        correct: 1
    },
    {
        question: "A lei especifica em particular que devem os intermediários de crédito no seu relacionamento com os clientes intermediar contratos de crédito sobre os quais não possuam informação detalhada e objetiva.",
        options: ["Sim", "Não"],
        correct: 1
    },
    {
        question: "Os intermediários não vinculados podem divulgar publicidade a produtos de crédito que tenha sido produzida por eles próprios?",
        options: ["Sim", "Não"],
        correct: 1
    },
    {
        question: "Os intermediários vinculados são remunerados pelos consumidores, não podendo receber quaisquer valores dos mutuantes.",
        options: ["Sim", "Não"],
        correct: 1
    },
    {
        question: "Os intermediários não vinculados apenas são remunerados pelos mutuantes, não podendo receber qualquer remuneração pecuniária ou outra contrapartida económica dos consumidores pelos serviços prestados.",
        options: ["Sim", "Não"],
        correct: 1
    },
    {
        question: "A remuneração dos trabalhadores dos mutuantes e dos intermediários que prestem serviços de consultoria relativamente crédito à habitação não pode depender de objetivos de vendas ou do número de contratos celebrados ou, por qualquer outra via, prejudicar a capacidade das pessoas em causa para atuar no interesse do consumidor.",
        options: ["Não", "Sim"],
        correct: 1
    },
    {
        question: "Há situações em que os intermediários de crédito podem divulgar elementos dos seus contratos ao Banco de Portugal?",
        options: ["Não", "Sim"],
        correct: 1
    },
    // Módulo 4 Questions
    {
        question: "«Segundo o Decreto-Lei n.º 81-C/2017 de 7 de julho, consideram-se Serviços de Consultoria aqueles que estejam associados à emissão de recomendações dirigidas especificamente a múltiplos consumidores sobre uma ou mais operações relativas a contratos de crédito, enquanto atividade separada da concessão de crédito e da atividade de intermediário de crédito.»",
        options: ["Verdadeiro", "Falso"],
        correct: 1
    },
    {
        question: "Os mutuantes e os intermediários de crédito devem informar o consumidor, no contexto de uma determinada operação, se lhe são ou podem vir a ser prestados serviços de consultoria.",
        options: ["Verdadeiro", "Falso"],
        correct: 0
    },
    {
        question: "Os mutuantes e os intermediários de crédito vinculados devem, em momento prévio à prestação de serviços de consultoria, esclarecer os consumidores, através de informação prestada em papel ou noutro suporte duradouro, de que os seus serviços apenas têm por base a ponderação de contratos de crédito disponíveis na sua gama de produtos.",
        options: ["Verdadeiro", "Falso"],
        correct: 0
    },
    {
        question: "Os intermediários de crédito vinculados devem esclarecer os consumidores, através de informação prestada em papel ou noutro suporte duradouro, sobre o universo dos produtos de crédito tidos em conta para efeitos da prestação do serviço de consultoria, indicando que este tem em consideração um número suficientemente vasto de contratos de crédito disponíveis no mercado.",
        options: ["Verdadeiro", "Falso"],
        correct: 1
    },
    {
        question: "Os mutuantes e os intermediários de crédito vinculados devem, em momento posterior à prestação de serviços de consultoria, esclarecer os consumidores, através de informação prestada em papel ou noutro suporte duradouro, de que os seus serviços apenas têm por base a ponderação de contratos de crédito disponíveis na sua gama de produtos.",
        options: ["Verdadeiro", "Falso"],
        correct: 1
    },
    {
        question: "Os intermediários de crédito não vinculados devem esclarecer os consumidores, através de informação prestada em papel ou noutro suporte duradouro, de que os seus serviços apenas têm por base a ponderação de contratos de crédito disponíveis na sua gama de produtos.",
        options: ["Falso", "Verdadeiro"],
        correct: 0
    },
    {
        question: "A informação a prestar pelos mutuantes e pelos intermediários de crédito deve ser completa, verdadeira, atual, clara e objetiva, estando os mesmos obrigados a disponibilizá-la aos consumidores de forma legível e a título gratuito.",
        options: ["Verdadeiro", "Falso"],
        correct: 0
    },
    {
        question: "Os mutuantes e os intermediários de crédito, quando prestem serviços de consultoria, devem observância dos deveres de diligência, lealdade, discrição e respeito consciencioso pelos direitos e interesses dos consumidores.",
        options: ["Verdadeiro", "Falso"],
        correct: 0
    },
    {
        question: "Atendendo à situação financeira do consumidor, os mutuantes e os intermediários de crédito devem alertar os consumidores sempre que a celebração do contrato de crédito possa acarretar riscos específicos, através de informação prestada em papel ou noutro suporte duradouro.",
        options: ["Verdadeiro", "Falso"],
        correct: 0
    },
    {
        question: "O Banco de Portugal pode, através de aviso, estabelecer outras regras de conduta a observar pelos mutuantes e pelos intermediários de crédito na prestação de serviços de consultoria.",
        options: ["Verdadeiro", "Falso"],
        correct: 0
    },
    {
        question: "Os intermediários de crédito vinculados podem receber valores, designadamente a título de retribuição, comissão ou despesa, ou outra contrapartida económica dos consumidores pela prestação de serviços de consultoria.",
        options: ["Falso", "Verdadeiro"],
        correct: 0
    },
    {
        question: "Os intermediários vinculados apenas são remunerados pelos mutuantes, não podendo receber quaisquer valores dos consumidores.",
        options: ["Verdadeiro", "Falso"],
        correct: 0
    },
    {
        question: "Os intermediários não vinculados apenas são remunerados pelos consumidores, não podendo receber qualquer remuneração pecuniária ou outra contrapartida económica dos mutuantes pelos serviços prestados.",
        options: ["Verdadeiro", "Falso"],
        correct: 0
    },
    {
        question: "A remuneração da prestação de serviços de consultoria por parte dos intermediários de crédito não vinculados é assegurada pelos consumidores, não podendo aqueles receber qualquer remuneração pecuniária ou outra contrapartida económica dos mutuantes pela prestação destes serviços.",
        options: ["Falso", "Verdadeiro"],
        correct: 1
    },
    {
        question: "Os trabalhadores que prestem serviços de consultadoria quanto ao crédito à habitação podem receber comissões de desempenho de vendas.",
        options: ["Falso", "Verdadeiro"],
        correct: 0
    },
    {
        question: "«A remuneração dos trabalhadores dos mutuantes e dos intermediários de crédito afetos à prestação de serviços de consultoria relativamente a contratos de crédito à habitação pode depender de objetivos de vendas ou do número de contratos celebrados.»",
        options: ["Falso", "Verdadeiro"],
        correct: 0
    },
    {
        question: "«As entidades que atuam como intermediários de crédito (por exemplo, instituições de crédito, as sociedades financeiras, as instituições de pagamento e as instituições de moeda eletrónica habilitadas a desenvolver a sua atividade em Portugal) podem igualmente prestar serviços de consultoria em relação a contratos de crédito em que sejam mutuantes ou atuem apenas como intermediários de crédito.»",
        options: ["Verdadeiro", "Falso"],
        correct: 0
    },
    // Módulo 5 Questions
    {
        question: "Incumbe aos intermediários de crédito implementar procedimentos que sejam adequados e eficazes a assegurar a análise e o tratamento tempestivo das reclamações apresentadas pelos consumidores.",
        options: ["Sim", "Não"],
        correct: 0
    },
    {
        question: "Podem os consumidores apresentar as suas reclamações diretamente ao Banco de Portugal, fundadas no incumprimento das normas que regem a atividade dos intermediários de crédito?",
        options: ["Sim", "Não"],
        correct: 0
    },
    {
        question: "Qual o número mínimo de entidades de resolução alternativa de conflito a que deve cada intermediário aderir?",
        options: [
            "A, pelo menos, duas entidades",
            "A quatro entidades",
            "A, pelo menos, três entidades",
            "No mínimo, a uma entidade"
        ],
        correct: 0
    },
    {
        question: "Qual o prazo que os intermediários têm para comunicar ao Banco de Portugal a adesão a entidades extrajudiciais eficazes e adequadas de reclamação e de resolução de litígios?",
        options: [
            "15 dias contados da respetiva adesão",
            "10 dias contados da respetiva adesão",
            "5 dias contados da respetiva adesão",
            "20 dias contados da respetiva adesão"
        ],
        correct: 0
    },
    {
        question: "Compete ao Banco de Portugal apreciar as reclamações, independentemente da forma da sua apresentação, bem como definir os procedimentos e os prazos relativos à apreciação das reclamações.",
        options: ["Sim", "Não"],
        correct: 0
    },
    {
        question: "O Banco de Portugal cobra a apreciação de reclamações?",
        options: ["Sim", "Não"],
        correct: 1
    },
    {
        question: "Contraordenações relativas à atividade de intermediário de crédito e à prestação de serviços de consultoria puníveis com coima. No caso dos intermediários indique os valores das coimas:",
        options: [
            "Quando Pessoas coletivas: 2500€ a 250.000€",
            "Quando Pessoas coletivas: 1500€ a 250.000€",
            "Quando Pessoas singulares: 750€ a 50.000€",
            "Quando Pessoas singulares: 650€ a 50.000€"
        ],
        correct: [1, 2]
    },
    {
        question: "Contraordenações relativas à atividade dos mutuantes. No caso dos mutuantes indique os valores das coimas:",
        options: [
            "Quando Pessoas singulares: 1500€ a 500.000€",
            "Quando Pessoas coletivas: 3000€ a 1.500.000€",
            "Quando Pessoas coletivas: 3500€ a 1.500.000€",
            "Quando Pessoas singulares: 1000€ a 500.000€"
        ],
        correct: [1, 3]
    },
    {
        question: "A tentativa é sempre punível, sendo a coima aplicável a prevista para a infração consumada, especialmente atenuada.",
        options: ["Não", "Sim"],
        correct: 1
    },
    {
        question: "A negligência não é punível.",
        options: ["Sim", "Não"],
        correct: 1
    }
];

const questionnaires = {
    "Default": allQuestions,  // Keep existing questions in a default questionnaire
};

let currentQuestionnaire = "Default";

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let wrongAnswers = [];

// DOM elements
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-button');
const resultsElement = document.getElementById('results');
const scoreElement = document.getElementById('score');
const wrongAnswersElement = document.getElementById('wrong-answers');
const currentQuestionSpan = document.getElementById('current-question');
const totalQuestionsSpan = document.getElementById('total-questions');
const progressElement = document.getElementById('progress');

// Initialize the quiz
function initQuiz(questionnaireName = null) {
    // If no questionnaire is selected, hide quiz interface and show only management section
    if (!questionnaireName) {
        document.getElementById('quiz-section').classList.remove('active');
        document.getElementById('management-section').classList.add('active');
        return;
    }
    
    if (!questionnaires[questionnaireName]) {
        alert("Questionário não encontrado!");
        return;
    }
    
    // Show quiz section and hide management section
    document.getElementById('quiz-section').classList.add('active');
    document.getElementById('management-section').classList.remove('active');
    
    // Rest of the initialization code
    currentQuestionnaire = questionnaireName;
    currentQuestions = [...questionnaires[questionnaireName]]
        .sort(() => Math.random() - 0.5)
        .slice(0, 20);
    
    currentQuestionIndex = 0;
    score = 0;
    wrongAnswers = [];
    
    resultsElement.style.display = 'none';
    questionElement.style.display = 'block';
    optionsElement.style.display = 'block';
    nextButton.style.display = 'block';
    showQuestion();
}

// Display the current question
function showQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    
    // Update question text
    questionElement.textContent = question.question;
    
    // Clear previous options
    optionsElement.innerHTML = '';
    
    // Add new options
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        if (Array.isArray(question.correct)) {
            optionElement.classList.add('multiple-selection');
        }
        optionElement.textContent = option;
        optionElement.onclick = () => selectOption(index);
        optionsElement.appendChild(optionElement);
    });
    
    // Reset next button
    nextButton.disabled = true;
    
    // Update progress using the correct elements
    currentQuestionSpan.textContent = currentQuestionIndex + 1;
    totalQuestionsSpan.textContent = currentQuestions.length;
}

// Handle option selection
function selectOption(index) {
    const question = currentQuestions[currentQuestionIndex];
    const options = optionsElement.getElementsByClassName('option');
    
    // If the question has multiple correct answers, allow multiple selections
    if (Array.isArray(question.correct)) {
        options[index].classList.toggle('selected');
        
        // Enable next button if at least one option is selected
        const hasSelection = Array.from(options).some(option => option.classList.contains('selected'));
        nextButton.disabled = !hasSelection;
    } else {
        // For single answer questions, keep the existing behavior
        Array.from(options).forEach(option => option.classList.remove('selected'));
        options[index].classList.add('selected');
        nextButton.disabled = false;
    }
}

// Handle next button click
nextButton.addEventListener('click', () => {
    const selectedOptions = Array.from(optionsElement.querySelectorAll('.option.selected'));
    const selectedIndices = selectedOptions.map(option => 
        Array.from(optionsElement.children).indexOf(option)
    );
    
    // Check if answer is correct
    const question = currentQuestions[currentQuestionIndex];
    if (Array.isArray(question.correct)) {
        // For multiple answer questions, check if all correct answers are selected and no incorrect ones
        const allCorrectSelected = question.correct.every(index => selectedIndices.includes(index));
        const noIncorrectSelected = selectedIndices.every(index => question.correct.includes(index));
        
        if (allCorrectSelected && noIncorrectSelected) {
            score++;
        } else {
            wrongAnswers.push({
                question: question.question,
                selectedAnswer: selectedIndices.map(i => question.options[i]).join(', '),
                correctAnswer: question.correct.map(i => question.options[i]).join(', ')
            });
        }
    } else {
        // For single answer questions, keep the existing behavior
        const selectedIndex = selectedIndices[0];
        if (selectedIndex === question.correct) {
            score++;
        } else {
            wrongAnswers.push({
                question: question.question,
                selectedAnswer: question.options[selectedIndex],
                correctAnswer: question.options[question.correct]
            });
        }
    }
    
    // Move to next question or show results
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
        showQuestion();
    } else {
        showResults();
    }
});

// Display quiz results
function showResults() {
    questionElement.style.display = 'none';
    optionsElement.style.display = 'none';
    nextButton.style.display = 'none';
    resultsElement.style.display = 'block';
    
    scoreElement.textContent = score;
    
    // Display wrong answers
    if (wrongAnswers.length > 0) {
        const wrongAnswersList = wrongAnswers.map(wrong => `
            <div style="margin-bottom: 20px;">
                <p><strong>Questão:</strong> ${wrong.question}</p>
                <p><strong>Sua resposta:</strong> ${wrong.selectedAnswer}</p>
                <p><strong>Resposta correta:</strong> ${wrong.correctAnswer}</p>
            </div>
        `).join('');
        
        wrongAnswersElement.innerHTML = `
            <h3>Questões que você errou:</h3>
            ${wrongAnswersList}
        `;
    } else {
        wrongAnswersElement.innerHTML = '<p>Parabéns! Você acertou todas as questões!</p>';
    }
}

// Initialize the quiz when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Don't initialize quiz automatically
    // Just update the questionnaire selects and show management section
    updateQuestionnaireSelects();
    document.getElementById('quiz-section').classList.remove('active');
    document.getElementById('management-section').classList.add('active');
});

function createQuestionnaire(name) {
    if (questionnaires[name]) {
        alert("A questionnaire with this name already exists!");
        return false;
    }
    questionnaires[name] = [];
    return true;
}

function addQuestionToQuestionnaire(questionnaireName, question, options, correct) {
    if (!questionnaires[questionnaireName]) {
        alert("Questionnaire not found!");
        return false;
    }

    const newQuestion = {
        question: question,
        options: options,
        correct: correct
    };

    questionnaires[questionnaireName].push(newQuestion);
    return true;
}

function updateQuestionnaireSelects() {
    const selects = ['questionnaire-select', 'questionnaire-select-take'];
    selects.forEach(selectId => {
        const select = document.getElementById(selectId);
        select.innerHTML = '';
        Object.keys(questionnaires).forEach(name => {
            const option = document.createElement('option');
            option.value = name;
            option.textContent = name;
            select.appendChild(option);
        });
    });
}

function handleCreateQuestionnaire() {
    const nameInput = document.getElementById('new-questionnaire-name');
    const name = nameInput.value.trim();
    
    if (!name) {
        alert("Por favor, insira um nome para o questionário!");
        return;
    }
    
    if (createQuestionnaire(name)) {
        nameInput.value = '';
        updateQuestionnaireSelects();
        alert("Questionário criado com sucesso!");
    }
}

function addOption() {
    const container = document.getElementById('options-container');
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.className = 'option-input';
    newInput.placeholder = `Opção ${container.children.length + 1}`;
    container.appendChild(newInput);
}

function handleAddQuestion() {
    const questionnaireName = document.getElementById('questionnaire-select').value;
    const questionText = document.getElementById('question-text').value.trim();
    const optionInputs = document.getElementsByClassName('option-input');
    const correctInput = document.getElementById('correct-answers').value;
    
    // Validate inputs
    if (!questionText) {
        alert("Por favor, insira a questão!");
        return;
    }
    
    // Get options
    const options = Array.from(optionInputs)
        .map(input => input.value.trim())
        .filter(value => value !== '');
    
    if (options.length < 2) {
        alert("Por favor, insira pelo menos duas opções!");
        return;
    }
    
    // Parse correct answers
    let correct;
    try {
        const corrects = correctInput.split(',').map(num => parseInt(num.trim()));
        correct = corrects.length === 1 ? corrects[0] : corrects;
        
        // Validate correct answers
        const maxIndex = Math.max(...(Array.isArray(correct) ? correct : [correct]));
        if (maxIndex >= options.length) {
            throw new Error("Invalid correct answer index");
        }
    } catch (e) {
        alert("Por favor, insira índices válidos para as respostas corretas!");
        return;
    }
    
    // Add question
    if (addQuestionToQuestionnaire(questionnaireName, questionText, options, correct)) {
        // Clear inputs
        document.getElementById('question-text').value = '';
        Array.from(optionInputs).forEach(input => input.value = '');
        document.getElementById('correct-answers').value = '';
        alert("Questão adicionada com sucesso!");
    }
}

function handleStartQuiz() {
    const questionnaireName = document.getElementById('questionnaire-select-take').value;
    if (!questionnaireName) {
        alert("Por favor, selecione um questionário!");
        return;
    }
    initQuiz(questionnaireName);
} 