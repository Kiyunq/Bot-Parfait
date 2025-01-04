require('dotenv').config();  // Charge les variables d'environnement depuis .env

module.exports = {
    app: {
        px: '+',
        token: process.env.DISCORD_TOKEN,  // Le token est récupéré depuis .env
        owners: '1268356076504617037',
        funny: '1268356076504617037',
        color: '#00001',
        footer: '[+] Wazaaa',
        maxserver: '3',
        everyoneMention: false,
        hostedBy: true,
    }
};
