# bot_ia

# // função para leitura de dados

const leitura = ()=>{client.on('ready', () => {
console.log('conectado com whatsapp Naldo');
});}

# // função para buscar os dados dos remetentes

client.on('message', async (msg) => {
const readMsg = await msg.getContacts()
console.log(message.body);
let users = readMsg
console.log(`Remetente: ${users.shortName}`);
});

# // função para enviar mensagem

client.on('message_create', message =>{
if (message.body === oi) {
client.sendMessage(message.from, 'olá')
}
})

# // função para mencionar usuários

client.on('message', async (msg) => {
const chat = await msg.getChat();
let user = await msg.getContact();

    await chat.sendMessage(`Hello @${user.id.user}`, {
        mentions: [user]
       });
    })

# /_-------log em usuários ---------_/

PrivateContact {
id: {
server: 'c.us',
user: '558499035388',
\_serialized: '558499035388@c.us'
},
number: '558499035388',
isBusiness: false,
isEnterprise: undefined,
labels: undefined,
name: 'Silvio Pessoal',
pushname: 'Silvio',
sectionHeader: undefined,
shortName: 'Silvio',
statusMute: undefined,
type: 'in',
verifiedLevel: undefined,
verifiedName: undefined,
isMe: false,
isUser: true,
isGroup: false,
isWAContact: true,
isMyContact: true,
isBlocked: false
}
As pessoas mais motivadas são aquelas que amam o que fazem, porque a paixão não nos deixa perder a animação!
PrivateContact {
id: {
server: 'c.us',
user: '558499035388',
\_serialized: '558499035388@c.us'
},
number: '558499035388',
isBusiness: false,
isEnterprise: undefined,
labels: undefined,
name: 'Silvio Pessoal',
pushname: 'Silvio',
sectionHeader: undefined,
shortName: 'Silvio',
statusMute: undefined,
type: 'in',
verifiedLevel: undefined,
verifiedName: undefined,
isMe: false,
isUser: true,
isGroup: false,
isWAContact: true,
isMyContact: true,
isBlocked: false
}
Oi
BusinessContact {
businessProfile: {
id: {
server: 'c.us',
user: '558399094654',
\_serialized: '558399094654@c.us'
},
dataSource: 'server',
tag: '829704850',
description: 'Agende seu Horário',
categories: [ [Object] ],
profileOptions: { commerceExperience: 'catalog', cartEnabled: true },
email: null,
website: [],
latitude: null,
longitude: null,
businessHours: { config: [Object], timezone: 'America/Fortaleza' },
address: null,
fbPage: {},
igProfessional: {},
isProfileLinked: false,
isProfileLocked: true,
coverPhoto: null,
automatedType: 'unknown',
welcomeMsgProtocolMode: 'none',
prompts: null,
commandsDescription: null,
commands: null
},
id: {
server: 'c.us',
user: '558399094654',
\_serialized: '558399094654@c.us'
},
number: '558399094654',
isBusiness: true,
isEnterprise: false,
labels: undefined,
name: 'Amor Leila',
pushname: 'leilamadian esteticabeleza',
sectionHeader: undefined,
shortName: 'Amor Leila',
statusMute: undefined,
type: 'in',
verifiedLevel: 0,
verifiedName: 'leilamadian esteticabeleza',
isMe: false,
isUser: true,
isGroup: false,
isWAContact: true,
isMyContact: true,
isBlocked: false
}
Já encerramos por hoje obrigado e boa noite a todos
BusinessContact {
businessProfile: {
id: {
server: 'c.us',
user: '558398652082',
\_serialized: '558398652082@c.us'
},
dataSource: 'server',
tag: '1478058249',
description: 'Pastelaria',
categories: [ [Object] ],
profileOptions: { commerceExperience: 'none', cartEnabled: true },
email: null,
website: [],
latitude: null,
longitude: null,
businessHours: null,
address: 'Bairro Maia',
fbPage: {},
igProfessional: {},
isProfileLinked: false,
isProfileLocked: true,
coverPhoto: null,
automatedType: 'unknown',
welcomeMsgProtocolMode: 'none',
prompts: null,
commandsDescription: null,
commands: null
},
id: {
server: 'c.us',
user: '558398652082',
\_serialized: '558398652082@c.us'
},
number: '558398652082',
isBusiness: true,
isEnterprise: false,
labels: undefined,
name: 'Cliente Joao Do Pastel',
pushname: 'João Bosco',
sectionHeader: undefined,
shortName: 'Cliente Joao',
statusMute: undefined,
type: 'in',
verifiedLevel: 0,
verifiedName: 'João Bosco',
isMe: false,
isUser: true,
isGroup: false,
isWAContact: true,
isMyContact: true,
isBlocked: false
}
[nodemon] restarting due to changes...
[nodemon] starting `node index.js`
conectado com whatsapp Naldo

_/----log na biblioteca wweb.js ----------_/
