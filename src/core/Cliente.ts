export default class Cliente{
    private id: string;
    private nome:string;
    private idade:number;

    constructor(nome:string, idade:number, id:string = null){
        this.nome = nome;
        this.idade = idade;
        this.id = id;
    }

    static vazio(){
        return new Cliente('', 0)
    }

    get getId(){
        return this.id
    }

    get getNome(){
        return this.nome
    }

    get getIdade(){
        return this.idade
    }
}