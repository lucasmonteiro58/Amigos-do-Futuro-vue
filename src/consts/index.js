export const backgrounds = ['bg-1', 'bg-2', 'bg-3', 'bg-4']

export const stages = [
  {
    title: 'stage-one',
    path: '/stage-one',
    image: 'album-1',
    imageOff: 'album-1-off',
    isAvailable: true,
    isComplete: false
  }
]

/**
 * ABAIXO ESTÁ UM EXEMPLO DE
 * COMO CRIAR O DIÁLOGO PARA
 * USAR COM O COMPONENTE Dialogue.vue
 */

// ver 2
// Agora tem um novo tipo 'background', onde não há diálogo nenhum, só o background
// e setas no canto inferior direito. (Caso queira alterar a posição use 'mini-arrows__position' em _layout.scss)
// Também é possível colocar áudio em qualquer parte do diálogo
// colocando dentro dos objectos em 'dialogs' e colocando nome do arquivo e extensão
// (eg. audio-1.mp3)
// também colocar todos os áudios dentro de @/assets/audios. Caso não exista, crie

export const prologueSceneOne = {
  dialogueType: 'duo',
  avatars: ['joao-pedro', 'bela', 'gabriel'],
  name: 'João Pedro',
  dialogs: [
    {
      name: 'João Pedro',
      darkedAvatar: 'bela',
      text:
        'Olá! Eu sou o <strong>João Pedro</strong>. Tenho 10 anos e adoro fazer uma coisa muito legal: Construir meus próprios brinquedos.'
    },
    {
      darkedAvatar: 'bela',
      text: 'Aqui é o <strong>João Pedro</strong> de novo.'
    },
    {
      dialogHidden: true,
      background: 'bg-3'
    },
    {
      inverted: true,
      darkedAvatar: 'joao-pedro',
      name: 'Bela',
      text: 'Tirei várias fotos dos brinquedos que já criei, olha só!',
      background: 'bg-2'
    },
    {
      avatars: ['bela'],
      text:
        'Eu quero organizar os meus brinquedos por nome. Por isso, preciso escolher a legenda correta para cada foto.',
      dialogueType: 'mono'
    },
    {
      text:
        'Você pode me ajudar? Arraste as legendas corretas para as imagens.',
      dialogueType: 'avatar'
    },
    {
      name: 'Gabriel',
      avatars: ['bela', 'gabriel'],
      dialogueType: 'duo',
      inverted: true,
      text: 'Eae! como tá?',
      background: 'bg-1'
    }
  ]
}

export const prologueTwoDialogue = [
  {
    dialogueType: 'duo', // 'mono', 'duo', 'avatar'
    hasFinalAnimation: true, // Se FALSE, chama a animação padrão do diálogo
    canPassDialogue: true, // Se TRUE, exibe o botão de 'pular' / 'avançar' durante o diálogo
    nextRoute: "prologue-two'" // Rota para o botão de pular diálogo
  },
  {
    nome: 'vitoria',
    fala: 'VAMOS LÁ, <strong>JOGADOR</strong>,<br /> SE PREPARE PRA AVENTURA!',
    audio: '',
    mainImage: {
      // image: require('@/assets/images/intro/mila-fala.png'),
      dark: false
    },
    subImage: {
      // image: require('@/assets/images/intro/vitoria-fala.png'),
      dark: true
    },
    flip: false
  },
  {
    nome: 'mila',
    fala: 'É HORA DE MISTURAR BRINCADEIRA COM CULTURA!',
    audio: '',
    mainImage: {
      // image: require('@/assets/images/intro/mila-fala.png'),
      dark: true
    },
    subImage: {
      // image: require('@/assets/images/intro/vitoria-fala.png'),
      dark: false
    },
    flip: true,
    animation: true
  }
]

/**
 * FIM DO EXEMPLO
 */

