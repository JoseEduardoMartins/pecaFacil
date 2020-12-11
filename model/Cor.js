class Cor {
    constructor(id){
        this.id = id;
    }
    constructor(cor, situacao){
        this.cor = cor;
        this.situacao = situacao
    }
    constructor(Cor){
        this.id = Cor.id
    }

    set id(id){
        this.id = id;
    }
    get id(){
        return id;
    }

    set cor(cor){
        this.cor = cor;
    }
    get cor(){
        return cor;
    }

    set situacao(situacao){
        this.situacao = situacao;
    }
    get situacao(){
        return this.situacao
    }
}