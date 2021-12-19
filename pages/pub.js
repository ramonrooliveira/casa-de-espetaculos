import CoverImage from '../components/CoverImage'
import TextBlock from '../components/TextBlock'


export default function Pub () {
  return (
    <div>
      <CoverImage title="PUB691" image="pub-publico.jpeg" />
      {/* <TextBlock
        icon="instagram"
        iconSize="64px"
        text="@pubdavisconde691"
        classes="right primary overlap-next small-card"
      /> */}
      <TextBlock
        text={["Pub (pronuncia-se pâb) abreviação do inglês public house. O Pub691 (pronuncia-se pâb 691) assim como os típicos Pubs da Grã-Bretanha, é um local para trocar ideias enquanto se bebe uma cerveja artesanal com petiscos.",
        "O Pub691 chama a atenção pelo seu estilo rústico remetendo a idade medieval estando abrigado em uma construção antiga, de 1929, preza pela decoração rústica e o rock é o som predominante. Diferente de um bar, o Pub691 é um ambiente comunitário e familiar e com uma boa variedade de bebidas, sendo a cerveja a bebida predominante e por isso há sempre uma torneira com Ale. ",
        "O horário de fechar é reconhecido por toques de sino. O primeiro toque no sino significa que, se você pretende beber outro pint de cerveja, este deve ser pedido neste momento. Quanto o sino tocar duas vezes significa que você deve rapidamente terminar de beber e deixar o local."]}
        classes="left black"
      />
      <img src="/pub-cardapio.jpeg" className="full-width-img full-height"/>
      <TextBlock
        text={[
          "Venha apreciar uma excelente cerveja artesanal e espantar a fome, apresentamos um cardápio com porções individuais e para compartilhar, viva uma experiência completa!",
        "•	Porções individuais: são opções como batatas fritas, pães de queijo, empanadas de carne picante, carne gaúcha e de espinafre, empada de charque, torta de frango e saladas;",
        "•	Porções para compartilhar: são as opções mais trabalhadas e artesanais com acompanhamentos, bruschettas, sopas cremosas e tábua de frios.",
        "•	Sobremesas: são porções individuais  como pão de mel e sanduiche de sorvete", "Basicamente, são pratos completos feitos realmente para alimentar e não para espantar a fome, mesmo que sejam voltadas para o estilo petiscos artesanais!"
      ]}
        classes="right primary"
      />
      {/* <TextBlock
        icon="instagram"
        iconSize="130px"
        text="@pubdavisconde691"
        classes="left black overlap-previous small-card"
      /> */}
    </div>
  )
}
