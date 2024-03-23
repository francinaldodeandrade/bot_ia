import wwebjs from 'whatsapp-web.js';
const { Client, LocalAuth } = wwebjs;

const client = new Client({
    authStrategy: new LocalAuth()
});

import qrcode from 'qrcode-terminal'
client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

// ler os dados de conexão
const read_data =()=>{
    client.on('ready', () => {
        console.log('conectado com whatsapp Naldo');
        console.log(message.body);
    })
}

// criar mensagem para o app
const create_msg = () =>{ 

    client.on('message_create', message =>{
        if (message.body === oi) {
        client.sendMessage(message.from, 'olá')
        }
        })
 

 client.initialize()

}

// captura o contato das mensagem recebidas
const get_contacts = () => {

    client.on('message', async (msg) => {
         //console.log(message.body);
         let users = await msg.getContacts()
         console.log(`Remetente: ${users.shortName}`); 
    })

    client.initialize()

}

export default {
    read_data,
    create_msg,
    get_contacts
}