export const mila = [
  {
    fala:
      'OLÁ, _____.MEU NOME É CAMILA, MAS TODOS ME CHAMAM DE MILA.EU TENHO 6 ANOS E EU MORO NO BAIRRO VILA NOVA.',
    audio: ''
  },
  {
    fala:
      'EU ADORO GUARDAR AS MINHAS RECORDAÇÕES. VEJAM ALGUMAS FOTOS DO MEU ÁLBUM!',
    audio: ''
  },
  {
    fala:
      'EU ADORO BRINCAR DE PIPA E DE AMARELINHA. OS MEUS MELHORES AMIGOS SÃO A BELA, O GABRIEL, O JOÃO PEDRO E A VITÓRIA. AH! E A LUNA, MINHA GATINHA.',
    audio: ''
  },
  {
    fala:
      'AGORA QUE VOCÊS CONHECERAM UM POUCO MAIS SOBRE MIM, QUE TAL CONHECER OS ÁLBUNS DOS MEUS AMIGOS?',
    audio: ''
  },
  {
    fala:
      'ASSIM COMO EU, ELES CRIARAM ÁLBUNS PERSONALIZADOS COM SEUS GOSTOS.QUE TAL CONFERIR COMO FICARAM?',
    audio: ''
  },
  {
    fala:
      'ESSES SÃO OS ÁLBUNS DE FOTOS DOS MEUS AMIGOS. <strong>UM ÁLBUM DE RECORDAÇÕES</strong> GUARDA OS REGISTROS, EM FORMA DE FOTOS, DE MOMENTOS VIVIDOS PELAS PESSOAS.',
    audio: ''
  },
  {
    fala:
      'ÀS VEZES, OS ÁLBUNS SÃO ACOMPANHADOS DE <strong>LEGENDAS</strong>, QUE TRAZEM AS <strong>DESCRIÇÕES DAS FOTOS</strong>.',
    audio: ''
  },
  {
    fala:
      'AGORA QUE SABEMOS UM POUCO MAIS SOBRE ÁLBUNS, VAMOS COMEÇAR PELO ÁLBUM DO JOÃO PEDRO?',
    audio: ''
  },
  {
    fala: 'PARABÉNS! VOCÊ CONHECEU TODOS OS ÁLBUNS DA TURMA DA MILA! ',
    audio: ''
  },
  {
    fala:
      'AGORA, VAMOS USAR A CRIATIVIDADE PARA COLAR OS ADESIVOS QUE VOCÊ CONQUISTOU EM UMA FOTO DA TURMA?',
    audio: ''
  },
  {
    fala: 'VAMOS LÁ!',
    audio: ''
  }
]

export const joaoPedro = [
  {
    fala:
      'OLÁ! EU SOU O <strong>JOÃO PEDRO</strong> .TENHO 10 ANOS E ADORO FAZER UMA COISA MUITO LEGAL: CONSTRUIR MEUS PRÓPRIOS BRINQUEDOS.',
    audio: ''
  },
  {
    fala: 'TIREI VÁRIAS FOTOS DOS BRINQUEDOS QUE JÁ CRIEI, OLHA SÓ!',
    audio: ''
  },
  {
    fala:
      'EU QUERO ORGANIZAR OS MEUS BRINQUEDOS POR NOME. POR ISSO, PRECISO ESCOLHER A LEGENDA CORRETA PARA CADA FOTO.',
    audio: ''
  },
  {
    fala: 'VOCÊ PODE ME AJUDAR? ARRASTE AS LEGENDAS CORRETAS PARA AS IMAGENS.',
    audio: ''
  },
  {
    fala: 'NOSSA! O ÁLBUM FICOU MUITO MANEIRO. ADOREI!',
    audio: ''
  },
  {
    fala: 'ALGUMA LEGENDA ESTÁ NO LUGAR ERRADO! VAMOS TENTAR NOVAMENTE?',
    audio: ''
  },
  {
    fala:
      'QUE LEGAL! VOCÊ GANHOU UM ADESIVO PARA USAR AO FINAL DESSA ORGANIZAÇÃO. ELE ESTARÁ GUARDADO AQUI.',
    audio: ''
  },
  {
    fala:
      'VAMOS AJUDAR MINHA AMIGA ISABELA A ORGANIZAR AS FOTOS DAS PLANTAS QUE ELA CUIDA?',
    audio: ''
  }
]

