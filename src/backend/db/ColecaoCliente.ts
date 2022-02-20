import Cliente from "../../core/Cliente";
import ClienteRepository from "../../core/ClienteRepository";
import firebase from "../config";

export default class ColecaoCliente implements ClienteRepository{

    conversor = {
        toFirestore(cliente:Cliente){
            return{
                nome:cliente.getNome,
                idade: cliente.getIdade,
            }
        },
        fromFirestore(snapshot:firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions):Cliente{
            const dados = snapshot.data(options)
            return new Cliente(dados.nome, dados.idade, snapshot.id);
        }
    }

    async salvar(cliente: Cliente): Promise<Cliente> {
        if(cliente?.getId){
            await this.colecao().doc(cliente.getId).set(cliente);
            return cliente
        }else{
            const docRef = await this.colecao().add(cliente);
            const doc = await docRef.get();
            return doc.data()
        }
;    }

    async excluir(cliente: Cliente): Promise<void> {
        return this.colecao().doc(cliente.getId).delete()
    }

    async obterTodos(): Promise<Cliente[]> {
        const query = await this.colecao().get();
        return query.docs.map(doc => doc.data()) ?? []
    }

    colecao(){
        return firebase.firestore().collection('clientes').withConverter(this.conversor)
    }
}