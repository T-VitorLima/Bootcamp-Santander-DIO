// Como podemos melhorar o esse código usando TS? 

enum Jobs {
    Atriz,
    Padeiro,
    Engenheiro
}

interface person {
    nome: string,
    idade: number,
    profissao?: Jobs

}

const person1 = {
    nome: "Maria",
    idade: 29,
    profissao: Jobs.Atriz
};

const person2 = {
    nome: "Roberto",
    idade: 19,
    profissao: Jobs.Padeiro
};

const person3 = {
    nome: "Laura",
    idade: 32,
    profissao: Jobs.Atriz
};

const person4 = {
    nome: "Carlos",
    idade: 19,
    profissao: Jobs.Padeiro
};

const person5 = {
    nome: "Jean",
    idade: 25,
    profissao: Jobs.Engenheiro
};

