class Noticia{

  constructor(titulo, Data_de_publicação, resumo, Texto){
    this.titulo = titulo
    this.Data_de_publicação = Data_de_publicação
    this.resumo = resumo
    this.Texto = Texto
  }
  mostrarNoticia(){
  return this.titulo +"\n"+ this.Data_de_publicação + "\n" + "\n"+this.resumo + "\n" + "\n" + this.Texto
}
}
let noticia = new Noticia ("MORTE DOS MAMONAS ASSASSINAS","02/03/1996"," o grupo mamonas assasinas morrem com a queda de avião ","Na noite do dia 2 de março de 1996, um acidente aéreo na Serra da Cantareira matou os cinco integrantes da banda Mamonas Assassinas. “Quanta gente, quanta alegria”. Os shows dos Mamonas Assassinas faziam jus ao refrão de um de seus maiores sucessos, Chopis Centis.")
console.log(noticia.mostrarNoticia()) 