export const bela = [
  {
    fala:
      'OLÁ! EU SOU A ISABELA, MAS MEUS AMIGOS ME CHAMAM DE BELA. CONHECI MILA E OS OUTROS NO BAIRRO VILA NOVA.',
    audio: ''
  },
  {
    fala:
      'EU ADORO CUIDAR DE PLANTAS. NA MINHA CASA, EU TENHO UM JARDIM E JÁ TIREI VÁRIAS FOTOS DELE.',
    audio: ''
  },
  {
    fala:
      'ESTOU ORGANIZANDO AS FOTOS DAS MINHAS PLANTAS POR NOME. RESOLVI FAZER UMA BRINCADEIRA: ESCOLHER UMA PLANTA QUE COMEÇA COM A MESMA SÍLABA INICIAL DO MEU APELIDO. ',
    audio: ''
  },
  {
    fala:
      'VOCÊ PODE ME AJUDAR? ARRASTE A IMAGEM COM A LEGENDA CORRETA PARA O MEU ÁLBUM.',
    audio: ''
  },
  {
    fala: 'É ISSO AÍ! OBRIGADA PELA AJUDA!',
    audio: ''
  },
  {
    fala:
      'HUMM. ESSA PLANTA NÃO COMEÇA COM A MESMA SÍLABA INICIAL DO MEU APELIDO. VAMOS TENTAR NOVAMENTE?',
    audio: ''
  },
  {
    fala: 'OLHA SÓ, MAIS UM ADESIVO PARA BRINCAR AO FINAL DESSA ORGANIZAÇÃO.',
    audio: ''
  },
  {
    fala:
      'VAMOS AJUDAR O MEU AMIGO GABRIEL A ORGANIZAR AS FOTOS DE ALGUMAS RECEITAS QUE A MÃE DELE FAZ?',
    audio: ''
  }
]

export const gabriel = [
  {
    fala:
      'OLÁ! EU SOU O <strong>GABRIEL</strong>!  EU TENHO 9 ANOS E ADORO INVENTAR NOVAS RECEITAS PARA AJUDAR A MINHA MÃE NA LANCHONETE DELA.',
    audio: ''
  },
  {
    fala:
      'ESSAS SÃO AS FOTOS DE ALGUMAS RECEITAS QUE JÁ FIZEMOS. UMA MAIS GOSTOSA DO QUE A OUTRA!',
    audio: ''
  },
  {
    fala:
      'ESTOU ORGANIZANDO AS FOTOS DAS RECEITAS. A BELA PROPÔS UM DESAFIO: COLOCAR, NESSA PÁGINA DO MEU ÁLBUM, UMA FOTO DE UMA RECEITA QUE TEM A <strong>ÚLTIMA SÍLABA IGUAL</strong> A DE <strong>EMPADA</strong>.',
    audio: ''
  },
  {
    fala: 'VOCÊ PODE ME AJUDAR?',
    audio: ''
  },
  {
    fala:
      'MANDOU BEM! OBRIGADO PELA AJUDA! A BELA NEM VAI ACREDITAR QUE CONSEGUI ACERTAR O DESAFIO!',
    audio: ''
  },
  {
    fala:
      'ACHO QUE ESSA NÃO É A RESPOSTA CORRETA… QUE TAL TENTARMOS MAIS UMA VEZ?',
    audio: ''
  },
  {
    fala: 'OBA! OUTRO ADESIVO!',
    audio: ''
  },
  {
    fala:
      'AGORA, VAMOS AJUDAR A VITÓRIA A ORGANIZAR AS HISTÓRIAS PREFERIDAS DELA?',
    audio: ''
  }
]

export const vitoria = [
  {
    fala:
      'OIEE! EU SOU A <strong>VITÓRIA</strong>. TENHO 9 ANOS E AMO LER E INVENTAR POEMAS E HISTÓRIAS! QUEM ME ENSINOU ESSE HÁBITO FOI A MINHA AVÓ EULÁLIA! ',
    audio: ''
  },
  {
    fala:
      'ORGANIZEI AS FOTOS DAS HISTÓRIAS MAIS CONTADAS POR MINHA AVÓ EM UM ÁLBUM. ',
    audio: ''
  },
  {
    fala:
      'O GABRIEL PROPÔS UM DESAFIO: COLOCAR, NESTA PÁGINA, A FOTO DE UMA <strong>HISTORINHA</strong> QUE TENHA A MESMA SÍLABA QUE HÁ <strong>NO MEIO</strong> DO NOME DA MINHA AVÓ.',
    audio: ''
  },
  {
    fala:
      'COMO RESOLVER ESSE DESAFIO? CLIQUE PARA OUVIR O NOME DA MINHA AVÓ MAIS UMA VEZ.',
    audio: ''
  },
  {
    fala:
      'É ISSO AÍ! OBRIGADA PELA AJUDA! MINHA AVÓ VAI FICAR ORGULHOSA DE MIM!',
    audio: ''
  },
  {
    fala: 'PARECE QUE ESSA NÃO É A RESPOSTA CORRETA… VAMOS TENTAR DE NOVO?',
    audio: ''
  },
  {
    fala: 'OPA! MAIS UM ADESIVO PARA BRINCAR!',
    audio: ''
  }
]
