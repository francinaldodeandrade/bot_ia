import wwebjs from 'whatsapp-web.js';
const { Client, LocalAuth } = wwebjs;

const client = new Client({
    authStrategy: new LocalAuth()
});

import qrcode from 'qrcode-terminal'

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
    //console.log('QR RECEIVED', qr);
});

// ler os dados de conexão
const read_data =()=>{
    client.on('ready', () => {
        console.log('conectado com whatsapp Naldo Andrade');
        
    })

    client.on('message_create', message => {
	   console.log(message.body);
    });

    client.on('message_create', async (message) => {
        if (message.body !== '') {
            let user = await message.getContact()
            await client.sendMessage(message.from, `Olá ${user.name} em que posso ajudá-lo`);
           
        
        }
    });

    function delay(time) {
        return new Promise ((resolve) =>{
            setTimeout(resolve, time)
        })
    }
    
    client.initialize()
}

export default {read_data}