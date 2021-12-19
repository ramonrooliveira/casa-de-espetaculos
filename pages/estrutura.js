import CoverImage from '../components/CoverImage'
import TextBlock from '../components/TextBlock'

export default function Estrutura () {
  return (
    <div>
      <CoverImage title="ESTRUTURA" image="estrutura-cover.jpeg" />
      {/* <TextBlock
        text={[
          "Sala Chaplin ",
          "* Espaço com  45 m2",
          "* Piso laminado ",
          "* Espelhos ",
          "* Internet Wi-Fi ",
          "* Caixa de som com Bluetooth e cabo auxiliar ",
          "* Quadro branco ",
          "* Ar condicionado ",
          "* Para atividades culturais práticas de até 10 pessoas ",
          "* Para treinamentos corporativos teóricos de até 15 pessoas",
        ]}
        classes="right primary overlap-previous"
      /> */}
      <hr/>

      <TextBlock
        text={[
          "Sala Chaplin ",
          "* Espaço com  45 m2",
          "* Piso laminado ",
          "* Espelhos ",
          "* Internet Wi-Fi ",
          "* Caixa de som com Bluetooth e cabo auxiliar ",
          "* Quadro branco ",
          "* Ar condicionado ",
          "* Para atividades culturais práticas de até 10 pessoas ",
          "* Para treinamentos corporativos teóricos de até 15 pessoas",
        ]}
        classes="left black overlap-next"
        title="Sala 1"
      />
      <img src="/sala-chaplin.jpeg" className="full-width-img full-height"/>
      <hr/>
      <TextBlock
        text={[
          "Sala Sótão ",
          "* Espaço amplo com 100 m2 ",
          "* Piso flutuante laminado ",
          "* Espelhos ",
          "* Internet Wi-Fi e a cabo alta velocidade fibra ótica ",
          "* Sistema de som com Bluetooth e cabo auxiliar ",
          "* Barras fixas e móveis para atividades de dança ",
          "* Ar condicionado ",
          "* Para atividades culturais práticas de até 18 pessoas ",
          "* Para atividades corporativas teóricas de até 30 pessoas",
        ]}
        classes="right primary overlap-next"
        title="Sala 2"
      />
      <img src="/sala2.jpeg" className="full-width-img full-height"/>
      <hr/>

      <TextBlock
        text={[
          "William Shakespeare Theatre ",
          "* Palco com 45 m2, sendo 7,5 m de largura e 6 m de profundidade com piso laminado claro ",
          "* Altura da boca de cena 3,60 m ",
          "* Altura da vara de iluminação e cenografia 4,50 m ",
          "* Rider Técnico com Refletores Led, Caixas acústicas profissionais, mesas controladoras de sonorização e iluminação, consulte disponibilidade de outros equipamentos", 
          "* Climatização com duas máquinas de ar condicionado de 60.000 Btu's cada ",
          "* Camarim com espelhos iluminados, com banheiro privativo e entrada direta no palco ",
          "* Platéia com capacidade para 88 pessoas e acessibilidade para PNE",
        ]}
        classes="left black overlap-next"
        title="Palco"
      />
      <img src="/palco-estrutura.jpeg" className="full-width-img full-height"/>

    </div>
  )
}
